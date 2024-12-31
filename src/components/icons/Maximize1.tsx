import { FC } from 'react';
import { IconProps } from "../../types";

const IconMaximize2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.54" : "1"}><path d="M18 12V10M6 12H12H18H6ZM6 12V10V12ZM6 12V14V12ZM18 12V14V12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 6H14M12 18V6V18ZM12 18H14H12ZM12 18H10H12ZM12 6H10H12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M18 9.25C17.59 9.25 17.25 9.59 17.25 10V11.25H12.75V6.75H14C14.41 6.75 14.75 6.41 14.75 6C14.75 5.59 14.41 5.25 14 5.25H10C9.59 5.25 9.25 5.59 9.25 6C9.25 6.41 9.59 6.75 10 6.75H11.25V11.25H6.75V10C6.75 9.59 6.41 9.25 6 9.25C5.59 9.25 5.25 9.59 5.25 10V14C5.25 14.41 5.59 14.75 6 14.75C6.41 14.75 6.75 14.41 6.75 14V12.75H11.25V17.25H10C9.59 17.25 9.25 17.59 9.25 18C9.25 18.41 9.59 18.75 10 18.75H14C14.41 18.75 14.75 18.41 14.75 18C14.75 17.59 14.41 17.25 14 17.25H12.75V12.75H17.25V14C17.25 14.41 17.59 14.75 18 14.75C18.41 14.75 18.75 14.41 18.75 14V10C18.75 9.59 18.41 9.25 18 9.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMaximize2;