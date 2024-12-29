import { useState, useEffect, useCallback, useTransition } from "react";

export const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDelayedClosed, setIsDelayedClosed] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setIsDelayedClosed(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setIsDelayedClosed(false);
    }
  }, [isOpen]);

  const toggleSidebar = useCallback(() => {
    startTransition(() => {
      setIsOpen((prev) => !prev);
    });
  }, []);

  return { isOpen, isDelayedClosed, isPending, toggleSidebar };
};
