import { FC } from 'react';
import { IconProps } from "../../types";

const IconSidebarRight: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9707 15V9C21.9707 4 19.9707 2 14.9707 2H8.9707C3.9707 2 1.9707 4 1.9707 9V15C1.9707 20 3.9707 22 8.9707 22H14.9707C19.9707 22 21.9707 20 21.9707 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.9707 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.9707 9.43994L10.5307 11.9999L7.9707 14.5599" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 16.39 2.01 16.59 2.02 16.78C2.1 18.01 2.45 19.05 3.05 19.87C3.34 20.29 3.71 20.66 4.13 20.95C5.08 21.64 6.32 22 7.81 22H16.19C19.63 22 21.76 20.06 21.97 16.78C21.99 16.59 22 16.39 22 16.19V7.81C22 6.32 21.64 5.08 20.95 4.13C20.66 3.71 20.29 3.34 19.87 3.05C18.92 2.36 17.68 2 16.19 2Z" fill="currentColor" /><path d="M22 15.2798H2V16.1898C2 16.3898 2.01 16.5898 2.02 16.7798H21.97C21.99 16.5898 22 16.3898 22 16.1898V15.2798Z" fill="currentColor" /><path d="M8.68945 9.0299C8.68945 9.2199 8.75945 9.4099 8.90945 9.5599L11.4695 12.1199C11.7595 12.4099 12.2395 12.4099 12.5295 12.1199L15.0895 9.5599C15.3795 9.2699 15.3795 8.7899 15.0895 8.4999C14.7995 8.2099 14.3195 8.2099 14.0295 8.4999L11.9995 10.5199L9.96945 8.4999C9.67945 8.1999 9.19945 8.1999 8.90945 8.4999C8.75945 8.6399 8.68945 8.8299 8.68945 9.0299Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSidebarRight;