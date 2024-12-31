import { FC } from 'react';
import { IconProps } from "../../types";

const IconMicrophone2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.6094 6.43012C11.5094 6.10012 12.4894 6.10012 13.3894 6.43012" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.1992 8.54982C11.7292 8.40982 12.2792 8.40982 12.8092 8.54982" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M4.34961 9.65039V11.3504C4.34961 15.5704 7.77961 19.0004 11.9996 19.0004C16.2196 19.0004 19.6496 15.5704 19.6496 11.3504V9.65039" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 19V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M5.68024 18.44V20.29C5.68024 21.06 6.50023 21.54 7.17023 21.16L9.03027 20.11C9.97027 20.38 10.9602 20.52 11.9902 20.52C17.5102 20.52 21.9902 16.37 21.9902 11.26C21.9902 6.14999 17.5102 2 11.9902 2C6.47023 2 1.99023 6.14999 1.99023 11.26C2.00023 14.15 3.44024 16.74 5.68024 18.44Z" fill="currentColor" /><path d="M11.0206 9.56017L8.48052 12.5802C8.17052 12.9502 8.51052 13.5002 8.98052 13.3902L10.9905 12.9002C11.1205 12.8702 11.2505 12.8902 11.3605 12.9502L12.3705 13.5402C12.5805 13.6602 12.8505 13.6202 13.0005 13.4302L15.5005 10.4402C15.8105 10.0702 15.4605 9.51018 14.9905 9.64018L13.1705 10.1102C13.0505 10.1402 12.9205 10.1302 12.8105 10.0702L11.6305 9.45017C11.4305 9.33017 11.1706 9.38017 11.0206 9.56017Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMicrophone2;