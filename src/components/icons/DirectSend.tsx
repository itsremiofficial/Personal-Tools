import { FC } from 'react';
import { IconProps } from "../../types";

const IconDirectSend: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M12 9V2L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 2L14 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M1.98047 13H6.39047C6.77047 13 7.11047 13.21 7.28047 13.55L8.45047 15.89C8.79047 16.57 9.48047 17 10.2405 17H13.7705C14.5305 17 15.2205 16.57 15.5605 15.89L16.7305 13.55C16.9005 13.21 17.2505 13 17.6205 13H21.9805" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 5.12988C3.46 5.64988 2 7.72988 2 11.9999V14.9999C2 19.9999 4 21.9999 9 21.9999H15C20 21.9999 22 19.9999 22 14.9999V11.9999C22 7.72988 20.54 5.64988 17 5.12988" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 4H7.81C4.17 4 2 6.17 2 9.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V9.81C22 6.17 19.83 4 16.19 4Z" fill="currentColor" /><path d="M21.3 12.23H17.82C16.84 12.23 15.97 12.77 15.53 13.65L14.69 15.31C14.49 15.71 14.09 15.96 13.65 15.96H10.37C10.06 15.96 9.62 15.89 9.33 15.31L8.49 13.66C8.05 12.79 7.17 12.24 6.2 12.24H2.7C2.31 12.24 2 12.55 2 12.94V16.2C2 19.83 4.18 22 7.82 22H16.2C19.63 22 21.74 20.12 22 16.78V12.93C22 12.55 21.69 12.23 21.3 12.23Z" fill="currentColor" /><path d="M14.5295 6.47C14.2395 6.18 13.7595 6.18 13.4695 6.47L12.7495 7.19V2C12.7495 1.59 12.4095 1.25 11.9995 1.25C11.5895 1.25 11.2495 1.59 11.2495 2V7.19L10.5295 6.47C10.2395 6.18 9.75945 6.18 9.46945 6.47C9.17945 6.76 9.17945 7.24 9.46945 7.53L11.4695 9.53C11.4795 9.54 11.4895 9.54 11.4895 9.55C11.5495 9.61 11.6295 9.66 11.7095 9.7C11.8095 9.73 11.8995 9.75 11.9995 9.75C12.0995 9.75 12.1895 9.73 12.2795 9.69C12.3695 9.65 12.4495 9.6 12.5295 9.53L14.5295 7.53C14.8195 7.24 14.8195 6.76 14.5295 6.47Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDirectSend;