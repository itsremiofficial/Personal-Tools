import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCalendarTick: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3.5 9.08984H20.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 19C22 19.75 21.79 20.46 21.42 21.06C20.73 22.22 19.46 23 18 23C16.99 23 16.07 22.63 15.37 22C15.06 21.74 14.79 21.42 14.58 21.06C14.21 20.46 14 19.75 14 19C14 16.79 15.79 15 18 15C19.2 15 20.27 15.53 21 16.36C21.62 17.07 22 17.99 22 19Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.4404 19L17.4304 19.99L19.5604 18.02" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21 8.5V16.36C20.27 15.53 19.2 15 18 15C15.79 15 14 16.79 14 19C14 19.75 14.21 20.46 14.58 21.06C14.79 21.42 15.06 21.74 15.37 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.9955 13.7002H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.29431 13.7002H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.29492 16.7002H8.3039" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16.7502 3.56V2C16.7502 1.59 16.4102 1.25 16.0002 1.25C15.5902 1.25 15.2502 1.59 15.2502 2V3.5H8.75023V2C8.75023 1.59 8.41023 1.25 8.00023 1.25C7.59023 1.25 7.25023 1.59 7.25023 2V3.56C4.55023 3.81 3.24023 5.42 3.04023 7.81C3.02023 8.1 3.26023 8.34 3.54023 8.34H20.4602C20.7502 8.34 20.9902 8.09 20.9602 7.81C20.7602 5.42 19.4502 3.81 16.7502 3.56Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21 10.8401V12.5801C21 13.1901 20.46 13.6601 19.86 13.5601C19.58 13.5201 19.29 13.4901 19 13.4901C15.97 13.4901 13.5 15.9601 13.5 18.9901C13.5 19.4501 13.68 20.0901 13.87 20.6701C14.09 21.3201 13.61 21.9901 12.92 21.9901H8C4.5 21.9901 3 19.9901 3 16.9901V10.8301C3 10.2801 3.45 9.83008 4 9.83008H20C20.55 9.84008 21 10.2901 21 10.8401Z" fill="currentColor" /><path d="M19 15C16.79 15 15 16.79 15 19C15 19.75 15.21 20.46 15.58 21.06C16.27 22.22 17.54 23 19 23C20.46 23 21.73 22.22 22.42 21.06C22.79 20.46 23 19.75 23 19C23 16.79 21.21 15 19 15ZM21.07 18.57L18.94 20.54C18.8 20.67 18.61 20.74 18.43 20.74C18.24 20.74 18.05 20.67 17.9 20.52L16.91 19.53C16.62 19.24 16.62 18.76 16.91 18.47C17.2 18.18 17.68 18.18 17.97 18.47L18.45 18.95L20.05 17.47C20.35 17.19 20.83 17.21 21.11 17.51C21.39 17.81 21.37 18.28 21.07 18.57Z" fill="currentColor" /><path d="M8.5 14.9999C8.24 14.9999 7.98 14.8899 7.79 14.7099C7.61 14.5199 7.5 14.2599 7.5 13.9999C7.5 13.7399 7.61 13.4799 7.79 13.2899C8.02 13.0599 8.37 12.9499 8.7 13.0199C8.76 13.0299 8.82 13.0499 8.88 13.0799C8.94 13.0999 9 13.1299 9.06 13.1699C9.11 13.2099 9.16 13.2499 9.21 13.2899C9.39 13.4799 9.5 13.7399 9.5 13.9999C9.5 14.2599 9.39 14.5199 9.21 14.7099C9.16 14.7499 9.11 14.7899 9.06 14.8299C9 14.8699 8.94 14.8999 8.88 14.9199C8.82 14.9499 8.76 14.9699 8.7 14.9799C8.63 14.9899 8.56 14.9999 8.5 14.9999Z" fill="currentColor" /><path d="M12 14.9999C11.74 14.9999 11.48 14.8899 11.29 14.7099C11.11 14.5199 11 14.2599 11 13.9999C11 13.7399 11.11 13.48 11.29 13.29C11.67 12.92 12.34 12.92 12.71 13.29C12.89 13.48 13 13.7399 13 13.9999C13 14.2599 12.89 14.5199 12.71 14.7099C12.52 14.8899 12.26 14.9999 12 14.9999Z" fill="currentColor" /><path d="M8.5 18.4999C8.24 18.4999 7.98 18.3899 7.79 18.2099C7.61 18.0199 7.5 17.7599 7.5 17.4999C7.5 17.2399 7.61 16.9799 7.79 16.7899C7.89 16.6999 7.99 16.6299 8.12 16.5799C8.49 16.4199 8.93 16.5099 9.21 16.7899C9.39 16.9799 9.5 17.2399 9.5 17.4999C9.5 17.7599 9.39 18.0199 9.21 18.2099C9.02 18.3899 8.76 18.4999 8.5 18.4999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCalendarTick as IconComponentType).keywords = [
  "calendar",
  "tick",
  "timeline",
  "chronology",
  "rota",
  "scheduling",
  "timetable",
  "program",
  "time-scale",
  "timeframe",
  "timescale",
  "click",
  "ticktock",
  "beat",
  "ticktack",
  "retick",
  "ixodid",
  "acarid",
  "spinose",
  "gene"
];

export default IconCalendarTick as IconComponentType;