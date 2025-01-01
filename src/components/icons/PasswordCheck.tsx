import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPasswordCheck: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.02 19.5H7.5C6.88 19.5 6.33 19.48 5.84 19.41C3.21 19.12 2.5 17.88 2.5 14.5V9.5C2.5 6.12 3.21 4.88 5.84 4.59C6.33 4.52 6.88 4.5 7.5 4.5H10.96" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.0195 4.5H16.4995C17.1195 4.5 17.6695 4.52 18.1595 4.59C20.7895 4.88 21.4995 6.12 21.4995 9.5V14.5C21.4995 17.88 20.7895 19.12 18.1595 19.41C17.6695 19.48 17.1195 19.5 16.4995 19.5H15.0195" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.0941 12H11.1031" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.09412 12H7.1031" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15 22C14.59 22 14.25 21.66 14.25 21.25V2.75C14.25 2.34 14.59 2 15 2C15.41 2 15.75 2.34 15.75 2.75V21.25C15.75 21.66 15.41 22 15 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M6.5 20H12.5V4H6.5C4.29 4 2.5 5.79 2.5 8V16C2.5 18.21 4.29 20 6.5 20Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18 20H15V4H18C20.21 4 22 5.79 22 8V16C22 18.21 20.21 20 18 20Z" fill="currentColor" /><path d="M5.75 12.9999C5.62 12.9999 5.49 12.9699 5.37 12.9199C5.25 12.8699 5.14 12.7999 5.04 12.7099C4.95 12.6099 4.88 12.4999 4.82 12.3799C4.77 12.2599 4.75 12.1299 4.75 11.9999C4.75 11.7399 4.86 11.4799 5.04 11.2899C5.09 11.2499 5.14 11.2099 5.19 11.1699C5.25 11.1299 5.31 11.0999 5.37 11.0799C5.43 11.0499 5.49 11.0299 5.55 11.0199C5.89 10.9499 6.23 11.0599 6.46 11.2899C6.64 11.4799 6.75 11.7399 6.75 11.9999C6.75 12.1299 6.72 12.2599 6.67 12.3799C6.62 12.4999 6.55 12.6099 6.46 12.7099C6.36 12.7999 6.25 12.8699 6.13 12.9199C6.01 12.9699 5.88 12.9999 5.75 12.9999Z" fill="currentColor" /><path d="M9.25 13C9.12 13 8.99 12.97 8.87 12.92C8.75 12.87 8.64 12.8 8.54 12.71C8.35 12.52 8.25 12.27 8.25 12C8.25 11.87 8.28 11.74 8.33 11.62C8.38 11.49 8.45 11.39 8.54 11.29C8.91 10.92 9.58 10.92 9.96 11.29C10.14 11.48 10.25 11.74 10.25 12C10.25 12.13 10.22 12.26 10.17 12.38C10.12 12.5 10.05 12.61 9.96 12.71C9.86 12.8 9.75 12.87 9.63 12.92C9.51 12.97 9.38 13 9.25 13Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPasswordCheck as IconComponentType).keywords = [
  "password",
  "check",
  "countersign",
  "watchword",
  "word",
  "parole",
  "passcode",
  "username",
  "passphrase",
  "codeword",
  "cleartext",
  "match",
  "hitch",
  "check out",
  "curb",
  "check into",
  "checkout",
  "turn back",
  "arrest",
  "hold"
];

export default IconPasswordCheck as IconComponentType;