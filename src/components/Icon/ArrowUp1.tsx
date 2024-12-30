import { FC } from 'react';
import { IconProps } from "../../types";

const IconArrowUp1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9201 15.0501L13.4001 8.53014C12.6301 7.76014 11.3701 7.76014 10.6001 8.53014L4.08008 15.0501" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.81 2H16.18C19.83 2 22 4.17 22 7.81V16.18C22 19.82 19.83 21.99 16.19 21.99H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2Z" fill="currentColor" /><path d="M10.2405 6.25C9.82047 6.25 9.49047 6.59 9.49047 7V15.19L7.82047 13.52C7.53047 13.23 7.05047 13.23 6.76047 13.52C6.47047 13.81 6.47047 14.29 6.76047 14.58L9.71047 17.53C9.78047 17.6 9.86047 17.65 9.95047 17.69C10.0405 17.73 10.1405 17.75 10.2405 17.75C10.3405 17.75 10.4305 17.73 10.5305 17.69C10.7105 17.61 10.8605 17.47 10.9405 17.28C10.9805 17.19 11.0005 17.09 11.0005 16.99V7C10.9905 6.59 10.6505 6.25 10.2405 6.25Z" fill="currentColor" /><path d="M17.2398 9.42L14.2898 6.47C14.2198 6.4 14.1398 6.35 14.0498 6.31C13.8698 6.23 13.6598 6.23 13.4798 6.31C13.2998 6.39 13.1498 6.53 13.0698 6.72C13.0298 6.81 13.0098 6.9 13.0098 7V17C13.0098 17.41 13.3498 17.75 13.7598 17.75C14.1698 17.75 14.5098 17.41 14.5098 17V8.81L16.1798 10.48C16.3298 10.63 16.5198 10.7 16.7098 10.7C16.8998 10.7 17.0898 10.63 17.2398 10.48C17.5298 10.19 17.5298 9.71 17.2398 9.42Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconArrowUp1;