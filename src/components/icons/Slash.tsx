import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M18.9004 5L4.90039 19" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.53 5.53L5.53 19.53C5.51 19.55 5.5 19.56 5.48 19.57C5.1 19.25 4.75 18.9 4.43 18.52C2.91 16.77 2 14.49 2 12C2 6.48 6.48 2 12 2C14.49 2 16.77 2.91 18.52 4.43C18.9 4.75 19.25 5.1 19.57 5.48C19.56 5.5 19.55 5.51 19.53 5.53Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.9996 12.0001C21.9996 17.5201 17.5196 22.0001 11.9996 22.0001C10.0096 22.0001 8.15961 21.4201 6.59961 20.4001L20.3996 6.6001C21.4196 8.1601 21.9996 10.0101 21.9996 12.0001Z" fill="currentColor" /><path d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSlash as IconComponentType).keywords = [
  "slash",
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

export default IconSlash as IconComponentType;