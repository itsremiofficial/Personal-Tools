import { FC } from 'react';
import { IconProps } from "../../types";

const IconHeartEdit: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.49 12.0001C21.81 10.9801 22 9.88012 22 8.69012C22 5.60012 19.51 3.1001 16.44 3.1001C14.62 3.1001 13.01 3.98015 12 5.34015C10.99 3.98015 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.60012 2 8.69012C2 15.6901 8.48 19.8201 11.38 20.8201C11.55 20.8801 11.77 20.9101 12 20.9101" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.2091 15.74L15.6691 19.2801C15.5291 19.4201 15.3991 19.68 15.3691 19.87L15.1791 21.22C15.1091 21.71 15.4491 22.05 15.9391 21.98L17.2891 21.79C17.4791 21.76 17.7491 21.63 17.8791 21.49L21.4191 17.95C22.0291 17.34 22.3191 16.63 21.4191 15.73C20.5291 14.84 19.8191 15.13 19.2091 15.74Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.6992 16.25C18.9992 17.33 19.8392 18.17 20.9192 18.47" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M2.74982 18.65C2.33982 18.65 1.99982 18.31 1.99982 17.9V12.2C1.94982 9.49005 2.95982 6.93005 4.83982 5.01005C6.71982 3.10005 9.23982 2.05005 11.9498 2.05005C17.4898 2.05005 21.9998 6.56005 21.9998 12.1V17.8C21.9998 18.21 21.6598 18.55 21.2498 18.55C20.8398 18.55 20.4998 18.21 20.4998 17.8V12.1C20.4998 7.39005 16.6698 3.55005 11.9498 3.55005C9.63982 3.55005 7.49982 4.44005 5.90982 6.06005C4.30982 7.69005 3.45982 9.86005 3.49982 12.18V17.89C3.49982 18.31 3.16982 18.65 2.74982 18.65Z" fill="currentColor" /><path d="M5.94 12.45H5.81C3.71 12.45 2 14.16 2 16.26V18.14C2 20.24 3.71 21.95 5.81 21.95H5.94C8.04 21.95 9.75 20.24 9.75 18.14V16.26C9.75 14.16 8.04 12.45 5.94 12.45Z" fill="currentColor" /><path d="M18.19 12.45H18.06C15.96 12.45 14.25 14.16 14.25 16.26V18.14C14.25 20.24 15.96 21.95 18.06 21.95H18.19C20.29 21.95 22 20.24 22 18.14V16.26C22 14.16 20.29 12.45 18.19 12.45Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconHeartEdit;