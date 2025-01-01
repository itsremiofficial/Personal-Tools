import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMoneyRemove: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 15.3V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V15C22 18.5 20 20 17 20H8.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.5 9.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 18C9 18.75 8.78998 19.46 8.41998 20.06C7.72998 21.22 6.46 22 5 22C3.54 22 2.27002 21.22 1.58002 20.06C1.21002 19.46 1 18.75 1 18C1 15.79 2.79 14 5 14C7.21 14 9 15.79 9 18Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.06897 19.0402L3.95898 16.9302" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.03967 16.96L3.92969 19.0699" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 9V15C22 18.5 20 20 17 20H8.45001C8.80001 19.41 9 18.73 9 18C9 15.79 7.21 14 5 14C3.8 14 2.73 14.53 2 15.36V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9Z" fill="currentColor" /><path d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" fill="currentColor" /><path d="M18.5 14.75C18.09 14.75 17.75 14.41 17.75 14V10C17.75 9.59 18.09 9.25 18.5 9.25C18.91 9.25 19.25 9.59 19.25 10V14C19.25 14.41 18.91 14.75 18.5 14.75Z" fill="currentColor" /><path d="M5 14C3.8 14 2.73 14.53 2 15.36C1.38 16.07 1 16.99 1 18C1 18.75 1.21002 19.46 1.58002 20.06C2.27002 21.22 3.54 22 5 22C6.01 22 6.93001 21.63 7.63 21C7.94 20.74 8.20998 20.42 8.41998 20.06C8.78998 19.46 9 18.75 9 18C9 15.79 7.21 14 5 14ZM6.59998 19.58C6.44998 19.73 6.26001 19.8 6.07001 19.8C5.88001 19.8 5.68998 19.73 5.53998 19.58L5.01001 19.05L4.46002 19.6C4.31002 19.75 4.11999 19.82 3.92999 19.82C3.73999 19.82 3.55002 19.75 3.40002 19.6C3.11002 19.31 3.11002 18.83 3.40002 18.54L3.95001 17.99L3.41998 17.46C3.12998 17.17 3.12998 16.69 3.41998 16.4C3.70998 16.11 4.18998 16.11 4.47998 16.4L5.01001 16.93L5.51001 16.43C5.80001 16.14 6.28001 16.14 6.57001 16.43C6.86001 16.72 6.86001 17.2 6.57001 17.49L6.07001 17.99L6.59998 18.52C6.88998 18.81 6.88998 19.28 6.59998 19.58Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMoneyRemove as IconComponentType).keywords = [
  "money",
  "remove",
  "rich",
  "monied",
  "wealthy",
  "affluent",
  "loaded",
  "flush",
  "muni",
  "finance",
  "financing",
  "take out",
  "get rid of",
  "take away",
  "move out",
  "bump off",
  "slay",
  "murder",
  "take",
  "transfer"
];

export default IconMoneyRemove as IconComponentType;