import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSize: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9707 12.25V16.75C16.9707 20.5 15.4707 22 11.7207 22H7.2207C3.4707 22 1.9707 20.5 1.9707 16.75V12.25C1.9707 8.5 3.4707 7 7.2207 7H11.7207C15.4707 7 16.9707 8.5 16.9707 12.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M21.9707 5.85V9.15C21.9707 11.9 20.8707 13 18.1207 13H16.9707V12.25C16.9707 8.5 15.4707 7 11.7207 7H10.9707V5.85C10.9707 3.1 12.0707 2 14.8207 2H18.1207C20.8707 2 21.9707 3.1 21.9707 5.85Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.9707 5.5V9.5C21.9707 11.43 20.4007 13 18.4707 13H16.9707V12.25C16.9707 9.35 14.6207 7 11.7207 7H10.9707V5.5C10.9707 3.57 12.5407 2 14.4707 2H18.4707C20.4107 2 21.9707 3.57 21.9707 5.5Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M11.7207 7H10.9707H6.9707C4.2107 7 1.9707 9.24 1.9707 12V17C1.9707 19.76 4.2107 22 6.9707 22H11.9707C14.7307 22 16.9707 19.76 16.9707 17V13V12.25C16.9707 9.35 14.6207 7 11.7207 7Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSize as IconComponentType).keywords = [
  "size",
  "size of it",
  "endowment",
  "staffing",
  "turnover",
  "membership",
  "headcount",
  "workforce",
  "manpower",
  "gage"
];

export default IconSize as IconComponentType;