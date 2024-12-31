import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRepeat: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M3.58008 5.16016H17.4201C19.0801 5.16016 20.4201 6.50016 20.4201 8.16016V11.4802" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.74008 2L3.58008 5.15997L6.74008 8.32001" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M20.4201 18.84H6.58008C4.92008 18.84 3.58008 17.5 3.58008 15.84V12.52" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.2598 22.0002L20.4198 18.8402L17.2598 15.6802" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.4201 4.40994H5.39011L7.27008 2.53C7.56008 2.24 7.56008 1.75994 7.27008 1.46994C6.98008 1.17994 6.50008 1.17994 6.21008 1.46994L3.05008 4.62998C2.98008 4.69998 2.93011 4.77997 2.89011 4.86997C2.85011 4.95997 2.83008 5.05994 2.83008 5.15994C2.83008 5.25994 2.85011 5.35998 2.89011 5.44998C2.93011 5.53998 2.98008 5.61997 3.05008 5.68997L6.21008 8.84995C6.36008 8.99995 6.55008 9.06998 6.74008 9.06998C6.93008 9.06998 7.12008 8.99995 7.27008 8.84995C7.56008 8.55995 7.56008 8.07995 7.27008 7.78995L5.39011 5.90994H17.4201C18.6601 5.90994 19.6701 6.91994 19.6701 8.15994V11.48C19.6701 11.89 20.0101 12.23 20.4201 12.23C20.8301 12.23 21.1701 11.89 21.1701 11.48V8.15994C21.1701 6.08994 19.4901 4.40994 17.4201 4.40994Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.1701 18.84C21.1701 18.74 21.1501 18.64 21.1101 18.55C21.0701 18.46 21.0201 18.38 20.9501 18.31L17.7901 15.15C17.5001 14.86 17.0201 14.86 16.7301 15.15C16.4401 15.44 16.4401 15.92 16.7301 16.21L18.6101 18.09H6.58008C5.34008 18.09 4.33008 17.08 4.33008 15.84V12.52C4.33008 12.11 3.99008 11.77 3.58008 11.77C3.17008 11.77 2.83008 12.11 2.83008 12.52V15.84C2.83008 17.91 4.51008 19.59 6.58008 19.59H18.6101L16.7301 21.47C16.4401 21.76 16.4401 22.24 16.7301 22.53C16.8801 22.68 17.0701 22.75 17.2601 22.75C17.4501 22.75 17.6401 22.68 17.7901 22.53L20.9501 19.37C21.0201 19.3 21.0701 19.22 21.1101 19.13C21.1501 19.04 21.1701 18.94 21.1701 18.84Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRepeat as IconComponentType).keywords = [
  "repeat",
  "restate",
  "reiterate",
  "ingeminate",
  "reprise",
  "repetition",
  "retell",
  "recur",
  "recapitulate",
  "duplicate"
];

export default IconRepeat as IconComponentType;