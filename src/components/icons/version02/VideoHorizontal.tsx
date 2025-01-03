import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconVideoHorizontal: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M3.18945 17.1104H22.1495" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M3.18945 7.11035H22.1495" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M7.64062 17.1104V21.4604" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 17.1104V21.9704" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M17.6406 17.1104V21.5204" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M7.64062 2.11035V6.46035" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 2.11035V6.97035" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 7.03027V18.0303" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M17.6406 2.11035V6.52035" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6699 7.81V16.19C22.6699 16.25 22.6699 16.31 22.6599 16.36C22.6599 16.9 22.5999 17.4 22.4899 17.86C22.0199 20.02 20.5799 21.42 18.3899 21.85C17.9199 21.95 17.4199 22 16.8899 22H8.38992C7.85992 21.99 7.35992 21.94 6.88992 21.84C4.73992 21.4 3.31992 20 2.84992 17.86C2.73992 17.4 2.67992 16.9 2.67992 16.36C2.66992 16.31 2.66992 16.25 2.66992 16.19V7.81C2.66992 7.3 2.70992 6.81 2.79992 6.36C3.21992 4.1 4.66992 2.62 6.88992 2.16C7.35992 2.05 7.85992 2 8.38992 2H16.8999C17.4299 2 17.9299 2.05 18.3899 2.15C20.6499 2.59 22.1199 4.08 22.5399 6.36C22.6299 6.81 22.6699 7.3 22.6699 7.81Z" fill="currentColor" /><path d="M13.4199 7.86V16.36H22.6599C22.6599 16.9 22.5999 17.4 22.4899 17.86H18.3899V21.85C17.9199 21.95 17.4199 22 16.8899 22V17.86H13.4199V22H11.9199V17.86H8.38992V22C7.85992 21.99 7.35992 21.94 6.88992 21.84V17.86H2.84992C2.73992 17.4 2.67992 16.9 2.67992 16.36H11.9199V7.86H2.66992V7.81C2.66992 7.3 2.70992 6.81 2.79992 6.36H6.90992C6.89992 6.32 6.88992 6.28 6.88992 6.24V2.16C7.35992 2.05 7.85992 2 8.38992 2V6.24C8.38992 6.28 8.36992 6.32 8.35992 6.36H11.9199V2H13.4199V6.36H16.8899V2H16.8999C17.4299 2 17.9299 2.05 18.3899 2.15V6.33C18.3899 6.34 18.3799 6.35 18.3799 6.36H22.5399C22.6299 6.81 22.6699 7.3 22.6699 7.81V7.86H13.4199Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9199 7.85999H2.66992V16.19C2.66992 16.25 2.66992 16.31 2.67992 16.36H11.9199V7.85999Z" fill="currentColor" /><path d="M8.36035 6.36H11.9204V2H8.39035V6.24C8.39035 6.28 8.37035 6.32 8.36035 6.36Z" fill="currentColor" /><path d="M6.8898 6.24V2.16C4.6698 2.62 3.2198 4.1 2.7998 6.36H6.9098C6.8998 6.32 6.8898 6.28 6.8898 6.24Z" fill="currentColor" /><path d="M16.8899 2H13.4199V6.36H16.8899V2Z" fill="currentColor" /><path d="M18.3799 6.35999H22.5399C22.1199 4.07999 20.6499 2.58999 18.3899 2.14999V6.32999C18.3899 6.33999 18.3799 6.34999 18.3799 6.35999Z" fill="currentColor" /><path d="M18.3896 21.85C20.5796 21.42 22.0196 20.02 22.4896 17.86H18.3896V21.85Z" fill="currentColor" /><path d="M16.8899 17.86H13.4199V22H16.8899V17.86Z" fill="currentColor" /><path d="M13.4199 16.36H22.6599C22.6699 16.31 22.6699 16.25 22.6699 16.19V7.85999H13.4199V16.36Z" fill="currentColor" /><path d="M11.9196 17.86H8.38965V22H11.9196V17.86Z" fill="currentColor" /><path d="M2.84961 17.86C3.31961 20 4.73961 21.4 6.88961 21.84V17.86H2.84961Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVideoHorizontal as IconComponentType).keywords = [
  "video",
  "horizontal",
  "tv",
  "television",
  "picture",
  "telecasting",
  "televised",
  "videotaping",
  "videotaped",
  "taping",
  "videotape",
  "level",
  "flat",
  "crosswise",
  "swimming",
  "naiant",
  "cross-sectional",
  "transverse",
  "transversal",
  "landscape"
];

export default IconVideoHorizontal as IconComponentType;