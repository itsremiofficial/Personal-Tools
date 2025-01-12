import { FC } from 'react';

const IconTextalignCenter: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M3.67188 4.5H21.6719" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M7.93164 9.5H17.4116" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3.67188 14.5H21.6719" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M7.93164 19.5H17.4116" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6719 5.25H3.67188C3.26188 5.25 2.92188 4.91 2.92188 4.5C2.92188 4.09 3.26188 3.75 3.67188 3.75H21.6719C22.0819 3.75 22.4219 4.09 22.4219 4.5C22.4219 4.91 22.0819 5.25 21.6719 5.25Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.4116 10.25H7.93164C7.52164 10.25 7.18164 9.91 7.18164 9.5C7.18164 9.09 7.52164 8.75 7.93164 8.75H17.4016C17.8116 8.75 18.1516 9.09 18.1516 9.5C18.1516 9.91 17.8216 10.25 17.4116 10.25Z" fill="currentColor" /><path d="M21.6719 15.25H3.67188C3.26188 15.25 2.92188 14.91 2.92188 14.5C2.92188 14.09 3.26188 13.75 3.67188 13.75H21.6719C22.0819 13.75 22.4219 14.09 22.4219 14.5C22.4219 14.91 22.0819 15.25 21.6719 15.25Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.4116 20.25H7.93164C7.52164 20.25 7.18164 19.91 7.18164 19.5C7.18164 19.09 7.52164 18.75 7.93164 18.75H17.4016C17.8116 18.75 18.1516 19.09 18.1516 19.5C18.1516 19.91 17.8216 20.25 17.4116 20.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6719 5.25H3.67188C3.26188 5.25 2.92188 4.91 2.92188 4.5C2.92188 4.09 3.26188 3.75 3.67188 3.75H21.6719C22.0819 3.75 22.4219 4.09 22.4219 4.5C22.4219 4.91 22.0819 5.25 21.6719 5.25Z" fill="currentColor" /><path d="M17.4116 10.25H7.93164C7.52164 10.25 7.18164 9.91 7.18164 9.5C7.18164 9.09 7.52164 8.75 7.93164 8.75H17.4016C17.8116 8.75 18.1516 9.09 18.1516 9.5C18.1516 9.91 17.8216 10.25 17.4116 10.25Z" fill="currentColor" /><path d="M21.6719 15.25H3.67188C3.26188 15.25 2.92188 14.91 2.92188 14.5C2.92188 14.09 3.26188 13.75 3.67188 13.75H21.6719C22.0819 13.75 22.4219 14.09 22.4219 14.5C22.4219 14.91 22.0819 15.25 21.6719 15.25Z" fill="currentColor" /><path d="M17.4116 20.25H7.93164C7.52164 20.25 7.18164 19.91 7.18164 19.5C7.18164 19.09 7.52164 18.75 7.93164 18.75H17.4016C17.8116 18.75 18.1516 19.09 18.1516 19.5C18.1516 19.91 17.8216 20.25 17.4116 20.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTextalignCenter as IconComponent).keywords = [
  "textalign",
  "center",
  "central",
  "focus",
  "center of attention",
  "nerve centre",
  "middle",
  "midway",
  "centre",
  "kernel",
  "midpoint"
];

export default IconTextalignCenter as IconComponent;