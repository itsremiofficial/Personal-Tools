import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconChart: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M3 22H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.59998 8.37988H4C3.45 8.37988 3 8.82988 3 9.37988V17.9999C3 18.5499 3.45 18.9999 4 18.9999H5.59998C6.14998 18.9999 6.59998 18.5499 6.59998 17.9999V9.37988C6.59998 8.82988 6.14998 8.37988 5.59998 8.37988Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.8002 5.18994H11.2002C10.6502 5.18994 10.2002 5.63994 10.2002 6.18994V17.9999C10.2002 18.5499 10.6502 18.9999 11.2002 18.9999H12.8002C13.3502 18.9999 13.8002 18.5499 13.8002 17.9999V6.18994C13.8002 5.63994 13.3502 5.18994 12.8002 5.18994Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.0004 2H18.4004C17.8504 2 17.4004 2.45 17.4004 3V18C17.4004 18.55 17.8504 19 18.4004 19H20.0004C20.5504 19 21.0004 18.55 21.0004 18V3C21.0004 2.45 20.5504 2 20.0004 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M7 14.3499C6.59 14.3499 6.25 14.0099 6.25 13.5999V10.3999C6.25 9.9899 6.59 9.6499 7 9.6499C7.41 9.6499 7.75 9.9899 7.75 10.3999V13.6099C7.75 14.0199 7.41 14.3499 7 14.3499Z" fill="currentColor" /><path d="M12 16.0902C11.59 16.0902 11.25 15.7502 11.25 15.3402V8.66016C11.25 8.25016 11.59 7.91016 12 7.91016C12.41 7.91016 12.75 8.25016 12.75 8.66016V15.3402C12.75 15.7502 12.41 16.0902 12 16.0902Z" fill="currentColor" /><path d="M17 14.3499C16.59 14.3499 16.25 14.0099 16.25 13.5999V10.3999C16.25 9.9899 16.59 9.6499 17 9.6499C17.41 9.6499 17.75 9.9899 17.75 10.3999V13.6099C17.75 14.0199 17.41 14.3499 17 14.3499Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconChart as IconComponentType).keywords = [
  "chart",
  "map",
  "cartography",
  "mapping",
  "cartographic",
  "plan",
  "diagram",
  "graphical",
  "diagrammatic",
  "blueprint"
];

export default IconChart as IconComponentType;