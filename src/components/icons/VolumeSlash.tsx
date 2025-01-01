import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconVolumeSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 7.36979V6.40979C14 3.42979 11.93 2.28979 9.41 3.86979L6.49 5.69979C6.17 5.88979 5.8 5.99979 5.43 5.99979H4C2 5.99979 1 6.99979 1 8.99979V12.9998C1 14.9998 2 15.9998 4 15.9998H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.41016 18.1302C11.9302 19.7102 14.0002 18.5602 14.0002 15.5902V11.9502" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.81 8.41992C18.71 10.5699 18.44 13.0799 17 14.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.1501 6.7998C21.6201 10.2898 21.1801 14.3698 18.8301 17.4998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21 1L1 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.0003 16.7498C17.8403 16.7498 17.6903 16.6998 17.5503 16.5998C17.2203 16.3498 17.1503 15.8798 17.4003 15.5498C18.6603 13.8698 18.9303 11.6398 18.1203 9.70983C17.9603 9.32983 18.1403 8.88983 18.5203 8.72983C18.9003 8.56983 19.3403 8.74983 19.5003 9.12983C20.5203 11.5498 20.1703 14.3598 18.6003 16.4598C18.4503 16.6498 18.2303 16.7498 18.0003 16.7498Z" fill="currentColor" /><path d="M19.8304 19.2502C19.6704 19.2502 19.5204 19.2002 19.3804 19.1002C19.0504 18.8502 18.9804 18.3802 19.2304 18.0502C21.3704 15.2002 21.8404 11.3802 20.4604 8.0902C20.3004 7.7102 20.4804 7.2702 20.8604 7.1102C21.2404 6.9502 21.6804 7.1302 21.8404 7.5102C23.4304 11.2902 22.8904 15.6702 20.4304 18.9502C20.2904 19.1502 20.0604 19.2502 19.8304 19.2502Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.0405 12.96C14.6705 12.33 15.7505 12.78 15.7505 13.67V16.6C15.7505 18.32 15.1305 19.61 14.0205 20.23C13.5705 20.48 13.0705 20.6 12.5505 20.6C11.7505 20.6 10.8905 20.33 10.0105 19.78L9.37047 19.38C8.83047 19.04 8.74047 18.28 9.19047 17.83L14.0405 12.96Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.02 3.78021C12.9 3.16021 11.47 3.32021 10.01 4.23021L7.09 6.06021C6.89 6.18021 6.66 6.25021 6.43 6.25021H5.5H5C2.58 6.25021 1.25 7.58021 1.25 10.0002V14.0002C1.25 16.4202 2.58 17.7502 5 17.7502H5.5H6.25L15.75 8.25021V7.41021C15.75 5.69021 15.13 4.40021 14.02 3.78021Z" fill="currentColor" /><path d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVolumeSlash as IconComponentType).keywords = [
  "volume",
  "slash",
  "loudness",
  "book",
  "mass",
  "bulk",
  "intensity",
  "quantum",
  "weight",
  "density",
  "potentiometer",
  "flog",
  "gash",
  "lash",
  "cut",
  "slice",
  "whip",
  "thrash",
  "trounce",
  "thrash about"
];

export default IconVolumeSlash as IconComponentType;