import { cn } from "@/hooks";
import { SmoothCornerProps } from "@/types";
import { FC } from "react";

const SmoothCorner: FC<SmoothCornerProps> = ({ children, className }) => {
  return <div className={cn("masked", className)}>{children}</div>;
};

export default SmoothCorner;
