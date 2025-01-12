import { FC } from 'react';

const IconGooglePlay: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5899 8.8L14.3699 12.02L4.78992 21.6L4.20992 21.89C3.49992 22.24 2.66992 21.73 2.66992 20.93V3.07002C2.66992 2.27002 3.49992 1.76 4.21992 2.11L17.5899 8.8Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M22.0694 12.95L17.5494 15.21L14.3594 12.02L17.5794 8.79999L22.0694 11.05C22.8594 11.44 22.8594 12.56 22.0694 12.95Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.56 15.21L4.79004 21.6L14.37 12.02L17.56 15.21Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.3698 12.02L4.75977 2.41003" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M22.0701 12.95L17.5601 15.2101L14.3701 12.0201L17.5901 8.80005L22.0701 11.05C22.8601 11.44 22.8601 12.56 22.0701 12.95Z" fill="currentColor" /><path d="M17.5902 8.79997L14.3702 12.02L4.7002 2.34998L17.5902 8.79997Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.3699 12.02L4.78992 21.6L4.21992 21.89C3.49992 22.24 2.66992 21.73 2.66992 20.93V3.07001C2.66992 2.27001 3.49992 1.76 4.21992 2.11L4.69992 2.35001L14.3699 12.02Z" fill="currentColor" /><path d="M17.56 15.21L4.79004 21.6L14.37 12.02L17.56 15.21Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0699 12.95L19.2899 14.34C19.0999 14.44 18.8699 14.4 18.7099 14.25L16.8399 12.38C16.6399 12.18 16.6399 11.87 16.8399 11.67L18.7399 9.76999C18.8899 9.61999 19.1299 9.57999 19.3199 9.67999L22.0699 11.06C22.8599 11.44 22.8599 12.56 22.0699 12.95Z" fill="none" /><path d="M16.9699 8.48999C17.2799 8.63999 17.3399 9.05001 17.0999 9.29001L15.4299 10.96L14.7199 11.67C14.5199 11.87 14.2099 11.87 14.0099 11.67L6.86989 4.53C6.46989 4.13 6.93989 3.48001 7.44989 3.73001L16.9699 8.48999Z" fill="none" /><path d="M2.66992 20.15V3.48002C2.66992 3.04002 3.19992 2.81001 3.51992 3.12001L12.2899 11.63C12.4999 11.83 12.4899 12.16 12.2799 12.36L3.50992 20.52C3.18992 20.82 2.66992 20.59 2.66992 20.15Z" fill="none" /><path d="M16.94 15.52L7.54999 20.22C7.03999 20.47 6.56999 19.82 6.96999 19.42L14.02 12.37C14.22 12.17 14.53 12.17 14.73 12.37L17.08 14.72C17.31 14.96 17.24 15.37 16.94 15.52Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGooglePlay as IconComponent).keywords = [
  "google",
  "play",
  "valley",
  "adsense",
  "adwords",
  "googe",
  "goole",
  "wikipedia",
  "yahoo",
  "youtube",
  "bing",
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

export default IconGooglePlay as IconComponent;