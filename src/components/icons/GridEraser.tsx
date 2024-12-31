import { FC } from 'react';
import { IconProps } from "../../types";

const IconGridEraser: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 11V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M2.0293 8.5H21.9993" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2.0293 15.5H11.9993" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.50977 21.9897V2.00977" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.5098 11.9897V2.00977" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M18.7995 19.7L16.8995 21.6C16.3795 22.12 15.5195 22.12 14.9895 21.6L13.4095 20.01C12.8895 19.49 12.8895 18.63 13.4095 18.1L15.3095 16.21L18.7995 19.7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.6108 16.9L18.8008 19.7099L15.3008 16.2099L18.1108 13.39C18.6308 12.87 19.5008 12.87 20.0208 13.39L21.6008 14.98C22.1308 15.51 22.1308 16.38 21.6108 16.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 10V22H7.81C4.17 22 2 19.83 2 16.19V10H12Z" fill="currentColor" /><path d="M22 7.81V10H2V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M22 10V16.19C22 19.83 19.83 22 16.19 22H12V10H22Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconGridEraser;