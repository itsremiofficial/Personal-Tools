import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHealth: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.63965 22H15.6396C20.6396 22 22.6396 20 22.6396 15V9C22.6396 4 20.6396 2 15.6396 2H9.63965C4.63965 2 2.63965 4 2.63965 9V15C2.63965 20 4.63965 22 9.63965 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2.63965 12.7001L8.63965 12.6801C9.38965 12.6801 10.2296 13.2501 10.5096 13.9501L11.6496 16.8301C11.9096 17.4801 12.3196 17.4801 12.5796 16.8301L14.8696 11.0201C15.0896 10.4601 15.4996 10.4401 15.7796 10.9701L16.8196 12.9401C17.1296 13.5301 17.9296 14.0101 18.5896 14.0101H22.6496" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6699 7.81V14H18.5899C17.9199 14 17.1299 13.52 16.8199 12.93L15.7799 10.96C15.4999 10.43 15.0999 10.46 14.8799 11.01L12.5799 16.82C12.3299 17.47 11.9099 17.47 11.6499 16.82L10.5099 13.94C10.2399 13.24 9.39992 12.67 8.64992 12.67L2.66992 12.7V7.81C2.66992 4.17 4.83992 2 8.47992 2H16.8599C20.4999 2 22.6699 4.17 22.6699 7.81Z" fill="currentColor" /><path d="M22.6699 16.1901V14.0001H18.5899C17.9199 14.0001 17.1299 13.5201 16.8199 12.9301L15.7799 10.9601C15.4999 10.4301 15.0999 10.4601 14.8799 11.0101L12.5799 16.8201C12.3299 17.4701 11.9099 17.4701 11.6499 16.8201L10.5099 13.9401C10.2399 13.2401 9.39992 12.6701 8.64992 12.6701L2.66992 12.7001V16.1901C2.66992 19.7701 4.76992 21.9301 8.29992 21.9901C8.40992 22.0001 8.52992 22.0001 8.63992 22.0001H16.6399C16.7899 22.0001 16.9399 22.0001 17.0799 21.9901C20.5899 21.9101 22.6699 19.7601 22.6699 16.1901Z" fill="currentColor" /><path d="M2.66965 12.7002V16.0102C2.64965 15.6902 2.63965 15.3502 2.63965 15.0002V12.7002H2.66965Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6699 7.81V12.5H18.5899C18.4699 12.49 18.2099 12.34 18.1499 12.23L17.1099 10.26C16.6999 9.48 15.9899 9.04 15.2299 9.08C14.4699 9.12 13.8199 9.63 13.4899 10.46L12.1099 13.92L11.9099 13.4C11.4199 12.13 10.0199 11.17 8.63992 11.17L2.66992 11.2V7.81C2.66992 4.17 4.83992 2 8.47992 2H16.8599C20.4999 2 22.6699 4.17 22.6699 7.81Z" fill="currentColor" /><path d="M22.6699 16.1901V14.0001H18.5899C17.9199 14.0001 17.1299 13.5201 16.8199 12.9301L15.7799 10.9601C15.4999 10.4301 15.0999 10.4601 14.8799 11.0101L12.5799 16.8201C12.3299 17.4701 11.9099 17.4701 11.6499 16.8201L10.5099 13.9401C10.2399 13.2401 9.39992 12.6701 8.64992 12.6701L2.66992 12.7001V16.1901C2.66992 19.7701 4.76992 21.9301 8.29992 21.9901C8.40992 22.0001 8.52992 22.0001 8.63992 22.0001H16.6399C16.7899 22.0001 16.9399 22.0001 17.0799 21.9901C20.5899 21.9101 22.6699 19.7601 22.6699 16.1901Z" fill="currentColor" /><path d="M2.66965 12.7002V16.0102C2.64965 15.6902 2.63965 15.3502 2.63965 15.0002V12.7002H2.66965Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHealth as IconComponentType).keywords = [
  "health",
  "wellness",
  "sound",
  "healthy",
  "healthful",
  "wholesome",
  "well-being",
  "wholesomeness",
  "welfare",
  "fitness"
];

export default IconHealth as IconComponentType;