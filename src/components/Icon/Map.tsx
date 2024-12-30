import { FC } from 'react';
import { IconProps } from "../../types";

const IconMap1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.28906 7.77998V17.51C2.28906 19.41 3.63906 20.19 5.27906 19.25L7.62906 17.91C8.13906 17.62 8.98906 17.59 9.51906 17.86L14.7691 20.49C15.2991 20.75 16.1491 20.73 16.6591 20.44L20.9891 17.96C21.5391 17.64 21.9991 16.86 21.9991 16.22V6.48998C21.9991 4.58998 20.6491 3.80998 19.0091 4.74998L16.6591 6.08998C16.1491 6.37998 15.2991 6.40998 14.7691 6.13998L9.51906 3.51998C8.98906 3.25998 8.13906 3.27998 7.62906 3.56998L3.29906 6.04998C2.73906 6.36998 2.28906 7.14998 2.28906 7.77998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.56055 4V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.7305 6.62012V20.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18 13.75C18 18.03 14.53 21.5 10.25 21.5C5.97 21.5 2.5 18.03 2.5 13.75C2.5 9.47 5.97 6 10.25 6C12.12 6 13.83 6.66 15.17 7.77H15.18C15.57 8.09 15.92 8.44 16.23 8.83C17.34 10.17 18 11.88 18 13.75Z" fill="currentColor" /><path d="M22.25 2.5V9C22.25 9.41 21.91 9.75 21.5 9.75C21.09 9.75 20.75 9.41 20.75 9V4.31L16.23 8.83C15.92 8.44 15.57 8.09 15.18 7.77L19.69 3.25H15C14.59 3.25 14.25 2.91 14.25 2.5C14.25 2.09 14.59 1.75 15 1.75H21.5C21.6 1.75 21.69 1.77 21.79 1.81C21.97 1.88 22.12 2.03 22.19 2.21C22.23 2.31 22.25 2.4 22.25 2.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMap1;