import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMicrophoneSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 6.3V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4.34961 9.6499V11.3499C4.34961 12.4099 4.55961 13.4099 4.94961 14.3299" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.0697 2.83984L3.92969 18.9898" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11 3V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M9.03906 14.19C9.76906 15 10.8291 15.5 11.9991 15.5C14.2091 15.5 15.9991 13.71 15.9991 11.5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.7793 16.9504C8.1493 18.2204 9.9793 19.0004 11.9993 19.0004C16.2193 19.0004 19.6493 15.5704 19.6493 11.3504V9.65039" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 19V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16.4201 6.42014V7.58014L9.14008 14.8601C8.18008 13.9901 7.58008 12.7101 7.58008 11.3401V6.42014C7.58008 4.36014 8.98008 2.65014 10.8801 2.16014C11.0701 2.11014 11.2501 2.27014 11.2501 2.46014V4.00014C11.2501 4.41014 11.5901 4.75014 12.0001 4.75014C12.4101 4.75014 12.7501 4.41014 12.7501 4.00014V2.46014C12.7501 2.27014 12.9301 2.11014 13.1201 2.16014C15.0201 2.65014 16.4201 4.36014 16.4201 6.42014Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M7.77945 16.2201L6.78945 17.2101C5.19945 15.7801 4.18945 13.7101 4.18945 11.4001V9.81012C4.18945 9.43012 4.49945 9.12012 4.87945 9.12012C5.26945 9.12012 5.57945 9.43012 5.57945 9.81012V11.4001C5.57945 13.3201 6.42945 15.0501 7.77945 16.2201Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M19.8098 9.81012V11.4001C19.8098 15.4701 16.6798 18.8201 12.6998 19.1701V21.3001C12.6998 21.6901 12.3898 22.0001 11.9998 22.0001C11.6098 22.0001 11.2998 21.6901 11.2998 21.3001V19.1701C10.2098 19.0701 9.17977 18.7501 8.25977 18.2401L9.28977 17.2101C10.1098 17.5901 11.0298 17.8101 11.9998 17.8101C15.5398 17.8101 18.4198 14.9301 18.4198 11.4001V9.81012C18.4198 9.43012 18.7298 9.12012 19.1198 9.12012C19.4998 9.12012 19.8098 9.43012 19.8098 9.81012Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.4202 10.0801V11.5301C16.4202 14.1101 14.2002 16.1801 11.5602 15.9301C11.2802 15.9001 11.0002 15.8501 10.7402 15.7601L16.4202 10.0801Z" fill="currentColor" /><path d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMicrophoneSlash as IconComponentType).keywords = [
  "microphone",
  "slash",
  "mike",
  "loudspeaker",
  "mic",
  "wire",
  "speaker",
  "floor",
  "lavalier",
  "lavaliere",
  "boom",
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

export default IconMicrophoneSlash as IconComponentType;