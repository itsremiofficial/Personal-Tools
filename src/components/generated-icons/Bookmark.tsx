import { FC } from 'react';
import { IconProps } from "@/types";

const IconBookmark: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17 2.43994V12.4199C17 14.3899 15.59 15.1599 13.86 14.1199L12.54 13.3299C12.24 13.1499 11.76 13.1499 11.46 13.3299L10.14 14.1199C8.41 15.1499 7 14.3899 7 12.4199V2.43994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81V16.18C2 19.82 4.17 21.99 7.81 21.99H16.18C19.82 21.99 21.99 19.82 21.99 16.18V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.25 2.0002V12.42C16.25 13.06 16.06 13.54 15.73 13.73C15.39 13.93 14.85 13.83 14.25 13.47L12.93 12.68C12.42 12.37 11.58 12.37 11.07 12.68L9.75 13.47C9.15 13.83 8.61 13.92 8.27 13.73C7.94 13.54 7.75 13.06 7.75 12.42V2.00027C7.77327 2.00009 7.79661 2 7.82 2H16.19C16.21 2 16.23 2.00007 16.25 2.0002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBookmark;