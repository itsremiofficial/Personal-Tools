import { FC } from 'react';
import { IconProps } from "@/types";

const IconLockSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.0195 17.52C10.4795 18.11 11.1995 18.5 11.9995 18.5C13.3795 18.5 14.4995 17.38 14.4995 16C14.4995 15.43 14.3095 14.9 13.9895 14.48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2.82 20.8C2.21 20.04 2 18.83 2 17V15C2 11 3 10 7 10H17C17.36 10 17.69 10.01 18 10.03C21.17 10.21 22 11.36 22 15V17C22 21 21 22 17 22H7C6.64 22 6.31 21.99 6 21.97" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6 10V8C6 4.69 7 2 12 2C16.15 2 17.54 3.38 17.9 5.56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 2L2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M13.6308 15.72C13.6308 16.62 12.9008 17.35 12.0008 17.35C11.3608 17.35 10.8108 16.98 10.5508 16.45L12.7308 14.27C13.2608 14.53 13.6308 15.08 13.6308 15.72Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M7.35 9.43994C3.25 9.43994 2 10.6899 2 14.7899V16.6499C2 18.6999 2.31 20.0399 3.14 20.8599L9.1 14.8999C9.38 13.8899 10.17 13.0999 11.18 12.8199L14.56 9.43994H7.35Z" fill="currentColor" /><path d="M18.1307 5.87L16.8707 7.13C16.8307 5.35 16.1607 3.4 12.0007 3.4C7.9507 3.4 7.1207 5.35 7.1207 8.28V9.45C6.6107 9.45 6.1407 9.48 5.7207 9.53V8.28C5.7207 5.58 6.3707 2 12.0007 2C15.5407 2 17.6007 3.3 18.1307 5.87Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.9999 14.79V16.65C21.9999 20.75 20.7499 22 16.6499 22H7.34992C6.50992 22 5.77992 21.95 5.16992 21.83L9.52992 17.47C10.0899 18.24 10.9799 18.74 11.9999 18.74C13.6699 18.74 15.0199 17.39 15.0199 15.72C15.0199 14.7 14.5199 13.81 13.7499 13.25L17.5399 9.45996C20.9299 9.64996 21.9999 11 21.9999 14.79Z" fill="currentColor" /><path d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconLockSlash;