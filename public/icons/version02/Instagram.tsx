import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconInstagram: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M12.6699 15.5C14.6029 15.5 16.1699 13.933 16.1699 12C16.1699 10.067 14.6029 8.5 12.6699 8.5C10.7369 8.5 9.16992 10.067 9.16992 12C9.16992 13.933 10.7369 15.5 12.6699 15.5Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M18.306 7H18.3176" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path d="M12.67 15.88C14.8129 15.88 16.55 14.1429 16.55 12C16.55 9.85713 14.8129 8.12 12.67 8.12C10.5272 8.12 8.79004 9.85713 8.79004 12C8.79004 14.1429 10.5272 15.88 12.67 15.88Z" fill="currentColor" /><path d="M17.6699 7.5C17.3999 7.5 17.1499 7.4 16.9599 7.21C16.8699 7.11 16.7999 7 16.7499 6.88C16.6999 6.76 16.6699 6.63 16.6699 6.5C16.6699 6.37 16.6999 6.24 16.7499 6.12C16.7999 5.99 16.8699 5.89 16.9599 5.79C17.1899 5.56 17.5399 5.45 17.8599 5.52C17.9299 5.53 17.9899 5.55 18.0499 5.58C18.1099 5.6 18.1699 5.63 18.2299 5.67C18.2799 5.7 18.3299 5.75 18.3799 5.79C18.4699 5.89 18.5399 5.99 18.5899 6.12C18.6399 6.24 18.6699 6.37 18.6699 6.5C18.6699 6.63 18.6399 6.76 18.5899 6.88C18.5399 7 18.4699 7.11 18.3799 7.21C18.2799 7.3 18.1699 7.37 18.0499 7.42C17.9299 7.47 17.7999 7.5 17.6699 7.5Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM12.6699 15.88C10.5299 15.88 8.78992 14.14 8.78992 12C8.78992 9.86 10.5299 8.12 12.6699 8.12C14.8099 8.12 16.5499 9.86 16.5499 12C16.5499 14.14 14.8099 15.88 12.6699 15.88ZM18.5899 6.88C18.5399 7 18.4699 7.11 18.3799 7.21C18.2799 7.3 18.1699 7.37 18.0499 7.42C17.9299 7.47 17.7999 7.5 17.6699 7.5C17.3999 7.5 17.1499 7.4 16.9599 7.21C16.8699 7.11 16.7999 7 16.7499 6.88C16.6999 6.76 16.6699 6.63 16.6699 6.5C16.6699 6.37 16.6999 6.24 16.7499 6.12C16.7999 5.99 16.8699 5.89 16.9599 5.79C17.1899 5.56 17.5399 5.45 17.8599 5.52C17.9299 5.53 17.9899 5.55 18.0499 5.58C18.1099 5.6 18.1699 5.63 18.2299 5.67C18.2799 5.7 18.3299 5.75 18.3799 5.79C18.4699 5.89 18.5399 5.99 18.5899 6.12C18.6399 6.24 18.6699 6.37 18.6699 6.5C18.6699 6.63 18.6399 6.76 18.5899 6.88Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconInstagram as IconComponentType).keywords = [
  "instagram",
  "insta",
  "instaverse",
  "snapchat",
  "finstagram",
  "photosharing",
  "snapchatter",
  "photoblogging",
  "imgurian",
  "rinsta"
];

export default IconInstagram as IconComponentType;