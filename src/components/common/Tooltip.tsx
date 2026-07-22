"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";
import {
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { EASE_OUT } from "@/lib/ease";
import { cn } from "@/lib";

type Side = "top" | "right" | "bottom" | "left";

interface TooltipProps {
  trigger?: ReactNode;
  content?: ReactNode;
  children?: ReactNode;
  side?: Side;
  sideOffset?: number;
  className?: string;
  delayDuration?: number;
  align?: string;
}

const anchorTransform: Record<Side, string> = {
  top: "translate(-50%, -100%)",
  bottom: "translate(-50%, 0)",
  left: "translate(-100%, -50%)",
  right: "translate(0, -50%)",
};

const transformOrigin: Record<Side, string> = {
  top: "center bottom",
  bottom: "center top",
  left: "right center",
  right: "left center",
};

const offsetFrom: Record<Side, { x?: number; y?: number }> = {
  top: { y: 8 },
  bottom: { y: -8 },
  left: { x: 8 },
  right: { x: -8 },
};

function buildVariants(side: Side): Variants {
  const o = offsetFrom[side];
  return {
    initial: {
      opacity: 0,
      scale: 0.9,
      filter: "blur(5px)",
      x: o.x ?? 0,
      y: o.y ?? 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 380,
        damping: 30,
        mass: 0.7,
        opacity: { duration: 0.14, ease: EASE_OUT },
        filter: { duration: 0.18, ease: EASE_OUT },
      },
    },
    exit: {
      opacity: 0,
      scale: 0.94,
      filter: "blur(3px)",
      x: (o.x ?? 0) * 0.6,
      y: (o.y ?? 0) * 0.6,
      transition: { duration: 0.12, ease: EASE_OUT },
    },
  };
}

const REDUCED_VARIANTS: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.14, ease: EASE_OUT } },
  exit: { opacity: 0, transition: { duration: 0.1, ease: EASE_OUT } },
};

const WARM_WINDOW_MS = 300;
let lastHiddenAt = 0;

export const Tooltip = ({
  trigger,
  content,
  children,
  side = "top",
  sideOffset = 8,
  delayDuration = 120,
  className,
}: TooltipProps) => {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(
    null,
  );
  const id = useId();
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const anchorRef = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();

  const place = useCallback(() => {
    const el = anchorRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const point: Record<Side, { top: number; left: number }> = {
      top: { top: r.top - sideOffset, left: cx },
      bottom: { top: r.bottom + sideOffset, left: cx },
      left: { top: cy, left: r.left - sideOffset },
      right: { top: cy, left: r.right + sideOffset },
    };
    setCoords(point[side]);
  }, [side, sideOffset]);

  const show = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    const warm = Date.now() - lastHiddenAt < WARM_WINDOW_MS;
    timer.current = setTimeout(
      () => {
        place();
        setOpen(true);
      },
      warm ? 0 : delayDuration,
    );
  }, [delayDuration, place]);

  const hide = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    if (open) lastHiddenAt = Date.now();
    setOpen(false);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onMove = () => place();
    window.addEventListener("scroll", onMove, true);
    window.addEventListener("resize", onMove);
    return () => {
      window.removeEventListener("scroll", onMove, true);
      window.removeEventListener("resize", onMove);
    };
  }, [open, place]);

  const variants = useMemo(
    () => (reduce ? REDUCED_VARIANTS : buildVariants(side)),
    [reduce, side],
  );

  const triggerEl = trigger || children;
  if (!isValidElement(triggerEl)) return triggerEl;

  const clonedTrigger = cloneElement(
    triggerEl as ReactElement<Record<string, unknown>>,
    {
      onMouseEnter: show,
      onMouseLeave: hide,
      onFocus: show,
      onBlur: hide,
      "aria-describedby": id,
    },
  );

  return (
    <>
      <span ref={anchorRef} className="relative flex w-full">
        {clonedTrigger}
      </span>
      {typeof document !== "undefined"
        ? createPortal(
            <AnimatePresence>
              {open && coords ? (
                <span
                  aria-hidden
                  className="pointer-events-none fixed z-[9999]"
                  style={{
                    top: coords.top,
                    left: coords.left,
                    transform: anchorTransform[side],
                  }}
                >
                  <motion.span
                    id={id}
                    role="tooltip"
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    style={{ transformOrigin: transformOrigin[side] }}
                    className={cn(
                      "block whitespace-nowrap rounded-3xl border border-border bg-background/70 backdrop-blur-lg px-2.5 py-1 text-xs font-medium text-foreground shadow-lg",
                      className,
                    )}
                  >
                    {content || children}
                  </motion.span>
                </span>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </>
  );
};

Tooltip.displayName = "Tooltip";
