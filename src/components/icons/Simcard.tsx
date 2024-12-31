import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSimcard: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.54 6.53973L16.47 3.46973C15.53 2.52973 14.26 2.00977 12.93 2.00977H8C5 2.00977 3 4.00977 3 7.00977V17.0098C3 20.0098 5 22.0098 8 22.0098H16C19 22.0098 21 20.0098 21 17.0098V10.0798C21 8.73977 20.47 7.46973 19.54 6.53973Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M9.5 14L7.5 16L9.5 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5 14L16.5 16L14.5 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.54 6.54001L16.47 3.47C15.53 2.53 14.26 2.01001 12.93 2.01001H8C5 2.01001 3 4.01001 3 7.01001V17.01C3 20.01 5 22.01 8 22.01H16C19 22.01 21 20.01 21 17.01V10.08C21 8.73999 20.47 7.47001 19.54 6.54001Z" fill="currentColor" /><path d="M9.49945 18.7499C9.30945 18.7499 9.11945 18.6799 8.96945 18.5299L6.96945 16.5299C6.67945 16.2399 6.67945 15.7599 6.96945 15.4699L8.96945 13.4699C9.25945 13.1799 9.73945 13.1799 10.0295 13.4699C10.3195 13.7599 10.3195 14.2399 10.0295 14.5299L8.55945 15.9999L10.0295 17.4699C10.3195 17.7599 10.3195 18.2399 10.0295 18.5299C9.87945 18.6799 9.68945 18.7499 9.49945 18.7499Z" fill="currentColor" /><path d="M14.4995 18.7499C14.3095 18.7499 14.1195 18.6799 13.9695 18.5299C13.6795 18.2399 13.6795 17.7599 13.9695 17.4699L15.4395 15.9999L13.9695 14.5299C13.6795 14.2399 13.6795 13.7599 13.9695 13.4699C14.2595 13.1799 14.7395 13.1799 15.0295 13.4699L17.0295 15.4699C17.3195 15.7599 17.3195 16.2399 17.0295 16.5299L15.0295 18.5299C14.8795 18.6799 14.6895 18.7499 14.4995 18.7499Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSimcard as IconComponentType).keywords = [
  "simcard"
];

export default IconSimcard as IconComponentType;