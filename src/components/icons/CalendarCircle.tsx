import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCalendarCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M9.89062 5.83008V7.83008" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.1094 5.83008V7.83008" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.5293 10.1401H16.4693" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.5 17.6699H10.5C8 17.6699 6.5 15.8699 6.5 13.6699V10.6699C6.5 8.46992 8 6.66992 10.5 6.66992H13.5C16 6.66992 17.5 8.46992 17.5 10.6699V13.6699C17.5 15.8699 16 17.6699 13.5 17.6699Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M17.1493 9.44009C16.7293 8.47009 15.9393 7.7201 14.8493 7.3801V6.59009C14.8493 6.18009 14.5093 5.84009 14.0993 5.84009C13.6893 5.84009 13.3493 6.18009 13.3493 6.59009V7.18008H10.6393V6.59009C10.6393 6.18009 10.2993 5.84009 9.88933 5.84009C9.47933 5.84009 9.13933 6.18009 9.13933 6.59009V7.3801C8.04933 7.7201 7.25931 8.47009 6.83931 9.44009C6.69931 9.77009 6.93931 10.1501 7.29931 10.1501H16.6693C17.0493 10.1401 17.2893 9.77009 17.1493 9.44009Z" fill="currentColor" /><path d="M17 11.1401C17.28 11.1401 17.5 11.3601 17.5 11.6401V14.1701C17.5 16.3701 16 18.1701 13.5 18.1701H10.5C8 18.1701 6.5 16.3701 6.5 14.1701V11.6401C6.5 11.3601 6.72 11.1401 7 11.1401H17Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCalendarCircle as IconComponentType).keywords = [
  "calendar",
  "circle",
  "timeline",
  "chronology",
  "rota",
  "scheduling",
  "timetable",
  "program",
  "time-scale",
  "timeframe",
  "timescale",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle"
];

export default IconCalendarCircle as IconComponentType;