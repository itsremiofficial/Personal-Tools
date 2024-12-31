import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconTrendDown: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M16.5 14.5L12.3 10.3L10.7 12.7L7.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5 14.5H16.5V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M16.8797 12.47C16.8797 12.08 16.5697 11.77 16.1797 11.77C15.7897 11.77 15.4797 12.08 15.4797 12.47V12.65L12.7597 9.93004C12.6097 9.78004 12.4097 9.71004 12.1997 9.73004C11.9897 9.75004 11.7997 9.86004 11.6897 10.04L10.6697 11.56L8.30969 9.18004C8.03969 8.91004 7.59969 8.91004 7.31969 9.18004C7.04969 9.45004 7.04969 9.89004 7.31969 10.17L10.2997 13.15C10.4497 13.3 10.6497 13.37 10.8597 13.35C11.0697 13.33 11.2597 13.22 11.3697 13.04L12.3897 11.52L14.4997 13.63H14.3197C13.9297 13.63 13.6197 13.94 13.6197 14.33C13.6197 14.72 13.9297 15.03 14.3197 15.03H16.1797C16.2697 15.03 16.3597 15.01 16.4497 14.98C16.6197 14.91 16.7597 14.77 16.8297 14.6C16.8697 14.51 16.8797 14.42 16.8797 14.33V12.47Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTrendDown as IconComponentType).keywords = [
  "trend",
  "down",
  "tendency",
  "vogue",
  "course",
  "curve",
  "slue",
  "swerve",
  "slew",
  "style",
  "cut",
  "downwards",
  "downward",
  "downbound",
  "falling",
  "fallen",
  "pull down",
  "downwardly",
  "declining",
  "descending"
];

export default IconTrendDown as IconComponentType;