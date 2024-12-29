import React, { useState } from "react";
import ColorVariants from "./Components/ColorVariants";

const ColorPalette = () => {
  const [colorVariantCount, setColorVariantCount] = useState(1);
  return (
    <div className="flex justify-center w-full gap-4 flex-wrap">
      {Array.from({ length: colorVariantCount }).map((_, index) => (
        <ColorVariants key={index} baseColor="#A52502" colorName="red" />
      ))}
    </div>
  );
};

export default ColorPalette;
