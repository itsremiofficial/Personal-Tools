import { FC } from 'react';
import { IconProps } from "../../types";

const IconShop: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0005 12C13.8305 12 15.1805 10.51 15.0005 8.68L14.3405 2H9.67048L9.00048 8.68C8.82048 10.51 10.1705 12 12.0005 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.3108 12C20.3308 12 21.8108 10.36 21.6108 8.35L21.3308 5.6C20.9708 3 19.9708 2 17.3508 2H14.3008L15.0008 9.01C15.1708 10.66 16.6608 12 18.3108 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.64037 12C7.29037 12 8.78037 10.66 8.94037 9.01L9.16037 6.8L9.64037 2H6.59037C3.97037 2 2.97037 3 2.61037 5.6L2.34037 8.35C2.14037 10.36 3.62037 12 5.64037 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M3.00977 11.2197V15.7097C3.00977 20.1997 4.80977 21.9997 9.29977 21.9997H14.6898C19.1798 21.9997 20.9798 20.1997 20.9798 15.7097V11.2197" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 17C10.33 17 9.5 17.83 9.5 19.5V22H14.5V19.5C14.5 17.83 13.67 17 12 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.9608 2.06008L5.46078 4.12008C4.41078 4.52008 3.55078 5.76008 3.55078 6.89008V14.9901C3.55078 15.8001 4.08078 16.8701 4.73078 17.3501L10.2308 21.4601C11.2008 22.1901 12.7908 22.1901 13.7608 21.4601L19.2608 17.3501C19.9108 16.8601 20.4408 15.8001 20.4408 14.9901V6.89008C20.4408 5.77008 19.5808 4.52008 18.5308 4.13008L13.0308 2.07008C12.4708 1.85008 11.5308 1.85008 10.9608 2.06008Z" fill="currentColor" /><path d="M10.6602 14.2301C10.4702 14.2301 10.2802 14.1601 10.1302 14.0101L8.52023 12.4001C8.23023 12.1101 8.23023 11.6301 8.52023 11.3401C8.81023 11.0501 9.29023 11.0501 9.58023 11.3401L10.6602 12.4201L14.4302 8.65012C14.7202 8.36012 15.2002 8.36012 15.4902 8.65012C15.7802 8.94012 15.7802 9.42012 15.4902 9.71012L11.1902 14.0101C11.0402 14.1601 10.8502 14.2301 10.6602 14.2301Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconShop;