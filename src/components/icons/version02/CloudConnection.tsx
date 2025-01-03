import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCloudConnection: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.04014 9.50993C2.96014 9.79993 2.97014 15.7099 7.04014 15.9999H16.7001C17.8701 16.0099 19.0002 15.5699 19.8702 14.7799C22.7302 12.2799 21.2002 7.27991 17.4302 6.79991C16.0802 -1.34009 4.29015 1.74993 7.08015 9.50993" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 16V19" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 23C13.7745 23 14.6699 22.1046 14.6699 21C14.6699 19.8954 13.7745 19 12.6699 19C11.5654 19 10.6699 19.8954 10.6699 21C10.6699 22.1046 11.5654 23 12.6699 23Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.6699 21H14.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.6699 21H6.66992" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.8702 14.7799C19.0102 15.5699 17.8701 16.0099 16.7001 15.9999H7.04014C2.97014 15.7099 2.96014 9.79993 7.04014 9.50993H7.08015C4.29015 1.74993 16.0802 -1.34009 17.4302 6.79991C21.2002 7.27991 22.7302 12.2899 19.8702 14.7799Z" fill="currentColor" /><path d="M19.4199 21C19.4199 21.41 19.0799 21.75 18.6699 21.75H14.6699C14.6199 21.75 14.5799 21.75 14.5299 21.73C14.2399 22.47 13.5099 23 12.6699 23C11.8299 23 11.0999 22.47 10.8099 21.73C10.7599 21.75 10.7199 21.75 10.6699 21.75H6.66992C6.25992 21.75 5.91992 21.41 5.91992 21C5.91992 20.59 6.25992 20.25 6.66992 20.25H10.6699C10.7199 20.25 10.7599 20.25 10.8099 20.27C11.0099 19.75 11.4199 19.34 11.9399 19.14C11.9199 19.09 11.9199 19.05 11.9199 19V16H13.4199V19C13.4199 19.05 13.4199 19.09 13.3999 19.14C13.9199 19.34 14.3299 19.75 14.5299 20.27C14.5799 20.25 14.6199 20.25 14.6699 20.25H18.6699C19.0799 20.25 19.4199 20.59 19.4199 21Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.8701 14.7799C19.0101 15.5699 17.8701 16.0099 16.7001 15.9999H7.04014C2.97014 15.7099 2.96014 9.79991 7.04014 9.50991H7.08014C4.29014 1.74991 16.0801 -1.34009 17.4301 6.79991C21.2001 7.27991 22.7301 12.2899 19.8701 14.7799Z" fill="currentColor" /><path d="M19.4199 21C19.4199 21.41 19.0799 21.75 18.6699 21.75H14.6699C14.6199 21.75 14.5799 21.75 14.5299 21.73C14.2399 22.47 13.5099 23 12.6699 23C11.8299 23 11.0999 22.47 10.8099 21.73C10.7599 21.75 10.7199 21.75 10.6699 21.75H6.66992C6.25992 21.75 5.91992 21.41 5.91992 21C5.91992 20.59 6.25992 20.25 6.66992 20.25H10.6699C10.7199 20.25 10.7599 20.25 10.8099 20.27C11.0099 19.75 11.4199 19.34 11.9399 19.14C11.9199 19.09 11.9199 19.05 11.9199 19V16H13.4199V19C13.4199 19.05 13.4199 19.09 13.3999 19.14C13.9199 19.34 14.3299 19.75 14.5299 20.27C14.5799 20.25 14.6199 20.25 14.6699 20.25H18.6699C19.0799 20.25 19.4199 20.59 19.4199 21Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCloudConnection as IconComponentType).keywords = [
  "cloud",
  "connection",
  "fog",
  "mist",
  "befog",
  "haze over",
  "becloud",
  "dapple",
  "mottle",
  "sully",
  "defile",
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

export default IconCloudConnection as IconComponentType;