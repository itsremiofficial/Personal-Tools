import { FC } from 'react';
import { IconProps } from "../../types";

const IconMoreSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M15.9965 12H16.0054" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M11.9945 12H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M7.99451 12H8.00349" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path opacity={duotone ? "0.97" : "1"} d="M11.9995 10.3099C12.7229 10.3099 13.3095 9.72343 13.3095 8.99994C13.3095 8.27645 12.7229 7.68994 11.9995 7.68994C11.276 7.68994 10.6895 8.27645 10.6895 8.99994C10.6895 9.72343 11.276 10.3099 11.9995 10.3099Z" fill="currentColor" /><path opacity={duotone ? "0.97" : "1"} d="M8.31 13.6899C7.59 13.6899 7 14.2799 7 14.9999C7 15.7199 7.59 16.3099 8.31 16.3099C9.03 16.3099 9.62 15.7199 9.62 14.9999C9.62 14.2799 9.03 13.6899 8.31 13.6899Z" fill="currentColor" /><path opacity={duotone ? "0.97" : "1"} d="M15.6909 13.6899C14.9709 13.6899 14.3809 14.2799 14.3809 14.9999C14.3809 15.7199 14.9709 16.3099 15.6909 16.3099C16.4109 16.3099 17.0009 15.7199 17.0009 14.9999C17.0009 14.2799 16.4109 13.6899 15.6909 13.6899Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMoreSquare;