import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMicrophoneSlash1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.82 6.53C17.16 3.93 14.81 2 12 2C8.69 2 6 4.69 6 8V13C6 14.46 6.52 15.8 7.39 16.84" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.9999 9.97998V13C17.9999 16.31 15.3099 19 11.9999 19C11.2699 19 10.5599 18.87 9.91992 18.63" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5.85938 19.58C7.46938 21.08 9.62937 22 11.9994 22C16.9694 22 20.9994 17.97 20.9994 13V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.5 2.99023L2.5 21.9902" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5508 5.49977V2.25977" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.5 3.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17.6209 5.72L7.01086 16.33C6.28086 15.34 5.88086 14.13 5.88086 12.82V8.11C5.88086 6.27 6.70086 4.62 8.00086 3.5V7.64C8.00086 8.03 8.32086 8.35 8.70086 8.35C9.09086 8.35 9.41086 8.03 9.41086 7.64V2.57C9.87086 2.34 10.3609 2.18 10.8709 2.09V5.75C10.8709 6.15 11.1909 6.46 11.5809 6.46C11.9709 6.46 12.2909 6.15 12.2909 5.75V2C14.6809 2.11 16.7409 3.61 17.6209 5.72Z" fill="currentColor" /><path d="M18.1202 8.87988V12.8199C18.1202 16.1899 15.3702 18.9399 12.0002 18.9399C11.8202 18.9399 11.6402 18.9299 11.4602 18.9099C11.3802 18.9099 11.3002 18.8999 11.2302 18.8899C11.1002 18.8699 10.9702 18.8499 10.8502 18.8299C10.8002 18.8299 10.7602 18.8099 10.7002 18.7999C10.5602 18.7699 10.4202 18.7299 10.2902 18.6899C10.0702 18.6299 9.86016 18.5499 9.66016 18.4699C9.53016 18.4199 9.41016 18.3699 9.29016 18.2999C9.26016 18.2899 9.24016 18.2699 9.21016 18.2599C9.11016 18.2099 9.01016 18.1599 8.91016 18.0899L18.1202 8.87988Z" fill="currentColor" /><path d="M21.7497 11V13C21.7497 18.38 17.3797 22.75 11.9997 22.75C9.87969 22.75 7.84969 22.07 6.17969 20.82L7.25969 19.74C8.63969 20.72 10.2797 21.25 11.9997 21.25C16.5497 21.25 20.2497 17.55 20.2497 13V11C20.2497 10.59 20.5897 10.25 20.9997 10.25C21.4097 10.25 21.7497 10.59 21.7497 11Z" fill="currentColor" /><path d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMicrophoneSlash1 as IconComponentType).keywords = [
  "microphone",
  "slash",
  "1",
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
  "thrash about",
  "wash out",
  "cut up",
  "pull out",
  "pull in",
  "pull up",
  "pull over",
  "work out",
  "ride down",
  "rush hour"
];

export default IconMicrophoneSlash1 as IconComponentType;