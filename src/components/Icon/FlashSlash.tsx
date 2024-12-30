import { FC } from 'react';
import { IconProps } from "../../types";

const IconFlashSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.34" : "1"} d="M9.17969 18.0402V20.4802C9.17969 22.1602 10.0897 22.5002 11.1997 21.2402L18.7697 12.6402C19.6997 11.5902 19.3097 10.7202 17.8997 10.7202H16.9697" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.82 8.8399V3.5199C14.82 1.8399 13.91 1.4999 12.8 2.7599L5.23 11.3599C4.3 12.4099 4.69 13.2799 6.1 13.2799H9.19V14.4599" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 2L2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.15039 22C4.74039 22 4.40039 21.66 4.40039 21.25V2.75C4.40039 2.34 4.74039 2 5.15039 2C5.56039 2 5.90039 2.34 5.90039 2.75V21.25C5.90039 21.66 5.56039 22 5.15039 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.0195 12.3301L16.7995 11.1101C16.5095 10.8601 16.3395 10.4901 16.3295 10.0801C16.3095 9.63011 16.4895 9.18011 16.8195 8.85011L18.0195 7.65011C19.0595 6.61011 19.4495 5.61011 19.1195 4.82011C18.7995 4.04011 17.8095 3.61011 16.3495 3.61011H5.14953C4.93953 3.62011 4.76953 3.79011 4.76953 4.00011V16.0001C4.76953 16.2101 4.93953 16.3801 5.14953 16.3801H16.3495C17.7895 16.3801 18.7595 15.9401 19.0895 15.1501C19.4195 14.3501 19.0395 13.3601 18.0195 12.3301Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFlashSlash;