import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCloudNotif: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5704 13.96C22.8404 15.63 22.3704 17.42 20.9404 18.68C19.9504 19.59 18.6504 20.09 17.3004 20.08H6.21035C1.54035 19.74 1.53035 12.94 6.21035 12.6H6.26035C4.07035 6.46998 9.76035 2.86998 14.0504 4.24998" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.92977 13.0101C7.40977 12.7501 6.83977 12.6101 6.25977 12.6001" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22.6396 8.5C22.6396 9.6 22.1296 10.59 21.3196 11.23C20.7296 11.71 19.9596 12 19.1396 12C17.2096 12 15.6396 10.43 15.6396 8.5C15.6396 7.54 16.0296 6.67 16.6696 6.04V6.03C17.2996 5.39 18.1796 5 19.1396 5C21.0696 5 22.6396 6.57 22.6396 8.5Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.24 11.0099C20.48 10.0999 19.48 9.48994 18.34 9.23994C18.09 8.08994 17.63 7.08994 16.98 6.26994C16.96 6.23994 16.94 6.20994 16.92 6.18994C14.73 3.53994 11.14 3.54994 8.71996 4.91994C6.64996 6.09994 4.88996 8.58994 5.80996 12.1599C3.68996 12.6799 2.70996 14.5299 2.70996 16.1999C2.70996 18.0699 3.92996 20.1799 6.65996 20.3699H16.96C16.97 20.3699 16.99 20.3699 17 20.3699C18.42 20.3699 19.77 19.8499 20.81 18.8899C23.33 16.6899 23 13.0799 21.24 11.0099Z" fill="currentColor" /><path d="M21.9397 8.76001C21.9397 9.78001 21.4697 10.7 20.7097 11.3C20.1597 11.75 19.4497 12.02 18.6797 12.02C16.8897 12.02 15.4297 10.56 15.4297 8.77001C15.4297 7.88001 15.7897 7.07001 16.3897 6.48001V6.47001C16.9797 5.88001 17.7897 5.51001 18.6797 5.51001C20.4797 5.51001 21.9397 6.97001 21.9397 8.76001Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9397 8.76001C21.9397 9.78001 21.4697 10.7 20.7097 11.3C20.1597 11.75 19.4497 12.02 18.6797 12.02C16.8897 12.02 15.4297 10.56 15.4297 8.77001C15.4297 7.88001 15.7897 7.07001 16.3897 6.48001V6.47001C16.9797 5.88001 17.7897 5.51001 18.6797 5.51001C20.4797 5.51001 21.9397 6.97001 21.9397 8.76001Z" fill="currentColor" /><path d="M20.8497 18.7301C19.7997 19.6901 18.4497 20.2201 17.0197 20.2201H6.63969C3.89969 20.0201 2.67969 17.9101 2.67969 16.0301C2.67969 14.3501 3.64969 12.4901 5.77969 11.9701C4.84969 8.39009 6.62969 5.89009 8.70969 4.70009C10.7697 3.53009 13.6697 3.34009 15.8497 4.95009C15.6597 5.09009 15.4897 5.24009 15.3197 5.41009L14.8897 5.86009V5.92009C14.2697 6.73009 13.9297 7.72009 13.9297 8.76009C13.9297 11.3801 16.0697 13.5101 18.6897 13.5101C19.7697 13.5101 20.8197 13.1401 21.6397 12.4701C21.7897 12.3501 21.9397 12.2201 22.0697 12.0801C23.0597 14.1601 22.9197 16.9201 20.8497 18.7301Z" fill="currentColor" /></svg> 
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