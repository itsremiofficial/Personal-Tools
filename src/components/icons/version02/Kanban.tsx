import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconKanban: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1699 19.9V4.1C11.1699 2.6 10.5299 2 8.93992 2H4.89992C3.30992 2 2.66992 2.6 2.66992 4.1V19.9C2.66992 21.4 3.30992 22 4.89992 22H8.93992C10.5299 22 11.1699 21.4 11.1699 19.9Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22.6699 12.9V4.1C22.6699 2.6 22.0299 2 20.4399 2H16.3999C14.8099 2 14.1699 2.6 14.1699 4.1V12.9C14.1699 14.4 14.8099 15 16.3999 15H20.4399C22.0299 15 22.6699 14.4 22.6699 12.9Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1699 19.9V4.1C11.1699 2.6 10.5299 2 8.93992 2H4.89992C3.30992 2 2.66992 2.6 2.66992 4.1V19.9C2.66992 21.4 3.30992 22 4.89992 22H8.93992C10.5299 22 11.1699 21.4 11.1699 19.9Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22.6699 12.9V4.1C22.6699 2.6 22.0299 2 20.4399 2H16.3999C14.8099 2 14.1699 2.6 14.1699 4.1V12.9C14.1699 14.4 14.8099 15 16.3999 15H20.4399C22.0299 15 22.6699 14.4 22.6699 12.9Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1699 19.9V4.1C11.1699 2.6 10.5299 2 8.93992 2H4.89992C3.30992 2 2.66992 2.6 2.66992 4.1V19.9C2.66992 21.4 3.30992 22 4.89992 22H8.93992C10.5299 22 11.1699 21.4 11.1699 19.9Z" fill="currentColor" /><path d="M22.6699 12.9V4.1C22.6699 2.6 22.0299 2 20.4399 2H16.3999C14.8099 2 14.1699 2.6 14.1699 4.1V12.9C14.1699 14.4 14.8099 15 16.3999 15H20.4399C22.0299 15 22.6699 14.4 22.6699 12.9Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconKanban as IconComponentType).keywords = [
  "kanban",
  "kanbans",
  "kaizen",
  "swimlanes",
  "gantt",
  "scrum",
  "timebox",
  "flowcharting",
  "cmmi",
  "sdlc"
];

export default IconKanban as IconComponentType;