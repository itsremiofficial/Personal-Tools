import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconFolder2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M8 2H17C19 2 20 3 20 5V6.38" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M15.7201 2H8.28008C7.90008 2 7.58008 2.32 7.58008 2.7C7.58008 3.08 7.90008 3.4 8.28008 3.4H11.5401L12.9401 5.26C13.2501 5.67 13.2901 5.73 13.8701 5.73H17.5901C17.9701 5.73 18.3401 5.78 18.7001 5.88C18.7401 6.06 18.7601 6.24 18.7601 6.43V6.78C18.7601 7.16 19.0801 7.48 19.4601 7.48C19.8401 7.48 20.1601 7.16 20.1601 6.78V6.42C20.1401 3.98 18.1601 2 15.7201 2Z" fill="currentColor" /><path d="M20.14 6.54C19.71 6.23 19.22 6 18.69 5.87C18.34 5.77 17.96 5.72 17.58 5.72H13.86C13.28 5.72 13.24 5.66 12.93 5.25L11.53 3.39C10.88 2.53 10.37 2 8.74 2H6.42C3.98 2 2 3.98 2 6.42V17.58C2 20.02 3.98 22 6.42 22H17.58C20.02 22 22 20.02 22 17.58V10.14C22 8.65 21.27 7.34 20.14 6.54ZM14.33 16H9.67C9.28 16 8.97 15.69 8.97 15.3C8.97 14.92 9.28 14.6 9.67 14.6H14.32C14.7 14.6 15.02 14.92 15.02 15.3C15.02 15.69 14.71 16 14.33 16Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFolder2 as IconComponentType).keywords = [
  "folder",
  "2",
  "booklet",
  "pamphlet",
  "brochure",
  "leaflet",
  "toolkit",
  "pack",
  "package",
  "kit",
  "shirt",
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

export default IconFolder2 as IconComponentType;