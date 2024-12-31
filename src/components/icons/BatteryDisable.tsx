import { FC } from 'react';
import { IconProps } from "../../types";

const IconBatteryDisable: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.34" : "1"} d="M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 21.5L16 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 5C3 5 2 6 2 10V14C2 17.4 2.72 18.63 5.39 18.92" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M13 19.0001C17 19.0001 18 18.0001 18 14.0001V10.0001C18 6.61008 17.28 5.37008 14.63 5.08008" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" fill="currentColor" /><path d="M6 16.75C5.59 16.75 5.25 16.41 5.25 16V8C5.25 7.59 5.59 7.25 6 7.25C6.41 7.25 6.75 7.59 6.75 8V16C6.75 16.41 6.41 16.75 6 16.75Z" fill="currentColor" /><path d="M9 12.75C8.59 12.75 8.25 12.41 8.25 12V8C8.25 7.59 8.59 7.25 9 7.25C9.41 7.25 9.75 7.59 9.75 8V12C9.75 12.41 9.41 12.75 9 12.75Z" fill="currentColor" /><path d="M9 16.75C8.59 16.75 8.25 16.41 8.25 16V15C8.25 14.59 8.59 14.25 9 14.25C9.41 14.25 9.75 14.59 9.75 15V16C9.75 16.41 9.41 16.75 9 16.75Z" fill="currentColor" /><path d="M15 9.75C14.59 9.75 14.25 9.41 14.25 9V8C14.25 7.59 14.59 7.25 15 7.25C15.41 7.25 15.75 7.59 15.75 8V9C15.75 9.41 15.41 9.75 15 9.75Z" fill="currentColor" /><path d="M12 16.75C11.59 16.75 11.25 16.41 11.25 16V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V16C12.75 16.41 12.41 16.75 12 16.75Z" fill="currentColor" /><path d="M15 16.75C14.59 16.75 14.25 16.41 14.25 16V12C14.25 11.59 14.59 11.25 15 11.25C15.41 11.25 15.75 11.59 15.75 12V16C15.75 16.41 15.41 16.75 15 16.75Z" fill="currentColor" /><path d="M18 16.75C17.59 16.75 17.25 16.41 17.25 16V8C17.25 7.59 17.59 7.25 18 7.25C18.41 7.25 18.75 7.59 18.75 8V16C18.75 16.41 18.41 16.75 18 16.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBatteryDisable;