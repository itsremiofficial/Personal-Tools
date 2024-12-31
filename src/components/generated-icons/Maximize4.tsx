import { FC } from 'react';
import { IconProps } from "@/types";

const IconMaximize4: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 15V21H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M21 9V3H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21 3L13.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M10.5 13.5L3 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M18.6895 5.71C18.6095 5.53 18.4695 5.38 18.2795 5.3C18.1895 5.27 18.0995 5.25 17.9995 5.25H13.9995C13.5895 5.25 13.2495 5.59 13.2495 6C13.2495 6.41 13.5895 6.75 13.9995 6.75H16.1895L12.4695 10.47C12.1795 10.76 12.1795 11.24 12.4695 11.53C12.6195 11.68 12.8095 11.75 12.9995 11.75C13.1895 11.75 13.3795 11.68 13.5295 11.53L17.2495 7.81V10C17.2495 10.41 17.5895 10.75 17.9995 10.75C18.4095 10.75 18.7495 10.41 18.7495 10V6C18.7495 5.9 18.7295 5.81 18.6895 5.71Z" fill="currentColor" /><path d="M11.53 12.4699C11.24 12.1799 10.76 12.1799 10.47 12.4699L6.75 16.1899V13.9999C6.75 13.5899 6.41 13.2499 6 13.2499C5.59 13.2499 5.25 13.5899 5.25 13.9999V17.9999C5.25 18.0999 5.27 18.1899 5.31 18.2899C5.39 18.4699 5.53 18.6199 5.72 18.6999C5.8 18.7299 5.9 18.7499 6 18.7499H10C10.41 18.7499 10.75 18.4099 10.75 17.9999C10.75 17.5899 10.41 17.2499 10 17.2499H7.81L11.53 13.5299C11.82 13.2399 11.82 12.7599 11.53 12.4699Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMaximize4;