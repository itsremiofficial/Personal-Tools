import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPlayAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 12C22 13.31 21.75 14.57 21.28 15.72C20.63 15.27 19.84 15 19 15C18.06 15 17.19 15.33 16.5 15.88C15.58 16.61 15 17.74 15 19C15 19.75 15.21 20.46 15.58 21.06C15.62 21.13 15.67 21.2 15.73 21.27C14.58 21.74 13.32 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.38086 12.0001V10.6101C9.38086 8.89008 10.6009 8.18007 12.0909 9.04007L13.2909 9.73007L14.4908 10.4201C15.9808 11.2801 15.9808 12.6901 14.4908 13.5501L13.2909 14.2401L12.0909 14.9301C10.6009 15.7901 9.38086 15.0901 9.38086 13.3601V12.0001Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M23 19C23 19.75 22.79 20.46 22.42 21.06C22.21 21.42 21.94 21.74 21.63 22C20.93 22.63 20.01 23 19 23C17.54 23 16.27 22.22 15.58 21.06C15.21 20.46 15 19.75 15 19C15 17.74 15.58 16.61 16.5 15.88C17.19 15.33 18.06 15 19 15C21.21 15 23 16.79 23 19Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M20.4897 18.98H17.5098" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 17.52V20.51" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 12C22 13.31 21.75 14.57 21.28 15.72C20.63 15.27 19.84 15 19 15C18.06 15 17.19 15.33 16.5 15.88C15.58 16.61 15 17.74 15 19C15 19.75 15.21 20.46 15.58 21.06C15.62 21.13 15.67 21.2 15.73 21.27C14.58 21.74 13.32 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" fill="currentColor" /><path d="M9.38086 12.0001V10.6101C9.38086 8.89008 10.6009 8.18007 12.0909 9.04007L13.2909 9.73007L14.4908 10.4201C15.9808 11.2801 15.9808 12.6901 14.4908 13.5501L13.2909 14.2401L12.0909 14.9301C10.6009 15.7901 9.38086 15.0901 9.38086 13.3601V12.0001Z" fill="currentColor" /><path d="M19 15C18.06 15 17.19 15.33 16.5 15.88C15.58 16.61 15 17.74 15 19C15 19.75 15.21 20.46 15.58 21.06C16.27 22.22 17.54 23 19 23C20.01 23 20.93 22.63 21.63 22C21.94 21.74 22.21 21.42 22.42 21.06C22.79 20.46 23 19.75 23 19C23 16.79 21.21 15 19 15ZM20.5 19.73H19.75V20.51C19.75 20.92 19.41 21.26 19 21.26C18.59 21.26 18.25 20.92 18.25 20.51V19.73H17.5C17.09 19.73 16.75 19.39 16.75 18.98C16.75 18.57 17.09 18.23 17.5 18.23H18.25V17.52C18.25 17.11 18.59 16.77 19 16.77C19.41 16.77 19.75 17.11 19.75 17.52V18.23H20.5C20.91 18.23 21.25 18.57 21.25 18.98C21.25 19.39 20.91 19.73 20.5 19.73Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPlayAdd as IconComponentType).keywords = [
  "play",
  "add",
  "frolic",
  "fun",
  "gambol",
  "caper",
  "romp",
  "toy",
  "make-believe",
  "pretend",
  "dally",
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

export default IconPlayAdd as IconComponentType;