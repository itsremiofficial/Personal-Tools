import { FC } from 'react';
import { IconProps } from "../../types";

const IconTwitch: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.5 2H21.5V14L16.5 19H11.5L9.5 22H6.5V19H2.5V5L4.5 2Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11 7H9V13H11V7Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16 7H14V13H16V7Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5 1C4.06 1 3.19 1.33 2.5 1.88C1.58 2.61 1 3.74 1 5C1 7.21 2.79 9 5 9C6.01 9 6.93001 8.62 7.64001 8C8.47001 7.27 9 6.2 9 5C9 2.79 7.21 1 5 1ZM6 5.25C6 5.51 5.86001 5.76001 5.64001 5.89001L4.39001 6.64001C4.27001 6.71001 4.14001 6.75 4.01001 6.75C3.76001 6.75 3.51 6.62001 3.37 6.39001C3.16 6.03001 3.27 5.56999 3.63 5.35999L4.52002 4.83002V3.75C4.52002 3.34 4.86002 3 5.27002 3C5.68002 3 6.02002 3.34 6.02002 3.75V5.25H6Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15 3V12C15 13.1 14.1 14 13 14H2V7.62C2.73 8.49 3.85003 9.03 5.09003 9C6.10003 8.98 7.01 8.59 7.69 7.94C8 7.68 8.26002 7.34999 8.46002 6.98999C8.82002 6.37999 9.02 5.65997 9 4.90997C8.97 3.73997 8.45001 2.71 7.64001 2H14C14.55 2 15 2.45 15 3Z" fill="currentColor" /><path d="M22 14V17C22 18.66 20.66 20 19 20H18C18 18.9 17.1 18 16 18C14.9 18 14 18.9 14 20H10C10 18.9 9.1 18 8 18C6.9 18 6 18.9 6 20H5C3.34 20 2 18.66 2 17V14H13C14.1 14 15 13.1 15 12V5H16.84C17.56 5 18.22 5.39001 18.58 6.01001L20.29 9H19C18.45 9 18 9.45 18 10V13C18 13.55 18.45 14 19 14H22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22 12.53V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L21.74 11.54C21.91 11.84 22 12.18 22 12.53Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTwitch;