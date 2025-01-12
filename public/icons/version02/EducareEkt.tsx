import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconEducareEkt: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.18985 5.14999L11.8598 7.82001C12.3098 8.27001 13.0298 8.27001 13.4798 7.82001L16.1498 5.14999C16.8698 4.42999 16.3598 3.2 15.3398 3.2H9.98984C8.97984 3.19 8.46985 4.42999 9.18985 5.14999Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.18985 18.85L11.8598 16.18C12.3098 15.73 13.0298 15.73 13.4798 16.18L16.1498 18.85C16.8698 19.57 16.3598 20.8 15.3398 20.8H9.98984C8.97984 20.81 8.46985 19.57 9.18985 18.85Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2.82986 11.45L5.03989 7.97001C5.38989 7.42001 6.1599 7.34001 6.6199 7.80001L10.0999 11.28C10.4999 11.68 10.4999 12.32 10.0999 12.72L6.6199 16.2C6.1599 16.66 5.38989 16.58 5.03989 16.03L2.82986 12.55C2.61986 12.21 2.61986 11.79 2.82986 11.45Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22.51 11.45L20.2999 7.97001C19.9499 7.42001 19.1799 7.34001 18.7199 7.80001L15.2399 11.28C14.8399 11.68 14.8399 12.32 15.2399 12.72L18.7199 16.2C19.1799 16.66 19.9499 16.58 20.2999 16.03L22.51 12.55C22.72 12.21 22.72 11.79 22.51 11.45Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M8.59998 5.47994L11.73 8.60994C12.25 9.12994 13.1 9.12994 13.62 8.60994L16.75 5.47994C17.59 4.63994 17 3.18994 15.8 3.18994H9.53998C8.34998 3.18994 7.74998 4.63994 8.59998 5.47994Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M8.59998 18.52L11.73 15.39C12.25 14.87 13.1 14.87 13.62 15.39L16.75 18.52C17.59 19.36 17 20.81 15.8 20.81H9.53998C8.34998 20.81 7.74998 19.36 8.59998 18.52Z" fill="currentColor" /><path d="M2.82986 11.43L5.1199 7.82996C5.4799 7.25996 6.27992 7.16996 6.75992 7.64996L10.3599 11.25C10.7699 11.66 10.7699 12.33 10.3599 12.74L6.75992 16.34C6.27992 16.82 5.4899 16.73 5.1199 16.16L2.82986 12.56C2.61986 12.22 2.61986 11.78 2.82986 11.43Z" fill="currentColor" /><path d="M22.5099 11.43L20.2199 7.82996C19.8599 7.25996 19.0598 7.16996 18.5798 7.64996L14.9799 11.25C14.5699 11.66 14.5699 12.33 14.9799 12.74L18.5798 16.34C19.0598 16.82 19.8499 16.73 20.2199 16.16L22.5099 12.56C22.7199 12.22 22.7199 11.78 22.5099 11.43Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.59998 5.48L11.73 8.61C12.25 9.13 13.1 9.13 13.62 8.61L16.75 5.48C17.59 4.64 17 3.19 15.8 3.19H9.53998C8.34998 3.19 7.74998 4.64 8.59998 5.48Z" fill="none" /><path d="M8.59998 18.52L11.73 15.39C12.25 14.87 13.1 14.87 13.62 15.39L16.75 18.52C17.59 19.36 17 20.81 15.8 20.81H9.53998C8.34998 20.81 7.74998 19.36 8.59998 18.52Z" fill="none" /><path d="M2.82986 11.43L5.1199 7.83001C5.4799 7.26001 6.27992 7.17 6.75992 7.65L10.3599 11.25C10.7699 11.66 10.7699 12.33 10.3599 12.74L6.75992 16.34C6.27992 16.82 5.4899 16.73 5.1199 16.16L2.82986 12.56C2.61986 12.22 2.61986 11.78 2.82986 11.43Z" fill="none" /><path d="M22.5099 11.43L20.2199 7.83001C19.8599 7.26001 19.0598 7.17 18.5798 7.65L14.9799 11.25C14.5699 11.66 14.5699 12.33 14.9799 12.74L18.5798 16.34C19.0598 16.82 19.8499 16.73 20.2199 16.16L22.5099 12.56C22.7199 12.22 22.7199 11.78 22.5099 11.43Z" fill="none" /></svg> 
      )}
    </>
  );
};

export default IconEducareEkt;