import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconNotificationBing: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 6.43994V9.76994" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" /><path d="M12.0199 2C8.3399 2 5.3599 4.98 5.3599 8.66V10.76C5.3599 11.44 5.0799 12.46 4.7299 13.04L3.4599 15.16C2.6799 16.47 3.2199 17.93 4.6599 18.41C9.4399 20 14.6099 20 19.3899 18.41C20.7399 17.96 21.3199 16.38 20.5899 15.16L19.3199 13.04C18.9699 12.46 18.6899 11.43 18.6899 10.76V8.66C18.6799 5 15.6799 2 12.0199 2Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.3299 18.8198C15.3299 20.6498 13.8299 22.1498 11.9999 22.1498C11.0899 22.1498 10.2499 21.7698 9.64992 21.1698C9.04992 20.5698 8.66992 19.7298 8.66992 18.8198" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.3992 16.3298C20.1192 17.0798 19.5292 17.6498 18.7592 17.9098C17.6792 18.2698 16.5692 18.5398 15.4492 18.7298C15.3392 18.7498 15.2292 18.7698 15.1192 18.7798C14.9392 18.8098 14.7592 18.8298 14.5792 18.8498C14.3592 18.8798 14.1292 18.8998 13.8992 18.9198C13.2692 18.9698 12.6492 18.9998 12.0192 18.9998C11.3792 18.9998 10.7392 18.9698 10.1092 18.9098C9.83923 18.8898 9.57923 18.8598 9.31923 18.8198C9.16923 18.7998 9.01923 18.7798 8.87923 18.7598C8.76923 18.7398 8.65923 18.7298 8.54923 18.7098C7.43923 18.5298 6.33923 18.2598 5.26923 17.8998C4.46923 17.6298 3.85923 17.0598 3.58923 16.3298C3.31923 15.6098 3.41923 14.7698 3.84923 14.0498L4.97923 12.1698C5.21923 11.7598 5.43923 10.9698 5.43923 10.4898V8.6298C5.43923 4.9998 8.38923 2.0498 12.0192 2.0498C15.6392 2.0498 18.5892 4.9998 18.5892 8.6298V10.4898C18.5892 10.9698 18.8092 11.7598 19.0592 12.1698L20.1892 14.0498C20.5992 14.7498 20.6792 15.5698 20.3992 16.3298Z" fill="currentColor" /><path d="M12.0002 10.7601C11.5802 10.7601 11.2402 10.4201 11.2402 10.0001V6.90014C11.2402 6.48014 11.5802 6.14014 12.0002 6.14014C12.4202 6.14014 12.7602 6.48014 12.7602 6.90014V10.0001C12.7502 10.4201 12.4102 10.7601 12.0002 10.7601Z" fill="currentColor" /><path d="M14.8297 20.01C14.4097 21.17 13.2997 22 11.9997 22C11.2097 22 10.4297 21.68 9.87969 21.11C9.55969 20.81 9.31969 20.41 9.17969 20C9.30969 20.02 9.43969 20.03 9.57969 20.05C9.80969 20.08 10.0497 20.11 10.2897 20.13C10.8597 20.18 11.4397 20.21 12.0197 20.21C12.5897 20.21 13.1597 20.18 13.7197 20.13C13.9297 20.11 14.1397 20.1 14.3397 20.07C14.4997 20.05 14.6597 20.03 14.8297 20.01Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconNotificationBing as IconComponentType).keywords = [
  "notification",
  "bing",
  "apprisal",
  "notice",
  "telling",
  "presentment",
  "notifying",
  "notifier",
  "notify",
  "denunciation",
  "announcement",
  "troops",
  "bong",
  "ping",
  "tong",
  "bam",
  "ice",
  "prem",
  "fa",
  "iceland"
];

export default IconNotificationBing as IconComponentType;