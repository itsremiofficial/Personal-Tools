import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconAddCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 22C18.1699 22 22.6699 17.5 22.6699 12C22.6699 6.5 18.1699 2 12.6699 2C7.16992 2 2.66992 6.5 2.66992 12C2.66992 17.5 7.16992 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M8.66992 12H16.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 16V8" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path d="M16.6699 11.25H13.4199V8C13.4199 7.59 13.0799 7.25 12.6699 7.25C12.2599 7.25 11.9199 7.59 11.9199 8V11.25H8.66992C8.25992 11.25 7.91992 11.59 7.91992 12C7.91992 12.41 8.25992 12.75 8.66992 12.75H11.9199V16C11.9199 16.41 12.2599 16.75 12.6699 16.75C13.0799 16.75 13.4199 16.41 13.4199 16V12.75H16.6699C17.0799 12.75 17.4199 12.41 17.4199 12C17.4199 11.59 17.0799 11.25 16.6699 11.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.15992 2 2.66992 6.49 2.66992 12C2.66992 17.51 7.15992 22 12.6699 22C18.1799 22 22.6699 17.51 22.6699 12C22.6699 6.49 18.1799 2 12.6699 2ZM16.6699 12.75H13.4199V16C13.4199 16.41 13.0799 16.75 12.6699 16.75C12.2599 16.75 11.9199 16.41 11.9199 16V12.75H8.66992C8.25992 12.75 7.91992 12.41 7.91992 12C7.91992 11.59 8.25992 11.25 8.66992 11.25H11.9199V8C11.9199 7.59 12.2599 7.25 12.6699 7.25C13.0799 7.25 13.4199 7.59 13.4199 8V11.25H16.6699C17.0799 11.25 17.4199 11.59 17.4199 12C17.4199 12.41 17.0799 12.75 16.6699 12.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAddCircle as IconComponentType).keywords = [
  "add",
  "circle",
  "total",
  "sum up",
  "tot up",
  "add up",
  "sum",
  "summate",
  "impart",
  "contribute",
  "supply",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle"
];

export default IconAddCircle as IconComponentType;