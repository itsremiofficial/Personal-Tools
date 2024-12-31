import { FC } from 'react';
import { IconProps } from "@/types";

const IconDocumentCopy: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16 12.4V15.4C16 19.4 14.4 21 10.4 21H6.6C2.6 21 1 19.4 1 15.4V11.6C1 7.6 2.6 6 6.6 6H9.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.9996 12.4H12.7996C10.3996 12.4 9.59961 11.6 9.59961 9.2V6L15.9996 12.4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6 4C6 2.34 7.34 1 9 1H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.9995 7V13.19C20.9995 14.74 19.7395 16 18.1895 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21 7H18C15.75 7 15 6.25 15 4V1L21 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M15.5 13.15H13.33C11.55 13.15 10.1 11.71 10.1 9.92V7.75C10.1 7.34 9.77 7 9.35 7H6.18C3.87 7 2 8.5 2 11.18V17.82C2 20.5 3.87 22 6.18 22H12.07C14.38 22 16.25 20.5 16.25 17.82V13.9C16.25 13.48 15.91 13.15 15.5 13.15Z" fill="currentColor" /><path d="M17.8198 2H15.8498H14.7598H11.9298C9.66977 2 7.83977 3.44 7.75977 6.01C7.81977 6.01 7.86977 6 7.92977 6H10.7598H11.8498H13.8198C16.1298 6 17.9998 7.5 17.9998 10.18V12.15V14.86V16.83C17.9998 16.89 17.9898 16.94 17.9898 16.99C20.2198 16.92 21.9998 15.44 21.9998 12.83V10.86V8.15V6.18C21.9998 3.5 20.1298 2 17.8198 2Z" fill="currentColor" /><path d="M11.9806 7.15024C11.6706 6.84024 11.1406 7.05024 11.1406 7.48024V10.1002C11.1406 11.2002 12.0706 12.1002 13.2106 12.1002C13.9206 12.1102 14.9106 12.1102 15.7606 12.1102C16.1906 12.1102 16.4106 11.6102 16.1106 11.3102C15.0206 10.2202 13.0806 8.27024 11.9806 7.15024Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDocumentCopy;