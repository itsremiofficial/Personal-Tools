import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconToggleOnCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6699 4H14.6699C19.0899 4 22.6699 7.58 22.6699 12C22.6699 16.42 19.0899 20 14.6699 20H10.6699C6.24992 20 2.66992 16.42 2.66992 12C2.66992 7.58 6.24992 4 10.6699 4Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.6699 16C16.8791 16 18.6699 14.2091 18.6699 12C18.6699 9.79086 16.8791 8 14.6699 8C12.4608 8 10.6699 9.79086 10.6699 12C10.6699 14.2091 12.4608 16 14.6699 16Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.8099 3.85986H14.5299C19.0199 3.85986 22.6699 7.50986 22.6699 11.9999C22.6699 16.4899 19.0199 20.1399 14.5299 20.1399H10.8099C6.31992 20.1399 2.66992 16.4899 2.66992 11.9999C2.66992 7.50986 6.31992 3.85986 10.8099 3.85986Z" fill="currentColor" /><path d="M14.5299 16.4201C16.971 16.4201 18.9499 14.4412 18.9499 12.0001C18.9499 9.55898 16.971 7.58008 14.5299 7.58008C12.0888 7.58008 10.1099 9.55898 10.1099 12.0001C10.1099 14.4412 12.0888 16.4201 14.5299 16.4201Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5299 3.85986H10.8099C6.31992 3.85986 2.66992 7.50986 2.66992 11.9999C2.66992 16.4899 6.31992 20.1399 10.8099 20.1399H14.5299C19.0199 20.1399 22.6699 16.4899 22.6699 11.9999C22.6699 7.50986 19.0199 3.85986 14.5299 3.85986ZM14.5299 16.4199C12.0899 16.4199 10.1099 14.4399 10.1099 11.9999C10.1099 9.55986 12.0899 7.57986 14.5299 7.57986C16.9699 7.57986 18.9499 9.55986 18.9499 11.9999C18.9499 14.4399 16.9699 16.4199 14.5299 16.4199Z" fill="currentColor" /></svg> 
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