import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCloudNotif: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.8995 13.9602C22.1695 15.6302 21.6995 17.4202 20.2695 18.6802C19.2795 19.5902 17.9795 20.0902 16.6295 20.0802H5.53945C0.869454 19.7402 0.859454 12.9402 5.53945 12.6002H5.58945C3.39945 6.47023 9.08945 2.87022 13.3795 4.25022" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.25984 13.0101C6.73984 12.7501 6.16984 12.6101 5.58984 12.6001" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M21.9707 8.5C21.9707 9.6 21.4607 10.59 20.6507 11.23C20.0607 11.71 19.2907 12 18.4707 12C16.5407 12 14.9707 10.43 14.9707 8.5C14.9707 7.54 15.3607 6.67 16.0007 6.04V6.03C16.6307 5.39 17.5107 5 18.4707 5C20.4007 5 21.9707 6.57 21.9707 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.5691 11.0099C19.8091 10.0999 18.8091 9.48994 17.6691 9.23994C17.4191 8.08994 16.9591 7.08994 16.3091 6.26994C16.2891 6.23994 16.2691 6.20994 16.2491 6.18994C14.0591 3.53994 10.4691 3.54994 8.04906 4.91994C5.97906 6.09994 4.21906 8.58994 5.13906 12.1599C3.01906 12.6799 2.03906 14.5299 2.03906 16.1999C2.03906 18.0699 3.25906 20.1799 5.98906 20.3699H16.2891C16.2991 20.3699 16.3191 20.3699 16.3291 20.3699C17.7491 20.3699 19.0991 19.8499 20.1391 18.8899C22.6591 16.6899 22.3291 13.0799 20.5691 11.0099Z" fill="currentColor" /><path d="M21.2698 8.76001C21.2698 9.78001 20.7998 10.7 20.0398 11.3C19.4898 11.75 18.7798 12.02 18.0098 12.02C16.2198 12.02 14.7598 10.56 14.7598 8.77001C14.7598 7.88001 15.1198 7.07001 15.7198 6.48001V6.47001C16.3098 5.88001 17.1198 5.51001 18.0098 5.51001C19.8098 5.51001 21.2698 6.97001 21.2698 8.76001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCloudNotif as IconComponentType).keywords = [
  "cloud",
  "notif",
  "fog",
  "mist",
  "befog",
  "haze over",
  "becloud",
  "dapple",
  "mottle",
  "sully",
  "defile",
  "buzzer",
  "sharpie",
  "freq",
  "snout",
  "deets",
  "sticky note",
  "goss",
  "nooz",
  "bullfuck"
];

export default IconCloudNotif as IconComponentType;