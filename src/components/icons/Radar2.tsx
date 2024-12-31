import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRadar2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 4C7.67 2.75 9.75 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 10.19 2.47999 8.48999 3.32999 7.01999L12 12" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.82999 8.95999C6.29999 9.84999 6 10.89 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C11.09 6 10.22 6.20001 9.45001 6.57001" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M12.0002 4.25C10.3102 4.25 8.70025 4.79 7.35025 5.8C7.02025 6.05 6.95026 6.52001 7.20026 6.85001C7.45026 7.18001 7.92024 7.25 8.25024 7C9.34024 6.18 10.6302 5.75 12.0002 5.75C15.4502 5.75 18.2502 8.55 18.2502 12C18.2502 15.45 15.4502 18.25 12.0002 18.25C8.55024 18.25 5.75024 15.45 5.75024 12C5.75024 11.16 5.92023 10.33 6.24023 9.56L7.38025 10.21C7.16025 10.78 7.04025 11.38 7.04025 12C7.04025 14.73 9.26023 16.95 11.9902 16.95C14.7202 16.95 16.9402 14.73 16.9402 12C16.9402 9.27 14.7202 7.05 11.9902 7.05C11.2502 7.05 10.5402 7.21 9.88025 7.52C9.51025 7.7 9.34023 8.14 9.52023 8.52C9.70023 8.89 10.1402 9.05 10.5202 8.88C10.9802 8.66001 11.4702 8.55 11.9902 8.55C13.8902 8.55 15.4402 10.1 15.4402 12C15.4402 13.9 13.8902 15.45 11.9902 15.45C10.0902 15.45 8.54025 13.9 8.54025 12C8.54025 11.65 8.61024 11.31 8.71024 10.98L11.6202 12.65C11.9802 12.86 12.4403 12.73 12.6403 12.37C12.8503 12.01 12.7202 11.55 12.3602 11.35L6.29025 7.86C5.93025 7.65 5.47023 7.78 5.27023 8.14C4.60023 9.31 4.24023 10.64 4.24023 12C4.24023 16.27 7.72023 19.75 11.9902 19.75C16.2602 19.75 19.7402 16.27 19.7402 12C19.7402 7.73 16.2702 4.25 12.0002 4.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRadar2 as IconComponentType).keywords = [
  "radar",
  "2",
  "radiolocation",
  "microwave radar",
  "radio detection and ranging",
  "monopulse",
  "radio",
  "centimetric",
  "sonar",
  "hub-and-spoke",
  "radial",
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

export default IconRadar2 as IconComponentType;