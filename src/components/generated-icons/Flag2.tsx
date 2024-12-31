import { FC } from 'react';
import { IconProps } from "@/types";

const IconFlag2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.44922 2V22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M6.94922 4L15.0492 7.5C18.3492 8.9 18.3492 11.3 15.2492 12.9L6.94922 17" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6.44922 22C6.03922 22 5.69922 21.66 5.69922 21.25V2.75C5.69922 2.34 6.03922 2 6.44922 2C6.85922 2 7.19922 2.34 7.19922 2.75V21.25C7.19922 21.66 6.85922 22 6.44922 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.2001 7.16004L7.10008 3.66004C6.98008 3.60004 6.85008 3.62004 6.74008 3.69004C6.64008 3.76004 6.58008 3.87004 6.58008 4.00004V17C6.58008 17.13 6.65008 17.25 6.76008 17.32C6.82008 17.36 6.89008 17.38 6.96008 17.38C7.02008 17.38 7.07008 17.37 7.13008 17.34L15.4301 13.24C15.4301 13.24 15.4301 13.24 15.4401 13.24C17.1001 12.38 17.9901 11.27 17.9401 10.1C17.8801 8.92004 16.9101 7.88004 15.2001 7.16004Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFlag2;