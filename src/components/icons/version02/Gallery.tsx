import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconGallery: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.66992 10C10.7745 10 11.6699 9.10457 11.6699 8C11.6699 6.89543 10.7745 6 9.66992 6C8.56535 6 7.66992 6.89543 7.66992 8C7.66992 9.10457 8.56535 10 9.66992 10Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3.33984 18.95L8.26984 15.64C9.05984 15.11 10.1998 15.17 10.9098 15.78L11.2398 16.07C12.0198 16.74 13.2798 16.74 14.0598 16.07L18.2198 12.5C18.9998 11.83 20.2598 11.83 21.0398 12.5L22.6698 13.9" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6699 7.81V13.9L21.0399 12.5C20.2599 11.83 18.9999 11.83 18.2199 12.5L14.0599 16.07C13.2799 16.74 12.0199 16.74 11.2399 16.07L10.8999 15.79C10.1899 15.17 9.05992 15.11 8.25992 15.65L3.33992 18.95L3.22992 19.03C2.85992 18.23 2.66992 17.28 2.66992 16.19V7.81C2.66992 4.17 4.83992 2 8.47992 2H16.8599C20.4999 2 22.6699 4.17 22.6699 7.81Z" fill="currentColor" /><path d="M9.67004 10.38C10.9845 10.38 12.05 9.31444 12.05 8C12.05 6.68557 10.9845 5.62 9.67004 5.62C8.3556 5.62 7.29004 6.68557 7.29004 8C7.29004 9.31444 8.3556 10.38 9.67004 10.38Z" fill="currentColor" /><path d="M22.6695 13.9V16.19C22.6695 19.83 20.4995 22 16.8595 22H8.47949C5.92949 22 4.08949 20.93 3.22949 19.03L3.33949 18.95L8.25949 15.65C9.05949 15.11 10.1895 15.17 10.8995 15.79L11.2395 16.07C12.0195 16.74 13.2795 16.74 14.0595 16.07L18.2195 12.5C18.9995 11.83 20.2595 11.83 21.0395 12.5L22.6695 13.9Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.24973 19.01L3.22973 19.03C2.95973 18.44 2.78973 17.77 2.71973 17.03C2.78973 17.76 2.97973 18.42 3.24973 19.01Z" fill="currentColor" /><path d="M9.67004 10.38C10.9845 10.38 12.05 9.31443 12.05 8C12.05 6.68556 10.9845 5.62 9.67004 5.62C8.3556 5.62 7.29004 6.68556 7.29004 8C7.29004 9.31443 8.3556 10.38 9.67004 10.38Z" fill="currentColor" /><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.19C2.66992 17.28 2.85992 18.23 3.22992 19.03C4.08992 20.93 5.92992 22 8.47992 22H16.8599C20.4999 22 22.6699 19.83 22.6699 16.19V13.9V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM21.0399 12.5C20.2599 11.83 18.9999 11.83 18.2199 12.5L14.0599 16.07C13.2799 16.74 12.0199 16.74 11.2399 16.07L10.8999 15.79C10.1899 15.17 9.05992 15.11 8.25992 15.65L4.51992 18.16C4.29992 17.6 4.16992 16.95 4.16992 16.19V7.81C4.16992 4.99 5.65992 3.5 8.47992 3.5H16.8599C19.6799 3.5 21.1699 4.99 21.1699 7.81V12.61L21.0399 12.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGallery as IconComponentType).keywords = [
  "gallery",
  "art gallery",
  "heading",
  "verandah",
  "veranda",
  "drift",
  "picture gallery",
  "museum",
  "beaux-arts",
  "art"
];

export default IconGallery as IconComponentType;