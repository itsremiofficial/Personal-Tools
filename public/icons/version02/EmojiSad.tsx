import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconEmojiSad: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M7.66992 8.75C8.66992 7.75 10.2999 7.75 11.3099 8.75" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M14.0303 8.75C15.0303 7.75 16.6603 7.75 17.6703 8.75" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M9.06992 17.7H16.2699C16.7699 17.7 17.1699 17.3 17.1699 16.8C17.1699 14.31 15.1599 12.3 12.6699 12.3C10.1799 12.3 8.16992 14.31 8.16992 16.8C8.16992 17.3 8.56992 17.7 9.06992 17.7Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path d="M11.3104 9.5C11.1204 9.5 10.9304 9.43 10.7804 9.28C10.0704 8.57 8.91035 8.57 8.20035 9.28C7.91035 9.57 7.43035 9.57 7.14035 9.28C6.85035 8.99 6.85035 8.51 7.14035 8.22C8.43035 6.93 10.5404 6.93 11.8404 8.22C12.1304 8.51 12.1304 8.99 11.8404 9.28C11.6904 9.43 11.5004 9.5 11.3104 9.5Z" fill="currentColor" /><path d="M14.0297 9.5C13.8397 9.5 13.6497 9.43 13.4997 9.28C13.2097 8.99 13.2097 8.51 13.4997 8.22C14.7897 6.93 16.8997 6.93 18.1997 8.22C18.4897 8.51 18.4897 8.99 18.1997 9.28C17.9097 9.57 17.4297 9.57 17.1397 9.28C16.4297 8.57 15.2697 8.57 14.5597 9.28C14.4197 9.43 14.2297 9.5 14.0297 9.5Z" fill="currentColor" /><path d="M12.67 11.92C9.98004 11.92 7.79004 14.11 7.79004 16.8C7.79004 17.5 8.36004 18.08 9.06004 18.08H16.26C16.96 18.08 17.53 17.51 17.53 16.8C17.55 14.11 15.36 11.92 12.67 11.92Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM7.13992 9.28C6.84992 8.99 6.84992 8.51 7.13992 8.22C8.42992 6.93 10.5399 6.93 11.8399 8.22C12.1299 8.51 12.1299 8.99 11.8399 9.28C11.6899 9.43 11.4999 9.5 11.3099 9.5C11.1199 9.5 10.9299 9.43 10.7799 9.28C10.0699 8.57 8.90992 8.57 8.19992 9.28C7.90992 9.58 7.42992 9.58 7.13992 9.28ZM16.2699 18.08H9.06992C8.36992 18.08 7.79992 17.51 7.79992 16.8C7.79992 14.11 9.98992 11.92 12.6799 11.92C15.3699 11.92 17.5599 14.11 17.5599 16.8C17.5499 17.5 16.9699 18.08 16.2699 18.08ZM18.1999 9.28C17.9099 9.57 17.4299 9.57 17.1399 9.28C16.4299 8.57 15.2699 8.57 14.5599 9.28C14.4099 9.43 14.2199 9.5 14.0299 9.5C13.8399 9.5 13.6499 9.43 13.4999 9.28C13.2099 8.99 13.2099 8.51 13.4999 8.22C14.7899 6.93 16.8999 6.93 18.1999 8.22C18.4899 8.52 18.4899 8.99 18.1999 9.28Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconEmojiSad;