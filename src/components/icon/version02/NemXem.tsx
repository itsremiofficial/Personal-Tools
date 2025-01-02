import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconNemXem: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.66992 5.00001C2.66992 5.00001 12.6699 -0.99999 22.6699 5.00001C22.6699 5.00001 22.6699 16 12.6699 22C12.6699 22 2.66992 17 2.66992 5.00001Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" /><g opacity={duotone ? "0.4" : "1"}><path d="M2.77002 7.07001C5.88002 17.15 12.67 10 12.67 10C11.67 4.00002 16.7401 2.94002 16.7401 2.94002L17.33 2.83002" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.0199 18.51C17.0199 18.51 19.6699 13 12.6699 10" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.6" : "1"} d="M17.03 18.49C17.02 18.5 17.02 18.51 17.02 18.51C15.83 19.77 14.4 20.96 12.67 22C12.67 22 3.83002 17.58 2.77002 7.07996C5.88002 17.15 12.67 9.99996 12.67 9.99996C19.43 12.9 17.19 18.14 17.03 18.49Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.0297 18.4899C17.1897 18.1399 19.4297 12.8999 12.6697 9.99995C11.6697 3.99995 16.7397 2.93995 16.7397 2.93995L17.3297 2.81995H17.3397C19.0797 3.22995 20.8697 3.91995 22.6697 4.99995C22.6697 4.99995 22.6697 12.4999 17.0297 18.4899Z" fill="currentColor" /><path d="M17.3299 2.82003L16.7399 2.94003C16.7399 2.94003 11.6699 4.00003 12.6699 10C12.6699 10 5.8799 17.15 2.7699 7.08003V7.07003C2.7099 6.41003 2.66992 5.71003 2.66992 5.00003C2.66992 5.00003 9.38989 0.97003 17.3299 2.82003Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.7401 17.88L14.7301 20.1C14.4701 20.66 14.0901 21.15 13.5801 21.49C13.0601 21.84 12.3801 21.87 11.8401 21.53C10.2001 20.49 6.62015 17.82 4.45015 13.19C4.37015 13.03 4.59011 12.87 4.73011 12.97C5.30011 13.37 5.91009 13.65 6.58009 13.81C6.99009 13.9 7.41013 13.94 7.81013 13.94C9.67013 13.94 11.3501 12.99 12.4701 12.17C12.8001 11.93 13.2401 11.88 13.5801 12.09C14.7001 12.79 15.4501 13.63 15.8201 14.58C16.4601 16.26 15.7601 17.81 15.7401 17.88Z" fill="none" /><path d="M17.5201 18.05C17.4401 18.14 17.2802 18.04 17.3202 17.93C17.7602 16.47 18.3301 12.62 13.2301 10.18C12.9201 10.03 12.6901 9.75001 12.6501 9.41001C12.0301 3.85001 16.8202 2.85 16.8202 2.85C17.2102 2.77 17.6201 2.77 18.0001 2.88C19.0801 3.17 20.1801 3.57 21.2901 4.11C22.2401 4.57 22.7901 5.57001 22.6501 6.62001C22.3201 9.10001 21.2201 13.88 17.5201 18.05Z" fill="none" /><path d="M11.23 10.21L11.26 10.41C11.33 10.79 11.1699 11.18 10.8499 11.38C8.69995 12.73 5.17994 13.75 3.02994 7.84C2.82994 7.3 2.70996 6.9 2.66996 6.32C2.61996 5.56 3.04995 4.69001 3.72995 4.37001C5.48995 3.55001 9.20998 2.12 13.7 2.25C13.9 2.26 13.97 2.52 13.81 2.63C12.08 3.95 10.59 6.33 11.23 10.21Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconNemXem as IconComponentType).keywords = [
  "nem",
  "xem",
  "ene",
  "eod",
  "nor",
  "not",
  "nao",
  "vai",
  "niente",
  "hoa",
  "eet"
];

export default IconNemXem as IconComponentType;