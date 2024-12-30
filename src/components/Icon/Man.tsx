import { FC } from 'react';
import { IconProps } from "../../types";

const IconMap: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 9.00002V15C22 17.5 21.5 19.25 20.38 20.38L14 14L21.73 6.27002C21.91 7.06002 22 7.96002 22 9.00002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.73 6.27L6.26999 21.73C3.25999 21.04 2 18.96 2 15V9C2 4 4 2 9 2H15C18.96 2 21.04 3.26 21.73 6.27Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.3795 20.38C19.2495 21.5 17.4995 22 14.9995 22H8.99954C7.95954 22 7.05953 21.91 6.26953 21.73L13.9995 14L20.3795 20.38Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.23929 7.98021C6.91929 5.05021 11.3193 5.05021 11.9993 7.98021C12.3893 9.70021 11.3093 11.1602 10.3593 12.0602C9.66928 12.7202 8.5793 12.7202 7.8793 12.0602C6.9293 11.1602 5.83929 9.70021 6.23929 7.98021Z" stroke="currentColor" strokeWidth="1.5" /><path opacity={duotone ? "0.4" : "1"} d="M9.09412 8.7002H9.1031" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.95 14.55L18.28 17.22L17.22 18.28L14.55 20.95C13.15 22.35 10.85 22.35 9.45002 20.95L6.78001 18.28L5.72001 17.22L3.05 14.55C1.65 13.15 1.65 10.85 3.05 9.45002L5.72001 6.78001L6.78001 5.72001L9.45002 3.05C10.85 1.65 13.15 1.65 14.55 3.05L17.22 5.72001L18.28 6.78001L20.95 9.45002C22.35 10.85 22.35 13.15 20.95 14.55Z" fill="currentColor" /><path d="M13.0607 12.0002L18.2807 17.2202L17.2207 18.2802L12.0007 13.0602L6.7807 18.2802L5.7207 17.2202L10.9407 12.0002L5.7207 6.78021L6.7807 5.72021L12.0007 10.9402L17.2207 5.72021L18.2807 6.78021L13.0607 12.0002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMap;