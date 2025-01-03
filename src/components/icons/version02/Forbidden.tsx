import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconForbidden: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5699 2H9.76993C9.08993 2 8.12992 2.4 7.64992 2.88L3.54993 6.98001C3.06993 7.46001 2.66992 8.42001 2.66992 9.10001V14.9C2.66992 15.58 3.06993 16.54 3.54993 17.02L7.64992 21.12C8.12992 21.6 9.08993 22 9.76993 22H15.5699C16.2499 22 17.2099 21.6 17.6899 21.12L21.7899 17.02C22.2699 16.54 22.6699 15.58 22.6699 14.9V9.10001C22.6699 8.42001 22.2699 7.46001 21.7899 6.98001L17.6899 2.88C17.2099 2.4 16.2499 2 15.5699 2Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5.61035 19.08L19.7504 4.94" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M15.5699 2H9.76993C9.08993 2 8.12992 2.4 7.64992 2.88L3.54993 6.98001C3.06993 7.46001 2.66992 8.42001 2.66992 9.10001V14.9C2.66992 15.58 3.06993 16.54 3.54993 17.02L7.64992 21.12C8.12992 21.6 9.08993 22 9.76993 22H15.5699C16.2499 22 17.2099 21.6 17.6899 21.12L21.7899 17.02C22.2699 16.54 22.6699 15.58 22.6699 14.9V9.10001C22.6699 8.42001 22.2699 7.46001 21.7899 6.98001L17.6899 2.88C17.2099 2.4 16.2499 2 15.5699 2Z" fill="currentColor" /><path d="M3.68988 21.75C3.49988 21.75 3.30988 21.68 3.15988 21.53C2.86988 21.24 2.86988 20.76 3.15988 20.47L21.1399 2.48996C21.4299 2.19996 21.9099 2.19996 22.1999 2.48996C22.4899 2.77996 22.4899 3.25996 22.1999 3.54996L4.21988 21.53C4.07988 21.68 3.88988 21.75 3.68988 21.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6899 2.88C17.2099 2.4 16.2499 2 15.5699 2H9.76992C9.08992 2 8.12992 2.4 7.64992 2.88L3.54992 6.98C3.06992 7.46 2.66992 8.42 2.66992 9.1V14.9C2.66992 15.58 3.06992 16.54 3.54992 17.02L5.07992 18.55L19.2199 4.41L17.6899 2.88Z" fill="currentColor" /><path d="M21.7896 6.98L20.2796 5.47L6.13965 19.61L7.64965 21.12C8.12965 21.6 9.08965 22 9.76965 22H15.5696C16.2496 22 17.2097 21.6 17.6896 21.12L21.7896 17.02C22.2696 16.54 22.6696 15.58 22.6696 14.9V9.1C22.6696 8.42 22.2696 7.46 21.7896 6.98Z" fill="currentColor" /><path d="M3.15988 20.47C2.86988 20.76 2.86988 21.24 3.15988 21.53C3.30988 21.68 3.49988 21.75 3.68988 21.75C3.87988 21.75 4.06988 21.68 4.21988 21.53L6.13988 19.61L5.07988 18.55L3.15988 20.47Z" fill="currentColor" /><path d="M22.1997 3.54999C22.4897 3.25999 22.4897 2.77999 22.1997 2.48999C21.9097 2.19999 21.4297 2.19999 21.1397 2.48999L19.2197 4.40999L20.2797 5.46999L22.1997 3.54999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconForbidden as IconComponentType).keywords = [
  "forbidden",
  "prohibited",
  "impermissible",
  "taboo",
  "tabu",
  "out",
  "proscribed",
  "banned",
  "off-limits",
  "not"
];

export default IconForbidden as IconComponentType;