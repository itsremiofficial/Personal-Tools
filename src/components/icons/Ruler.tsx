import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRuler: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_3195_3387)"><path d="M5 17H19C21 17 22 16 22 14V10C22 8 21 7 19 7H5C3 7 2 8 2 10V14C2 16 3 17 5 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M18 7V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M6 7V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.05 7L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M14 7V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></g><defs><clipPath ><rect width="24" height="24" fill="none" /></clipPath></defs></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M5 17H19C20.66 17 22 15.66 22 14V10C22 8.34 20.66 7 19 7H5C3.34 7 2 8.34 2 10V14C2 15.66 3.34 17 5 17Z" fill="currentColor" /><path d="M18.75 7V12C18.75 12.41 18.41 12.75 18 12.75C17.59 12.75 17.25 12.41 17.25 12V7H18.75Z" fill="currentColor" /><path d="M6.75 7V10.8C6.75 11.21 6.41 11.55 6 11.55C5.59 11.55 5.25 11.21 5.25 10.8V7H6.75Z" fill="currentColor" /><path d="M10.79 7L10.75 12.01C10.75 12.42 10.41 12.75 10 12.75C10 12.75 10 12.75 9.99 12.75C9.58 12.75 9.25 12.41 9.25 11.99L9.29 7H10.79Z" fill="currentColor" /><path d="M14.75 7V9.6C14.75 10.01 14.41 10.35 14 10.35C13.59 10.35 13.25 10.01 13.25 9.6V7H14.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRuler as IconComponentType).keywords = [
  "ruler",
  "rule",
  "ndp",
  "head",
  "roi",
  "officer",
  "leadership",
  "boss",
  "leader",
  "administrator"
];

export default IconRuler as IconComponentType;