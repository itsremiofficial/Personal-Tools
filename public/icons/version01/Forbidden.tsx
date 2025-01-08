import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconForbidden: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M18.5 5.5L5.50002 18.4998" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M22 10.8489V13.1511C22 14.3773 22 14.9905 21.7716 15.5418C21.5433 16.0931 21.1097 16.5266 20.2426 17.3937L17.3937 20.2426C16.5266 21.1097 16.0931 21.5433 15.5418 21.7716C14.9905 22 14.3773 22 13.1511 22H10.8489C9.62267 22 9.00954 22 8.45823 21.7716C7.90691 21.5433 7.47337 21.1097 6.60628 20.2426L3.75736 17.3937C2.89027 16.5266 2.45672 16.0931 2.22836 15.5418C2 14.9905 2 14.3773 2 13.1511V10.8489C2 9.62267 2 9.00954 2.22836 8.45823C2.45672 7.90691 2.89027 7.47337 3.75736 6.60628L6.60628 3.75736C7.47337 2.89027 7.90691 2.45672 8.45823 2.22836C9.00954 2 9.62267 2 10.8489 2H13.1511C14.3773 2 14.9905 2 15.5418 2.22836C16.0931 2.45672 16.5266 2.89027 17.3937 3.75736L20.2426 6.60628C21.1097 7.47337 21.5433 7.90691 21.7716 8.45823C22 9.00954 22 9.62267 22 10.8489Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M3.75712 17.3937L5.18154 18.8181L6.60623 20.2427C7.47332 21.1098 7.90686 21.5434 8.45818 21.7717C9.00949 22.0001 9.62262 22.0001 10.8489 22.0001H13.151C14.3773 22.0001 14.9904 22.0001 15.5417 21.7717C16.093 21.5434 16.5266 21.1098 17.3937 20.2427L20.2426 17.3938C21.1097 16.5267 21.5432 16.0932 21.7716 15.5419C21.9999 14.9905 22 14.3774 22 13.1512V10.849C22 9.62275 21.9999 9.00962 21.7716 8.45831C21.5432 7.90699 21.1097 7.47345 20.2426 6.60636L18.818 5.1819L17.3935 3.75736C16.5264 2.89027 16.0928 2.45672 15.5415 2.22836C14.9902 2 14.3771 2 13.1508 2H10.8487C9.62242 2 9.0093 2 8.45798 2.22836C7.90667 2.45672 7.47312 2.89027 6.60603 3.75736L3.75712 6.60628C2.89002 7.47337 2.45648 7.90691 2.22812 8.45823C1.99976 9.00954 1.99976 9.62267 1.99976 10.8489V13.1511C1.99976 14.3773 1.99976 14.9905 2.22812 15.5418C2.45648 16.0931 2.89002 16.5266 3.75712 17.3937Z" fill="currentColor" /><path d="M18.8181 5.18213L5.18164 18.8184"  strokeWidth={width} /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 13.1511V10.8489C22 9.62267 22 9.00954 21.7716 8.45823C21.5433 7.90691 21.1097 7.47337 20.2426 6.60628L19.3485 5.71214L5.71203 19.3484L6.60628 20.2426C7.47337 21.1097 7.90691 21.5433 8.45823 21.7716C9.00954 22 9.62267 22 10.8489 22H13.1511C14.3773 22 14.9905 22 15.5418 21.7716C16.0931 21.5433 16.5266 21.1097 17.3937 20.2426L20.2426 17.3937C21.1097 16.5266 21.5433 16.0931 21.7716 15.5418C22 14.9905 22 14.3773 22 13.1511Z" fill="currentColor" /><path d="M4.65137 18.2877L3.75736 17.3937C2.89027 16.5266 2.45672 16.0931 2.22836 15.5418C2 14.9905 2 14.3773 2 13.1511V10.8489C2 9.62267 2 9.00954 2.22836 8.45823C2.45672 7.90691 2.89027 7.47337 3.75736 6.60628L6.60628 3.75736C7.47337 2.89027 7.90691 2.45672 8.45823 2.22836C9.00954 2 9.62267 2 10.8489 2H13.1511C14.3773 2 14.9905 2 15.5418 2.22836C16.0931 2.45672 16.5266 2.89027 17.3937 3.75736L18.2878 4.65148L4.65137 18.2877Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconForbidden as IconComponentType).keywords = [
  "forbidden",
  "prohibited",
  "impermissible",
  "taboo",
  "tabu",
  "out",
  "proscribed",
  "banned",
  "off-limits",
  "not"
];

export default IconForbidden as IconComponentType;