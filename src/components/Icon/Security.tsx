import { FC } from 'react';
import { IconProps } from "../../types";

const IconSecurityCard: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.74 17.7499H17.66C17.57 17.8299 17.48 17.8999 17.39 17.9799L13.12 21.1799C11.71 22.2299 9.41001 22.2299 7.99001 21.1799L3.71001 17.9799C2.77001 17.2799 2 15.7299 2 14.5599V7.14986C2 5.92986 2.93001 4.57986 4.07001 4.14986L9.05 2.27986C9.87 1.96986 11.23 1.96986 12.05 2.27986L17.02 4.14986C17.97 4.50986 18.78 5.50986 19.03 6.52986H11.73C11.51 6.52986 11.31 6.53987 11.12 6.53987C9.27 6.64987 8.78999 7.31986 8.78999 9.42986V14.8598C8.79999 17.1598 9.39001 17.7499 11.74 17.7499Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.80078 11.2202H22.0008" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M22.0008 9.41977V14.9698C21.9808 17.1898 21.3708 17.7397 19.0608 17.7397H11.7408C9.39078 17.7397 8.80078 17.1498 8.80078 14.8398V9.40976C8.80078 7.30976 9.28078 6.63974 11.1308 6.51974C11.3208 6.51974 11.5208 6.50977 11.7408 6.50977H19.0608C21.4108 6.51977 22.0008 7.09977 22.0008 9.41977Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.3203 15.2598H12.6503" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.75 15.2598H18.02" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.01 20.02C15.9861 20.02 20.02 15.9861 20.02 11.01C20.02 6.03391 15.9861 2 11.01 2C6.03391 2 2 6.03391 2 11.01C2 15.9861 6.03391 20.02 11.01 20.02Z" fill="currentColor" /><path d="M14.25 11C14.25 11.41 13.91 11.75 13.5 11.75H8.5C8.09 11.75 7.75 11.41 7.75 11C7.75 10.59 8.09 10.25 8.5 10.25H13.5C13.91 10.25 14.25 10.59 14.25 11Z" fill="currentColor" /><path d="M21.9901 18.95C21.6601 18.34 20.9601 18 20.0201 18C19.3101 18 18.7001 18.29 18.3401 18.79C17.9801 19.29 17.9001 19.96 18.1201 20.63C18.5501 21.93 19.3001 22.22 19.7101 22.27C19.7701 22.28 19.8301 22.28 19.9001 22.28C20.3401 22.28 21.0201 22.09 21.6801 21.1C22.2101 20.33 22.3101 19.56 21.9901 18.95Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSecurityCard;