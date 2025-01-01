import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconTimerPause: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C7.17 22 3.25 18.08 3.25 13.25C3.25 8.42 7.17 4.5 12 4.5C16.83 4.5 20.75 8.42 20.75 13.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9 2H15" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19 17V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16 17V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z" fill="currentColor" /><path d="M14.8906 3.45H9.11062C8.71062 3.45 8.39062 3.13 8.39062 2.73C8.39062 2.33 8.71062 2 9.11062 2H14.8906C15.2906 2 15.6106 2.32 15.6106 2.72C15.6106 3.12 15.2906 3.45 14.8906 3.45Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.0001 19.9699V17.0299C15.0001 15.7599 15.7601 14.9999 17.0301 14.9999H19.9701C20.1601 14.9999 20.3301 15.0199 20.5001 15.0599C20.6101 14.4999 20.6701 13.9199 20.6701 13.3299C20.6701 8.54991 16.7801 4.65991 12.0001 4.65991C7.22008 4.65991 3.33008 8.54991 3.33008 13.3299C3.33008 18.1099 7.22008 21.9999 12.0001 21.9999C13.2101 21.9999 14.3601 21.7499 15.4101 21.2999C15.1501 20.9599 15.0001 20.5199 15.0001 19.9699Z" fill="currentColor" /><path d="M19.97 15H17.04C15.76 15 15 15.76 15 17.03V19.96C15 21.23 15.76 21.99 17.03 21.99H19.96C21.23 21.99 21.99 21.23 21.99 19.96V17.03C22 15.76 21.24 15 19.97 15ZM17.92 20.06C17.92 20.38 17.66 20.64 17.34 20.64C17.02 20.64 16.76 20.38 16.76 20.06V16.95C16.76 16.63 17.02 16.37 17.34 16.37C17.66 16.37 17.92 16.63 17.92 16.95V20.06ZM20.25 20.06C20.25 20.38 19.99 20.64 19.67 20.64C19.35 20.64 19.09 20.38 19.09 20.06V16.95C19.09 16.63 19.35 16.37 19.67 16.37C19.99 16.37 20.25 16.63 20.25 16.95V20.06Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTimerPause as IconComponentType).keywords = [
  "timer",
  "pause",
  "clocking",
  "timekeeping",
  "timekeeper",
  "clock",
  "stopwatch",
  "scheduler",
  "timing",
  "developer",
  "bomb",
  "suspension",
  "intermit",
  "interruption",
  "hesitate",
  "break",
  "intermission",
  "respite",
  "hiatus",
  "stoppage"
];

export default IconTimerPause as IconComponentType;