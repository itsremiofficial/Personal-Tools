import { FC } from 'react';
import { IconProps } from "../../types";

const IconMoneyForbidden: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 15.2V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V15C22 18.5 20 20 17 20H8.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.5 9.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 18C9 18.75 8.78998 19.46 8.41998 20.06C7.72998 21.22 6.46 22 5 22C3.54 22 2.27002 21.22 1.58002 20.06C1.21002 19.46 1 18.75 1 18C1 15.79 2.79 14 5 14C7.21 14 9 15.79 9 18Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.75 15.25L2.25 20.75" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 9V15C22 18.5 20 20 17 20H8.45001C8.80001 19.41 9 18.73 9 18C9 15.79 7.21 14 5 14C3.8 14 2.73 14.53 2 15.36V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9Z" fill="currentColor" /><path d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" fill="currentColor" /><path d="M18.5 14.75C18.09 14.75 17.75 14.41 17.75 14V10C17.75 9.59 18.09 9.25 18.5 9.25C18.91 9.25 19.25 9.59 19.25 10V14C19.25 14.41 18.91 14.75 18.5 14.75Z" fill="currentColor" /><path d="M5 14C2.79 14 1 15.79 1 18C1 18.75 1.20999 19.46 1.57999 20.06C2.26999 21.22 3.54 22 5 22C6.46 22 7.73001 21.22 8.42001 20.06C8.79001 19.46 9 18.75 9 18C9 15.79 7.21 14 5 14ZM6.48999 18.73H5.75V19.51C5.75 19.92 5.41 20.26 5 20.26C4.59 20.26 4.25 19.92 4.25 19.51V18.73H3.51001C3.10001 18.73 2.76001 18.39 2.76001 17.98C2.76001 17.57 3.10001 17.23 3.51001 17.23H4.25V16.52C4.25 16.11 4.59 15.77 5 15.77C5.41 15.77 5.75 16.11 5.75 16.52V17.23H6.48999C6.89999 17.23 7.23999 17.57 7.23999 17.98C7.23999 18.39 6.90999 18.73 6.48999 18.73Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMoneyForbidden;