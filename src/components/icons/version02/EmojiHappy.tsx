import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconEmojiHappy: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.1699 9.75C16.9983 9.75 17.6699 9.07843 17.6699 8.25C17.6699 7.42157 16.9983 6.75 16.1699 6.75C15.3415 6.75 14.6699 7.42157 14.6699 8.25C14.6699 9.07843 15.3415 9.75 16.1699 9.75Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.16992 9.75C9.99835 9.75 10.6699 9.07843 10.6699 8.25C10.6699 7.42157 9.99835 6.75 9.16992 6.75C8.34149 6.75 7.66992 7.42157 7.66992 8.25C7.66992 9.07843 8.34149 9.75 9.16992 9.75Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.06992 13.3H16.2699C16.7699 13.3 17.1699 13.7 17.1699 14.2C17.1699 16.69 15.1599 18.7 12.6699 18.7C10.1799 18.7 8.16992 16.69 8.16992 14.2C8.16992 13.7 8.56992 13.3 9.06992 13.3Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path d="M16.17 10.13C17.2083 10.13 18.05 9.28829 18.05 8.25C18.05 7.2117 17.2083 6.37 16.17 6.37C15.1317 6.37 14.29 7.2117 14.29 8.25C14.29 9.28829 15.1317 10.13 16.17 10.13Z" fill="currentColor" /><path d="M9.17004 10.13C10.2083 10.13 11.05 9.28829 11.05 8.25C11.05 7.2117 10.2083 6.37 9.17004 6.37C8.13174 6.37 7.29004 7.2117 7.29004 8.25C7.29004 9.28829 8.13174 10.13 9.17004 10.13Z" fill="currentColor" /><path d="M16.2698 12.92H9.0698C8.3698 12.92 7.7998 13.49 7.7998 14.2C7.7998 16.89 9.9898 19.08 12.6798 19.08C15.3698 19.08 17.5598 16.89 17.5598 14.2C17.5498 13.5 16.9698 12.92 16.2698 12.92Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM9.16992 6.38C10.1999 6.38 11.0499 7.22 11.0499 8.26C11.0499 9.3 10.2099 10.14 9.16992 10.14C8.12992 10.14 7.28992 9.28 7.28992 8.25C7.28992 7.22 8.13992 6.38 9.16992 6.38ZM12.6699 19.08C9.97992 19.08 7.78992 16.89 7.78992 14.2C7.78992 13.5 8.35992 12.92 9.05992 12.92H16.2599C16.9599 12.92 17.5299 13.49 17.5299 14.2C17.5499 16.89 15.3599 19.08 12.6699 19.08ZM16.1699 10.12C15.1399 10.12 14.2899 9.28 14.2899 8.24C14.2899 7.2 15.1299 6.36 16.1699 6.36C17.2099 6.36 18.0499 7.2 18.0499 8.24C18.0499 9.28 17.1999 10.12 16.1699 10.12Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconEmojiHappy as IconComponentType).keywords = [
  "emoji",
  "happy",
  "emoticon",
  "reaction",
  "react",
  "emote",
  "smiley",
  "sticker",
  "emojipasta",
  "reaction gif",
  "hashflag",
  "pleased",
  "blissful",
  "content",
  "glad",
  "contented",
  "joyful",
  "euphoric",
  "joyous",
  "fortunate"
];

export default IconEmojiHappy as IconComponentType;