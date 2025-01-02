import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconFolderOpen: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.3397 14.3L21.9397 19.3C21.7897 20.83 21.6697 22 18.9597 22H6.37969C3.66969 22 3.54969 20.83 3.39969 19.3L2.99969 14.3C2.91969 13.47 3.17969 12.7 3.64969 12.11C3.65969 12.1 3.65969 12.1 3.66969 12.09C4.21969 11.42 5.04969 11 5.97969 11H19.3597C20.2897 11 21.1097 11.42 21.6497 12.07C21.6597 12.08 21.6697 12.09 21.6697 12.1C22.1597 12.69 22.4297 13.46 22.3397 14.3Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M4.16992 11.43V6.28003C4.16992 2.88003 5.01992 2.03003 8.41992 2.03003H9.68992C10.9599 2.03003 11.2499 2.41003 11.7299 3.05003L12.9999 4.75003C13.3199 5.17003 13.5099 5.43003 14.3599 5.43003H16.9099C20.3099 5.43003 21.1599 6.28003 21.1599 9.68003V11.47" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.0996 17H15.2396" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.7301 11.8201L21.5701 11.6001C21.2901 11.2601 20.9601 10.9901 20.5801 10.7901C20.0701 10.5001 19.4901 10.3501 18.8901 10.3501H6.44012C5.84012 10.3501 5.27012 10.5001 4.75012 10.7901C4.36012 11.0001 4.01012 11.2901 3.72012 11.6501C3.15012 12.3801 2.88012 13.2801 2.97012 14.1801L3.34012 18.8501C3.47012 20.2601 3.64012 22.0001 6.81012 22.0001H18.5301C21.7001 22.0001 21.8601 20.2601 22.0001 18.8401L22.3701 14.1901C22.4601 13.3501 22.2401 12.5101 21.7301 11.8201ZM15.0601 17.3401H10.2701C9.88012 17.3401 9.57012 17.0201 9.57012 16.6401C9.57012 16.2601 9.88012 15.9401 10.2701 15.9401H15.0601C15.4501 15.9401 15.7601 16.2601 15.7601 16.6401C15.7601 17.0301 15.4501 17.3401 15.0601 17.3401Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M4.0498 11.31C4.2698 11.11 4.4898 10.93 4.7498 10.79C5.2598 10.5 5.8398 10.35 6.4398 10.35H18.8998C19.4998 10.35 20.0698 10.5 20.5898 10.79C20.8498 10.93 21.0798 11.11 21.2898 11.32V10.79V9.82C21.2898 6.25 20.1998 5.16 16.6298 5.16H14.2498C13.8098 5.16 13.7998 5.15 13.5398 4.81L12.3398 3.2C11.7698 2.46 11.3198 2 9.8898 2H8.7098C5.1398 2 4.0498 3.09 4.0498 6.66V10.8V11.31Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.7301 11.8201L21.5701 11.6001C21.2901 11.2601 20.9601 10.9901 20.5801 10.7901C20.0701 10.5001 19.4901 10.3501 18.8901 10.3501H6.44012C5.84012 10.3501 5.27012 10.5001 4.75012 10.7901C4.36012 11.0001 4.01012 11.2901 3.72012 11.6501C3.15012 12.3801 2.88012 13.2801 2.97012 14.1801L3.34012 18.8501C3.47012 20.2601 3.64012 22.0001 6.81012 22.0001H18.5301C21.7001 22.0001 21.8601 20.2601 22.0001 18.8401L22.3701 14.1901C22.4601 13.3501 22.2401 12.5101 21.7301 11.8201ZM15.0601 17.3401H10.2701C9.88012 17.3401 9.57012 17.0201 9.57012 16.6401C9.57012 16.2601 9.88012 15.9401 10.2701 15.9401H15.0601C15.4501 15.9401 15.7601 16.2601 15.7601 16.6401C15.7601 17.0301 15.4501 17.3401 15.0601 17.3401Z" fill="currentColor" /><path d="M21.2309 8.59643C21.2685 8.97928 20.8532 9.23561 20.4884 9.11348C19.9836 8.94449 19.4523 8.86 18.8998 8.86H6.4398C5.88296 8.86 5.33471 8.95012 4.82315 9.12194C4.46275 9.24298 4.0498 8.99507 4.0498 8.61489V6.66C4.0498 3.09 5.1398 2 8.7098 2H9.8898C11.3198 2 11.7698 2.46 12.3498 3.21L13.5498 4.81C13.7998 5.15 13.8098 5.17 14.2498 5.17H16.6298C19.7555 5.17 20.9768 6.00724 21.2309 8.59643Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFolderOpen as IconComponentType).keywords = [
  "folder",
  "open",
  "booklet",
  "pamphlet",
  "brochure",
  "leaflet",
  "toolkit",
  "pack",
  "package",
  "kit",
  "shirt",
  "open up",
  "available",
  "visible",
  "afford",
  "public",
  "ajar",
  "give",
  "spread",
  "wide"
];

export default IconFolderOpen as IconComponentType;