import { FC } from 'react';
import { IconProps } from "../../types";

const IconCoffee: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.79 10.4698V17.7898C17.79 20.1198 15.9 21.9998 13.58 21.9998H6.21C3.89 21.9998 2 20.1098 2 17.7898V10.4698C2 8.13977 3.89 6.25977 6.21 6.25977H13.58C15.9 6.25977 17.79 8.14977 17.79 10.4698Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M5.5 4V2.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M9.5 4V2.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M13.5 4V2.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.9991 13.1602C21.9991 15.4802 20.1091 17.3702 17.7891 17.3702V8.9502C20.1091 8.9502 21.9991 10.8302 21.9991 13.1602Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M2 12H17.51" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.6098 10.83C19.8398 9.90996 18.8498 9.30996 17.6998 9.04996C17.4398 7.88996 16.9898 6.88996 16.3298 6.05996C16.3098 6.02996 16.2898 5.99996 16.2698 5.97996C14.0698 3.31996 10.4698 3.32996 8.03977 4.70996C5.95977 5.89996 4.18977 8.40996 5.11977 11.99C2.98977 12.51 2.00977 14.37 2.00977 16.05C2.00977 17.93 3.23977 20.04 5.97977 20.24H16.3198C16.3298 20.24 16.3498 20.24 16.3598 20.24C17.7798 20.24 19.1398 19.71 20.1898 18.75C22.6998 16.53 22.3698 12.91 20.6098 10.83Z" fill="currentColor" /><path d="M21.7609 8.74001C21.7609 9.64001 21.4409 10.5 20.8609 11.16C20.7909 11.05 20.7009 10.94 20.6109 10.83C19.8509 9.92001 18.8509 9.30001 17.7009 9.05001C17.4509 7.89001 16.9909 6.90001 16.3309 6.07001C16.3209 6.04001 16.2909 6.01001 16.2709 5.99001C16.1709 5.87001 16.0609 5.76001 15.9609 5.65001C16.5709 5.23001 17.2709 5.01001 18.0309 5.01001C20.0909 5.01001 21.7609 6.68001 21.7609 8.74001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCoffee;