import { FC } from 'react';
import { IconProps } from "../../types";

const IconLockSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.0195 17.52C10.4795 18.11 11.1995 18.5 11.9995 18.5C13.3795 18.5 14.4995 17.38 14.4995 16C14.4995 15.43 14.3095 14.9 13.9895 14.48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2.82 20.8C2.21 20.04 2 18.83 2 17V15C2 11 3 10 7 10H17C17.36 10 17.69 10.01 18 10.03C21.17 10.21 22 11.36 22 15V17C22 21 21 22 17 22H7C6.64 22 6.31 21.99 6 21.97" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6 10V8C6 4.69 7 2 12 2C16.15 2 17.54 3.38 17.9 5.56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 2L2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.9991 17.3501C12.8994 17.3501 13.6291 16.6203 13.6291 15.7201C13.6291 14.8199 12.8994 14.0901 11.9991 14.0901C11.0989 14.0901 10.3691 14.8199 10.3691 15.7201C10.3691 16.6203 11.0989 17.3501 11.9991 17.3501Z" fill="currentColor" /><path d="M16.65 9.43994H7.35C3.25 9.43994 2 10.6899 2 14.7899V16.6499C2 20.7499 3.25 21.9999 7.35 21.9999H16.65C20.75 21.9999 22 20.7499 22 16.6499V14.7899C22 10.6899 20.75 9.43994 16.65 9.43994ZM12 18.7399C10.33 18.7399 8.98 17.3799 8.98 15.7199C8.98 14.0599 10.33 12.6999 12 12.6999C13.67 12.6999 15.02 14.0599 15.02 15.7199C15.02 17.3799 13.67 18.7399 12 18.7399Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M7.1207 9.45V8.28C7.1207 5.35 7.9507 3.4 12.0007 3.4C16.0507 3.4 16.8807 5.35 16.8807 8.28V9.45C17.3907 9.46 17.8507 9.48 18.2807 9.54V8.28C18.2807 5.58 17.6307 2 12.0007 2C6.3707 2 5.7207 5.58 5.7207 8.28V9.53C6.1407 9.48 6.6107 9.45 7.1207 9.45Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconLockSlash;