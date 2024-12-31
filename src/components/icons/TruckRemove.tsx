import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconTruckRemove: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M15 2V12C15 13.1 14.1 14 13 14H2V7.62C2.73 8.49 3.85003 9.03 5.09003 9C6.10003 8.98 7.01 8.59 7.69 7.94C8 7.68 8.26002 7.34999 8.46002 6.98999C8.82002 6.37999 9.02 5.65997 9 4.90997C8.97 3.73997 8.45001 2.71 7.64001 2H15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 14V17C22 18.66 20.66 20 19 20H18C18 18.9 17.1 18 16 18C14.9 18 14 18.9 14 20H10C10 18.9 9.1 18 8 18C6.9 18 6 18.9 6 20H5C3.34 20 2 18.66 2 17V14H13C14.1 14 15 13.1 15 12V5H16.84C17.56 5 18.22 5.39001 18.58 6.01001L20.29 9H19C18.45 9 18 9.45 18 10V13C18 13.55 18.45 14 19 14H22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 5C9 5.75 8.78998 6.46 8.41998 7.06C8.20998 7.42 7.94 7.74 7.63 8C6.93 8.63 6.01 9 5 9C3.54 9 2.27002 8.22 1.58002 7.06C1.21002 6.46 1 5.75 1 5C1 3.74 1.58 2.61 2.5 1.88C3.19 1.33 4.06 1 5 1C7.21 1 9 2.79 9 5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M6.06897 6.04016L3.95898 3.93018" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.03967 3.95996L3.92969 6.06995" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5 1C4.06 1 3.19 1.33 2.5 1.88C1.58 2.61 1 3.74 1 5C1 5.75 1.21002 6.46 1.58002 7.06C2.27002 8.22 3.54 9 5 9C6.01 9 6.93001 8.63 7.63 8C7.94 7.74 8.20998 7.42 8.41998 7.06C8.78998 6.46 9 5.75 9 5C9 2.79 7.21 1 5 1ZM6.59998 6.58002C6.44998 6.73002 6.26001 6.79999 6.07001 6.79999C5.88001 6.79999 5.68998 6.73002 5.53998 6.58002L5.01001 6.04999L4.46002 6.59998C4.31002 6.74998 4.11999 6.82001 3.92999 6.82001C3.73999 6.82001 3.55002 6.74998 3.40002 6.59998C3.11002 6.30998 3.11002 5.82998 3.40002 5.53998L3.95001 4.98999L3.41998 4.46002C3.12998 4.17002 3.12998 3.69002 3.41998 3.40002C3.70998 3.11002 4.18998 3.11002 4.47998 3.40002L5.01001 3.92999L5.51001 3.42999C5.80001 3.13999 6.28001 3.13999 6.57001 3.42999C6.86001 3.71999 6.86001 4.19999 6.57001 4.48999L6.07001 4.98999L6.59998 5.52002C6.88998 5.81002 6.88998 6.28002 6.59998 6.58002Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15 3V12C15 13.1 14.1 14 13 14H2V7.62C2.73 8.49 3.85003 9.03 5.09003 9C6.10003 8.98 7.01 8.59 7.69 7.94C8 7.68 8.26002 7.34999 8.46002 6.98999C8.82002 6.37999 9.02 5.65997 9 4.90997C8.97 3.73997 8.45001 2.71 7.64001 2H14C14.55 2 15 2.45 15 3Z" fill="currentColor" /><path d="M22 14V17C22 18.66 20.66 20 19 20H18C18 18.9 17.1 18 16 18C14.9 18 14 18.9 14 20H10C10 18.9 9.1 18 8 18C6.9 18 6 18.9 6 20H5C3.34 20 2 18.66 2 17V14H13C14.1 14 15 13.1 15 12V5H16.84C17.56 5 18.22 5.39001 18.58 6.01001L20.29 9H19C18.45 9 18 9.45 18 10V13C18 13.55 18.45 14 19 14H22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22 12.53V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L21.74 11.54C21.91 11.84 22 12.18 22 12.53Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTruckRemove as IconComponentType).keywords = [
  "truck",
  "remove",
  "hand truck",
  "motortruck",
  "tractor-trailer",
  "lorry",
  "semi-trailer",
  "flatbed",
  "van",
  "truckload",
  "cartage",
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

export default IconTruckRemove as IconComponentType;