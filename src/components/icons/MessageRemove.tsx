import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMessageRemove: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 7.43018V13.4302C22 14.9302 21.5 16.1802 20.62 17.0602C19.75 17.9302 18.5 18.4302 17 18.4302V20.5602C17 21.3602 16.11 21.8402 15.45 21.4002L11 18.4302H8.88C8.96 18.1302 9 17.8202 9 17.5002C9 16.4802 8.61 15.5402 7.97 14.8302C7.25 14.0102 6.18 13.5002 5 13.5002C3.88 13.5002 2.86 13.9602 2.13 14.7102C2.04 14.3102 2 13.8802 2 13.4302V7.43018C2 4.43018 4 2.43018 7 2.43018H17C20 2.43018 22 4.43018 22 7.43018Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 17.5C9 17.82 8.96 18.13 8.88 18.43C8.79 18.83 8.63001 19.22 8.42001 19.56C7.73001 20.72 6.46 21.5 5 21.5C3.97 21.5 3.04 21.11 2.34 20.47C2.04 20.21 1.77999 19.9 1.57999 19.56C1.20999 18.96 1 18.25 1 17.5C1 16.42 1.43 15.43 2.13 14.71C2.86 13.96 3.88 13.5 5 13.5C6.18 13.5 7.25 14.01 7.97 14.83C8.61 15.54 9 16.48 9 17.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.06921 18.5402L3.94922 16.4302" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.04968 16.46L3.92969 18.5699" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.5 10.5H15.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 7.43018V13.4302C22 14.9302 21.5 16.1802 20.62 17.0602C19.75 17.9302 18.5 18.4302 17 18.4302V20.5602C17 21.3602 16.11 21.8402 15.45 21.4002L11 18.4302H8.88C8.96 18.1302 9 17.8202 9 17.5002C9 16.4802 8.61 15.5402 7.97 14.8302C7.25 14.0102 6.18 13.5002 5 13.5002C3.88 13.5002 2.86 13.9602 2.13 14.7102C2.04 14.3102 2 13.8802 2 13.4302V7.43018C2 4.43018 4 2.43018 7 2.43018H17C20 2.43018 22 4.43018 22 7.43018Z" fill="currentColor" /><path d="M15.5 11.25H8.5C8.09 11.25 7.75 10.91 7.75 10.5C7.75 10.09 8.09 9.75 8.5 9.75H15.5C15.91 9.75 16.25 10.09 16.25 10.5C16.25 10.91 15.91 11.25 15.5 11.25Z" fill="currentColor" /><path d="M7.97 14.83C7.25 14.01 6.18 13.5 5 13.5C2.79 13.5 1 15.29 1 17.5C1 18.25 1.20999 18.96 1.57999 19.56C1.77999 19.9 2.04 20.21 2.34 20.47C3.04 21.11 3.97 21.5 5 21.5C6.46 21.5 7.73001 20.72 8.42001 19.56C8.79001 18.96 9 18.25 9 17.5C9 16.48 8.61 15.54 7.97 14.83ZM6.60001 19.08C6.45001 19.23 6.26001 19.3 6.07001 19.3C5.88001 19.3 5.69001 19.23 5.54001 19.08L5.01001 18.55L4.45999 19.1C4.30999 19.25 4.11999 19.32 3.92999 19.32C3.73999 19.32 3.54999 19.25 3.39999 19.1C3.10999 18.81 3.10999 18.33 3.39999 18.04L3.95001 17.49L3.42001 16.96C3.13001 16.67 3.13001 16.19 3.42001 15.9C3.71001 15.61 4.19001 15.61 4.48001 15.9L5.01001 16.43L5.51001 15.93C5.80001 15.64 6.28001 15.64 6.57001 15.93C6.86001 16.22 6.86001 16.7 6.57001 16.99L6.07001 17.49L6.60001 18.02C6.89001 18.31 6.89001 18.78 6.60001 19.08Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMessageRemove as IconComponentType).keywords = [
  "message",
  "remove",
  "subject matter",
  "substance",
  "content",
  "file",
  "communiqué",
  "transmission",
  "communication",
  "news",
  "advertisement",
  "take out",
  "get rid of",
  "take away",
  "move out",
  "bump off",
  "slay",
  "murder",
  "take",
  "transfer"
];

export default IconMessageRemove as IconComponentType;