import { FC } from 'react';
import { IconProps } from "../../types";

const IconFolderOpen: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6707 14.3L21.2707 19.3C21.1207 20.83 21.0007 22 18.2907 22H5.71074C3.00074 22 2.88074 20.83 2.73074 19.3L2.33074 14.3C2.25074 13.47 2.51074 12.7 2.98074 12.11C2.99074 12.1 2.99074 12.1 3.00074 12.09C3.55074 11.42 4.38074 11 5.31074 11H18.6907C19.6207 11 20.4407 11.42 20.9807 12.07C20.9907 12.08 21.0007 12.09 21.0007 12.1C21.4907 12.69 21.7607 13.46 21.6707 14.3Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M3.5 11.4298V6.27979C3.5 2.87979 4.35 2.02979 7.75 2.02979H9.02C10.29 2.02979 10.58 2.40979 11.06 3.04979L12.33 4.74979C12.65 5.16979 12.84 5.42979 13.69 5.42979H16.24C19.64 5.42979 20.49 6.27979 20.49 9.67979V11.4698" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.42969 17H14.5697" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.74 9.44H2V6.42C2 3.98 3.98 2 6.42 2H8.75C10.38 2 10.89 2.53 11.54 3.4L12.94 5.26C13.25 5.67 13.29 5.73 13.87 5.73H16.66C19.03 5.72 21.05 7.28 21.74 9.44Z" fill="currentColor" /><path d="M21.99 10.8399C21.97 10.3499 21.89 9.88994 21.74 9.43994H2V16.6499C2 19.5999 4.4 21.9999 7.35 21.9999H16.65C19.6 21.9999 22 19.5999 22 16.6499V11.0699C22 10.9999 22 10.9099 21.99 10.8399ZM14.5 16.2499H12.81V17.9999C12.81 18.4099 12.47 18.7499 12.06 18.7499C11.65 18.7499 11.31 18.4099 11.31 17.9999V16.2499H9.5C9.09 16.2499 8.75 15.9099 8.75 15.4999C8.75 15.0899 9.09 14.7499 9.5 14.7499H11.31V12.9999C11.31 12.5899 11.65 12.2499 12.06 12.2499C12.47 12.2499 12.81 12.5899 12.81 12.9999V14.7499H14.5C14.91 14.7499 15.25 15.0899 15.25 15.4999C15.25 15.9099 14.91 16.2499 14.5 16.2499Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFolderOpen;