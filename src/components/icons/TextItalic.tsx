import { FC } from 'react';
import { IconProps } from "../../types";

const IconTextUnderline: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M5 21H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 3V10C5 13.87 8.13 17 12 17C15.87 17 19 13.87 19 10V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C7.61 22 7.41 21.99 7.22 21.98C5.99 21.9 4.95 21.55 4.13 20.95C3.71 20.66 3.34 20.29 3.05 19.87C2.36 18.92 2 17.68 2 16.19V7.81C2 4.37 3.94 2.24 7.22 2.03C7.41 2.01 7.61 2 7.81 2H16.19C17.68 2 18.92 2.36 19.87 3.05C20.29 3.34 20.66 3.71 20.95 4.13C21.64 5.08 22 6.32 22 7.81Z" fill="currentColor" /><path d="M15.03 11.49C15.63 10.83 16 9.96 16 9C16 6.93 14.32 5.25 12.25 5.25H9.01C7.9 5.25 7 6.15 7 7.26V16.74C7 17.85 7.9 18.75 9.01 18.75H13.75C15.82 18.75 17.5 17.07 17.5 15C17.5 13.38 16.47 12.02 15.03 11.49ZM8.5 7.26C8.5 6.98 8.73 6.75 9.01 6.75H12.25C13.49 6.75 14.5 7.76 14.5 9C14.5 10.24 13.49 11.25 12.25 11.25H8.5V7.26ZM13.75 17.25H9.01C8.73 17.25 8.5 17.02 8.5 16.74V12.75H13.75C14.99 12.75 16 13.76 16 15C16 16.24 14.99 17.25 13.75 17.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTextUnderline;