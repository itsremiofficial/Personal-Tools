import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconTag2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M4.40476 15.5264L8.93476 20.0564C10.7948 21.9164 13.8148 21.9164 15.6848 20.0564L20.0748 15.6664C21.9348 13.8064 21.9348 10.7864 20.0748 8.91637L15.5348 4.39637C14.5848 3.44637 13.2748 2.93637 11.9348 3.00637L6.93476 3.24637C4.93476 3.33637 3.34476 4.92637 3.24476 6.91637L3.00476 11.9164C2.94476 13.2664 3.45476 14.5764 4.40476 15.5264Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.73438 12.2266C11.1151 12.2266 12.2344 11.1073 12.2344 9.72656C12.2344 8.34585 11.1151 7.22656 9.73438 7.22656C8.35366 7.22656 7.23438 8.34585 7.23438 9.72656C7.23438 11.1073 8.35366 12.2266 9.73438 12.2266Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M13.2344 17.2266L17.2344 13.2266" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M4.17038 15.2998L8.70038 19.8298C10.5604 21.6898 13.5804 21.6898 15.4504 19.8298L19.8404 15.4398C21.7004 13.5798 21.7004 10.5598 19.8404 8.6898L15.3004 4.1698C14.3504 3.2198 13.0404 2.7098 11.7004 2.7798L6.70038 3.0198C4.70038 3.1098 3.11038 4.6998 3.01038 6.6898L2.77038 11.6898C2.71038 13.0398 3.22038 14.3498 4.17038 15.2998Z" fill="currentColor" /><path d="M9.49914 12.3801C11.0897 12.3801 12.3791 11.0907 12.3791 9.50012C12.3791 7.90954 11.0897 6.62012 9.49914 6.62012C7.90856 6.62012 6.61914 7.90954 6.61914 9.50012C6.61914 11.0907 7.90856 12.3801 9.49914 12.3801Z" fill="currentColor" /><path d="M12.9995 17.7499C12.8095 17.7499 12.6195 17.6799 12.4695 17.5299C12.1795 17.2399 12.1795 16.7599 12.4695 16.4699L16.4695 12.4699C16.7595 12.1799 17.2395 12.1799 17.5295 12.4699C17.8195 12.7599 17.8195 13.2399 17.5295 13.5299L13.5295 17.5299C13.3795 17.6799 13.1895 17.7499 12.9995 17.7499Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTag2 as IconComponentType).keywords = [
  "tag",
  "2",
  "label",
  "mark",
  "trail",
  "chase",
  "go after",
  "tag end",
  "dog",
  "shred",
  "chase after",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconTag2 as IconComponentType;