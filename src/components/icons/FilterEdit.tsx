import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconFilterEdit: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M13.4105 20.7898L12.0005 21.6998C10.6905 22.5098 8.87054 21.5998 8.87054 19.9798V14.6298C8.87054 13.9198 8.47055 13.0098 8.06055 12.5098L4.22052 8.46976C3.71052 7.95976 3.31055 7.05977 3.31055 6.44977V4.12976C3.31055 2.91976 4.22057 2.00977 5.33057 2.00977H18.6705C19.7805 2.00977 20.6906 2.91975 20.6906 4.02975V6.24976C20.6906 7.05976 20.1805 8.06976 19.6805 8.56976" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.0802 11.8899L13.5401 15.4299C13.4001 15.5699 13.2701 15.8299 13.2401 16.0199L13.0501 17.3699C12.9801 17.8599 13.3202 18.1999 13.8102 18.1299L15.1601 17.9399C15.3501 17.9099 15.6202 17.7799 15.7502 17.6399L19.2901 14.0999C19.9001 13.4899 20.1901 12.7799 19.2901 11.8799C18.4001 10.9899 17.6902 11.2799 17.0802 11.8899Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.5801 12.3901C16.8801 13.4701 17.72 14.3101 18.8 14.6101" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.58 4.01999V5.97C19.9 5.47 19.12 5.1 18.27 4.91C17.83 4.8 17.3599 4.75 16.8799 4.75C13.4299 4.75 10.6299 7.55 10.6299 11C10.6299 12.14 10.94 13.26 11.53 14.22C12.03 15.06 12.7299 15.76 13.4899 16.23C13.7499 16.4 14.0199 16.55 14.2999 16.68V19.07C14.2999 19.68 13.9 20.49 13.4 20.79L11.9999 21.7C10.6999 22.51 8.90991 21.6 8.90991 19.98V14.63C8.90991 13.92 8.50992 13.01 8.10992 12.51L4.31995 8.47C3.81995 7.96 3.41992 7.05001 3.41992 6.45001V4.12C3.41992 2.91 4.31991 2 5.40991 2H18.59C19.68 2 20.58 2.90999 20.58 4.01999Z" fill="currentColor" /><path d="M17.9208 6.37C17.5908 6.29 17.2409 6.25 16.8809 6.25C14.2609 6.25 12.1309 8.38 12.1309 11C12.1309 11.89 12.3809 12.73 12.8209 13.45C13.1909 14.07 13.7009 14.6 14.3209 14.98C15.0609 15.47 15.9409 15.75 16.8809 15.75C18.6209 15.75 20.1309 14.82 20.9509 13.45C21.3909 12.73 21.6309 11.89 21.6309 11C21.6309 8.74 20.0508 6.84 17.9208 6.37ZM18.8309 10.57L16.4009 13C16.3109 13.09 16.1208 13.18 15.9908 13.2L15.0609 13.33C14.7209 13.38 14.4908 13.14 14.5408 12.81L14.6708 11.88C14.6908 11.75 14.7808 11.57 14.8708 11.47L16.9509 9.39001L17.3008 9.04001C17.7208 8.62001 18.2109 8.42001 18.8209 9.04001C19.4309 9.66001 19.2509 10.15 18.8309 10.57Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFilterEdit as IconComponentType).keywords = [
  "filter",
  "edit",
  "filtrate",
  "filter out",
  "percolate",
  "permeate",
  "trickle",
  "sink in",
  "strain",
  "dribble",
  "separate out",
  "redact",
  "edit out",
  "cut",
  "editor",
  "edition",
  "publication",
  "publish",
  "publishing",
  "authoring"
];

export default IconFilterEdit as IconComponentType;