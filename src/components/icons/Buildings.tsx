import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBuildings: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 22H5C3 22 2 21 2 19V11C2 9 3 8 5 8H10V19C10 21 11 22 13 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.11 4C10.03 4.3 10 4.63 10 5V8H5V6C5 4.9 5.9 4 7 4H10.11Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14 8V13" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18 8V13" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17 17H15C14.45 17 14 17.45 14 18V22H18V18C18 17.45 17.55 17 17 17Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6 13V17" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 19V5C10 3 11 2 13 2H19C21 2 22 3 22 5V19C22 21 21 22 19 22H13C11 22 10 21 10 19Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.6" : "1"} d="M10.11 4C10.03 4.3 10 4.63 10 5V8H5V6C5 4.9 5.9 4 7 4H10.11Z" fill="currentColor" /><path d="M10 19V8H5C3 8 2 9 2 11V19C2 21 3 22 5 22H13C11 22 10 21 10 19ZM6.75 17C6.75 17.41 6.41 17.75 6 17.75C5.59 17.75 5.25 17.41 5.25 17V13C5.25 12.59 5.59 12.25 6 12.25C6.41 12.25 6.75 12.59 6.75 13V17Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14 22H13C11 22 10 21 10 19V5C10 3 11 2 13 2H19C21 2 22 3 22 5V19C22 21 21 22 19 22H18" fill="currentColor" /><path d="M18 18V22H14V18C14 17.45 14.45 17 15 17H17C17.55 17 18 17.45 18 18Z" fill="currentColor" /><path d="M14 13.75C13.59 13.75 13.25 13.41 13.25 13V8C13.25 7.59 13.59 7.25 14 7.25C14.41 7.25 14.75 7.59 14.75 8V13C14.75 13.41 14.41 13.75 14 13.75Z" fill="currentColor" /><path d="M18 13.75C17.59 13.75 17.25 13.41 17.25 13V8C17.25 7.59 17.59 7.25 18 7.25C18.41 7.25 18.75 7.59 18.75 8V13C18.75 13.41 18.41 13.75 18 13.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBuildings as IconComponentType).keywords = [
  "buildings",
  "edifice",
  "construction",
  "rising",
  "increasing",
  "augmentative",
  "heightening",
  "augmenting",
  "accommodation",
  "accommodations"
];

export default IconBuildings as IconComponentType;