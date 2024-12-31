import { FC } from 'react';
import { IconProps } from "@/types";

const IconRotateLeft1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.25 22H11.75C15.5 22 17 20.5 17 16.75V12.25C17 8.5 15.5 7 11.75 7H7.25C3.5 7 2 8.5 2 12.25V16.75C2 20.5 3.5 22 7.25 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 9C22 5.13 18.87 2 15 2L16.05 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.81 2H16.18C19.83 2 22 4.17 22 7.81V16.18C22 19.82 19.83 21.99 16.19 21.99H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2Z" fill="currentColor" /><path d="M12 18.5799C8.83 18.5799 6.25 15.9999 6.25 12.8299C6.25 11.6899 6.58 10.5799 7.22 9.6399C7.45 9.2999 7.92 9.1999 8.26 9.4299C8.6 9.6599 8.7 10.1299 8.47 10.4699C8 11.1699 7.76 11.9899 7.76 12.8299C7.76 15.1699 9.67 17.0799 12.01 17.0799C14.35 17.0799 16.26 15.1699 16.26 12.8299C16.26 10.5899 14.52 8.7499 12.32 8.5899L12.73 8.8899C13.06 9.1299 13.14 9.5999 12.89 9.9399C12.65 10.2699 12.18 10.3499 11.84 10.0999L9.9 8.6899C9.83 8.6399 9.77 8.5799 9.72 8.5099C9.71 8.4999 9.7 8.4899 9.69 8.4699C9.65 8.3999 9.62 8.3199 9.6 8.2399C9.58 8.1399 9.58 8.0499 9.59 7.9499C9.6 7.9099 9.61 7.8699 9.62 7.8299C9.64 7.7599 9.68 7.6999 9.72 7.6299C9.74 7.6199 9.76 7.5999 9.78 7.5799L11.44 5.6799C11.71 5.3699 12.19 5.3399 12.5 5.6099C12.81 5.8799 12.84 6.3599 12.57 6.6699L12.2 7.0999C15.28 7.1999 17.76 9.7399 17.76 12.8499C17.75 15.9999 15.17 18.5799 12 18.5799Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconRotateLeft1;