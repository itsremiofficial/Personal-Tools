import { FC } from 'react';
import { IconProps } from "../../types";

const IconBuildings: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 22H5C3 22 2 21 2 19V11C2 9 3 8 5 8H10V19C10 21 11 22 13 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.11 4C10.03 4.3 10 4.63 10 5V8H5V6C5 4.9 5.9 4 7 4H10.11Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14 8V13" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18 8V13" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17 17H15C14.45 17 14 17.45 14 18V22H18V18C18 17.45 17.55 17 17 17Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6 13V17" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 19V5C10 3 11 2 13 2H19C21 2 22 3 22 5V19C22 21 21 22 19 22H13C11 22 10 21 10 19Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M15.6595 11.93C15.6495 11.79 15.5895 11.64 15.4895 11.54L10.7895 6.84001L10.2395 6.28996C10.0495 6.09996 9.74948 6.09996 9.55948 6.28996C9.36948 6.47996 9.36948 6.77995 9.55948 6.96995L10.1095 7.52L6.5095 11.12C6.0995 11.53 5.87948 11.95 5.86948 12.36C5.85948 12.8 6.0695 13.24 6.5095 13.69L9.07947 16.26C9.93947 17.11 10.7995 17.11 11.6495 16.26L15.4995 12.41C15.6095 12.27 15.6695 12.09 15.6595 11.93Z" fill="currentColor" /><path d="M16.9589 14.1902C16.7989 14.0102 16.4889 14.0102 16.3189 14.1902C16.1189 14.4002 15.1289 15.5202 15.1289 16.3602C15.1289 17.1902 15.7989 17.8602 16.6289 17.8602C17.4589 17.8602 18.1289 17.1902 18.1289 16.3602C18.1389 15.5202 17.1589 14.4102 16.9589 14.1902Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBuildings;