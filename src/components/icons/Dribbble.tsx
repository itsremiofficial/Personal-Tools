import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDribbble: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M18.5 4.79004C15.9 9.34004 10.89 11.95 5.66998 11.48L2.5 11.19" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.5 19.3698C8.1 14.8198 13.11 12.2098 18.33 12.6798L21.5 12.9698" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.62988 3L10.8099 6.95001C12.9399 9.59001 14.4499 12.66 15.2499 15.95L16.4599 20.94" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15.8797 20.9198C15.9097 21.0798 15.8197 21.2498 15.6697 21.3098C14.5297 21.7598 13.2997 21.9998 12.0097 21.9998C9.80974 21.9998 7.75974 21.2898 6.10974 20.0698C5.96974 19.9698 5.92974 19.7698 6.01974 19.6198C6.56974 18.6398 8.71974 15.4898 13.4697 13.7298C13.6497 13.6598 13.8497 13.7498 13.9097 13.9298C15.1097 17.1198 15.6697 19.8198 15.8797 20.9198Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M21.8196 13.89C21.3596 16.35 19.9796 18.49 18.0496 19.95C17.8396 20.11 17.5396 19.99 17.4896 19.74C17.2796 18.66 16.7696 16.33 15.7896 13.56C15.7196 13.35 15.8596 13.12 16.0796 13.09C18.5696 12.79 20.7496 13.27 21.5696 13.49C21.7396 13.55 21.8496 13.72 21.8196 13.89Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} fillRule="evenodd" clipRule="evenodd" d="M21.5902 11.8201C20.5702 11.6401 17.9702 11.2601 15.3102 11.5501C15.1502 11.5701 15.0102 11.4801 14.9402 11.3301C14.9002 11.2401 14.8702 11.1501 14.8302 11.0601C14.6702 10.6901 14.5002 10.3101 14.3302 9.94014C14.2402 9.76014 14.3302 9.54014 14.5102 9.46014C17.3102 8.25014 18.8702 6.69014 19.4802 5.99014C19.6302 5.82014 19.8902 5.83014 20.0302 6.01014C21.1802 7.54014 21.8902 9.41014 22.0002 11.4301C22.0102 11.6801 21.8102 11.8601 21.5902 11.8201Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M18.4397 4.79C17.9197 5.42 16.4597 6.92 13.6897 8.02C13.5297 8.09 13.3397 8.02 13.2497 7.86C11.9697 5.54 10.6097 3.59 9.97967 2.71C9.82967 2.49 9.94967 2.2 10.2097 2.15C10.7897 2.05 11.3897 2 12.0097 2C14.4297 2 16.6597 2.86 18.3897 4.3C18.5397 4.42 18.5597 4.64 18.4397 4.79Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.0198 8.83992C7.22976 9.78992 3.87976 9.91992 2.65976 9.93992C2.42976 9.93992 2.25976 9.71992 2.31976 9.49992C3.03976 6.69992 4.95976 4.35992 7.48976 3.06992C7.63976 2.98992 7.82976 3.03992 7.92976 3.17992C8.44976 3.89992 9.85976 5.92992 11.2398 8.31992C11.3498 8.51992 11.2498 8.77992 11.0198 8.83992Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} fillRule="evenodd" clipRule="evenodd" d="M12.92 11.5998C13.01 11.7898 12.9 12.0198 12.7 12.0898C8.27 13.5198 5.62 17.0698 4.82 18.2898C4.69 18.4898 4.41 18.4998 4.26 18.3198C2.85 16.5998 2 14.6298 2 12.2298V12.0498C2 11.8498 2.16 11.6898 2.36 11.6998C3.62 11.7498 7.73 11.5798 12 10.3498C12.16 10.2998 12.34 10.3798 12.41 10.5298C12.59 10.8898 12.76 11.2398 12.92 11.5998Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDribbble as IconComponentType).keywords = [
  "dribbble",
  "behance",
  "openweb",
  "sketchfab",
  "ning",
  "thingiverse",
  "facebook",
  "instagram",
  "fotki",
  "ryze"
];

export default IconDribbble as IconComponentType;