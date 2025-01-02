import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconTimer: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.4199 13.25C21.4199 18.08 17.4999 22 12.6699 22C7.83992 22 3.91992 18.08 3.91992 13.25C3.91992 8.42 7.83992 4.5 12.6699 4.5C17.4999 4.5 21.4199 8.42 21.4199 13.25Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 8V13" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.66992 2H15.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.67 21.9999C17.4583 21.9999 21.34 18.1182 21.34 13.3299C21.34 8.5416 17.4583 4.65991 12.67 4.65991C7.88169 4.65991 4 8.5416 4 13.3299C4 18.1182 7.88169 21.9999 12.67 21.9999Z" fill="currentColor" /><path d="M12.6699 13.75C12.2599 13.75 11.9199 13.41 11.9199 13V8C11.9199 7.59 12.2599 7.25 12.6699 7.25C13.0799 7.25 13.4199 7.59 13.4199 8V13C13.4199 13.41 13.0799 13.75 12.6699 13.75Z" fill="currentColor" /><path d="M15.5596 3.45H9.77957C9.37957 3.45 9.05957 3.13 9.05957 2.73C9.05957 2.33 9.37957 2 9.77957 2H15.5596C15.9596 2 16.2796 2.32 16.2796 2.72C16.2796 3.12 15.9596 3.45 15.5596 3.45Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 4.6499C7.89 4.6499 4 8.5399 4 13.3199C4 18.0999 7.89 21.9999 12.67 21.9999C17.45 21.9999 21.34 18.1099 21.34 13.3299C21.34 8.5499 17.45 4.6499 12.67 4.6499ZM13.42 12.9999C13.42 13.4099 13.08 13.7499 12.67 13.7499C12.26 13.7499 11.92 13.4099 11.92 12.9999V7.9999C11.92 7.5899 12.26 7.2499 12.67 7.2499C13.08 7.2499 13.42 7.5899 13.42 7.9999V12.9999Z" fill="currentColor" /><path d="M15.5596 3.45H9.77957C9.37957 3.45 9.05957 3.13 9.05957 2.73C9.05957 2.33 9.37957 2 9.77957 2H15.5596C15.9596 2 16.2796 2.32 16.2796 2.72C16.2796 3.12 15.9596 3.45 15.5596 3.45Z" fill="currentColor" /></svg> 
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