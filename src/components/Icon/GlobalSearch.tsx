import { FC } from 'react';
import { IconProps } from "../../types";

const IconGlobalSearch: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M7.99961 3H8.99961C7.04961 8.84 7.04961 15.16 8.99961 21H7.99961" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 3C15.97 5.92 16.46 8.96 16.46 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 16V15C5.92 15.97 8.96 16.46 12 16.46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 22L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.8406 22.0002H8.16059C3.97059 22.0002 3.14059 19.4702 4.50059 16.3902L5.94059 13.1202C5.94059 13.1202 9.00059 13.0002 12.0006 14.0002C15.0006 15.0002 17.8306 13.1102 17.8306 13.1102L18.0206 12.9902L19.5106 16.4002C20.8506 19.4802 19.9706 22.0002 15.8406 22.0002Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.0195 12.99L17.8295 13.11C17.8295 13.11 14.9995 15 11.9995 14C8.99945 13 5.93945 13.12 5.93945 13.12L8.73945 6.74H8.43945C7.78945 6.74 7.18945 6.48 6.75945 6.05C6.32945 5.62 6.06945 5.02 6.06945 4.37C6.06945 3.07 7.12945 2 8.43945 2H15.5495C16.2095 2 16.7995 2.27 17.2295 2.7C17.7895 3.26 18.0795 4.08 17.8595 4.95C17.5995 6.03 16.5595 6.74 15.4395 6.74H15.2795L18.0195 12.99Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconGlobalSearch;