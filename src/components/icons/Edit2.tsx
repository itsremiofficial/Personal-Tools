import { FC } from 'react';
import { IconProps } from "../../types";

const IconEdit2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2594 3.60022L5.04936 12.2902C4.73936 12.6202 4.43936 13.2702 4.37936 13.7202L4.00936 16.9602C3.87936 18.1302 4.71936 18.9302 5.87936 18.7302L9.09936 18.1802C9.54936 18.1002 10.1794 17.7702 10.4894 17.4302L18.6994 8.74022C20.1194 7.24022 20.7594 5.53022 18.5494 3.44022C16.3494 1.37022 14.6794 2.10022 13.2594 3.60022Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.8906 5.0498C12.3206 7.8098 14.5606 9.9198 17.3406 10.1998" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3 22H21" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M6 9C5.59 9 5.25 8.66 5.25 8.25V6.25C5.25 5.84 5.59 5.5 6 5.5C6.41 5.5 6.75 5.84 6.75 6.25V8.25C6.75 8.66 6.41 9 6 9Z" fill="currentColor" /><path d="M10 9C9.59 9 9.25 8.66 9.25 8.25V6.25C9.25 5.84 9.59 5.5 10 5.5C10.41 5.5 10.75 5.84 10.75 6.25V8.25C10.75 8.66 10.41 9 10 9Z" fill="currentColor" /><path d="M6 18.75C5.59 18.75 5.25 18.41 5.25 18V16C5.25 15.59 5.59 15.25 6 15.25C6.41 15.25 6.75 15.59 6.75 16V18C6.75 18.41 6.41 18.75 6 18.75Z" fill="currentColor" /><path d="M10 18.75C9.59 18.75 9.25 18.41 9.25 18V16C9.25 15.59 9.59 15.25 10 15.25C10.41 15.25 10.75 15.59 10.75 16V18C10.75 18.41 10.41 18.75 10 18.75Z" fill="currentColor" /><path d="M18 8H14C13.59 8 13.25 7.66 13.25 7.25C13.25 6.84 13.59 6.5 14 6.5H18C18.41 6.5 18.75 6.84 18.75 7.25C18.75 7.66 18.41 8 18 8Z" fill="currentColor" /><path d="M18 17.75H14C13.59 17.75 13.25 17.41 13.25 17C13.25 16.59 13.59 16.25 14 16.25H18C18.41 16.25 18.75 16.59 18.75 17C18.75 17.41 18.41 17.75 18 17.75Z" fill="currentColor" /><path d="M22 11.25H2V12.75H22V11.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconEdit2;