import { FC } from 'react';

const IconGroup: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M18.6699 7.75V14.5C18.6699 13.4 17.7699 12.5 16.6699 12.5H8.66992C7.56992 12.5 6.66992 13.4 6.66992 14.5V7.75C6.66992 6.65 7.56992 5.75 8.66992 5.75H16.6699C17.7699 5.75 18.6699 6.65 18.6699 7.75Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M19.6699 15.75H18.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M6.66992 15.75H5.66992" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M18.6699 14V11C18.6699 9.9 17.7699 9 16.6699 9H8.66992C7.56992 9 6.66992 9.9 6.66992 11V14" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M18.6699 14.5V15.75H15.1699C15.1699 17.13 14.0499 18.25 12.6699 18.25C11.2899 18.25 10.1699 17.13 10.1699 15.75H6.66992V14.5C6.66992 13.4 7.56992 12.5 8.66992 12.5H16.6699C17.7699 12.5 18.6699 13.4 18.6699 14.5Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8597 2H8.48969C4.84968 2 2.67969 4.17 2.67969 7.81V16.18C2.67969 19.82 4.84968 21.99 8.48969 21.99H16.8597C20.4997 21.99 22.6697 19.82 22.6697 16.18V7.81C22.6697 4.17 20.4997 2 16.8597 2Z" fill="currentColor" /><path d="M19.6699 15H19.4199V14.5V14V11V7.75C19.4199 6.23 18.1899 5 16.6699 5H8.66992C7.14992 5 5.91992 6.23 5.91992 7.75V11V14V14.5V15H5.66992C5.25992 15 4.91992 15.34 4.91992 15.75C4.91992 16.16 5.25992 16.5 5.66992 16.5H6.66992H9.50995C9.84995 17.93 11.1399 19 12.6699 19C14.1999 19 15.4899 17.93 15.8299 16.5H18.6699H19.6699C20.0799 16.5 20.4199 16.16 20.4199 15.75C20.4199 15.34 20.0799 15 19.6699 15ZM17.4599 11.88C17.3999 11.86 17.3399 11.84 17.2699 11.82C17.0699 11.78 16.8699 11.75 16.6599 11.75H8.65991C8.44991 11.75 8.24993 11.78 8.04993 11.82C7.98993 11.83 7.92992 11.86 7.85992 11.88C7.72992 11.92 7.59992 11.96 7.47992 12.02C7.44992 12.03 7.4199 12.04 7.3999 12.05V11C7.3999 10.31 7.9599 9.75 8.6499 9.75H16.6499C17.3399 9.75 17.8999 10.31 17.8999 11V12.05C17.8699 12.04 17.8499 12.03 17.8199 12.02C17.7199 11.96 17.5899 11.92 17.4599 11.88ZM8.66992 6.5H16.6699C17.3599 6.5 17.9199 7.06 17.9199 7.75V8.56C17.5399 8.37 17.1199 8.25 16.6699 8.25H8.66992C8.21992 8.25 7.79992 8.37 7.41992 8.56V7.75C7.41992 7.06 7.97992 6.5 8.66992 6.5ZM15.1699 15C14.7599 15 14.4199 15.34 14.4199 15.75C14.4199 16.71 13.6299 17.5 12.6699 17.5C11.7099 17.5 10.9199 16.71 10.9199 15.75C10.9199 15.34 10.5799 15 10.1699 15H7.41992V14.5C7.41992 13.81 7.97992 13.25 8.66992 13.25H16.6699C17.3599 13.25 17.9199 13.81 17.9199 14.5V15H15.1699Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6719 9.75H8.67188C7.98188 9.75 7.42188 10.31 7.42188 11V12.05C7.45187 12.04 7.47187 12.03 7.50187 12.02C7.62187 11.96 7.75188 11.92 7.88188 11.88C7.94188 11.86 8.00188 11.84 8.07188 11.82C8.27188 11.78 8.47188 11.75 8.68188 11.75H16.6819C16.8919 11.75 17.0919 11.78 17.2919 11.82C17.3519 11.83 17.4119 11.86 17.4819 11.88C17.6119 11.92 17.7419 11.96 17.8619 12.02C17.8919 12.03 17.9219 12.04 17.9419 12.05V11C17.9219 10.31 17.3619 9.75 16.6719 9.75Z" fill="currentColor" /><path d="M16.6719 13.25H8.67188C7.98188 13.25 7.42188 13.81 7.42188 14.5V15H10.1719C10.5819 15 10.9219 15.34 10.9219 15.75C10.9219 16.71 11.7119 17.5 12.6719 17.5C13.6319 17.5 14.4219 16.71 14.4219 15.75C14.4219 15.34 14.7619 15 15.1719 15H17.9219V14.5C17.9219 13.81 17.3619 13.25 16.6719 13.25Z" fill="currentColor" /><path d="M16.6719 6.5H8.67188C7.98188 6.5 7.42188 7.06 7.42188 7.75V8.56C7.80187 8.37 8.22188 8.25 8.67188 8.25H16.6719C17.1219 8.25 17.5419 8.37 17.9219 8.56V7.75C17.9219 7.06 17.3619 6.5 16.6719 6.5Z" fill="currentColor" /><path d="M16.8619 2H8.48187C4.84187 2 2.67188 4.17 2.67188 7.81V16.18C2.67188 19.83 4.84187 22 8.48187 22H16.8519C20.4919 22 22.6619 19.83 22.6619 16.19V7.81C22.6719 4.17 20.5019 2 16.8619 2ZM19.6719 16.5H18.6719H15.8319C15.4919 17.93 14.2019 19 12.6719 19C11.1419 19 9.85188 17.93 9.51188 16.5H6.67188H5.67188C5.26187 16.5 4.92188 16.16 4.92188 15.75C4.92188 15.34 5.26187 15 5.67188 15H5.92188V14.5V14V11V7.75C5.92188 6.23 7.15188 5 8.67188 5H16.6719C18.1919 5 19.4219 6.23 19.4219 7.75V11V14V14.5V15H19.6719C20.0819 15 20.4219 15.34 20.4219 15.75C20.4219 16.16 20.0819 16.5 19.6719 16.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGroup as IconComponent).keywords = [
  "group",
  "aggroup",
  "common",
  "communal",
  "radical",
  "mathematical group",
  "cohort",
  "type",
  "class",
  "collective"
];

export default IconGroup as IconComponent;