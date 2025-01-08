import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDropbox: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 5L8.22992 2L2.66992 6L7.10992 9L12.6699 5Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 5L17.1099 2L22.6699 6L18.2299 9L12.6699 5Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 14L8.22992 17L2.66992 13L7.10992 10L12.6699 14Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 14L17.1099 17L22.6699 13L18.2299 10L12.6699 14Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19.6699 15.5V18.77L13.0899 21.81C12.8199 21.93 12.5199 21.93 12.2499 21.81L5.66992 18.77V15.5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M12.6698 6.00005L7.10977 10.0001L3.85977 7.80006C3.27977 7.41006 3.26979 6.57006 3.83979 6.16006L7.66977 3.40005C8.00977 3.16005 8.46979 3.15005 8.80979 3.38005L12.6698 6.00005Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.4799 7.80005L18.2299 10L12.6699 6.00005L16.5299 3.39005C16.8799 3.16005 17.3299 3.16005 17.6699 3.41005L21.4999 6.17005C22.0699 6.57005 22.0599 7.41005 21.4799 7.80005Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12.6698 14L8.22984 17L5.66984 15.16L3.82985 13.84C3.26985 13.43 3.27983 12.59 3.84983 12.2L7.09983 10L12.6698 14Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.4799 12.2C22.0599 12.59 22.0699 13.43 21.4999 13.84L19.6699 15.16L17.1099 17L12.6699 14L18.2299 10L21.4799 12.2Z" fill="currentColor" /><path d="M19.6699 15.16V18.13C19.6699 18.52 19.4399 18.87 19.0899 19.04L13.0899 21.81C12.8199 21.93 12.5199 21.93 12.2499 21.81L6.24991 19.04C5.89991 18.88 5.66992 18.52 5.66992 18.13V15.16L8.22992 17L12.6699 14L17.1099 17L19.6699 15.16Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6698 5.99999L7.10977 9.99999L3.85977 7.79998C3.27977 7.40998 3.26979 6.57 3.83979 6.16L7.66977 3.39999C8.00977 3.15999 8.46979 3.15 8.80979 3.38L12.6698 5.99999Z" fill="none" /><path d="M21.4799 7.8L18.2299 10L12.6699 6.00001L16.5299 3.39002C16.8799 3.16002 17.3299 3.16001 17.6699 3.41001L21.4999 6.17002C22.0699 6.57002 22.0599 7.41 21.4799 7.8Z" fill="none" /><path d="M12.6698 14L8.22984 17L5.66984 15.16L3.82985 13.84C3.26985 13.43 3.27983 12.59 3.84983 12.2L7.09983 10L12.6698 14Z" fill="none" /><path d="M21.4802 12.2C22.0602 12.59 22.0702 13.43 21.5002 13.84L19.6602 15.16L17.1002 17L12.6602 14L18.2202 10L21.4802 12.2Z" fill="none" /><path d="M19.3499 17.34C19.4799 17.24 19.6699 17.34 19.6699 17.5V18.23C19.6699 18.62 19.4399 18.97 19.0899 19.14L13.0899 21.91C12.8199 22.03 12.5199 22.03 12.2499 21.91L6.24991 19.14C5.89991 18.97 5.66992 18.62 5.66992 18.23V17.5C5.66992 17.34 5.84993 17.24 5.98993 17.34L7.91992 18.73C8.08992 18.85 8.31993 18.86 8.48993 18.74L12.3899 16.1C12.5599 15.99 12.7799 15.99 12.9499 16.1L16.8499 18.74C17.0199 18.86 17.2499 18.85 17.4199 18.73L19.3499 17.34Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDropbox as IconComponentType).keywords = [
  "dropbox",
  "safebox",
  "letterbox",
  "drop",
  "post box",
  "lockerbox",
  "mailbox",
  "box file",
  "drop safe",
  "po box"
];

export default IconDropbox as IconComponentType;