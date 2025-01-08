import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCoffee: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.4599 10.47V17.79C18.4599 20.12 16.5699 22 14.2499 22H6.87992C4.55992 22 2.66992 20.11 2.66992 17.79V10.47C2.66992 8.13999 4.55992 6.25999 6.87992 6.25999H14.2499C16.5699 6.25999 18.4599 8.14999 18.4599 10.47Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M6.16992 4V2.25" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M10.1699 4V2.25" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M14.1699 4V2.25" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.67 13.16C22.67 15.48 20.78 17.37 18.46 17.37V8.95C20.78 8.95 22.67 10.83 22.67 13.16Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M2.66992 12H18.1799" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.6" : "1"} d="M18.4599 10.47V12H2.66992V10.47C2.66992 8.14999 4.55992 6.25999 6.87992 6.25999H14.2499C16.5699 6.25999 18.4599 8.14999 18.4599 10.47Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.4599 12V17.79C18.4599 20.11 16.5699 22 14.2499 22H6.87992C4.55992 22 2.66992 20.11 2.66992 17.79V12H18.4599Z" fill="currentColor" /><path d="M6.16992 5.12C5.75992 5.12 5.41992 4.78 5.41992 4.37V2.61999C5.41992 2.21 5.75992 1.87 6.16992 1.87C6.57992 1.87 6.91992 2.21 6.91992 2.61999V4.37C6.91992 4.79 6.57992 5.12 6.16992 5.12Z" fill="currentColor" /><path d="M10.1699 5.12C9.75992 5.12 9.41992 4.78 9.41992 4.37V2.61999C9.41992 2.21 9.75992 1.87 10.1699 1.87C10.5799 1.87 10.9199 2.21 10.9199 2.61999V4.37C10.9199 4.79 10.5799 5.12 10.1699 5.12Z" fill="currentColor" /><path d="M14.1699 5.12C13.7599 5.12 13.4199 4.78 13.4199 4.37V2.61999C13.4199 2.21 13.7599 1.87 14.1699 1.87C14.5799 1.87 14.9199 2.21 14.9199 2.61999V4.37C14.9199 4.79 14.5799 5.12 14.1699 5.12Z" fill="currentColor" /><path d="M22.3197 14.32C22.3197 16.47 20.5797 18.21 18.4297 18.21V10.42C20.5697 10.42 22.3197 12.17 22.3197 14.32Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.66992 5.12C6.25992 5.12 5.91992 4.78 5.91992 4.37V2.62C5.91992 2.21 6.25992 1.87 6.66992 1.87C7.07992 1.87 7.41992 2.21 7.41992 2.62V4.37C7.41992 4.79 7.07992 5.12 6.66992 5.12Z" fill="currentColor" /><path d="M10.6699 5.12C10.2599 5.12 9.91992 4.78 9.91992 4.37V2.62C9.91992 2.21 10.2599 1.87 10.6699 1.87C11.0799 1.87 11.4199 2.21 11.4199 2.62V4.37C11.4199 4.79 11.0799 5.12 10.6699 5.12Z" fill="currentColor" /><path d="M14.6699 5.12C14.2599 5.12 13.9199 4.78 13.9199 4.37V2.62C13.9199 2.21 14.2599 1.87 14.6699 1.87C15.0799 1.87 15.4199 2.21 15.4199 2.62V4.37C15.4199 4.79 15.0799 5.12 14.6699 5.12Z" fill="currentColor" /><path d="M22.9199 13.25C22.9199 10.63 20.8899 8.51 18.3299 8.29C17.5899 7.08 16.2699 6.26 14.7499 6.26H7.37992C5.05992 6.26 3.16992 8.15 3.16992 10.47V11H18.9599V10.47C18.9599 10.28 18.9299 10.09 18.8999 9.91C20.3499 10.34 21.4199 11.66 21.4199 13.25C21.4199 14.82 20.3799 16.13 18.9599 16.57V12H3.16992V17.79C3.16992 20.11 5.05992 22 7.37992 22H14.7499C16.9499 22 18.7399 20.3 18.9199 18.14C21.1999 17.68 22.9199 15.66 22.9199 13.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCoffee as IconComponentType).keywords = [
  "coffee",
  "coffee bean",
  "chocolate",
  "coffee berry",
  "burnt umber",
  "umber",
  "java",
  "coffee tree",
  "deep brown",
  "latte"
];

export default IconCoffee as IconComponentType;