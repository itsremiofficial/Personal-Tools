import { FC } from 'react';
import { IconProps } from "../../types";

const IconMonitorMobbile: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 16.9498H6.21C2.84 16.9498 2 16.1098 2 12.7398V6.73979C2 3.36979 2.84 2.52979 6.21 2.52979H16.74C20.11 2.52979 20.95 3.36979 20.95 6.73979" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 21.4702V16.9502" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 12.9502H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.74023 21.4702H10.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22.0003 12.7998V18.5098C22.0003 20.8798 21.4103 21.4698 19.0403 21.4698H15.4903C13.1203 21.4698 12.5303 20.8798 12.5303 18.5098V12.7998C12.5303 10.4298 13.1203 9.83984 15.4903 9.83984H19.0403C21.4103 9.83984 22.0003 10.4298 22.0003 12.7998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.2445 18.25H17.2535" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5 14C2.79 14 1 15.79 1 18C1 20.21 2.79 22 5 22C7.21 22 9 20.21 9 18C9 15.79 7.21 14 5 14ZM6 17.68C6 18.29 5.67002 18.87 5.15002 19.18L4.39001 19.64C4.27001 19.71 4.14001 19.75 4.01001 19.75C3.76001 19.75 3.51 19.62 3.37 19.39C3.16 19.04 3.27 18.57 3.63 18.36L4.39001 17.9C4.46001 17.86 4.51001 17.77 4.51001 17.69V16.76C4.51001 16.35 4.85001 16.01 5.26001 16.01C5.67001 16.01 6.01001 16.35 6.01001 16.76V17.68H6Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22 9V15C22 18.5 20 20 17 20H8.45001C8.80001 19.41 9 18.73 9 18C9 15.79 7.21 14 5 14C3.8 14 2.73 14.53 2 15.36V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9Z" fill="currentColor" /><path d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" fill="currentColor" /><path d="M18.5 14.75C18.09 14.75 17.75 14.41 17.75 14V10C17.75 9.59 18.09 9.25 18.5 9.25C18.91 9.25 19.25 9.59 19.25 10V14C19.25 14.41 18.91 14.75 18.5 14.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMonitorMobbile;