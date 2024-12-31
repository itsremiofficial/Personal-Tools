import { FC } from 'react';
import { IconProps } from "@/types";

const IconMaximize21: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C7.61 22 7.41 21.99 7.22 21.98C5.99 21.9 4.95 21.55 4.13 20.95C3.71 20.66 3.34 20.29 3.05 19.87C2.36 18.92 2 17.68 2 16.19V7.81C2 4.37 3.94 2.24 7.22 2.03C7.41 2.01 7.61 2 7.81 2H16.19C17.68 2 18.92 2.36 19.87 3.05C20.29 3.34 20.66 3.71 20.95 4.13C21.64 5.08 22 6.32 22 7.81Z" fill="currentColor" /><path d="M18 10.75C18.41 10.75 18.75 10.41 18.75 10V6C18.75 5.9 18.73 5.81 18.69 5.71C18.61 5.53 18.47 5.38 18.28 5.3C18.19 5.27 18.1 5.25 18 5.25H14C13.59 5.25 13.25 5.59 13.25 6C13.25 6.41 13.59 6.75 14 6.75H16.19L12 10.94L7.81 6.75H10C10.41 6.75 10.75 6.41 10.75 6C10.75 5.59 10.41 5.25 10 5.25H6C5.9 5.25 5.81 5.27 5.71 5.31C5.53 5.38 5.38 5.53 5.31 5.71C5.27 5.81 5.25 5.9 5.25 6V10C5.25 10.41 5.59 10.75 6 10.75C6.41 10.75 6.75 10.41 6.75 10V7.81L10.94 12L6.75 16.19V14C6.75 13.59 6.41 13.25 6 13.25C5.59 13.25 5.25 13.59 5.25 14V18C5.25 18.1 5.27 18.19 5.31 18.29C5.39 18.47 5.53 18.62 5.72 18.7C5.8 18.73 5.9 18.75 6 18.75H10C10.41 18.75 10.75 18.41 10.75 18C10.75 17.59 10.41 17.25 10 17.25H7.81L12 13.06L16.19 17.25H14C13.59 17.25 13.25 17.59 13.25 18C13.25 18.41 13.59 18.75 14 18.75H18C18.1 18.75 18.2 18.73 18.29 18.69C18.47 18.61 18.62 18.47 18.7 18.28C18.74 18.19 18.76 18.09 18.76 17.99V13.99C18.76 13.58 18.42 13.24 18.01 13.24C17.6 13.24 17.26 13.58 17.26 13.99V16.18L13.06 12L17.25 7.81V10C17.25 10.41 17.59 10.75 18 10.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMaximize21;