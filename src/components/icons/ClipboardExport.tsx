import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconClipboardExport: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V15" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M15 19V16H18" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.9991 22L15.0391 16.04" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.2391 3.6499H7.75906C5.28906 3.6499 3.28906 5.6599 3.28906 8.1199V17.5299C3.28906 19.9899 5.29906 21.9999 7.75906 21.9999H16.2291C18.6991 21.9999 20.6991 19.9899 20.6991 17.5299V8.1199C20.7091 5.6499 18.6991 3.6499 16.2391 3.6499Z" fill="currentColor" /><path d="M14.3498 2H9.64977C8.60977 2 7.75977 2.84 7.75977 3.88V4.82C7.75977 5.86 8.59977 6.7 9.63977 6.7H14.3498C15.3898 6.7 16.2298 5.86 16.2298 4.82V3.88C16.2398 2.84 15.3898 2 14.3498 2Z" fill="currentColor" /><path d="M15.53 16.47L10.81 11.75H12C12.41 11.75 12.75 11.41 12.75 11C12.75 10.59 12.41 10.25 12 10.25H9C8.59 10.25 8.25 10.59 8.25 11V14C8.25 14.41 8.59 14.75 9 14.75C9.41 14.75 9.75 14.41 9.75 14V12.81L14.47 17.53C14.62 17.68 14.81 17.75 15 17.75C15.19 17.75 15.38 17.68 15.53 17.53C15.82 17.24 15.82 16.76 15.53 16.47Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconClipboardExport as IconComponentType).keywords = [
  "clipboard",
  "export",
  "flipchart",
  "notebook",
  "pad",
  "notepad",
  "whiteboard",
  "pasteboard",
  "chalkboard",
  "sketchpad",
  "copy",
  "exportation",
  "import",
  "importation",
  "trade",
  "sell",
  "exporter",
  "output",
  "outsource",
  "market"
];

export default IconClipboardExport as IconComponentType;