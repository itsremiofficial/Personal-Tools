import { Tick01Icon } from "hugeicons-react";
import React from "react";

interface IconProps {
  className?: string;
  width?: number;
}

export const IconTickCircle: React.FC<IconProps> = ({ className, width }) => {
  return <Tick01Icon className={className} strokeWidth={width} />;
};
