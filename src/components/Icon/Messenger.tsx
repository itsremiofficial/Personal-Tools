import { FC } from 'react';
import { IconProps } from "../../types";

const IconMicrophone: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 19C15.31 19 18 16.31 18 13V8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8V13C6 16.31 8.69 19 12 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3 11V13C3 17.97 7.03 22 12 22C16.97 22 21 17.97 21 13V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.10938 7.48018C10.8894 6.83018 12.8294 6.83018 14.6094 7.48018" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.0293 10.4799C11.2293 10.1499 12.4993 10.1499 13.6993 10.4799" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 7.43018V13.4302C22 14.9302 21.5 16.1802 20.62 17.0602C19.75 17.9302 18.5 18.4302 17 18.4302V20.5602C17 21.3602 16.11 21.8402 15.45 21.4002L11 18.4302H8.88C8.96 18.1302 9 17.8202 9 17.5002C9 16.4802 8.61 15.5402 7.97 14.8302C7.25 14.0102 6.18 13.5002 5 13.5002C3.88 13.5002 2.86 13.9602 2.13 14.7102C2.04 14.3102 2 13.8802 2 13.4302V7.43018C2 4.43018 4 2.43018 7 2.43018H17C20 2.43018 22 4.43018 22 7.43018Z" fill="currentColor" /><path d="M15.5 11.25H8.5C8.09 11.25 7.75 10.91 7.75 10.5C7.75 10.09 8.09 9.75 8.5 9.75H15.5C15.91 9.75 16.25 10.09 16.25 10.5C16.25 10.91 15.91 11.25 15.5 11.25Z" fill="currentColor" /><path d="M5 13.5C4.06 13.5 3.19 13.83 2.5 14.38C1.58 15.11 1 16.24 1 17.5C1 19.71 2.79 21.5 5 21.5C6.01 21.5 6.93001 21.12 7.64001 20.5C8.47001 19.77 9 18.7 9 17.5C9 15.29 7.21 13.5 5 13.5ZM6 17.75C6 18.01 5.86001 18.26 5.64001 18.39L4.39001 19.14C4.27001 19.21 4.14 19.25 4 19.25C3.75 19.25 3.49999 19.12 3.35999 18.89C3.14999 18.53 3.25999 18.07 3.62 17.86L4.51001 17.33V16.25C4.51001 15.84 4.85001 15.5 5.26001 15.5C5.67001 15.5 6.01001 15.84 6.01001 16.25V17.75H6Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMicrophone;