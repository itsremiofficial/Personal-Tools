import { FC } from 'react';
import { IconProps } from "../../types";

const IconCopySuccess: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 11.1V6.9C22 3.4 20.6 2 17.1 2H12.9C9.4 2 8 3.4 8 6.9V8H11.1C14.6 8 16 9.4 16 12.9V16H17.1C20.6 16 22 14.6 22 11.1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 17.1V12.9C16 9.4 14.6 8 11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.08008 14.9998L8.03008 16.9498L11.9201 13.0498" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 5.15V8.85C22 11.1 21.1 12 18.85 12H16.15C13.9 12 13 11.1 13 8.85V5.15C13 2.9 13.9 2 16.15 2H18.85C21.1 2 22 2.9 22 5.15Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M11 15.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V15.15C2 12.9 2.9 12 5.15 12H7.85C10.1 12 11 12.9 11 15.15Z" fill="currentColor" /><path d="M14.7795 22C14.5095 22 14.2595 21.85 14.1295 21.62C13.9995 21.38 13.9995 21.1 14.1395 20.86L15.1095 19.24C15.3195 18.88 15.7795 18.77 16.1395 18.98C16.4995 19.19 16.6095 19.65 16.3995 20.01L16.2195 20.31C18.6895 19.67 20.5095 17.43 20.5095 14.77C20.5095 14.36 20.8495 14.02 21.2595 14.02C21.6695 14.02 21.9995 14.36 21.9995 14.78C21.9995 18.76 18.7595 22 14.7795 22Z" fill="currentColor" /><path d="M2.75 9.97C2.34 9.97 2 9.64 2 9.22C2 5.24 5.24 2 9.22 2C9.5 2 9.74 2.15 9.88 2.38C10.01 2.62 10.01 2.9 9.87 3.14L8.9 4.75C8.68 5.11 8.22 5.23 7.87 5.01C7.51 4.8 7.4 4.34 7.61 3.98L7.79 3.68C5.33 4.32 3.5 6.56 3.5 9.22C3.5 9.64 3.16 9.97 2.75 9.97Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCopySuccess;