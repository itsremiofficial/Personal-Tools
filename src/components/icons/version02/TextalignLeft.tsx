import { FC } from 'react';

const IconTextalignLeft: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M3.67188 4.5H21.6719" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M3.67188 9.5H13.1419" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3.67188 14.5H21.6719" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M3.67188 19.5H13.1419" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6719 5.25H3.67188C3.26188 5.25 2.92188 4.91 2.92188 4.5C2.92188 4.09 3.26188 3.75 3.67188 3.75H21.6719C22.0819 3.75 22.4219 4.09 22.4219 4.5C22.4219 4.91 22.0819 5.25 21.6719 5.25Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M13.1419 10.25H3.67188C3.26188 10.25 2.92188 9.91 2.92188 9.5C2.92188 9.09 3.26188 8.75 3.67188 8.75H13.1419C13.5519 8.75 13.8919 9.09 13.8919 9.5C13.8919 9.91 13.5619 10.25 13.1419 10.25Z" fill="currentColor" /><path d="M21.6719 15.25H3.67188C3.26188 15.25 2.92188 14.91 2.92188 14.5C2.92188 14.09 3.26188 13.75 3.67188 13.75H21.6719C22.0819 13.75 22.4219 14.09 22.4219 14.5C22.4219 14.91 22.0819 15.25 21.6719 15.25Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M13.1419 20.25H3.67188C3.26188 20.25 2.92188 19.91 2.92188 19.5C2.92188 19.09 3.26188 18.75 3.67188 18.75H13.1419C13.5519 18.75 13.8919 19.09 13.8919 19.5C13.8919 19.91 13.5619 20.25 13.1419 20.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6719 5.25H3.67188C3.26188 5.25 2.92188 4.91 2.92188 4.5C2.92188 4.09 3.26188 3.75 3.67188 3.75H21.6719C22.0819 3.75 22.4219 4.09 22.4219 4.5C22.4219 4.91 22.0819 5.25 21.6719 5.25Z" fill="currentColor" /><path d="M13.1419 10.25H3.67188C3.26188 10.25 2.92188 9.91 2.92188 9.5C2.92188 9.09 3.26188 8.75 3.67188 8.75H13.1419C13.5519 8.75 13.8919 9.09 13.8919 9.5C13.8919 9.91 13.5619 10.25 13.1419 10.25Z" fill="currentColor" /><path d="M21.6719 15.25H3.67188C3.26188 15.25 2.92188 14.91 2.92188 14.5C2.92188 14.09 3.26188 13.75 3.67188 13.75H21.6719C22.0819 13.75 22.4219 14.09 22.4219 14.5C22.4219 14.91 22.0819 15.25 21.6719 15.25Z" fill="currentColor" /><path d="M13.1419 20.25H3.67188C3.26188 20.25 2.92188 19.91 2.92188 19.5C2.92188 19.09 3.26188 18.75 3.67188 18.75H13.1419C13.5519 18.75 13.8919 19.09 13.8919 19.5C13.8919 19.91 13.5619 20.25 13.1419 20.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTextalignLeft as IconComponent).keywords = [
  "textalign",
  "left",
  "left-hand",
  "left-handed",
  "left over",
  "near",
  "leftover",
  "nigh",
  "remaining",
  "leftfield",
  "odd"
];

export default IconTextalignLeft as IconComponent;