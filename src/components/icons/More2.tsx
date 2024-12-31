import { FC } from 'react';
import { IconProps } from "../../types";

const IconMoreCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M15.9965 12H16.0054" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M11.9945 12H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M7.99451 12H8.00349" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M11.9995 10.6899C11.2795 10.6899 10.6895 11.2799 10.6895 11.9999C10.6895 12.7199 11.2795 13.3099 11.9995 13.3099C12.7195 13.3099 13.3095 12.7199 13.3095 11.9999C13.3095 11.2799 12.7195 10.6899 11.9995 10.6899Z" fill="currentColor" /><path d="M6.99945 10.6899C6.27945 10.6899 5.68945 11.2799 5.68945 11.9999C5.68945 12.7199 6.27945 13.3099 6.99945 13.3099C7.71945 13.3099 8.30945 12.7199 8.30945 11.9999C8.30945 11.2799 7.71945 10.6899 6.99945 10.6899Z" fill="currentColor" /><path d="M16.9995 10.6899C16.2795 10.6899 15.6895 11.2799 15.6895 11.9999C15.6895 12.7199 16.2795 13.3099 16.9995 13.3099C17.7195 13.3099 18.3095 12.7199 18.3095 11.9999C18.3095 11.2799 17.7195 10.6899 16.9995 10.6899Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMoreCircle;