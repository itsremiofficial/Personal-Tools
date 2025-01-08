import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconTimerPause: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 22C7.83992 22 3.91992 18.08 3.91992 13.25C3.91992 8.42 7.83992 4.5 12.6699 4.5C17.4999 4.5 21.4199 8.42 21.4199 13.25" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 8V13" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.66992 2H15.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19.6699 17V21" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.6699 17V21" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 13.75C12.2599 13.75 11.9199 13.41 11.9199 13V8C11.9199 7.59 12.2599 7.25 12.6699 7.25C13.0799 7.25 13.4199 7.59 13.4199 8V13C13.4199 13.41 13.0799 13.75 12.6699 13.75Z" fill="currentColor" /><path d="M15.5596 3.45H9.77957C9.37957 3.45 9.05957 3.13 9.05957 2.73C9.05957 2.33 9.37957 2 9.77957 2H15.5596C15.9596 2 16.2796 2.32 16.2796 2.72C16.2796 3.12 15.9596 3.45 15.5596 3.45Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.67 19.9699V17.0299C15.67 15.7599 16.43 14.9999 17.7 14.9999H20.64C20.83 14.9999 21 15.0199 21.17 15.0599C21.28 14.4999 21.34 13.9199 21.34 13.3299C21.34 8.54991 17.45 4.65991 12.67 4.65991C7.89 4.65991 4 8.54991 4 13.3299C4 18.1099 7.89 21.9999 12.67 21.9999C13.88 21.9999 15.03 21.7499 16.08 21.2999C15.82 20.9599 15.67 20.5199 15.67 19.9699Z" fill="currentColor" /><path d="M20.6399 15H17.7099C16.4299 15 15.6699 15.76 15.6699 17.03V19.96C15.6699 21.23 16.4299 21.99 17.6999 21.99H20.6299C21.8999 21.99 22.6599 21.23 22.6599 19.96V17.03C22.6699 15.76 21.9099 15 20.6399 15ZM18.5899 20.06C18.5899 20.38 18.3299 20.64 18.0099 20.64C17.6899 20.64 17.4299 20.38 17.4299 20.06V16.95C17.4299 16.63 17.6899 16.37 18.0099 16.37C18.3299 16.37 18.5899 16.63 18.5899 16.95V20.06ZM20.9199 20.06C20.9199 20.38 20.6599 20.64 20.3399 20.64C20.0199 20.64 19.7599 20.38 19.7599 20.06V16.95C19.7599 16.63 20.0199 16.37 20.3399 16.37C20.6599 16.37 20.9199 16.63 20.9199 16.95V20.06Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5596 3.45H9.77957C9.37957 3.45 9.05957 3.13 9.05957 2.73C9.05957 2.33 9.37957 2 9.77957 2H15.5596C15.9596 2 16.2796 2.32 16.2796 2.72C16.2796 3.12 15.9596 3.45 15.5596 3.45Z" fill="currentColor" /><path d="M14.67 19.9699V17.0299C14.67 15.2199 15.89 13.9999 17.7 13.9999H20.64C20.87 13.9999 21.09 14.0199 21.3 14.0599C21.32 13.8199 21.34 13.5799 21.34 13.3299C21.34 8.5399 17.45 4.6499 12.67 4.6499C7.89 4.6499 4 8.5399 4 13.3299C4 18.1099 7.89 21.9999 12.67 21.9999C13.52 21.9999 14.33 21.8599 15.11 21.6399C14.83 21.1699 14.67 20.6099 14.67 19.9699ZM13.42 12.9999C13.42 13.4099 13.08 13.7499 12.67 13.7499C12.26 13.7499 11.92 13.4099 11.92 12.9999V7.9999C11.92 7.5899 12.26 7.2499 12.67 7.2499C13.08 7.2499 13.42 7.5899 13.42 7.9999V12.9999Z" fill="currentColor" /><path d="M20.6399 15H17.7099C16.4299 15 15.6699 15.76 15.6699 17.03V19.97C15.6699 21.24 16.4299 22 17.7099 22H20.6399C21.9099 22 22.6699 21.24 22.6699 19.97V17.03C22.6699 15.76 21.9099 15 20.6399 15ZM18.5899 20.06C18.5899 20.38 18.3299 20.64 17.9999 20.64C17.6799 20.64 17.4199 20.38 17.4199 20.06V16.94C17.4199 16.62 17.6799 16.36 17.9999 16.36C18.3299 16.36 18.5899 16.62 18.5899 16.94V20.06ZM20.9199 20.06C20.9199 20.38 20.6599 20.64 20.3399 20.64C20.0199 20.64 19.7499 20.38 19.7499 20.06V16.94C19.7499 16.62 20.0199 16.36 20.3399 16.36C20.6599 16.36 20.9199 16.62 20.9199 16.94V20.06Z" fill="currentColor" /></svg> 
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