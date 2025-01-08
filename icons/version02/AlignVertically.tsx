import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconAlignVertically: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.0699 19.25H7.26992C5.76992 19.25 5.16992 18.61 5.16992 17.02V15.98C5.16992 14.39 5.76992 13.75 7.26992 13.75H18.0699C19.5699 13.75 20.1699 14.39 20.1699 15.98V17.02C20.1699 18.61 19.5699 19.25 18.0699 19.25Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M16.0699 10.75H9.26992C7.76992 10.75 7.16992 10.11 7.16992 8.52V7.48C7.16992 5.89 7.76992 5.25 9.26992 5.25H16.0699C17.5699 5.25 18.1699 5.89 18.1699 7.48V8.52C18.1699 10.11 17.5699 10.75 16.0699 10.75Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22.0001V19.6001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 13V11" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 2V4.69" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.0699 19.25H7.26992C5.76992 19.25 5.16992 18.61 5.16992 17.02V15.98C5.16992 14.39 5.76992 13.75 7.26992 13.75H18.0699C19.5699 13.75 20.1699 14.39 20.1699 15.98V17.02C20.1699 18.61 19.5699 19.25 18.0699 19.25Z" fill="currentColor" /><path d="M13.4199 19.25V21.25C13.4199 21.66 13.0799 22 12.6699 22C12.2599 22 11.9199 21.66 11.9199 21.25V19.25H13.4199Z" fill="currentColor" /><path d="M13.4199 10.75H11.9199V13.75H13.4199V10.75Z" fill="currentColor" /><path d="M13.4199 2.75V5.25H11.9199V2.75C11.9199 2.34 12.2599 2 12.6699 2C13.0799 2 13.4199 2.34 13.4199 2.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.0699 10.75H9.26992C7.76992 10.75 7.16992 10.11 7.16992 8.52V7.48C7.16992 5.89 7.76992 5.25 9.26992 5.25H16.0699C17.5699 5.25 18.1699 5.89 18.1699 7.48V8.52C18.1699 10.11 17.5699 10.75 16.0699 10.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.0699 19.25H7.26992C5.76992 19.25 5.16992 18.61 5.16992 17.02V15.98C5.16992 14.39 5.76992 13.75 7.26992 13.75H18.0699C19.5699 13.75 20.1699 14.39 20.1699 15.98V17.02C20.1699 18.61 19.5699 19.25 18.0699 19.25Z" fill="currentColor" /><path d="M13.4199 19.25V21.25C13.4199 21.66 13.0799 22 12.6699 22C12.2599 22 11.9199 21.66 11.9199 21.25V19.25H13.4199Z" fill="currentColor" /><path d="M13.4199 10.75H11.9199V13.75H13.4199V10.75Z" fill="currentColor" /><path d="M13.4199 2.75V5.25H11.9199V2.75C11.9199 2.34 12.2599 2 12.6699 2C13.0799 2 13.4199 2.34 13.4199 2.75Z" fill="currentColor" /><path d="M16.0699 10.75H9.26992C7.76992 10.75 7.16992 10.11 7.16992 8.52V7.48C7.16992 5.89 7.76992 5.25 9.26992 5.25H16.0699C17.5699 5.25 18.1699 5.89 18.1699 7.48V8.52C18.1699 10.11 17.5699 10.75 16.0699 10.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAlignVertically as IconComponentType).keywords = [
  "align",
  "vertically",
  "line up",
  "adjust",
  "coordinate",
  "aline",
  "array",
  "alignment",
  "link",
  "combine",
  "integrate",
  "portrait",
  "tilt",
  "upward",
  "riser",
  "longitudinally",
  "upright",
  "fundamentally",
  "down",
  "vehemently"
];

export default IconAlignVertically as IconComponentType;