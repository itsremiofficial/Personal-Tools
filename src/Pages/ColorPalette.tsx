import { ColorVariants } from "@/components";
import React, { useState } from "react";

const ColorPalette = () => {
  const [colorVariantCount, setColorVariantCount] = useState(1);
  return (
    <div className="flex justify-center w-full gap-4 flex-wrap p-2">
      {Array.from({ length: colorVariantCount }).map((_, index) => (
        <ColorVariants key={index} baseColor="#A52502" colorName="red" />
      ))}
    </div>
  );
};

export default ColorPalette;
