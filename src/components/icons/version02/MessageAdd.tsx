import { FC } from 'react';

const IconMessageAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6699 2H8.66992C4.66992 2 2.66992 4 2.66992 8V21C2.66992 21.55 3.11992 22 3.66992 22H16.6699C20.6699 22 22.6699 20 22.6699 16V8C22.6699 4 20.6699 2 16.6699 2Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M9.16992 12H16.1699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 15.5V8.5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.6699 2H8.66992C4.66992 2 2.66992 4 2.66992 8V21C2.66992 21.55 3.11992 22 3.66992 22H16.6699C20.6699 22 22.6699 20 22.6699 16V8C22.6699 4 20.6699 2 16.6699 2Z" fill="currentColor" /><path d="M16.1699 11.25H13.4199V8.5C13.4199 8.09 13.0799 7.75 12.6699 7.75C12.2599 7.75 11.9199 8.09 11.9199 8.5V11.25H9.16992C8.75992 11.25 8.41992 11.59 8.41992 12C8.41992 12.41 8.75992 12.75 9.16992 12.75H11.9199V15.5C11.9199 15.91 12.2599 16.25 12.6699 16.25C13.0799 16.25 13.4199 15.91 13.4199 15.5V12.75H16.1699C16.5799 12.75 16.9199 12.41 16.9199 12C16.9199 11.59 16.5799 11.25 16.1699 11.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6699 2H8.66992C4.66992 2 2.66992 4 2.66992 8V21C2.66992 21.55 3.11992 22 3.66992 22H16.6699C20.6699 22 22.6699 20 22.6699 16V8C22.6699 4 20.6699 2 16.6699 2ZM16.1699 12.75H13.4199V15.5C13.4199 15.91 13.0799 16.25 12.6699 16.25C12.2599 16.25 11.9199 15.91 11.9199 15.5V12.75H9.16992C8.75992 12.75 8.41992 12.41 8.41992 12C8.41992 11.59 8.75992 11.25 9.16992 11.25H11.9199V8.5C11.9199 8.09 12.2599 7.75 12.6699 7.75C13.0799 7.75 13.4199 8.09 13.4199 8.5V11.25H16.1699C16.5799 11.25 16.9199 11.59 16.9199 12C16.9199 12.41 16.5799 12.75 16.1699 12.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMessageAdd as IconComponent).keywords = [
  "message",
  "add",
  "subject matter",
  "substance",
  "content",
  "file",
  "communiqué",
  "transmission",
  "communication",
  "news",
  "advertisement",
  "total",
  "sum up",
  "tot up",
  "add up",
  "sum",
  "summate",
  "impart",
  "contribute",
  "supply"
];

export default IconMessageAdd as IconComponent;