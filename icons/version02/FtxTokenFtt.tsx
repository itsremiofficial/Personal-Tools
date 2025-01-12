import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconFtxTokenFtt: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6699 2H9.66992C9.11992 2 8.66992 2.45 8.66992 3V6C8.66992 6.55 9.11992 7 9.66992 7H21.6699C22.2199 7 22.6699 6.55 22.6699 6V3C22.6699 2.45 22.2199 2 21.6699 2Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 17H7.66992V22H12.6699V17Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.66992 9.5H2.66992V14.5H7.66992V9.5Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.6699 9.64H10.1699V14.36H18.6699V9.64Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path d="M21.6699 2H9.66992C9.11992 2 8.66992 2.45 8.66992 3V6C8.66992 6.55 9.11992 7 9.66992 7H21.6699C22.2199 7 22.6699 6.55 22.6699 6V3C22.6699 2.45 22.2199 2 21.6699 2Z" fill="currentColor" /><path d="M11.6699 17H8.66992C8.11992 17 7.66992 17.45 7.66992 18V21C7.66992 21.55 8.11992 22 8.66992 22H11.6699C12.2199 22 12.6699 21.55 12.6699 21V18C12.6699 17.45 12.2199 17 11.6699 17Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M6.66992 9.5H3.66992C3.11992 9.5 2.66992 9.95 2.66992 10.5V13.5C2.66992 14.05 3.11992 14.5 3.66992 14.5H6.66992C7.21992 14.5 7.66992 14.05 7.66992 13.5V10.5C7.66992 9.95 7.21992 9.5 6.66992 9.5Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.6699 9.64H11.1699C10.6199 9.64 10.1699 10.09 10.1699 10.64V13.36C10.1699 13.91 10.6199 14.36 11.1699 14.36H17.6699C18.2199 14.36 18.6699 13.91 18.6699 13.36V10.64C18.6699 10.09 18.2199 9.64 17.6699 9.64Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6699 2H9.66992C9.11992 2 8.66992 2.45 8.66992 3V6C8.66992 6.55 9.11992 7 9.66992 7H21.6699C22.2199 7 22.6699 6.55 22.6699 6V3C22.6699 2.45 22.2199 2 21.6699 2Z" fill="none" /><path d="M11.6699 17H8.66992C8.11992 17 7.66992 17.45 7.66992 18V21C7.66992 21.55 8.11992 22 8.66992 22H11.6699C12.2199 22 12.6699 21.55 12.6699 21V18C12.6699 17.45 12.2199 17 11.6699 17Z" fill="none" /><path d="M6.66992 9.5H3.66992C3.11992 9.5 2.66992 9.95 2.66992 10.5V13.5C2.66992 14.05 3.11992 14.5 3.66992 14.5H6.66992C7.21992 14.5 7.66992 14.05 7.66992 13.5V10.5C7.66992 9.95 7.21992 9.5 6.66992 9.5Z" fill="none" /><path d="M17.6699 9.64H11.1699C10.6199 9.64 10.1699 10.09 10.1699 10.64V13.36C10.1699 13.91 10.6199 14.36 11.1699 14.36H17.6699C18.2199 14.36 18.6699 13.91 18.6699 13.36V10.64C18.6699 10.09 18.2199 9.64 17.6699 9.64Z" fill="none" /></svg> 
      )}
    </>
  );
};

export default IconFtxTokenFtt;