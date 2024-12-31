import { FC } from 'react';
import { IconProps } from "../../types";

const IconVolumeSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 7.36979V6.40979C14 3.42979 11.93 2.28979 9.41 3.86979L6.49 5.69979C6.17 5.88979 5.8 5.99979 5.43 5.99979H4C2 5.99979 1 6.99979 1 8.99979V12.9998C1 14.9998 2 15.9998 4 15.9998H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.41016 18.1302C11.9302 19.7102 14.0002 18.5602 14.0002 15.5902V11.9502" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.81 8.41992C18.71 10.5699 18.44 13.0799 17 14.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.1501 6.7998C21.6201 10.2898 21.1801 14.3698 18.8301 17.4998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21 1L1 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.25 7.41021V16.5902C19.25 18.3102 18.63 19.6002 17.52 20.2202C17.07 20.4702 16.57 20.5902 16.05 20.5902C15.25 20.5902 14.39 20.3202 13.51 19.7702L10.59 17.9402C10.39 17.8202 10.16 17.7502 9.93 17.7502H9V6.25021H9.93C10.16 6.25021 10.39 6.18021 10.59 6.06021L13.51 4.23021C14.97 3.32021 16.4 3.16021 17.52 3.78021C18.63 4.40021 19.25 5.69021 19.25 7.41021Z" fill="currentColor" /><path d="M9 6.25V17.75H8.5C6.08 17.75 4.75 16.42 4.75 14V10C4.75 7.58 6.08 6.25 8.5 6.25H9Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconVolumeSlash;