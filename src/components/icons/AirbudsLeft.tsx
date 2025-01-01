import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconAirbudsLeft: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 18.6667V19.5C2 20.8807 3.11929 22 4.5 22C5.88071 22 7 20.8807 7 19.5V18.6667M2 18.6667V7.625L2.00007 7.55936C2.01591 4.49563 4.49563 2.01591 7.55936 2.00007L7.625 2L7.66438 2.00004C9.50262 2.00954 10.9905 3.49738 11 5.33562L11 5.375V8C11 9.65685 9.65685 11 8 11C7.44772 11 7 11.4477 7 12V18.6667M2 18.6667H7" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M8 5V8" stroke="currentColor" strokeWidth="1.67647" strokeLinecap="round" /><circle opacity={duotone ? "0.5" : "1"} cx="5.5" cy="5.5" r="5.5" transform="matrix(-1 0 0 1 21 11)" stroke="currentColor" strokeWidth={width} /><path d="M14 14V19H17" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.5" : "1"} d="M14.0008 5.1001C15.9599 5.49778 17.5031 7.04095 17.9008 9.00008" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.38235 22C3.06662 22 2 20.8807 2 19.5H6.76471C6.76471 20.8807 5.69809 22 4.38235 22Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11 7.88889V5.54167C11 5.34832 11 5.25148 10.9962 5.16977C10.916 3.45743 9.61116 2.08814 7.97939 2.00402C7.90151 2 7.80934 2 7.625 2C7.31777 2 7.16415 2 7.03435 2.00669C4.31474 2.1469 2.13998 4.42905 2.00638 7.28296C2 7.41917 2 7.58038 2 7.90278V17.8333H6.76471V12.3333C6.76471 11.7197 7.23876 11.2222 7.82353 11.2222C9.57785 11.2222 11 9.72984 11 7.88889ZM9.32353 5.125C9.32353 4.66476 8.98774 4.29167 8.57353 4.29167C8.15932 4.29167 7.82353 4.66476 7.82353 5.125V7.90278C7.82353 8.36302 8.15932 8.73611 8.57353 8.73611C8.98774 8.73611 9.32353 8.36302 9.32353 7.90278V5.125Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path d="M16.5 21.9998C13.4624 21.9998 11 19.5373 11 16.4998C11 13.4622 13.4624 10.9998 16.5 10.9998C19.5376 10.9998 22 13.4622 22 16.4998C22 19.5373 19.5376 21.9998 16.5 21.9998Z" fill="currentColor" /></g><path d="M15.25 13C15.6642 13 16 13.3358 16 13.75V18H18.25C18.6642 18 19 18.3358 19 18.75C19 19.1642 18.6642 19.5 18.25 19.5H15.25C14.8358 19.5 14.5 19.1642 14.5 18.75V13.75C14.5 13.3358 14.8358 13 15.25 13Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path fillRule="evenodd" clipRule="evenodd" d="M13.2651 4.95056C13.1827 5.35649 13.445 5.75237 13.8509 5.83477C15.5149 6.17253 16.8274 7.485 17.1651 9.14894C17.2475 9.55487 17.6434 9.81715 18.0493 9.73475C18.4553 9.65235 18.7175 9.25647 18.6351 8.85054C18.1775 6.59622 16.4037 4.82235 14.1493 4.36475C13.7434 4.28235 13.3475 4.54462 13.2651 4.95056Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M13.265 4.95082C13.1826 5.35675 13.4449 5.75263 13.8508 5.83503C15.5147 6.17279 16.8272 7.48526 17.165 9.1492C17.2474 9.55513 17.6432 9.81741 18.0492 9.73501C18.4551 9.65261 18.7174 9.25674 18.635 8.8508C18.1774 6.59648 16.4035 4.82261 14.1492 4.36501C13.7433 4.28261 13.3474 4.54488 13.265 4.95082Z" fill="currentColor" /><path d="M4.38235 22C3.06662 22 2 20.8807 2 19.5H6.76471C6.76471 20.8807 5.69809 22 4.38235 22Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11 7.88889V5.54167C11 5.34832 11 5.25148 10.9962 5.16977C10.916 3.45743 9.61116 2.08814 7.97939 2.00402C7.90151 2 7.80934 2 7.625 2C7.31777 2 7.16415 2 7.03435 2.00669C4.31474 2.1469 2.13998 4.42905 2.00638 7.28296C2 7.41917 2 7.58038 2 7.90278V17.8333H6.76471V12.3333C6.76471 11.7197 7.23876 11.2222 7.82353 11.2222C9.57785 11.2222 11 9.72984 11 7.88889ZM9.32353 5.125C9.32353 4.66476 8.98774 4.29167 8.57353 4.29167C8.15932 4.29167 7.82353 4.66476 7.82353 5.125V7.90278C7.82353 8.36302 8.15932 8.73611 8.57353 8.73611C8.98774 8.73611 9.32353 8.36302 9.32353 7.90278V5.125Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.5 22C13.4624 22 11 19.5376 11 16.5C11 13.4624 13.4624 11 16.5 11C19.5376 11 22 13.4624 22 16.5C22 19.5376 19.5376 22 16.5 22ZM15.25 13C15.6642 13 16 13.3358 16 13.75V18H18.25C18.6642 18 19 18.3358 19 18.75C19 19.1642 18.6642 19.5 18.25 19.5H15.25C14.8358 19.5 14.5 19.1642 14.5 18.75V13.75C14.5 13.3358 14.8358 13 15.25 13Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAirbudsLeft as IconComponentType).keywords = [
  "airbuds",
  "left",
  "left-hand",
  "left-handed",
  "left over",
  "near",
  "leftover",
  "nigh",
  "remaining",
  "leftfield",
  "odd"
];

export default IconAirbudsLeft as IconComponentType;