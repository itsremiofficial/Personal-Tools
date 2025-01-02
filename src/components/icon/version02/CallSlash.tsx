import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCallSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.9902 18.97C11.1302 19.08 11.2702 19.18 11.4202 19.29C12.5602 20.12 13.7102 20.78 14.8602 21.27C16.0102 21.76 17.1002 22 18.1202 22C18.8202 22 19.4702 21.87 20.0702 21.62C20.6802 21.37 21.2202 20.98 21.7102 20.44C22.0002 20.12 22.2202 19.78 22.3902 19.42C22.5602 19.06 22.6402 18.69 22.6402 18.33C22.6402 18.05 22.5802 17.8 22.4802 17.55C22.3702 17.3 22.1902 17.09 21.9302 16.91L18.6202 14.56C18.3702 14.39 18.1402 14.26 17.9202 14.17C17.7002 14.08 17.5002 14.04 17.3102 14.04C17.0602 14.04 16.8302 14.11 16.6002 14.25C16.3702 14.37 16.1302 14.56 15.8802 14.81L15.1202 15.56C15.0102 15.67 14.8802 15.73 14.7102 15.73C14.6202 15.73 14.5402 15.72 14.4602 15.69C14.3902 15.66 14.3302 15.63 14.2802 15.61C14.0902 15.51 13.8702 15.37 13.6302 15.19" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.3999 13.22C10.8799 12.69 10.3999 12.16 9.94992 11.64C9.50992 11.12 9.19992 10.69 9.01992 10.36C8.99992 10.3 8.96992 10.24 8.93992 10.16C8.91992 10.08 8.90992 10.01 8.90992 9.93C8.90992 9.77 8.95992 9.64 9.06992 9.53L9.82992 8.74C10.0699 8.5 10.2599 8.26 10.3899 8.03C10.5299 7.8 10.5999 7.56 10.5999 7.32C10.5999 7.13 10.5499 6.92 10.4599 6.71C10.3699 6.49 10.2399 6.26 10.0599 6.01L7.73992 2.74C7.55992 2.48 7.32992 2.3 7.06992 2.18C6.81992 2.06 6.53992 2 6.25992 2C5.51992 2 4.81992 2.31 4.17992 2.94C3.64992 3.44 3.26992 4 3.02992 4.61C2.78992 5.21 2.66992 5.86 2.66992 6.54C2.66992 7.58 2.90992 8.67 3.38992 9.81C3.86992 10.94 4.52992 12.08 5.34992 13.22C6.17992 14.36 7.10992 15.45 8.13992 16.49" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6699 2L2.66992 22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6695 18.33C22.6695 18.69 22.5895 19.06 22.4195 19.42C22.2495 19.78 22.0295 20.12 21.7395 20.44C21.2495 20.98 20.7095 21.37 20.0995 21.62C19.4995 21.87 18.8395 22 18.1395 22C17.1195 22 16.0295 21.76 14.8795 21.27C13.7295 20.78 12.5695 20.12 11.4295 19.29C10.8495 18.86 10.2795 18.42 9.72949 17.94L12.9895 14.68C12.9995 14.68 12.9995 14.68 13.0095 14.69C13.5295 15.13 13.9595 15.43 14.2995 15.61C14.3495 15.63 14.4095 15.66 14.4795 15.69C14.5595 15.72 14.6395 15.73 14.7295 15.73C14.8995 15.73 15.0295 15.67 15.1395 15.56L15.8995 14.81C16.1495 14.56 16.3895 14.37 16.6195 14.25C16.8495 14.11 17.0795 14.04 17.3295 14.04C17.5195 14.04 17.7195 14.08 17.9395 14.17C18.1595 14.26 18.3895 14.39 18.6395 14.56L21.9595 16.91C22.2195 17.09 22.3995 17.3 22.5095 17.55C22.6095 17.8 22.6695 18.05 22.6695 18.33Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M11.4299 13.24L8.16992 16.5C8.15992 16.5 8.15992 16.5 8.14992 16.49C7.11992 15.45 6.18992 14.36 5.34992 13.22C4.53992 12.1 3.88992 10.97 3.40992 9.86C3.39992 9.84 3.39992 9.83 3.38992 9.81C2.90992 8.67 2.66992 7.58 2.66992 6.54C2.66992 5.86 2.78992 5.21 3.02992 4.61C3.22992 4.1 3.52992 3.62 3.93992 3.19C4.00992 3.11 4.08992 3.02 4.17992 2.94C4.33992 2.78 4.49992 2.64 4.66992 2.53C4.67992 2.53 4.67992 2.53 4.67992 2.53C5.17992 2.17 5.70992 2 6.26992 2C6.54992 2 6.82992 2.06 7.07992 2.18C7.31992 2.29 7.52992 2.45 7.69992 2.68C7.71992 2.7 7.72992 2.72 7.74992 2.74L10.0699 6.01C10.2499 6.26 10.3799 6.49 10.4699 6.71C10.5599 6.92 10.6099 7.13 10.6099 7.32C10.6099 7.56 10.5399 7.8 10.3999 8.03C10.2699 8.26 10.0799 8.5 9.83992 8.74L9.07992 9.53C8.96992 9.64 8.91992 9.77 8.91992 9.93C8.91992 10.01 8.92992 10.08 8.94992 10.16C8.97992 10.24 9.00992 10.3 9.02992 10.36C9.20992 10.69 9.51992 11.12 9.95992 11.64C10.4099 12.16 10.8899 12.69 11.4099 13.22C11.4199 13.23 11.4199 13.23 11.4299 13.24Z" fill="currentColor" /><path d="M22.4398 2.22988C22.1398 1.92988 21.6498 1.92988 21.3498 2.22988L2.8998 20.6899C2.5998 20.9899 2.5998 21.4799 2.8998 21.7799C3.0498 21.9199 3.2398 21.9999 3.4398 21.9999C3.6398 21.9999 3.8298 21.9199 3.9798 21.7699L22.4398 3.30988C22.7498 3.00988 22.7498 2.52988 22.4398 2.22988Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6695 18.33C22.6695 18.69 22.5895 19.06 22.4195 19.42C22.2495 19.78 22.0295 20.12 21.7395 20.44C21.2495 20.98 20.7095 21.37 20.0995 21.62C19.4995 21.87 18.8395 22 18.1395 22C17.1195 22 16.0295 21.76 14.8795 21.27C13.7295 20.78 12.5695 20.12 11.4295 19.29C10.8495 18.86 10.2795 18.42 9.72949 17.94L12.9895 14.68C12.9995 14.68 12.9995 14.68 13.0095 14.69C13.5295 15.13 13.9595 15.43 14.2995 15.61C14.3495 15.63 14.4095 15.66 14.4795 15.69C14.5595 15.72 14.6395 15.73 14.7295 15.73C14.8995 15.73 15.0295 15.67 15.1395 15.56L15.8995 14.81C16.1495 14.56 16.3895 14.37 16.6195 14.25C16.8495 14.11 17.0795 14.04 17.3295 14.04C17.5195 14.04 17.7195 14.08 17.9395 14.17C18.1595 14.26 18.3895 14.39 18.6395 14.56L21.9595 16.91C22.2195 17.09 22.3995 17.3 22.5095 17.55C22.6095 17.8 22.6695 18.05 22.6695 18.33Z" fill="currentColor" /><path d="M11.4299 13.24L8.16992 16.5C8.15992 16.5 8.15992 16.5 8.14992 16.49C7.11992 15.45 6.18992 14.36 5.34992 13.22C4.53992 12.1 3.88992 10.97 3.40992 9.86C3.39992 9.84 3.39992 9.83 3.38992 9.81C2.90992 8.67 2.66992 7.58 2.66992 6.54C2.66992 5.86 2.78992 5.21 3.02992 4.61C3.22992 4.1 3.52992 3.62 3.93992 3.19C4.00992 3.11 4.08992 3.02 4.17992 2.94C4.33992 2.78 4.49992 2.64 4.66992 2.53C4.67992 2.53 4.67992 2.53 4.67992 2.53C5.17992 2.17 5.70992 2 6.26992 2C6.54992 2 6.82992 2.06 7.07992 2.18C7.31992 2.29 7.52992 2.45 7.69992 2.68C7.71992 2.7 7.72992 2.72 7.74992 2.74L10.0699 6.01C10.2499 6.26 10.3799 6.49 10.4699 6.71C10.5599 6.92 10.6099 7.13 10.6099 7.32C10.6099 7.56 10.5399 7.8 10.3999 8.03C10.2699 8.26 10.0799 8.5 9.83992 8.74L9.07992 9.53C8.96992 9.64 8.91992 9.77 8.91992 9.93C8.91992 10.01 8.92992 10.08 8.94992 10.16C8.97992 10.24 9.00992 10.3 9.02992 10.36C9.20992 10.69 9.51992 11.12 9.95992 11.64C10.4099 12.16 10.8899 12.69 11.4099 13.22C11.4199 13.23 11.4199 13.23 11.4299 13.24Z" fill="currentColor" /><path d="M22.4398 2.22988C22.1398 1.92988 21.6498 1.92988 21.3498 2.22988L2.8998 20.6899C2.5998 20.9899 2.5998 21.4799 2.8998 21.7799C3.0498 21.9199 3.2398 21.9999 3.4398 21.9999C3.6398 21.9999 3.8298 21.9199 3.9798 21.7699L22.4398 3.30988C22.7498 3.00988 22.7498 2.52988 22.4398 2.22988Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCallSlash as IconComponentType).keywords = [
  "call",
  "slash",
  "phone call",
  "telephone call",
  "call in",
  "telephone",
  "phone",
  "call up",
  "send for",
  "call option",
  "margin call",
  "flog",
  "gash",
  "lash",
  "cut",
  "slice",
  "whip",
  "thrash",
  "trounce",
  "thrash about"
];

export default IconCallSlash as IconComponentType;