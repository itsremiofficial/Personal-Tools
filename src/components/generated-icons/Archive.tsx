import { FC } from 'react';
import { IconProps } from "@/types";

const IconArchive: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 7.75V14.5C18 13.4 17.1 12.5 16 12.5H8C6.9 12.5 6 13.4 6 14.5V7.75C6 6.65 6.9 5.75 8 5.75H16C17.1 5.75 18 6.65 18 7.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 15.75H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 15.75H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 14V11C18 9.9 17.1 9 16 9H8C6.9 9 6 9.9 6 11V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 14.5V15.75H14.5C14.5 17.13 13.38 18.25 12 18.25C10.62 18.25 9.5 17.13 9.5 15.75H6V14.5C6 13.4 6.9 12.5 8 12.5H16C17.1 12.5 18 13.4 18 14.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M19 15H18.75V14.5V14V11V7.75C18.75 6.23 17.52 5 16 5H8C6.48 5 5.25 6.23 5.25 7.75V11V14V14.5V15H5C4.59 15 4.25 15.34 4.25 15.75C4.25 16.16 4.59 16.5 5 16.5H6H8.84003C9.18003 17.93 10.47 19 12 19C13.53 19 14.82 17.93 15.16 16.5H18H19C19.41 16.5 19.75 16.16 19.75 15.75C19.75 15.34 19.41 15 19 15ZM16.79 11.88C16.73 11.86 16.67 11.84 16.6 11.82C16.4 11.78 16.2 11.75 15.99 11.75H7.98999C7.77999 11.75 7.58 11.78 7.38 11.82C7.32 11.83 7.26 11.86 7.19 11.88C7.06 11.92 6.93 11.96 6.81 12.02C6.78 12.03 6.74998 12.04 6.72998 12.05V11C6.72998 10.31 7.28998 9.75 7.97998 9.75H15.98C16.67 9.75 17.23 10.31 17.23 11V12.05C17.2 12.04 17.18 12.03 17.15 12.02C17.05 11.96 16.92 11.92 16.79 11.88ZM8 6.5H16C16.69 6.5 17.25 7.06 17.25 7.75V8.56C16.87 8.37 16.45 8.25 16 8.25H8C7.55 8.25 7.13 8.37 6.75 8.56V7.75C6.75 7.06 7.31 6.5 8 6.5ZM14.5 15C14.09 15 13.75 15.34 13.75 15.75C13.75 16.71 12.96 17.5 12 17.5C11.04 17.5 10.25 16.71 10.25 15.75C10.25 15.34 9.91 15 9.5 15H6.75V14.5C6.75 13.81 7.31 13.25 8 13.25H16C16.69 13.25 17.25 13.81 17.25 14.5V15H14.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconArchive;