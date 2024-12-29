export const generateComponentCode = (
  name: string,
  strokeSvg: string,
  duotoneSvg: string
): string => `import { FC } from 'react'; 

const ${name}: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
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

export default ${name};`;
