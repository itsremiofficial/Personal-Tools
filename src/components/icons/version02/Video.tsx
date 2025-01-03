import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconVideo: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1999 20.42H6.87992C3.71992 20.42 2.66992 18.32 2.66992 16.21V7.79C2.66992 4.63 3.71992 3.58 6.87992 3.58H13.1999C16.3599 3.58 17.4099 4.63 17.4099 7.79V16.21C17.4099 19.37 16.3499 20.42 13.1999 20.42Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.1902 17.1L17.4102 15.15V8.83999L20.1902 6.88999C21.5502 5.93999 22.6702 6.51999 22.6702 8.18999V15.81C22.6702 17.48 21.5502 18.06 20.1902 17.1Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.1699 11C12.9983 11 13.6699 10.3284 13.6699 9.5C13.6699 8.67157 12.9983 8 12.1699 8C11.3415 8 10.6699 8.67157 10.6699 9.5C10.6699 10.3284 11.3415 11 12.1699 11Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M13.6699 3.25H7.66992C4.24992 3.25 2.91992 4.58 2.91992 8V16C2.91992 18.3 4.16992 20.75 7.66992 20.75H13.6699C17.0899 20.75 18.4199 19.42 18.4199 16V8C18.4199 4.58 17.0899 3.25 13.6699 3.25Z" fill="currentColor" /><path d="M12.17 11.38C13.2083 11.38 14.05 10.5383 14.05 9.5C14.05 8.46171 13.2083 7.62 12.17 7.62C11.1317 7.62 10.29 8.46171 10.29 9.5C10.29 10.5383 11.1317 11.38 12.17 11.38Z" fill="currentColor" /><path d="M22.3204 6.17C21.9104 5.96 21.0504 5.72 19.8804 6.54L18.4004 7.58C18.4104 7.72 18.4204 7.85 18.4204 8V16C18.4204 16.15 18.4004 16.28 18.4004 16.42L19.8804 17.46C20.5004 17.9 21.0404 18.04 21.4704 18.04C21.8404 18.04 22.1304 17.94 22.3204 17.84C22.7304 17.63 23.4204 17.06 23.4204 15.63V8.38C23.4204 6.95 22.7304 6.38 22.3204 6.17Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.8199 6.17C21.4099 5.95 20.5499 5.72 19.3799 6.54L17.9099 7.58C17.7999 4.47 16.4499 3.25 13.1699 3.25H7.16992C3.74992 3.25 2.41992 4.58 2.41992 8V16C2.41992 18.3 3.66992 20.75 7.16992 20.75H13.1699C16.4499 20.75 17.7999 19.53 17.9099 16.42L19.3799 17.46C19.9999 17.9 20.5399 18.04 20.9699 18.04C21.3399 18.04 21.6299 17.93 21.8199 17.83C22.2299 17.62 22.9199 17.05 22.9199 15.62V8.38C22.9199 6.95 22.2299 6.38 21.8199 6.17ZM11.6699 11.38C10.6399 11.38 9.78992 10.54 9.78992 9.5C9.78992 8.46 10.6399 7.62 11.6699 7.62C12.6999 7.62 13.5499 8.46 13.5499 9.5C13.5499 10.54 12.6999 11.38 11.6699 11.38Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVideo as IconComponentType).keywords = [
  "video",
  "tv",
  "television",
  "picture",
  "telecasting",
  "televised",
  "videotaping",
  "videotaped",
  "taping",
  "videotape"
];

export default IconVideo as IconComponentType;