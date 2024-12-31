import { FC } from 'react';
import { IconProps } from "../../types";

const IconPrevious: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.2409 7.22005V16.7901C20.2409 18.7501 18.111 19.98 16.411 19L12.261 16.61L8.11094 14.21C6.41094 13.23 6.41094 10.78 8.11094 9.80004L12.261 7.40004L16.411 5.01006C18.111 4.03006 20.2409 5.25005 20.2409 7.22005Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3.75977 18.1798V5.81982" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.28 15.72C20.63 15.27 19.84 15 19 15C18.06 15 17.19 15.33 16.5 15.88C15.58 16.61 15 17.74 15 19C15 19.75 15.21 20.46 15.58 21.06C15.62 21.13 15.67 21.2 15.73 21.27C16.43 22.31 17.63 23 19 23C20.01 23 20.93 22.63 21.63 22C21.94 21.74 22.21 21.42 22.42 21.06C22.79 20.46 23 19.75 23 19C23 17.64 22.32 16.44 21.28 15.72ZM20.6 20.58C20.45 20.73 20.26 20.8 20.07 20.8C19.88 20.8 19.69 20.73 19.54 20.58L19.01 20.05L18.46 20.6C18.31 20.75 18.12 20.82 17.93 20.82C17.74 20.82 17.55 20.75 17.4 20.6C17.11 20.31 17.11 19.83 17.4 19.54L17.95 18.99L17.42 18.46C17.13 18.17 17.13 17.69 17.42 17.4C17.71 17.11 18.19 17.11 18.48 17.4L19.01 17.93L19.51 17.43C19.8 17.14 20.28 17.14 20.57 17.43C20.86 17.72 20.86 18.2 20.57 18.49L20.07 18.99L20.6 19.52C20.89 19.81 20.89 20.28 20.6 20.58Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22 12C22 13.31 21.75 14.57 21.28 15.72C20.63 15.27 19.84 15 19 15C18.06 15 17.19 15.33 16.5 15.88C15.58 16.61 15 17.74 15 19C15 19.75 15.21 20.46 15.58 21.06C15.62 21.13 15.67 21.2 15.73 21.27C14.58 21.74 13.32 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" fill="currentColor" /><path d="M9.38086 12.0001V10.6101C9.38086 8.89008 10.6009 8.18007 12.0909 9.04007L13.2909 9.73007L14.4908 10.4201C15.9808 11.2801 15.9808 12.6901 14.4908 13.5501L13.2909 14.2401L12.0909 14.9301C10.6009 15.7901 9.38086 15.0901 9.38086 13.3601V12.0001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconPrevious;