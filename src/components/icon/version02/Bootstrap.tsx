import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBootstrap: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6699 3H7.66992C6.00992 3 4.66992 4.34 4.66992 6V6.84C4.66992 7.61 4.54993 8.37001 4.29993 9.10001C3.91993 10.23 2.85992 11 1.66992 11V13C2.85992 13 3.91993 13.76 4.29993 14.9C4.53993 15.63 4.66992 16.4 4.66992 17.16V18C4.66992 19.66 6.00992 21 7.66992 21H17.6699C19.3299 21 20.6699 19.66 20.6699 18V17.16C20.6699 16.39 20.7899 15.63 21.0399 14.9C21.4199 13.77 22.4799 13 23.6699 13V11C22.4799 11 21.4199 10.24 21.0399 9.10001C20.7999 8.37001 20.6699 7.6 20.6699 6.84V6C20.6699 4.34 19.3299 3 17.6699 3Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.4199 12H13.3399C14.4899 12 15.4199 12.93 15.4199 14.08C15.4199 15.23 14.4899 16.16 13.3399 16.16H10.4199V7.82999H13.3399C14.4899 7.82999 15.4199 8.76 15.4199 9.91C15.4199 11.06 14.4899 11.99 13.3399 11.99H10.4199" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M17.6699 3H7.66992C6.00992 3 4.66992 4.34 4.66992 6V6.84C4.66992 7.61 4.54993 8.37 4.29993 9.1C3.91993 10.23 2.85992 11 1.66992 11V13C2.85992 13 3.91993 13.76 4.29993 14.9C4.53993 15.63 4.66992 16.4 4.66992 17.16V18C4.66992 19.66 6.00992 21 7.66992 21H17.6699C19.3299 21 20.6699 19.66 20.6699 18V17.16C20.6699 16.39 20.7899 15.63 21.0399 14.9C21.4199 13.77 22.4799 13 23.6699 13V11C22.4799 11 21.4199 10.24 21.0399 9.1C20.7999 8.37 20.6699 7.6 20.6699 6.84V6C20.6699 4.34 19.3299 3 17.6699 3Z" fill="currentColor" /><path d="M13.3399 16.92H10.4199C10.0099 16.92 9.66992 16.58 9.66992 16.17V7.83997C9.66992 7.42997 10.0099 7.08997 10.4199 7.08997H13.3399C14.8999 7.08997 16.1699 8.35997 16.1699 9.91997C16.1699 10.74 15.8199 11.49 15.2499 12C15.8099 12.52 16.1699 13.26 16.1699 14.08C16.1699 15.65 14.8999 16.92 13.3399 16.92ZM11.1699 15.42H13.3399C14.0799 15.42 14.6699 14.82 14.6699 14.09C14.6699 13.36 14.0699 12.76 13.3399 12.76H11.1699V15.42ZM11.1699 11.25H13.3399C14.0799 11.25 14.6699 10.65 14.6699 9.91997C14.6699 9.18997 14.0699 8.58997 13.3399 8.58997H11.1699V11.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3399 12.75H11.1699V15.42H13.3399C14.0799 15.42 14.6699 14.82 14.6699 14.09C14.6699 13.36 14.0699 12.75 13.3399 12.75Z" fill="none" /><path d="M13.3399 8.57999H11.1699V11.25H13.3399C14.0799 11.25 14.6699 10.65 14.6699 9.92001C14.6699 9.19001 14.0699 8.57999 13.3399 8.57999Z" fill="none" /><path d="M23.6699 11C22.4799 11 21.4199 10.24 21.0399 9.10001C20.7999 8.37001 20.6699 7.59999 20.6699 6.82999V6C20.6699 4.34 19.3299 3 17.6699 3H7.66992C6.00992 3 4.66992 4.34 4.66992 6V6.84C4.66992 7.61 4.54993 8.36999 4.29993 9.10999C3.91993 10.24 2.85992 11.01 1.66992 11.01V13.01C2.85992 13.01 3.91993 13.77 4.29993 14.91C4.53993 15.64 4.66992 16.41 4.66992 17.17V18C4.66992 19.66 6.00992 21 7.66992 21H17.6699C19.3299 21 20.6699 19.66 20.6699 18V17.16C20.6699 16.39 20.7899 15.63 21.0399 14.9C21.4199 13.77 22.4799 13 23.6699 13V11ZM16.1699 14.08C16.1699 15.64 14.8999 16.91 13.3399 16.91H10.4199C10.0099 16.91 9.66992 16.57 9.66992 16.16V7.82999C9.66992 7.41999 10.0099 7.07999 10.4199 7.07999H13.3399C14.8999 7.07999 16.1699 8.35 16.1699 9.91C16.1699 10.73 15.8199 11.48 15.2499 11.99C15.8199 12.52 16.1699 13.26 16.1699 14.08Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBootstrap as IconComponentType).keywords = [
  "bootstrap",
  "boot",
  "startup",
  "start",
  "method",
  "bootable",
  "lifters",
  "bootstrapper",
  "scss",
  "multiproject"
];

export default IconBootstrap as IconComponentType;