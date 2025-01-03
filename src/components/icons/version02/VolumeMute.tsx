import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconVolumeMute: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.16992 10V14C6.16992 16 7.16992 17 9.16992 17H10.5999C10.9699 17 11.3399 17.11 11.6599 17.3L14.5799 19.13C17.0999 20.71 19.1699 19.56 19.1699 16.59V7.41C19.1699 4.43 17.0999 3.29 14.5799 4.87L11.6599 6.7C11.3399 6.89 10.9699 7 10.5999 7H9.16992C7.16992 7 6.16992 8 6.16992 10Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.9199 7.41V16.59C19.9199 18.31 19.2999 19.6 18.1899 20.22C17.7399 20.47 17.2399 20.59 16.7199 20.59C15.9199 20.59 15.0599 20.32 14.1799 19.77L11.2599 17.94C11.0599 17.82 10.8299 17.75 10.5999 17.75H9.66992V6.25H10.5999C10.8299 6.25 11.0599 6.18 11.2599 6.06L14.1799 4.23C15.6399 3.32 17.0699 3.16 18.1899 3.78C19.2999 4.4 19.9199 5.69 19.9199 7.41Z" fill="currentColor" /><path d="M9.66992 6.25V17.75H9.16992C6.74992 17.75 5.41992 16.42 5.41992 14V10C5.41992 7.58 6.74992 6.25 9.16992 6.25H9.66992Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.1899 3.78C17.0699 3.16 15.6399 3.32 14.1799 4.23L11.2599 6.06C11.0599 6.18 10.8299 6.25 10.5999 6.25H9.66992H9.16992C6.74992 6.25 5.41992 7.58 5.41992 10V14C5.41992 16.42 6.74992 17.75 9.16992 17.75H9.66992H10.5999C10.8299 17.75 11.0599 17.82 11.2599 17.94L14.1799 19.77C15.0599 20.32 15.9199 20.59 16.7199 20.59C17.2399 20.59 17.7399 20.47 18.1899 20.22C19.2999 19.6 19.9199 18.31 19.9199 16.59V7.41C19.9199 5.69 19.2999 4.4 18.1899 3.78Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVolumeMute as IconComponentType).keywords = [
  "volume",
  "mute",
  "loudness",
  "book",
  "mass",
  "bulk",
  "intensity",
  "quantum",
  "weight",
  "density",
  "potentiometer",
  "dumb",
  "silent",
  "inarticulate",
  "unarticulate",
  "wordless",
  "dull",
  "deaf-mute",
  "nonspeaking",
  "unspoken"
];

export default IconVolumeMute as IconComponentType;