import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconGpsSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.21 6.6C15.86 5.3 14.02 4.5 12 4.5C7.86 4.5 4.5 7.86 4.5 12C4.5 14.01 5.29 15.84 6.58 17.19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 4V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M9 18.88C9.92 19.28 10.93 19.5 12 19.5C16.14 19.5 19.5 16.14 19.5 12C19.5 10.93 19.28 9.92 18.88 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 20V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M14.12 9.88L9.88 14.12C9.34 13.58 9 12.83 9 12C9 10.34 10.34 9 12 9C12.83 9 13.58 9.34 14.12 9.88Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 2L2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.9405 8.06006L15.1105 11.8901C15.1205 11.9301 15.1205 11.9601 15.1205 12.0001C15.1205 13.7201 13.7205 15.1201 12.0005 15.1201C11.9605 15.1201 11.9305 15.1201 11.8905 15.1101L8.06055 18.9401C9.22055 19.6201 10.5705 20.0001 12.0005 20.0001C16.4105 20.0001 20.0005 16.4101 20.0005 12.0001C20.0005 10.5701 19.6205 9.22006 18.9405 8.06006Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.65 6.35L14.2 9.8C13.64 9.23 12.86 8.88 12 8.88C10.28 8.88 8.88 10.28 8.88 12C8.88 12.86 9.23 13.64 9.8 14.2L6.35 17.65C4.9 16.2 4 14.2 4 12C4 7.59 7.59 4 12 4C14.2 4 16.2 4.9 17.65 6.35Z" fill="currentColor" /><path d="M14.2009 9.79988L9.80086 14.1999C9.23086 13.6399 8.88086 12.8599 8.88086 11.9999C8.88086 10.2799 10.2809 8.87988 12.0009 8.87988C12.8609 8.87988 13.6409 9.22988 14.2009 9.79988Z" fill="currentColor" /><path d="M12.75 2V4.04H12.74C12.5 4.01 12.25 4 12 4C11.75 4 11.5 4.01 11.26 4.04H11.25V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2Z" fill="currentColor" /><path d="M4 12C4 12.25 4.01 12.51 4.04 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H4.04C4.01 11.49 4 11.75 4 12Z" fill="currentColor" /><path d="M12.75 19.96V22C12.75 22.41 12.41 22.75 12 22.75C11.59 22.75 11.25 22.41 11.25 22V19.96H11.26C11.5 19.99 11.75 20 12 20C12.25 20 12.5 19.99 12.74 19.96H12.75Z" fill="currentColor" /><path d="M22.7509 12C22.7509 12.41 22.4109 12.75 22.0009 12.75H19.9609C19.9909 12.51 20.0009 12.25 20.0009 12C20.0009 11.75 19.9909 11.49 19.9609 11.25H22.0009C22.4109 11.25 22.7509 11.59 22.7509 12Z" fill="currentColor" /><path d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGpsSlash as IconComponentType).keywords = [
  "gps",
  "slash",
  "general practitioner",
  "rtk",
  "spg",
  "gsp",
  "aps",
  "positioning",
  "sgp",
  "spl",
  "drs",
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

export default IconGpsSlash as IconComponentType;