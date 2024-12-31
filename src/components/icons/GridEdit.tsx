import { FC } from 'react';
import { IconProps } from "../../types";

const IconGridEdit: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 11V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M2.0293 8.5H21.9993" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2.0293 15.5H11.9993" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.50977 21.9897V2.00977" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.5098 11.9897V2.00977" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M18.7304 14.6701L14.5804 18.82C14.4204 18.98 14.2704 19.29 14.2304 19.51L14.0004 21.1C13.9204 21.67 14.3204 22.08 14.8904 21.99L16.4804 21.76C16.7004 21.73 17.0104 21.5701 17.1704 21.4101L21.3204 17.26C22.0304 16.55 22.3704 15.7101 21.3204 14.6601C20.2804 13.6201 19.4504 13.9501 18.7304 14.6701Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.1406 15.2598C18.4906 16.5198 19.4806 17.4997 20.7406 17.8597" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 7.81V8.5H9V2H16.19C19.83 2 22 4.17 22 7.81Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22 15.5V16.19C22 19.83 19.83 22 16.19 22H9V15.5H22Z" fill="currentColor" /><path d="M9 2V22H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2H9Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M22 8.5H9V15.5H22V8.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconGridEdit;