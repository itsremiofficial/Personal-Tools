import { FC } from 'react';
import { IconProps } from "../../types";

const IconMessageTick: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 7.43018V13.4302C22 14.9302 21.5 16.1802 20.62 17.0602C19.75 17.9302 18.5 18.4302 17 18.4302V20.5602C17 21.3602 16.11 21.8402 15.45 21.4002L11 18.4302H8.88C8.96 18.1302 9 17.8202 9 17.5002C9 16.4802 8.61 15.5402 7.97 14.8302C7.25 14.0102 6.18 13.5002 5 13.5002C3.88 13.5002 2.86 13.9602 2.13 14.7102C2.04 14.3102 2 13.8802 2 13.4302V7.43018C2 4.43018 4 2.43018 7 2.43018H17C20 2.43018 22 4.43018 22 7.43018Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 17.5C9 18.25 8.79001 18.96 8.42001 19.56C8.21001 19.92 7.94 20.24 7.63 20.5C6.93 21.13 6.01 21.5 5 21.5C3.54 21.5 2.26999 20.72 1.57999 19.56C1.20999 18.96 1 18.25 1 17.5C1 16.24 1.58 15.11 2.5 14.38C3.19 13.83 4.06 13.5 5 13.5C7.21 13.5 9 15.29 9 17.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.43945 17.5L4.42944 18.49L6.55945 16.52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.5 10.5H15.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.53 21.47L21.79 20.73C22.17 20.15 22.4 19.45 22.4 18.7C22.4 16.66 20.74 15 18.7 15C16.66 15 15 16.66 15 18.7C15 20.74 16.66 22.4 18.7 22.4C19.45 22.4 20.15 22.17 20.73 21.79L21.47 22.53C21.62 22.68 21.81 22.75 22 22.75C22.19 22.75 22.38 22.68 22.53 22.53C22.82 22.24 22.82 21.76 22.53 21.47Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M2 12.9698V6.98977C2 4.23977 4.24 2.00977 7 2.00977H17C19.76 2.00977 22 4.23977 22 6.99977V13.9798C22 16.7298 19.76 18.9598 17 18.9598H15.5C15.19 18.9598 14.89 19.1098 14.7 19.3598L13.2 21.3498C12.54 22.2298 11.46 22.2298 10.8 21.3498L9.29999 19.3598C9.12999 19.1398 8.78 18.9598 8.5 18.9598H7C4.24 18.9598 2 16.7298 2 13.9798V12.9698Z" fill="currentColor" /><path d="M12.0002 12C11.4402 12 10.9902 11.55 10.9902 11C10.9902 10.45 11.4402 10 11.9902 10C12.5402 10 12.9902 10.45 12.9902 11C12.9902 11.55 12.5602 12 12.0002 12Z" fill="currentColor" /><path d="M16.0002 12C15.4402 12 14.9902 11.55 14.9902 11C14.9902 10.45 15.4402 10 15.9902 10C16.5402 10 16.9902 10.45 16.9902 11C16.9902 11.55 16.5602 12 16.0002 12Z" fill="currentColor" /><path d="M8.00024 12C7.44024 12 6.99023 11.55 6.99023 11C6.99023 10.45 7.44023 10 7.99023 10C8.54023 10 8.99023 10.45 8.99023 11C8.99023 11.55 8.56024 12 8.00024 12Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMessageTick;