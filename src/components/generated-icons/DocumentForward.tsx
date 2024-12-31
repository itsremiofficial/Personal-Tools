import { FC } from 'react';
import { IconProps } from "@/types";

const IconDocumentForward: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11 17L13 15L11 13L13 15H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z" fill="currentColor" /><path d="M15.7997 2.20999C15.3897 1.79999 14.6797 2.07999 14.6797 2.64999V6.13999C14.6797 7.59999 15.9197 8.80999 17.4297 8.80999C18.3797 8.81999 19.6997 8.81999 20.8297 8.81999C21.3997 8.81999 21.6997 8.14999 21.2997 7.74999C19.8597 6.29999 17.2797 3.68999 15.7997 2.20999Z" fill="currentColor" /><path d="M11 17.7499C10.81 17.7499 10.62 17.6799 10.47 17.5299C10.18 17.2399 10.18 16.7599 10.47 16.4699L11.19 15.7499H7C6.59 15.7499 6.25 15.4099 6.25 14.9999C6.25 14.5899 6.59 14.2499 7 14.2499H11.19L10.47 13.5299C10.32 13.3799 10.25 13.1899 10.25 12.9999C10.25 12.8099 10.32 12.6199 10.47 12.4699C10.76 12.1799 11.24 12.1799 11.53 12.4699L13.53 14.4699C13.66 14.5999 13.73 14.7699 13.74 14.9299C13.74 14.9799 13.74 15.0399 13.74 15.0899C13.72 15.2299 13.66 15.3599 13.56 15.4799C13.55 15.4899 13.53 15.5099 13.52 15.5199L11.52 17.5199C11.38 17.6799 11.19 17.7499 11 17.7499Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDocumentForward;