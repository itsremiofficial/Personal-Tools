import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconVideoTick: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 9V15C22 15.22 22 15.44 21.98 15.65C21.16 14.64 19.91 14 18.5 14C17.44 14 16.46 14.37 15.69 14.99C14.65 15.81 14 17.08 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.92 21.27 15.26 21.66 15.66 21.98C15.45 22 15.23 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M2.51953 7.10986H21.4795" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.51953 2.10986V6.96985" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.4805 2.10986V6.5199" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M23 18.5C23 19.34 22.76 20.14 22.35 20.82C22.11 21.22 21.81 21.58 21.46 21.88C20.67 22.58 19.64 23 18.5 23C17.43 23 16.44 22.62 15.67 21.98H15.66C15.26 21.66 14.92 21.27 14.65 20.82C14.24 20.14 14 19.34 14 18.5C14 17.08 14.65 15.81 15.69 14.99C16.46 14.37 17.44 14 18.5 14C19.91 14 21.16 14.64 21.98 15.65C22.62 16.42 23 17.42 23 18.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.75 18.5001L17.86 19.6101L20.26 17.3901" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.98 15.65C21.16 14.64 19.91 14 18.5 14C17.44 14 16.46 14.37 15.69 14.99C14.65 15.81 14 17.08 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.92 21.27 15.26 21.66 15.66 21.98H15.67C16.44 22.62 17.43 23 18.5 23C19.64 23 20.67 22.58 21.46 21.88C21.81 21.58 22.11 21.22 22.35 20.82C22.76 20.14 23 19.34 23 18.5C23 17.42 22.62 16.42 21.98 15.65ZM20.76 17.94L18.36 20.16C18.22 20.29 18.03 20.36 17.85 20.36C17.66 20.36 17.47 20.29 17.32 20.14L16.21 19.03C15.92 18.74 15.92 18.26 16.21 17.97C16.5 17.68 16.98 17.68 17.27 17.97L17.87 18.57L19.74 16.84C20.04 16.56 20.52 16.58 20.8 16.88C21.09 17.19 21.07 17.66 20.76 17.94Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22 7.81V15.7C22 15.69 21.99 15.68 21.98 15.67C21.94 15.61 21.89 15.55 21.84 15.5C21.83 15.49 21.82 15.47 21.81 15.46C21 14.56 19.81 14 18.5 14C17.24 14 16.09 14.52 15.27 15.36C14.48 16.17 14 17.28 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.87 21.19 15.15 21.53 15.47 21.81C15.49 21.82 15.5 21.83 15.51 21.84C15.56 21.89 15.61 21.93 15.67 21.98C15.67 21.98 15.67 21.98 15.68 21.98C15.69 21.99 15.7 22 15.71 22H7.81C4.17 22 2 19.83 2 16.19V7.81C2 7.3 2.04 6.80999 2.13 6.35999C2.64 3.60999 4.67 2.01 7.77 2H16.23C19.33 2.01 21.36 3.60999 21.87 6.35999C21.96 6.80999 22 7.3 22 7.81Z" fill="currentColor" /><path d="M22 7.81V7.85999H2V7.81C2 7.3 2.04 6.80999 2.13 6.35999H7.77V2H9.27V6.35999H14.73V2H16.23V6.35999H21.87C21.96 6.80999 22 7.3 22 7.81Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVideoTick as IconComponentType).keywords = [
  "video",
  "tick",
  "tv",
  "television",
  "picture",
  "telecasting",
  "televised",
  "videotaping",
  "videotaped",
  "taping",
  "videotape",
  "click",
  "ticktock",
  "beat",
  "ticktack",
  "retick",
  "ixodid",
  "acarid",
  "spinose",
  "gene"
];

export default IconVideoTick as IconComponentType;