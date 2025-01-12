import { FC } from 'react';

const IconData2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.66992 8H4.66992C3.56992 8 2.66992 7.1 2.66992 6V4C2.66992 2.9 3.56992 2 4.66992 2H7.66992C8.76992 2 9.66992 2.9 9.66992 4V6C9.66992 7.1 8.76992 8 7.66992 8Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M21.4699 7H17.8699C17.2099 7 16.6699 6.45999 16.6699 5.79999V4.20001C16.6699 3.54001 17.2099 3 17.8699 3H21.4699C22.1299 3 22.6699 3.54001 22.6699 4.20001V5.79999C22.6699 6.45999 22.1299 7 21.4699 7Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M21.4699 14.5H17.8699C17.2099 14.5 16.6699 13.96 16.6699 13.3V11.7C16.6699 11.04 17.2099 10.5 17.8699 10.5H21.4699C22.1299 10.5 22.6699 11.04 22.6699 11.7V13.3C22.6699 13.96 22.1299 14.5 21.4699 14.5Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M9.66992 5H16.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.1699 5V18C13.1699 19.1 14.0699 20 15.1699 20H16.6699" fill="none" /><path d="M13.1699 5V18C13.1699 19.1 14.0699 20 15.1699 20H16.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.1699 12.5H16.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M21.4699 22H17.8699C17.2099 22 16.6699 21.46 16.6699 20.8V19.2C16.6699 18.54 17.2099 18 17.8699 18H21.4699C22.1299 18 22.6699 18.54 22.6699 19.2V20.8C22.6699 21.46 22.1299 22 21.4699 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.66992 8H4.66992C3.56992 8 2.66992 7.1 2.66992 6V4C2.66992 2.9 3.56992 2 4.66992 2H7.66992C8.76992 2 9.66992 2.9 9.66992 4V6C9.66992 7.1 8.76992 8 7.66992 8Z" fill="currentColor" /><path d="M21.4699 7H17.8699C17.2099 7 16.6699 6.45999 16.6699 5.79999V4.20001C16.6699 3.54001 17.2099 3 17.8699 3H21.4699C22.1299 3 22.6699 3.54001 22.6699 4.20001V5.79999C22.6699 6.45999 22.1299 7 21.4699 7Z" fill="currentColor" /><path d="M21.4699 14.5H17.8699C17.2099 14.5 16.6699 13.96 16.6699 13.3V11.7C16.6699 11.04 17.2099 10.5 17.8699 10.5H21.4699C22.1299 10.5 22.6699 11.04 22.6699 11.7V13.3C22.6699 13.96 22.1299 14.5 21.4699 14.5Z" fill="currentColor" /><path opacity={duotone ? "0.37" : "1"} d="M16.6699 13.25C17.0799 13.25 17.4199 12.91 17.4199 12.5C17.4199 12.09 17.0799 11.75 16.6699 11.75H13.9199V5.75H16.6699C17.0799 5.75 17.4199 5.41 17.4199 5C17.4199 4.59 17.0799 4.25 16.6699 4.25H9.66992C9.25992 4.25 8.91992 4.59 8.91992 5C8.91992 5.41 9.25992 5.75 9.66992 5.75H12.4199V18C12.4199 19.52 13.6499 20.75 15.1699 20.75H16.6699C17.0799 20.75 17.4199 20.41 17.4199 20C17.4199 19.59 17.0799 19.25 16.6699 19.25H15.1699C14.4799 19.25 13.9199 18.69 13.9199 18V13.25H16.6699Z" fill="currentColor" /><path d="M21.4699 22H17.8699C17.2099 22 16.6699 21.46 16.6699 20.8V19.2C16.6699 18.54 17.2099 18 17.8699 18H21.4699C22.1299 18 22.6699 18.54 22.6699 19.2V20.8C22.6699 21.46 22.1299 22 21.4699 22Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.66992 8H4.66992C3.56992 8 2.66992 7.1 2.66992 6V4C2.66992 2.9 3.56992 2 4.66992 2H7.66992C8.76992 2 9.66992 2.9 9.66992 4V6C9.66992 7.1 8.76992 8 7.66992 8Z" fill="currentColor" /><path d="M21.4699 7H17.8699C17.2099 7 16.6699 6.46 16.6699 5.8V4.2C16.6699 3.54 17.2099 3 17.8699 3H21.4699C22.1299 3 22.6699 3.54 22.6699 4.2V5.8C22.6699 6.46 22.1299 7 21.4699 7Z" fill="currentColor" /><path d="M21.4699 14.5H17.8699C17.2099 14.5 16.6699 13.96 16.6699 13.3V11.7C16.6699 11.04 17.2099 10.5 17.8699 10.5H21.4699C22.1299 10.5 22.6699 11.04 22.6699 11.7V13.3C22.6699 13.96 22.1299 14.5 21.4699 14.5Z" fill="currentColor" /><path opacity={duotone ? "0.96" : "1"} d="M16.6699 13.25C17.0799 13.25 17.4199 12.91 17.4199 12.5C17.4199 12.09 17.0799 11.75 16.6699 11.75H13.9199V5.75H16.6699C17.0799 5.75 17.4199 5.41 17.4199 5C17.4199 4.59 17.0799 4.25 16.6699 4.25H9.66992C9.25992 4.25 8.91992 4.59 8.91992 5C8.91992 5.41 9.25992 5.75 9.66992 5.75H12.4199V18C12.4199 19.52 13.6499 20.75 15.1699 20.75H16.6699C17.0799 20.75 17.4199 20.41 17.4199 20C17.4199 19.59 17.0799 19.25 16.6699 19.25H15.1699C14.4799 19.25 13.9199 18.69 13.9199 18V13.25H16.6699Z" fill="currentColor" /><path d="M21.4699 22H17.8699C17.2099 22 16.6699 21.46 16.6699 20.8V19.2C16.6699 18.54 17.2099 18 17.8699 18H21.4699C22.1299 18 22.6699 18.54 22.6699 19.2V20.8C22.6699 21.46 22.1299 22 21.4699 22Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconData2 as IconComponent).keywords = [
  "data",
  "2",
  "information",
  "informatics",
  "computer",
  "datafile",
  "datatype",
  "dataset",
  "databank",
  "database",
  "datasheet",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconData2 as IconComponent;