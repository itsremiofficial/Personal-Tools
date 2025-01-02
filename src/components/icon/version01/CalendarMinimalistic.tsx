import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCalendarMinimalistic: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12.0005C2 8.22925 2 6.34363 3.17157 5.17206C4.34315 4.00049 6.22876 4.00049 10 4.00049H14C17.7712 4.00049 19.6569 4.00049 20.8284 5.17206C22 6.34363 22 8.22925 22 12.0005V14.0005C22 17.7717 22 19.6573 20.8284 20.8289C19.6569 22.0005 17.7712 22.0005 14 22.0005H10C6.22876 22.0005 4.34315 22.0005 3.17157 20.8289C2 19.6573 2 17.7717 2 14.0005V12.0005Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M7 4.00049V2.50049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M17 4.00049V2.50049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M2 9.00049H22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.94028 2.00049C7.35614 2.00049 7.69326 2.3247 7.69326 2.72463V4.18536C8.36117 4.1729 9.10983 4.1729 9.95219 4.1729H13.9681C14.8104 4.1729 15.5591 4.1729 16.227 4.18536V2.72463C16.227 2.3247 16.5641 2.00049 16.98 2.00049C17.3958 2.00049 17.733 2.3247 17.733 2.72463V4.24943C19.178 4.36071 20.1267 4.63382 20.8236 5.30408C21.5206 5.97434 21.8046 6.88665 21.9203 8.27635L22 9.00049H2.92456H2V8.27635C2.11571 6.88665 2.3997 5.97434 3.09665 5.30408C3.79361 4.63382 4.74226 4.36071 6.1873 4.24943V2.72463C6.1873 2.3247 6.52442 2.00049 6.94028 2.00049Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M22 14.0006V12.0006C22 11.1615 21.9968 9.66575 21.9839 9.00049H2.00966C1.99675 9.66575 2.00001 11.1615 2.00001 12.0006V14.0006C2.00001 17.7718 2.00001 19.6574 3.17159 20.829C4.34316 22.0006 6.22878 22.0006 10 22.0006H14C17.7713 22.0006 19.6569 22.0006 20.8284 20.829C22 19.6574 22 17.7718 22 14.0006Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 14.0005V12.0005C22 11.1615 22 10.4158 21.9871 9.75049H2.0129C2 10.4158 2 11.1615 2 12.0005V14.0005C2 17.7717 2 19.6573 3.17157 20.8289C4.34315 22.0005 6.22876 22.0005 10 22.0005H14C17.7712 22.0005 19.6569 22.0005 20.8284 20.8289C22 19.6573 22 17.7717 22 14.0005Z" fill="currentColor" /><path d="M7.75 2.50049C7.75 2.08627 7.41421 1.75049 7 1.75049C6.58579 1.75049 6.25 2.08627 6.25 2.50049V4.07975C4.81067 4.195 3.86577 4.47786 3.17157 5.17206C2.47737 5.86626 2.19451 6.81116 2.07926 8.25049H21.9207C21.8055 6.81116 21.5226 5.86626 20.8284 5.17206C20.1342 4.47786 19.1893 4.195 17.75 4.07975V2.50049C17.75 2.08627 17.4142 1.75049 17 1.75049C16.5858 1.75049 16.25 2.08627 16.25 2.50049V4.01339C15.5847 4.00049 14.839 4.00049 14 4.00049H10C9.16097 4.00049 8.41527 4.00049 7.75 4.01339V2.50049Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCalendarMinimalistic as IconComponentType).keywords = [
  "calendar",
  "minimalistic",
  "timeline",
  "chronology",
  "rota",
  "scheduling",
  "timetable",
  "program",
  "time-scale",
  "timeframe",
  "timescale",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic"
];

export default IconCalendarMinimalistic as IconComponentType;