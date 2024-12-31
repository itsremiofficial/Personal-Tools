import { FC } from 'react';
import { IconProps } from "../../types";

const IconBill: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.66992 2.5V14.47C3.66992 15.45 4.12992 16.38 4.91992 16.97L10.1299 20.87C11.2399 21.7 12.7699 21.7 13.8799 20.87L19.0899 16.97C19.8799 16.38 20.3399 15.45 20.3399 14.47V2.5H3.66992Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path d="M2 2.5H22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M8 8H16" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8 13H16" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.93 4.79004H7.35C3.25 4.79004 2 6.04004 2 10.14V13.86C2 17.96 3.25 19.21 7.35 19.21H12.93C17.03 19.21 18.28 17.96 18.28 13.86V10.14C18.28 6.04004 17.03 4.79004 12.93 4.79004Z" fill="currentColor" /><path d="M20.4192 8.99998C20.2792 8.98998 20.0992 8.97998 19.8992 8.97998C19.5092 8.97998 19.1992 9.28998 19.1992 9.67998V14.33C19.1992 14.72 19.5092 15.03 19.8992 15.03C20.0992 15.03 20.2692 15.02 20.4392 15.01C21.9992 14.83 21.9992 13.73 21.9992 12.93V11.07C21.9992 10.27 21.9992 9.16998 20.4192 8.99998Z" fill="currentColor" /><path d="M6.37958 14.7501C6.31958 14.7501 6.25958 14.7401 6.19958 14.7301C5.79958 14.6301 5.54958 14.2201 5.64958 13.8201C5.94958 12.6301 5.94958 11.3701 5.64958 10.1801C5.54958 9.7801 5.78958 9.3701 6.19958 9.2701C6.59958 9.1701 6.99958 9.4201 7.09958 9.8201C7.45958 11.2501 7.45958 12.7601 7.09958 14.1801C7.01958 14.5201 6.70958 14.7501 6.37958 14.7501Z" fill="currentColor" /><path d="M9.87959 14.7499C9.81959 14.7499 9.75959 14.7399 9.69959 14.7299C9.29959 14.6299 9.04958 14.2199 9.14958 13.8199C9.44958 12.6299 9.44958 11.3699 9.14958 10.1799C9.04958 9.77995 9.28959 9.36995 9.69959 9.26995C10.0996 9.16995 10.5096 9.40995 10.6096 9.81995C10.9696 11.2499 10.9696 12.7599 10.6096 14.1799C10.5196 14.5199 10.2096 14.7499 9.87959 14.7499Z" fill="currentColor" /><path d="M13.3796 14.7499C13.3196 14.7499 13.2596 14.7399 13.1996 14.7299C12.7996 14.6299 12.5496 14.2199 12.6496 13.8199C12.9496 12.6299 12.9496 11.3699 12.6496 10.1799C12.5496 9.77995 12.7896 9.36995 13.1996 9.26995C13.5996 9.16995 14.0096 9.40995 14.1096 9.81995C14.4696 11.2499 14.4696 12.7599 14.1096 14.1799C14.0196 14.5199 13.7096 14.7499 13.3796 14.7499Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBill;