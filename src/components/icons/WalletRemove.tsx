import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconWalletRemove: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12V17C22 20 20 22 17 22H7.63C7.94 21.74 8.20998 21.42 8.41998 21.06C8.78998 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C3.8 15 2.73 15.53 2 16.36V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.7495 7.04997C17.5095 7.00997 17.2595 6.99998 16.9995 6.99998H6.99945C6.71945 6.99998 6.44945 7.01998 6.18945 7.05998C6.32945 6.77998 6.52947 6.52001 6.76947 6.28001L10.0195 3.02C11.3895 1.66 13.6094 1.66 14.9794 3.02L16.7294 4.78996C17.3694 5.41996 17.7095 6.21997 17.7495 7.04997Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 19C9 19.75 8.78998 20.46 8.41998 21.06C8.20998 21.42 7.94 21.74 7.63 22C6.93 22.63 6.01 23 5 23C3.54 23 2.27002 22.22 1.58002 21.06C1.21002 20.46 1 19.75 1 19C1 17.99 1.38 17.07 2 16.36C2.73 15.53 3.8 15 5 15C7.21 15 9 16.79 9 19Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.06897 20.0402L3.95898 17.9302" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.03967 17.96L3.92969 20.0699" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 12V17C22 20 20 22 17 22H7.63C7.94 21.74 8.20998 21.42 8.41998 21.06C8.78998 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C3.8 15 2.73 15.53 2 16.36V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z" fill="currentColor" /><path d="M17.7495 7.04997C17.5095 7.00997 17.2595 6.99998 16.9995 6.99998H6.99945C6.71945 6.99998 6.44945 7.01998 6.18945 7.05998C6.32945 6.77998 6.52947 6.52001 6.76947 6.28001L10.0195 3.02C11.3895 1.66 13.6094 1.66 14.9794 3.02L16.7294 4.78996C17.3694 5.41996 17.7095 6.21997 17.7495 7.04997Z" fill="currentColor" /><path d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22" fill="currentColor" /><path d="M5 15C3.8 15 2.73 15.53 2 16.36C1.38 17.07 1 17.99 1 19C1 19.75 1.21002 20.46 1.58002 21.06C2.27002 22.22 3.54 23 5 23C6.01 23 6.93001 22.63 7.63 22C7.94 21.74 8.20998 21.42 8.41998 21.06C8.78998 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15ZM6.59998 20.58C6.44998 20.73 6.26001 20.8 6.07001 20.8C5.88001 20.8 5.68998 20.73 5.53998 20.58L5.01001 20.05L4.46002 20.6C4.31002 20.75 4.11999 20.82 3.92999 20.82C3.73999 20.82 3.55002 20.75 3.40002 20.6C3.11002 20.31 3.11002 19.83 3.40002 19.54L3.95001 18.99L3.41998 18.46C3.12998 18.17 3.12998 17.69 3.41998 17.4C3.70998 17.11 4.18998 17.11 4.47998 17.4L5.01001 17.93L5.51001 17.43C5.80001 17.14 6.28001 17.14 6.57001 17.43C6.86001 17.72 6.86001 18.2 6.57001 18.49L6.07001 18.99L6.59998 19.52C6.88998 19.81 6.88998 20.28 6.59998 20.58Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWalletRemove as IconComponentType).keywords = [
  "wallet",
  "remove",
  "billfold",
  "notecase",
  "portfolio",
  "paper",
  "book",
  "paperwork",
  "briefcase",
  "suitcase",
  "cash",
  "take out",
  "get rid of",
  "take away",
  "move out",
  "bump off",
  "slay",
  "murder",
  "take",
  "transfer"
];

export default IconWalletRemove as IconComponentType;