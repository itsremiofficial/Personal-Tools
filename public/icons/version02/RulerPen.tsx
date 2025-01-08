import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRulerPen: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.1396 19V5C22.1396 3 21.1396 2 19.1396 2H15.1396C13.1396 2 12.1396 3 12.1396 5V19C12.1396 21 13.1396 22 15.1396 22H19.1396C21.1396 22 22.1396 21 22.1396 19Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.1396 6H17.1396" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.1396 18H16.1396" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.1396 13.95L17.1396 14" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.1396 10H15.1396" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M6.1602 2C4.5302 2 3.2002 3.33 3.2002 4.95V17.91C3.2002 18.36 3.3902 19.04 3.6202 19.43L4.4402 20.79C5.3802 22.36 6.9302 22.36 7.8702 20.79L8.6902 19.43C8.9202 19.04 9.1102 18.36 9.1102 17.91V4.95C9.1102 3.33 7.7802 2 6.1602 2Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.1102 7H3.2002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.1396 5V19C22.1396 20.66 20.7896 22 19.1396 22H15.1396C13.4796 22 12.1396 20.66 12.1396 19V5C12.1396 3.34 13.4796 2 15.1396 2H19.1396C20.7896 2 22.1396 3.34 22.1396 5Z" fill="currentColor" /><path d="M17.8896 6C17.8896 6.41 17.5496 6.75 17.1396 6.75H12.1396V5.25H17.1396C17.5496 5.25 17.8896 5.59 17.8896 6Z" fill="currentColor" /><path d="M16.7896 18C16.7896 18.41 16.4596 18.75 16.0396 18.75H12.1396V17.25H16.0396C16.4596 17.25 16.7896 17.59 16.7896 18Z" fill="currentColor" /><path d="M17.8896 14.01C17.8796 14.42 17.5496 14.75 17.1396 14.75C17.1296 14.75 17.1296 14.75 17.1296 14.75L12.1396 14.7V13.2L17.1396 13.25C17.5596 13.25 17.8896 13.59 17.8896 14.01Z" fill="currentColor" /><path d="M15.6996 10C15.6996 10.41 15.3596 10.75 14.9496 10.75H12.1396V9.25H14.9496C15.3596 9.25 15.6996 9.59 15.6996 10Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M9.1102 4.95V17.91C9.1102 18.36 8.9202 19.05 8.6902 19.43L7.8702 20.79C6.9302 22.37 5.3902 22.37 4.4402 20.79L3.6302 19.43C3.3902 19.05 3.2002 18.36 3.2002 17.91V4.95C3.2002 3.33 4.5302 2 6.1602 2C7.7802 2 9.1102 3.33 9.1102 4.95Z" fill="currentColor" /><path d="M9.1102 6.25H3.2002V7.75H9.1102V6.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1396 2H15.1396C13.6469 2 12.4129 3.28581 12.1794 4.75204C12.136 5.02475 12.3635 5.25 12.6396 5.25H17.1396C17.5496 5.25 17.8896 5.59 17.8896 6C17.8896 6.41 17.5496 6.75 17.1396 6.75H12.6396C12.3635 6.75 12.1396 6.97386 12.1396 7.25V8.75C12.1396 9.02614 12.3635 9.25 12.6396 9.25H14.9496C15.3596 9.25 15.6996 9.59 15.6996 10C15.6996 10.41 15.3596 10.75 14.9496 10.75H12.6396C12.3635 10.75 12.1396 10.9739 12.1396 11.25V12.705C12.1396 12.9792 12.3605 13.2022 12.6346 13.2049L17.1396 13.25C17.5596 13.25 17.8896 13.59 17.8896 14.01C17.8796 14.42 17.5496 14.75 17.1396 14.75C17.1296 14.75 17.1296 14.75 17.1296 14.75L12.6447 14.7051C12.3666 14.7023 12.1396 14.9269 12.1396 15.205V16.75C12.1396 17.0261 12.3635 17.25 12.6396 17.25H16.0396C16.4596 17.25 16.7896 17.59 16.7896 18C16.7896 18.41 16.4596 18.75 16.0396 18.75H12.6396C12.3635 18.75 12.136 18.9753 12.1794 19.248C12.4129 20.7142 13.6469 22 15.1396 22H19.1396C20.7896 22 22.1396 20.66 22.1396 19V5C22.1396 3.34 20.7896 2 19.1396 2Z" fill="currentColor" /><path d="M9.1102 4.95V5.75C9.1102 6.02614 8.88634 6.25 8.6102 6.25H3.70019C3.42405 6.25 3.2002 6.02614 3.2002 5.75V4.95C3.2002 3.33 4.5302 2 6.1602 2C7.7802 2 9.1102 3.33 9.1102 4.95Z" fill="currentColor" /><path d="M3.2002 17.91C3.2002 18.36 3.3902 19.05 3.6302 19.43L4.4402 20.79C5.3902 22.37 6.9302 22.37 7.8702 20.79L8.6902 19.43C8.9202 19.05 9.1102 18.36 9.1102 17.91V8.25C9.1102 7.97386 8.88634 7.75 8.6102 7.75H3.70019C3.42405 7.75 3.2002 7.97386 3.2002 8.25V17.91Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRulerPen as IconComponentType).keywords = [
  "ruler",
  "pen",
  "rule",
  "ndp",
  "head",
  "roi",
  "officer",
  "leadership",
  "boss",
  "leader",
  "administrator",
  "playpen",
  "penitentiary",
  "compose",
  "indite",
  "write",
  "paddock",
  "corral",
  "basin",
  "sty"
];

export default IconRulerPen as IconComponentType;