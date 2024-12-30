import { FC } from 'react';
import { IconProps } from "../../types";

const IconDesigntools: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3195_3374)"><path d="M10.4293 17.6198C10.4293 18.7198 10.0093 19.7698 9.2193 20.5698C8.6093 21.1798 7.7793 21.5998 6.7893 21.7298L4.3293 21.9998C2.9893 22.1498 1.8393 21.0098 1.9993 19.6498L2.2693 17.1898C2.5093 14.9998 4.3393 13.5998 6.2793 13.5598C6.4793 13.5498 6.6893 13.5598 6.8793 13.5698C7.7293 13.6798 8.5593 14.0698 9.2393 14.7598C9.9093 15.4298 10.2893 16.2098 10.3993 17.0498C10.4093 17.2398 10.4293 17.4298 10.4293 17.6198Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M21.8095 3.93988C20.2695 7.77988 16.4095 12.9999 13.1795 15.5899L11.2095 17.1699C10.9595 17.3499 10.7095 17.5099 10.4295 17.6199C10.4295 17.4399 10.4195 17.2399 10.3895 17.0499C10.2795 16.2099 9.89953 15.4299 9.22953 14.7599C8.54953 14.0799 7.71953 13.6799 6.86953 13.5699C6.66953 13.5599 6.46953 13.5399 6.26953 13.5599C6.37953 13.2499 6.54953 12.9599 6.75953 12.7199L8.31953 10.7499C10.8995 7.51988 16.1395 3.63988 19.9695 2.10988C20.5595 1.88988 21.1295 2.04988 21.4895 2.41988C21.8695 2.78988 22.0495 3.35988 21.8095 3.93988Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.2398 14.4702C14.2398 11.8602 12.1198 9.74023 9.50977 9.74023" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M20.1207 12.73L20.8607 13.46C22.3507 14.95 22.3507 16.42 20.8607 17.91L17.9007 20.87C16.4307 22.34 14.9407 22.34 13.4707 20.87" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M3.11031 10.5101C1.64031 9.02006 1.64031 7.55006 3.11031 6.06006L6.07031 3.10006C7.54031 1.63006 9.03031 1.63006 10.5003 3.10006L11.2403 3.84006" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.2508 3.8501L7.55078 7.5501" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.1202 12.73L17.1602 15.68" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></g><defs><clipPath ><rect width="24" height="24" fill="none" /></clipPath></defs></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18 20.5H17V20.25C17 19.15 16.1 18.25 15 18.25H12.75V15.96C12.5 15.99 12.25 16 12 16C11.75 16 11.5 15.99 11.25 15.96V18.25H9C7.9 18.25 7 19.15 7 20.25V20.5H6C5.59 20.5 5.25 20.84 5.25 21.25C5.25 21.66 5.59 22 6 22H18C18.41 22 18.75 21.66 18.75 21.25C18.75 20.84 18.41 20.5 18 20.5Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M5.5193 11.64C4.8593 11.39 4.2793 10.98 3.8193 10.52C2.8893 9.49 2.2793 8.26 2.2793 6.82C2.2793 5.38 3.4093 4.25 4.8493 4.25H5.4093C5.1493 4.78 4.9993 5.37 4.9993 6V9C4.9993 9.94 5.1793 10.83 5.5193 11.64Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.7205 6.82C21.7205 8.26 21.1105 9.49 20.1805 10.52C19.7205 10.98 19.1405 11.39 18.4805 11.64C18.8205 10.83 19.0005 9.94 19.0005 9V6C19.0005 5.37 18.8505 4.78 18.5905 4.25H19.1505C20.5905 4.25 21.7205 5.38 21.7205 6.82Z" fill="currentColor" /><path d="M15 2H9C6.79 2 5 3.79 5 6V9C5 12.87 8.13 16 12 16C15.87 16 19 12.87 19 9V6C19 3.79 17.21 2 15 2ZM14.84 8.45L14.22 9.21C14.12 9.32 14.05 9.54 14.06 9.69L14.12 10.67C14.16 11.27 13.73 11.58 13.17 11.36L12.26 11C12.12 10.95 11.88 10.95 11.74 11L10.83 11.36C10.27 11.58 9.84 11.27 9.88 10.67L9.94 9.69C9.95 9.54 9.88 9.32 9.78 9.21L9.16 8.45C8.77 7.99 8.94 7.48 9.52 7.33L10.47 7.09C10.62 7.05 10.8 6.91 10.88 6.78L11.41 5.96C11.74 5.45 12.26 5.45 12.59 5.96L13.12 6.78C13.2 6.91 13.38 7.05 13.53 7.09L14.48 7.33C15.06 7.48 15.23 7.99 14.84 8.45Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.8397 8.44989L14.2197 9.20989C14.1197 9.31989 14.0497 9.53989 14.0597 9.68989L14.1197 10.6699C14.1597 11.2699 13.7297 11.5799 13.1697 11.3599L12.2597 10.9999C12.1197 10.9499 11.8797 10.9499 11.7397 10.9999L10.8297 11.3599C10.2697 11.5799 9.83975 11.2699 9.87975 10.6699L9.93975 9.68989C9.94975 9.53989 9.87975 9.31989 9.77975 9.20989L9.15975 8.44989C8.76975 7.98989 8.93975 7.47989 9.51975 7.32989L10.4697 7.08989C10.6197 7.04989 10.7997 6.90989 10.8797 6.77989L11.4097 5.95989C11.7397 5.44989 12.2597 5.44989 12.5897 5.95989L13.1197 6.77989C13.1997 6.90989 13.3797 7.04989 13.5297 7.08989L14.4797 7.32989C15.0597 7.47989 15.2297 7.98989 14.8397 8.44989Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDesigntools;