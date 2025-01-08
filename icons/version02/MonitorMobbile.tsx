import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMonitorMobbile: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6699 16.95H6.87992C3.50992 16.95 2.66992 16.11 2.66992 12.74V6.74003C2.66992 3.37003 3.50992 2.53003 6.87992 2.53003H17.4099C20.7799 2.53003 21.6199 3.37003 21.6199 6.74003" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M10.6699 21.4699V16.95" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2.66992 12.95H10.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M7.41016 21.47H10.6702" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6702 12.8001V18.5101C22.6702 20.8801 22.0802 21.4701 19.7102 21.4701H16.1602C13.7902 21.4701 13.2002 20.8801 13.2002 18.5101V12.8001C13.2002 10.4301 13.7902 9.84009 16.1602 9.84009H19.7102C22.0802 9.84009 22.6702 10.4301 22.6702 12.8001Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.9144 18.25H17.9234" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17.4697 2H6.87969C4.55969 2 2.67969 3.88 2.67969 6.19V12.37V12.56C2.67969 14.88 4.55969 16.75 6.86969 16.75H10.4697C11.0197 16.75 11.4697 17.2 11.4697 17.75V18.57C11.4697 19.12 11.0197 19.57 10.4697 19.57H8.21969C7.82969 19.57 7.50969 19.89 7.50969 20.28C7.50969 20.67 7.82969 20.99 8.21969 20.99H16.1497C16.5397 20.99 16.8597 20.67 16.8597 20.28C16.8597 19.89 16.5397 19.57 16.1497 19.57H13.8997C13.3497 19.57 12.8997 19.12 12.8997 18.57V17.75C12.8997 17.2 13.3497 16.75 13.8997 16.75H17.4697C19.7897 16.75 21.6597 14.87 21.6597 12.56V12.37V6.19C21.6597 3.88 19.7797 2 17.4697 2Z" fill="currentColor" /><path d="M20.3102 9.5H15.0202C13.2902 9.5 12.6602 10.13 12.6602 11.88V19.61C12.6602 21.37 13.2802 21.99 15.0202 21.99H20.3102C22.0402 21.99 22.6702 21.36 22.6702 19.61V11.88C22.6702 10.12 22.0502 9.5 20.3102 9.5ZM17.6702 20.32C17.0602 20.32 16.5702 19.83 16.5702 19.22C16.5702 18.61 17.0602 18.12 17.6702 18.12C18.2802 18.12 18.7702 18.61 18.7702 19.22C18.7702 19.83 18.2802 20.32 17.6702 20.32Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.7703 19.2201C18.7703 19.8301 18.2803 20.3201 17.6703 20.3201C17.0603 20.3201 16.5703 19.8301 16.5703 19.2201C16.5703 18.6101 17.0603 18.1201 17.6703 18.1201C18.2803 18.1201 18.7703 18.6201 18.7703 19.2201Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6599 9.71C21.3199 9.57 20.8699 9.5 20.3099 9.5H15.0299C13.2899 9.5 12.6699 10.12 12.6699 11.88V19.62C12.6699 20.2 12.7399 20.65 12.8899 21C13.1999 21.72 13.8599 22 15.0299 22H20.3099C22.0499 22 22.6699 21.37 22.6699 19.62V11.88C22.6699 10.69 22.3899 10.02 21.6599 9.71ZM18.6699 19.75H16.6699C16.6499 19.75 16.6199 19.75 16.5999 19.74C16.4499 19.73 16.3199 19.68 16.2099 19.58C16.0299 19.45 15.9199 19.24 15.9199 19C15.9199 18.59 16.2599 18.25 16.6699 18.25H18.6699C19.0799 18.25 19.4199 18.59 19.4199 19C19.4199 19.41 19.0799 19.75 18.6699 19.75Z" fill="currentColor" /><path d="M21.6597 6.19V7C21.6597 7.55 21.2097 8 20.6597 8H15.0297C12.4697 8 11.1697 9.31 11.1697 11.88V21C11.1697 21.55 10.7197 22 10.1697 22H8.21969C7.81969 22 7.49969 21.68 7.49969 21.29C7.49969 20.89 7.81969 20.58 8.21969 20.58H10.1697V16.75H6.66969C4.44969 16.64 2.67969 14.81 2.67969 12.56V6.19C2.67969 3.88 4.55969 2 6.87969 2H17.4697C19.7797 2 21.6597 3.88 21.6597 6.19Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMonitorMobbile as IconComponentType).keywords = [
  "monitor",
  "mobbile",
  "ride herd on",
  "supervise",
  "proctor",
  "reminder",
  "admonisher",
  "varan",
  "monitor lizard",
  "supervised",
  "manage"
];

export default IconMonitorMobbile as IconComponentType;