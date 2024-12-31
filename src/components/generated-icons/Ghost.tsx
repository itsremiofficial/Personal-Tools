import { FC } from 'react';
import { IconProps } from "@/types";

const IconGhost: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 20.07V12.18C22 6.57999 17.5 2 12 2C6.5 2 2 6.57999 2 12.18V20.07C2 21.33 2.74998 21.67 3.66998 20.83L4.66998 19.92C5.03998 19.58 5.64001 19.58 6.01001 19.92L8.01001 21.75C8.38001 22.09 8.97998 22.09 9.34998 21.75L11.35 19.92C11.72 19.58 12.32 19.58 12.69 19.92L14.69 21.75C15.06 22.09 15.66 22.09 16.03 21.75L18.03 19.92C18.4 19.58 19 19.58 19.37 19.92L20.37 20.83C21.25 21.67 22 21.33 22 20.07Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8 14C10.37 15.78 13.63 15.78 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 20.07V12.18C22 6.57999 17.5 2 12 2C6.5 2 2 6.57999 2 12.18V20.07C2 21.33 2.74998 21.67 3.66998 20.83L4.66998 19.92C5.03998 19.58 5.64001 19.58 6.01001 19.92L8.01001 21.75C8.38001 22.09 8.97998 22.09 9.34998 21.75L11.35 19.92C11.72 19.58 12.32 19.58 12.69 19.92L14.69 21.75C15.06 22.09 15.66 22.09 16.03 21.75L18.03 19.92C18.4 19.58 19 19.58 19.37 19.92L20.37 20.83C21.25 21.67 22 21.33 22 20.07Z" fill="currentColor" /><path d="M12.0003 16.07C10.4303 16.07 8.86025 15.58 7.55025 14.6C7.22025 14.35 7.15029 13.88 7.40029 13.55C7.65029 13.22 8.12027 13.15 8.45027 13.4C10.5403 14.97 13.4602 14.97 15.5502 13.4C15.8802 13.15 16.3502 13.22 16.6002 13.55C16.8502 13.88 16.7803 14.35 16.4503 14.6C15.1403 15.58 13.5703 16.07 12.0003 16.07Z" fill="currentColor" /><path d="M11.9991 11.3801C13.3136 11.3801 14.3792 10.3146 14.3792 9.00012C14.3792 7.68568 13.3136 6.62012 11.9991 6.62012C10.6847 6.62012 9.61914 7.68568 9.61914 9.00012C9.61914 10.3146 10.6847 11.3801 11.9991 11.3801Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconGhost;