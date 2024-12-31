import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconElectricity: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4998 16H13.4998C15.9998 16 17.4998 14.2 17.4998 12V6.91C17.4998 5.86 16.6398 5 15.5898 5H8.41982C7.36982 5 6.50982 5.86 6.50982 6.91V12C6.49982 14.2 7.99981 16 10.4998 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.5 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.5 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 22V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.4998 16H13.4998C15.9998 16 17.4998 14.2 17.4998 12V6.91C17.4998 5.86 16.6398 5 15.5898 5H8.41982C7.36982 5 6.50982 5.86 6.50982 6.91V12C6.49982 14.2 7.99981 16 10.4998 16Z" fill="currentColor" /><path d="M10.25 2V5H8.75V2C8.75 1.59 9.09 1.25 9.5 1.25C9.91 1.25 10.25 1.59 10.25 2Z" fill="currentColor" /><path d="M15.25 2V5H13.75V2C13.75 1.59 14.09 1.25 14.5 1.25C14.91 1.25 15.25 1.59 15.25 2Z" fill="currentColor" /><path d="M12.75 16V22C12.75 22.41 12.41 22.75 12 22.75C11.59 22.75 11.25 22.41 11.25 22V16H12.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconElectricity as IconComponentType).keywords = [
  "electricity",
  "electrical energy",
  "voltage",
  "light",
  "conductivity",
  "electrically",
  "electric",
  "electrical",
  "electrification",
  "lightning"
];

export default IconElectricity as IconComponentType;