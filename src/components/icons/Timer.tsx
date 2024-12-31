import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconTimer: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.24 2H8.76004C5.00004 2 4.71004 5.38 6.74004 7.22L17.26 16.78C19.29 18.62 19 22 15.24 22H8.76004C5.00004 22 4.71004 18.62 6.74004 16.78L17.26 7.22C19.29 5.38 19 2 15.24 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.3495 19.68C17.7995 21.09 16.4595 22 14.9495 22H9.04949C7.52949 22 6.19949 21.09 5.64949 19.68C5.09949 18.26 5.47949 16.69 6.59949 15.67L10.6495 12H13.3595L17.3995 15.67C18.5195 16.69 18.8895 18.26 18.3495 19.68Z" fill="currentColor" /><path d="M13.82 18.14H10.18C9.8 18.14 9.5 17.83 9.5 17.46C9.5 17.08 9.81 16.78 10.18 16.78H13.82C14.2 16.78 14.5 17.09 14.5 17.46C14.5 17.83 14.19 18.14 13.82 18.14Z" fill="currentColor" /><path d="M18.3506 4.32C17.8006 2.91 16.4606 2 14.9506 2H9.05065C7.54065 2 6.20065 2.91 5.65065 4.32C5.11065 5.74 5.48065 7.31 6.61065 8.33L10.6506 12H13.3606L17.4006 8.33C18.5206 7.31 18.8906 5.74 18.3506 4.32ZM13.8206 7.23H10.1806C9.80065 7.23 9.50065 6.92 9.50065 6.55C9.50065 6.18 9.81065 5.87 10.1806 5.87H13.8206C14.2006 5.87 14.5006 6.18 14.5006 6.55C14.5006 6.92 14.1906 7.23 13.8206 7.23Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTimer as IconComponentType).keywords = [
  "timer",
  "clocking",
  "timekeeping",
  "timekeeper",
  "clock",
  "stopwatch",
  "scheduler",
  "timing",
  "developer",
  "bomb"
];

export default IconTimer as IconComponentType;