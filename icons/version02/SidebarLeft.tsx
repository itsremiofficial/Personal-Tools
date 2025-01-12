import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconSidebarLeft: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6399 15V9C22.6399 4 20.6399 2 15.6399 2H9.63989C4.63989 2 2.63989 4 2.63989 9V15C2.63989 20 4.63989 22 9.63989 22H15.6399C20.6399 22 22.6399 20 22.6399 15Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.63989 2V22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.6398 9.43994L13.0798 11.9999L15.6398 14.5599" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6699 7.81V16.19C22.6699 19.83 20.4999 22 16.8599 22H8.47992C8.27992 22 8.07992 21.99 7.88992 21.98C6.65992 21.9 5.61992 21.55 4.79992 20.95C4.37992 20.66 4.00992 20.29 3.71992 19.87C3.02992 18.92 2.66992 17.68 2.66992 16.19V7.81C2.66992 4.37 4.60992 2.24 7.88992 2.03C8.07992 2.01 8.27992 2 8.47992 2H16.8599C18.3499 2 19.5899 2.36 20.5399 3.05C20.9599 3.34 21.3299 3.71 21.6199 4.13C22.3099 5.08 22.6699 6.32 22.6699 7.81Z" fill="currentColor" /><path d="M9.38989 2V22H8.47989C8.27989 22 8.07989 21.99 7.88989 21.98V2.03C8.07989 2.01 8.27989 2 8.47989 2H9.38989Z" fill="currentColor" /><path d="M15.64 15.3099C15.45 15.3099 15.26 15.2399 15.11 15.0899L12.55 12.5299C12.26 12.2399 12.26 11.7599 12.55 11.4699L15.11 8.90988C15.4 8.61988 15.88 8.61988 16.17 8.90988C16.46 9.19988 16.46 9.67988 16.17 9.96988L14.15 11.9999L16.18 14.0299C16.47 14.3199 16.47 14.7999 16.18 15.0899C16.03 15.2399 15.84 15.3099 15.64 15.3099Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.66992 7.81003V16.19C2.66992 17.68 3.02992 18.92 3.71992 19.87C4.00992 20.29 4.37992 20.66 4.79992 20.95C5.61992 21.55 6.65992 21.9 7.88992 21.98V2.03003C4.60992 2.24003 2.66992 4.37003 2.66992 7.81003Z" fill="currentColor" /><path d="M21.6199 4.13C21.3299 3.71 20.9599 3.34 20.5399 3.05C19.5899 2.36 18.3499 2 16.8599 2H9.38989V22H16.8599C20.4999 22 22.6699 19.83 22.6699 16.19V7.81C22.6699 6.32 22.3099 5.08 21.6199 4.13ZM16.1699 14.03C16.4599 14.32 16.4599 14.8 16.1699 15.09C16.0199 15.24 15.8299 15.31 15.6399 15.31C15.4499 15.31 15.2599 15.24 15.1099 15.09L12.5499 12.53C12.2599 12.24 12.2599 11.76 12.5499 11.47L15.1099 8.91C15.3999 8.62 15.8799 8.62 16.1699 8.91C16.4599 9.2 16.4599 9.68 16.1699 9.97L14.1499 12L16.1699 14.03Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSidebarLeft;