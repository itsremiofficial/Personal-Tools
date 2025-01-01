import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMessenger: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.67999 18.44V22L9.03998 20.11C9.97998 20.38 10.97 20.52 12 20.52C17.52 20.52 22 16.37 22 11.26C22 6.15001 17.52 2 12 2C6.48 2 2 6.15001 2 11.26C2 14.15 3.43999 16.74 5.67999 18.44Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.28 9.25L7.5 13.75L11.19 12.85L12.74 13.75L16.5 9.25L12.99 10.15L11.28 9.25Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M5.68024 18.44V20.29C5.68024 21.06 6.50023 21.54 7.17023 21.16L9.03027 20.11C9.97027 20.38 10.9602 20.52 11.9902 20.52C17.5102 20.52 21.9902 16.37 21.9902 11.26C21.9902 6.14999 17.5102 2 11.9902 2C6.47023 2 1.99023 6.14999 1.99023 11.26C2.00023 14.15 3.44024 16.74 5.68024 18.44Z" fill="currentColor" /><path d="M11.0206 9.56017L8.48052 12.5802C8.17052 12.9502 8.51052 13.5002 8.98052 13.3902L10.9905 12.9002C11.1205 12.8702 11.2505 12.8902 11.3605 12.9502L12.3705 13.5402C12.5805 13.6602 12.8505 13.6202 13.0005 13.4302L15.5005 10.4402C15.8105 10.0702 15.4605 9.51018 14.9905 9.64018L13.1705 10.1102C13.0505 10.1402 12.9205 10.1302 12.8105 10.0702L11.6305 9.45017C11.4305 9.33017 11.1706 9.38017 11.0206 9.56017Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMessenger as IconComponentType).keywords = [
  "messenger",
  "courier",
  "mailman",
  "mail",
  "agent",
  "message",
  "herald",
  "e-mail",
  "emissary",
  "factor"
];

export default IconMessenger as IconComponentType;