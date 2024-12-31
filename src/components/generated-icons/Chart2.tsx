import { FC } from 'react';
import { IconProps } from "@/types";

const IconChart2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.5 18.5C16.6 18.5 17.5 17.6 17.5 16.5V7.5C17.5 6.4 16.6 5.5 15.5 5.5C14.4 5.5 13.5 6.4 13.5 7.5V16.5C13.5 17.6 14.39 18.5 15.5 18.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.5 18.5C9.6 18.5 10.5 17.6 10.5 16.5V13C10.5 11.9 9.6 11 8.5 11C7.4 11 6.5 11.9 6.5 13V16.5C6.5 17.6 7.39 18.5 8.5 18.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M16.4198 7.8099V16.1899C16.4198 16.8299 15.8998 17.3499 15.2598 17.3499C14.6098 17.3499 14.0898 16.8299 14.0898 16.1899V7.8099C14.0898 7.1699 14.6098 6.6499 15.2598 6.6499C15.8998 6.6499 16.4198 7.1699 16.4198 7.8099Z" fill="currentColor" /><path d="M9.91008 12.93V16.19C9.91008 16.83 9.39008 17.35 8.74008 17.35C8.10008 17.35 7.58008 16.83 7.58008 16.19V12.93C7.58008 12.29 8.10008 11.77 8.74008 11.77C9.39008 11.77 9.91008 12.29 9.91008 12.93Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconChart2;