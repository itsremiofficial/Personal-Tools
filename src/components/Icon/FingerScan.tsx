import { FC } from 'react';
import { IconProps } from "../../types";

const IconFingerScan: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.9996 14.8799C11.0896 14.8799 10.3496 14.1399 10.3496 13.2299V10.7599C10.3496 9.84989 11.0896 9.10986 11.9996 9.10986C12.9096 9.10986 13.6496 9.84989 13.6496 10.7599V13.2299C13.6496 14.1399 12.9096 14.8799 11.9996 14.8799Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.98 13.4702C16.78 16.0502 14.62 18.0702 12 18.0702C9.24 18.0702 7 15.8302 7 13.0702V10.9302C7 8.17018 9.24 5.93018 12 5.93018C14.59 5.93018 16.72 7.90017 16.97 10.4202" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M15 2H17C20 2 22 4 22 7V9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 9V7C2 4 4 2 7 2H9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 22H17C20 22 22 20 22 17V15" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 15V17C2 20 4 22 7 22H9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.58 4.01999V5.97C19.9 5.47 19.12 5.1 18.27 4.91C17.83 4.8 17.3599 4.75 16.8799 4.75C13.4299 4.75 10.6299 7.55 10.6299 11C10.6299 12.14 10.94 13.26 11.53 14.22C12.03 15.06 12.7299 15.76 13.4899 16.23C13.7499 16.4 14.0199 16.55 14.2999 16.68V19.07C14.2999 19.68 13.9 20.49 13.4 20.79L11.9999 21.7C10.6999 22.51 8.90991 21.6 8.90991 19.98V14.63C8.90991 13.92 8.50992 13.01 8.10992 12.51L4.31995 8.47C3.81995 7.96 3.41992 7.05001 3.41992 6.45001V4.12C3.41992 2.91 4.31991 2 5.40991 2H18.59C19.68 2 20.58 2.90999 20.58 4.01999Z" fill="currentColor" /><path d="M17.9208 6.37C17.5908 6.29 17.2409 6.25 16.8809 6.25C14.2609 6.25 12.1309 8.38 12.1309 11C12.1309 11.89 12.3809 12.73 12.8209 13.45C13.1909 14.07 13.7009 14.6 14.3209 14.98C15.0609 15.47 15.9409 15.75 16.8809 15.75C18.6209 15.75 20.1309 14.82 20.9509 13.45C21.3909 12.73 21.6309 11.89 21.6309 11C21.6309 8.74 20.0508 6.84 17.9208 6.37ZM18.8309 10.57L16.4009 13C16.3109 13.09 16.1208 13.18 15.9908 13.2L15.0609 13.33C14.7209 13.38 14.4908 13.14 14.5408 12.81L14.6708 11.88C14.6908 11.75 14.7808 11.57 14.8708 11.47L16.9509 9.39001L17.3008 9.04001C17.7208 8.62001 18.2109 8.42001 18.8209 9.04001C19.4309 9.66001 19.2509 10.15 18.8309 10.57Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFingerScan;