import { FC } from 'react';
import { IconProps } from "../../types";

const IconPaintbucket: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3195_3371)"><path d="M3.7706 15.56L7.2306 19.02C9.6606 21.45 10.4906 21.41 12.8906 19.02L18.4606 13.45C20.4006 11.51 20.8906 10.22 18.4606 7.78996L15.0006 4.32996C12.4106 1.73996 11.2806 2.38996 9.3406 4.32996L3.7706 9.89996C1.3806 12.3 1.1806 12.97 3.7706 15.56Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19.1995 16.79L18.5395 17.88C17.6095 19.43 18.3295 20.7 20.1395 20.7C21.9495 20.7 22.6695 19.43 21.7395 17.88L21.0795 16.79C20.5595 15.93 19.7095 15.93 19.1995 16.79Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 12.2398C7.56 10.7298 13.42 10.6798 19 12.1098L19.5 12.2398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><defs><clipPath ><rect width="24" height="24" fill="none" /></clipPath></defs></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M17 17.25H13.9C13.6 17.25 13.33 17.08 13.21 16.8C13.09 16.52 13.14 16.21 13.34 15.99L14.96 14.2C15.63 13.45 16.01 12.5 16.01 11.52C16.01 10.52 15.6 9.58 14.85 8.87C14.1 8.16 13.06 7.75 12 7.75C10.94 7.75 9.90002 8.16 9.15002 8.87C8.40002 9.58 7.98999 10.52 7.98999 11.52C7.98999 12.5 8.35998 13.45 9.03998 14.2L10.66 15.99C10.86 16.21 10.91 16.53 10.79 16.8C10.67 17.07 10.4 17.25 10.1 17.25H7C6.59 17.25 6.25 16.91 6.25 16.5C6.25 16.09 6.59 15.75 7 15.75H8.40997L7.91998 15.21C6.99998 14.19 6.48999 12.88 6.48999 11.52C6.48999 10.13 7.08 8.76003 8.12 7.78003C9.16 6.79003 10.54 6.25 12 6.25C13.46 6.25 14.84 6.79003 15.88 7.78003C16.91 8.76003 17.51 10.13 17.51 11.52C17.51 12.87 17 14.18 16.08 15.21L15.59 15.75H17C17.41 15.75 17.75 16.09 17.75 16.5C17.75 16.91 17.41 17.25 17 17.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconPaintbucket;