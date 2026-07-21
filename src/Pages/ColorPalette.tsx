import { ColorVariants } from "@/components";
import PageHeader from "@/components/PageHeader";
import { IconPalette } from "@/components/icons/version01";

const ColorPalette = () => {
  const colorVariantCount = 1;
  return (
    <div className="flex flex-col gap-4 p-2">
      <PageHeader
        title="Color Palette Generator"
        description="Generate color variants and shades from a base color"
        icon={IconPalette}
      />
      <div className="flex justify-center w-full gap-2 flex-wrap">
        {Array.from({ length: colorVariantCount }).map((_, index) => (
          <ColorVariants key={index} baseColor="#A52502" colorName="red" />
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
