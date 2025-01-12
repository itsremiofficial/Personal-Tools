import { FC } from 'react';

const IconBuildings2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.36993 18H4.81995C3.38995 18 2.66992 17.28 2.66992 15.85V4.15002C2.66992 2.72002 3.38995 2 4.81995 2H9.11993C10.5499 2 11.2699 2.72002 11.2699 4.15002V6" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.0401 8.41998V19.58C18.0401 21.19 17.2401 22 15.6301 22H9.7901C8.1801 22 7.37012 21.19 7.37012 19.58V8.41998C7.37012 6.80998 8.1801 6 9.7901 6H15.6301C17.2401 6 18.0401 6.80998 18.0401 8.41998Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.0698 6V4.15002C14.0698 2.72002 14.7898 2 16.2198 2H20.5198C21.9498 2 22.6698 2.72002 22.6698 4.15002V15.85C22.6698 17.28 21.9498 18 20.5198 18H18.0398" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.6699 11H14.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.6699 14H14.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 22V19" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2699 4.15002V6H9.78992C8.17992 6 7.36993 6.80998 7.36993 8.41998V18H4.81995C3.38995 18 2.66992 17.28 2.66992 15.85V4.15002C2.66992 2.72002 3.38995 2 4.81995 2H9.11993C10.5499 2 11.2699 2.72002 11.2699 4.15002Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.0401 8.41998V19.58C18.0401 21.19 17.2401 22 15.6301 22H9.7901C8.1801 22 7.37012 21.19 7.37012 19.58V8.41998C7.37012 6.80998 8.1801 6 9.7901 6H15.6301C17.2401 6 18.0401 6.80998 18.0401 8.41998Z" fill="currentColor" /><path d="M22.6698 4.15002V15.85C22.6698 17.28 21.9498 18 20.5198 18H18.0398V8.41998C18.0398 6.80998 17.2398 6 15.6298 6H14.0698V4.15002C14.0698 2.72002 14.7898 2 16.2198 2H20.5198C21.9498 2 22.6698 2.72002 22.6698 4.15002Z" fill="currentColor" /><path d="M14.6699 11.75H10.6699C10.2599 11.75 9.91992 11.41 9.91992 11C9.91992 10.59 10.2599 10.25 10.6699 10.25H14.6699C15.0799 10.25 15.4199 10.59 15.4199 11C15.4199 11.41 15.0799 11.75 14.6699 11.75Z" fill="currentColor" /><path d="M14.6699 14.75H10.6699C10.2599 14.75 9.91992 14.41 9.91992 14C9.91992 13.59 10.2599 13.25 10.6699 13.25H14.6699C15.0799 13.25 15.4199 13.59 15.4199 14C15.4199 14.41 15.0799 14.75 14.6699 14.75Z" fill="currentColor" /><path d="M13.4199 19V22H11.9199V19C11.9199 18.59 12.2599 18.25 12.6699 18.25C13.0799 18.25 13.4199 18.59 13.4199 19Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2699 4.15C11.2699 4.34 11.1099 4.5 10.9199 4.5H9.78992C7.62992 4.5 5.86992 6.26 5.86992 8.42V17.65C5.86992 17.84 5.70992 18 5.51992 18H4.81992C3.62992 18 2.66992 17.04 2.66992 15.85V4.15C2.66992 2.96 3.62992 2 4.81992 2H9.11992C10.3099 2 11.2699 2.96 11.2699 4.15Z" fill="currentColor" /><path d="M22.6698 4.15V15.85C22.6698 17.04 21.7098 18 20.5198 18H19.8898C19.6998 18 19.5398 17.84 19.5398 17.65V8.42C19.5398 6.26 17.7798 4.5 15.6198 4.5H14.4198C14.2298 4.5 14.0698 4.34 14.0698 4.15C14.0698 2.96 15.0298 2 16.2198 2H20.5198C21.7098 2 22.6698 2.96 22.6698 4.15Z" fill="currentColor" /><path d="M15.6201 6H9.79012C8.45012 6 7.37012 7.08 7.37012 8.42V19.58C7.37012 20.92 8.45012 22 9.79012 22H11.4201C11.7001 22 11.9201 21.78 11.9201 21.5V19C11.9201 18.59 12.2601 18.25 12.6701 18.25C13.0801 18.25 13.4201 18.59 13.4201 19V21.5C13.4201 21.78 13.6401 22 13.9201 22H15.6301C16.9601 22 18.0401 20.92 18.0401 19.59V8.42C18.0401 7.08 16.9601 6 15.6201 6ZM14.6701 14.75H10.6701C10.2601 14.75 9.92012 14.41 9.92012 14C9.92012 13.59 10.2601 13.25 10.6701 13.25H14.6701C15.0801 13.25 15.4201 13.59 15.4201 14C15.4201 14.41 15.0801 14.75 14.6701 14.75ZM14.6701 11.75H10.6701C10.2601 11.75 9.92012 11.41 9.92012 11C9.92012 10.59 10.2601 10.25 10.6701 10.25H14.6701C15.0801 10.25 15.4201 10.59 15.4201 11C15.4201 11.41 15.0801 11.75 14.6701 11.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBuildings2 as IconComponent).keywords = [
  "buildings",
  "2",
  "edifice",
  "construction",
  "rising",
  "increasing",
  "augmentative",
  "heightening",
  "augmenting",
  "accommodation",
  "accommodations",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconBuildings2 as IconComponent;