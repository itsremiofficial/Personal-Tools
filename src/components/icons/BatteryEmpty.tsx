import { FC } from 'react';
import { IconProps } from "../../types";

const IconBatteryEmpty: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 19H7C3 19 2 18 2 14V10C2 6 3 5 7 5H13C17 5 18 6 18 10V14C18 18 17 19 13 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.93 4.79004H7.35C3.25 4.79004 2 6.04004 2 10.14V13.86C2 17.96 3.25 19.21 7.35 19.21H12.93C17.03 19.21 18.28 17.96 18.28 13.86V10.14C18.28 6.04004 17.03 4.79004 12.93 4.79004Z" fill="currentColor" /><path d="M20.4192 8.99998C20.2792 8.98998 20.0992 8.97998 19.8992 8.97998C19.5092 8.97998 19.1992 9.28998 19.1992 9.67998V14.33C19.1992 14.72 19.5092 15.03 19.8992 15.03C20.0992 15.03 20.2692 15.02 20.4392 15.01C21.9992 14.83 21.9992 13.73 21.9992 12.93V11.07C21.9992 10.27 21.9992 9.16998 20.4192 8.99998Z" fill="currentColor" /><path d="M6.37958 14.7501C6.31958 14.7501 6.25958 14.7401 6.19958 14.7301C5.79958 14.6301 5.54958 14.2201 5.64958 13.8201C5.94958 12.6301 5.94958 11.3701 5.64958 10.1801C5.54958 9.7801 5.78958 9.3701 6.19958 9.2701C6.59958 9.1701 6.99958 9.4201 7.09958 9.8201C7.45958 11.2501 7.45958 12.7601 7.09958 14.1801C7.01958 14.5201 6.70958 14.7501 6.37958 14.7501Z" fill="currentColor" /><path d="M9.87959 14.7499C9.81959 14.7499 9.75959 14.7399 9.69959 14.7299C9.29959 14.6299 9.04958 14.2199 9.14958 13.8199C9.44958 12.6299 9.44958 11.3699 9.14958 10.1799C9.04958 9.77995 9.28959 9.36995 9.69959 9.26995C10.0996 9.16995 10.5096 9.40995 10.6096 9.81995C10.9696 11.2499 10.9696 12.7599 10.6096 14.1799C10.5196 14.5199 10.2096 14.7499 9.87959 14.7499Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBatteryEmpty;