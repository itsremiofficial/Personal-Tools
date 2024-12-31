import { FC } from 'react';
import { IconProps } from "@/types";

const IconFlashSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.34" : "1"} d="M9.17969 18.0402V20.4802C9.17969 22.1602 10.0897 22.5002 11.1997 21.2402L18.7697 12.6402C19.6997 11.5902 19.3097 10.7202 17.8997 10.7202H16.9697" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.82 8.8399V3.5199C14.82 1.8399 13.91 1.4999 12.8 2.7599L5.23 11.3599C4.3 12.4099 4.69 13.2799 6.1 13.2799H9.19V14.4599" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 2L2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.8205 3.5199V9.1799L9.1805 14.8199V13.2799H6.0905C4.6905 13.2799 4.3005 12.4199 5.2305 11.3699L12.0005 3.6699L12.8005 2.7599C13.9105 1.4999 14.8205 1.8399 14.8205 3.5199Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.7697 12.63L11.9997 20.33L11.1997 21.24C10.0897 22.5 9.17969 22.16 9.17969 20.48V17.82L16.2797 10.72H17.9097C19.3097 10.72 19.6997 11.58 18.7697 12.63Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFlashSlash;