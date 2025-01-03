import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconElement3: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6699 8.52V3.98C22.6699 2.57 22.0299 2 20.4399 2H16.3999C14.8099 2 14.1699 2.57 14.1699 3.98V8.51C14.1699 9.93 14.8099 10.49 16.3999 10.49H20.4399C22.0299 10.5 22.6699 9.93 22.6699 8.52Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22.6699 19.77V15.73C22.6699 14.14 22.0299 13.5 20.4399 13.5H16.3999C14.8099 13.5 14.1699 14.14 14.1699 15.73V19.77C14.1699 21.36 14.8099 22 16.3999 22H20.4399C22.0299 22 22.6699 21.36 22.6699 19.77Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.1699 8.52V3.98C11.1699 2.57 10.5299 2 8.93992 2H4.89992C3.30992 2 2.66992 2.57 2.66992 3.98V8.51C2.66992 9.93 3.30992 10.49 4.89992 10.49H8.93992C10.5299 10.5 11.1699 9.93 11.1699 8.52Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M11.1699 19.77V15.73C11.1699 14.14 10.5299 13.5 8.93992 13.5H4.89992C3.30992 13.5 2.66992 14.14 2.66992 15.73V19.77C2.66992 21.36 3.30992 22 4.89992 22H8.93992C10.5299 22 11.1699 21.36 11.1699 19.77Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6699 8.52V3.98C22.6699 2.57 22.0299 2 20.4399 2H16.3999C14.8099 2 14.1699 2.57 14.1699 3.98V8.51C14.1699 9.93 14.8099 10.49 16.3999 10.49H20.4399C22.0299 10.5 22.6699 9.93 22.6699 8.52Z" fill="currentColor" /><path d="M22.6699 19.77V15.73C22.6699 14.14 22.0299 13.5 20.4399 13.5H16.3999C14.8099 13.5 14.1699 14.14 14.1699 15.73V19.77C14.1699 21.36 14.8099 22 16.3999 22H20.4399C22.0299 22 22.6699 21.36 22.6699 19.77Z" fill="currentColor" /><path d="M11.1699 8.52V3.98C11.1699 2.57 10.5299 2 8.93992 2H4.89992C3.30992 2 2.66992 2.57 2.66992 3.98V8.51C2.66992 9.93 3.30992 10.49 4.89992 10.49H8.93992C10.5299 10.5 11.1699 9.93 11.1699 8.52Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M11.1699 19.77V15.73C11.1699 14.14 10.5299 13.5 8.93992 13.5H4.89992C3.30992 13.5 2.66992 14.14 2.66992 15.73V19.77C2.66992 21.36 3.30992 22 4.89992 22H8.93992C10.5299 22 11.1699 21.36 11.1699 19.77Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6699 8.52V3.98C22.6699 2.57 22.0299 2 20.4399 2H16.3999C14.8099 2 14.1699 2.57 14.1699 3.98V8.51C14.1699 9.93 14.8099 10.49 16.3999 10.49H20.4399C22.0299 10.5 22.6699 9.93 22.6699 8.52Z" fill="currentColor" /><path d="M22.6699 19.77V15.73C22.6699 14.14 22.0299 13.5 20.4399 13.5H16.3999C14.8099 13.5 14.1699 14.14 14.1699 15.73V19.77C14.1699 21.36 14.8099 22 16.3999 22H20.4399C22.0299 22 22.6699 21.36 22.6699 19.77Z" fill="currentColor" /><path d="M11.1699 8.52V3.98C11.1699 2.57 10.5299 2 8.93992 2H4.89992C3.30992 2 2.66992 2.57 2.66992 3.98V8.51C2.66992 9.93 3.30992 10.49 4.89992 10.49H8.93992C10.5299 10.5 11.1699 9.93 11.1699 8.52Z" fill="currentColor" /><path d="M11.1699 19.77V15.73C11.1699 14.14 10.5299 13.5 8.93992 13.5H4.89992C3.30992 13.5 2.66992 14.14 2.66992 15.73V19.77C2.66992 21.36 3.30992 22 4.89992 22H8.93992C10.5299 22 11.1699 21.36 11.1699 19.77Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconElement3 as IconComponentType).keywords = [
  "element",
  "3",
  "chemical element",
  "ingredient",
  "component",
  "constituent",
  "factor",
  "elemental",
  "stone",
  "facet",
  "nutrient",
  "omega",
  "wash out",
  "cut up",
  "pull out",
  "pull up",
  "pull over",
  "pull in",
  "work out",
  "ride down"
];

export default IconElement3 as IconComponentType;