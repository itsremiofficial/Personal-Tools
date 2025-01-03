import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconUserSearch: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 12C15.4313 12 17.6699 9.76142 17.6699 7C17.6699 4.23858 15.4313 2 12.6699 2C9.9085 2 7.66992 4.23858 7.66992 7C7.66992 9.76142 9.9085 12 12.6699 12Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.08008 22C4.08008 18.13 7.93011 15 12.6701 15" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M18.8699 21.4C20.6372 21.4 22.0699 19.9673 22.0699 18.2C22.0699 16.4327 20.6372 15 18.8699 15C17.1026 15 15.6699 16.4327 15.6699 18.2C15.6699 19.9673 17.1026 21.4 18.8699 21.4Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6699 22L21.6699 21" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 12C15.4313 12 17.6699 9.76142 17.6699 7C17.6699 4.23858 15.4313 2 12.6699 2C9.9085 2 7.66992 4.23858 7.66992 7C7.66992 9.76142 9.9085 12 12.6699 12Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12.6701 14.5C7.6601 14.5 3.58008 17.86 3.58008 22C3.58008 22.28 3.80008 22.5 4.08008 22.5H21.2601C21.5401 22.5 21.7601 22.28 21.7601 22C21.7601 17.86 17.6801 14.5 12.6701 14.5Z" fill="currentColor" /><path d="M23.4399 20.68L22.6799 19.92C23.0799 19.32 23.3099 18.6 23.3099 17.83C23.3099 15.72 21.5999 14.01 19.4899 14.01C17.3799 14.01 15.6699 15.72 15.6699 17.83C15.6699 19.94 17.3799 21.65 19.4899 21.65C20.2599 21.65 20.9799 21.42 21.5799 21.02L22.3399 21.78C22.4899 21.93 22.6899 22.01 22.8899 22.01C23.0899 22.01 23.2899 21.93 23.4399 21.78C23.7499 21.47 23.7499 20.98 23.4399 20.68Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6701 14C7.66008 14 3.58008 17.36 3.58008 21.5C3.58008 21.78 3.80008 22 4.08008 22H21.2601C21.5401 22 21.7601 21.78 21.7601 21.5C21.7601 17.36 17.6801 14 12.6701 14Z" fill="currentColor" /><path d="M17.3899 10.35L16.4299 9.39C16.9299 8.64 17.2199 7.74 17.2199 6.77C17.2199 4.13 15.0799 2 12.4499 2C9.81992 2 7.66992 4.14 7.66992 6.77C7.66992 9.4 9.80992 11.54 12.4399 11.54C13.4099 11.54 14.3099 11.25 15.0599 10.75L16.0199 11.71C16.2099 11.9 16.4599 11.99 16.6999 11.99C16.9499 11.99 17.1999 11.9 17.3799 11.71C17.7599 11.34 17.7599 10.73 17.3899 10.35Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUserSearch as IconComponentType).keywords = [
  "user",
  "search",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "customer",
  "client",
  "employer",
  "consumer",
  "employee",
  "seek",
  "look for",
  "explore",
  "lookup",
  "research",
  "look",
  "hunting",
  "hunt",
  "seeking"
];

export default IconUserSearch as IconComponentType;