import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCircleTopUp: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 11L22 2M22 2H16.6562M22 2V7.34375" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.5" : "1"} d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12.4697 11.5303C12.1768 11.2374 12.1768 10.7626 12.4697 10.4697L20.1893 2.75H16.6562C16.242 2.75 15.9062 2.41421 15.9062 2C15.9062 1.58579 16.242 1.25 16.6562 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V7.34375C22.75 7.75796 22.4142 8.09375 22 8.09375C21.5858 8.09375 21.25 7.75796 21.25 7.34375V3.81066L13.5303 11.5303C13.2374 11.8232 12.7626 11.8232 12.4697 11.5303Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M14.5 2.75C14.5 2.33579 14.8358 2 15.25 2H21.25C21.6642 2 22 2.33579 22 2.75V8.75C22 9.16421 21.6642 9.5 21.25 9.5C20.8358 9.5 20.5 9.16421 20.5 8.75V4.56066L13.7803 11.2803C13.4874 11.5732 13.0126 11.5732 12.7197 11.2803C12.4268 10.9874 12.4268 10.5126 12.7197 10.2197L19.4393 3.5H15.25C14.8358 3.5 14.5 3.16421 14.5 2.75Z" fill="currentColor" /><path d="M11.25 2.75C5.72715 2.75 1.25 7.22715 1.25 12.75C1.25 18.2728 5.72715 22.75 11.25 22.75C16.7728 22.75 21.25 18.2728 21.25 12.75C21.25 12.1512 21.1974 11.5647 21.0965 10.9948C19.9254 10.9159 19 9.94104 19 8.75V8.18198L14.841 12.341C13.9623 13.2197 12.5377 13.2197 11.659 12.341C10.7803 11.4623 10.7803 10.0377 11.659 9.15901L15.818 5H15.25C14.059 5 13.0841 4.07456 13.0052 2.90352C12.4353 2.80263 11.8488 2.75 11.25 2.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCircleTopUp as IconComponentType).keywords = [
  "circle",
  "top",
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
  "upper side",
  "upside",
  "elevation",
  "uppermost",
  "height",
  "pinnacle",
  "peak",
  "upper",
  "topmost",
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

export default IconCircleTopUp as IconComponentType;