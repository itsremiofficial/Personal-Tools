import { FC } from 'react';
import { IconProps } from "../../types";

const IconTruck: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M15 2V12C15 13.1 14.1 14 13 14H2V6C2 3.79 3.79 2 6 2H15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 14V17C22 18.66 20.66 20 19 20H18C18 18.9 17.1 18 16 18C14.9 18 14 18.9 14 20H10C10 18.9 9.1 18 8 18C6.9 18 6 18.9 6 20H5C3.34 20 2 18.66 2 17V14H13C14.1 14 15 13.1 15 12V5H16.84C17.56 5 18.22 5.39001 18.58 6.01001L20.29 9H19C18.45 9 18 9.45 18 10V13C18 13.55 18.45 14 19 14H22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M16.8295 9.40998C16.7595 9.23998 16.6195 9.09998 16.4495 9.02998C16.3695 8.99998 16.2795 8.97998 16.1895 8.97998H14.3295C13.9395 8.97998 13.6295 9.28998 13.6295 9.67998C13.6295 10.07 13.9395 10.38 14.3295 10.38H14.5095L12.3995 12.49L11.3795 10.97C11.2595 10.8 11.0795 10.68 10.8695 10.66C10.6495 10.64 10.4595 10.71 10.3095 10.86L7.32945 13.84C7.05945 14.11 7.05945 14.55 7.32945 14.83C7.46945 14.97 7.63945 15.03 7.81945 15.03C7.99945 15.03 8.17945 14.96 8.30945 14.83L10.6895 12.45L11.7095 13.97C11.8295 14.14 12.0095 14.26 12.2195 14.28C12.4395 14.3 12.6295 14.23 12.7795 14.08L15.4995 11.36V11.54C15.4995 11.93 15.8095 12.24 16.1995 12.24C16.5895 12.24 16.8995 11.93 16.8995 11.54V9.66998C16.8795 9.57998 16.8695 9.48998 16.8295 9.40998Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTruck;