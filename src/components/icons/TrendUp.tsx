import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconTrendUp: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M16.5 9.5L12.3 13.7L10.7 11.3L7.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5 9.5H16.5V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M16.8295 9.40998C16.7595 9.23998 16.6195 9.09998 16.4495 9.02998C16.3695 8.99998 16.2795 8.97998 16.1895 8.97998H14.3295C13.9395 8.97998 13.6295 9.28998 13.6295 9.67998C13.6295 10.07 13.9395 10.38 14.3295 10.38H14.5095L12.3995 12.49L11.3795 10.97C11.2595 10.8 11.0795 10.68 10.8695 10.66C10.6495 10.64 10.4595 10.71 10.3095 10.86L7.32945 13.84C7.05945 14.11 7.05945 14.55 7.32945 14.83C7.46945 14.97 7.63945 15.03 7.81945 15.03C7.99945 15.03 8.17945 14.96 8.30945 14.83L10.6895 12.45L11.7095 13.97C11.8295 14.14 12.0095 14.26 12.2195 14.28C12.4395 14.3 12.6295 14.23 12.7795 14.08L15.4995 11.36V11.54C15.4995 11.93 15.8095 12.24 16.1995 12.24C16.5895 12.24 16.8995 11.93 16.8995 11.54V9.66998C16.8795 9.57998 16.8695 9.48998 16.8295 9.40998Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTrendUp as IconComponentType).keywords = [
  "trend",
  "up",
  "tendency",
  "vogue",
  "course",
  "curve",
  "slue",
  "swerve",
  "slew",
  "style",
  "cut",
  "upbound",
  "upwardly",
  "ascending",
  "upward",
  "upwards",
  "rising",
  "astir",
  "ahead",
  "awake"
];

export default IconTrendUp as IconComponentType;