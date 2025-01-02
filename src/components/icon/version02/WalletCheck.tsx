import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconWalletCheck: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66992 19C9.66992 19.75 9.45992 20.46 9.08992 21.06C8.39992 22.22 7.12992 23 5.66992 23C4.20992 23 2.93992 22.22 2.24992 21.06C1.87992 20.46 1.66992 19.75 1.66992 19C1.66992 16.79 3.45992 15 5.66992 15C7.87992 15 9.66992 16.79 9.66992 19Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M4.11035 19L5.10035 19.99L7.23035 18.02" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.4204 7.04997C18.1804 7.00997 17.9304 6.99998 17.6704 6.99998H7.67035C7.39035 6.99998 7.12035 7.01998 6.86035 7.05998C7.00035 6.77998 7.20035 6.52001 7.44035 6.28001L10.6904 3.02C12.0604 1.66 14.2804 1.66 15.6504 3.02L17.4004 4.78996C18.0404 5.41996 18.3804 6.21997 18.4204 7.04997Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6699 12V17C22.6699 20 20.6699 22 17.6699 22H8.29992C8.60992 21.74 8.87992 21.42 9.08992 21.06C9.45992 20.46 9.66992 19.75 9.66992 19C9.66992 16.79 7.87992 15 5.66992 15C4.46992 15 3.39992 15.53 2.66992 16.36V12C2.66992 9.28 4.30992 7.38 6.85992 7.06C7.11992 7.02 7.38992 7 7.66992 7H17.6699C17.9299 7 18.1799 7.00999 18.4199 7.04999C20.9999 7.34999 22.6699 9.26 22.6699 12Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22.6699 12.5H19.6699C18.5699 12.5 17.6699 13.4 17.6699 14.5C17.6699 15.6 18.5699 16.5 19.6699 16.5H22.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.66992 15C3.45992 15 1.66992 16.79 1.66992 19C1.66992 19.75 1.87992 20.46 2.24992 21.06C2.93992 22.22 4.20992 23 5.66992 23C7.12992 23 8.39992 22.22 9.08992 21.06C9.45992 20.46 9.66992 19.75 9.66992 19C9.66992 16.79 7.87992 15 5.66992 15ZM7.63992 18.67L5.50992 20.64C5.36992 20.77 5.17992 20.84 4.99992 20.84C4.80992 20.84 4.61992 20.77 4.46992 20.62L3.47992 19.63C3.18992 19.34 3.18992 18.86 3.47992 18.57C3.76992 18.28 4.24992 18.28 4.53992 18.57L5.01992 19.05L6.61992 17.57C6.91992 17.29 7.39992 17.31 7.67992 17.61C7.95992 17.91 7.93992 18.39 7.63992 18.67Z" fill="currentColor" /><path d="M18.4204 7.04997C18.1804 7.00997 17.9304 6.99998 17.6704 6.99998H7.67035C7.39035 6.99998 7.12035 7.01998 6.86035 7.05998C7.00035 6.77998 7.20035 6.52001 7.44035 6.28001L10.6904 3.02C12.0604 1.66 14.2804 1.66 15.6504 3.02L17.4004 4.78996C18.0404 5.41996 18.3804 6.21997 18.4204 7.04997Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22.6699 12V17C22.6699 20 20.6699 22 17.6699 22H8.29992C8.60992 21.74 8.87992 21.42 9.08992 21.06C9.45992 20.46 9.66992 19.75 9.66992 19C9.66992 16.79 7.87992 15 5.66992 15C4.46992 15 3.39992 15.53 2.66992 16.36V12C2.66992 9.28 4.30992 7.38 6.85992 7.06C7.11992 7.02 7.38992 7 7.66992 7H17.6699C17.9299 7 18.1799 7.00999 18.4199 7.04999C20.9999 7.34999 22.6699 9.26 22.6699 12Z" fill="currentColor" /><path d="M22.6699 12.5H19.6699C18.5699 12.5 17.6699 13.4 17.6699 14.5C17.6699 15.6 18.5699 16.5 19.6699 16.5H22.6699" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.66992 15C3.45992 15 1.66992 16.79 1.66992 19C1.66992 19.75 1.87992 20.46 2.24992 21.06C2.93992 22.22 4.20992 23 5.66992 23C7.12992 23 8.39992 22.22 9.08992 21.06C9.45992 20.46 9.66992 19.75 9.66992 19C9.66992 16.79 7.87992 15 5.66992 15ZM7.63992 18.67L5.50992 20.64C5.36992 20.77 5.17992 20.84 4.99992 20.84C4.80992 20.84 4.61992 20.77 4.46992 20.62L3.47992 19.63C3.18992 19.34 3.18992 18.86 3.47992 18.57C3.76992 18.28 4.24992 18.28 4.53992 18.57L5.01992 19.05L6.61992 17.57C6.91992 17.29 7.39992 17.31 7.67992 17.61C7.95992 17.91 7.93992 18.39 7.63992 18.67Z" fill="currentColor" /><path d="M22.1699 12.5H19.6699C18.5699 12.5 17.6699 13.4 17.6699 14.5C17.6699 15.6 18.5699 16.5 19.6699 16.5H22.1699C22.4499 16.5 22.6699 16.28 22.6699 16V13C22.6699 12.72 22.4499 12.5 22.1699 12.5Z" fill="currentColor" /><path d="M17.2001 5.40003C17.5001 5.69003 17.2501 6.14003 16.8301 6.14003L8.55013 6.13003C8.07013 6.13003 7.83013 5.55003 8.17013 5.21003L9.92013 3.45003C11.4001 1.98003 13.7901 1.98003 15.2701 3.45003L17.1601 5.36003C17.1701 5.37003 17.1901 5.39003 17.2001 5.40003Z" fill="currentColor" /><path d="M22.5403 18.66C21.9303 20.72 20.1703 22 17.7703 22H11.2703C10.8803 22 10.6303 21.57 10.7903 21.21C11.0903 20.51 11.2803 19.72 11.2803 19C11.2803 15.97 8.81027 13.5 5.78027 13.5C5.02027 13.5 4.28027 13.66 3.60027 13.96C3.23027 14.12 2.78027 13.87 2.78027 13.47V12C2.78027 9.28 4.42027 7.38 6.97027 7.06C7.22027 7.02 7.49027 7 7.77027 7H17.7703C18.0303 7 18.2803 7.01 18.5203 7.05C20.5403 7.28 22.0003 8.51 22.5403 10.34C22.6403 10.67 22.4003 11 22.0603 11H19.7703C17.6003 11 15.8803 12.98 16.3503 15.23C16.6803 16.87 18.2003 18 19.8703 18H22.0603C22.4103 18 22.6403 18.34 22.5403 18.66Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWalletCheck as IconComponentType).keywords = [
  "wallet",
  "check",
  "billfold",
  "notecase",
  "portfolio",
  "paper",
  "book",
  "paperwork",
  "briefcase",
  "suitcase",
  "cash",
  "match",
  "hitch",
  "check out",
  "curb",
  "check into",
  "checkout",
  "turn back",
  "arrest",
  "hold"
];

export default IconWalletCheck as IconComponentType;