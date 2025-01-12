import { FC } from 'react';

const IconMessenger: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.34991 18.44V22L9.7099 20.11C10.6499 20.38 11.6399 20.52 12.6699 20.52C18.1899 20.52 22.6699 16.37 22.6699 11.26C22.6699 6.15001 18.1899 2 12.6699 2C7.14992 2 2.66992 6.15001 2.66992 11.26C2.66992 14.15 4.10991 16.74 6.34991 18.44Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.95 9.25L8.16992 13.75L11.8599 12.85L13.4099 13.75L17.1699 9.25L13.6599 10.15L11.95 9.25Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M6.35016 18.44V20.29C6.35016 21.06 7.17015 21.54 7.84015 21.16L9.7002 20.11C10.6402 20.38 11.6302 20.52 12.6602 20.52C18.1802 20.52 22.6602 16.37 22.6602 11.26C22.6602 6.14999 18.1802 2 12.6602 2C7.14016 2 2.66016 6.14999 2.66016 11.26C2.67016 14.15 4.11016 16.74 6.35016 18.44Z" fill="currentColor" /><path d="M11.69 9.55993L9.14996 12.5799C8.83996 12.9499 9.17996 13.4999 9.64996 13.3899L11.66 12.8999C11.79 12.8699 11.92 12.8899 12.03 12.9499L13.04 13.5399C13.25 13.6599 13.52 13.6199 13.67 13.4299L16.17 10.4399C16.48 10.0699 16.13 9.50993 15.66 9.63993L13.84 10.1099C13.72 10.1399 13.59 10.1299 13.48 10.0699L12.3 9.44993C12.1 9.32993 11.84 9.37993 11.69 9.55993Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.14992 2 2.66992 6.15001 2.66992 11.26C2.66992 14.16 4.10991 16.74 6.34991 18.44V20.29C6.34991 21.06 7.1699 21.54 7.8399 21.16L9.69995 20.11C10.64 20.38 11.6299 20.52 12.6599 20.52C18.1799 20.52 22.6599 16.37 22.6599 11.26C22.6699 6.15001 18.1899 2 12.6699 2ZM16.1799 10.44L13.6799 13.43C13.5199 13.62 13.2599 13.66 13.0499 13.54L12.0399 12.95C11.9299 12.89 11.7999 12.87 11.6699 12.9L9.65991 13.39C9.18991 13.5 8.84991 12.95 9.15991 12.58L11.7 9.56C11.85 9.38 12.1099 9.33 12.3199 9.44L13.4999 10.06C13.6099 10.12 13.7399 10.13 13.8599 10.1L15.6799 9.63C16.1399 9.51 16.4899 10.07 16.1799 10.44Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMessenger as IconComponent).keywords = [
  "messenger",
  "courier",
  "mailman",
  "mail",
  "agent",
  "message",
  "herald",
  "e-mail",
  "emissary",
  "factor"
];

export default IconMessenger as IconComponent;