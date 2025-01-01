import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPhotoshop: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.5 16V8H9.5C10.6 8 11.5 8.9 11.5 10C11.5 11.1 10.6 12 9.5 12H7.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.5 11H15.25C14.56 11 14 11.56 14 12.25C14 12.94 14.56 13.5 15.25 13.5C15.94 13.5 16.5 14.06 16.5 14.75C16.5 15.44 15.94 16 15.25 16H14" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M7.5 16.75C7.09 16.75 6.75 16.41 6.75 16V8C6.75 7.59 7.09 7.25 7.5 7.25H9.5C11.02 7.25 12.25 8.48 12.25 10C12.25 11.52 11.02 12.75 9.5 12.75H8.25V16C8.25 16.41 7.91 16.75 7.5 16.75ZM8.25 11.25H9.5C10.19 11.25 10.75 10.69 10.75 10C10.75 9.31 10.19 8.75 9.5 8.75H8.25V11.25Z" fill="currentColor" /><path d="M15.25 16.75H14C13.59 16.75 13.25 16.41 13.25 16C13.25 15.59 13.59 15.25 14 15.25H15.25C15.53 15.25 15.75 15.03 15.75 14.75C15.75 14.47 15.53 14.25 15.25 14.25C14.15 14.25 13.25 13.35 13.25 12.25C13.25 11.15 14.15 10.25 15.25 10.25H16.5C16.91 10.25 17.25 10.59 17.25 11C17.25 11.41 16.91 11.75 16.5 11.75H15.25C14.97 11.75 14.75 11.97 14.75 12.25C14.75 12.53 14.97 12.75 15.25 12.75C16.35 12.75 17.25 13.65 17.25 14.75C17.25 15.85 16.35 16.75 15.25 16.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPhotoshop as IconComponentType).keywords = [
  "photoshop",
  "digital",
  "lightroom",
  "dreamweaver",
  "corel",
  "paintshop",
  "coreldraw",
  "retouching",
  "imageready",
  "retouch"
];

export default IconPhotoshop as IconComponentType;