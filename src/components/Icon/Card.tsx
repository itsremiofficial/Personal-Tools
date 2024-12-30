import { FC } from 'react';
import { IconProps } from "../../types";

const IconCard: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M2 8.50488H22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 16.5049H8" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.5 16.5049H14.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M6.44 3.50488H17.55C21.11 3.50488 22 4.38488 22 7.89488V16.1049C22 19.6149 21.11 20.4949 17.56 20.4949H6.44C2.89 20.5049 2 19.6249 2 16.1149V7.89488C2 4.38488 2.89 3.50488 6.44 3.50488Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.7507 9.99L21.2307 18.25C21.1007 20.31 20.0007 22 17.2407 22H6.7607C6.1707 22 5.6607 21.92 5.2207 21.78L20.2507 6.75C21.2307 7.48 21.8407 8.67 21.7507 9.99Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.0002 6L3.48017 20.52C3.03017 19.89 2.82017 19.1 2.77017 18.25L2.25017 9.99C2.11017 7.83 3.83017 6 6.00017 6C6.61017 6 7.17017 5.65 7.45017 5.11L8.17017 3.66C8.63017 2.75 9.83017 2 10.8602 2H13.1502C14.1702 2 15.3702 2.75 15.8302 3.66L16.5502 5.11C16.8302 5.65 17.3902 6 18.0002 6Z" fill="currentColor" /><path d="M9.5 10.75H6.5C6.09 10.75 5.75 10.41 5.75 10C5.75 9.59 6.09 9.25 6.5 9.25H9.5C9.91 9.25 10.25 9.59 10.25 10C10.25 10.41 9.91 10.75 9.5 10.75Z" fill="currentColor" /><path d="M12.5709 11.4299L8.68086 15.3199C8.65086 15.1399 8.63086 14.9399 8.63086 14.7499C8.63086 12.8899 10.1409 11.3799 12.0009 11.3799C12.1909 11.3799 12.3909 11.3999 12.5709 11.4299Z" fill="currentColor" /><path d="M15.38 14.75C15.38 16.61 13.86 18.12 12 18.12C11.13 18.12 10.34 17.79 9.75 17.25L14.5 12.5C15.05 13.09 15.38 13.88 15.38 14.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCard;