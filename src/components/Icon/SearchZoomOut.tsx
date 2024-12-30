import { FC } from 'react';
import { IconProps } from "../../types";

const IconSearchZoomOut1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9 11.7002H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 22L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" fill="currentColor" /><path d="M21.3005 22.0001C21.1205 22.0001 20.9405 21.9301 20.8105 21.8001L18.9505 19.9401C18.6805 19.6701 18.6805 19.2301 18.9505 18.9501C19.2205 18.6801 19.6605 18.6801 19.9405 18.9501L21.8005 20.8101C22.0705 21.0801 22.0705 21.5201 21.8005 21.8001C21.6605 21.9301 21.4805 22.0001 21.3005 22.0001Z" fill="currentColor" /><path d="M14.1992 10.95H12.4492V9.19995C12.4492 8.78995 12.1092 8.44995 11.6992 8.44995C11.2892 8.44995 10.9492 8.78995 10.9492 9.19995V10.95H9.19922C8.78922 10.95 8.44922 11.29 8.44922 11.7C8.44922 12.11 8.78922 12.45 9.19922 12.45H10.9492V14.2C10.9492 14.61 11.2892 14.95 11.6992 14.95C12.1092 14.95 12.4492 14.61 12.4492 14.2V12.45H14.1992C14.6092 12.45 14.9492 12.11 14.9492 11.7C14.9492 11.29 14.6092 10.95 14.1992 10.95Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSearchZoomOut1;