import React from "react";
import { IconTickCircle } from "./IconTickCircle";
import { cn } from "../../hooks";


interface CopyNotificationProps {
  show: boolean;
}

export const CopyNotification: React.FC<CopyNotificationProps> = ({ show }) => {
  if (!show) return null;

  return (
    <span
      className={cn(
        "absolute text-[9px] leading-none tracking-widest uppercase font-bold py-1 px-2 right-2 flex w-max rounded-full items-center gap-1 backdrop-blur-2xl",
        "bg-emerald-50 text-emerald-600 dark:text-emerald-500 dark:bg-icu-1000/40"
      )}
    >
      Copied <IconTickCircle className="size-3 stroke-3" />
    </span>
  );
};
