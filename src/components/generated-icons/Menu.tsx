import { FC } from 'react';
import { IconProps } from "@/types";

const IconMenu: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5401 8.31014C18.8987 8.31014 20.0001 7.20876 20.0001 5.85014C20.0001 4.49152 18.8987 3.39014 17.5401 3.39014C16.1814 3.39014 15.0801 4.49152 15.0801 5.85014C15.0801 7.20876 16.1814 8.31014 17.5401 8.31014Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.46001 8.31014C7.81863 8.31014 8.92 7.20876 8.92 5.85014C8.92 4.49152 7.81863 3.39014 6.46001 3.39014C5.10139 3.39014 4 4.49152 4 5.85014C4 7.20876 5.10139 8.31014 6.46001 8.31014Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.5401 20.6099C18.8987 20.6099 20.0001 19.5086 20.0001 18.1499C20.0001 16.7913 18.8987 15.6899 17.5401 15.6899C16.1814 15.6899 15.0801 16.7913 15.0801 18.1499C15.0801 19.5086 16.1814 20.6099 17.5401 20.6099Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.46001 20.6099C7.81863 20.6099 8.92 19.5086 8.92 18.1499C8.92 16.7913 7.81863 15.6899 6.46001 15.6899C5.10139 15.6899 4 16.7913 4 18.1499C4 19.5086 5.10139 20.6099 6.46001 20.6099Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M17 8.25H7C6.59 8.25 6.25 7.91 6.25 7.5C6.25 7.09 6.59 6.75 7 6.75H17C17.41 6.75 17.75 7.09 17.75 7.5C17.75 7.91 17.41 8.25 17 8.25Z" fill="currentColor" /><path d="M17 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H17C17.41 11.25 17.75 11.59 17.75 12C17.75 12.41 17.41 12.75 17 12.75Z" fill="currentColor" /><path d="M17 17.25H7C6.59 17.25 6.25 16.91 6.25 16.5C6.25 16.09 6.59 15.75 7 15.75H17C17.41 15.75 17.75 16.09 17.75 16.5C17.75 16.91 17.41 17.25 17 17.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMenu;