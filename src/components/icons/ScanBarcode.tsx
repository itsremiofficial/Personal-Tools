import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconScanBarcode: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.5 7V9C10.5 10 10 10.5 9 10.5H7C6 10.5 5.5 10 5.5 9V7C5.5 6 6 5.5 7 5.5H9C10 5.5 10.5 6 10.5 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.5 7V9C18.5 10 18 10.5 17 10.5H15C14 10.5 13.5 10 13.5 9V7C13.5 6 14 5.5 15 5.5H17C18 5.5 18.5 6 18.5 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.5 15V17C10.5 18 10 18.5 9 18.5H7C6 18.5 5.5 18 5.5 17V15C5.5 14 6 13.5 7 13.5H9C10 13.5 10.5 14 10.5 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.5 15V17C18.5 18 18 18.5 17 18.5H15C14 18.5 13.5 18 13.5 17V15C13.5 14 14 13.5 15 13.5H17C18 13.5 18.5 14 18.5 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M2 9.75C1.59 9.75 1.25 9.41 1.25 9V6.5C1.25 3.6 3.61 1.25 6.5 1.25H9C9.41 1.25 9.75 1.59 9.75 2C9.75 2.41 9.41 2.75 9 2.75H6.5C4.43 2.75 2.75 4.43 2.75 6.5V9C2.75 9.41 2.41 9.75 2 9.75Z" fill="currentColor" /><path d="M22 9.75C21.59 9.75 21.25 9.41 21.25 9V6.5C21.25 4.43 19.57 2.75 17.5 2.75H15C14.59 2.75 14.25 2.41 14.25 2C14.25 1.59 14.59 1.25 15 1.25H17.5C20.39 1.25 22.75 3.6 22.75 6.5V9C22.75 9.41 22.41 9.75 22 9.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.5 22.75H16C15.59 22.75 15.25 22.41 15.25 22C15.25 21.59 15.59 21.25 16 21.25H17.5C19.57 21.25 21.25 19.57 21.25 17.5V16C21.25 15.59 21.59 15.25 22 15.25C22.41 15.25 22.75 15.59 22.75 16V17.5C22.75 20.4 20.39 22.75 17.5 22.75Z" fill="currentColor" /><path d="M9 22.75H6.5C3.61 22.75 1.25 20.4 1.25 17.5V15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15V17.5C2.75 19.57 4.43 21.25 6.5 21.25H9C9.41 21.25 9.75 21.59 9.75 22C9.75 22.41 9.41 22.75 9 22.75Z" fill="currentColor" /><path d="M9 5.25H7C5.86 5.25 5.25 5.85 5.25 7V9C5.25 10.15 5.86 10.75 7 10.75H9C10.14 10.75 10.75 10.15 10.75 9V7C10.75 5.85 10.14 5.25 9 5.25Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17 5.25H15C13.86 5.25 13.25 5.85 13.25 7V9C13.25 10.15 13.86 10.75 15 10.75H17C18.14 10.75 18.75 10.15 18.75 9V7C18.75 5.85 18.14 5.25 17 5.25Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M9 13.25H7C5.86 13.25 5.25 13.85 5.25 15V17C5.25 18.15 5.86 18.75 7 18.75H9C10.14 18.75 10.75 18.15 10.75 17V15C10.75 13.85 10.14 13.25 9 13.25Z" fill="currentColor" /><path d="M17 13.25H15C13.86 13.25 13.25 13.85 13.25 15V17C13.25 18.15 13.86 18.75 15 18.75H17C18.14 18.75 18.75 18.15 18.75 17V15C18.75 13.85 18.14 13.25 17 13.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconScanBarcode as IconComponentType).keywords = [
  "scan",
  "barcode",
  "read",
  "run down",
  "glance over",
  "skim",
  "rake",
  "examine",
  "inspect",
  "finding",
  "scrutinize",
  "bar",
  "barcoding",
  "barcoded",
  "scanner",
  "scannable",
  "scanning",
  "scanners",
  "microprint"
];

export default IconScanBarcode as IconComponentType;