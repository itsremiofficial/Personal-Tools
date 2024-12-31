import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconKeyboardOpen: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.26022 2H16.7302C17.3802 2 17.9602 2.02003 18.4802 2.09003C21.2502 2.40003 22.0002 3.70001 22.0002 7.26001V13.58C22.0002 17.14 21.2502 18.44 18.4802 18.75C17.9602 18.82 17.3902 18.84 16.7302 18.84H7.26022C6.61022 18.84 6.03022 18.82 5.51022 18.75C2.74022 18.44 1.99023 17.14 1.99023 13.58V7.26001C1.99023 3.70001 2.74022 2.40003 5.51022 2.09003C6.03022 2.02003 6.61022 2 7.26022 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M13.5801 8.31982H17.2601" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.74023 14.1099H6.76022H17.2702" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7 22H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.1947 8.2998H7.20368" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.4945 8.2998H10.5035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17 22.75H7C6.59 22.75 6.25 22.41 6.25 22C6.25 21.59 6.59 21.25 7 21.25H17C17.41 21.25 17.75 21.59 17.75 22C17.75 22.41 17.41 22.75 17 22.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18 19H6C3.79 19 2 17.21 2 15V6C2 3.79 3.79 2 6 2H18C20.21 2 22 3.79 22 6V15C22 17.21 20.21 19 18 19Z" fill="currentColor" /><path d="M17.2601 9.07007H13.5801C13.1701 9.07007 12.8301 8.73007 12.8301 8.32007C12.8301 7.91007 13.1701 7.57007 13.5801 7.57007H17.2601C17.6701 7.57007 18.0101 7.91007 18.0101 8.32007C18.0101 8.73007 17.6801 9.07007 17.2601 9.07007Z" fill="currentColor" /><path d="M10 9.32007C9.45 9.32007 9 8.87007 9 8.32007C9 7.77007 9.44 7.32007 10 7.32007C10.55 7.32007 11 7.77007 11 8.32007C11 8.87007 10.56 9.32007 10 9.32007Z" fill="currentColor" /><path d="M6.84961 9.32007C6.29961 9.32007 5.84961 8.87007 5.84961 8.32007C5.84961 7.77007 6.28961 7.32007 6.84961 7.32007H6.8596C7.4096 7.32007 7.8596 7.77007 7.8596 8.32007C7.8596 8.87007 7.39961 9.32007 6.84961 9.32007Z" fill="currentColor" /><path d="M17.2602 14.8599H6.75023C6.34023 14.8599 5.99023 14.5199 5.99023 14.1099C5.99023 13.6999 6.32022 13.3599 6.73022 13.3599H17.2602C17.6702 13.3599 18.0102 13.6999 18.0102 14.1099C18.0102 14.5199 17.6802 14.8599 17.2602 14.8599Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconKeyboardOpen as IconComponentType).keywords = [
  "keyboard",
  "open",
  "keypad",
  "computer",
  "typing",
  "touch-tone",
  "keyword",
  "tablet",
  "shortcut",
  "portable",
  "backlit",
  "open up",
  "available",
  "visible",
  "afford",
  "public",
  "ajar",
  "give",
  "spread",
  "wide"
];

export default IconKeyboardOpen as IconComponentType;