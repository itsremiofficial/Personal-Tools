import { FC } from 'react';
import { IconProps } from "../../types";

const IconArrow: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 18V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 14V11C12 7.13 15.13 4 19 4H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 4H5C8.87 4 12 7.13 12 11V12V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 2L2 4L4 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 2L22 4L20 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81V16.18C2 19.82 4.17 21.99 7.81 21.99H16.18C19.82 21.99 21.99 19.82 21.99 16.18V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M10.1801 6.1001C9.77008 6.1001 9.43008 6.4401 9.43008 6.8501V15.3501L7.67008 13.5901C7.38008 13.3001 6.90008 13.3001 6.61008 13.5901C6.32008 13.8801 6.32008 14.3601 6.61008 14.6501L9.65008 17.6901C9.72008 17.7601 9.80008 17.8101 9.89008 17.8501C9.98008 17.8901 10.0801 17.9101 10.1801 17.9101C10.2801 17.9101 10.3701 17.8901 10.4701 17.8501C10.6501 17.7701 10.8001 17.6301 10.8801 17.4401C10.9201 17.3501 10.9401 17.2501 10.9401 17.1501V6.8501C10.9301 6.4301 10.6001 6.1001 10.1801 6.1001Z" fill="currentColor" /><path d="M17.3903 9.3601L14.3503 6.3201C14.2803 6.2501 14.2003 6.2001 14.1103 6.1601C13.9303 6.0801 13.7203 6.0801 13.5403 6.1601C13.3603 6.2401 13.2103 6.3801 13.1303 6.5701C13.0903 6.6601 13.0703 6.7601 13.0703 6.8601V17.1701C13.0703 17.5801 13.4103 17.9201 13.8203 17.9201C14.2303 17.9201 14.5703 17.5801 14.5703 17.1701V8.6701L16.3303 10.4301C16.4803 10.5801 16.6703 10.6501 16.8603 10.6501C17.0503 10.6501 17.2403 10.5801 17.3903 10.4301C17.6803 10.1201 17.6803 9.6501 17.3903 9.3601Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconArrow;