import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMessageMinus: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6699 2H8.66992C4.66992 2 2.66992 4 2.66992 8V21C2.66992 21.55 3.11992 22 3.66992 22H16.6699C20.6699 22 22.6699 20 22.6699 16V8C22.6699 4 20.6699 2 16.6699 2Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.16992 12H16.1699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.6699 2H8.66992C4.66992 2 2.66992 4 2.66992 8V21C2.66992 21.55 3.11992 22 3.66992 22H16.6699C20.6699 22 22.6699 20 22.6699 16V8C22.6699 4 20.6699 2 16.6699 2Z" fill="currentColor" /><path d="M16.1699 11.25H9.16992C8.75992 11.25 8.41992 11.59 8.41992 12C8.41992 12.41 8.75992 12.75 9.16992 12.75H16.1699C16.5799 12.75 16.9199 12.41 16.9199 12C16.9199 11.59 16.5799 11.25 16.1699 11.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6699 2H8.66992C4.66992 2 2.66992 4 2.66992 8V21C2.66992 21.55 3.11992 22 3.66992 22H16.6699C20.6699 22 22.6699 20 22.6699 16V8C22.6699 4 20.6699 2 16.6699 2ZM16.1699 12.75H9.16992C8.75992 12.75 8.41992 12.41 8.41992 12C8.41992 11.59 8.75992 11.25 9.16992 11.25H16.1699C16.5799 11.25 16.9199 11.59 16.9199 12C16.9199 12.41 16.5799 12.75 16.1699 12.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMessageMinus as IconComponentType).keywords = [
  "message",
  "minus",
  "subject matter",
  "substance",
  "content",
  "file",
  "communiqué",
  "transmission",
  "communication",
  "news",
  "advertisement",
  "subtraction",
  "negative",
  "disadvantageous",
  "harmful",
  "sans",
  "min",
  "least",
  "unary",
  "nec"
];

export default IconMessageMinus as IconComponentType;