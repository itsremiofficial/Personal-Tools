import { FC } from 'react';
import { IconProps } from "../../types";

const IconSecurity: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.9099 11.1198C20.9099 16.0098 17.3599 20.5898 12.5099 21.9298C12.1799 22.0198 11.8198 22.0198 11.4898 21.9298C6.63984 20.5898 3.08984 16.0098 3.08984 11.1198V6.72979C3.08984 5.90979 3.70986 4.97979 4.47986 4.66979L10.0498 2.38982C11.2998 1.87982 12.7098 1.87982 13.9598 2.38982L19.5298 4.66979C20.2898 4.97979 20.9199 5.90979 20.9199 6.72979L20.9099 11.1198Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.0399 2.38982C11.2899 1.87982 12.6999 1.87982 13.9499 2.38982L19.5198 4.66979C20.2798 4.97979 20.9099 5.90979 20.9099 6.72979V11.1198C20.9099 16.0098 17.3599 20.5898 12.5099 21.9298C12.1799 22.0198 11.8198 22.0198 11.4898 21.9298C6.63984 20.5898 3.08984 16.0098 3.08984 11.1198" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" fill="currentColor" /><path d="M21.3005 22.0001C21.1205 22.0001 20.9405 21.9301 20.8105 21.8001L18.9505 19.9401C18.6805 19.6701 18.6805 19.2301 18.9505 18.9501C19.2205 18.6801 19.6605 18.6801 19.9405 18.9501L21.8005 20.8101C22.0705 21.0801 22.0705 21.5201 21.8005 21.8001C21.6605 21.9301 21.4805 22.0001 21.3005 22.0001Z" fill="currentColor" /><path d="M14 12.45H9C8.59 12.45 8.25 12.11 8.25 11.7C8.25 11.29 8.59 10.95 9 10.95H14C14.41 10.95 14.75 11.29 14.75 11.7C14.75 12.11 14.41 12.45 14 12.45Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSecurity;