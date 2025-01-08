import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M6.66992 12H18.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 18V6" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path d="M18.6699 11.25H13.4199V6C13.4199 5.59 13.0799 5.25 12.6699 5.25C12.2599 5.25 11.9199 5.59 11.9199 6V11.25H6.66992C6.25992 11.25 5.91992 11.59 5.91992 12C5.91992 12.41 6.25992 12.75 6.66992 12.75H11.9199V18C11.9199 18.41 12.2599 18.75 12.6699 18.75C13.0799 18.75 13.4199 18.41 13.4199 18V12.75H18.6699C19.0799 12.75 19.4199 12.41 19.4199 12C19.4199 11.59 19.0799 11.25 18.6699 11.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM18.6699 12.75H13.4199V18C13.4199 18.41 13.0799 18.75 12.6699 18.75C12.2599 18.75 11.9199 18.41 11.9199 18V12.75H6.66992C6.25992 12.75 5.91992 12.41 5.91992 12C5.91992 11.59 6.25992 11.25 6.66992 11.25H11.9199V6C11.9199 5.59 12.2599 5.25 12.6699 5.25C13.0799 5.25 13.4199 5.59 13.4199 6V11.25H18.6699C19.0799 11.25 19.4199 11.59 19.4199 12C19.4199 12.41 19.0799 12.75 18.6699 12.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAdd as IconComponentType).keywords = [
  "add",
  "total",
  "sum up",
  "tot up",
  "add up",
  "sum",
  "summate",
  "impart",
  "contribute",
  "supply"
];

export default IconAdd as IconComponentType;