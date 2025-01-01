import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSlider: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 22H9C6.5 22 5 20.2 5 18V6C5 3.8 6.5 2 9 2H15C17.5 2 19 3.8 19 6V18C19 20.2 17.5 22 15 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5 16.0098H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19 16.01V18C19 20.2 17.5 22 15 22H9C6.5 22 5 20.2 5 18V16.01H19Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M19 6V16.01H5V6C5 3.8 6.5 2 9 2H15C17.5 2 19 3.8 19 6Z" fill="currentColor" /><path d="M3 20.75C2.59 20.75 2.25 20.41 2.25 20V4C2.25 3.59 2.59 3.25 3 3.25C3.41 3.25 3.75 3.59 3.75 4V20C3.75 20.41 3.41 20.75 3 20.75Z" fill="currentColor" /><path d="M21 20.75C20.59 20.75 20.25 20.41 20.25 20V4C20.25 3.59 20.59 3.25 21 3.25C21.41 3.25 21.75 3.59 21.75 4V20C21.75 20.41 21.41 20.75 21 20.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSlider as IconComponentType).keywords = [
  "slider",
  "luger",
  "pseudemys scripta",
  "yellow-bellied terrapin",
  "bushing",
  "skid",
  "glider",
  "scroll",
  "scrollbar",
  "track"
];

export default IconSlider as IconComponentType;