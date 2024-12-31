import { FC } from 'react';
import { IconProps } from "../../types";

const IconCommandSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M14.3997 9.6001H9.59961V14.4001H14.3997V9.6001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.79999 17.9999C8.78999 17.9999 9.59998 17.1899 9.59998 16.1999V14.3999H7.79999C6.80999 14.3999 6 15.2099 6 16.1999C6 17.1899 6.80999 17.9999 7.79999 17.9999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.79999 9.60001H9.59998V7.79999C9.59998 6.80999 8.78999 6 7.79999 6C6.80999 6 6 6.80999 6 7.79999C6 8.78999 6.80999 9.60001 7.79999 9.60001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.4004 9.60001H16.2004C17.1904 9.60001 18.0004 8.78999 18.0004 7.79999C18.0004 6.80999 17.1904 6 16.2004 6C15.2104 6 14.4004 6.80999 14.4004 7.79999V9.60001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.2004 17.9999C17.1904 17.9999 18.0004 17.1899 18.0004 16.1999C18.0004 15.2099 17.1904 14.3999 16.2004 14.3999H14.4004V16.1999C14.4004 17.1899 15.2104 17.9999 16.2004 17.9999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.6" : "1"} d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.24 3.88 10.9 6.42 10.21C7.11 11.95 8.59 13.29 10.42 13.79C10.92 13.93 11.45 14 12 14C12.55 14 13.08 13.93 13.58 13.79C13.85 14.47 14 15.22 14 16Z" fill="currentColor" /><path d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22 16C22 19.31 19.31 22 16 22C14.46 22 13.06 21.42 12 20.46C13.23 19.37 14 17.77 14 16C14 15.22 13.85 14.47 13.58 13.79C15.41 13.29 16.89 11.95 17.58 10.21C20.12 10.9 22 13.24 22 16Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCommandSquare;