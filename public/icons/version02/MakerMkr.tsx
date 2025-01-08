import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMakerMkr: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.25 14.5V9.5L11.42 12V14.5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.0899 14.5V9.5L13.9199 12V14.5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path d="M11.42 15.2499C11.01 15.2499 10.67 14.9099 10.67 14.4999V12.4199L8 10.8199V14.4999C8 14.9099 7.66 15.2499 7.25 15.2499C6.84 15.2499 6.5 14.9099 6.5 14.4999V9.49995C6.5 9.22995 6.65 8.97995 6.88 8.84995C7.11 8.71995 7.4 8.71995 7.63 8.85995L11.8 11.3599C12.03 11.4999 12.16 11.7399 12.16 11.9999V14.4999C12.17 14.9099 11.83 15.2499 11.42 15.2499Z" fill="currentColor" /><path d="M18.0899 15.2499C17.6799 15.2499 17.3399 14.9099 17.3399 14.4999V10.8199L14.6699 12.4199V14.4999C14.6699 14.9099 14.3299 15.2499 13.9199 15.2499C13.5099 15.2499 13.1699 14.9099 13.1699 14.4999V11.9999C13.1699 11.7399 13.3099 11.4899 13.5299 11.3599L17.7 8.85995C17.93 8.71995 18.22 8.71995 18.45 8.84995C18.69 8.97995 18.8299 9.22995 18.8299 9.49995V14.4999C18.8399 14.9099 18.4999 15.2499 18.0899 15.2499Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM12.1699 14.5C12.1699 14.91 11.8299 15.25 11.4199 15.25C11.0099 15.25 10.6699 14.91 10.6699 14.5V12.42L7.99994 10.82V14.5C7.99994 14.91 7.65994 15.25 7.24994 15.25C6.83994 15.25 6.49994 14.91 6.49994 14.5V9.5C6.49994 9.23 6.64994 8.98 6.87994 8.85C7.10994 8.72 7.39994 8.72 7.62994 8.86L11.7999 11.36C12.0299 11.5 12.1599 11.74 12.1599 12V14.5H12.1699ZM18.8399 14.5C18.8399 14.91 18.4999 15.25 18.0899 15.25C17.6799 15.25 17.3399 14.91 17.3399 14.5V10.82L14.6699 12.42V14.5C14.6699 14.91 14.3299 15.25 13.9199 15.25C13.5099 15.25 13.1699 14.91 13.1699 14.5V12C13.1699 11.74 13.3099 11.49 13.5299 11.36L17.7 8.86C17.93 8.72 18.22 8.72 18.45 8.85C18.69 8.98 18.8299 9.23 18.8299 9.5V14.5H18.8399Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMakerMkr as IconComponentType).keywords = [
  "maker",
  "mkr",
  "manufacturer",
  "shaper",
  "manufacturing business",
  "fabricator",
  "making",
  "designer",
  "factory",
  "manufacture",
  "manufacturing",
  "piano",
  "semitism",
  "hellenism",
  "the devil",
  "backwater",
  "mexican american",
  "mainland china",
  "native soil",
  "promised land"
];

export default IconMakerMkr as IconComponentType;