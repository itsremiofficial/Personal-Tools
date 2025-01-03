import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconVibeVibe: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.1699 8.52L12.6699 11.85L15.1699 8.52H10.1699Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M17.6699 10L12.6699 17L7.66992 10" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path d="M15.62 8.29001C15.54 8.12001 15.36 8.01001 15.17 8.01001H10.17C9.98001 8.01001 9.81 8.12001 9.72 8.29001C9.63 8.46001 9.64999 8.66001 9.76999 8.81001L12.27 12.14C12.36 12.27 12.51 12.34 12.67 12.34C12.83 12.34 12.98 12.27 13.07 12.14L15.57 8.81001C15.68 8.67001 15.7 8.46001 15.62 8.29001Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path d="M12.6698 17.75C12.4298 17.75 12.1998 17.63 12.0598 17.44L7.05984 10.44C6.81984 10.1 6.89983 9.63 7.22983 9.39C7.56983 9.15 8.03981 9.23 8.27981 9.56L12.6698 15.71L17.0598 9.56C17.2998 9.22 17.7698 9.14 18.1098 9.39C18.4498 9.63 18.5298 10.1 18.2798 10.44L13.2798 17.44C13.1398 17.63 12.9098 17.75 12.6698 17.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM9.71991 8.28999C9.79991 8.11999 9.97992 8.00999 10.1699 8.00999H15.1699C15.3599 8.00999 15.5299 8.11999 15.6199 8.28999C15.7099 8.45999 15.6899 8.66 15.5699 8.81L13.0699 12.14C12.9799 12.27 12.8299 12.34 12.6699 12.34C12.5099 12.34 12.3599 12.27 12.2699 12.14L9.7699 8.81C9.6599 8.67 9.63991 8.45999 9.71991 8.28999ZM18.2799 10.44L13.2799 17.44C13.1399 17.64 12.9099 17.75 12.6699 17.75C12.4299 17.75 12.1999 17.63 12.0599 17.44L7.05994 10.44C6.81994 10.1 6.89992 9.63 7.22992 9.39C7.56992 9.15 8.03991 9.23 8.27991 9.56L12.6699 15.71L17.0599 9.56C17.2999 9.22 17.7699 9.14 18.1099 9.39C18.4399 9.63 18.5199 10.1 18.2799 10.44Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVibeVibe as IconComponentType).keywords = [
  "vibe",
  "vibraharp",
  "vibraphone",
  "vibrations",
  "printing",
  "style",
  "vibration",
  "vibrational",
  "impression",
  "ambience"
];

export default IconVibeVibe as IconComponentType;