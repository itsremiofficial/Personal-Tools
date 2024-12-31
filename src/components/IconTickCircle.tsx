import { Tick02Icon } from "hugeicons-react";
import React from "react";

interface IconProps {
  className?: string;
  width?: number;
}

export const IconTickCircle: React.FC<IconProps> = ({ className, width }) => {
  return <Tick02Icon className={className} strokeWidth={width} />;
};
