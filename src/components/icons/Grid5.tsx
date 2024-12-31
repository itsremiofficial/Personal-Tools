import { FC } from 'react';
import { IconProps } from "../../types";

const IconGrid5: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M10 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.51 2V8.5H2V7.81C2 4.17 4.17 2 7.81 2H8.51Z" fill="currentColor" /><path d="M21.9998 7.81V8.5H15.5098V2H16.1898C19.8298 2 21.9998 4.17 21.9998 7.81Z" fill="currentColor" /><path d="M21.9998 15.5V16.19C21.9998 19.83 19.8298 22 16.1898 22H15.5098V15.5H21.9998Z" fill="currentColor" /><path d="M8.51 15.5V22H7.81C4.17 22 2 19.83 2 16.19V15.5H8.51Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M8.51 8.5H2V15.5H8.51V8.5Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.9998 8.5H15.5098V15.5H21.9998V8.5Z" fill="currentColor" /><path d="M15.5098 8.5H8.50977V15.5H15.5098V8.5Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.5098 2H8.50977V8.5H15.5098V2Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.5098 15.5H8.50977V22H15.5098V15.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconGrid5;