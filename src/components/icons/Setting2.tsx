import { FC } from 'react';
import { IconProps } from "../../types";

const IconSetting3: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M15.5703 18.4996V14.5996" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.5703 7.45V5.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.5697 12.6502C17.0057 12.6502 18.1697 11.4861 18.1697 10.0502C18.1697 8.61426 17.0057 7.4502 15.5697 7.4502C14.1338 7.4502 12.9697 8.61426 12.9697 10.0502C12.9697 11.4861 14.1338 12.6502 15.5697 12.6502Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.42969 18.4998V16.5498" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.42969 9.4V5.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.43008 16.5496C9.86602 16.5496 11.0301 15.3855 11.0301 13.9496C11.0301 12.5137 9.86602 11.3496 8.43008 11.3496C6.99414 11.3496 5.83008 12.5137 5.83008 13.9496C5.83008 15.3855 6.99414 16.5496 8.43008 16.5496Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.9401 5.41994L13.7701 2.42994C12.7801 1.85994 11.2301 1.85994 10.2401 2.42994L5.02008 5.43994C2.95008 6.83994 2.83008 7.04994 2.83008 9.27994V14.7099C2.83008 16.9399 2.95008 17.1599 5.06008 18.5799L10.2301 21.5699C10.7301 21.8599 11.3701 21.9999 12.0001 21.9999C12.6301 21.9999 13.2701 21.8599 13.7601 21.5699L18.9801 18.5599C21.0501 17.1599 21.1701 16.9499 21.1701 14.7199V9.27994C21.1701 7.04994 21.0501 6.83994 18.9401 5.41994Z" fill="currentColor" /><path d="M12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSetting3;