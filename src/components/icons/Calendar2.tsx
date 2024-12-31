import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCalendar2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3.5 9.08984H20.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.9955 13.7002H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.29431 13.7002H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.29492 16.7002H8.3039" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16.7502 3.56V2C16.7502 1.59 16.4102 1.25 16.0002 1.25C15.5902 1.25 15.2502 1.59 15.2502 2V3.5H8.75022V2C8.75022 1.59 8.41022 1.25 8.00022 1.25C7.59022 1.25 7.25022 1.59 7.25022 2V3.56C4.55022 3.81 3.24023 5.42 3.04023 7.81C3.02023 8.1 3.26023 8.34 3.54023 8.34H20.4602C20.7502 8.34 20.9902 8.09 20.9602 7.81C20.7602 5.42 19.4502 3.81 16.7502 3.56Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20 9.84009C20.55 9.84009 21 10.2901 21 10.8401V17.0001C21 20.0001 19.5 22.0001 16 22.0001H8C4.5 22.0001 3 20.0001 3 17.0001V10.8401C3 10.2901 3.45 9.84009 4 9.84009H20Z" fill="currentColor" /><path d="M8.5 14.9999C8.37 14.9999 8.24 14.9699 8.12 14.9199C8 14.8699 7.89001 14.7999 7.79001 14.7099C7.70001 14.6099 7.62999 14.4999 7.57999 14.3799C7.52999 14.2599 7.5 14.1299 7.5 13.9999C7.5 13.8699 7.52999 13.7399 7.57999 13.6199C7.62999 13.4999 7.70001 13.3899 7.79001 13.2899C7.89001 13.1999 8 13.1299 8.12 13.0799C8.36 12.9799 8.64 12.9799 8.88 13.0799C9 13.1299 9.10999 13.1999 9.20999 13.2899C9.29999 13.3899 9.37001 13.4999 9.42001 13.6199C9.47001 13.7399 9.5 13.8699 9.5 13.9999C9.5 14.1299 9.47001 14.2599 9.42001 14.3799C9.37001 14.4999 9.29999 14.6099 9.20999 14.7099C9.10999 14.7999 9 14.8699 8.88 14.9199C8.76 14.9699 8.63 14.9999 8.5 14.9999Z" fill="currentColor" /><path d="M12 15.0001C11.87 15.0001 11.74 14.9701 11.62 14.9201C11.5 14.8701 11.39 14.8001 11.29 14.7101C11.11 14.5201 11 14.2601 11 14.0001C11 13.7401 11.11 13.4801 11.29 13.2901C11.39 13.2001 11.5 13.1301 11.62 13.0801C11.86 12.9701 12.14 12.9701 12.38 13.0801C12.5 13.1301 12.61 13.2001 12.71 13.2901C12.89 13.4801 13 13.7401 13 14.0001C13 14.2601 12.89 14.5201 12.71 14.7101C12.61 14.8001 12.5 14.8701 12.38 14.9201C12.26 14.9701 12.13 15.0001 12 15.0001Z" fill="currentColor" /><path d="M8.5 18.4999C8.37 18.4999 8.24 18.4699 8.12 18.4199C8 18.3699 7.89001 18.2999 7.79001 18.2099C7.61001 18.0199 7.5 17.7599 7.5 17.4999C7.5 17.2399 7.61001 16.9799 7.79001 16.7899C7.89001 16.6999 8 16.6299 8.12 16.5799C8.36 16.4799 8.64 16.4799 8.88 16.5799C9 16.6299 9.10999 16.6999 9.20999 16.7899C9.38999 16.9799 9.5 17.2399 9.5 17.4999C9.5 17.7599 9.38999 18.0199 9.20999 18.2099C9.10999 18.2999 9 18.3699 8.88 18.4199C8.76 18.4699 8.63 18.4999 8.5 18.4999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCalendar2 as IconComponentType).keywords = [
  "calendar",
  "2",
  "timeline",
  "chronology",
  "rota",
  "scheduling",
  "timetable",
  "program",
  "time-scale",
  "timeframe",
  "timescale",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconCalendar2 as IconComponentType;