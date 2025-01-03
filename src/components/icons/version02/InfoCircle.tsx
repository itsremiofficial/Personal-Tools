import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconInfoCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 22C18.1699 22 22.6699 17.5 22.6699 12C22.6699 6.5 18.1699 2 12.6699 2C7.16992 2 2.66992 6.5 2.66992 12C2.66992 17.5 7.16992 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M12.6699 8V13" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M12.6641 16H12.673" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path d="M12.6699 13.75C13.0799 13.75 13.4199 13.41 13.4199 13V8C13.4199 7.59 13.0799 7.25 12.6699 7.25C12.2599 7.25 11.9199 7.59 11.9199 8V13C11.9199 13.41 12.2599 13.75 12.6699 13.75Z" fill="currentColor" /><path d="M13.5899 15.62C13.5399 15.5 13.4699 15.39 13.3799 15.29C13.2799 15.2 13.1699 15.13 13.0499 15.08C12.8099 14.98 12.5299 14.98 12.2899 15.08C12.1699 15.13 12.0599 15.2 11.9599 15.29C11.8699 15.39 11.7999 15.5 11.7499 15.62C11.6999 15.74 11.6699 15.87 11.6699 16C11.6699 16.13 11.6999 16.26 11.7499 16.38C11.7999 16.51 11.8699 16.61 11.9599 16.71C12.0599 16.8 12.1699 16.87 12.2899 16.92C12.4099 16.97 12.5399 17 12.6699 17C12.7999 17 12.9299 16.97 13.0499 16.92C13.1699 16.87 13.2799 16.8 13.3799 16.71C13.4699 16.61 13.5399 16.51 13.5899 16.38C13.6399 16.26 13.6699 16.13 13.6699 16C13.6699 15.87 13.6399 15.74 13.5899 15.62Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.15992 2 2.66992 6.49 2.66992 12C2.66992 17.51 7.15992 22 12.6699 22C18.1799 22 22.6699 17.51 22.6699 12C22.6699 6.49 18.1799 2 12.6699 2ZM11.9199 8C11.9199 7.59 12.2599 7.25 12.6699 7.25C13.0799 7.25 13.4199 7.59 13.4199 8V13C13.4199 13.41 13.0799 13.75 12.6699 13.75C12.2599 13.75 11.9199 13.41 11.9199 13V8ZM13.5899 16.38C13.5399 16.51 13.4699 16.61 13.3799 16.71C13.2799 16.8 13.1699 16.87 13.0499 16.92C12.9299 16.97 12.7999 17 12.6699 17C12.5399 17 12.4099 16.97 12.2899 16.92C12.1699 16.87 12.0599 16.8 11.9599 16.71C11.8699 16.61 11.7999 16.51 11.7499 16.38C11.6999 16.26 11.6699 16.13 11.6699 16C11.6699 15.87 11.6999 15.74 11.7499 15.62C11.7999 15.5 11.8699 15.39 11.9599 15.29C12.0599 15.2 12.1699 15.13 12.2899 15.08C12.5299 14.98 12.8099 14.98 13.0499 15.08C13.1699 15.13 13.2799 15.2 13.3799 15.29C13.4699 15.39 13.5399 15.5 13.5899 15.62C13.6399 15.74 13.6699 15.87 13.6699 16C13.6699 16.13 13.6399 16.26 13.5899 16.38Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconInfoCircle as IconComponentType).keywords = [
  "info",
  "circle",
  "information",
  "informational",
  "informing",
  "learn",
  "know",
  "intelligence",
  "update",
  "briefing",
  "story",
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

export default IconInfoCircle as IconComponentType;