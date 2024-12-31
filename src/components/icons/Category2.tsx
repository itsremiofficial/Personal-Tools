import { FC } from 'react';
import { IconProps } from "../../types";

const IconCategory2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.0004 9V16.46C22.0004 18.75 20.1404 20.6 17.8504 20.6H6.40039L9.97039 17.03L11.2504 15.75L18.0004 9H22.0004Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15 9L4 20C2.8 19.28 2 17.96 2 16.46V9H15Z" fill="currentColor" /><path d="M22 7.53978V8.99978H18L21.47 5.52979C21.81 6.11979 22 6.80978 22 7.53978Z" fill="currentColor" /><path d="M20 3.9999L15 8.9999H2V7.5399C2 5.2499 3.86 3.3999 6.15 3.3999H17.85C18.64 3.3999 19.37 3.6199 20 3.9999Z" fill="currentColor" /><path d="M8.21 15.79L6.75 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.07 15.75 8.14 15.76 8.21 15.79Z" fill="currentColor" /><path d="M15.2507 16.5C15.2507 16.91 14.9107 17.25 14.5007 17.25H10.5007C10.3007 17.25 10.1107 17.16 9.9707 17.03L11.2507 15.75H14.5007C14.9107 15.75 15.2507 16.09 15.2507 16.5Z" fill="currentColor" /><path d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCategory2;