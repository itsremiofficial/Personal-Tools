import { useState, useEffect, useCallback, useTransition } from 'react';

export const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDelayed, setIsDelayed] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setIsDelayed(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setIsDelayed(false);
    }
  }, [isOpen]);

  const toggleSidebar = useCallback(() => {
    startTransition(() => {
      setIsOpen((prev) => !prev);
    });
  }, []);

  return { isOpen, isDelayed, isPending, toggleSidebar };
};
