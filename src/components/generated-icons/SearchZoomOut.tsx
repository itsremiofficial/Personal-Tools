import { FC } from 'react';
import { IconProps } from "@/types";

const IconSearchZoomOut: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.5 11H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.9304 20.6898C19.4604 22.2898 20.6704 22.4498 21.6004 21.0498C22.4504 19.7698 21.8904 18.7198 20.3504 18.7198C19.2104 18.7098 18.5704 19.5998 18.9304 20.6898Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" fill="currentColor" /><path d="M21.3005 22.0001C21.1205 22.0001 20.9405 21.9301 20.8105 21.8001L18.9505 19.9401C18.6805 19.6701 18.6805 19.2301 18.9505 18.9501C19.2205 18.6801 19.6605 18.6801 19.9405 18.9501L21.8005 20.8101C22.0705 21.0801 22.0705 21.5201 21.8005 21.8001C21.6605 21.9301 21.4805 22.0001 21.3005 22.0001Z" fill="currentColor" /><path d="M14 12.45H9C8.59 12.45 8.25 12.11 8.25 11.7C8.25 11.29 8.59 10.95 9 10.95H14C14.41 10.95 14.75 11.29 14.75 11.7C14.75 12.11 14.41 12.45 14 12.45Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSearchZoomOut;