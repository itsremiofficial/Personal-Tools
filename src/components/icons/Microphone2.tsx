import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMicrophone2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V8Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M13.5 8L17 8" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M13.5 11L17 11" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M7 8L9 8" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M7 11L9 11" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M20 10V11C20 15.4183 16.4183 19 12 19M4 10V11C4 15.4183 7.58172 19 12 19M12 19V22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4 9C4.41421 9 4.75 9.33579 4.75 9.75V10.75C4.75 14.7541 7.99594 18 12 18C16.0041 18 19.25 14.7541 19.25 10.75V9.75C19.25 9.33579 19.5858 9 20 9C20.4142 9 20.75 9.33579 20.75 9.75V10.75C20.75 15.3298 17.2314 19.0879 12.75 19.4683V21.75C12.75 22.1642 12.4142 22.5 12 22.5C11.5858 22.5 11.25 22.1642 11.25 21.75V19.4683C6.7686 19.0879 3.25 15.3298 3.25 10.75V9.75C3.25 9.33579 3.58579 9 4 9Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M9.75 7.75C9.75 7.33579 9.41421 7 9 7H7.81597H6.29847C6.66598 4.17873 9.07855 2 12 2C14.9214 2 17.334 4.17873 17.7015 7H16.184L13.5 7C13.0858 7 12.75 7.33579 12.75 7.75C12.75 8.16421 13.0858 8.5 13.5 8.5L16.25 8.5H17.75V10H16.25H13.5C13.0858 10 12.75 10.3358 12.75 10.75C12.75 11.1642 13.0858 11.5 13.5 11.5H16.184H17.7015C17.334 14.3213 14.9214 16.5 12 16.5C9.07855 16.5 6.66598 14.3213 6.29847 11.5H7.81597H9C9.41421 11.5 9.75 11.1642 9.75 10.75C9.75 10.3358 9.41421 10 9 10H7.75H6.25V8.5H7.75H9C9.41421 8.5 9.75 8.16421 9.75 7.75Z" fill="currentColor" /><path d="M12.75 10.75C12.75 11.1642 13.0858 11.5 13.5 11.5H16.184H17.7015L17.75 10H16.25H13.5C13.0858 10 12.75 10.3358 12.75 10.75Z" fill="currentColor" /><path d="M12.75 7.75C12.75 8.16421 13.0858 8.5 13.5 8.5L16.25 8.5H17.75L17.7015 7H16.184L13.5 7C13.0858 7 12.75 7.33579 12.75 7.75Z" fill="currentColor" /><path d="M9.75 7.75C9.75 7.33579 9.41421 7 9 7H7.81597H6.29847L6.25 8.5H7.75H9C9.41421 8.5 9.75 8.16421 9.75 7.75Z" fill="currentColor" /><path d="M9.75 10.75C9.75 10.3358 9.41421 10 9 10H7.75H6.25L6.29847 11.5H7.81597H9C9.41421 11.5 9.75 11.1642 9.75 10.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 7.75C9.75 7.33579 9.41421 7 9 7H7.81597H6.29847C6.66598 4.17873 9.07855 2 12 2C14.9214 2 17.334 4.17873 17.7015 7H16.184L13.5 7C13.0858 7 12.75 7.33579 12.75 7.75C12.75 8.16421 13.0858 8.5 13.5 8.5L16.25 8.5H17.75V10H16.25H13.5C13.0858 10 12.75 10.3358 12.75 10.75C12.75 11.1642 13.0858 11.5 13.5 11.5H16.184H17.7015C17.334 14.3213 14.9214 16.5 12 16.5C9.07855 16.5 6.66598 14.3213 6.29847 11.5H7.81597H9C9.41421 11.5 9.75 11.1642 9.75 10.75C9.75 10.3358 9.41421 10 9 10H7.75H6.25V8.5H7.75H9C9.41421 8.5 9.75 8.16421 9.75 7.75Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M4 9C4.41421 9 4.75 9.33579 4.75 9.75V10.75C4.75 14.7541 7.99594 18 12 18C16.0041 18 19.25 14.7541 19.25 10.75V9.75C19.25 9.33579 19.5858 9 20 9C20.4142 9 20.75 9.33579 20.75 9.75V10.75C20.75 15.3298 17.2314 19.0879 12.75 19.4683V21.75C12.75 22.1642 12.4142 22.5 12 22.5C11.5858 22.5 11.25 22.1642 11.25 21.75V19.4683C6.7686 19.0879 3.25 15.3298 3.25 10.75V9.75C3.25 9.33579 3.58579 9 4 9Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMicrophone2 as IconComponentType).keywords = [
  "microphone",
  "2",
  "mike",
  "loudspeaker",
  "mic",
  "wire",
  "speaker",
  "floor",
  "lavalier",
  "lavaliere",
  "boom",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconMicrophone2 as IconComponentType;