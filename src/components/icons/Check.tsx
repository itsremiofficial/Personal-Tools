import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCheck: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.02 19.5H7.5C6.88 19.5 6.33 19.48 5.84 19.41C3.21 19.12 2.5 17.88 2.5 14.5V9.5C2.5 6.12 3.21 4.88 5.84 4.59C6.33 4.52 6.88 4.5 7.5 4.5H10.96" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.0195 4.5H16.4995C17.1195 4.5 17.6695 4.52 18.1595 4.59C20.7895 4.88 21.4995 6.12 21.4995 9.5V14.5C21.4995 17.88 20.7895 19.12 18.1595 19.41C17.6695 19.48 17.1195 19.5 16.4995 19.5H15.0195" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8 8.5V15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15 22C14.59 22 14.25 21.66 14.25 21.25V2.75C14.25 2.34 14.59 2 15 2C15.41 2 15.75 2.34 15.75 2.75V21.25C15.75 21.66 15.41 22 15 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M6 20H12V4H6C3.79 4 2 5.79 2 8V16C2 18.21 3.79 20 6 20Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18 20H15V4H18C20.21 4 22 5.79 22 8V16C22 18.21 20.21 20 18 20Z" fill="currentColor" /><path d="M7 16.25C6.59 16.25 6.25 15.91 6.25 15.5V8.5C6.25 8.09 6.59 7.75 7 7.75C7.41 7.75 7.75 8.09 7.75 8.5V15.5C7.75 15.91 7.41 16.25 7 16.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCheck as IconComponentType).keywords = [
  "check",
  "match",
  "hitch",
  "check out",
  "curb",
  "check into",
  "checkout",
  "turn back",
  "arrest",
  "hold"
];

export default IconCheck as IconComponentType;