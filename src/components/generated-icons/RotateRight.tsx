import { FC } from 'react';
import { IconProps } from "@/types";

const IconRotateRight: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M14.8901 5.0799C14.0201 4.8199 13.0601 4.6499 12.0001 4.6499C7.21008 4.6499 3.33008 8.5299 3.33008 13.3199C3.33008 18.1199 7.21008 21.9999 12.0001 21.9999C16.7901 21.9999 20.6701 18.1199 20.6701 13.3299C20.6701 11.5499 20.1301 9.8899 19.2101 8.5099" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.1302 5.32L13.2402 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.1298 5.31982L12.7598 7.77982" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.75 22H12.25C8.5 22 7 20.5 7 16.75V12.25C7 8.5 8.5 7 12.25 7H16.75C20.5 7 22 8.5 22 12.25V16.75C22 20.5 20.5 22 16.75 22Z" fill="currentColor" /><path d="M2.75 10.5C3.16 10.5 3.5 10.16 3.5 9.75C3.5 6.79 5.56 4.31 8.33 3.66L8.06 4.11C7.85 4.47 7.96 4.93 8.32 5.14C8.68 5.35 9.14 5.24 9.35 4.88L10.4 3.13C10.54 2.9 10.54 2.61 10.41 2.38C10.27 2.15 10.02 2 9.75 2C5.48 2 2 5.48 2 9.75C2 10.16 2.34 10.5 2.75 10.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconRotateRight;