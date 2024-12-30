import { FC } from "react";
import { SmoothProps } from "../../types";
import { cn } from "../../hooks/formatSvgCode.ts";

const Smooth: FC<SmoothProps> = ({ children, className }) => {
  return <div className={cn("masked", className)}>{children}</div>;
};

export default Smooth;
