import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMonitorMobbile: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 16.9498H6.21C2.84 16.9498 2 16.1098 2 12.7398V6.73979C2 3.36979 2.84 2.52979 6.21 2.52979H16.74C20.11 2.52979 20.95 3.36979 20.95 6.73979" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 21.4702V16.9502" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 12.9502H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.74023 21.4702H10.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22.0003 12.7998V18.5098C22.0003 20.8798 21.4103 21.4698 19.0403 21.4698H15.4903C13.1203 21.4698 12.5303 20.8798 12.5303 18.5098V12.7998C12.5303 10.4298 13.1203 9.83984 15.4903 9.83984H19.0403C21.4103 9.83984 22.0003 10.4298 22.0003 12.7998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.2445 18.25H17.2535" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.7998 2H6.20977C3.88977 2 2.00977 3.88 2.00977 6.19V12.37V12.56C2.00977 14.88 3.88977 16.75 6.19977 16.75H9.79977C10.3498 16.75 10.7998 17.2 10.7998 17.75V18.57C10.7998 19.12 10.3498 19.57 9.79977 19.57H7.54977C7.15977 19.57 6.83977 19.89 6.83977 20.28C6.83977 20.67 7.15977 20.99 7.54977 20.99H15.4798C15.8698 20.99 16.1898 20.67 16.1898 20.28C16.1898 19.89 15.8698 19.57 15.4798 19.57H13.2298C12.6798 19.57 12.2298 19.12 12.2298 18.57V17.75C12.2298 17.2 12.6798 16.75 13.2298 16.75H16.7998C19.1198 16.75 20.9898 14.87 20.9898 12.56V12.37V6.19C20.9898 3.88 19.1098 2 16.7998 2Z" fill="currentColor" /><path d="M19.6402 9.5H14.3502C12.6202 9.5 11.9902 10.13 11.9902 11.88V19.61C11.9902 21.37 12.6102 21.99 14.3502 21.99H19.6402C21.3702 21.99 22.0002 21.36 22.0002 19.61V11.88C22.0002 10.12 21.3802 9.5 19.6402 9.5ZM17.0002 20.32C16.3902 20.32 15.9002 19.83 15.9002 19.22C15.9002 18.61 16.3902 18.12 17.0002 18.12C17.6102 18.12 18.1002 18.61 18.1002 19.22C18.1002 19.83 17.6102 20.32 17.0002 20.32Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.1004 19.2201C18.1004 19.8301 17.6104 20.3201 17.0004 20.3201C16.3904 20.3201 15.9004 19.8301 15.9004 19.2201C15.9004 18.6101 16.3904 18.1201 17.0004 18.1201C17.6104 18.1201 18.1004 18.6201 18.1004 19.2201Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMonitorMobbile as IconComponentType).keywords = [
  "monitor",
  "mobbile",
  "ride herd on",
  "supervise",
  "proctor",
  "reminder",
  "admonisher",
  "varan",
  "monitor lizard",
  "supervised",
  "manage"
];

export default IconMonitorMobbile as IconComponentType;