import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSetting4: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 6.5H16" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M6 6.5H2" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M8 17.5H2" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M22 17.5H18" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.23 7.61998H15.69C15.31 7.61998 15 7.30998 15 6.91998C15 6.53998 15.31 6.22998 15.69 6.22998H21.23C21.61 6.22998 21.92 6.53998 21.92 6.91998C21.92 7.30998 21.61 7.61998 21.23 7.61998Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M6.46008 7.62023H2.77008C2.39008 7.62023 2.08008 7.31023 2.08008 6.93023C2.08008 6.55023 2.39008 6.24023 2.77008 6.24023H6.46008C6.84008 6.24023 7.15008 6.55023 7.15008 6.93023C7.15008 7.31023 6.84008 7.62023 6.46008 7.62023Z" fill="currentColor" /><path d="M10.1505 10.84C12.3154 10.84 14.0705 9.08496 14.0705 6.92C14.0705 4.75504 12.3154 3 10.1505 3C7.98551 3 6.23047 4.75504 6.23047 6.92C6.23047 9.08496 7.98551 10.84 10.1505 10.84Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.2296 17.7701H17.5396C17.1596 17.7701 16.8496 17.4601 16.8496 17.0801C16.8496 16.7001 17.1596 16.3901 17.5396 16.3901H21.2296C21.6096 16.3901 21.9196 16.7001 21.9196 17.0801C21.9196 17.4601 21.6096 17.7701 21.2296 17.7701Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M8.31008 17.7701H2.77008C2.39008 17.7701 2.08008 17.4601 2.08008 17.0801C2.08008 16.7001 2.39008 16.3901 2.77008 16.3901H8.31008C8.69008 16.3901 9.00008 16.7001 9.00008 17.0801C9.00008 17.4601 8.69008 17.7701 8.31008 17.7701Z" fill="currentColor" /><path d="M13.8497 21.0002C16.0146 21.0002 17.7697 19.2451 17.7697 17.0802C17.7697 14.9152 16.0146 13.1602 13.8497 13.1602C11.6847 13.1602 9.92969 14.9152 9.92969 17.0802C9.92969 19.2451 11.6847 21.0002 13.8497 21.0002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSetting4 as IconComponentType).keywords = [
  "setting",
  "4",
  "scene",
  "stage setting",
  "mise en scene",
  "scope",
  "background",
  "mount",
  "place setting",
  "scenario",
  "context",
  "dh",
  "f4f"
];

export default IconSetting4 as IconComponentType;