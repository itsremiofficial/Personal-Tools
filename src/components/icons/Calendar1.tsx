import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCalendar1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 3.5C19.33 3.68 21 4.95 21 9.65V15.83C21 19.95 20 22.01 15 22.01H9C4 22.01 3 19.95 3 15.83V9.65C3 4.95 4.67 3.69 8 3.5H16Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.75 17.6001H3.25" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 8.25C10.77 8.25 9.73 8.92 9.73 10.22C9.73 10.84 10.02 11.31 10.46 11.61C9.85 11.97 9.5 12.55 9.5 13.23C9.5 14.47 10.45 15.24 12 15.24C13.54 15.24 14.5 14.47 14.5 13.23C14.5 12.55 14.15 11.96 13.53 11.61C13.98 11.3 14.26 10.84 14.26 10.22C14.26 8.92 13.23 8.25 12 8.25ZM12 11.09C11.48 11.09 11.1 10.78 11.1 10.29C11.1 9.79 11.48 9.5 12 9.5C12.52 9.5 12.9 9.79 12.9 10.29C12.9 10.78 12.52 11.09 12 11.09ZM12 14C11.34 14 10.86 13.67 10.86 13.07C10.86 12.47 11.34 12.15 12 12.15C12.66 12.15 13.14 12.48 13.14 13.07C13.14 13.67 12.66 14 12 14Z" fill="none" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8 1.25C8.41421 1.25 8.75 1.58579 8.75 2V5C8.75 5.41421 8.41421 5.75 8 5.75C7.58579 5.75 7.25 5.41421 7.25 5V2C7.25 1.58579 7.58579 1.25 8 1.25Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16 1.25C16.4142 1.25 16.75 1.58579 16.75 2V5C16.75 5.41421 16.4142 5.75 16 5.75C15.5858 5.75 15.25 5.41421 15.25 5V2C15.25 1.58579 15.5858 1.25 16 1.25Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.5 8.37V17.13C21.5 17.29 21.49 17.45 21.48 17.6H2.52C2.51 17.45 2.5 17.29 2.5 17.13V8.37C2.5 5.68 4.68 3.5 7.37 3.5H16.63C19.32 3.5 21.5 5.68 21.5 8.37Z" fill="currentColor" /><path d="M21.4795 17.6001C21.2395 20.0701 19.1595 22.0001 16.6295 22.0001H7.36953C4.83953 22.0001 2.75953 20.0701 2.51953 17.6001H21.4795Z" fill="currentColor" /><path d="M13.53 11.62C13.98 11.31 14.26 10.85 14.26 10.23C14.26 8.93001 13.22 8.26001 12 8.26001C10.78 8.26001 9.73 8.93001 9.73 10.23C9.73 10.85 10.02 11.32 10.46 11.62C9.85 11.98 9.5 12.56 9.5 13.24C9.5 14.48 10.45 15.25 12 15.25C13.54 15.25 14.5 14.48 14.5 13.24C14.5 12.56 14.15 11.97 13.53 11.62ZM12 9.50001C12.52 9.50001 12.9 9.79001 12.9 10.29C12.9 10.78 12.52 11.09 12 11.09C11.48 11.09 11.1 10.78 11.1 10.29C11.1 9.79001 11.48 9.50001 12 9.50001ZM12 14C11.34 14 10.86 13.67 10.86 13.07C10.86 12.47 11.34 12.15 12 12.15C12.66 12.15 13.14 12.48 13.14 13.07C13.14 13.67 12.66 14 12 14Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCalendar1 as IconComponentType).keywords = [
  "calendar",
  "1",
  "timeline",
  "chronology",
  "rota",
  "scheduling",
  "timetable",
  "program",
  "time-scale",
  "timeframe",
  "timescale",
  "wash out",
  "cut up",
  "pull out",
  "pull in",
  "pull up",
  "pull over",
  "work out",
  "ride down",
  "rush hour"
];

export default IconCalendar1 as IconComponentType;