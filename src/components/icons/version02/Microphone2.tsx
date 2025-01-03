import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMicrophone2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 15.5C14.8799 15.5 16.6699 13.71 16.6699 11.5V6C16.6699 3.79 14.8799 2 12.6699 2C10.4599 2 8.66992 3.79 8.66992 6V11.5C8.66992 13.71 10.4599 15.5 12.6699 15.5Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.2803 6.43C12.1803 6.1 13.1603 6.1 14.0603 6.43" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.8701 8.55001C12.4001 8.41001 12.9501 8.41001 13.4801 8.55001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M5.01953 9.65039V11.3504C5.01953 15.5704 8.44953 19.0004 12.6695 19.0004C16.8895 19.0004 20.3195 15.5704 20.3195 11.3504V9.65039" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 19V22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.7896 9.12C19.3996 9.12 19.0896 9.43 19.0896 9.82V11.4C19.0896 14.94 16.2096 17.82 12.6696 17.82C9.12961 17.82 6.24961 14.94 6.24961 11.4V9.81C6.24961 9.42 5.93961 9.11 5.54961 9.11C5.15961 9.11 4.84961 9.42 4.84961 9.81V11.39C4.84961 15.46 7.97961 18.81 11.9696 19.17V21.3C11.9696 21.69 12.2796 22 12.6696 22C13.0596 22 13.3696 21.69 13.3696 21.3V19.17C17.3496 18.82 20.4896 15.46 20.4896 11.39V9.81C20.4796 9.43 20.1696 9.12 19.7896 9.12Z" fill="currentColor" /><path d="M12.67 2C10.23 2 8.25 3.98 8.25 6.42V11.54C8.25 13.98 10.23 15.96 12.67 15.96C15.11 15.96 17.09 13.98 17.09 11.54V6.42C17.09 3.98 15.11 2 12.67 2ZM13.98 8.95C13.91 9.21 13.68 9.38 13.42 9.38C13.37 9.38 13.32 9.37 13.27 9.36C12.88 9.25 12.47 9.25 12.08 9.36C11.76 9.45 11.45 9.26 11.37 8.95C11.28 8.64 11.47 8.32 11.78 8.24C12.37 8.08 12.99 8.08 13.58 8.24C13.88 8.32 14.06 8.64 13.98 8.95ZM14.51 7.01C14.42 7.25 14.2 7.39 13.96 7.39C13.89 7.39 13.83 7.38 13.76 7.36C13.06 7.1 12.28 7.1 11.58 7.36C11.28 7.47 10.94 7.31 10.83 7.01C10.72 6.71 10.88 6.37 11.18 6.27C12.14 5.92 13.2 5.92 14.16 6.27C14.46 6.38 14.62 6.71 14.51 7.01Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.7896 9.12C19.3996 9.12 19.0896 9.43 19.0896 9.82V11.4C19.0896 14.94 16.2096 17.82 12.6696 17.82C9.12961 17.82 6.24961 14.94 6.24961 11.4V9.81C6.24961 9.42 5.93961 9.11 5.54961 9.11C5.15961 9.11 4.84961 9.42 4.84961 9.81V11.39C4.84961 15.46 7.97961 18.81 11.9696 19.17V21.3C11.9696 21.69 12.2796 22 12.6696 22C13.0596 22 13.3696 21.69 13.3696 21.3V19.17C17.3496 18.82 20.4896 15.46 20.4896 11.39V9.81C20.4796 9.43 20.1696 9.12 19.7896 9.12Z" fill="currentColor" /><path d="M12.67 2C10.23 2 8.25 3.98 8.25 6.42V11.54C8.25 13.98 10.23 15.96 12.67 15.96C15.11 15.96 17.09 13.98 17.09 11.54V6.42C17.09 3.98 15.11 2 12.67 2ZM13.98 8.95C13.91 9.21 13.68 9.38 13.42 9.38C13.37 9.38 13.32 9.37 13.27 9.36C12.88 9.25 12.47 9.25 12.08 9.36C11.76 9.45 11.45 9.26 11.37 8.95C11.28 8.64 11.47 8.32 11.78 8.24C12.37 8.08 12.99 8.08 13.58 8.24C13.88 8.32 14.06 8.64 13.98 8.95ZM14.51 7.01C14.42 7.25 14.2 7.39 13.96 7.39C13.89 7.39 13.83 7.38 13.76 7.36C13.06 7.1 12.28 7.1 11.58 7.36C11.28 7.47 10.94 7.31 10.83 7.01C10.72 6.71 10.88 6.37 11.18 6.27C12.14 5.92 13.2 5.92 14.16 6.27C14.46 6.38 14.62 6.71 14.51 7.01Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMicrophone2 as IconComponentType).keywords = [
  "microphone",
  "2",
  "mike",
  "loudspeaker",
  "mic",
  "wire",
  "speaker",
  "floor",
  "lavalier",
  "lavaliere",
  "boom",
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

export default IconMicrophone2 as IconComponentType;