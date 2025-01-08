import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSecuritySafe: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.58 11.1198C21.58 16.0098 18.03 20.5898 13.18 21.9298C12.85 22.0198 12.49 22.0198 12.16 21.9298C7.31 20.5898 3.76001 16.0098 3.76001 11.1198V6.72979C3.76001 5.90979 4.38002 4.97979 5.15002 4.66979L10.72 2.38982C11.97 1.87982 13.38 1.87982 14.63 2.38982L20.2 4.66979C20.96 4.97979 21.59 5.90979 21.59 6.72979L21.58 11.1198Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M12.6699 12.5C13.7745 12.5 14.6699 11.6046 14.6699 10.5C14.6699 9.39543 13.7745 8.5 12.6699 8.5C11.5654 8.5 10.6699 9.39543 10.6699 10.5C10.6699 11.6046 11.5654 12.5 12.6699 12.5Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 12.5V15.5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.58 11.1198C21.58 16.0098 18.03 20.5898 13.18 21.9298C12.85 22.0198 12.49 22.0198 12.16 21.9298C7.31 20.5898 3.76001 16.0098 3.76001 11.1198V6.72982C3.76001 5.90982 4.38002 4.97982 5.15002 4.66982L10.72 2.38982C11.97 1.87982 13.38 1.87982 14.63 2.38982L20.2 4.66982C20.96 4.97982 21.59 5.90982 21.59 6.72982L21.58 11.1198Z" fill="currentColor" /><path d="M15.1699 10.5C15.1699 9.12 14.0499 8 12.6699 8C11.2899 8 10.1699 9.12 10.1699 10.5C10.1699 11.62 10.9099 12.55 11.9199 12.87V15.5C11.9199 15.91 12.2599 16.25 12.6699 16.25C13.0799 16.25 13.4199 15.91 13.4199 15.5V12.87C14.4299 12.55 15.1699 11.62 15.1699 10.5Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.58 11.1198V6.72982C21.58 5.90982 20.96 4.97982 20.19 4.66982L14.62 2.38982C13.37 1.87982 11.96 1.87982 10.71 2.38982L5.14001 4.66982C4.38001 4.97982 3.76001 5.90982 3.76001 6.72982V11.1198C3.76001 16.0098 7.31001 20.5898 12.16 21.9298C12.49 22.0198 12.85 22.0198 13.18 21.9298C18.03 20.5898 21.58 16.0098 21.58 11.1198ZM13.42 12.8698V15.4998C13.42 15.9098 13.08 16.2498 12.67 16.2498C12.26 16.2498 11.92 15.9098 11.92 15.4998V12.8698C10.91 12.5498 10.17 11.6098 10.17 10.4998C10.17 9.11982 11.29 7.99982 12.67 7.99982C14.05 7.99982 15.17 9.11982 15.17 10.4998C15.17 11.6198 14.43 12.5498 13.42 12.8698Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSecuritySafe as IconComponentType).keywords = [
  "security",
  "safe",
  "surety",
  "protection",
  "certificate",
  "security system",
  "security measures",
  "confidentiality",
  "secure",
  "peace",
  "safe and sound",
  "safety",
  "risk-free",
  "dependable",
  "harmless",
  "innocuous",
  "off the hook",
  "sound"
];

export default IconSecuritySafe as IconComponentType;