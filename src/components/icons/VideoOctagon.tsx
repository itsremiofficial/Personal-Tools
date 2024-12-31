import { FC } from 'react';
import { IconProps } from "../../types";

const IconVideoPlay: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2.51953 7.10986H21.4795" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.51953 2.10986V6.96986" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.4805 2.10986V6.51986" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.75 14.4501V13.2501C9.75 11.7101 10.84 11.0801 12.17 11.8501L13.21 12.4501L14.25 13.0501C15.58 13.8201 15.58 15.0801 14.25 15.8501L13.21 16.4501L12.17 17.0501C10.84 17.8201 9.75 17.1901 9.75 15.6501V14.4501V14.4501Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 7.81V16.19C22 16.25 22 16.31 21.99 16.36C21.99 16.9 21.93 17.4 21.82 17.86C21.35 20.02 19.91 21.42 17.72 21.85C17.25 21.95 16.75 22 16.22 22H7.72C7.19 21.99 6.69 21.94 6.22 21.84C4.07 21.4 2.65 20 2.18 17.86C2.07 17.4 2.01 16.9 2.01 16.36C2 16.31 2 16.25 2 16.19V7.81C2 7.3 2.04 6.81 2.13 6.36C2.55 4.1 4 2.62 6.22 2.16C6.69 2.05 7.19 2 7.72 2H16.23C16.76 2 17.26 2.05 17.72 2.15C19.98 2.59 21.45 4.08 21.87 6.36C21.96 6.81 22 7.3 22 7.81Z" fill="currentColor" /><path d="M12.75 7.86V16.36H21.99C21.99 16.9 21.93 17.4 21.82 17.86H17.72V21.85C17.25 21.95 16.75 22 16.22 22V17.86H12.75V22H11.25V17.86H7.72V22C7.19 21.99 6.69 21.94 6.22 21.84V17.86H2.18C2.07 17.4 2.01 16.9 2.01 16.36H11.25V7.86H2V7.81C2 7.3 2.04 6.81 2.13 6.36H6.24C6.23 6.32 6.22 6.28 6.22 6.24V2.16C6.69 2.05 7.19 2 7.72 2V6.24C7.72 6.28 7.7 6.32 7.69 6.36H11.25V2H12.75V6.36H16.22V2H16.23C16.76 2 17.26 2.05 17.72 2.15V6.33C17.72 6.34 17.71 6.35 17.71 6.36H21.87C21.96 6.81 22 7.3 22 7.81V7.86H12.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconVideoPlay;