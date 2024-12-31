import { FC } from 'react';
import { IconProps } from "../../types";

const IconMicrophoneSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 6.3V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4.34961 9.6499V11.3499C4.34961 12.4099 4.55961 13.4099 4.94961 14.3299" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.0697 2.83984L3.92969 18.9898" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11 3V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M9.03906 14.19C9.76906 15 10.8291 15.5 11.9991 15.5C14.2091 15.5 15.9991 13.71 15.9991 11.5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.7793 16.9504C8.1493 18.2204 9.9793 19.0004 11.9993 19.0004C16.2193 19.0004 19.6493 15.5704 19.6493 11.3504V9.65039" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 19V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.9996 21.9302C6.95961 21.9302 2.84961 17.8302 2.84961 12.7802V10.9002C2.84961 10.5102 3.16961 10.2002 3.54961 10.2002C3.92961 10.2002 4.24961 10.5202 4.24961 10.9002V12.7802C4.24961 17.0502 7.71961 20.5202 11.9896 20.5202C16.2596 20.5202 19.7296 17.0502 19.7296 12.7802V10.9002C19.7296 10.5102 20.0496 10.2002 20.4296 10.2002C20.8096 10.2002 21.1296 10.5202 21.1296 10.9002V12.7802C21.1496 17.8302 17.0396 21.9302 11.9996 21.9302Z" fill="currentColor" /><path d="M12.0004 2C8.64039 2 5.90039 4.74 5.90039 8.1V12.79C5.90039 16.15 8.64039 18.89 12.0004 18.89C15.3604 18.89 18.1004 16.15 18.1004 12.79V8.1C18.1004 4.74 15.3604 2 12.0004 2ZM14.1804 10.59C14.1104 10.86 13.8604 11.04 13.5904 11.04C13.5404 11.04 13.4804 11.03 13.4304 11.02C12.4104 10.74 11.3304 10.74 10.3104 11.02C9.98039 11.11 9.65039 10.92 9.56039 10.59C9.47039 10.27 9.66039 9.93 9.99039 9.84C11.2204 9.5 12.5204 9.5 13.7504 9.84C14.0804 9.93 14.2704 10.26 14.1804 10.59ZM15.0304 7.82C14.9404 8.07 14.7104 8.22 14.4604 8.22C14.3904 8.22 14.3204 8.21 14.2504 8.18C12.7204 7.62 11.0404 7.62 9.51039 8.18C9.19039 8.3 8.84039 8.14 8.72039 7.82C8.61039 7.51 8.77039 7.16 9.09039 7.04C10.8904 6.39 12.8704 6.39 14.6604 7.04C14.9804 7.16 15.1404 7.51 15.0304 7.82Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMicrophoneSlash;