import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSliderHorizontal: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.66992 16.5V7.5C5.66992 6.88 5.68992 6.33 5.75992 5.84C6.04992 3.21 7.28992 2.5 10.6699 2.5H14.6699C18.0499 2.5 19.2899 3.21 19.5799 5.84C19.6499 6.33 19.6699 6.88 19.6699 7.5V16.5C19.6699 17.12 19.6499 17.67 19.5799 18.16C19.2899 20.79 18.0499 21.5 14.6699 21.5H10.6699C7.28992 21.5 6.04992 20.79 5.75992 18.16C5.68992 17.67 5.66992 17.12 5.66992 16.5Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2.66992 19.5V4.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22.6699 19V4" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16992 5.06006V18.9401C4.16992 19.3501 3.82992 19.6901 3.41992 19.6901C3.00992 19.6901 2.66992 19.3501 2.66992 18.9401V5.06006C2.66992 4.65006 3.00992 4.31006 3.41992 4.31006C3.82992 4.31006 4.16992 4.65006 4.16992 5.06006Z" fill="currentColor" /><path d="M22.6699 5.06006V18.9401C22.6699 19.3501 22.3299 19.6901 21.9199 19.6901C21.5099 19.6901 21.1699 19.3501 21.1699 18.9401V5.06006C21.1699 4.65006 21.5099 4.31006 21.9199 4.31006C22.3299 4.31006 22.6699 4.65006 22.6699 5.06006Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M8.27002 21.25H17.07C18.73 21.25 20.07 19.91 20.07 18.25V5.75C20.07 4.09 18.73 2.75 17.07 2.75H8.27002C6.61002 2.75 5.27002 4.09 5.27002 5.75V18.25C5.27002 19.91 6.61002 21.25 8.27002 21.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16992 5.06006V18.9401C4.16992 19.3501 3.82992 19.6901 3.41992 19.6901C3.00992 19.6901 2.66992 19.3501 2.66992 18.9401V5.06006C2.66992 4.65006 3.00992 4.31006 3.41992 4.31006C3.82992 4.31006 4.16992 4.65006 4.16992 5.06006Z" fill="currentColor" /><path d="M22.6699 5.06006V18.9401C22.6699 19.3501 22.3299 19.6901 21.9199 19.6901C21.5099 19.6901 21.1699 19.3501 21.1699 18.9401V5.06006C21.1699 4.65006 21.5099 4.31006 21.9199 4.31006C22.3299 4.31006 22.6699 4.65006 22.6699 5.06006Z" fill="currentColor" /><path d="M8.66992 21.25H16.6699C18.3299 21.25 19.6699 19.91 19.6699 18.25V5.75C19.6699 4.09 18.3299 2.75 16.6699 2.75H8.66992C7.00992 2.75 5.66992 4.09 5.66992 5.75V18.25C5.66992 19.91 7.00992 21.25 8.66992 21.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSliderHorizontal as IconComponentType).keywords = [
  "slider",
  "horizontal",
  "luger",
  "pseudemys scripta",
  "yellow-bellied terrapin",
  "bushing",
  "skid",
  "glider",
  "scroll",
  "scrollbar",
  "track",
  "level",
  "flat",
  "crosswise",
  "swimming",
  "naiant",
  "cross-sectional",
  "transverse",
  "transversal",
  "landscape"
];

export default IconSliderHorizontal as IconComponentType;