import { FC } from 'react';
import { IconProps } from "../../types";

const IconDriver2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M6 6.25V8.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10 6.25V8.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6 16V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10 16V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14 7.25H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14 17H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z" fill="currentColor" /><path d="M15.7997 2.20999C15.3897 1.79999 14.6797 2.07999 14.6797 2.64999V6.13999C14.6797 7.59999 15.9197 8.80999 17.4297 8.80999C18.3797 8.81999 19.6997 8.81999 20.8297 8.81999C21.3997 8.81999 21.6997 8.14999 21.2997 7.74999C19.8597 6.29999 17.2797 3.68999 15.7997 2.20999Z" fill="currentColor" /><path d="M11.5295 12.47L9.52945 10.47C9.51945 10.46 9.50945 10.46 9.50945 10.45C9.44945 10.39 9.36945 10.34 9.28945 10.3C9.27945 10.3 9.27945 10.3 9.26945 10.3C9.18945 10.27 9.10945 10.26 9.02945 10.25C8.99945 10.25 8.97945 10.25 8.94945 10.25C8.88945 10.25 8.81945 10.27 8.75945 10.29C8.72945 10.3 8.70945 10.31 8.68945 10.32C8.60945 10.36 8.52945 10.4 8.46945 10.47L6.46945 12.47C6.17945 12.76 6.17945 13.24 6.46945 13.53C6.75945 13.82 7.23945 13.82 7.52945 13.53L8.24945 12.81V17C8.24945 17.41 8.58945 17.75 8.99945 17.75C9.40945 17.75 9.74945 17.41 9.74945 17V12.81L10.4695 13.53C10.6195 13.68 10.8095 13.75 10.9995 13.75C11.1895 13.75 11.3795 13.68 11.5295 13.53C11.8195 13.24 11.8195 12.76 11.5295 12.47Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDriver2;