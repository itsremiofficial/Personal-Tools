import { FC } from 'react';
import { IconProps } from "../../types";

const IconConvertshape: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.15V8.85C22 11.1 21.1 12 18.85 12H16.15C13.9 12 13 11.1 13 8.85V5.15C13 2.9 13.9 2 16.15 2H18.85C21.1 2 22 2.9 22 5.15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11 15.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V15.15C2 12.9 2.9 12 5.15 12H7.85C10.1 12 11 12.9 11 15.15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C6.32 22 5.08 21.64 4.13 20.95C3.71 20.66 3.34 20.29 3.05 19.87C2.36 18.92 2 17.68 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.19C17.68 2 18.92 2.36 19.87 3.05C20.29 3.34 20.66 3.71 20.95 4.13C21.64 5.08 22 6.32 22 7.81Z" fill="currentColor" /><path d="M20.9508 4.13005L4.13078 20.9501C3.71078 20.66 3.34078 20.2901 3.05078 19.8701L19.8708 3.05005C20.2908 3.34005 20.6608 3.71005 20.9508 4.13005Z" fill="currentColor" /><path d="M18.5 14.75H16.81V13C16.81 12.59 16.47 12.25 16.06 12.25C15.65 12.25 15.31 12.59 15.31 13V14.75H13.5C13.09 14.75 12.75 15.09 12.75 15.5C12.75 15.91 13.09 16.25 13.5 16.25H15.31V18C15.31 18.41 15.65 18.75 16.06 18.75C16.47 18.75 16.81 18.41 16.81 18V16.25H18.5C18.91 16.25 19.25 15.91 19.25 15.5C19.25 15.09 18.91 14.75 18.5 14.75Z" fill="currentColor" /><path d="M10.5 8.25H5.5C5.09 8.25 4.75 7.91 4.75 7.5C4.75 7.09 5.09 6.75 5.5 6.75H10.5C10.91 6.75 11.25 7.09 11.25 7.5C11.25 7.91 10.91 8.25 10.5 8.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconConvertshape;