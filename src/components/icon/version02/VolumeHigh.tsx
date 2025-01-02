import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconVolumeHigh: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.66992 10V14C2.66992 16 3.66992 17 5.66992 17H7.09992C7.46992 17 7.83992 17.11 8.15992 17.3L11.0799 19.13C13.5999 20.71 15.6699 19.56 15.6699 16.59V7.41C15.6699 4.43 13.5999 3.29 11.0799 4.87L8.15992 6.7C7.83992 6.89 7.46992 7 7.09992 7H5.66992C3.66992 7 2.66992 8 2.66992 10Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.4" : "1"} d="M18.6699 8C20.4499 10.37 20.4499 13.63 18.6699 16" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.5 5.5C23.39 9.35 23.39 14.65 20.5 18.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6702 16.75C18.5102 16.75 18.3602 16.7 18.2202 16.6C17.8902 16.35 17.8202 15.88 18.0702 15.55C19.6402 13.46 19.6402 10.54 18.0702 8.45C17.8202 8.12 17.8902 7.65 18.2202 7.4C18.5502 7.15 19.0202 7.22 19.2702 7.55C21.2302 10.17 21.2302 13.83 19.2702 16.45C19.1202 16.65 18.9002 16.75 18.6702 16.75Z" fill="currentColor" /><path d="M20.5003 19.25C20.3403 19.25 20.1903 19.2 20.0503 19.1C19.7203 18.85 19.6503 18.38 19.9003 18.05C22.5703 14.49 22.5703 9.51 19.9003 5.95C19.6503 5.62 19.7203 5.15 20.0503 4.9C20.3803 4.65 20.8503 4.72 21.1003 5.05C24.1703 9.14 24.1703 14.86 21.1003 18.95C20.9603 19.15 20.7303 19.25 20.5003 19.25Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.4199 7.41V16.59C16.4199 18.31 15.7999 19.6 14.6899 20.22C14.2399 20.47 13.7399 20.59 13.2199 20.59C12.4199 20.59 11.5599 20.32 10.6799 19.77L7.75992 17.94C7.55992 17.82 7.32992 17.75 7.09992 17.75H6.16992V6.25H7.09992C7.32992 6.25 7.55992 6.18 7.75992 6.06L10.6799 4.23C12.1399 3.32 13.5699 3.16 14.6899 3.78C15.7999 4.4 16.4199 5.69 16.4199 7.41Z" fill="currentColor" /><path d="M6.16992 6.25V17.75H5.66992C3.24992 17.75 1.91992 16.42 1.91992 14V10C1.91992 7.58 3.24992 6.25 5.66992 6.25H6.16992Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6702 16.75C18.5102 16.75 18.3602 16.7 18.2202 16.6C17.8902 16.35 17.8202 15.88 18.0702 15.55C19.6402 13.46 19.6402 10.54 18.0702 8.45C17.8202 8.12 17.8902 7.65 18.2202 7.4C18.5502 7.15 19.0202 7.22 19.2702 7.55C21.2302 10.17 21.2302 13.83 19.2702 16.45C19.1202 16.65 18.9002 16.75 18.6702 16.75Z" fill="currentColor" /><path d="M20.5003 19.25C20.3403 19.25 20.1903 19.2 20.0503 19.1C19.7203 18.85 19.6503 18.38 19.9003 18.05C22.5703 14.49 22.5703 9.51 19.9003 5.95C19.6503 5.62 19.7203 5.15 20.0503 4.9C20.3803 4.65 20.8503 4.72 21.1003 5.05C24.1703 9.14 24.1703 14.86 21.1003 18.95C20.9603 19.15 20.7303 19.25 20.5003 19.25Z" fill="currentColor" /><path d="M14.6899 3.78C13.5699 3.16 12.1399 3.32 10.6799 4.23L7.75992 6.06C7.55992 6.18 7.32992 6.25 7.09992 6.25H6.16992H5.66992C3.24992 6.25 1.91992 7.58 1.91992 10V14C1.91992 16.42 3.24992 17.75 5.66992 17.75H6.16992H7.09992C7.32992 17.75 7.55992 17.82 7.75992 17.94L10.6799 19.77C11.5599 20.32 12.4199 20.59 13.2199 20.59C13.7399 20.59 14.2399 20.47 14.6899 20.22C15.7999 19.6 16.4199 18.31 16.4199 16.59V7.41C16.4199 5.69 15.7999 4.4 14.6899 3.78Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVolumeHigh as IconComponentType).keywords = [
  "volume",
  "high",
  "loudness",
  "book",
  "mass",
  "bulk",
  "intensity",
  "quantum",
  "weight",
  "density",
  "potentiometer",
  "towering",
  "high-level",
  "altitudinous",
  "upper",
  "lofty",
  "full",
  "rising",
  "overflowing",
  "peak"
];

export default IconVolumeHigh as IconComponentType;