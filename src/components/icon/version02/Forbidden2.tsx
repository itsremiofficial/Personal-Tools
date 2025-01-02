import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconForbidden2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5699 2H9.76993C9.08993 2 8.12992 2.4 7.64992 2.88L3.54993 6.98001C3.06993 7.46001 2.66992 8.42001 2.66992 9.10001V14.9C2.66992 15.58 3.06993 16.54 3.54993 17.02L7.64992 21.12C8.12992 21.6 9.08993 22 9.76993 22H15.5699C16.2499 22 17.2099 21.6 17.6899 21.12L21.7899 17.02C22.2699 16.54 22.6699 15.58 22.6699 14.9V9.10001C22.6699 8.42001 22.2699 7.46001 21.7899 6.98001L17.6899 2.88C17.2099 2.4 16.2499 2 15.5699 2Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M9.16992 15.5L16.1699 8.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M16.1699 15.5L9.16992 8.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M15.5699 2H9.76993C9.08993 2 8.12992 2.4 7.64992 2.88L3.54993 6.98001C3.06993 7.46001 2.66992 8.42001 2.66992 9.10001V14.9C2.66992 15.58 3.06993 16.54 3.54993 17.02L7.64992 21.12C8.12992 21.6 9.08993 22 9.76993 22H15.5699C16.2499 22 17.2099 21.6 17.6899 21.12L21.7899 17.02C22.2699 16.54 22.6699 15.58 22.6699 14.9V9.10001C22.6699 8.42001 22.2699 7.46001 21.7899 6.98001L17.6899 2.88C17.2099 2.4 16.2499 2 15.5699 2Z" fill="currentColor" /><path d="M13.7303 12L16.7003 9.03C16.9903 8.74 16.9903 8.26 16.7003 7.97C16.4103 7.68 15.9304 7.68 15.6404 7.97L12.6704 10.94L9.70035 7.97C9.41035 7.68 8.93035 7.68 8.64035 7.97C8.35035 8.26 8.35035 8.74 8.64035 9.03L11.6104 12L8.64035 14.97C8.35035 15.26 8.35035 15.74 8.64035 16.03C8.79035 16.18 8.98035 16.25 9.17035 16.25C9.36035 16.25 9.55035 16.18 9.70035 16.03L12.6704 13.06L15.6404 16.03C15.7904 16.18 15.9804 16.25 16.1704 16.25C16.3604 16.25 16.5503 16.18 16.7003 16.03C16.9903 15.74 16.9903 15.26 16.7003 14.97L13.7303 12Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.7899 6.98L17.6899 2.88C17.2099 2.4 16.2499 2 15.5699 2H9.76992C9.08992 2 8.12992 2.4 7.64992 2.88L3.54992 6.98C3.06992 7.46 2.66992 8.42 2.66992 9.1V14.9C2.66992 15.58 3.06992 16.54 3.54992 17.02L7.64992 21.12C8.12992 21.6 9.08992 22 9.76992 22H15.5699C16.2499 22 17.2099 21.6 17.6899 21.12L21.7899 17.02C22.2699 16.54 22.6699 15.58 22.6699 14.9V9.1C22.6699 8.42 22.2699 7.46 21.7899 6.98ZM16.6999 14.97C16.9899 15.26 16.9899 15.74 16.6999 16.03C16.5499 16.18 16.3599 16.25 16.1699 16.25C15.9799 16.25 15.7899 16.18 15.6399 16.03L12.6699 13.06L9.69992 16.03C9.54992 16.18 9.35992 16.25 9.16992 16.25C8.97992 16.25 8.78992 16.18 8.63992 16.03C8.34992 15.74 8.34992 15.26 8.63992 14.97L11.6099 12L8.63992 9.03C8.34992 8.74 8.34992 8.26 8.63992 7.97C8.92992 7.68 9.40992 7.68 9.69992 7.97L12.6699 10.94L15.6399 7.97C15.9299 7.68 16.4099 7.68 16.6999 7.97C16.9899 8.26 16.9899 8.74 16.6999 9.03L13.7299 12L16.6999 14.97Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconForbidden2 as IconComponentType).keywords = [
  "forbidden",
  "2",
  "prohibited",
  "impermissible",
  "taboo",
  "tabu",
  "out",
  "proscribed",
  "banned",
  "off-limits",
  "not",
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

export default IconForbidden2 as IconComponentType;