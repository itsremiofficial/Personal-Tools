import { FC } from 'react';
import { IconProps } from "@/types";

const IconHtml3: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.1201 2H19.8901C20.4901 2 20.9501 2.51999 20.8801 3.10999L19.0801 19.33C19.0401 19.73 18.7501 20.07 18.3601 20.18L12.2801 21.92C12.1001 21.97 11.9101 21.97 11.7301 21.92L5.6501 20.18C5.2601 20.07 4.9801 19.73 4.9301 19.33L3.1301 3.10999C3.0601 2.51999 3.5201 2 4.1201 2Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M7.5 6.97998L16.5 6.99997L15.5 16L12 17L8.5 16L8 14" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 11H16.06" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M4.1201 2H19.8901C20.4901 2 20.9501 2.52 20.8801 3.11L19.0801 19.33C19.0401 19.73 18.7501 20.07 18.3601 20.18L12.2801 21.92C12.1001 21.97 11.9101 21.97 11.7301 21.92L5.6501 20.18C5.2601 20.07 4.9801 19.73 4.9301 19.33L3.1301 3.11C3.0601 2.52 3.5201 2 4.1201 2Z" fill="currentColor" /><path d="M17.06 6.49998C16.92 6.33998 16.72 6.24998 16.5 6.24998L7.5 6.22998C7.09 6.22998 6.75 6.55998 6.75 6.97998C6.75 7.38998 7.08 7.72998 7.5 7.72998L15.66 7.74998L15.38 10.25H8C7.59 10.25 7.25 10.59 7.25 11C7.25 11.41 7.59 11.75 8 11.75H15.22L14.81 15.42L12 16.22L9.12 15.4L8.72 13.82C8.62 13.42 8.21 13.17 7.81 13.27C7.41 13.37 7.16 13.78 7.26 14.18L7.76 16.18C7.82 16.44 8.02 16.65 8.28 16.72L11.78 17.72C11.85 17.74 11.92 17.75 11.99 17.75C12.06 17.75 12.13 17.74 12.2 17.72L15.7 16.72C15.99 16.64 16.21 16.39 16.24 16.08L17.24 7.07998C17.27 6.86998 17.2 6.65998 17.06 6.49998Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconHtml3;