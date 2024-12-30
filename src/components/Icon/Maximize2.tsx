import { FC } from 'react';
import { IconProps } from "../../types";

const IconMaximize3: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 10V6H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 14V18H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.48 2H8.52C5.07 2 3 4.06 3 7.52V15.47C3 18.94 5.07 21 8.52 21H16.47C19.93 21 21.99 18.94 21.99 15.48V7.52C22 4.06 19.93 2 16.48 2Z" fill="currentColor" /><path d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z" fill="currentColor" /><path d="M18.7495 5.95C18.7495 5.86 18.7295 5.78 18.6995 5.69C18.6995 5.68 18.6895 5.67 18.6895 5.67C18.6595 5.6 18.6095 5.53 18.5595 5.48C18.5395 5.46 18.5195 5.44 18.4995 5.43C18.4495 5.39 18.3995 5.35 18.3495 5.33C18.3295 5.32 18.2995 5.31 18.2795 5.3C18.1995 5.27 18.1095 5.25 18.0195 5.25H13.9995C13.5895 5.25 13.2495 5.59 13.2495 6C13.2495 6.41 13.5795 6.72 13.9995 6.72H16.2095L12.4695 10.47C12.1795 10.76 12.1795 11.24 12.4695 11.53C12.6195 11.68 12.8095 11.75 12.9995 11.75C13.1895 11.75 13.3795 11.68 13.5295 11.53L17.2595 7.79V9.99C17.2595 10.4 17.5995 10.74 18.0095 10.74C18.4195 10.74 18.7595 10.4 18.7595 9.99V5.97C18.7595 5.96 18.7595 5.96 18.7495 5.95Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMaximize3;