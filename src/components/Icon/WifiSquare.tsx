import { FC } from 'react';
import { IconProps } from "../../types";

const IconWind: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 15H18.5C20.43 15 22 16.57 22 18.5C22 20.43 20.43 22 18.5 22C16.57 22 15 20.43 15 18.5V18" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 12H18.5C20.42 12 22 10.43 22 8.5C22 6.58 20.42 5 18.5 5C16.58 5 15 6.57 15 8.5V9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 9.00012H9.31C10.8 9.00012 12 7.79012 12 6.31012C12 4.82012 10.79 3.62012 9.31 3.62012C7.82 3.62012 6.62 4.83012 6.62 6.31012V6.69012" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81V16.18C2 19.82 4.17 21.99 7.81 21.99H16.18C19.82 21.99 21.99 19.82 21.99 16.18V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M18.0005 10.7099C17.8405 10.7099 17.6805 10.6599 17.5405 10.5499C14.1705 7.94991 9.82051 7.94991 6.46051 10.5499C6.13051 10.7999 5.66052 10.7399 5.41052 10.4199C5.16052 10.0899 5.22052 9.61991 5.54052 9.36991C9.46052 6.33991 14.5305 6.33991 18.4605 9.36991C18.7905 9.61991 18.8505 10.0899 18.5905 10.4199C18.4505 10.6099 18.2205 10.7099 18.0005 10.7099Z" fill="currentColor" /><path d="M16.4004 13.8C16.2404 13.8 16.0804 13.75 15.9404 13.64C13.5404 11.79 10.4504 11.79 8.05037 13.64C7.72037 13.89 7.25036 13.83 7.00036 13.51C6.75036 13.19 6.81036 12.71 7.13036 12.46C10.0804 10.18 13.9004 10.18 16.8504 12.46C17.1804 12.71 17.2404 13.18 16.9804 13.51C16.8504 13.7 16.6304 13.8 16.4004 13.8Z" fill="currentColor" /><path d="M14.1996 16.8899C14.0396 16.8899 13.8796 16.8399 13.7396 16.7299C12.6796 15.9099 11.3096 15.9099 10.2496 16.7299C9.91958 16.9799 9.44958 16.9199 9.19958 16.5999C8.94958 16.2699 9.00958 15.7999 9.32958 15.5499C10.9196 14.3199 13.0596 14.3199 14.6496 15.5499C14.9796 15.7999 15.0396 16.2699 14.7796 16.5999C14.6496 16.7899 14.4296 16.8899 14.1996 16.8899Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconWind;