import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHomeWifi: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0693 2.81984L3.1393 8.36989C2.3593 8.98989 1.85929 10.2999 2.02929 11.2799L3.35927 19.2399C3.59927 20.6599 4.95928 21.81 6.39928 21.81H17.5993C19.0293 21.81 20.3993 20.6499 20.6393 19.2399L21.9693 11.2799C22.1293 10.2999 21.6293 8.98989 20.8593 8.36989L13.9293 2.82985C12.8593 1.96985 11.1293 1.96984 10.0693 2.81984Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.88086 14.3802C11.1509 13.1702 12.8508 13.1702 14.1208 14.3802" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.24 12.2602C15.7 11.7302 15.1 11.3202 14.48 11.0202C12.89 10.2602 11.11 10.2602 9.51001 11.0202C8.89001 11.3202 8.3 11.7302 7.75 12.2602" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.9955 16.5H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.0693 2.82009L3.1393 8.37008C2.3593 8.99008 1.85929 10.3001 2.02929 11.2801L3.35927 19.2401C3.59927 20.6601 4.95928 21.8101 6.39928 21.8101H17.5993C19.0293 21.8101 20.3993 20.6501 20.6393 19.2401L21.9693 11.2801C22.1293 10.3001 21.6293 8.99008 20.8593 8.37008L13.9293 2.8301C12.8593 1.9701 11.1293 1.97009 10.0693 2.82009Z" fill="currentColor" /><path d="M14.1205 15.1301C13.9305 15.1301 13.7505 15.0601 13.6005 14.9201C12.6305 13.9901 11.3706 13.9901 10.3906 14.9201C10.0906 15.2101 9.62052 15.2002 9.33052 14.9002C9.04052 14.6002 9.05054 14.1302 9.35054 13.8402C10.9005 12.3502 13.0705 12.3502 14.6305 13.8402C14.9305 14.1302 14.9405 14.6002 14.6505 14.9002C14.5205 15.0502 14.3205 15.1301 14.1205 15.1301Z" fill="currentColor" /><path d="M16.2404 13.01C16.0504 13.01 15.8604 12.94 15.7204 12.8C15.2504 12.34 14.7204 11.97 14.1604 11.7C12.7604 11.03 11.2304 11.03 9.84037 11.7C9.28037 11.97 8.76037 12.34 8.28037 12.8C7.99037 13.09 7.51037 13.09 7.22037 12.79C6.93037 12.49 6.94038 12.02 7.23038 11.73C7.82038 11.15 8.48037 10.69 9.19037 10.35C11.0004 9.48001 13.0004 9.48001 14.8004 10.35C15.5104 10.69 16.1704 11.15 16.7604 11.73C17.0604 12.02 17.0604 12.49 16.7704 12.79C16.6304 12.93 16.4404 13.01 16.2404 13.01Z" fill="currentColor" /><path d="M12.0005 17.5001C11.7405 17.5001 11.4905 17.4001 11.2905 17.2101C10.9005 16.8201 10.9005 16.1901 11.2905 15.8001C11.6805 15.4101 12.3205 15.4101 12.7105 15.8001C13.1005 16.1901 13.1005 16.8201 12.7105 17.2101C12.5105 17.4001 12.2605 17.5001 12.0005 17.5001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHomeWifi as IconComponentType).keywords = [
  "home",
  "wifi",
  "domicile",
  "habitation",
  "domestic",
  "dwelling",
  "nursing home",
  "rest home",
  "house",
  "dwelling house",
  "household",
  "wi-fi",
  "wireless",
  "wlan",
  "bluetooth",
  "ethernet",
  "broadband",
  "internet",
  "airconditioning",
  "modem"
];

export default IconHomeWifi as IconComponentType;