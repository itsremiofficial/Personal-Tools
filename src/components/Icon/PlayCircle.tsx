import { FC } from 'react';
import { IconProps } from "../../types";

const IconPlayCricle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0703 19.0702C22.9803 15.1602 22.9803 8.83018 19.0703 4.93018" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4.93055 4.93018C1.02055 8.84018 1.02055 15.1702 4.93055 19.0702" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.69922 21.4102C9.76922 21.7802 10.8792 21.9602 11.9992 21.9602C13.1192 21.9502 14.2292 21.7802 15.2992 21.4102" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.69922 2.59009C9.76922 2.22009 10.8792 2.04004 11.9992 2.04004C13.1192 2.04004 14.2292 2.22009 15.2992 2.59009" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.74023 12.0001V10.3302C8.74023 8.25016 10.2103 7.40014 12.0103 8.44014L13.4602 9.28017L14.9102 10.1201C16.7102 11.1601 16.7102 12.8602 14.9102 13.9002L13.4602 14.7401L12.0103 15.5802C10.2103 16.6202 8.74023 15.7701 8.74023 13.6901V12.0001Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 12C22 13.31 21.75 14.57 21.28 15.72C20.63 15.27 19.84 15 19 15C18.06 15 17.19 15.33 16.5 15.88C15.58 16.61 15 17.74 15 19C15 19.75 15.21 20.46 15.58 21.06C15.62 21.13 15.67 21.2 15.73 21.27C14.58 21.74 13.32 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" fill="currentColor" /><path d="M9.38086 12.0001V10.6101C9.38086 8.89008 10.6009 8.18007 12.0909 9.04007L13.2909 9.73007L14.4908 10.4201C15.9808 11.2801 15.9808 12.6901 14.4908 13.5501L13.2909 14.2401L12.0909 14.9301C10.6009 15.7901 9.38086 15.0901 9.38086 13.3601V12.0001Z" fill="currentColor" /><path d="M19 15C18.06 15 17.19 15.33 16.5 15.88C15.58 16.61 15 17.74 15 19C15 19.75 15.21 20.46 15.58 21.06C16.27 22.22 17.54 23 19 23C20.01 23 20.93 22.63 21.63 22C21.94 21.74 22.21 21.42 22.42 21.06C22.79 20.46 23 19.75 23 19C23 16.79 21.21 15 19 15ZM20.5 19.73H19.75V20.51C19.75 20.92 19.41 21.26 19 21.26C18.59 21.26 18.25 20.92 18.25 20.51V19.73H17.5C17.09 19.73 16.75 19.39 16.75 18.98C16.75 18.57 17.09 18.23 17.5 18.23H18.25V17.52C18.25 17.11 18.59 16.77 19 16.77C19.41 16.77 19.75 17.11 19.75 17.52V18.23H20.5C20.91 18.23 21.25 18.57 21.25 18.98C21.25 19.39 20.91 19.73 20.5 19.73Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconPlayCricle;