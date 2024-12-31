import { FC } from 'react';
import { IconProps } from "../../types";

const IconConvertshape2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.5 11C19.9853 11 22 8.98528 22 6.5C22 4.01472 19.9853 2 17.5 2C15.0147 2 13 4.01472 13 6.5C13 8.98528 15.0147 11 17.5 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.0293 12.03C22.0293 15.06 20.6793 17.78 18.5393 19.62C18.1593 19.94 17.7593 20.24 17.3293 20.51C15.7993 21.47 13.9793 22.03 12.0293 22.03C6.5093 22.03 2.0293 17.55 2.0293 12.03C2.0293 9.00003 3.3793 6.28003 5.5193 4.44003C5.8993 4.12003 6.2993 3.82003 6.7293 3.55003C8.2593 2.59003 10.0793 2.03003 12.0293 2.03003C17.5493 2.03003 22.0293 6.51003 22.0293 12.03Z" fill="currentColor" /><path d="M15.0995 7.68005L15.0895 12.23C15.0895 12.54 14.8995 12.81 14.6195 12.92C14.5295 12.96 14.4295 12.98 14.3395 12.98C14.1395 12.98 13.9495 12.9 13.8095 12.76L5.61953 4.56005C5.57953 4.52005 5.54953 4.48005 5.51953 4.44005C5.89953 4.12005 6.29953 3.82005 6.72953 3.55005L13.5895 10.42L13.5995 7.68005C13.5995 7.27005 13.9395 6.93005 14.3495 6.93005C14.7695 6.93005 15.0995 7.27005 15.0995 7.68005Z" fill="currentColor" /><path d="M18.5409 19.6201C18.1609 19.9401 17.7609 20.2401 17.3309 20.5101L10.4709 13.6401L10.4609 16.3801C10.4609 16.7901 10.1209 17.1301 9.71094 17.1301C9.29094 17.1301 8.96094 16.7901 8.96094 16.3801L8.97094 11.8301C8.97094 11.5201 9.16094 11.2501 9.44094 11.1401C9.71094 11.0201 10.0409 11.0801 10.2509 11.3001L18.4409 19.5001C18.4809 19.5401 18.5109 19.5801 18.5409 19.6201Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconConvertshape2;