import { FC } from 'react';
import { IconProps } from "@/types";

const IconCardSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 8.5H15.24" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 16.5H7.29" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11 16.5H14.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.98047 20.5001H17.5605C21.1205 20.5001 22.0005 19.6201 22.0005 16.1101V6.89014" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.99 3.75C19.37 3.57 18.57 3.5 17.56 3.5H6.44C2.89 3.5 2 4.38 2 7.89V16.1C2 18.44 2.39 19.61 3.71 20.13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 2L2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.0004 9V16.46C22.0004 18.75 20.1404 20.6 17.8504 20.6H6.40039L9.97039 17.03L11.2504 15.75L18.0004 9H22.0004Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15 9L4 20C2.8 19.28 2 17.96 2 16.46V9H15Z" fill="currentColor" /><path d="M22 7.53978V8.99978H18L21.47 5.52979C21.81 6.11979 22 6.80978 22 7.53978Z" fill="currentColor" /><path d="M20 3.9999L15 8.9999H2V7.5399C2 5.2499 3.86 3.3999 6.15 3.3999H17.85C18.64 3.3999 19.37 3.6199 20 3.9999Z" fill="currentColor" /><path d="M8.21 15.79L6.75 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.07 15.75 8.14 15.76 8.21 15.79Z" fill="currentColor" /><path d="M15.2507 16.5C15.2507 16.91 14.9107 17.25 14.5007 17.25H10.5007C10.3007 17.25 10.1107 17.16 9.9707 17.03L11.2507 15.75H14.5007C14.9107 15.75 15.2507 16.09 15.2507 16.5Z" fill="currentColor" /><path d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCardSlash;