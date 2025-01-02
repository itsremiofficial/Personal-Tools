import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconElementEqual: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6699 8.27V4.23C22.6699 2.64 22.0299 2 20.4399 2H16.3999C14.8099 2 14.1699 2.64 14.1699 4.23V8.27C14.1699 9.86 14.8099 10.5 16.3999 10.5H20.4399C22.0299 10.5 22.6699 9.86 22.6699 8.27Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M11.1699 8.52V3.98C11.1699 2.57 10.5299 2 8.93992 2H4.89992C3.30992 2 2.66992 2.57 2.66992 3.98V8.51C2.66992 9.93 3.30992 10.49 4.89992 10.49H8.93992C10.5299 10.5 11.1699 9.93 11.1699 8.52Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M11.1699 19.77V15.73C11.1699 14.14 10.5299 13.5 8.93992 13.5H4.89992C3.30992 13.5 2.66992 14.14 2.66992 15.73V19.77C2.66992 21.36 3.30992 22 4.89992 22H8.93992C10.5299 22 11.1699 21.36 11.1699 19.77Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.6699 15.5H21.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.6699 19.5H21.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6699 16.25H15.6699C15.2599 16.25 14.9199 15.91 14.9199 15.5C14.9199 15.09 15.2599 14.75 15.6699 14.75H21.6699C22.0799 14.75 22.4199 15.09 22.4199 15.5C22.4199 15.91 22.0799 16.25 21.6699 16.25Z" fill="currentColor" /><path d="M21.6699 20.25H15.6699C15.2599 20.25 14.9199 19.91 14.9199 19.5C14.9199 19.09 15.2599 18.75 15.6699 18.75H21.6699C22.0799 18.75 22.4199 19.09 22.4199 19.5C22.4199 19.91 22.0799 20.25 21.6699 20.25Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22.6699 8.52V3.98C22.6699 2.57 22.0299 2 20.4399 2H16.3999C14.8099 2 14.1699 2.57 14.1699 3.98V8.51C14.1699 9.93 14.8099 10.49 16.3999 10.49H20.4399C22.0299 10.5 22.6699 9.93 22.6699 8.52Z" fill="currentColor" /><path d="M11.1699 8.52V3.98C11.1699 2.57 10.5299 2 8.93992 2H4.89992C3.30992 2 2.66992 2.57 2.66992 3.98V8.51C2.66992 9.93 3.30992 10.49 4.89992 10.49H8.93992C10.5299 10.5 11.1699 9.93 11.1699 8.52Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M11.1699 19.77V15.73C11.1699 14.14 10.5299 13.5 8.93992 13.5H4.89992C3.30992 13.5 2.66992 14.14 2.66992 15.73V19.77C2.66992 21.36 3.30992 22 4.89992 22H8.93992C10.5299 22 11.1699 21.36 11.1699 19.77Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6699 16.25H15.6699C15.2599 16.25 14.9199 15.91 14.9199 15.5C14.9199 15.09 15.2599 14.75 15.6699 14.75H21.6699C22.0799 14.75 22.4199 15.09 22.4199 15.5C22.4199 15.91 22.0799 16.25 21.6699 16.25Z" fill="currentColor" /><path d="M21.6699 20.25H15.6699C15.2599 20.25 14.9199 19.91 14.9199 19.5C14.9199 19.09 15.2599 18.75 15.6699 18.75H21.6699C22.0799 18.75 22.4199 19.09 22.4199 19.5C22.4199 19.91 22.0799 20.25 21.6699 20.25Z" fill="currentColor" /><path d="M22.6699 8.52V3.98C22.6699 2.57 22.0299 2 20.4399 2H16.3999C14.8099 2 14.1699 2.57 14.1699 3.98V8.51C14.1699 9.93 14.8099 10.49 16.3999 10.49H20.4399C22.0299 10.5 22.6699 9.93 22.6699 8.52Z" fill="currentColor" /><path d="M11.1699 8.52V3.98C11.1699 2.57 10.5299 2 8.93992 2H4.89992C3.30992 2 2.66992 2.57 2.66992 3.98V8.51C2.66992 9.93 3.30992 10.49 4.89992 10.49H8.93992C10.5299 10.5 11.1699 9.93 11.1699 8.52Z" fill="currentColor" /><path d="M11.1699 19.77V15.73C11.1699 14.14 10.5299 13.5 8.93992 13.5H4.89992C3.30992 13.5 2.66992 14.14 2.66992 15.73V19.77C2.66992 21.36 3.30992 22 4.89992 22H8.93992C10.5299 22 11.1699 21.36 11.1699 19.77Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconElementEqual as IconComponentType).keywords = [
  "element",
  "equal",
  "chemical element",
  "ingredient",
  "component",
  "constituent",
  "factor",
  "elemental",
  "stone",
  "facet",
  "nutrient",
  "equivalent",
  "same",
  "coequal",
  "compeer",
  "coordinate",
  "equalize",
  "even",
  "be",
  "tied"
];

export default IconElementEqual as IconComponentType;