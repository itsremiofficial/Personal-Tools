import { FC } from 'react';
import { IconProps } from "../../types";

const IconMoneyRecive: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M9.5 13.7502C9.5 14.7202 10.25 15.5002 11.17 15.5002H13.05C13.85 15.5002 14.5 14.8202 14.5 13.9702C14.5 13.0602 14.1 12.7302 13.51 12.5202L10.5 11.4702C9.91 11.2602 9.51001 10.9402 9.51001 10.0202C9.51001 9.18023 10.16 8.49023 10.96 8.49023H12.84C13.76 8.49023 14.51 9.27023 14.51 10.2402" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 7.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17 3V7H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 2L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 9V15C22 18.5 20 20 17 20H9.73999C9.90999 19.53 10 19.03 10 18.5C10 16.02 7.99 14 5.5 14C4.09 14 2.82 14.66 2 15.68V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9Z" fill="currentColor" /><path d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" fill="currentColor" /><path d="M18.5 14.75C18.09 14.75 17.75 14.41 17.75 14V10C17.75 9.59 18.09 9.25 18.5 9.25C18.91 9.25 19.25 9.59 19.25 10V14C19.25 14.41 18.91 14.75 18.5 14.75Z" fill="currentColor" /><path d="M5.5 14C4.09 14 2.82 14.66 2 15.68C1.37 16.45 1 17.43 1 18.5C1 20.99 3.02 23 5.5 23C7.46 23 9.12999 21.75 9.73999 20C9.90999 19.53 10 19.03 10 18.5C10 16.02 7.99 14 5.5 14ZM8.15997 20.46C8.12997 20.52 8.08998 20.59 8.03998 20.64L7.22998 21.44C7.12998 21.55 6.98998 21.6 6.84998 21.6C6.69998 21.6 6.56002 21.55 6.46002 21.44C6.28002 21.27 6.25999 21 6.37 20.8H4.10999C3.38999 20.8 2.79999 20.21 2.79999 19.48V19.37C2.79999 19.06 3.04998 18.82 3.34998 18.82C3.64998 18.82 3.90002 19.06 3.90002 19.37V19.48C3.90002 19.6 3.98999 19.7 4.10999 19.7H6.37C6.25999 19.49 6.28002 19.23 6.46002 19.05C6.67002 18.84 7.01998 18.84 7.22998 19.05L8.03998 19.86C8.08998 19.91 8.12997 19.97 8.15997 20.04C8.20997 20.17 8.20997 20.32 8.15997 20.46ZM8.20001 17.63C8.20001 17.94 7.95002 18.18 7.65002 18.18C7.35002 18.18 7.09998 17.94 7.09998 17.63V17.52C7.09998 17.4 7.01001 17.3 6.89001 17.3H4.63C4.74 17.51 4.71998 17.77 4.53998 17.95C4.43998 18.05 4.30002 18.11 4.15002 18.11C4.01002 18.11 3.87002 18.05 3.77002 17.95L2.96002 17.14C2.91002 17.09 2.87003 17.03 2.84003 16.96C2.79003 16.83 2.79003 16.68 2.84003 16.54C2.87003 16.48 2.91002 16.41 2.96002 16.36L3.77002 15.56C3.98002 15.34 4.32998 15.34 4.53998 15.56C4.71998 15.73 4.74 16 4.63 16.2H6.89001C7.61001 16.2 8.20001 16.79 8.20001 17.52V17.63Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMoneyRecive;