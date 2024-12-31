import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMessageProgramming: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 18.9697H8C4 18.9697 2 17.9697 2 12.9697V7.96973C2 3.96973 4 1.96973 8 1.96973H16C20 1.96973 22 3.96973 22 7.96973V12.9697C22 16.9697 20 18.9697 16 18.9697H15.5C15.19 18.9697 14.89 19.1198 14.7 19.3698L13.2 21.3698C12.54 22.2498 11.46 22.2498 10.8 21.3698L9.29999 19.3698C9.13999 19.1498 8.78 18.9697 8.5 18.9697Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8 8.7002L6 10.7002L8 12.7002" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16 8.7002L18 10.7002L16 12.7002" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M13 8.37012L11 13.0302" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M8.5 18.9697H8C4 18.9697 2 17.9697 2 12.9697V7.96973C2 3.96973 4 1.96973 8 1.96973H16C20 1.96973 22 3.96973 22 7.96973V12.9697C22 16.9697 20 18.9697 16 18.9697H15.5C15.19 18.9697 14.89 19.1198 14.7 19.3698L13.2 21.3698C12.54 22.2498 11.46 22.2498 10.8 21.3698L9.29999 19.3698C9.13999 19.1498 8.78 18.9697 8.5 18.9697Z" fill="currentColor" /><path d="M7.99945 13.4502C7.80945 13.4502 7.61945 13.3801 7.46945 13.2301L5.46945 11.2301C5.17945 10.9401 5.17945 10.4601 5.46945 10.1701L7.46945 8.17014C7.75945 7.88014 8.23945 7.88014 8.52945 8.17014C8.81945 8.46014 8.81945 8.94013 8.52945 9.23013L7.05945 10.7002L8.52945 12.1701C8.81945 12.4601 8.81945 12.9401 8.52945 13.2301C8.37945 13.3801 8.18945 13.4502 7.99945 13.4502Z" fill="currentColor" /><path d="M15.9995 13.4502C15.8095 13.4502 15.6195 13.3801 15.4695 13.2301C15.1795 12.9401 15.1795 12.4601 15.4695 12.1701L16.9395 10.7002L15.4695 9.23013C15.1795 8.94013 15.1795 8.46014 15.4695 8.17014C15.7595 7.88014 16.2395 7.88014 16.5295 8.17014L18.5295 10.1701C18.8195 10.4601 18.8195 10.9401 18.5295 11.2301L16.5295 13.2301C16.3795 13.3801 16.1895 13.4502 15.9995 13.4502Z" fill="currentColor" /><path d="M11.0004 13.7798C10.9004 13.7798 10.8004 13.7597 10.7004 13.7197C10.3204 13.5597 10.1404 13.1197 10.3104 12.7297L12.3104 8.05975C12.4704 7.67975 12.9103 7.49973 13.3003 7.66973C13.6803 7.82973 13.8604 8.26972 13.6904 8.65972L11.6904 13.3298C11.5704 13.6098 11.2904 13.7798 11.0004 13.7798Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMessageProgramming as IconComponentType).keywords = [
  "message",
  "programming",
  "subject matter",
  "substance",
  "content",
  "file",
  "communiqué",
  "transmission",
  "communication",
  "news",
  "advertisement",
  "computer programming",
  "scheduling",
  "airtime",
  "television",
  "broadcasting",
  "plan",
  "software",
  "programmer",
  "programmatic"
];

export default IconMessageProgramming as IconComponentType;