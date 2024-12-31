import { FC } from 'react';
import { IconProps } from "@/types";

const IconRadar1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 18C21.26 16.33 22 14.25 22 12C22 9.75 21.26 7.67 20 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 6C2.74 7.67 2 9.75 2 12C2 14.25 2.74 16.33 4 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.8008 15.5999C17.5508 14.5999 18.0008 13.3499 18.0008 11.9999C18.0008 10.6499 17.5508 9.3999 16.8008 8.3999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.20001 8.3999C6.45001 9.3999 6 10.6499 6 11.9999C6 13.3499 6.45001 14.5999 7.20001 15.5999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M12 19.75C7.73 19.75 4.25 16.27 4.25 12C4.25 10.64 4.61 9.31 5.28 8.14C5.49 7.78 5.94999 7.66 6.29999 7.86L12.37 11.35C12.73 11.56 12.85 12.01 12.65 12.37C12.44 12.73 11.99 12.85 11.63 12.65L6.25 9.56C5.93 10.33 5.76001 11.16 5.76001 12C5.76001 15.45 8.56001 18.25 12.01 18.25C15.46 18.25 18.26 15.45 18.26 12C18.26 8.55 15.46 5.75 12.01 5.75C10.65 5.75 9.35001 6.18 8.26001 7C7.93001 7.25 7.45999 7.18001 7.20999 6.85001C6.95999 6.52001 7.02999 6.05 7.35999 5.8C8.70999 4.79 10.32 4.25 12.01 4.25C16.28 4.25 19.76 7.73 19.76 12C19.76 16.27 16.27 19.75 12 19.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconRadar1;