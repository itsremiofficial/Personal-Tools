import { FC } from 'react';
import { IconProps } from "../../types";

const IconProfile2user: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16055 10.87C9.06055 10.86 8.94055 10.86 8.83055 10.87C6.45055 10.79 4.56055 8.84 4.56055 6.44C4.56055 3.99 6.54055 2 9.00055 2C11.4505 2 13.4405 3.99 13.4405 6.44C13.4305 8.84 11.5405 10.79 9.16055 10.87Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.4093 4C18.3493 4 19.9093 5.57 19.9093 7.5C19.9093 9.39 18.4093 10.93 16.5393 11C16.4593 10.99 16.3693 10.99 16.2793 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4.1607 14.56C1.7407 16.18 1.7407 18.82 4.1607 20.43C6.9107 22.27 11.4207 22.27 14.1707 20.43C16.5907 18.81 16.5907 16.17 14.1707 14.56C11.4307 12.73 6.9207 12.73 4.1607 14.56Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M6 7C4 7 3 8 3 10V15C3 17 4 18 6 18L8 16V15H9L17 7H6ZM7 11.75C6.59 11.75 6.25 11.41 6.25 11C6.25 10.59 6.59 10.25 7 10.25H9C9.41 10.25 9.75 10.59 9.75 11C9.75 11.41 9.41 11.75 9 11.75H7Z" fill="currentColor" /><path d="M9 15L8 16V15H9Z" fill="currentColor" /><path d="M17 5V7H7V5C7 3.34 8.34 2 10 2H14C15.66 2 17 3.34 17 5Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M22.5303 1.46967C22.8232 1.76256 22.8232 2.23744 22.5303 2.53033L2.53033 22.5303C2.23744 22.8232 1.76256 22.8232 1.46967 22.5303C1.17678 22.2374 1.17678 21.7626 1.46967 21.4697L21.4697 1.46967C21.7626 1.17678 22.2374 1.17678 22.5303 1.46967Z" fill="currentColor" /><path d="M9.75 11C9.75 11.41 9.41 11.75 9 11.75H7C6.59 11.75 6.25 11.41 6.25 11C6.25 10.59 6.59 10.25 7 10.25H9C9.41 10.25 9.75 10.59 9.75 11Z" fill="currentColor" /><path d="M17.75 15C17.75 15.41 17.41 15.75 17 15.75H11.25L12.75 14.25H17C17.41 14.25 17.75 14.59 17.75 15Z" fill="currentColor" /><path d="M16 15V19C16 20.66 14.66 22 13 22H11C9.34 22 8 20.66 8 19L12 15H16Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21 10.0001V15.0001C21 17.0001 20 18.0001 18 18.0001H16V15.0001H12L19.67 7.33008C20.56 7.78008 21 8.67008 21 10.0001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconProfile2user;