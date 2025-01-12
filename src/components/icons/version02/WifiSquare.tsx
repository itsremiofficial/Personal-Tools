import { FC } from 'react';

const IconWifiSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M6.66992 9.96001C10.2999 7.15001 15.0399 7.15001 18.6699 9.96001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.26953 13.05C10.9395 10.99 14.4095 10.99 17.0795 13.05" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.4697 16.14C11.7997 15.11 13.5397 15.11 14.8697 16.14" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.48992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.82 4.83992 21.99 8.47992 21.99H16.8499C20.4899 21.99 22.6599 19.82 22.6599 16.18V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path d="M18.6695 10.71C18.5095 10.71 18.3495 10.66 18.2095 10.55C14.8395 7.95 10.4895 7.95 7.12946 10.55C6.79946 10.8 6.32946 10.74 6.07946 10.42C5.82946 10.09 5.88946 9.62 6.20946 9.37C10.1295 6.34 15.1995 6.34 19.1295 9.37C19.4595 9.62 19.5195 10.09 19.2595 10.42C19.1195 10.61 18.8895 10.71 18.6695 10.71Z" fill="currentColor" /><path d="M17.0693 13.8C16.9093 13.8 16.7493 13.75 16.6093 13.64C14.2093 11.79 11.1193 11.79 8.71931 13.64C8.38931 13.89 7.91931 13.83 7.66931 13.51C7.41931 13.19 7.47931 12.71 7.79931 12.46C10.7493 10.18 14.5693 10.18 17.5193 12.46C17.8493 12.71 17.9093 13.18 17.6493 13.51C17.5193 13.7 17.2993 13.8 17.0693 13.8Z" fill="currentColor" /><path d="M14.8695 16.89C14.7095 16.89 14.5495 16.84 14.4095 16.73C13.3495 15.91 11.9795 15.91 10.9195 16.73C10.5895 16.98 10.1195 16.92 9.8695 16.6C9.6195 16.27 9.67951 15.8 9.99951 15.55C11.5895 14.32 13.7295 14.32 15.3195 15.55C15.6495 15.8 15.7095 16.27 15.4495 16.6C15.3195 16.79 15.0995 16.89 14.8695 16.89Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM15.4599 16.6C15.3099 16.79 15.0899 16.89 14.8699 16.89C14.7099 16.89 14.5499 16.84 14.4099 16.73C13.3499 15.91 11.9799 15.91 10.9199 16.73C10.5899 16.98 10.1199 16.92 9.86992 16.6C9.61992 16.27 9.67992 15.8 9.99992 15.55C11.5899 14.32 13.7299 14.32 15.3199 15.55C15.6599 15.8 15.7199 16.27 15.4599 16.6ZM17.6699 13.51C17.5199 13.7 17.2999 13.8 17.0799 13.8C16.9199 13.8 16.7599 13.75 16.6199 13.64C14.2199 11.79 11.1299 11.79 8.72992 13.64C8.39992 13.9 7.92992 13.84 7.66992 13.51C7.40992 13.18 7.47992 12.71 7.79992 12.46C10.7499 10.18 14.5699 10.18 17.5199 12.46C17.8599 12.71 17.9199 13.18 17.6699 13.51ZM19.2599 10.42C19.1099 10.61 18.8899 10.71 18.6699 10.71C18.5099 10.71 18.3499 10.66 18.2099 10.55C14.8399 7.95 10.4899 7.95 7.12992 10.55C6.79992 10.8 6.32992 10.74 6.07992 10.42C5.82992 10.09 5.88992 9.62 6.20992 9.37C10.1299 6.34 15.1999 6.34 19.1299 9.37C19.4599 9.62 19.5199 10.09 19.2599 10.42Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWifiSquare as IconComponent).keywords = [
  "wifi",
  "square",
  "wi-fi",
  "wireless",
  "wlan",
  "bluetooth",
  "ethernet",
  "broadband",
  "internet",
  "airconditioning",
  "modem",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest"
];

export default IconWifiSquare as IconComponent;