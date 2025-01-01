import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRefreshSquare2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.5 12C17.5 15.04 15.04 17.5 12 17.5C8.96 17.5 7.10999 14.44 7.10999 14.44M7.10999 14.44H9.59M7.10999 14.44V17.19M6.5 12C6.5 8.96 8.94 6.5 12 6.5C15.67 6.5 17.5 9.56 17.5 9.56M17.5 9.56V6.81M17.5 9.56H15.06" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.82001C4.17001 2 2 4.17 2 7.81V16.18C2 19.82 4.17 21.99 7.81 21.99H16.18C19.82 21.99 21.99 19.82 21.99 16.18V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M18.0004 11.27C17.5804 11.27 17.2504 11.6 17.2504 12.02C17.2404 13.42 16.7004 14.73 15.7204 15.71C14.7304 16.7 13.4104 17.25 12.0104 17.25C10.6104 17.25 9.29038 16.7 8.30038 15.71C8.27038 15.68 8.2504 15.65 8.2204 15.62H9.05038C9.46038 15.62 9.80038 15.28 9.80038 14.87C9.80038 14.46 9.46038 14.12 9.05038 14.12H6.40039C5.99039 14.12 5.65039 14.46 5.65039 14.87V17.52C5.65039 17.93 5.99039 18.27 6.40039 18.27C6.81039 18.27 7.15039 17.93 7.15039 17.52V16.67C7.18039 16.7 7.21039 16.74 7.24039 16.78C8.51039 18.05 10.2104 18.76 12.0104 18.76C13.8104 18.76 15.5104 18.06 16.7804 16.78C18.0404 15.52 18.7404 13.83 18.7504 12.03C18.7504 11.61 18.4104 11.28 18.0004 11.27Z" fill="currentColor" /><path d="M6.00022 12.65C6.41022 12.65 6.74022 12.32 6.75022 11.91C6.77022 10.54 7.32022 9.25 8.28022 8.28C9.27022 7.29 10.5902 6.74 11.9902 6.74C13.3902 6.74 14.7102 7.29 15.7002 8.28C15.7302 8.31 15.7502 8.34 15.7802 8.37H14.9502C14.5402 8.37 14.2002 8.71 14.2002 9.12C14.2002 9.53 14.5402 9.87 14.9502 9.87H17.6002C18.0102 9.87 18.3502 9.53 18.3502 9.12V6.48C18.3502 6.07 18.0102 5.73 17.6002 5.73C17.1902 5.73 16.8502 6.07 16.8502 6.48V7.34C16.8202 7.31 16.7902 7.27 16.7602 7.23C15.4902 5.96 13.7902 5.25 11.9902 5.25C10.1902 5.25 8.49022 5.95 7.22022 7.23C5.97022 8.47 5.27022 10.13 5.25022 11.89C5.24022 12.3 5.57021 12.64 5.99021 12.65C6.00021 12.65 6.00022 12.65 6.00022 12.65Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRefreshSquare2 as IconComponentType).keywords = [
  "refresh",
  "square",
  "2",
  "refreshen",
  "freshen",
  "review",
  "freshen up",
  "brush up",
  "refresher",
  "refreshment",
  "rejuvenate",
  "revive",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
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

export default IconRefreshSquare2 as IconComponentType;