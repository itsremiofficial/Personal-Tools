import { FC } from 'react';
import { IconProps } from "@/types";

const IconTwitch: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.5 2H21.5V14L16.5 19H11.5L9.5 22H6.5V19H2.5V5L4.5 2Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11 7H9V13H11V7Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16 7H14V13H16V7Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} fillRule="evenodd" clipRule="evenodd" d="M5.03976 2H20.4998C21.0498 2 21.4998 2.45 21.4998 3V13.59C21.4998 13.86 21.3898 14.11 21.2098 14.3L16.7998 18.71C16.6098 18.9 16.3598 19 16.0898 19H12.0398C11.7098 19 11.3898 19.17 11.2098 19.45L9.79977 21.56C9.60977 21.84 9.29977 22.01 8.96977 22.01H7.50977C6.95977 22.01 6.50977 21.56 6.50977 21.01V20.01C6.50977 19.46 6.05977 19.01 5.50977 19.01H3.50977C2.95977 19.01 2.50977 18.56 2.50977 18.01V5.31C2.50977 5.11 2.56976 4.91999 2.67976 4.75999L4.21977 2.46001C4.38977 2.17001 4.69976 2 5.03976 2Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M8.5 7.1403V12.8503C8.5 13.1703 8.76001 13.4203 9.07001 13.4203H10.21C10.53 13.4203 10.78 13.1603 10.78 12.8503V7.1403C10.78 6.8203 10.52 6.57031 10.21 6.57031H9.07001C8.76001 6.57031 8.5 6.8303 8.5 7.1403Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M14.2109 7.1403V12.8503C14.2109 13.1703 14.4709 13.4203 14.7809 13.4203H15.9209C16.2409 13.4203 16.4909 13.1603 16.4909 12.8503V7.1403C16.4909 6.8203 16.2309 6.57031 15.9209 6.57031H14.7809C14.4709 6.57031 14.2109 6.8303 14.2109 7.1403Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTwitch;