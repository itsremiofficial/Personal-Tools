import { FC } from 'react';
import { IconProps } from "../../types";

const IconMessenger: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.67999 18.44V22L9.03998 20.11C9.97998 20.38 10.97 20.52 12 20.52C17.52 20.52 22 16.37 22 11.26C22 6.15001 17.52 2 12 2C6.48 2 2 6.15001 2 11.26C2 14.15 3.43999 16.74 5.67999 18.44Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.28 9.25L7.5 13.75L11.19 12.85L12.74 13.75L16.5 9.25L12.99 10.15L11.28 9.25Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 7.43018V13.4302C22 14.9302 21.5 16.1802 20.62 17.0602C19.75 17.9302 18.5 18.4302 17 18.4302V20.5602C17 21.3602 16.11 21.8402 15.45 21.4002L11 18.4302H8.88C8.96 18.1302 9 17.8202 9 17.5002C9 16.4802 8.61 15.5402 7.97 14.8302C7.25 14.0102 6.18 13.5002 5 13.5002C3.88 13.5002 2.86 13.9602 2.13 14.7102C2.04 14.3102 2 13.8802 2 13.4302V7.43018C2 4.43018 4 2.43018 7 2.43018H17C20 2.43018 22 4.43018 22 7.43018Z" fill="currentColor" /><path d="M15.5 11.25H8.5C8.09 11.25 7.75 10.91 7.75 10.5C7.75 10.09 8.09 9.75 8.5 9.75H15.5C15.91 9.75 16.25 10.09 16.25 10.5C16.25 10.91 15.91 11.25 15.5 11.25Z" fill="currentColor" /><path d="M5 13.5C2.79 13.5 1 15.29 1 17.5C1 18.25 1.20999 18.96 1.57999 19.56C2.26999 20.72 3.54 21.5 5 21.5C6.46 21.5 7.73001 20.72 8.42001 19.56C8.79001 18.96 9 18.25 9 17.5C9 15.29 7.21 13.5 5 13.5ZM6.97 17.17L4.84 19.14C4.7 19.27 4.50999 19.34 4.32999 19.34C4.13999 19.34 3.94999 19.27 3.79999 19.12L2.81 18.13C2.52 17.84 2.52 17.36 2.81 17.07C3.1 16.78 3.58 16.78 3.87 17.07L4.35001 17.55L5.95001 16.07C6.25001 15.79 6.73001 15.81 7.01001 16.11C7.29001 16.41 7.27 16.89 6.97 17.17Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMessenger;