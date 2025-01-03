import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconNotificationCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.6699 8C21.3268 8 22.6699 6.65685 22.6699 5C22.6699 3.34315 21.3268 2 19.6699 2C18.0131 2 16.6699 3.34315 16.6699 5C16.6699 6.65685 18.0131 8 19.6699 8Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M14.6899 2.2C14.0299 2.07 13.3599 2 12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 11.32 22.5999 10.65 22.4699 10.01" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.6699 8C21.3268 8 22.6699 6.65685 22.6699 5C22.6699 3.34315 21.3268 2 19.6699 2C18.0131 2 16.6699 3.34315 16.6699 5C16.6699 6.65685 18.0131 8 19.6699 8Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M19.6699 9.5C17.1899 9.5 15.1699 7.48 15.1699 5C15.1699 4.09 15.4399 3.25 15.9099 2.55C14.8899 2.2 13.7999 2 12.6699 2C7.15992 2 2.66992 6.49 2.66992 12C2.66992 17.51 7.15992 22 12.6699 22C18.1799 22 22.6699 17.51 22.6699 12C22.6699 10.87 22.4699 9.78 22.1199 8.76C21.4199 9.23 20.5799 9.5 19.6699 9.5Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.6699 8C21.3268 8 22.6699 6.65685 22.6699 5C22.6699 3.34315 21.3268 2 19.6699 2C18.0131 2 16.6699 3.34315 16.6699 5C16.6699 6.65685 18.0131 8 19.6699 8Z" fill="currentColor" /><path d="M18.4601 9.33976C16.9501 8.93976 15.7301 7.71976 15.3301 6.20976C15.0701 5.24976 15.1301 4.32976 15.4201 3.50976C15.6201 2.94976 15.2801 2.32976 14.7001 2.20976C13.2301 1.89976 11.6401 1.90976 9.98013 2.35976C6.20013 3.41976 3.31013 6.68976 2.77013 10.5798C1.85013 17.1998 7.46013 22.8098 14.0801 21.8998C17.9801 21.3598 21.2401 18.4698 22.2901 14.6798C22.7501 13.0298 22.7601 11.4398 22.4501 9.95976C22.3301 9.37976 21.7101 9.04976 21.1501 9.23976C20.3401 9.52976 19.4201 9.58976 18.4601 9.33976Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconNotificationCircle as IconComponentType).keywords = [
  "notification",
  "circle",
  "apprisal",
  "notice",
  "telling",
  "presentment",
  "notifying",
  "notifier",
  "notify",
  "denunciation",
  "announcement",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle"
];

export default IconNotificationCircle as IconComponentType;