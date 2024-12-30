import { FC } from 'react';
import { IconProps } from "../../types";

const IconWifiSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M6 9.96004C9.63 7.15004 14.37 7.15004 18 9.96004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.59961 13.0499C10.2696 10.9899 13.7396 10.9899 16.4096 13.0499" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.80078 16.1402C11.1308 15.1102 12.8708 15.1102 14.2008 16.1402" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.0909 12.5899C18.9309 12.5899 18.7709 12.5399 18.6309 12.4299C14.6009 9.3199 9.39091 9.3199 5.36091 12.4299C5.03091 12.6799 4.56091 12.6199 4.31091 12.2999C4.06091 11.9699 4.12091 11.4999 4.44091 11.2499C9.03091 7.6999 14.9609 7.6999 19.5409 11.2499C19.8709 11.4999 19.9309 11.9699 19.6709 12.2999C19.5409 12.4899 19.3209 12.5899 19.0909 12.5899Z" fill="currentColor" /><path d="M22.0005 9.1099C21.8405 9.1099 21.6805 9.0599 21.5405 8.94989C15.7405 4.46989 8.25052 4.46989 2.46053 8.94989C2.13053 9.19989 1.66052 9.13991 1.41052 8.81991C1.16052 8.48991 1.22051 8.0199 1.54051 7.7699C7.89051 2.8599 16.1005 2.8599 22.4605 7.7699C22.7905 8.0199 22.8505 8.48991 22.5905 8.81991C22.4505 9.00991 22.2205 9.1099 22.0005 9.1099Z" fill="currentColor" /><path d="M17.2096 16.24C17.0496 16.24 16.8896 16.19 16.7496 16.08C13.8696 13.85 10.1396 13.85 7.24958 16.08C6.91958 16.33 6.44958 16.27 6.19958 15.95C5.94958 15.62 6.00958 15.15 6.32958 14.9C9.76958 12.24 14.2196 12.24 17.6596 14.9C17.9896 15.15 18.0496 15.62 17.7896 15.95C17.6496 16.14 17.4296 16.24 17.2096 16.24Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.5992 19.9C14.4392 19.9 14.2792 19.85 14.1392 19.74C12.8392 18.73 11.1492 18.73 9.8492 19.74C9.5192 19.99 9.04919 19.93 8.79919 19.61C8.54919 19.28 8.60918 18.81 8.92918 18.56C10.7892 17.12 13.1892 17.12 15.0492 18.56C15.3792 18.81 15.4392 19.28 15.1792 19.61C15.0492 19.79 14.8292 19.9 14.5992 19.9Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconWifiSquare;