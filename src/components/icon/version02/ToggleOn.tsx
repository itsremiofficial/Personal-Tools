import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconToggleOn: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M13.9699 16H16.3699C18.3699 16 19.1699 15.2 19.1699 13.2V10.8C19.1699 8.8 18.3699 8 16.3699 8H13.9699C11.9699 8 11.1699 8.8 11.1699 10.8V13.2C11.1699 15.2 11.9699 16 13.9699 16Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M17.6699 20H7.66992C3.66992 20 2.66992 19 2.66992 15V9C2.66992 5 3.66992 4 7.66992 4H17.6699C21.6699 4 22.6699 5 22.6699 9V15C22.6699 19 21.6699 20 17.6699 20Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M8.01992 3.85986H17.3199C21.4199 3.85986 22.6699 5.10986 22.6699 9.20986V14.7899C22.6699 18.8899 21.4199 20.1399 17.3199 20.1399H8.01992C3.91992 20.1399 2.66992 18.8899 2.66992 14.7899V9.20986C2.66992 5.10986 3.91992 3.85986 8.01992 3.85986Z" fill="currentColor" /><path d="M13.8801 7.58008H16.1101C18.3601 7.58008 19.4101 8.63008 19.4101 10.8801V13.1101C19.4101 15.3601 18.3601 16.4101 16.1101 16.4101H13.8801C11.6301 16.4101 10.5801 15.3601 10.5801 13.1101V10.8801C10.5801 8.63008 11.6301 7.58008 13.8801 7.58008Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3199 3.85986H8.01992C3.91992 3.85986 2.66992 5.10986 2.66992 9.20986V14.7899C2.66992 18.8899 3.91992 20.1399 8.01992 20.1399H17.3199C21.4199 20.1399 22.6699 18.8899 22.6699 14.7899V9.20986C22.6699 5.10986 21.4199 3.85986 17.3199 3.85986ZM19.4099 13.1199C19.4099 15.3699 18.3599 16.4199 16.1099 16.4199H13.8799C11.6299 16.4199 10.5799 15.3699 10.5799 13.1199V10.8899C10.5799 8.63986 11.6299 7.58986 13.8799 7.58986H16.1099C18.3599 7.58986 19.4099 8.63986 19.4099 10.8899V13.1199Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconToggleOn as IconComponentType).keywords = [
  "toggle",
  "on",
  "on-off switch",
  "toggle switch",
  "lever",
  "cycle",
  "switch",
  "button",
  "switching",
  "rotate",
  "rotation",
  "bps",
  "add",
  "nso",
  "our",
  "bsi",
  "nbs",
  "opti",
  "sno",
  "weap"
];

export default IconToggleOn as IconComponentType;