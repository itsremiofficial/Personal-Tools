export const generateComponentCode = (
  name: string,
  strokeSvg: string,
  duotoneSvg: string,
  iconPropsPath: string = "../../types"
): string => `import { FC } from 'react';
import { IconProps } from "${iconPropsPath}";

const Icon${name}: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        ${strokeSvg}
      ) : (
        ${duotoneSvg}
      )}
    </>
  );
};

export default Icon${name};`;
