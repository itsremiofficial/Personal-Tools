import { FC } from 'react';

const IconWatchStatus: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16992 19H16.1699C18.4999 19 19.6699 17.83 19.6699 15.5V8.5C19.6699 6.17 18.4999 5 16.1699 5H9.16992C6.83992 5 5.66992 6.17 5.66992 8.5V15.5C5.66992 17.83 6.83992 19 9.16992 19Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.6699 2H8.66992" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.6699 22H8.66992" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 14V10" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.6699 14V12" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.66992 14V13" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9.16992 19H16.1699C18.4999 19 19.6699 17.83 19.6699 15.5V8.5C19.6699 6.17 18.4999 5 16.1699 5H9.16992C6.83992 5 5.66992 6.17 5.66992 8.5V15.5C5.66992 17.83 6.83992 19 9.16992 19Z" fill="currentColor" /><path d="M16.6699 3.75H8.66992C8.25992 3.75 7.91992 3.41 7.91992 3C7.91992 2.59 8.25992 2.25 8.66992 2.25H16.6699C17.0799 2.25 17.4199 2.59 17.4199 3C17.4199 3.41 17.0799 3.75 16.6699 3.75Z" fill="currentColor" /><path d="M16.6699 21.75H8.66992C8.25992 21.75 7.91992 21.41 7.91992 21C7.91992 20.59 8.25992 20.25 8.66992 20.25H16.6699C17.0799 20.25 17.4199 20.59 17.4199 21C17.4199 21.41 17.0799 21.75 16.6699 21.75Z" fill="currentColor" /><path d="M12.6699 14.75C12.2599 14.75 11.9199 14.41 11.9199 14V10C11.9199 9.59 12.2599 9.25 12.6699 9.25C13.0799 9.25 13.4199 9.59 13.4199 10V14C13.4199 14.42 13.0799 14.75 12.6699 14.75Z" fill="currentColor" /><path d="M15.6699 14.75C15.2599 14.75 14.9199 14.41 14.9199 14V12C14.9199 11.59 15.2599 11.25 15.6699 11.25C16.0799 11.25 16.4199 11.59 16.4199 12V14C16.4199 14.42 16.0899 14.75 15.6699 14.75Z" fill="currentColor" /><path d="M9.66992 14.75C9.25992 14.75 8.91992 14.41 8.91992 14V13C8.91992 12.59 9.25992 12.25 9.66992 12.25C10.0799 12.25 10.4199 12.59 10.4199 13V14C10.4199 14.42 10.0799 14.75 9.66992 14.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6699 3.75H8.66992C8.25992 3.75 7.91992 3.41 7.91992 3C7.91992 2.59 8.25992 2.25 8.66992 2.25H16.6699C17.0799 2.25 17.4199 2.59 17.4199 3C17.4199 3.41 17.0799 3.75 16.6699 3.75Z" fill="currentColor" /><path d="M16.6699 21.75H8.66992C8.25992 21.75 7.91992 21.41 7.91992 21C7.91992 20.59 8.25992 20.25 8.66992 20.25H16.6699C17.0799 20.25 17.4199 20.59 17.4199 21C17.4199 21.41 17.0799 21.75 16.6699 21.75Z" fill="currentColor" /><path d="M16.1699 5H9.16992C6.83992 5 5.66992 6.17 5.66992 8.5V15.5C5.66992 17.83 6.83992 19 9.16992 19H16.1699C18.4999 19 19.6699 17.83 19.6699 15.5V8.5C19.6699 6.17 18.4999 5 16.1699 5ZM10.4199 14C10.4199 14.41 10.0799 14.75 9.66992 14.75C9.25992 14.75 8.91992 14.42 8.91992 14V13C8.91992 12.59 9.25992 12.25 9.66992 12.25C10.0799 12.25 10.4199 12.59 10.4199 13V14ZM13.4199 14C13.4199 14.41 13.0799 14.75 12.6699 14.75C12.2599 14.75 11.9199 14.41 11.9199 14V10C11.9199 9.59 12.2599 9.25 12.6699 9.25C13.0799 9.25 13.4199 9.59 13.4199 10V14ZM16.4199 14C16.4199 14.41 16.0799 14.75 15.6699 14.75C15.2599 14.75 14.9199 14.41 14.9199 14V12C14.9199 11.59 15.2599 11.25 15.6699 11.25C16.0799 11.25 16.4199 11.59 16.4199 12V14Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWatchStatus as IconComponent).keywords = [
  "watch",
  "status",
  "picket",
  "ticker",
  "sentry",
  "lookout man",
  "lookout",
  "sentinel",
  "determine",
  "scout",
  "catch",
  "position",
  "condition",
  "belonging",
  "shape",
  "ranking",
  "rating",
  "establish",
  "availability",
  "item"
];

export default IconWatchStatus as IconComponent;