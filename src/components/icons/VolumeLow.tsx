import { FC } from 'react';
import { IconProps } from "../../types";

const IconVolumeLow1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33008 9.99979V13.9998C3.33008 15.9998 4.33008 16.9998 6.33008 16.9998H7.76008C8.13008 16.9998 8.50008 17.1098 8.82008 17.2998L11.7401 19.1298C14.2601 20.7098 16.3301 19.5598 16.3301 16.5898V7.40979C16.3301 4.42979 14.2601 3.28979 11.7401 4.86979L8.82008 6.69979C8.50008 6.88979 8.13008 6.99979 7.76008 6.99979H6.33008C4.33008 6.99979 3.33008 7.99979 3.33008 9.99979Z" stroke="currentColor" strokeWidth="1.5" /><path opacity={duotone ? "0.4" : "1"} d="M19.3301 8C21.1101 10.37 21.1101 13.63 19.3301 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 12.75H18C17.59 12.75 17.25 12.41 17.25 12C17.25 11.59 17.59 11.25 18 11.25H22C22.41 11.25 22.75 11.59 22.75 12C22.75 12.41 22.41 12.75 22 12.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.75 7.41021V16.5902C15.75 18.3102 15.13 19.6002 14.02 20.2202C13.57 20.4702 13.07 20.5902 12.55 20.5902C11.75 20.5902 10.89 20.3202 10.01 19.7702L7.09 17.9402C6.89 17.8202 6.66 17.7502 6.43 17.7502H5.5V6.25021H6.43C6.66 6.25021 6.89 6.18021 7.09 6.06021L10.01 4.23021C11.47 3.32021 12.9 3.16021 14.02 3.78021C15.13 4.40021 15.75 5.69021 15.75 7.41021Z" fill="currentColor" /><path d="M5.5 6.25V17.75H5C2.58 17.75 1.25 16.42 1.25 14V10C1.25 7.58 2.58 6.25 5 6.25H5.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconVolumeLow1;