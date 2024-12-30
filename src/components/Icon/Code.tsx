import { FC } from 'react';
import { IconProps } from "../../types";

const IconCode: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M8.99953 13C8.33953 13.33 7.78953 13.82 7.37953 14.43C7.14953 14.78 7.14953 15.22 7.37953 15.57C7.78953 16.18 8.33953 16.67 8.99953 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.2109 13C15.8709 13.33 16.4209 13.82 16.8309 14.43C17.0609 14.78 17.0609 15.22 16.8309 15.57C16.4209 16.18 15.8709 16.67 15.2109 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2.23047 8.01L21.4505 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M13.47 14.3899H10.53C9.26 14.3899 8.5 15.1499 8.5 16.4199V19.3599C8.5 20.6299 9.26 21.3899 10.53 21.3899H13.47C14.74 21.3899 15.5 20.6299 15.5 19.3599V16.4199C15.5 15.1499 14.74 14.3899 13.47 14.3899ZM14.41 18.3199C14.31 18.4199 14.16 18.4899 14 18.4999H12.59L12.6 19.8899C12.59 20.0599 12.53 20.1999 12.41 20.3199C12.31 20.4199 12.16 20.4899 12 20.4899C11.67 20.4899 11.4 20.2199 11.4 19.8899V18.4899L10 18.4999C9.67 18.4999 9.4 18.2199 9.4 17.8899C9.4 17.5599 9.67 17.2899 10 17.2899L11.4 17.2999V15.8999C11.4 15.5699 11.67 15.2899 12 15.2899C12.33 15.2899 12.6 15.5699 12.6 15.8999L12.59 17.2899H14C14.33 17.2899 14.6 17.5599 14.6 17.8899C14.59 18.0599 14.52 18.1999 14.41 18.3199Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.74 11.7401C21.13 9.74005 19.61 8.30005 17.7 7.87005C17.14 5.37005 15.6 3.58005 13.42 2.90005C11.04 2.17005 8.28 2.88005 6.55 4.69005C5.02 6.28005 4.52 8.47005 5.11 10.8001C2.98 11.3201 2 13.1801 2 14.8601C2 16.7401 3.23 18.8501 5.97 19.0401H8.5V16.4101C8.5 15.1401 9.26 14.3801 10.53 14.3801H13.47C14.74 14.3801 15.5 15.1401 15.5 16.4101V19.0401H16.31C16.32 19.0401 16.34 19.0401 16.35 19.0401C17.77 19.0401 19.13 18.5101 20.17 17.5601C21.8 16.1401 22.4 13.9101 21.74 11.7401Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCode;