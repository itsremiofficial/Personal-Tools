import { FC } from 'react';
import { IconProps } from "../../types";

const IconGlobalEdit: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M7.99961 3H8.99961C7.04961 8.84 7.04961 15.16 8.99961 21H7.99961" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 3C15.97 5.92 16.46 8.96 16.46 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 16V15C5.92 15.97 8.96 16.46 12 16.46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M19.211 15.74L15.671 19.2801C15.531 19.4201 15.401 19.68 15.371 19.87L15.181 21.22C15.111 21.71 15.451 22.05 15.941 21.98L17.291 21.79C17.481 21.76 17.751 21.63 17.881 21.49L21.421 17.95C22.031 17.34 22.321 16.63 21.421 15.73C20.531 14.84 19.821 15.13 19.211 15.74Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.6992 16.25C18.9992 17.33 19.8392 18.17 20.9192 18.47" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.9707 10V18C19.9707 21 18.9707 22 15.9707 22H7.9707C4.9707 22 3.9707 21 3.9707 18V10H19.9707Z" fill="currentColor" /><path d="M21.5 7V8C21.5 9.1 20.97 10 19.5 10H4.5C2.97 10 2.5 9.1 2.5 8V7C2.5 5.9 2.97 5 4.5 5H19.5C20.97 5 21.5 5.9 21.5 7Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M11.6408 4.99994H6.12076C5.78076 4.62994 5.79076 4.05994 6.15076 3.69994L7.57076 2.27994C7.94076 1.90994 8.55076 1.90994 8.92076 2.27994L11.6408 4.99994Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.8696 4.99994H12.3496L15.0696 2.27994C15.4396 1.90994 16.0496 1.90994 16.4196 2.27994L17.8396 3.69994C18.1996 4.05994 18.2096 4.62994 17.8696 4.99994Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M8.93945 10V15.14C8.93945 15.94 9.81945 16.41 10.4895 15.98L11.4295 15.36C11.7695 15.14 12.1995 15.14 12.5295 15.36L13.4195 15.96C14.0795 16.4 14.9695 15.93 14.9695 15.13V10H8.93945Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconGlobalEdit;