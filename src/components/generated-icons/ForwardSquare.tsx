import { FC } from 'react';
import { IconProps } from "@/types";

const IconForwardSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M15 15.3802H10.08C8.38 15.3802 7 14.0002 7 12.3002C7 10.6002 8.38 9.22021 10.08 9.22021H16.85" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.4297 10.7701L16.9997 9.19012L15.4297 7.62012" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.82001C4.17001 2 2 4.17 2 7.81V16.18C2 19.82 4.17 21.99 7.81 21.99H16.18C19.82 21.99 21.99 19.82 21.99 16.18V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M17.53 8.66006L15.96 7.09006C15.67 6.80006 15.19 6.80006 14.9 7.09006C14.61 7.38006 14.61 7.86006 14.9 8.15006L15.23 8.48006H10.08C7.97 8.48006 6.25 10.2001 6.25 12.3101C6.25 14.4201 7.97 16.1401 10.08 16.1401H15C15.41 16.1401 15.75 15.8001 15.75 15.3901C15.75 14.9801 15.41 14.6401 15 14.6401H10.08C8.8 14.6401 7.75 13.6001 7.75 12.3101C7.75 11.0201 8.79 9.98006 10.08 9.98006H15.16L14.9 10.2401C14.61 10.5301 14.61 11.0101 14.9 11.3001C15.05 11.4501 15.24 11.5201 15.43 11.5201C15.62 11.5201 15.81 11.4501 15.96 11.3001L17.53 9.73006C17.82 9.43006 17.82 8.96006 17.53 8.66006Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconForwardSquare;