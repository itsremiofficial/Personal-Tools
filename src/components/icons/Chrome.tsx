import { FC } from 'react';
import { IconProps } from "../../types";

const IconChrome: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.17 7.99988C18.15 7.33988 15.02 7.33988 12 7.99988" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.94922 6.05957L3.96922 6.11957C4.97922 9.00957 6.52922 11.6896 8.53922 13.9996" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.8809 21.94C12.9409 19.67 14.4909 16.99 15.4309 14.08L15.4609 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 22H2C1.59 22 1.25 21.66 1.25 21.25C1.25 20.84 1.59 20.5 2 20.5H22C22.41 20.5 22.75 20.84 22.75 21.25C22.75 21.66 22.41 22 22 22Z" fill="currentColor" /><path d="M9.75 4V22H14.25V4C14.25 2.9 13.8 2 12.45 2H11.55C10.2 2 9.75 2.9 9.75 4Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M3 10V22H7V10C7 8.9 6.6 8 5.4 8H4.6C3.4 8 3 8.9 3 10Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17 15V22H21V15C21 13.9 20.6 13 19.4 13H18.6C17.4 13 17 13.9 17 15Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconChrome;