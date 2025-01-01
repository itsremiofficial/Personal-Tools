import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHierarchySquare2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M7.80078 10.2002V14.4002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.95001 9.89999C9.02697 9.89999 9.90002 9.02697 9.90002 7.95001C9.90002 6.87306 9.02697 6 7.95001 6C6.87306 6 6 6.87306 6 7.95001C6 9.02697 6.87306 9.89999 7.95001 9.89999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.79999 17.9999C8.7941 17.9999 9.59998 17.194 9.59998 16.1999C9.59998 15.2058 8.7941 14.3999 7.79999 14.3999C6.80588 14.3999 6 15.2058 6 16.1999C6 17.194 6.80588 17.9999 7.79999 17.9999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.2004 17.9999C17.1945 17.9999 18.0004 17.194 18.0004 16.1999C18.0004 15.2058 17.1945 14.3999 16.2004 14.3999C15.2063 14.3999 14.4004 15.2058 14.4004 16.1999C14.4004 17.194 15.2063 17.9999 16.2004 17.9999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.87891 10.2002C8.14891 11.2502 9.10889 12.0302 10.2389 12.0202L12.2989 12.0102C13.8689 12.0002 15.2089 13.0102 15.6989 14.4202" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M16.41 14.1703C15.8 12.4303 14.16 11.2603 12.32 11.2603C12.31 11.2603 12.31 11.2603 12.3 11.2603L10.24 11.2702C10.24 11.2702 10.24 11.2702 10.23 11.2702C9.46998 11.2702 8.80999 10.7602 8.60999 10.0302C9.49999 9.75024 10.15 8.92025 10.15 7.94025C10.15 6.73025 9.16001 5.74023 7.95001 5.74023C6.74001 5.74023 5.75 6.73025 5.75 7.94025C5.75 8.83025 6.28999 9.60025 7.04999 9.94025V14.2802C6.28999 14.5802 5.75 15.3202 5.75 16.1802C5.75 17.3102 6.66999 18.2303 7.79999 18.2303C8.92999 18.2303 9.84998 17.3102 9.84998 16.1802C9.84998 15.3102 9.30999 14.5802 8.54999 14.2802V12.2603C9.03999 12.5703 9.61998 12.7502 10.23 12.7502H10.24L12.3 12.7402C13.48 12.7002 14.53 13.4602 14.95 14.5602C14.46 14.9402 14.14 15.5202 14.14 16.1802C14.14 17.3102 15.06 18.2303 16.19 18.2303C17.32 18.2303 18.24 17.3102 18.24 16.1802C18.25 15.1402 17.44 14.2803 16.41 14.1703Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHierarchySquare2 as IconComponentType).keywords = [
  "hierarchy",
  "square",
  "2",
  "power structure",
  "pecking order",
  "hierarchical",
  "seniority",
  "class",
  "leadership",
  "high-ranking",
  "affiliated",
  "authority",
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

export default IconHierarchySquare2 as IconComponentType;