import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSliderHorizontal1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 16.5V7.5C5 6.88 5.02 6.33 5.09 5.84C5.38 3.21 6.62 2.5 10 2.5H14C17.38 2.5 18.62 3.21 18.91 5.84C18.98 6.33 19 6.88 19 7.5V16.5C19 17.12 18.98 17.67 18.91 18.16C18.62 20.79 17.38 21.5 14 21.5H10C6.62 21.5 5.38 20.79 5.09 18.16C5.02 17.67 5 17.12 5 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 19.5V4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 19V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M15 2H9C7.34 2 6 3.34 6 5V19C6 20.66 7.34 22 9 22H15C16.66 22 18 20.66 18 19V5C18 3.34 16.66 2 15 2Z" fill="currentColor" /><path d="M18.6705 5.33008H18.3305C18.2105 5.33008 18.1005 5.33008 17.9805 5.34008C17.9905 5.39008 18.0005 5.44008 18.0005 5.50008V7.00008V17.0001V18.5001C18.0005 18.5601 17.9905 18.6101 17.9805 18.6601C18.0905 18.6701 18.2005 18.6701 18.3305 18.6701H18.6705C21.3305 18.6701 22.0005 18.0001 22.0005 15.3301V8.67008C22.0005 6.00008 21.3305 5.33008 18.6705 5.33008Z" fill="currentColor" /><path d="M6 18.5001V17.0001V7.00008V5.50008C6 5.44008 6.01 5.39008 6.02 5.34008C5.9 5.33008 5.79 5.33008 5.67 5.33008H5.33C2.67 5.33008 2 6.00008 2 8.67008V15.3301C2 18.0001 2.67 18.6701 5.33 18.6701H5.67C5.79 18.6701 5.9 18.6701 6.02 18.6601C6.01 18.6101 6 18.5601 6 18.5001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSliderHorizontal1 as IconComponentType).keywords = [
  "slider",
  "horizontal",
  "1",
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
  "landscape",
  "wash out",
  "cut up",
  "pull out",
  "pull in",
  "pull up",
  "pull over",
  "work out",
  "ride down",
  "rush hour"
];

export default IconSliderHorizontal1 as IconComponentType;