import { FC } from 'react';
import { IconProps } from "../../types";

const IconStop: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.3 21H14.7C19.2 21 21 19.2 21 14.7V9.3C21 4.8 19.2 3 14.7 3H9.3C4.8 3 3 4.8 3 9.3V14.7C3 19.2 4.8 21 9.3 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.9295 12.86C21.9095 13.05 21.8795 13.23 21.8295 13.41C20.7895 12.53 19.4395 12 17.9695 12C14.6595 12 11.9695 14.69 11.9695 18C11.9695 19.47 12.4995 20.82 13.3795 21.86C13.1995 21.91 13.0195 21.94 12.8295 21.96C11.9795 22.04 11.1095 22 10.2095 21.85C6.0995 21.15 2.7895 17.82 2.1095 13.7C0.979502 6.85002 6.8195 1.01002 13.6695 2.14002C17.7895 2.82002 21.1195 6.13002 21.8195 10.24C21.9695 11.14 22.0095 12.01 21.9295 12.86Z" fill="currentColor" /><path d="M21.8307 13.41C21.6907 13.9 21.4307 14.34 21.0607 14.71L14.6807 21.09C14.3107 21.46 13.8707 21.72 13.3807 21.86C12.5007 20.82 11.9707 19.47 11.9707 18C11.9707 14.69 14.6607 12 17.9707 12C19.4407 12 20.7907 12.53 21.8307 13.41Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconStop;