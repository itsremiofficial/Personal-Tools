import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDirectNotification: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M1.98047 13.0002H5.77047C6.53047 13.0002 7.22047 13.4302 7.56047 14.1102L8.45047 15.9002C9.00047 17.0002 10.0005 17.0002 10.2405 17.0002H13.7705C14.5305 17.0002 15.2205 16.5702 15.5605 15.8902L16.4505 14.1002C16.7905 13.4202 17.4805 12.9902 18.2405 12.9902H21.9805" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" fill="currentColor" /><path d="M20.34 12.72H17.03C16.1 12.72 15.27 13.24 14.85 14.06L14.05 15.64C13.86 16.02 13.48 16.25 13.06 16.25H9.95C9.66 16.25 9.23 16.19 8.96 15.63L8.17 14.06C7.75 13.23 6.92 12.71 5.99 12.71H2.66C2.3 12.72 2 13.02 2 13.38V16.47C2 19.94 4.07 22 7.53 22H15.49C18.75 22 20.76 20.21 21 17.04V13.38C21 13.02 20.7 12.72 20.34 12.72Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M19 9.5C16.52 9.5 14.5 7.48 14.5 5C14.5 4.28 14.69 3.61 14.99 3H7.52C4.07 3 2 5.06 2 8.52V16.47C2 19.94 4.07 22 7.52 22H15.47C18.93 22 20.99 19.94 20.99 16.48V9.01C20.39 9.31 19.72 9.5 19 9.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDirectNotification as IconComponentType).keywords = [
  "direct",
  "notification",
  "straightforward",
  "directly",
  "forthright",
  "plainspoken",
  "man-to-man",
  "straight",
  "frank",
  "free-spoken",
  "outspoken",
  "apprisal",
  "notice",
  "telling",
  "presentment",
  "notifying",
  "notifier",
  "notify",
  "denunciation",
  "announcement"
];

export default IconDirectNotification as IconComponentType;