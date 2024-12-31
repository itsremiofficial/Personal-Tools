import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRefresh2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12C2 6.48 6.44 2 12 2C18.67 2 22 7.56 22 7.56M22 7.56V2.56M22 7.56H17.56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M21.89 12C21.89 17.52 17.41 22 11.89 22C6.37 22 3 16.44 3 16.44M3 16.44H7.52M3 16.44V21.44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 7.81V16.18C22 19.82 19.83 21.99 16.19 21.99H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.18C19.83 2 22 4.17 22 7.81Z" fill="currentColor" /><path d="M12 18.25C10.21 18.25 8.81 17.36 7.86 16.48V17.19C7.86 17.6 7.52 17.94 7.11 17.94C6.7 17.94 6.36 17.6 6.36 17.19V14.44C6.36 14.03 6.7 13.69 7.11 13.69H9.59C10 13.69 10.34 14.03 10.34 14.44C10.34 14.85 10 15.19 9.59 15.19H8.69C9.43 15.93 10.58 16.75 12 16.75C14.62 16.75 16.75 14.62 16.75 12C16.75 11.59 17.09 11.25 17.5 11.25C17.91 11.25 18.25 11.59 18.25 12C18.25 15.45 15.45 18.25 12 18.25ZM6.5 12.75C6.09 12.75 5.75 12.41 5.75 12C5.75 8.55 8.55 5.75 12 5.75C14.15 5.75 15.73 6.68 16.75 7.57V6.81C16.75 6.4 17.09 6.06 17.5 6.06C17.91 6.06 18.25 6.4 18.25 6.81V9.55C18.25 9.58 18.25 9.61 18.25 9.63C18.24 9.74 18.21 9.84 18.16 9.93C18.11 10.02 18.04 10.1 17.95 10.17C17.88 10.22 17.8 10.26 17.71 10.29C17.64 10.31 17.57 10.32 17.5 10.32H15.07C14.66 10.32 14.32 9.98 14.32 9.57C14.32 9.16 14.66 8.82 15.07 8.82H15.9C15.1 8.08 13.81 7.26 12.02 7.26C9.4 7.26 7.27 9.39 7.27 12.01C7.25 12.41 6.91 12.75 6.5 12.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRefresh2 as IconComponentType).keywords = [
  "refresh",
  "2",
  "refreshen",
  "freshen",
  "review",
  "freshen up",
  "brush up",
  "refresher",
  "refreshment",
  "rejuvenate",
  "revive",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconRefresh2 as IconComponentType;