import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconWallet: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12V17C22 20 20 22 17 22H7C4 22 2 20 2 17V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.7495 7.05C17.5095 7.01 17.2595 7.00001 16.9995 7.00001H6.99945C6.71945 7.00001 6.44945 7.02001 6.18945 7.06001C6.32945 6.78001 6.52945 6.52001 6.76945 6.28001L10.0195 3.02C11.3895 1.66 13.6095 1.66 14.9795 3.02L16.7295 4.79002C17.3695 5.42002 17.7095 6.22 17.7495 7.05Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 12V17C22 20 20 22 17 22H7C4 22 2 20 2 17V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z" fill="currentColor" /><path d="M17.7495 7.05C17.5095 7.01 17.2595 7.00001 16.9995 7.00001H6.99945C6.71945 7.00001 6.44945 7.02001 6.18945 7.06001C6.32945 6.78001 6.52945 6.52001 6.76945 6.28001L10.0195 3.02C11.3895 1.66 13.6095 1.66 14.9795 3.02L16.7295 4.79002C17.3695 5.42002 17.7095 6.22 17.7495 7.05Z" fill="currentColor" /><path d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWallet as IconComponentType).keywords = [
  "wallet",
  "billfold",
  "notecase",
  "portfolio",
  "paper",
  "book",
  "paperwork",
  "briefcase",
  "suitcase",
  "cash"
];

export default IconWallet as IconComponentType;