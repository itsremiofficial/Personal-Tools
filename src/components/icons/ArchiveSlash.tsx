import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconArchiveSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 2L2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.68 8.70996V19.71C20.68 21.72 19.24 22.57 17.48 21.59L11 17.54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.32031 19.95V5.86C3.32031 3.74 5.05031 2 7.18031 2H16.8303C18.0403 2 19.1203 2.56 19.8303 3.44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.68 6.31982V19.9498C20.68 21.7498 19.39 22.5098 17.82 21.6398L12.94 18.9198C12.42 18.6398 11.58 18.6398 11.06 18.9198L6.18 21.6398C5.76 21.8698 5.36 21.9898 5 21.9998L20.68 6.31982Z" fill="currentColor" /><path d="M20.1203 3.88L3.39031 20.61C3.34031 20.41 3.32031 20.19 3.32031 19.95V5.86C3.32031 3.74 5.05031 2 7.18031 2H16.8203C18.2203 2 19.4503 2.75 20.1203 3.88Z" fill="currentColor" /><path d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArchiveSlash as IconComponentType).keywords = [
  "archive",
  "slash",
  "file away",
  "archival",
  "file",
  "record-keeping",
  "registry",
  "record",
  "photo",
  "filer",
  "filename",
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

export default IconArchiveSlash as IconComponentType;