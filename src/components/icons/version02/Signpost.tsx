import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSignpost: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.8894 2H9.62948C9.22948 2 8.84946 2.14 8.53946 2.38L6.34945 4.13C5.46945 4.83 5.46945 6.15999 6.34945 6.85999L8.53946 8.60999C8.84946 8.85999 9.23948 8.98999 9.62948 8.98999H17.8894C18.8594 8.98999 19.6394 8.20999 19.6394 7.23999V3.73999C19.6394 2.77999 18.8594 2 17.8894 2Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M7.46973 12H15.7297C16.1297 12 16.5098 12.14 16.8198 12.38L19.0098 14.13C19.8898 14.83 19.8898 16.16 19.0098 16.86L16.8198 18.61C16.5098 18.86 16.1197 18.99 15.7297 18.99H7.46973C6.49973 18.99 5.71973 18.21 5.71973 17.24V13.74C5.71973 12.78 6.49973 12 7.46973 12Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 12V9" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22V19" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.66992 22H15.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.6397 3.75V7.25C19.6397 8.22 18.8597 9 17.8897 9H9.62979C9.23979 9 8.84977 8.85999 8.53977 8.62L6.34977 6.87C5.47977 6.17 5.47977 4.83 6.34977 4.13L8.53977 2.38C8.84977 2.14 9.23979 2 9.62979 2H17.8897C18.8597 2 19.6397 2.78 19.6397 3.75Z" fill="currentColor" /><path d="M19.0098 16.87L16.8297 18.62C16.5197 18.86 16.1297 19 15.7297 19H7.46973C6.49973 19 5.71973 18.22 5.71973 17.25V13.75C5.71973 12.78 6.49973 12 7.46973 12H15.7297C16.1297 12 16.5197 12.14 16.8297 12.38L19.0098 14.13C19.8898 14.83 19.8898 16.17 19.0098 16.87Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M13.4199 9H11.9199V12H13.4199V9Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.4199 22C16.4199 22.41 16.0799 22.75 15.6699 22.75H9.66992C9.25992 22.75 8.91992 22.41 8.91992 22C8.91992 21.59 9.25992 21.25 9.66992 21.25H11.9199V19H13.4199V21.25H15.6699C16.0799 21.25 16.4199 21.59 16.4199 22Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0098 14.13L16.8298 12.38C16.5198 12.14 16.1298 12 15.7298 12H13.4198V9H17.8898C18.8598 9 19.6398 8.22 19.6398 7.25V3.75C19.6398 2.78 18.8598 2 17.8898 2H9.62977C9.23977 2 8.84977 2.14 8.53977 2.38L6.34977 4.13C5.47977 4.83 5.47977 6.17 6.34977 6.87L8.53977 8.62C8.84977 8.86 9.23977 9 9.62977 9H11.9198V12H7.46977C6.49977 12 5.71977 12.78 5.71977 13.75V17.25C5.71977 18.22 6.49977 19 7.46977 19H11.9198V21.25H9.66977C9.25977 21.25 8.91977 21.59 8.91977 22C8.91977 22.41 9.25977 22.75 9.66977 22.75H15.6698C16.0798 22.75 16.4198 22.41 16.4198 22C16.4198 21.59 16.0798 21.25 15.6698 21.25H13.4198V19H15.7298C16.1298 19 16.5198 18.86 16.8298 18.62L19.0098 16.87C19.8898 16.17 19.8898 14.83 19.0098 14.13Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSignpost as IconComponentType).keywords = [
  "signpost",
  "guidepost",
  "signage",
  "milestone",
  "beacon",
  "landmark",
  "hatch",
  "guide",
  "billboard",
  "panel"
];

export default IconSignpost as IconComponentType;