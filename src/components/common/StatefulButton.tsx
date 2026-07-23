import { useState, useCallback, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button, type ButtonProps } from "./Button";
import { cn } from "@/lib";

export type ButtonState = "idle" | "loading" | "done";

interface StatefulButtonProps
  extends Omit<ButtonProps, "children" | "onClick" | "disabled"> {
  idleIcon?: ReactNode;
  doneIcon?: ReactNode;
  loadingIcon?: ReactNode;
  idleLabel: string;
  loadingLabel: string;
  doneLabel: string;
  onAction: () => void;
  loadingDuration?: number;
  doneDuration?: number;
  doneClassName?: string;
  minWidth?: string;
  labelClassName?: string;
}

const defaultLoadingIcon = (
  <motion.span
    className="flex"
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
  >
    <svg
      className="size-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
        strokeLinecap="round"
      />
    </svg>
  </motion.span>
);

const defaultDoneIcon = (
  <svg
    className="size-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const StatefulButton = ({
  idleIcon,
  doneIcon,
  loadingIcon,
  idleLabel,
  loadingLabel,
  doneLabel,
  onAction,
  loadingDuration = 700,
  doneDuration = 1500,
  doneClassName,
  minWidth = "10ch",
  className,
  labelClassName,
  ...buttonProps
}: StatefulButtonProps) => {
  const [state, setState] = useState<ButtonState>("idle");

  const handleClick = useCallback(() => {
    if (state !== "idle") return;
    setState("loading");
    onAction();
    setTimeout(() => setState("done"), loadingDuration);
    setTimeout(() => setState("idle"), loadingDuration + doneDuration);
  }, [state, onAction, loadingDuration, doneDuration]);

  return (
    <Button
      {...buttonProps}
      onClick={handleClick}
      disabled={state !== "idle"}
      className={cn(className)}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={state}
          initial={{ opacity: 0, y: 8, filter: "blur(2px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -8, filter: "blur(2px)" }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-1.5 justify-center select-none"
          style={{ minWidth }}
        >
          {state === "done" ? (
            <span className={cn("flex items-center gap-1.5", doneClassName)}>
              {doneIcon ?? defaultDoneIcon}
              <span className={labelClassName}>{doneLabel}</span>
            </span>
          ) : (
            <>
              {state === "idle" && idleIcon}
              {state === "loading" && (loadingIcon ?? defaultLoadingIcon)}
              <span className={labelClassName}>
                {state === "idle" ? idleLabel : loadingLabel}
              </span>
            </>
          )}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
};
