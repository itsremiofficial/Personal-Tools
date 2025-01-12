import { FC } from 'react';

const IconTrello: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6699 22H9.66992C4.66992 22 2.66992 20 2.66992 15V9C2.66992 4 4.66992 2 9.66992 2H15.6699C20.6699 2 22.6699 4 22.6699 9V15C22.6699 20 20.6699 22 15.6699 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.2198 17.72H7.76978C7.09978 17.72 6.5498 17.17 6.5498 16.5V7.51999C6.5498 6.84999 7.09978 6.29999 7.76978 6.29999H10.2198C10.8898 6.29999 11.4398 6.84999 11.4398 7.51999V16.5C11.4398 17.17 10.8898 17.72 10.2198 17.72Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M17.8097 13.63H14.8697C14.3297 13.63 13.8896 13.19 13.8896 12.65V7.26001C13.8896 6.72001 14.3297 6.28 14.8697 6.28H17.8097C18.3497 6.28 18.7897 6.72001 18.7897 7.26001V12.65C18.7897 13.19 18.3497 13.63 17.8097 13.63Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M16.8597 2H8.48969C4.84968 2 2.67969 4.17 2.67969 7.81V16.18C2.67969 19.82 4.84968 21.99 8.48969 21.99H16.8597C20.4997 21.99 22.6697 19.82 22.6697 16.18V7.81C22.6697 4.17 20.4997 2 16.8597 2Z" fill="currentColor" /><path d="M10.2198 17.72H7.76978C7.09978 17.72 6.5498 17.17 6.5498 16.5V7.52004C6.5498 6.85004 7.09978 6.30005 7.76978 6.30005H10.2198C10.8898 6.30005 11.4398 6.85004 11.4398 7.52004V16.5C11.4398 17.17 10.8898 17.72 10.2198 17.72Z" fill="currentColor" /><path d="M17.8097 13.63H14.8697C14.3297 13.63 13.8896 13.19 13.8896 12.65V7.26003C13.8896 6.72003 14.3297 6.28003 14.8697 6.28003H17.8097C18.3497 6.28003 18.7897 6.72003 18.7897 7.26003V12.65C18.7897 13.19 18.3497 13.63 17.8097 13.63Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8597 2H8.48969C4.84968 2 2.67969 4.17 2.67969 7.81V16.18C2.67969 19.82 4.84968 21.99 8.48969 21.99H16.8597C20.4997 21.99 22.6697 19.82 22.6697 16.18V7.81C22.6697 4.17 20.4997 2 16.8597 2ZM11.4397 16.49C11.4397 17.16 10.8897 17.71 10.2197 17.71H7.76965C7.09965 17.71 6.54968 17.16 6.54968 16.49V7.51001C6.54968 6.84001 7.09965 6.29001 7.76965 6.29001H10.2197C10.8897 6.29001 11.4397 6.84001 11.4397 7.51001V16.49ZM18.7897 12.65C18.7897 13.19 18.3497 13.63 17.8097 13.63H14.8697C14.3297 13.63 13.8896 13.19 13.8896 12.65V7.26001C13.8896 6.72001 14.3297 6.28 14.8697 6.28H17.8097C18.3497 6.28 18.7897 6.72001 18.7897 7.26001V12.65Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTrello as IconComponent).keywords = [
  "trello",
  "jira",
  "kanboard",
  "confluence",
  "asana",
  "microsoft to do",
  "outlook.com",
  "google tasks",
  "smartsheet",
  "trac"
];

export default IconTrello as IconComponent;