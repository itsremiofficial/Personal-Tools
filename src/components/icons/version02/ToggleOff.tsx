import { FC } from 'react';

const IconToggleOff: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M8.96992 16H11.3699C13.3699 16 14.1699 15.2 14.1699 13.2V10.8C14.1699 8.8 13.3699 8 11.3699 8H8.96992C6.96992 8 6.16992 8.8 6.16992 10.8V13.2C6.16992 15.2 6.96992 16 8.96992 16Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M17.6699 20H7.66992C3.66992 20 2.66992 19 2.66992 15V9C2.66992 5 3.66992 4 7.66992 4H17.6699C21.6699 4 22.6699 5 22.6699 9V15C22.6699 19 21.6699 20 17.6699 20Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17.3199 3.85986H8.01992C3.91992 3.85986 2.66992 5.10986 2.66992 9.20986V14.7899C2.66992 18.8899 3.91992 20.1399 8.01992 20.1399H17.3199C21.4199 20.1399 22.6699 18.8899 22.6699 14.7899V9.20986C22.6699 5.10986 21.4199 3.85986 17.3199 3.85986Z" fill="currentColor" /><path d="M11.4597 7.58008H9.22969C6.97969 7.58008 5.92969 8.63008 5.92969 10.8801V13.1101C5.92969 15.3601 6.97969 16.4101 9.22969 16.4101H11.4597C13.7097 16.4101 14.7597 15.3601 14.7597 13.1101V10.8801C14.7597 8.63008 13.7097 7.58008 11.4597 7.58008Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3199 3.85986H8.01992C3.91992 3.85986 2.66992 5.10986 2.66992 9.20986V14.7899C2.66992 18.8899 3.91992 20.1399 8.01992 20.1399H17.3199C21.4199 20.1399 22.6699 18.8899 22.6699 14.7899V9.20986C22.6699 5.10986 21.4199 3.85986 17.3199 3.85986ZM14.7599 13.1199C14.7599 15.3699 13.7099 16.4199 11.4599 16.4199H9.22992C6.97992 16.4199 5.92992 15.3699 5.92992 13.1199V10.8899C5.92992 8.63986 6.97992 7.58986 9.22992 7.58986H11.4599C13.7099 7.58986 14.7599 8.63986 14.7599 10.8899V13.1199Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconToggleOff as IconComponent).keywords = [
  "toggle",
  "off",
  "on-off switch",
  "toggle switch",
  "lever",
  "cycle",
  "switch",
  "button",
  "switching",
  "rotate",
  "rotation",
  "away",
  "cancelled",
  "forth",
  "inactive",
  "disconnected",
  "unsatisfactory",
  "soured",
  "sour",
  "off-duty"
];

export default IconToggleOff as IconComponent;