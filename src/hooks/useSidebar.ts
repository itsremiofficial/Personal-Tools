import { useState, useCallback, useTransition } from "react";

export const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isPending, startTransition] = useTransition();

  const toggleSidebar = useCallback(() => {
    startTransition(() => {
      setIsOpen((prev) => !prev);
    });
  }, []);

  return { isOpen, isPending, toggleSidebar };
};
