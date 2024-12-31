import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconFolderCross: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M13.8095 15.7304L10.2695 12.1904" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.7705 12.2305L10.2305 15.7705" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.8709 9.44H2.13086V6.42C2.13086 3.98 4.11086 2 6.55086 2H8.88086C10.5109 2 11.0209 2.53 11.6709 3.4L13.0709 5.26C13.3809 5.67 13.4209 5.73 14.0009 5.73H16.7909C19.1609 5.72 21.1809 7.28 21.8709 9.44Z" fill="currentColor" /><path d="M21.99 10.8399C21.97 10.3599 21.89 9.88994 21.74 9.43994H2V16.6499C2 19.5999 4.4 21.9999 7.35 21.9999H16.65C19.6 21.9999 22 19.5999 22 16.6499V11.0699C22 10.9999 22 10.9099 21.99 10.8399ZM14.34 17.7799C14.19 17.9199 14 17.9999 13.81 17.9999C13.62 17.9999 13.43 17.9299 13.28 17.7799L12.04 16.5399L10.76 17.8199C10.61 17.9699 10.42 18.0399 10.23 18.0399C10.04 18.0399 9.85 17.9699 9.7 17.8199C9.41 17.5299 9.41 17.0499 9.7 16.7599L10.98 15.4799L9.74 14.2399C9.45 13.9499 9.45 13.4699 9.74 13.1799C10.03 12.8899 10.51 12.8899 10.8 13.1799L12.04 14.4199L13.24 13.2199C13.53 12.9299 14.01 12.9299 14.3 13.2199C14.59 13.5099 14.59 13.9899 14.3 14.2799L13.1 15.4799L14.34 16.7199C14.63 17.0099 14.63 17.4899 14.34 17.7799Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFolderCross as IconComponentType).keywords = [
  "folder",
  "cross",
  "booklet",
  "pamphlet",
  "brochure",
  "leaflet",
  "toolkit",
  "pack",
  "package",
  "kit",
  "shirt",
  "foil",
  "crisscross",
  "intersect",
  "transverse",
  "transversal",
  "crosswise",
  "mark",
  "cut across",
  "hybridization"
];

export default IconFolderCross as IconComponentType;