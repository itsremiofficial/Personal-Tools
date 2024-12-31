import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconClipboardTick: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9.31055 14.7002L10.8105 16.2002L14.8105 12.2002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.2391 3.6499H7.75906C5.28906 3.6499 3.28906 5.6599 3.28906 8.1199V17.5299C3.28906 19.9899 5.29906 21.9999 7.75906 21.9999H16.2291C18.6991 21.9999 20.6991 19.9899 20.6991 17.5299V8.1199C20.7091 5.6499 18.6991 3.6499 16.2391 3.6499Z" fill="currentColor" /><path d="M14.3498 2H9.64977C8.60977 2 7.75977 2.84 7.75977 3.88V4.82C7.75977 5.86 8.59977 6.7 9.63977 6.7H14.3498C15.3898 6.7 16.2298 5.86 16.2298 4.82V3.88C16.2398 2.84 15.3898 2 14.3498 2Z" fill="currentColor" /><path d="M10.81 16.9501C10.62 16.9501 10.43 16.8801 10.28 16.7301L8.78 15.2301C8.49 14.9401 8.49 14.4601 8.78 14.1701C9.07 13.8801 9.55 13.8801 9.84 14.1701L10.81 15.1401L14.28 11.6701C14.57 11.3801 15.05 11.3801 15.34 11.6701C15.63 11.9601 15.63 12.4401 15.34 12.7301L11.34 16.7301C11.2 16.8801 11 16.9501 10.81 16.9501Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconClipboardTick as IconComponentType).keywords = [
  "clipboard",
  "tick",
  "flipchart",
  "notebook",
  "pad",
  "notepad",
  "whiteboard",
  "pasteboard",
  "chalkboard",
  "sketchpad",
  "copy",
  "click",
  "ticktock",
  "beat",
  "ticktack",
  "retick",
  "ixodid",
  "acarid",
  "spinose",
  "gene"
];

export default IconClipboardTick as IconComponentType;