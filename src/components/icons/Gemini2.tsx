import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconGemini2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.3002 5.29999L12.0002 2L8.7002 5.29999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 7L3 5L1 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M23 7L21 5L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3 6.04004V11.0001C3 15.0001 5 17.0001 9 17.0001H15C19 17.0001 21 15.0001 21 11.0001V6.04004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9 20H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.5295 6.46997L21.5295 4.46997C21.3895 4.32997 21.1995 4.25 20.9995 4.25C20.7995 4.25 20.6095 4.32997 20.4695 4.46997L18.4695 6.46997C18.1795 6.75997 18.1795 7.24003 18.4695 7.53003C18.7595 7.82003 19.2395 7.82003 19.5295 7.53003L20.2495 6.81V11C20.2495 14.58 18.5795 16.25 14.9995 16.25H12.7495V3.81L14.7694 5.83002C14.9194 5.98002 15.1095 6.04999 15.2995 6.04999C15.4895 6.04999 15.6795 5.98002 15.8295 5.83002C16.1195 5.54002 16.1195 5.06002 15.8295 4.77002L12.5295 1.46997C12.3895 1.32997 12.1995 1.25 11.9995 1.25C11.7995 1.25 11.6095 1.32997 11.4695 1.46997L8.16945 4.77002C7.87945 5.06002 7.87945 5.54002 8.16945 5.83002C8.45945 6.12002 8.93946 6.12002 9.22945 5.83002L11.2495 3.81V16.25H8.99945C5.41945 16.25 3.74945 14.58 3.74945 11V6.81L4.46945 7.53003C4.61945 7.68003 4.80945 7.75 4.99945 7.75C5.18945 7.75 5.37945 7.68003 5.52945 7.53003C5.81945 7.24003 5.81945 6.75997 5.52945 6.46997L3.52945 4.46997C3.38945 4.32997 3.19945 4.25 2.99945 4.25C2.79945 4.25 2.60945 4.32997 2.46945 4.46997L0.469453 6.46997C0.179453 6.75997 0.179453 7.24003 0.469453 7.53003C0.759453 7.82003 1.23945 7.82003 1.52945 7.53003L2.24945 6.81V11C2.24945 15.42 4.57945 17.75 8.99945 17.75H11.2495V22C11.2495 22.41 11.5895 22.75 11.9995 22.75C12.4095 22.75 12.7495 22.41 12.7495 22V17.75H14.9995C19.4195 17.75 21.7495 15.42 21.7495 11V6.81L22.4695 7.53003C22.6195 7.68003 22.8095 7.75 22.9995 7.75C23.1895 7.75 23.3795 7.68003 23.5295 7.53003C23.8195 7.24003 23.8195 6.75997 23.5295 6.46997Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15 20.75H9C8.59 20.75 8.25 20.41 8.25 20C8.25 19.59 8.59 19.25 9 19.25H15C15.41 19.25 15.75 19.59 15.75 20C15.75 20.41 15.41 20.75 15 20.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGemini2 as IconComponentType).keywords = [
  "gemini",
  "2",
  "gemini the twins",
  "telescope",
  "double",
  "titan",
  "orion",
  "virgo",
  "scorpio",
  "aquarius",
  "capricorn",
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

export default IconGemini2 as IconComponentType;