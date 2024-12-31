import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCandle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M6.5 22V15" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.5 5V2" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.5 22V19" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.5 9V2" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.5 7V13C9.5 14.1 9 15 7.5 15H5.5C4 15 3.5 14.1 3.5 13V7C3.5 5.9 4 5 5.5 5H7.5C9 5 9.5 5.9 9.5 7Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.5 11V17C20.5 18.1 20 19 18.5 19H16.5C15 19 14.5 18.1 14.5 17V11C14.5 9.9 15 9 16.5 9H18.5C20 9 20.5 9.9 20.5 11Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.5 4.5H7.25V2C7.25 1.59 6.91 1.25 6.5 1.25C6.09 1.25 5.75 1.59 5.75 2V4.5H5.5C3.91 4.5 3 5.41 3 7V13C3 14.59 3.91 15.5 5.5 15.5H5.75V22C5.75 22.41 6.09 22.75 6.5 22.75C6.91 22.75 7.25 22.41 7.25 22V15.5H7.5C9.09 15.5 10 14.59 10 13V7C10 5.41 9.09 4.5 7.5 4.5Z" fill="currentColor" /><path d="M18.5 8.5H18.25V2C18.25 1.59 17.91 1.25 17.5 1.25C17.09 1.25 16.75 1.59 16.75 2V8.5H16.5C14.91 8.5 14 9.41 14 11V17C14 18.59 14.91 19.5 16.5 19.5H16.75V22C16.75 22.41 17.09 22.75 17.5 22.75C17.91 22.75 18.25 22.41 18.25 22V19.5H18.5C20.09 19.5 21 18.59 21 17V11C21 9.41 20.09 8.5 18.5 8.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCandle as IconComponentType).keywords = [
  "candle",
  "taper",
  "candela",
  "standard candle",
  "cd",
  "wax light",
  "candlelight",
  "torch",
  "flame",
  "wax"
];

export default IconCandle as IconComponentType;