import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconArchiveMinus: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M14.5 10.6499H9.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2Z" fill="currentColor" /><path d="M14.5 11.3999H9.5C9.09 11.3999 8.75 11.0599 8.75 10.6499C8.75 10.2399 9.09 9.8999 9.5 9.8999H14.5C14.91 9.8999 15.25 10.2399 15.25 10.6499C15.25 11.0599 14.91 11.3999 14.5 11.3999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArchiveMinus as IconComponentType).keywords = [
  "archive",
  "minus",
  "file away",
  "archival",
  "file",
  "record-keeping",
  "registry",
  "record",
  "photo",
  "filer",
  "filename",
  "subtraction",
  "negative",
  "disadvantageous",
  "harmful",
  "sans",
  "min",
  "least",
  "unary",
  "nec"
];

export default IconArchiveMinus as IconComponentType;