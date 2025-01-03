import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCalendarEdit: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.66992 2V5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.6699 2V5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.16992 9.09009H21.1699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.88 15.77L16.34 19.31C16.2 19.45 16.07 19.71 16.04 19.9L15.85 21.25C15.78 21.74 16.12 22.0801 16.61 22.0101L17.96 21.82C18.15 21.79 18.42 21.66 18.55 21.52L22.09 17.9801C22.7 17.3701 22.99 16.6601 22.09 15.7601C21.2 14.8701 20.49 15.16 19.88 15.77Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.3701 16.28C19.6701 17.36 20.5101 18.2 21.5901 18.5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 22H8.66992C5.16992 22 3.66992 20 3.66992 17V8.5C3.66992 5.5 5.16992 3.5 8.66992 3.5H16.6699C20.1699 3.5 21.6699 5.5 21.6699 8.5V12" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6654 13.7H12.6744" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.96423 13.7H8.97322" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.96436 16.7H8.97334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.4201 3.56V2C17.4201 1.59 17.0801 1.25 16.6701 1.25C16.2601 1.25 15.9201 1.59 15.9201 2V3.5H9.42014V2C9.42014 1.59 9.08014 1.25 8.67014 1.25C8.26014 1.25 7.92014 1.59 7.92014 2V3.56C5.22014 3.81 3.91015 5.42 3.71015 7.81C3.69015 8.1 3.93015 8.34 4.21015 8.34H21.1301C21.4201 8.34 21.6601 8.09 21.6301 7.81C21.4301 5.42 20.1201 3.81 17.4201 3.56Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.6699 9.84009C21.2199 9.84009 21.6699 10.2901 21.6699 10.8401V17.0001C21.6699 20.0001 20.1699 22.0001 16.6699 22.0001H8.66992C5.16992 22.0001 3.66992 20.0001 3.66992 17.0001V10.8401C3.66992 10.2901 4.11992 9.84009 4.66992 9.84009H20.6699Z" fill="currentColor" /><path d="M15.5099 14.9899L15.0099 15.4999H14.9999L11.9699 18.5299C11.8399 18.6599 11.5699 18.7999 11.3799 18.8199L10.0299 19.0199C9.53985 19.0899 9.19987 18.7399 9.26987 18.2599L9.45988 16.8999C9.48988 16.7099 9.61986 16.4499 9.74986 16.3099L12.7899 13.2799L13.2899 12.7699C13.6199 12.4399 13.9899 12.2 14.3899 12.2C14.7299 12.2 15.0999 12.3599 15.5099 12.7699C16.4099 13.6699 16.1199 14.3799 15.5099 14.9899Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.4202 3.56V2C17.4202 1.59 17.0802 1.25 16.6702 1.25C16.2602 1.25 15.9202 1.59 15.9202 2V3.5H9.42015V2C9.42015 1.59 9.08015 1.25 8.67015 1.25C8.26015 1.25 7.92015 1.59 7.92015 2V3.56C5.22015 3.81 3.91015 5.42 3.71015 7.81C3.69015 8.1 3.93015 8.34 4.21015 8.34H21.1301C21.4202 8.34 21.6602 8.09 21.6301 7.81C21.4301 5.42 20.1202 3.81 17.4202 3.56Z" fill="currentColor" /><path d="M20.6699 9.84009H4.66992C4.11992 9.84009 3.66992 10.2901 3.66992 10.8401V17.0001C3.66992 20.0001 5.16992 22.0001 8.66992 22.0001H16.6699C20.1699 22.0001 21.6699 20.0001 21.6699 17.0001V10.8401C21.6699 10.2901 21.2199 9.84009 20.6699 9.84009ZM15.5099 14.9901L15.0099 15.5001H14.9999L11.9699 18.5301C11.8399 18.6601 11.5699 18.8001 11.3799 18.8201L10.0299 19.0201C9.53992 19.0901 9.19992 18.7401 9.26992 18.2601L9.45992 16.9001C9.48992 16.7101 9.61992 16.4501 9.74992 16.3101L12.7899 13.2801L13.2899 12.7701C13.6199 12.4401 13.9899 12.2001 14.3899 12.2001C14.7299 12.2001 15.0999 12.3601 15.5099 12.7701C16.4099 13.6701 16.1199 14.3801 15.5099 14.9901Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCalendarEdit as IconComponentType).keywords = [
  "calendar",
  "edit",
  "timeline",
  "chronology",
  "rota",
  "scheduling",
  "timetable",
  "program",
  "time-scale",
  "timeframe",
  "timescale",
  "redact",
  "edit out",
  "cut",
  "editor",
  "edition",
  "publication",
  "publish",
  "publishing",
  "authoring"
];

export default IconCalendarEdit as IconComponentType;