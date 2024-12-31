import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconStory: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.42 7.95012C18.86 10.3901 18.86 14.3501 16.42 16.7901C13.98 19.2301 10.02 19.2301 7.58 16.7901C5.14 14.3501 5.14 10.3901 7.58 7.95012C10.02 5.51012 13.98 5.51012 16.42 7.95012Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.25097 21.6399C6.25097 20.8399 4.50097 19.3899 3.34097 17.3799C2.20097 15.4099 1.82097 13.2199 2.09097 11.1299" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5.84961 4.47986C7.54961 3.14986 9.6796 2.35986 11.9996 2.35986C14.2696 2.35986 16.3596 3.12985 18.0396 4.40985" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.75 21.6399C17.75 20.8399 19.5 19.3899 20.66 17.3799C21.8 15.4099 22.18 13.2199 21.91 11.1299" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16.42 7.95012C18.86 10.3901 18.86 14.3501 16.42 16.7901C13.98 19.2301 10.02 19.2301 7.58 16.7901C5.14 14.3501 5.14 10.3901 7.58 7.95012C10.02 5.51012 13.98 5.51012 16.42 7.95012Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M8.24906 22.3899C8.15906 22.3899 8.05906 22.3699 7.96906 22.3399C5.71906 21.4399 3.89905 19.8499 2.67905 17.7499C1.49905 15.6999 1.02905 13.3799 1.33905 11.0199C1.38905 10.6099 1.77905 10.3199 2.17905 10.3699C2.58905 10.4199 2.87904 10.7999 2.82904 11.2099C2.56904 13.2299 2.96907 15.2299 3.97907 16.9899C5.01907 18.7899 6.58905 20.1599 8.51905 20.9299C8.89905 21.0899 9.08906 21.5198 8.93906 21.9098C8.82906 22.2098 8.53906 22.3899 8.24906 22.3899Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M5.84961 5.22986C5.62961 5.22986 5.40961 5.12988 5.25961 4.93988C4.99961 4.60988 5.05962 4.13989 5.38962 3.88989C7.29962 2.39989 9.57961 1.60986 11.9996 1.60986C14.3596 1.60986 16.6096 2.36988 18.4996 3.80988C18.8296 4.05988 18.8896 4.52986 18.6396 4.85986C18.3896 5.18986 17.9196 5.24988 17.5896 4.99988C15.9696 3.75988 14.0396 3.10986 11.9996 3.10986C9.91961 3.10986 7.9496 3.78989 6.3096 5.06989C6.1696 5.17989 6.00961 5.22986 5.84961 5.22986Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.7507 22.3901C15.4507 22.3901 15.1707 22.2101 15.0507 21.9201C14.9007 21.5401 15.0807 21.1001 15.4707 20.9401C17.4007 20.1601 18.9707 18.8001 20.0107 17.0001C21.0307 15.2401 21.4307 13.2401 21.1607 11.2201C21.1107 10.8101 21.4007 10.4301 21.8107 10.3801C22.2107 10.3301 22.6007 10.6201 22.6507 11.0301C22.9507 13.3801 22.4907 15.7101 21.3107 17.7601C20.1007 19.8601 18.2707 21.4401 16.0207 22.3501C15.9407 22.3701 15.8507 22.3901 15.7507 22.3901Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconStory as IconComponentType).keywords = [
  "story",
  "narrative",
  "narration",
  "recital",
  "write up",
  "history",
  "report",
  "chronicle",
  "tale",
  "news report"
];

export default IconStory as IconComponentType;