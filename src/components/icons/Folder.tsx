import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconFolder: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.0699V16.6499C22 19.5999 19.6 21.9999 16.65 21.9999H7.35C4.4 21.9999 2 19.5999 2 16.6499V9.43994H21.74C21.89 9.88994 21.97 10.3499 21.99 10.8399C22 10.9099 22 10.9999 22 11.0699Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.74 9.44H2V6.42C2 3.98 3.98 2 6.42 2H8.75C10.38 2 10.89 2.53 11.54 3.4L12.94 5.26C13.25 5.67 13.29 5.73 13.87 5.73H16.66C19.03 5.72 21.05 7.28 21.74 9.44Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFolder as IconComponentType).keywords = [
  "folder",
  "booklet",
  "pamphlet",
  "brochure",
  "leaflet",
  "toolkit",
  "pack",
  "package",
  "kit",
  "shirt"
];

export default IconFolder as IconComponentType;