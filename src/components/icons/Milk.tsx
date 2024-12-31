import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMilk: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 15V19C18 20.65 16.65 22 15 22H9C7.35 22 6 20.65 6 19V13.98L9.89001 14C10.62 14 11.34 14.17 12 14.5C12.66 14.83 13.38 15 14.12 15H18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18 10.83V15H14.12C13.38 15 12.66 14.83 12 14.5C11.34 14.17 10.62 14 9.89001 14L6 13.98V10.83C6 10.37 6.26003 9.74 6.59003 9.41L8.71002 7.28999C8.89002 7.10999 9 6.85 9 6.59V5H15V6.59C15 6.85 15.11 7.10999 15.29 7.28999L17.41 9.41C17.74 9.74 18 10.37 18 10.83Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 16V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 14.98V13.98" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5 5H9.5C8.67 5 8 4.32 8 3.5C8 2.68 8.67 2 9.5 2H14.5C15.33 2 16 2.68 16 3.5C16 4.32 15.33 5 14.5 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 15V19C18 20.65 16.65 22 15 22H9C7.35 22 6 20.65 6 19V13.98L9.89001 14C10.62 14 11.34 14.17 12 14.5C12.66 14.83 13.38 15 14.12 15H18Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18 10.8299V14.9999H14.12C13.38 14.9999 12.66 14.8299 12 14.4999C11.34 14.1699 10.62 13.9999 9.89001 13.9999L6 13.9799V10.8299C6 10.3699 6.26003 9.73991 6.59003 9.40991L8.71002 7.28991C8.89002 7.10991 9 6.8499 9 6.5899V4.90991C9.16 4.96991 9.32 4.99991 9.5 4.99991H14.5C14.68 4.99991 14.84 4.96991 15 4.90991V6.5899C15 6.8499 15.11 7.10991 15.29 7.28991L17.41 9.40991C17.74 9.73991 18 10.3699 18 10.8299Z" fill="currentColor" /><path d="M14.5 2H9.5C8.67 2 8 2.67 8 3.5C8 4.15 8.42 4.71 9 4.91C9.16 4.97 9.32 5 9.5 5H14.5C14.68 5 14.84 4.97 15 4.91C15.58 4.71 16 4.15 16 3.5C16 2.67 15.33 2 14.5 2Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMilk as IconComponentType).keywords = [
  "milk",
  "milky",
  "milklike",
  "whitish",
  "opaque",
  "milk river",
  "lactate",
  "cream",
  "soup",
  "breastmilk"
];

export default IconMilk as IconComponentType;