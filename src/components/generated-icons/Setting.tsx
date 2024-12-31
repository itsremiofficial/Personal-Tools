import { FC } from 'react';
import { IconProps } from "@/types";

const IconSetting: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 9.10986V14.8799C3 16.9999 3 16.9999 5 18.3499L10.5 21.5299C11.33 22.0099 12.68 22.0099 13.5 21.5299L19 18.3499C21 16.9999 21 16.9999 21 14.8899V9.10986C21 6.99986 21 6.99986 19 5.64986L13.5 2.46986C12.68 1.98986 11.33 1.98986 10.5 2.46986L5 5.64986C3 6.99986 3 6.99986 3 9.10986Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.9401 5.41994L13.7701 2.42994C12.7801 1.85994 11.2301 1.85994 10.2401 2.42994L5.02008 5.43994C2.95008 6.83994 2.83008 7.04994 2.83008 9.27994V14.7099C2.83008 16.9399 2.95008 17.1599 5.06008 18.5799L10.2301 21.5699C10.7301 21.8599 11.3701 21.9999 12.0001 21.9999C12.6301 21.9999 13.2701 21.8599 13.7601 21.5699L18.9801 18.5599C21.0501 17.1599 21.1701 16.9499 21.1701 14.7199V9.27994C21.1701 7.04994 21.0501 6.83994 18.9401 5.41994Z" fill="currentColor" /><path d="M12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSetting;