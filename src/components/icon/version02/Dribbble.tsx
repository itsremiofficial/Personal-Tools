import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDribbble: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M19.1699 4.79004C16.5699 9.34004 11.5599 11.95 6.3399 11.48L3.16992 11.19" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.16992 19.37C8.76992 14.82 13.7799 12.21 18.9999 12.68L22.1699 12.97" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.2998 3L11.4798 6.95001C13.6098 9.59001 15.1198 12.66 15.9198 15.95L17.1298 20.94" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path fillRule="evenodd" clipRule="evenodd" d="M16.5501 20.92C16.5801 21.08 16.4901 21.25 16.3401 21.31C15.2001 21.76 13.9701 22 12.6801 22C10.4801 22 8.43015 21.29 6.78015 20.07C6.64015 19.97 6.60015 19.77 6.69015 19.62C7.24015 18.64 9.39015 15.49 14.1401 13.73C14.3201 13.66 14.5201 13.75 14.5801 13.93C15.7801 17.12 16.3401 19.82 16.5501 20.92Z" fill="none" /><path fillRule="evenodd" clipRule="evenodd" d="M22.49 13.89C22.03 16.35 20.65 18.49 18.72 19.95C18.51 20.11 18.21 19.99 18.16 19.74C17.95 18.66 17.44 16.33 16.46 13.56C16.39 13.35 16.53 13.12 16.75 13.09C19.24 12.79 21.42 13.27 22.24 13.49C22.41 13.55 22.52 13.72 22.49 13.89Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} fillRule="evenodd" clipRule="evenodd" d="M22.2602 11.82C21.2402 11.64 18.6402 11.26 15.9802 11.55C15.8202 11.57 15.6802 11.48 15.6102 11.33C15.5702 11.24 15.5402 11.15 15.5002 11.06C15.3402 10.69 15.1702 10.31 15.0002 9.94002C14.9102 9.76002 15.0002 9.54002 15.1802 9.46002C17.9802 8.25002 19.5402 6.69002 20.1502 5.99002C20.3002 5.82002 20.5602 5.83002 20.7002 6.01002C21.8502 7.54002 22.5602 9.41002 22.6702 11.43C22.6802 11.68 22.4802 11.86 22.2602 11.82Z" fill="none" /><path fillRule="evenodd" clipRule="evenodd" d="M19.1101 4.79C18.5901 5.42 17.1301 6.92 14.3601 8.02C14.2001 8.09 14.0101 8.02 13.9201 7.86C12.6401 5.54 11.2801 3.59 10.6501 2.71C10.5001 2.49 10.6201 2.2 10.8801 2.15C11.4601 2.05 12.0601 2 12.6801 2C15.1001 2 17.3301 2.86 19.0601 4.3C19.2101 4.42 19.2301 4.64 19.1101 4.79Z" fill="none" /><path fillRule="evenodd" clipRule="evenodd" d="M11.6897 8.83998C7.89969 9.78998 4.54969 9.91998 3.32969 9.93998C3.09969 9.93998 2.92969 9.71998 2.98969 9.49998C3.70969 6.69998 5.62969 4.35998 8.15969 3.06998C8.30969 2.98998 8.49969 3.03998 8.59969 3.17998C9.11969 3.89998 10.5297 5.92998 11.9097 8.31998C12.0197 8.51998 11.9197 8.77998 11.6897 8.83998Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} fillRule="evenodd" clipRule="evenodd" d="M13.5899 11.6C13.6799 11.79 13.5699 12.02 13.3699 12.09C8.93992 13.52 6.28992 17.07 5.48992 18.29C5.35992 18.49 5.07992 18.5 4.92992 18.32C3.51992 16.6 2.66992 14.63 2.66992 12.23V12.05C2.66992 11.85 2.82992 11.69 3.02992 11.7C4.28992 11.75 8.39992 11.58 12.6699 10.35C12.8299 10.3 13.0099 10.38 13.0799 10.53C13.2599 10.89 13.4299 11.24 13.5899 11.6Z" fill="none" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16.5499 20.92C16.5799 21.08 16.4899 21.25 16.3399 21.31C15.2099 21.76 13.9699 22 12.6899 22C10.4799 22 8.43989 21.29 6.78989 20.07C6.64989 19.97 6.60992 19.77 6.69992 19.62C7.24992 18.64 9.39987 15.49 14.1499 13.73C14.3299 13.66 14.5299 13.75 14.5899 13.93C15.7799 17.12 16.3399 19.82 16.5499 20.92Z" fill="none" /><path fillRule="evenodd" clipRule="evenodd" d="M22.4901 13.89C22.0301 16.35 20.6501 18.49 18.7201 19.95C18.5101 20.11 18.2101 19.99 18.1601 19.74C17.9501 18.66 17.44 16.33 16.46 13.56C16.39 13.35 16.5301 13.12 16.7501 13.09C19.2401 12.79 21.4201 13.27 22.2401 13.49C22.4101 13.55 22.5201 13.72 22.4901 13.89Z" fill="none" /><path fillRule="evenodd" clipRule="evenodd" d="M22.2602 11.82C21.2402 11.64 18.6401 11.26 15.9801 11.55C15.8201 11.57 15.6801 11.48 15.6101 11.33C15.5701 11.24 15.5402 11.15 15.5002 11.06C15.3402 10.69 15.1702 10.31 15.0002 9.93999C14.9102 9.75999 15.0001 9.53998 15.1801 9.45998C17.9801 8.24998 19.5401 6.68998 20.1501 5.98998C20.3001 5.81998 20.5602 5.83 20.7002 6.01C21.8502 7.54 22.5601 9.40998 22.6701 11.43C22.6801 11.68 22.4802 11.86 22.2602 11.82Z" fill="none" /><path fillRule="evenodd" clipRule="evenodd" d="M19.1099 4.79001C18.5899 5.42001 17.1299 6.91999 14.3599 8.01999C14.1999 8.08999 14.0099 8.01999 13.9199 7.85999C12.6399 5.53999 11.2799 3.58999 10.6499 2.70999C10.4999 2.49999 10.6199 2.2 10.8699 2.16C11.4499 2.06 12.0599 2.01001 12.6799 2.01001C15.0999 2.01001 17.3299 2.87 19.0599 4.31C19.2099 4.42 19.2299 4.64001 19.1099 4.79001Z" fill="none" /><path fillRule="evenodd" clipRule="evenodd" d="M11.6897 8.84C7.8997 9.79 4.54965 9.92001 3.32965 9.94001C3.09965 9.94001 2.92969 9.72001 2.98969 9.50001C3.70969 6.70001 5.62967 4.36001 8.15967 3.07001C8.30967 2.99001 8.49967 3.04 8.59967 3.18C9.11967 3.9 10.5297 5.93001 11.9097 8.32001C12.0197 8.52001 11.9197 8.78 11.6897 8.84Z" fill="none" /><path fillRule="evenodd" clipRule="evenodd" d="M13.5897 11.6C13.6797 11.79 13.5697 12.02 13.3697 12.09C8.93969 13.52 6.28969 17.07 5.48969 18.29C5.35968 18.49 5.07969 18.5 4.92969 18.32C3.52969 16.6 2.67969 14.63 2.67969 12.24V12.06C2.67969 11.86 2.83967 11.7 3.03967 11.71C4.29967 11.76 8.40969 11.59 12.6797 10.36C12.8397 10.31 13.0197 10.39 13.0897 10.54C13.2597 10.89 13.4297 11.24 13.5897 11.6Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDribbble as IconComponentType).keywords = [
  "dribbble",
  "behance",
  "openweb",
  "sketchfab",
  "ning",
  "thingiverse",
  "facebook",
  "instagram",
  "fotki",
  "ryze"
];

export default IconDribbble as IconComponentType;