import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconGalleryImport: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9.66992 10C10.7745 10 11.6699 9.10457 11.6699 8C11.6699 6.89543 10.7745 6 9.66992 6C8.56535 6 7.66992 6.89543 7.66992 8C7.66992 9.10457 8.56535 10 9.66992 10Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M13.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V10" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M18.6699 2V8L20.6699 6" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M18.6699 8L16.6699 6" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M3.33984 18.95L8.26984 15.64C9.05984 15.11 10.1998 15.17 10.9098 15.78L11.2398 16.07C12.0198 16.74 13.2798 16.74 14.0598 16.07L18.2198 12.5C18.9998 11.83 20.2598 11.83 21.0398 12.5L22.6698 13.9" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6695 13.9V16.19C22.6695 19.83 20.4995 22 16.8595 22H8.47949C5.92949 22 4.08949 20.93 3.22949 19.03L3.33949 18.95L8.25949 15.65C9.05949 15.11 10.1895 15.17 10.8995 15.79L11.2395 16.07C12.0195 16.74 13.2795 16.74 14.0595 16.07L18.2195 12.5C18.9995 11.83 20.2595 11.83 21.0395 12.5L22.6695 13.9Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.6399 8H18.6999C17.4299 8 16.6699 7.24 16.6699 5.97V3.03C16.6699 2.63 16.7499 2.29 16.8899 2C16.8799 2 16.8699 2 16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.19C2.66992 17.28 2.85992 18.23 3.22992 19.03L3.33992 18.95L8.25992 15.65C9.05992 15.11 10.1899 15.17 10.8999 15.79L11.2399 16.07C12.0199 16.74 13.2799 16.74 14.0599 16.07L18.2199 12.5C18.9999 11.83 20.2599 11.83 21.0399 12.5L22.6699 13.9V7.81C22.6699 7.8 22.6699 7.79 22.6699 7.78C22.3799 7.92 22.0399 8 21.6399 8Z" fill="currentColor" /><path d="M9.67004 10.38C10.9845 10.38 12.05 9.31444 12.05 8C12.05 6.68557 10.9845 5.62 9.67004 5.62C8.3556 5.62 7.29004 6.68557 7.29004 8C7.29004 9.31444 8.3556 10.38 9.67004 10.38Z" fill="currentColor" /><path d="M21.6399 8H18.6999C17.4299 8 16.6699 7.24 16.6699 5.97V3.03C16.6699 1.76 17.4299 1 18.6999 1H21.6399C22.9099 1 23.6699 1.76 23.6699 3.03V5.97C23.6699 7.24 22.9099 8 21.6399 8ZM21.8599 4.69C21.7399 4.57 21.5799 4.51 21.4199 4.51C21.2599 4.51 21.0999 4.57 20.9799 4.69L20.7999 4.87V2.63C20.7999 2.28 20.5199 2 20.1699 2C19.8199 2 19.5399 2.28 19.5399 2.63V4.87L19.3599 4.69C19.1199 4.45 18.7199 4.45 18.4799 4.69C18.2399 4.93 18.2399 5.33 18.4799 5.57L19.7299 6.82C19.7799 6.87 19.8499 6.91 19.9199 6.94C19.9399 6.95 19.9599 6.95 19.9799 6.96C20.0299 6.98 20.0799 6.99 20.1399 6.99C20.1599 6.99 20.1799 6.99 20.1999 6.99C20.2699 6.99 20.3299 6.98 20.3999 6.95C20.4099 6.95 20.4099 6.95 20.4199 6.95C20.4899 6.92 20.5499 6.88 20.5999 6.83C20.6099 6.82 20.6099 6.82 20.6199 6.82L21.8699 5.57C22.1099 5.33 22.1099 4.93 21.8599 4.69Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6399 8H18.6999C17.4299 8 16.6699 7.24 16.6699 5.97V3.03C16.6699 1.76 17.4299 1 18.6999 1H21.6399C22.9099 1 23.6699 1.76 23.6699 3.03V5.97C23.6699 7.24 22.9099 8 21.6399 8ZM21.8599 4.69C21.7399 4.57 21.5799 4.51 21.4199 4.51C21.2599 4.51 21.0999 4.57 20.9799 4.69L20.7999 4.87V2.63C20.7999 2.28 20.5199 2 20.1699 2C19.8199 2 19.5399 2.28 19.5399 2.63V4.87L19.3599 4.69C19.1199 4.45 18.7199 4.45 18.4799 4.69C18.2399 4.93 18.2399 5.33 18.4799 5.57L19.7299 6.82C19.7799 6.87 19.8499 6.91 19.9199 6.94C19.9399 6.95 19.9599 6.95 19.9799 6.96C20.0299 6.98 20.0799 6.99 20.1399 6.99C20.1599 6.99 20.1799 6.99 20.1999 6.99C20.2699 6.99 20.3299 6.98 20.3999 6.95C20.4099 6.95 20.4099 6.95 20.4199 6.95C20.4899 6.92 20.5499 6.88 20.5999 6.83C20.6099 6.82 20.6099 6.82 20.6199 6.82L21.8699 5.57C22.1099 5.33 22.1099 4.93 21.8599 4.69Z" fill="currentColor" /><path d="M9.67004 10.38C10.9845 10.38 12.05 9.31443 12.05 8C12.05 6.68556 10.9845 5.62 9.67004 5.62C8.3556 5.62 7.29004 6.68556 7.29004 8C7.29004 9.31443 8.3556 10.38 9.67004 10.38Z" fill="currentColor" /><path d="M21.6399 8H21.1699V12.61L21.0399 12.5C20.2599 11.83 18.9999 11.83 18.2199 12.5L14.0599 16.07C13.2799 16.74 12.0199 16.74 11.2399 16.07L10.8999 15.79C10.1899 15.17 9.05992 15.11 8.25992 15.65L4.51992 18.16C4.29992 17.6 4.16992 16.95 4.16992 16.19V7.81C4.16992 4.99 5.65992 3.5 8.47992 3.5H16.6699V3.03C16.6699 2.63 16.7399 2.29 16.8999 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.19C2.66992 17.28 2.85992 18.23 3.22992 19.03C4.08992 20.93 5.92992 22 8.47992 22H16.8599C20.4999 22 22.6699 19.83 22.6699 16.19V7.77C22.3799 7.93 22.0399 8 21.6399 8Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconGalleryImport;