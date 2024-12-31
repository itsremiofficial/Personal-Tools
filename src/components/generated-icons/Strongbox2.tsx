import { FC } from 'react';
import { IconProps } from "@/types";

const IconStrongbox2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M8 19H16C18 19 19 18 19 16V8C19 6 18 5 16 5H8C6 5 5 6 5 8V16C5 18 6 19 8 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 9.5H7.48C8.86 9.5 9.98 10.62 9.98 12C9.98 13.38 8.86 14.5 7.48 14.5H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 9.99023H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 14H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M7.19922 12H7.29922" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81978C4.17978 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17978 21.99 7.81978 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M16 9.23999H18C18.55 9.23999 19 8.78999 19 8.23999V8C19 6.34 17.66 5 16 5H8C6.34 5 5 6.34 5 8V8.5C5 9.05 5.45 9.5 6 9.5H7.34C8.65 9.5 9.84 10.44 9.97 11.75C10.12 13.25 8.95 14.51 7.48 14.51H6C5.45 14.51 5 14.96 5 15.51V16.01C5 17.67 6.34 19.01 8 19.01H16C17.66 19.01 19 17.67 19 16.01V15.76C19 15.21 18.55 14.76 18 14.76H16C15.59 14.76 15.25 14.42 15.25 14.01C15.25 13.6 15.59 13.26 16 13.26H18C18.55 13.26 19 12.81 19 12.26V11.75C19 11.2 18.55 10.75 18 10.75H16C15.59 10.75 15.25 10.42 15.25 10C15.25 9.58 15.59 9.23999 16 9.23999Z" fill="currentColor" /><path d="M7 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H7C7.55 11 8 11.45 8 12C8 12.55 7.55 13 7 13Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconStrongbox2;