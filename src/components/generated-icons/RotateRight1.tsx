import { FC } from 'react';
import { IconProps } from "@/types";

const IconRotateRight1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.75 22H12.25C8.5 22 7 20.5 7 16.75V12.25C7 8.5 8.5 7 12.25 7H16.75C20.5 7 22 8.5 22 12.25V16.75C22 20.5 20.5 22 16.75 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.81 2H16.18C19.83 2 22 4.17 22 7.81V16.18C22 19.82 19.83 21.99 16.19 21.99H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2Z" fill="currentColor" /><path d="M12 18.5801C8.83 18.5801 6.25 16.0001 6.25 12.8301C6.25 9.72012 8.73 7.19012 11.81 7.08012L11.44 6.65012C11.17 6.34012 11.2 5.86012 11.51 5.59012C11.82 5.32012 12.3 5.35012 12.57 5.66012L14.23 7.56012C14.25 7.58012 14.26 7.60012 14.28 7.62012C14.32 7.68012 14.36 7.75012 14.38 7.82012C14.39 7.86012 14.4 7.90012 14.41 7.94012C14.43 8.03012 14.42 8.13012 14.4 8.22012C14.38 8.30012 14.35 8.38012 14.31 8.46012C14.3 8.48012 14.28 8.50012 14.27 8.52012C14.23 8.58012 14.17 8.63012 14.11 8.67012C14.11 8.67012 14.1 8.67012 14.1 8.68012L12.16 10.1001C11.82 10.3401 11.36 10.2701 11.11 9.94012C10.87 9.61012 10.94 9.14012 11.27 8.89012L11.68 8.59012C9.48 8.75012 7.74 10.5901 7.74 12.8301C7.74 15.1701 9.65 17.0801 11.99 17.0801C14.33 17.0801 16.24 15.1701 16.24 12.8301C16.24 11.9901 15.99 11.1701 15.53 10.4701C15.3 10.1301 15.39 9.66012 15.74 9.43012C16.09 9.20012 16.55 9.29012 16.78 9.64012C17.41 10.5901 17.75 11.6901 17.75 12.8301C17.75 16.0001 15.17 18.5801 12 18.5801Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconRotateRight1;