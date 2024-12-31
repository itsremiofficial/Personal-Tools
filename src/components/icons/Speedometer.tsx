import { FC } from 'react';
import { IconProps } from "../../types";

const IconSpotify: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.57031 9.32982C10.2003 7.88982 14.3103 8.39985 17.4903 10.6698" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.94043 12.3801C10.5904 11.3301 13.5904 11.7001 15.9104 13.3601" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.83008 15.4099C10.8201 14.6199 13.0701 14.9 14.8101 16.14" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18Z" fill="currentColor" /><path d="M12 9C12.8284 9 13.5 8.32843 13.5 7.5C13.5 6.67157 12.8284 6 12 6C11.1716 6 10.5 6.67157 10.5 7.5C10.5 8.32843 11.1716 9 12 9Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.9991 1.62012H8.99914C5.80914 1.62012 4.61914 2.81012 4.61914 6.00012V18.0001C4.61914 21.1901 5.80914 22.3801 8.99914 22.3801H14.9991C18.1891 22.3801 19.3791 21.1901 19.3791 18.0001V6.00012C19.3791 2.81012 18.1891 1.62012 14.9991 1.62012ZM11.9991 6.00012C12.8291 6.00012 13.4991 6.67012 13.4991 7.50012C13.4991 8.33012 12.8291 9.00012 11.9991 9.00012C11.1691 9.00012 10.4991 8.33012 10.4991 7.50012C10.4991 6.67012 11.1691 6.00012 11.9991 6.00012ZM11.9991 18.0001C10.3391 18.0001 8.99914 16.6601 8.99914 15.0001C8.99914 13.3401 10.3391 12.0001 11.9991 12.0001C13.6591 12.0001 14.9991 13.3401 14.9991 15.0001C14.9991 16.6601 13.6591 18.0001 11.9991 18.0001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSpotify;