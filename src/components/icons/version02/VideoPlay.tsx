import { FC } from 'react';

const IconVideoPlay: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M3.18945 7.10999H22.1495" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M9.18945 2.10999V6.96999" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M16.1504 2.10999V6.51999" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.4199 14.45V13.25C10.4199 11.71 11.5099 11.08 12.8399 11.85L13.8799 12.45L14.9199 13.05C16.2499 13.82 16.2499 15.08 14.9199 15.85L13.8799 16.45L12.8399 17.05C11.5099 17.82 10.4199 17.19 10.4199 15.65V14.45V14.45Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6699 7.81V16.19C22.6699 19.83 20.4999 22 16.8599 22H8.47992C4.83992 22 2.66992 19.83 2.66992 16.19V7.81C2.66992 7.3 2.70992 6.81 2.79992 6.36C3.30992 3.61 5.33992 2.01 8.43992 2H16.8999C19.9999 2.01 22.0299 3.61 22.5399 6.36C22.6299 6.81 22.6699 7.3 22.6699 7.81Z" fill="currentColor" /><path d="M22.6699 7.81V7.86H2.66992V7.81C2.66992 7.3 2.70992 6.81 2.79992 6.36H8.43992V2H9.93992V6.36H15.3999V2H16.8999V6.36H22.5399C22.6299 6.81 22.6699 7.3 22.6699 7.81Z" fill="currentColor" /><path d="M15.11 12.72L13.03 11.52C12.26 11.08 11.52 11.02 10.94 11.35C10.36 11.68 10.04 12.36 10.04 13.24V15.64C10.04 16.52 10.36 17.2 10.94 17.53C11.19 17.67 11.47 17.74 11.76 17.74C12.16 17.74 12.59 17.61 13.03 17.36L15.11 16.16C15.88 15.72 16.3 15.1 16.3 14.43C16.3 13.76 15.87 13.17 15.11 12.72Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3995 2H9.93945V6.36H15.3995V2Z" fill="currentColor" /><path d="M16.9004 2V6.36H22.5404C22.0304 3.61 20.0004 2.01 16.9004 2Z" fill="currentColor" /><path d="M2.66992 7.85999V16.19C2.66992 19.83 4.83992 22 8.47992 22H16.8599C20.4999 22 22.6699 19.83 22.6699 16.19V7.85999H2.66992ZM15.1099 16.18L13.0299 17.38C12.5899 17.63 12.1599 17.76 11.7599 17.76C11.4599 17.76 11.1899 17.69 10.9399 17.55C10.3599 17.22 10.0399 16.54 10.0399 15.66V13.26C10.0399 12.38 10.3599 11.7 10.9399 11.37C11.5199 11.03 12.2599 11.09 13.0299 11.54L15.1099 12.74C15.8799 13.18 16.2999 13.8 16.2999 14.47C16.2999 15.14 15.8699 15.73 15.1099 16.18Z" fill="currentColor" /><path d="M8.4398 2C5.3398 2.01 3.3098 3.61 2.7998 6.36H8.4398V2Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVideoPlay as IconComponent).keywords = [
  "video",
  "play",
  "tv",
  "television",
  "picture",
  "telecasting",
  "televised",
  "videotaping",
  "videotaped",
  "taping",
  "videotape",
  "frolic",
  "fun",
  "gambol",
  "caper",
  "romp",
  "toy",
  "make-believe",
  "pretend",
  "dally"
];

export default IconVideoPlay as IconComponent;