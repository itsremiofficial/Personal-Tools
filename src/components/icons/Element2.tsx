import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconElement2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11 19.9V4.1C11 2.6 10.36 2 8.77 2H4.73C3.14 2 2.5 2.6 2.5 4.1V19.9C2.5 21.4 3.14 22 4.73 22H8.77C10.36 22 11 21.4 11 19.9Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.5 19.64V15.36C21.5 14.06 20.5 13 19.27 13H15.23C14 13 13 14.06 13 15.36V19.64C13 20.94 14 22 15.23 22H19.27C20.5 22 21.5 20.94 21.5 19.64Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.5 8.64V4.36C21.5 3.06 20.5 2 19.27 2H15.23C14 2 13 3.06 13 4.36V8.64C13 9.94 14 11 15.23 11H19.27C20.5 11 21.5 9.94 21.5 8.64Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconElement2 as IconComponentType).keywords = [
  "element",
  "2",
  "chemical element",
  "ingredient",
  "component",
  "constituent",
  "factor",
  "elemental",
  "stone",
  "facet",
  "nutrient",
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

export default IconElement2 as IconComponentType;