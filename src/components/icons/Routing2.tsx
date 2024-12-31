import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRouting2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M5.4707 9C7.4037 9 8.9707 7.433 8.9707 5.5C8.9707 3.567 7.4037 2 5.4707 2C3.53771 2 1.9707 3.567 1.9707 5.5C1.9707 7.433 3.53771 9 5.4707 9Z" stroke="currentColor" strokeWidth="1.5" /><path opacity={duotone ? "0.4" : "1"} d="M16.9707 15H19.9707C21.0707 15 21.9707 15.9 21.9707 17V20C21.9707 21.1 21.0707 22 19.9707 22H16.9707C15.8707 22 14.9707 21.1 14.9707 20V17C14.9707 15.9 15.8707 15 16.9707 15Z" stroke="currentColor" strokeWidth="1.5" /><path d="M11.9997 5H14.6797C16.5297 5 17.3897 7.29 15.9997 8.51L8.0097 15.5C6.6197 16.71 7.4797 19 9.3197 19H11.9997" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.48573 5.5H5.49728" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.4857 18.5H18.4973" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M5.4707 9C7.4037 9 8.9707 7.433 8.9707 5.5C8.9707 3.567 7.4037 2 5.4707 2C3.53771 2 1.9707 3.567 1.9707 5.5C1.9707 7.433 3.53771 9 5.4707 9Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17 15H20C21.1 15 22 15.9 22 17V20C22 21.1 21.1 22 20 22H17C15.9 22 15 21.1 15 20V17C15 15.9 15.9 15 17 15Z" fill="currentColor" /><path d="M11.9995 19.75H9.31945C8.15945 19.75 7.14945 19.05 6.74945 17.97C6.33945 16.89 6.63945 15.7 7.50945 14.93L15.4995 7.94C15.9795 7.52 15.9895 6.95 15.8495 6.56C15.6995 6.17 15.3195 5.75 14.6795 5.75H11.9995C11.5895 5.75 11.2495 5.41 11.2495 5C11.2495 4.59 11.5895 4.25 11.9995 4.25H14.6795C15.8395 4.25 16.8495 4.95 17.2495 6.03C17.6595 7.11 17.3595 8.3 16.4895 9.07L8.49945 16.06C8.01945 16.48 8.00945 17.05 8.14945 17.44C8.29945 17.83 8.67945 18.25 9.31945 18.25H11.9995C12.4095 18.25 12.7495 18.59 12.7495 19C12.7495 19.41 12.4095 19.75 11.9995 19.75Z" fill="currentColor" /><path d="M18.5098 19.5C17.9598 19.5 17.5098 19.05 17.5098 18.5C17.5098 17.95 17.9498 17.5 18.5098 17.5H18.5198C19.0698 17.5 19.5198 17.95 19.5198 18.5C19.5198 19.05 19.0698 19.5 18.5098 19.5Z" fill="currentColor" /><path d="M5.50977 6.5C4.95977 6.5 4.50977 6.05 4.50977 5.5C4.50977 4.95 4.94977 4.5 5.50977 4.5H5.51977C6.06977 4.5 6.51977 4.95 6.51977 5.5C6.51977 6.05 6.06977 6.5 5.50977 6.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRouting2 as IconComponentType).keywords = [
  "routing",
  "2",
  "mob",
  "expel",
  "spread-eagle",
  "rabble",
  "discomfiture",
  "discomfit",
  "groove",
  "rootle",
  "gouge",
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

export default IconRouting2 as IconComponentType;