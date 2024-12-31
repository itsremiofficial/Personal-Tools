import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconNotification: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0196 2.91016C8.7096 2.91016 6.0196 5.60016 6.0196 8.91016V11.8002C6.0196 12.4102 5.7596 13.3402 5.4496 13.8602L4.2996 15.7702C3.5896 16.9502 4.0796 18.2602 5.3796 18.7002C9.6896 20.1402 14.3396 20.1402 18.6496 18.7002C19.8596 18.3002 20.3896 16.8702 19.7296 15.7702L18.5796 13.8602C18.2796 13.3402 18.0196 12.4102 18.0196 11.8002V8.91016C18.0196 5.61016 15.3196 2.91016 12.0196 2.91016Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" /><path d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.0195 19.0601C15.0195 20.7101 13.6695 22.0601 12.0195 22.0601C11.1995 22.0601 10.4395 21.7201 9.89953 21.1801C9.35953 20.6401 9.01953 19.8801 9.01953 19.0601" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.3399 14.4899L18.3399 12.8299C18.1299 12.4599 17.9399 11.7599 17.9399 11.3499V8.8199C17.9399 5.5599 15.2899 2.8999 12.0199 2.8999C8.74994 2.8999 6.09994 5.5599 6.09994 8.8199V11.3499C6.09994 11.7599 5.90994 12.4599 5.69994 12.8199L4.68994 14.4899C4.28994 15.1599 4.19994 15.8999 4.44994 16.5799C4.68994 17.2499 5.25994 17.7699 5.99994 18.0199C7.93994 18.6799 9.97994 18.9999 12.0199 18.9999C14.0599 18.9999 16.0999 18.6799 18.0399 18.0299C18.7399 17.7999 19.2799 17.2699 19.5399 16.5799C19.7999 15.8899 19.7299 15.1299 19.3399 14.4899Z" fill="currentColor" /><path d="M14.2508 3.32C13.5608 3.05 12.8108 2.9 12.0208 2.9C11.2408 2.9 10.4908 3.04 9.80078 3.32C10.2308 2.51 11.0808 2 12.0208 2C12.9708 2 13.8108 2.51 14.2508 3.32Z" fill="currentColor" /><path d="M14.8297 20.01C14.4097 21.17 13.2997 22 11.9997 22C11.2097 22 10.4297 21.68 9.87969 21.11C9.55969 20.81 9.31969 20.41 9.17969 20C9.30969 20.02 9.43969 20.03 9.57969 20.05C9.80969 20.08 10.0497 20.11 10.2897 20.13C10.8597 20.18 11.4397 20.21 12.0197 20.21C12.5897 20.21 13.1597 20.18 13.7197 20.13C13.9297 20.11 14.1397 20.1 14.3397 20.07C14.4997 20.05 14.6597 20.03 14.8297 20.01Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconNotification as IconComponentType).keywords = [
  "notification",
  "apprisal",
  "notice",
  "telling",
  "presentment",
  "notifying",
  "notifier",
  "notify",
  "denunciation",
  "announcement"
];

export default IconNotification as IconComponentType;