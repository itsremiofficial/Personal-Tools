import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCardRemove: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.90039 10.0298H21.9004" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.4604 20.53H6.35034C2.80034 20.53 1.90039 19.65 1.90039 16.14V7.92004C1.90039 4.74004 2.64036 3.72004 5.43036 3.56004C5.71036 3.55004 6.02034 3.54004 6.35034 3.54004H17.4604C21.0104 3.54004 21.9103 4.42004 21.9103 7.93004V12.34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.9004 22.0298C20.1095 22.0298 21.9004 20.2389 21.9004 18.0298C21.9004 15.8206 20.1095 14.0298 17.9004 14.0298C15.6913 14.0298 13.9004 15.8206 13.9004 18.0298C13.9004 20.2389 15.6913 22.0298 17.9004 22.0298Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M18.9694 19.1503L16.8594 17.0303" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.9501 17.0601L16.8301 19.1701" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M5.90039 16.0298H9.90039" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.9004 15.0298C16.6904 15.0298 14.9004 16.8198 14.9004 19.0298C14.9004 21.2398 16.6904 23.0298 18.9004 23.0298C21.1104 23.0298 22.9004 21.2398 22.9004 19.0298C22.9004 16.8198 21.1104 15.0298 18.9004 15.0298ZM20.5004 20.6798C20.3504 20.8298 20.1603 20.8998 19.9703 20.8998C19.7803 20.8998 19.5904 20.8298 19.4404 20.6798L18.9103 20.1498L18.3604 20.6998C18.2104 20.8498 18.0204 20.9198 17.8304 20.9198C17.6404 20.9198 17.4504 20.8498 17.3004 20.6998C17.0104 20.4098 17.0104 19.9298 17.3004 19.6398L17.8503 19.0898L17.3204 18.5598C17.0304 18.2698 17.0304 17.7898 17.3204 17.4998C17.6104 17.2098 18.0904 17.2098 18.3804 17.4998L18.9103 18.0298L19.4103 17.5298C19.7003 17.2398 20.1803 17.2398 20.4703 17.5298C20.7603 17.8198 20.7603 18.2998 20.4703 18.5898L19.9703 19.0898L20.5004 19.6198C20.7904 19.9098 20.7904 20.3898 20.5004 20.6798Z" fill="currentColor" /><path d="M22 7.5399V8.9999H2V7.5399C2 5.2499 3.86002 3.3999 6.15002 3.3999H17.85C20.14 3.3999 22 5.2499 22 7.5399Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M2 9V16.46C2 18.75 3.85001 20.6 6.14001 20.6H12.4C12.98 20.6 13.48 20.11 13.43 19.53C13.29 18 13.78 16.34 15.14 15.02C15.7 14.47 16.39 14.05 17.14 13.81C18.39 13.41 19.6 13.46 20.67 13.82C21.32 14.04 22 13.57 22 12.88V9H2ZM8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25Z" fill="currentColor" /><path d="M8.75 16.5C8.75 16.91 8.41 17.25 8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCardRemove as IconComponentType).keywords = [
  "card",
  "remove",
  "scorecard",
  "batting order",
  "identity card",
  "visiting card",
  "calling card",
  "lineup",
  "poster",
  "placard",
  "tease",
  "take out",
  "get rid of",
  "take away",
  "move out",
  "bump off",
  "slay",
  "murder",
  "take",
  "transfer"
];

export default IconCardRemove as IconComponentType;