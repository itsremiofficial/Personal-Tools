import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMore2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9998 9.32C13.1898 9.32 14.1598 8.35 14.1598 7.16C14.1598 5.97 13.1898 5 11.9998 5C10.8098 5 9.83984 5.97 9.83984 7.16C9.83984 8.35 10.8098 9.32 11.9998 9.32Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.78988 19.0002C7.97988 19.0002 8.94988 18.0302 8.94988 16.8402C8.94988 15.6502 7.97988 14.6802 6.78988 14.6802C5.59988 14.6802 4.62988 15.6502 4.62988 16.8402C4.62988 18.0302 5.58988 19.0002 6.78988 19.0002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.2098 19.0002C18.3998 19.0002 19.3698 18.0302 19.3698 16.8402C19.3698 15.6502 18.3998 14.6802 17.2098 14.6802C16.0198 14.6802 15.0498 15.6502 15.0498 16.8402C15.0498 18.0302 16.0198 19.0002 17.2098 19.0002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path opacity={duotone ? "0.97" : "1"} d="M11.9995 10.3099C12.7229 10.3099 13.3095 9.72343 13.3095 8.99994C13.3095 8.27645 12.7229 7.68994 11.9995 7.68994C11.276 7.68994 10.6895 8.27645 10.6895 8.99994C10.6895 9.72343 11.276 10.3099 11.9995 10.3099Z" fill="currentColor" /><path opacity={duotone ? "0.97" : "1"} d="M8.31 13.6899C7.59 13.6899 7 14.2799 7 14.9999C7 15.7199 7.59 16.3099 8.31 16.3099C9.03 16.3099 9.62 15.7199 9.62 14.9999C9.62 14.2799 9.03 13.6899 8.31 13.6899Z" fill="currentColor" /><path opacity={duotone ? "0.97" : "1"} d="M15.6909 13.6899C14.9709 13.6899 14.3809 14.2799 14.3809 14.9999C14.3809 15.7199 14.9709 16.3099 15.6909 16.3099C16.4109 16.3099 17.0009 15.7199 17.0009 14.9999C17.0009 14.2799 16.4109 13.6899 15.6909 13.6899Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMore2 as IconComponentType).keywords = [
  "more",
  "2",
  "additional",
  "further",
  "added",
  "more than",
  "to a greater extent",
  "maximum",
  "farther",
  "anymore",
  "better",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconMore2 as IconComponentType;