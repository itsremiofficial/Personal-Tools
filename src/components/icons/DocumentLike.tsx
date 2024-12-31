import { FC } from 'react';
import { IconProps } from "../../types";

const IconDocumentLike: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.47916 15.4901C7.14916 14.4601 7.53914 13.1901 8.60914 12.8401C9.17914 12.6601 9.87914 12.8101 10.2691 13.3601C10.6391 12.7901 11.3691 12.6601 11.9291 12.8401C13.0091 13.1901 13.3892 14.4601 13.0692 15.4901C12.5592 17.1201 10.7691 17.9701 10.2691 17.9701C9.77914 17.9601 8.00916 17.1301 7.47916 15.4901Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M15.5 13.15H13.33C11.55 13.15 10.1 11.71 10.1 9.92V7.75C10.1 7.34 9.77 7 9.35 7H6.18C3.87 7 2 8.5 2 11.18V17.82C2 20.5 3.87 22 6.18 22H12.07C14.38 22 16.25 20.5 16.25 17.82V13.9C16.25 13.48 15.91 13.15 15.5 13.15Z" fill="currentColor" /><path d="M17.8198 2H15.8498H14.7598H11.9298C9.66977 2 7.83977 3.44 7.75977 6.01C7.81977 6.01 7.86977 6 7.92977 6H10.7598H11.8498H13.8198C16.1298 6 17.9998 7.5 17.9998 10.18V12.15V14.86V16.83C17.9998 16.89 17.9898 16.94 17.9898 16.99C20.2198 16.92 21.9998 15.44 21.9998 12.83V10.86V8.15V6.18C21.9998 3.5 20.1298 2 17.8198 2Z" fill="currentColor" /><path d="M11.9806 7.15024C11.6706 6.84024 11.1406 7.05024 11.1406 7.48024V10.1002C11.1406 11.2002 12.0706 12.1002 13.2106 12.1002C13.9206 12.1102 14.9106 12.1102 15.7606 12.1102C16.1906 12.1102 16.4106 11.6102 16.1106 11.3102C15.0206 10.2202 13.0806 8.27024 11.9806 7.15024Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDocumentLike;