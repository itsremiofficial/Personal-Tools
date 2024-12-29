import { FC } from "react";
import { SmoothProps } from "../../types";
import { cn } from "../../lib/utils";

const Smooth: FC<SmoothProps> = ({ children, className }) => {
  return <div className={cn("masked", className)}>{children}</div>;
};

export default Smooth;
