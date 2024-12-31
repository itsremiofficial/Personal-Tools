import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconLock1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.9991 17.3501C12.8994 17.3501 13.6291 16.6203 13.6291 15.7201C13.6291 14.8199 12.8994 14.0901 11.9991 14.0901C11.0989 14.0901 10.3691 14.8199 10.3691 15.7201C10.3691 16.6203 11.0989 17.3501 11.9991 17.3501Z" fill="currentColor" /><path d="M16.65 9.43994H7.35C3.25 9.43994 2 10.6899 2 14.7899V16.6499C2 20.7499 3.25 21.9999 7.35 21.9999H16.65C20.75 21.9999 22 20.7499 22 16.6499V14.7899C22 10.6899 20.75 9.43994 16.65 9.43994ZM12 18.7399C10.33 18.7399 8.98 17.3799 8.98 15.7199C8.98 14.0599 10.33 12.6999 12 12.6999C13.67 12.6999 15.02 14.0599 15.02 15.7199C15.02 17.3799 13.67 18.7399 12 18.7399Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M7.1207 9.45V8.28C7.1207 5.35 7.9507 3.4 12.0007 3.4C16.0507 3.4 16.8807 5.35 16.8807 8.28V9.45C17.3907 9.46 17.8507 9.48 18.2807 9.54V8.28C18.2807 5.58 17.6307 2 12.0007 2C6.3707 2 5.7207 5.58 5.7207 8.28V9.53C6.1407 9.48 6.6107 9.45 7.1207 9.45Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLock1 as IconComponentType).keywords = [
  "lock",
  "1",
  "interlock",
  "lock in",
  "mesh",
  "interlace",
  "whorl",
  "lock away",
  "curl",
  "ringlet",
  "put away",
  "wash out",
  "cut up",
  "pull out",
  "pull in",
  "pull up",
  "pull over",
  "work out",
  "ride down",
  "rush hour"
];

export default IconLock1 as IconComponentType;