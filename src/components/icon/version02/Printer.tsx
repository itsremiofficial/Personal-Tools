import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPrinter: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.91992 7H17.4199V5C17.4199 3 16.6699 2 14.4199 2H10.9199C8.66992 2 7.91992 3 7.91992 5V7Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.6699 15V19C16.6699 21 15.6699 22 13.6699 22H11.6699C9.66992 22 8.66992 21 8.66992 19V15H16.6699Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.6699 10V15C21.6699 17 20.6699 18 18.6699 18H16.6699V15H8.66992V18H6.66992C4.66992 18 3.66992 17 3.66992 15V10C3.66992 8 4.66992 7 6.66992 7H18.6699C20.6699 7 21.6699 8 21.6699 10Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.6699 15H16.4599H7.66992" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.66992 11H10.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6699 15V19C16.6699 20.66 15.3299 22 13.6699 22H11.6699C10.0099 22 8.66992 20.66 8.66992 19V15H16.6699Z" fill="currentColor" /><path d="M7.66992 7V5C7.66992 3.34 9.00992 2 10.6699 2H14.6699C16.3299 2 17.6699 3.34 17.6699 5V7H7.66992Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.6699 7H6.66992C4.66992 7 3.66992 8 3.66992 10V15C3.66992 17 4.66992 18 6.66992 18H8.66992V15H16.6699V18H18.6699C20.6699 18 21.6699 17 21.6699 15V10C21.6699 8 20.6699 7 18.6699 7ZM10.6699 11.75H7.66992C7.25992 11.75 6.91992 11.41 6.91992 11C6.91992 10.59 7.25992 10.25 7.66992 10.25H10.6699C11.0799 10.25 11.4199 10.59 11.4199 11C11.4199 11.41 11.0799 11.75 10.6699 11.75Z" fill="currentColor" /><path d="M11.4199 11C11.4199 11.41 11.0799 11.75 10.6699 11.75H7.66992C7.25992 11.75 6.91992 11.41 6.91992 11C6.91992 10.59 7.25992 10.25 7.66992 10.25H10.6699C11.0799 10.25 11.4199 10.59 11.4199 11Z" fill="currentColor" /><path d="M17.6699 15.75H7.66992C7.25992 15.75 6.91992 15.41 6.91992 15C6.91992 14.59 7.25992 14.25 7.66992 14.25H17.6699C18.0799 14.25 18.4199 14.59 18.4199 15C18.4199 15.41 18.0799 15.75 17.6699 15.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.66992 5C7.66992 3.34 9.00992 2 10.6699 2H14.6699C16.3299 2 17.6699 3.34 17.6699 5C17.6699 5.55 17.2199 6 16.6699 6H8.66992C8.11992 6 7.66992 5.55 7.66992 5Z" fill="currentColor" /><path d="M18.4199 15C18.4199 15.41 18.0799 15.75 17.6699 15.75H16.6699V19C16.6699 20.66 15.3299 22 13.6699 22H11.6699C10.0099 22 8.66992 20.66 8.66992 19V15.75H7.66992C7.25992 15.75 6.91992 15.41 6.91992 15C6.91992 14.59 7.25992 14.25 7.66992 14.25H17.6699C18.0799 14.25 18.4199 14.59 18.4199 15Z" fill="currentColor" /><path d="M18.6699 7H6.66992C4.66992 7 3.66992 8 3.66992 10V15C3.66992 17 4.66992 18 6.66992 18H7.04492C7.3901 18 7.66992 17.7202 7.66992 17.375C7.66992 17.0298 7.38123 16.7604 7.05833 16.6384C6.39611 16.3882 5.91992 15.7453 5.91992 15C5.91992 14.04 6.70992 13.25 7.66992 13.25H17.6699C18.6299 13.25 19.4199 14.04 19.4199 15C19.4199 15.7453 18.9437 16.3882 18.2815 16.6384C17.9586 16.7604 17.6699 17.0298 17.6699 17.375C17.6699 17.7202 17.9497 18 18.2949 18H18.6699C20.6699 18 21.6699 17 21.6699 15V10C21.6699 8 20.6699 7 18.6699 7ZM10.6699 11.75H7.66992C7.25992 11.75 6.91992 11.41 6.91992 11C6.91992 10.59 7.25992 10.25 7.66992 10.25H10.6699C11.0799 10.25 11.4199 10.59 11.4199 11C11.4199 11.41 11.0799 11.75 10.6699 11.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPrinter as IconComponentType).keywords = [
  "printer",
  "pressman",
  "printing machine",
  "printout",
  "copier",
  "printing",
  "impression",
  "print",
  "ink",
  "typesetting"
];

export default IconPrinter as IconComponentType;