import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSmartHome: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3993 21.81H17.5993C19.0293 21.81 20.3993 20.6499 20.6393 19.2399L21.9693 11.2799C22.1293 10.2999 21.6293 8.98989 20.8593 8.36989L13.9293 2.82985C12.8593 1.96985 11.1293 1.96984 10.0693 2.81984L3.1393 8.36989C2.3593 8.98989 1.85929 10.2999 2.02929 11.2799L2.30929 12.9599" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 19C3.76 19.04 4.96 20.24 5 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8 22C7.99 21.24 7.86 20.53 7.63 19.88C7.04 18.21 5.78 16.96 4.12 16.37C3.47 16.14 2.76 16.01 2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M1.9955 22H2.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.0693 3.01003L3.1393 8.56002C2.3593 9.18002 1.85929 10.49 2.02929 11.47L3.35927 19.43C3.59927 20.85 4.95928 22 6.39928 22H17.5993C19.0293 22 20.3993 20.84 20.6393 19.43L21.9693 11.47C22.1293 10.49 21.6293 9.18002 20.8593 8.56002L13.9293 3.02004C12.8593 2.16004 11.1293 2.16003 10.0693 3.01003Z" fill="currentColor" /><path d="M12.3713 17.1201C11.9613 17.1201 11.6313 16.7901 11.6213 16.3901C11.5913 15.0401 10.7013 14.1501 9.35133 14.1201C8.94133 14.1101 8.61132 13.7701 8.62132 13.3501C8.63132 12.9401 8.96132 12.6201 9.37132 12.6201C9.38132 12.6201 9.38133 12.6201 9.39133 12.6201C11.5413 12.6701 13.0813 14.2001 13.1213 16.3501C13.1313 16.7601 12.8013 17.1101 12.3913 17.1201C12.3913 17.1201 12.3813 17.1201 12.3713 17.1201Z" fill="currentColor" /><path d="M15.3713 17.1201C14.9613 17.1201 14.6213 16.7901 14.6213 16.3801C14.6113 15.7201 14.5013 15.0901 14.3013 14.5001C13.7913 13.0401 12.7013 11.9601 11.2413 11.4401C10.6513 11.2301 10.0213 11.1201 9.3613 11.1201C8.9513 11.1201 8.61131 10.7801 8.62131 10.3601C8.62131 9.95011 8.96131 9.62012 9.37131 9.62012H9.38132C10.2113 9.63012 11.0013 9.77015 11.7413 10.0302C13.6313 10.7002 15.0413 12.1101 15.7113 14.0001C15.9713 14.7401 16.1113 15.5401 16.1213 16.3601C16.1313 16.7801 15.8013 17.1201 15.3713 17.1201C15.3813 17.1201 15.3813 17.1201 15.3713 17.1201Z" fill="currentColor" /><path d="M9.38086 17.3801C8.82086 17.3801 8.38086 16.9301 8.38086 16.3801C8.38086 15.8301 8.83086 15.3801 9.38086 15.3801C9.93086 15.3801 10.3809 15.8301 10.3809 16.3801C10.3809 16.9301 9.93086 17.3801 9.38086 17.3801Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSmartHome as IconComponentType).keywords = [
  "smart",
  "home",
  "hurt",
  "ache",
  "raffish",
  "rakish",
  "snappy",
  "cagy",
  "impertinent",
  "dashing",
  "impudent",
  "domicile",
  "habitation",
  "domestic",
  "dwelling",
  "nursing home",
  "rest home",
  "house",
  "dwelling house",
  "household"
];

export default IconSmartHome as IconComponentType;