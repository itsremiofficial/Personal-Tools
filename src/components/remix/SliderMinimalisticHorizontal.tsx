import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSliderMinimalisticHorizontal: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 18C5.17157 18 3.75736 18 2.87868 17.1213C2 16.2426 2 14.8284 2 12C2 9.17157 2 7.75736 2.87868 6.87868C3.75736 6 5.17157 6 8 6L16 6C18.8284 6 20.2426 6 21.1213 6.87868C22 7.75736 22 9.17157 22 12C22 14.8284 22 16.2426 21.1213 17.1213C20.2426 18 18.8284 18 16 18H8Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M4.5 3L19.5 3" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M4.5 21L19.5 21" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.5" : "1"}><path fillRule="evenodd" clipRule="evenodd" d="M20.25 2.76923C20.25 3.19407 19.9142 3.53846 19.5 3.53846L4.5 3.53846C4.08579 3.53846 3.75 3.19406 3.75 2.76923C3.75 2.3444 4.08579 2 4.5 2L19.5 2C19.9142 2 20.25 2.3444 20.25 2.76923ZM20.25 21.2308C20.25 21.6556 19.9142 22 19.5 22L4.5 22C4.08579 22 3.75 21.6556 3.75 21.2308C3.75 20.8059 4.08579 20.4615 4.5 20.4615L19.5 20.4615C19.9142 20.4615 20.25 20.8059 20.25 21.2308Z" fill="currentColor" /></g><path d="M16 5.84619C18.8284 5.84619 20.2426 5.84619 21.1213 6.7474C22 7.64861 22 9.09909 22 12C22 14.901 22 16.3515 21.1213 17.2527C20.2426 18.1539 18.8284 18.1539 16 18.1539L8 18.1539C5.17157 18.1539 3.75736 18.1539 2.87868 17.2527C2 16.3515 2 14.901 2 12C2 9.09909 2 7.64861 2.87868 6.7474C3.75736 5.84619 5.17157 5.84619 8 5.84619L16 5.84619Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 5.84615C18.8284 5.84615 20.2426 5.84615 21.1213 6.74736C22 7.64857 22 9.09905 22 12C22 14.901 22 16.3514 21.1213 17.2526C20.2426 18.1538 18.8284 18.1538 16 18.1538L8 18.1538C5.17157 18.1538 3.75736 18.1538 2.87868 17.2526C2 16.3514 2 14.901 2 12C2 9.09905 2 7.64857 2.87868 6.74736C3.75736 5.84615 5.17157 5.84615 8 5.84615L16 5.84615Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M20.25 2.76923C20.25 3.19407 19.9142 3.53846 19.5 3.53846L4.5 3.53846C4.08579 3.53846 3.75 3.19406 3.75 2.76923C3.75 2.3444 4.08579 2 4.5 2L19.5 2C19.9142 2 20.25 2.3444 20.25 2.76923ZM20.25 21.2308C20.25 21.6556 19.9142 22 19.5 22L4.5 22C4.08579 22 3.75 21.6556 3.75 21.2308C3.75 20.8059 4.08579 20.4615 4.5 20.4615L19.5 20.4615C19.9142 20.4615 20.25 20.8059 20.25 21.2308Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSliderMinimalisticHorizontal as IconComponentType).keywords = [
  "slider",
  "minimalistic",
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
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic",
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

export default IconSliderMinimalisticHorizontal as IconComponentType;