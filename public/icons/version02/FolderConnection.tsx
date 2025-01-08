import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconFolderConnection: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6699 16V19" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 23C13.7745 23 14.6699 22.1046 14.6699 21C14.6699 19.8954 13.7745 19 12.6699 19C11.5654 19 10.6699 19.8954 10.6699 21C10.6699 22.1046 11.5654 23 12.6699 23Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.6699 21H14.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.6699 21H6.66992" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.6699 8.30005V12.5C19.6699 15.3 18.9699 16 16.1699 16H9.16992C6.36992 16 5.66992 15.3 5.66992 12.5V5.5C5.66992 2.7 6.36992 2 9.16992 2H10.2199C11.2699 2 11.4999 2.30997 11.8999 2.83997L12.95 4.23999C13.22 4.58999 13.3699 4.80005 14.0699 4.80005H16.1699C18.9699 4.80005 19.6699 5.50005 19.6699 8.30005Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.4199 21C19.4199 21.41 19.0799 21.75 18.6699 21.75H14.6699C14.6199 21.75 14.5799 21.73 14.5299 21.72C14.2399 22.47 13.5199 23 12.6699 23C11.8199 23 11.0999 22.47 10.8099 21.72C10.7599 21.73 10.7199 21.75 10.6699 21.75H6.66992C6.25992 21.75 5.91992 21.41 5.91992 21C5.91992 20.59 6.25992 20.25 6.66992 20.25H10.6699C10.7199 20.25 10.7599 20.27 10.8099 20.28C11.0099 19.76 11.43 19.34 11.95 19.14C11.94 19.09 11.9199 19.05 11.9199 19V16H13.4199V19C13.4199 19.05 13.3999 19.09 13.3899 19.14C13.9099 19.34 14.3299 19.76 14.5299 20.28C14.5799 20.27 14.6199 20.25 14.6699 20.25H18.6699C19.0799 20.25 19.4199 20.59 19.4199 21Z" fill="currentColor" /><path d="M19.6699 8.29999V12.5C19.6699 15.3 18.9699 16 16.1699 16H9.16992C6.36992 16 5.66992 15.3 5.66992 12.5V5.5C5.66992 2.7 6.36992 2 9.16992 2H10.2199C11.2699 2 11.4999 2.31003 11.8999 2.84003L12.95 4.23999C13.22 4.58999 13.3699 4.79999 14.0699 4.79999H16.1699C18.9699 4.79999 19.6699 5.49999 19.6699 8.29999Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.4199 16H16.1699C18.9699 16 19.6699 15.3 19.6699 12.5V8.3C19.6699 5.5 18.9699 4.8 16.1699 4.8H14.0699C13.3699 4.8 13.2199 4.59 12.9499 4.24L11.8999 2.84C11.4999 2.31 11.2699 2 10.2199 2H9.16992C6.36992 2 5.66992 2.7 5.66992 5.5V12.5C5.66992 15.3 6.36992 16 9.16992 16H11.9199V19C11.9199 19.05 11.9399 19.09 11.9499 19.14C11.4299 19.34 11.0099 19.76 10.8099 20.28C10.7599 20.27 10.7199 20.25 10.6699 20.25H6.66992C6.25992 20.25 5.91992 20.59 5.91992 21C5.91992 21.41 6.25992 21.75 6.66992 21.75H10.6699C10.7199 21.75 10.7599 21.73 10.8099 21.72C11.0999 22.47 11.8199 23 12.6699 23C13.5199 23 14.2399 22.47 14.5299 21.72C14.5799 21.73 14.6199 21.75 14.6699 21.75H18.6699C19.0799 21.75 19.4199 21.41 19.4199 21C19.4199 20.59 19.0799 20.25 18.6699 20.25H14.6699C14.6199 20.25 14.5799 20.27 14.5299 20.28C14.3299 19.76 13.9099 19.34 13.3899 19.14C13.3999 19.09 13.4199 19.05 13.4199 19V16Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFolderConnection as IconComponentType).keywords = [
  "folder",
  "connection",
  "booklet",
  "pamphlet",
  "brochure",
  "leaflet",
  "toolkit",
  "pack",
  "package",
  "kit",
  "shirt",
  "connexion",
  "connectedness",
  "connective",
  "joining",
  "connector",
  "link",
  "connecter",
  "association",
  "connecting"
];

export default IconFolderConnection as IconComponentType;