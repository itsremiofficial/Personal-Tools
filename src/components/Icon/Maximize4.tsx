import { FC } from 'react';
import { IconProps } from "../../types";

const IconMaximize21: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M18.69 5.71C18.61 5.53 18.47 5.38 18.28 5.3C18.19 5.27 18.1 5.25 18 5.25H14C13.59 5.25 13.25 5.59 13.25 6C13.25 6.41 13.59 6.75 14 6.75H16.19L6.75 16.19V14C6.75 13.59 6.41 13.25 6 13.25C5.59 13.25 5.25 13.59 5.25 14V18C5.25 18.1 5.27 18.19 5.31 18.29C5.39 18.47 5.53 18.62 5.72 18.7C5.8 18.73 5.9 18.75 6 18.75H10C10.41 18.75 10.75 18.41 10.75 18C10.75 17.59 10.41 17.25 10 17.25H7.81L17.25 7.81V10C17.25 10.41 17.59 10.75 18 10.75C18.41 10.75 18.75 10.41 18.75 10V6C18.75 5.9 18.73 5.81 18.69 5.71Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMaximize21;