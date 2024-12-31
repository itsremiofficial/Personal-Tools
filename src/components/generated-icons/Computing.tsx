import { FC } from 'react';
import { IconProps } from "@/types";

const IconComputing: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9707 15V9C21.9707 4 19.9707 2 14.9707 2H8.9707C3.9707 2 1.9707 4 1.9707 9V15C1.9707 20 3.9707 22 8.9707 22H14.9707C19.9707 22 21.9707 20 21.9707 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.7195 3.25L3.26953 19.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M16.0605 18V13" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.5 15.5H13.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M10.5 7.5H5.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C6.32 22 5.08 21.64 4.13 20.95C3.71 20.66 3.34 20.29 3.05 19.87C2.36 18.92 2 17.68 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.19C17.68 2 18.92 2.36 19.87 3.05C20.29 3.34 20.66 3.71 20.95 4.13C21.64 5.08 22 6.32 22 7.81Z" fill="currentColor" /><path d="M20.9508 4.13005L4.13078 20.9501C3.71078 20.66 3.34078 20.2901 3.05078 19.8701L19.8708 3.05005C20.2908 3.34005 20.6608 3.71005 20.9508 4.13005Z" fill="currentColor" /><path d="M18.5 14.75H16.81V13C16.81 12.59 16.47 12.25 16.06 12.25C15.65 12.25 15.31 12.59 15.31 13V14.75H13.5C13.09 14.75 12.75 15.09 12.75 15.5C12.75 15.91 13.09 16.25 13.5 16.25H15.31V18C15.31 18.41 15.65 18.75 16.06 18.75C16.47 18.75 16.81 18.41 16.81 18V16.25H18.5C18.91 16.25 19.25 15.91 19.25 15.5C19.25 15.09 18.91 14.75 18.5 14.75Z" fill="currentColor" /><path d="M10.5 8.25H5.5C5.09 8.25 4.75 7.91 4.75 7.5C4.75 7.09 5.09 6.75 5.5 6.75H10.5C10.91 6.75 11.25 7.09 11.25 7.5C11.25 7.91 10.91 8.25 10.5 8.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconComputing;