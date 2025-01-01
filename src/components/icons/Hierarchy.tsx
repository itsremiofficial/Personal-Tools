import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHierarchy: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.25 8.5C7.04493 8.5 8.5 7.04493 8.5 5.25C8.5 3.45507 7.04493 2 5.25 2C3.45507 2 2 3.45507 2 5.25C2 7.04493 3.45507 8.5 5.25 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 22C6.65685 22 8 20.6569 8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M5 9V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.12891 9C5.57891 10.75 7.17891 12.05 9.06891 12.04L12.4989 12.03C15.1189 12.02 17.3489 13.7 18.1689 16.04" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.25 8.5C7.04493 8.5 8.5 7.04493 8.5 5.25C8.5 3.45507 7.04493 2 5.25 2C3.45507 2 2 3.45507 2 5.25C2 7.04493 3.45507 8.5 5.25 8.5Z" fill="currentColor" /><path d="M5 22C6.65685 22 8 20.6569 8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22Z" fill="currentColor" /><path d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M19.17 15.9802C18.2 13.2002 15.58 11.3302 12.63 11.3302C12.62 11.3302 12.61 11.3302 12.6 11.3302L9.07 11.3402C7.55 11.3602 6.19 10.3302 5.78 8.85023V7.00023C5.78 6.58023 5.44 6.24023 5.01 6.24023C4.58 6.24023 4.25 6.58023 4.25 7.00023V18.2202C4.25 18.6402 4.59 18.9802 5.01 18.9802C5.43 18.9802 5.78 18.6402 5.78 18.2202V11.6002C6.66 12.3802 7.81 12.8602 9.06 12.8602C9.07 12.8602 9.07 12.8602 9.08 12.8602L12.61 12.8502C12.62 12.8502 12.62 12.8502 12.63 12.8502C14.92 12.8502 16.97 14.3002 17.72 16.4702C17.83 16.7902 18.13 16.9802 18.44 16.9802C18.52 16.9802 18.61 16.9702 18.69 16.9402C19.1 16.8202 19.31 16.3802 19.17 15.9802Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHierarchy as IconComponentType).keywords = [
  "hierarchy",
  "power structure",
  "pecking order",
  "hierarchical",
  "seniority",
  "class",
  "leadership",
  "high-ranking",
  "affiliated",
  "authority"
];

export default IconHierarchy as IconComponentType;