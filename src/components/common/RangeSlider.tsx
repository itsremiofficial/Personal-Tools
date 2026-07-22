"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import {
  type KeyboardEvent,
  type PointerEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib";

const SPRING_GLIDE = { stiffness: 700, damping: 50, mass: 0.5 } as const;
const SPRING_BOUNCY = {
  type: "spring",
  stiffness: 500,
  damping: 14,
  mass: 0.7,
} as const;

export interface RangeSliderProps {
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  values?: number[];
  showTicks?: boolean;
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
  orientation?: "horizontal" | "vertical";
}

const clamp = (v: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, v));

export function RangeSlider({
  value,
  defaultValue = 0,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  values: snapValues,
  showTicks = true,
  disabled = false,
  className,
  "aria-label": ariaLabel,
  orientation = "horizontal",
}: RangeSliderProps) {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [internal, setInternal] = useState(defaultValue);
  const [active, setActive] = useState(false);
  const controlled = value !== undefined;
  const isVertical = orientation === "vertical";

  const useSnap = useMemo(
    () => snapValues && snapValues.length > 0,
    [snapValues],
  );

  const nearestSnap = useCallback(
    (v: number) => {
      if (!snapValues || snapValues.length === 0) return v;
      let best = snapValues[0];
      let bestDist = Infinity;
      for (let i = 0; i < snapValues.length; i++) {
        const d = Math.abs(snapValues[i] - v);
        if (d < bestDist) {
          bestDist = d;
          best = snapValues[i];
        }
      }
      return best;
    },
    [snapValues],
  );

  const snapIndex = useCallback(
    (v: number) => {
      if (!snapValues || snapValues.length === 0) return -1;
      return snapValues.indexOf(nearestSnap(v));
    },
    [snapValues, nearestSnap],
  );

  const current = useSnap
    ? clamp(nearestSnap(controlled ? value : internal), min, max)
    : clamp(controlled ? value : internal, min, max);

  const percent = useSnap
    ? snapValues
      ? (snapIndex(current) / (snapValues.length - 1)) * 100
      : ((current - min) / (max - min)) * 100
    : ((current - min) / (max - min)) * 100;

  const target = useMotionValue(percent);
  useEffect(() => {
    target.set(percent);
  }, [percent, target]);
  const smooth = useSpring(target, SPRING_GLIDE);
  const pos = reduce ? target : smooth;

  const left = useMotionTemplate`${pos}%`;
  const thumbX = useTransform(pos, (p) => `${-p}%`);

  const fillHeight = useMotionTemplate`${pos}%`;
  const thumbBottom = useMotionTemplate`${pos}%`;
  const thumbY = useTransform(pos, (p) => `${-p}%`);

  const ticks = useMemo(() => {
    if (!showTicks) return [];
    if (useSnap && snapValues) return snapValues;
    const steps = Math.floor((max - min) / step);
    if (steps > 0 && steps <= 50) {
      return Array.from({ length: steps + 1 }, (_, i) => min + i * step);
    }
    return [];
  }, [showTicks, useSnap, snapValues, min, max, step]);

  const commit = useCallback(
    (next: number) => {
      const snapped = useSnap
        ? nearestSnap(next)
        : clamp(Math.round((next - min) / step) * step + min, min, max);
      const clamped = useSnap ? clamp(snapped, min, max) : snapped;
      if (!controlled) setInternal(clamped);
      onValueChange?.(clamped);
    },
    [controlled, onValueChange, min, max, step, useSnap, nearestSnap],
  );

  const valueFromPointer = useCallback(
    (clientX: number, clientY: number) => {
      const rect = trackRef.current?.getBoundingClientRect();
      if (!rect) return current;
      let ratio: number;
      if (isVertical) {
        ratio = 1 - clamp((clientY - rect.top) / rect.height, 0, 1);
      } else {
        ratio = clamp((clientX - rect.left) / rect.width, 0, 1);
      }

      if (useSnap && snapValues) {
        const idx = Math.round(ratio * (snapValues.length - 1));
        return snapValues[clamp(idx, 0, snapValues.length - 1)];
      }
      return min + ratio * (max - min);
    },
    [current, min, max, isVertical, useSnap, snapValues],
  );

  const onPointerDown = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (disabled) return;
      event.currentTarget.setPointerCapture(event.pointerId);
      setActive(true);
      commit(valueFromPointer(event.clientX, event.clientY));
    },
    [disabled, commit, valueFromPointer],
  );

  const onPointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (!active || disabled) return;
      commit(valueFromPointer(event.clientX, event.clientY));
    },
    [active, disabled, commit, valueFromPointer],
  );

  const endDrag = useCallback((event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.releasePointerCapture?.(event.pointerId);
    setActive(false);
  }, []);

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (disabled) return;

      if (useSnap && snapValues) {
        const idx = snapIndex(current);
        const map: Record<string, number> = {
          ...(isVertical
            ? { ArrowUp: idx - 1, ArrowDown: idx + 1 }
            : { ArrowRight: idx + 1, ArrowLeft: idx - 1 }),
          Home: 0,
          End: snapValues.length - 1,
        };
        if (event.key in map) {
          event.preventDefault();
          commit(snapValues[clamp(map[event.key], 0, snapValues.length - 1)]);
        }
        return;
      }

      const map: Record<string, number> = {
        ...(isVertical
          ? { ArrowUp: current + step, ArrowDown: current - step }
          : { ArrowRight: current + step, ArrowLeft: current - step }),
        Home: min,
        End: max,
      };
      if (event.key in map) {
        event.preventDefault();
        commit(map[event.key]);
      }
    },
    [
      disabled,
      current,
      step,
      min,
      max,
      commit,
      isVertical,
      useSnap,
      snapValues,
      snapIndex,
    ],
  );

  const tickPosition = useCallback(
    (t: number) => {
      if (useSnap && snapValues) {
        const idx = snapValues.indexOf(t);
        return (idx / (snapValues.length - 1)) * 100;
      }
      return ((t - min) / (max - min)) * 100;
    },
    [useSnap, snapValues, min, max],
  );

  if (isVertical) {
    return (
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className={cn(
          "relative flex w-8 h-44 touch-none select-none items-end overflow-hidden rounded-full bg-muted",
          disabled
            ? "pointer-events-none opacity-50"
            : "cursor-grab active:cursor-grabbing",
          className,
        )}
      >
        <motion.div
          className="absolute inset-x-0 bottom-0 bg-foreground/15 rounded-full"
          style={{ height: fillHeight }}
        />

        <div className="pointer-events-none absolute inset-0">
          {ticks.map((t) => {
            const tp = tickPosition(t);
            return (
              <span
                key={t}
                className="absolute left-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/25"
                style={{ bottom: `${tp}%` }}
              />
            );
          })}
        </div>

        <motion.div
          role="slider"
          tabIndex={disabled ? -1 : 0}
          aria-label={ariaLabel}
          aria-valuemin={useSnap && snapValues ? snapValues[0] : min}
          aria-valuemax={
            useSnap && snapValues ? snapValues[snapValues.length - 1] : max
          }
          aria-valuenow={current}
          aria-orientation="vertical"
          aria-disabled={disabled || undefined}
          onKeyDown={onKeyDown}
          animate={reduce ? undefined : { scaleX: active ? 1.35 : 1 }}
          transition={SPRING_BOUNCY}
          className="absolute left-1/2 h-1.5 w-5 -translate-x-1/2 rounded-sm bg-foreground shadow-sm outline-none ring-foreground/30 focus-visible:ring-4"
          style={{ bottom: thumbBottom, y: thumbY }}
        />
      </div>
    );
  }

  return (
    <div
      ref={trackRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className={cn(
        "relative flex h-10 w-full touch-none select-none items-center overflow-hidden rounded-xl bg-muted",
        disabled
          ? "pointer-events-none opacity-50"
          : "cursor-grab active:cursor-grabbing",
        className,
      )}
    >
      <motion.div
        className="absolute inset-y-0 left-0 bg-foreground/15 rounded-lg"
        style={{ width: left }}
      />

      <div className="pointer-events-none absolute inset-0">
        {ticks.map((t) => {
          const tp = tickPosition(t);
          return (
            <span
              key={t}
              className="absolute top-1/2 w-px h-2/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/15"
              style={{ left: `${tp}%` }}
            />
          );
        })}
      </div>

      <motion.div
        role="slider"
        tabIndex={disabled ? -1 : 0}
        aria-label={ariaLabel}
        aria-valuemin={useSnap && snapValues ? snapValues[0] : min}
        aria-valuemax={
          useSnap && snapValues ? snapValues[snapValues.length - 1] : max
        }
        aria-valuenow={current}
        aria-disabled={disabled || undefined}
        onKeyDown={onKeyDown}
        animate={reduce ? undefined : { scaleY: active ? 1.35 : 1 }}
        transition={SPRING_BOUNCY}
        className="absolute top-1/2 h-5 w-1.5 rounded-sm bg-foreground shadow-sm outline-none ring-foreground/30 focus-visible:ring-4"
        style={{ left, x: thumbX, y: "-50%" }}
      />
    </div>
  );
}
