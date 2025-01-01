import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconAlarm: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 22H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 6C7.03 6 3 10.03 3 15V22H21V15C21 10.03 16.97 6 12 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 2V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4 4L5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20 4L19 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.75 22C22.75 22.41 22.41 22.75 22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.59 22.75 22Z" fill="currentColor" /><path d="M21 15V21.25H3V15C3 10.03 7.03 6 12 6C16.97 6 21 10.03 21 15Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12 3.75C11.59 3.75 11.25 3.41 11.25 3V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V3C12.75 3.41 12.41 3.75 12 3.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M4.99945 5.74994C4.80945 5.74994 4.61945 5.67994 4.46945 5.52994L3.46945 4.52994C3.17945 4.23994 3.17945 3.75994 3.46945 3.46994C3.75945 3.17994 4.23945 3.17994 4.52945 3.46994L5.52945 4.46994C5.81945 4.75994 5.81945 5.23994 5.52945 5.52994C5.37945 5.67994 5.18945 5.74994 4.99945 5.74994Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.9995 5.74994C18.8095 5.74994 18.6195 5.67994 18.4695 5.52994C18.1795 5.23994 18.1795 4.75994 18.4695 4.46994L19.4695 3.46994C19.7595 3.17994 20.2395 3.17994 20.5295 3.46994C20.8195 3.75994 20.8195 4.23994 20.5295 4.52994L19.5295 5.52994C19.3795 5.67994 19.1895 5.74994 18.9995 5.74994Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAlarm as IconComponentType).keywords = [
  "alarm",
  "alarum",
  "alarm system",
  "alert",
  "consternation",
  "alarm clock",
  "horrify",
  "appall",
  "dismay",
  "appal"
];

export default IconAlarm as IconComponentType;