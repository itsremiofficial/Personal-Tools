import { FC } from 'react';

const IconVolumeUp: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.66992 9.96V14.04C2.66992 16.08 3.68992 17.1 5.72992 17.1H7.18992C7.56992 17.1 7.94992 17.21 8.26992 17.41L11.2499 19.27C13.8299 20.88 15.9299 19.71 15.9299 16.67V7.32C15.9299 4.28 13.8199 3.11 11.2499 4.72L8.26992 6.59C7.93992 6.79 7.56992 6.9 7.18992 6.9H5.72992C3.68992 6.9 2.66992 7.92 2.66992 9.96Z" stroke="currentColor" strokeWidth={width} /><g opacity={duotone ? "0.4" : "1"}><path d="M18.6699 12H22.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M20.6699 14V10" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6699 11.25H21.4199V10C21.4199 9.59 21.0799 9.25 20.6699 9.25C20.2599 9.25 19.9199 9.59 19.9199 10V11.25H18.6699C18.2599 11.25 17.9199 11.59 17.9199 12C17.9199 12.41 18.2599 12.75 18.6699 12.75H19.9199V14C19.9199 14.41 20.2599 14.75 20.6699 14.75C21.0799 14.75 21.4199 14.41 21.4199 14V12.75H22.6699C23.0799 12.75 23.4199 12.41 23.4199 12C23.4199 11.59 23.0799 11.25 22.6699 11.25Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.4199 7.41V16.59C16.4199 18.31 15.7999 19.6 14.6899 20.22C14.2399 20.47 13.7399 20.59 13.2199 20.59C12.4199 20.59 11.5599 20.32 10.6799 19.77L7.75992 17.94C7.55992 17.82 7.32992 17.75 7.09992 17.75H6.16992V6.25H7.09992C7.32992 6.25 7.55992 6.18 7.75992 6.06L10.6799 4.23C12.1399 3.32 13.5699 3.16 14.6899 3.78C15.7999 4.4 16.4199 5.69 16.4199 7.41Z" fill="currentColor" /><path d="M6.16992 6.25V17.75H5.66992C3.24992 17.75 1.91992 16.42 1.91992 14V10C1.91992 7.58 3.24992 6.25 5.66992 6.25H6.16992Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6699 11.25H21.4199V10C21.4199 9.59 21.0799 9.25 20.6699 9.25C20.2599 9.25 19.9199 9.59 19.9199 10V11.25H18.6699C18.2599 11.25 17.9199 11.59 17.9199 12C17.9199 12.41 18.2599 12.75 18.6699 12.75H19.9199V14C19.9199 14.41 20.2599 14.75 20.6699 14.75C21.0799 14.75 21.4199 14.41 21.4199 14V12.75H22.6699C23.0799 12.75 23.4199 12.41 23.4199 12C23.4199 11.59 23.0799 11.25 22.6699 11.25Z" fill="currentColor" /><path d="M14.6899 3.78C13.5699 3.16 12.1399 3.32 10.6799 4.23L7.75992 6.06C7.55992 6.18 7.32992 6.25 7.09992 6.25H6.16992H5.66992C3.24992 6.25 1.91992 7.58 1.91992 10V14C1.91992 16.42 3.24992 17.75 5.66992 17.75H6.16992H7.09992C7.32992 17.75 7.55992 17.82 7.75992 17.94L10.6799 19.77C11.5599 20.32 12.4199 20.59 13.2199 20.59C13.7399 20.59 14.2399 20.47 14.6899 20.22C15.7999 19.6 16.4199 18.31 16.4199 16.59V7.41C16.4199 5.69 15.7999 4.4 14.6899 3.78Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVolumeUp as IconComponent).keywords = [
  "volume",
  "up",
  "loudness",
  "book",
  "mass",
  "bulk",
  "intensity",
  "quantum",
  "weight",
  "density",
  "potentiometer",
  "upbound",
  "upwardly",
  "ascending",
  "upward",
  "upwards",
  "rising",
  "astir",
  "ahead",
  "awake"
];

export default IconVolumeUp as IconComponent;