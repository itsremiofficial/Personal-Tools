import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconScanning: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.5 11C9.88071 11 11 9.88071 11 8.5C11 7.11929 9.88071 6 8.5 6C7.11929 6 6 7.11929 6 8.5C6 9.88071 7.11929 11 8.5 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.5 18C8.32843 18 9 17.3284 9 16.5C9 15.6716 8.32843 15 7.5 15C6.67157 15 6 15.6716 6 16.5C6 17.3284 6.67157 18 7.5 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.5 9C17.3284 9 18 8.32843 18 7.5C18 6.67157 17.3284 6 16.5 6C15.6716 6 15 6.67157 15 7.5C15 8.32843 15.6716 9 16.5 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.5 18C16.8807 18 18 16.8807 18 15.5C18 14.1193 16.8807 13 15.5 13C14.1193 13 13 14.1193 13 15.5C13 16.8807 14.1193 18 15.5 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M2 9.75C1.59 9.75 1.25 9.41 1.25 9V6.5C1.25 3.6 3.61 1.25 6.5 1.25H9C9.41 1.25 9.75 1.59 9.75 2C9.75 2.41 9.41 2.75 9 2.75H6.5C4.43 2.75 2.75 4.43 2.75 6.5V9C2.75 9.41 2.41 9.75 2 9.75Z" fill="currentColor" /><path d="M22 9.75C21.59 9.75 21.25 9.41 21.25 9V6.5C21.25 4.43 19.57 2.75 17.5 2.75H15C14.59 2.75 14.25 2.41 14.25 2C14.25 1.59 14.59 1.25 15 1.25H17.5C20.39 1.25 22.75 3.6 22.75 6.5V9C22.75 9.41 22.41 9.75 22 9.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.5 22.75H16C15.59 22.75 15.25 22.41 15.25 22C15.25 21.59 15.59 21.25 16 21.25H17.5C19.57 21.25 21.25 19.57 21.25 17.5V16C21.25 15.59 21.59 15.25 22 15.25C22.41 15.25 22.75 15.59 22.75 16V17.5C22.75 20.4 20.39 22.75 17.5 22.75Z" fill="currentColor" /><path d="M9 22.75H6.5C3.61 22.75 1.25 20.4 1.25 17.5V15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15V17.5C2.75 19.57 4.43 21.25 6.5 21.25H9C9.41 21.25 9.75 21.59 9.75 22C9.75 22.41 9.41 22.75 9 22.75Z" fill="currentColor" /><path d="M8.49914 11.3801C10.0897 11.3801 11.3791 10.0907 11.3791 8.50012C11.3791 6.90954 10.0897 5.62012 8.49914 5.62012C6.90856 5.62012 5.61914 6.90954 5.61914 8.50012C5.61914 10.0907 6.90856 11.3801 8.49914 11.3801Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M7.49914 18.3801C8.53744 18.3801 9.37914 17.5384 9.37914 16.5001C9.37914 15.4618 8.53744 14.6201 7.49914 14.6201C6.46085 14.6201 5.61914 15.4618 5.61914 16.5001C5.61914 17.5384 6.46085 18.3801 7.49914 18.3801Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.4991 9.38012C17.5374 9.38012 18.3791 8.53841 18.3791 7.50012C18.3791 6.46182 17.5374 5.62012 16.4991 5.62012C15.4608 5.62012 14.6191 6.46182 14.6191 7.50012C14.6191 8.53841 15.4608 9.38012 16.4991 9.38012Z" fill="currentColor" /><path d="M15.4991 18.3801C17.0897 18.3801 18.3791 17.0907 18.3791 15.5001C18.3791 13.9095 17.0897 12.6201 15.4991 12.6201C13.9086 12.6201 12.6191 13.9095 12.6191 15.5001C12.6191 17.0907 13.9086 18.3801 15.4991 18.3801Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconScanning as IconComponentType).keywords = [
  "scanning",
  "scanner",
  "digitalization",
  "digitalisation",
  "digitisation",
  "digitization",
  "sweeps",
  "analytics",
  "sem",
  "analytical"
];

export default IconScanning as IconComponentType;