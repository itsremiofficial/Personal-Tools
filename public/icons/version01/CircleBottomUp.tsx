import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCircleBottomUp: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 21L11 13M11 13H5M11 13V19" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.5" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M4.25 13C4.25 12.5858 4.58579 12.25 5 12.25H11C11.4142 12.25 11.75 12.5858 11.75 13V19C11.75 19.4142 11.4142 19.75 11 19.75C10.5858 19.75 10.25 19.4142 10.25 19V14.8107L3.53033 21.5303C3.23744 21.8232 2.76256 21.8232 2.46967 21.5303C2.17678 21.2374 2.17678 20.7626 2.46967 20.4697L9.18934 13.75H5C4.58579 13.75 4.25 13.4142 4.25 13Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.46967 21.5303C2.17678 21.2374 2.17678 20.7626 2.46967 20.4697L10.1893 12.75H6.65625C6.24204 12.75 5.90625 12.4142 5.90625 12C5.90625 11.5858 6.24204 11.25 6.65625 11.25H12C12.4142 11.25 12.75 11.5858 12.75 12V17.3438C12.75 17.758 12.4142 18.0938 12 18.0938C11.5858 18.0938 11.25 17.758 11.25 17.3438V13.8107L3.53033 21.5303C3.23744 21.8232 2.76256 21.8232 2.46967 21.5303Z" fill="currentColor" /><path d="M3.51828 17.2997L6.56966 14.2484C5.36715 14.2029 4.40625 13.2136 4.40625 12C4.40625 10.7574 5.41361 9.75 6.65625 9.75H12C13.2426 9.75 14.25 10.7574 14.25 12V17.3438C14.25 18.5864 13.2426 19.5937 12 19.5937C10.7864 19.5937 9.79714 18.6329 9.75164 17.4303L6.70026 20.4817C8.23678 21.4438 10.0534 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.9466 2.55618 15.7632 3.51828 17.2997Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCircleBottomUp as IconComponentType).keywords = [
  "circle",
  "bottom",
  "up",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle",
  "ass",
  "bed",
  "backside",
  "underside",
  "undersurface",
  "penetrate",
  "derriere",
  "fathom",
  "seat",
  "upbound",
  "upwardly",
  "ascending",
  "upward",
  "upwards",
  "rising",
  "astir",
  "ahead",
  "awake"
];

export default IconCircleBottomUp as IconComponentType;