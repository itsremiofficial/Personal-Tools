import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCrop: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9.9 19H19V9.9C19 6 18 5 14.1 5H5V14.1C5 18 6 19 9.9 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 5V2" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 5H2" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 19V22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 19H22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M13.9401 4.83008H6.83008C5.73008 4.83008 4.83008 5.73008 4.83008 6.83008V13.9401C4.83008 16.8301 7.17008 19.1701 10.0601 19.1701H17.1701C18.2701 19.1701 19.1701 18.2701 19.1701 17.1701V10.0601C19.1701 7.17008 16.8301 4.83008 13.9401 4.83008Z" fill="currentColor" /><path d="M5.53 2C5.11 2 4.78 2.34 4.78 2.75V4.78H2.75C2.34 4.78 2 5.11 2 5.53C2 5.95 2.34 6.28 2.75 6.28H5.53C5.94 6.28 6.28 5.94 6.28 5.53V2.75C6.28 2.34 5.94 2 5.53 2Z" fill="currentColor" /><path d="M21.2507 17.7202H18.4707C18.0607 17.7202 17.7207 18.0602 17.7207 18.4702V21.2502C17.7207 21.6602 18.0607 22.0002 18.4707 22.0002C18.8807 22.0002 19.2207 21.6602 19.2207 21.2502V19.2202H21.2507C21.6607 19.2202 22.0007 18.8802 22.0007 18.4702C22.0007 18.0602 21.6607 17.7202 21.2507 17.7202Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCrop as IconComponentType).keywords = [
  "crop",
  "harvest",
  "cultivate",
  "pasture",
  "prune",
  "range",
  "snip",
  "dress",
  "lop",
  "graze"
];

export default IconCrop as IconComponentType;