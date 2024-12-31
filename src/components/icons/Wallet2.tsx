import { FC } from 'react';
import { IconProps } from "../../types";

const IconWallet3: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M13 11.1499H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 11.1498V6.52985C2 4.48985 3.65 2.83984 5.69 2.83984H11.31C13.35 2.83984 15 4.10984 15 6.14984" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.48 12.1999C16.98 12.6799 16.74 13.4199 16.94 14.1799C17.19 15.1099 18.11 15.6999 19.07 15.6999H20V17.1499C20 19.3599 18.21 21.1499 16 21.1499H6C3.79 21.1499 2 19.3599 2 17.1499V10.1499C2 7.9399 3.79 6.1499 6 6.1499H16C18.2 6.1499 20 7.9499 20 10.1499V11.5999H18.92C18.36 11.5999 17.85 11.8199 17.48 12.1999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22.0002 12.6201V14.6801C22.0002 15.2401 21.5402 15.7001 20.9702 15.7001H19.0402C17.9602 15.7001 16.9702 14.9101 16.8802 13.8301C16.8202 13.2001 17.0602 12.6101 17.4802 12.2001C17.8502 11.8201 18.3602 11.6001 18.9202 11.6001H20.9702C21.5402 11.6001 22.0002 12.0601 22.0002 12.6201Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.0002 10.9702V13.0302C22.0002 13.5802 21.5602 14.0302 21.0002 14.0502H19.0402C17.9602 14.0502 16.9702 13.2602 16.8802 12.1802C16.8202 11.5502 17.0602 10.9602 17.4802 10.5502C17.8502 10.1702 18.3602 9.9502 18.9202 9.9502H21.0002C21.5602 9.9702 22.0002 10.4202 22.0002 10.9702Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.48 10.55C17.06 10.96 16.82 11.55 16.88 12.18C16.97 13.26 17.96 14.05 19.04 14.05H21V15.5C21 18.5 19 20.5 16 20.5H7C4 20.5 2 18.5 2 15.5V8.5C2 5.78 3.64 3.88 6.19 3.56C6.45 3.52 6.72 3.5 7 3.5H16C16.26 3.5 16.51 3.50999 16.75 3.54999C19.33 3.84999 21 5.76 21 8.5V9.95001H18.92C18.36 9.95001 17.85 10.17 17.48 10.55Z" fill="currentColor" /><path d="M13 9.75H7C6.59 9.75 6.25 9.41 6.25 9C6.25 8.59 6.59 8.25 7 8.25H13C13.41 8.25 13.75 8.59 13.75 9C13.75 9.41 13.41 9.75 13 9.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconWallet3;