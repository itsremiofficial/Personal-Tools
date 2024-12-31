import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconToggleOnCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 4H14C18.42 4 22 7.58 22 12C22 16.42 18.42 20 14 20H10C5.58 20 2 16.42 2 12C2 7.58 5.58 4 10 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14 16C16.2091 16 18 14.2091 18 12C18 9.79086 16.2091 8 14 8C11.7909 8 10 9.79086 10 12C10 14.2091 11.7909 16 14 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.14 3.85986H13.86C18.35 3.85986 22 7.50986 22 11.9999C22 16.4899 18.35 20.1399 13.86 20.1399H10.14C5.65 20.1399 2 16.4899 2 11.9999C2 7.50986 5.65 3.85986 10.14 3.85986Z" fill="currentColor" /><path d="M13.8595 16.4201C16.3006 16.4201 18.2795 14.4412 18.2795 12.0001C18.2795 9.55898 16.3006 7.58008 13.8595 7.58008C11.4184 7.58008 9.43945 9.55898 9.43945 12.0001C9.43945 14.4412 11.4184 16.4201 13.8595 16.4201Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconToggleOnCircle as IconComponentType).keywords = [
  "toggle",
  "on",
  "circle",
  "on-off switch",
  "toggle switch",
  "lever",
  "cycle",
  "switch",
  "button",
  "switching",
  "rotate",
  "rotation",
  "bps",
  "add",
  "nso",
  "our",
  "bsi",
  "nbs",
  "opti",
  "sno",
  "weap",
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

export default IconToggleOnCircle as IconComponentType;