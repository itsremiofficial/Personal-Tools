import { useState, useEffect } from "react";
import {
  useMotionValue,
  useTransform,
  MotionValue,
  animate,
} from "framer-motion";

interface UseSmoothCornersResult {
  progress: MotionValue<number>;
  smoothCorners: MotionValue<string>;
  workletLoaded: boolean;
  updateProgress: (value: number) => void;
}

interface CSS {
  paintWorklet: {
    addModule: (url: string) => Promise<void>;
  };
}

const WORKLET_URL = "https://www.unpkg.com/smooth-corners";
let isWorkletLoaded = false;

// Initialize worklet globally
if (typeof window !== "undefined" && "paintWorklet" in CSS) {
  (CSS as any).paintWorklet
    .addModule(WORKLET_URL)
    .then(() => {
      isWorkletLoaded = true;
    })
    .catch(console.error);
}

export const useSmoothCorners = (
  initialCorners: string = "3",
  targetCorners: string = "10, 3"
): UseSmoothCornersResult => {
  const [workletLoaded, setWorkletLoaded] = useState(isWorkletLoaded);
  const progress = useMotionValue(0);
  const smoothCorners = useTransform(
    progress,
    [0, 1],
    [initialCorners, targetCorners]
  );

  useEffect(() => {
    // Check if worklet is already loaded
    if (isWorkletLoaded) {
      setWorkletLoaded(true);
      return;
    }

    // If not loaded, set up an interval to check
    const checkLoaded = setInterval(() => {
      if (isWorkletLoaded) {
        setWorkletLoaded(true);
        clearInterval(checkLoaded);
      }
    }, 100);

    return () => clearInterval(checkLoaded);
  }, []);

  const updateProgress = (value: number) => {
    if (workletLoaded) {
      animate(progress, value, { duration: 0.3, ease: "easeInOut" });
    }
  };

  return { progress, smoothCorners, workletLoaded, updateProgress };
};
