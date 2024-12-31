import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDevices: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0104 12.7298C17.6014 12.7298 18.0804 12.2507 18.0804 11.6598C18.0804 11.0688 17.6014 10.5898 17.0104 10.5898C16.4195 10.5898 15.9404 11.0688 15.9404 11.6598C15.9404 12.2507 16.4195 12.7298 17.0104 12.7298Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 6V7.78998C19.75 7.75998 19.46 7.73999 19.15 7.73999H14.87C12.73 7.73999 12.02 8.45003 12.02 10.59V15.7H6C2.8 15.7 2 14.9 2 11.7V6C2 2.8 2.8 2 6 2H16C19.2 2 20 2.8 20 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 11.8999H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M9 15.7002V20.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.9502 20H12.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M17.0104 12.7298C17.6014 12.7298 18.0804 12.2507 18.0804 11.6598C18.0804 11.0688 17.6014 10.5898 17.0104 10.5898C16.4195 10.5898 15.9404 11.0688 15.9404 11.6598C15.9404 12.2507 16.4195 12.7298 17.0104 12.7298Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.9995 10.5903V19.1503C21.9995 21.2903 21.2895 22.0002 19.1495 22.0002H14.8695C12.7295 22.0002 12.0195 21.2903 12.0195 19.1503V10.5903C12.0195 8.45027 12.7295 7.74023 14.8695 7.74023H19.1495C19.4595 7.74023 19.7495 7.76022 19.9995 7.79022C21.4795 7.98022 21.9995 8.76027 21.9995 10.5903Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.1501 17.0101C19.1501 18.1901 18.1901 19.1501 17.0101 19.1501C15.8301 19.1501 14.8701 18.1901 14.8701 17.0101C14.8701 16.5201 15.0401 16.0601 15.3201 15.7001C15.7101 15.2001 16.3201 14.8701 17.0101 14.8701C17.5501 14.8701 18.0401 15.0701 18.4101 15.3901C18.8601 15.7901 19.1501 16.3701 19.1501 17.0101Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.0104 12.7298C17.6014 12.7298 18.0804 12.2507 18.0804 11.6598C18.0804 11.0688 17.6014 10.5898 17.0104 10.5898C16.4195 10.5898 15.9404 11.0688 15.9404 11.6598C15.9404 12.2507 16.4195 12.7298 17.0104 12.7298Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16 2H6C2.8 2 2 2.8 2 6V11.9C2.03 14.93 2.87 15.7 6 15.7H8.25V19.25H4.95001C4.54001 19.25 4.20001 19.59 4.20001 20C4.20001 20.41 4.54001 20.75 4.95001 20.75H12.25C12.1 20.36 12.03 19.87 12.02 19.25H9.75V15.7H12.02V11.9V10.59C12.02 8.45003 12.73 7.73999 14.87 7.73999H19.15C19.46 7.73999 19.75 7.75998 20 7.78998V6C20 2.8 19.2 2 16 2Z" fill="currentColor" /><path d="M19.9995 7.78998C19.7495 7.75998 19.4595 7.73999 19.1495 7.73999H14.8695C12.7295 7.73999 12.0195 8.45003 12.0195 10.59V19.25C12.0295 19.87 12.0995 20.36 12.2495 20.75C12.5995 21.66 13.3895 22 14.8695 22H19.1495C21.2895 22 21.9995 21.29 21.9995 19.15V10.59C21.9995 8.76003 21.4795 7.97998 19.9995 7.78998ZM17.0096 10.09C17.8796 10.09 18.5795 10.79 18.5795 11.66C18.5795 12.53 17.8796 13.23 17.0096 13.23C16.1396 13.23 15.4395 12.53 15.4395 11.66C15.4395 10.79 16.1396 10.09 17.0096 10.09ZM17.0096 19.15C15.8296 19.15 14.8695 18.19 14.8695 17.01C14.8695 16.52 15.0395 16.06 15.3195 15.7C15.7095 15.2 16.3196 14.87 17.0096 14.87C17.5496 14.87 18.0395 15.07 18.4095 15.39C18.8595 15.79 19.1495 16.37 19.1495 17.01C19.1495 18.19 18.1896 19.15 17.0096 19.15Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M19.1491 17.0101C19.1491 18.1901 18.1892 19.1501 17.0092 19.1501C15.8292 19.1501 14.8691 18.1901 14.8691 17.0101C14.8691 16.5201 15.0392 16.0601 15.3192 15.7001C15.7092 15.2001 16.3192 14.8701 17.0092 14.8701C17.5492 14.8701 18.0391 15.0701 18.4091 15.3901C18.8591 15.7901 19.1491 16.3701 19.1491 17.0101Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.0095 13.23C17.8765 13.23 18.5794 12.5271 18.5794 11.66C18.5794 10.7929 17.8765 10.0901 17.0095 10.0901C16.1424 10.0901 15.4395 10.7929 15.4395 11.66C15.4395 12.5271 16.1424 13.23 17.0095 13.23Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDevices as IconComponentType).keywords = [
  "devices",
  "twist",
  "gimmick",
  "accessories",
  "aeroplanes",
  "agencies",
  "aids",
  "aircraft",
  "airframes",
  "alarms"
];

export default IconDevices as IconComponentType;