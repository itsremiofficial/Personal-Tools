import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconFlag: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.15039 2V22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M5.15039 4H16.3504C19.0504 4 19.6504 5.5 17.7504 7.4L16.5504 8.6C15.7504 9.4 15.7504 10.7 16.5504 11.4L17.7504 12.6C19.6504 14.5 18.9504 16 16.3504 16H5.15039" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.15039 22C4.74039 22 4.40039 21.66 4.40039 21.25V2.75C4.40039 2.34 4.74039 2 5.15039 2C5.56039 2 5.90039 2.34 5.90039 2.75V21.25C5.90039 21.66 5.56039 22 5.15039 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.0195 12.3301L16.7995 11.1101C16.5095 10.8601 16.3395 10.4901 16.3295 10.0801C16.3095 9.63011 16.4895 9.18011 16.8195 8.85011L18.0195 7.65011C19.0595 6.61011 19.4495 5.61011 19.1195 4.82011C18.7995 4.04011 17.8095 3.61011 16.3495 3.61011H5.14953C4.93953 3.62011 4.76953 3.79011 4.76953 4.00011V16.0001C4.76953 16.2101 4.93953 16.3801 5.14953 16.3801H16.3495C17.7895 16.3801 18.7595 15.9401 19.0895 15.1501C19.4195 14.3501 19.0395 13.3601 18.0195 12.3301Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFlag as IconComponentType).keywords = [
  "flag",
  "ensign",
  "flagstone",
  "pin",
  "swag",
  "sag",
  "slacken off",
  "ease off",
  "droop",
  "ease up"
];

export default IconFlag as IconComponentType;