import { cn } from "@/hooks";
import { FC } from "react";

const SmoothCorner: FC<SmoothCornerProps> = ({ children, className }) => {
  return <div className={cn("masked", className)}>{children}</div>;
};

export default SmoothCorner;
