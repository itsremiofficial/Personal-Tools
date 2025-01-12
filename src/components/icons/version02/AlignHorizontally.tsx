import { FC } from 'react';

const IconAlignHorizontally: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.41992 17.4V6.6C5.41992 5.1 6.05992 4.5 7.64992 4.5H8.68992C10.2799 4.5 10.9199 5.1 10.9199 6.6V17.4C10.9199 18.9 10.2799 19.5 8.68992 19.5H7.64992C6.05992 19.5 5.41992 18.9 5.41992 17.4Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M13.9199 15.4V8.6C13.9199 7.1 14.5599 6.5 16.1499 6.5H17.1899C18.7799 6.5 19.4199 7.1 19.4199 8.6V15.4C19.4199 16.9 18.7799 17.5 17.1899 17.5H16.1499C14.5599 17.5 13.9199 16.9 13.9199 15.4Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2.66992 12H5.06992" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.6699 12H13.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22.67 12H19.98" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.41992 17.4V6.6C5.41992 5.1 6.05992 4.5 7.64992 4.5H8.68992C10.2799 4.5 10.9199 5.1 10.9199 6.6V17.4C10.9199 18.9 10.2799 19.5 8.68992 19.5H7.64992C6.05992 19.5 5.41992 18.9 5.41992 17.4Z" fill="currentColor" /><path d="M5.41992 12.75H3.41992C3.00992 12.75 2.66992 12.41 2.66992 12C2.66992 11.59 3.00992 11.25 3.41992 11.25H5.41992V12.75Z" fill="currentColor" /><path d="M13.9199 11.25H10.9199V12.75H13.9199V11.25Z" fill="currentColor" /><path d="M21.9199 12.75H19.4199V11.25H21.9199C22.3299 11.25 22.6699 11.59 22.6699 12C22.6699 12.41 22.3299 12.75 21.9199 12.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M13.9199 15.4V8.6C13.9199 7.1 14.5599 6.5 16.1499 6.5H17.1899C18.7799 6.5 19.4199 7.1 19.4199 8.6V15.4C19.4199 16.9 18.7799 17.5 17.1899 17.5H16.1499C14.5599 17.5 13.9199 16.9 13.9199 15.4Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.41992 17.4V6.6C5.41992 5.1 6.05992 4.5 7.64992 4.5H8.68992C10.2799 4.5 10.9199 5.1 10.9199 6.6V17.4C10.9199 18.9 10.2799 19.5 8.68992 19.5H7.64992C6.05992 19.5 5.41992 18.9 5.41992 17.4Z" fill="currentColor" /><path d="M5.41992 12.75H3.41992C3.00992 12.75 2.66992 12.41 2.66992 12C2.66992 11.59 3.00992 11.25 3.41992 11.25H5.41992V12.75Z" fill="currentColor" /><path d="M13.9199 11.25H10.9199V12.75H13.9199V11.25Z" fill="currentColor" /><path d="M21.9199 12.75H19.4199V11.25H21.9199C22.3299 11.25 22.6699 11.59 22.6699 12C22.6699 12.41 22.3299 12.75 21.9199 12.75Z" fill="currentColor" /><path d="M13.9199 15.4V8.6C13.9199 7.1 14.5599 6.5 16.1499 6.5H17.1899C18.7799 6.5 19.4199 7.1 19.4199 8.6V15.4C19.4199 16.9 18.7799 17.5 17.1899 17.5H16.1499C14.5599 17.5 13.9199 16.9 13.9199 15.4Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAlignHorizontally as IconComponent).keywords = [
  "align",
  "horizontally",
  "line up",
  "adjust",
  "coordinate",
  "aline",
  "array",
  "alignment",
  "link",
  "combine",
  "integrate",
  "cross-sectional",
  "across",
  "landscape",
  "middle",
  "vertically",
  "diagonally",
  "perpendicularly",
  "laterally",
  "vertical"
];

export default IconAlignHorizontally as IconComponent;