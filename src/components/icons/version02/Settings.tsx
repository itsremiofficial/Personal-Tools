import { FC } from 'react';

const IconSettings: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 16.5C15.1552 16.5 17.1699 14.4853 17.1699 12C17.1699 9.51472 15.1552 7.5 12.6699 7.5C10.1846 7.5 8.16992 9.51472 8.16992 12C8.16992 14.4853 10.1846 16.5 12.6699 16.5Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2.66992 12H7.66992" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.6699 12H22.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 16.5C15.1552 16.5 17.1699 14.4853 17.1699 12C17.1699 9.51472 15.1552 7.5 12.6699 7.5C10.1846 7.5 8.16992 9.51472 8.16992 12C8.16992 14.4853 10.1846 16.5 12.6699 16.5Z" fill="currentColor" /><g opacity={duotone ? "0.4" : "1"}><path opacity={duotone ? "0.4" : "1"} d="M10.6699 12.75H2.66992C2.25992 12.75 1.91992 12.41 1.91992 12C1.91992 11.59 2.25992 11.25 2.66992 11.25H10.6699C11.0799 11.25 11.4199 11.59 11.4199 12C11.4199 12.41 11.0799 12.75 10.6699 12.75Z" fill="currentColor" /></g><g opacity={duotone ? "0.4" : "1"}><path opacity={duotone ? "0.4" : "1"} d="M22.6699 12.75H14.6699C14.2599 12.75 13.9199 12.41 13.9199 12C13.9199 11.59 14.2599 11.25 14.6699 11.25H22.6699C23.0799 11.25 23.4199 11.59 23.4199 12C23.4199 12.41 23.0799 12.75 22.6699 12.75Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 16.5C15.1552 16.5 17.1699 14.4853 17.1699 12C17.1699 9.51472 15.1552 7.5 12.6699 7.5C10.1846 7.5 8.16992 9.51472 8.16992 12C8.16992 14.4853 10.1846 16.5 12.6699 16.5Z" fill="currentColor" /><path d="M10.6699 12.75H2.66992C2.25992 12.75 1.91992 12.41 1.91992 12C1.91992 11.59 2.25992 11.25 2.66992 11.25H10.6699C11.0799 11.25 11.4199 11.59 11.4199 12C11.4199 12.41 11.0799 12.75 10.6699 12.75Z" fill="currentColor" /><path d="M22.6699 12.75H14.6699C14.2599 12.75 13.9199 12.41 13.9199 12C13.9199 11.59 14.2599 11.25 14.6699 11.25H22.6699C23.0799 11.25 23.4199 11.59 23.4199 12C23.4199 12.41 23.0799 12.75 22.6699 12.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSettings as IconComponent).keywords = [
  "settings",
  "scene",
  "stage setting",
  "mise en scene",
  "scope",
  "background",
  "mount",
  "place setting",
  "accommodations",
  "adjust"
];

export default IconSettings as IconComponent;