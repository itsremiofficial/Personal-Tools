import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconReceiveSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M9.66992 11.51L12.6699 14.51L15.6699 11.51" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 14.51V6.51001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M6.66992 16.51C10.5599 17.81 14.7799 17.81 18.6699 16.51" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.48992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.82 4.83992 21.99 8.47992 21.99H16.8499C20.4899 21.99 22.6599 19.82 22.6599 16.18V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path d="M12.1404 15.04C12.2104 15.11 12.2903 15.16 12.3803 15.2C12.4703 15.24 12.5704 15.26 12.6704 15.26C12.7704 15.26 12.8604 15.24 12.9604 15.2C13.0504 15.16 13.1303 15.11 13.2003 15.04L16.2003 12.04C16.4903 11.75 16.4903 11.27 16.2003 10.98C15.9103 10.69 15.4304 10.69 15.1404 10.98L13.4204 12.7V6.51001C13.4204 6.10001 13.0804 5.76001 12.6704 5.76001C12.2604 5.76001 11.9204 6.10001 11.9204 6.51001V12.7L10.2003 10.98C9.91035 10.69 9.43035 10.69 9.14035 10.98C8.85035 11.27 8.85035 11.75 9.14035 12.04L12.1404 15.04Z" fill="currentColor" /><path d="M19.3801 16.28C19.2501 15.89 18.8301 15.68 18.4301 15.81C14.7101 17.05 10.6201 17.05 6.90011 15.81C6.51011 15.68 6.0801 15.89 5.9501 16.28C5.8201 16.67 6.0301 17.1 6.4201 17.23C8.4301 17.9 10.5401 18.24 12.6601 18.24C14.7801 18.24 16.8901 17.9 18.9001 17.23C19.3001 17.09 19.5101 16.67 19.3801 16.28Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM9.13992 10.98C9.42992 10.69 9.90992 10.69 10.1999 10.98L11.9199 12.7V6.51C11.9199 6.1 12.2599 5.76 12.6699 5.76C13.0799 5.76 13.4199 6.1 13.4199 6.51V12.7L15.1399 10.98C15.4299 10.69 15.9099 10.69 16.1999 10.98C16.4899 11.27 16.4899 11.75 16.1999 12.04L13.1999 15.04C13.1299 15.11 13.0499 15.16 12.9599 15.2C12.8699 15.24 12.7699 15.26 12.6699 15.26C12.5699 15.26 12.4799 15.24 12.3799 15.2C12.2899 15.16 12.2099 15.11 12.1399 15.04L9.13992 12.04C8.84992 11.75 8.84992 11.28 9.13992 10.98ZM18.9099 17.22C16.8999 17.89 14.7899 18.23 12.6699 18.23C10.5499 18.23 8.43992 17.89 6.42992 17.22C6.03992 17.09 5.82992 16.66 5.95992 16.27C6.08992 15.88 6.50992 15.66 6.90992 15.8C10.6299 17.04 14.7199 17.04 18.4399 15.8C18.8299 15.67 19.2599 15.88 19.3899 16.27C19.5099 16.67 19.2999 17.09 18.9099 17.22Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconReceiveSquare as IconComponentType).keywords = [
  "receive",
  "square",
  "invite",
  "take in",
  "obtain",
  "get",
  "have",
  "meet",
  "undergo",
  "find",
  "encounter",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest"
];

export default IconReceiveSquare as IconComponentType;