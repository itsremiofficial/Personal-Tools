import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHappyemoji: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M7.21094 16C8.26094 17.51 10.0209 18.5 12.0009 18.5C13.9809 18.5 15.7309 17.51 16.7909 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z" fill="currentColor" /><path d="M11.9999 19.2499C9.84988 19.2499 7.82988 18.1999 6.59988 16.4299C6.35988 16.0899 6.44988 15.6199 6.78988 15.3899C7.12988 15.1499 7.59988 15.2399 7.82988 15.5799C8.77988 16.9399 10.3399 17.7599 11.9999 17.7599C13.6599 17.7599 15.2199 16.9499 16.1699 15.5799C16.4099 15.2399 16.8699 15.1599 17.2099 15.3899C17.5499 15.6299 17.6299 16.0899 17.3999 16.4299C16.1699 18.1999 14.1499 19.2499 11.9999 19.2499Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHappyemoji as IconComponentType).keywords = [
  "happyemoji"
];

export default IconHappyemoji as IconComponentType;