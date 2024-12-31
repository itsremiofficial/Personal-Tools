import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCloudChange: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.11028 11.8498C5.29028 12.0498 5.30028 16.1498 8.11028 16.3498H14.7803C15.5903 16.3598 16.3703 16.0498 16.9703 15.5098C18.9503 13.7798 17.8903 10.3098 15.2903 9.97976C14.3603 4.33976 6.2103 6.47976 8.1403 11.8498" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M2 15C2 18.87 5.13 22 9 22L7.95001 20.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 9C22 5.13 18.87 2 15 2L16.05 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.1093 11.85C5.2893 12.05 5.2993 16.15 8.1093 16.35H14.7793C15.5893 16.36 16.3693 16.05 16.9693 15.51C18.9493 13.78 17.8893 10.31 15.2893 9.98001C14.3593 4.34001 6.20933 6.48 8.13933 11.85" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M9 22.75C4.73 22.75 1.25 19.27 1.25 15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15C2.75 17.96 4.80999 20.44 7.57999 21.09L7.31 20.64C7.1 20.28 7.21001 19.82 7.57001 19.61C7.92001 19.4 8.39001 19.51 8.60001 19.87L9.64999 21.62C9.78999 21.85 9.79 22.14 9.66 22.37C9.52 22.6 9.27 22.75 9 22.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22.0004 9.75C21.5904 9.75 21.2504 9.41 21.2504 9C21.2504 6.04 19.1904 3.55997 16.4204 2.90997L16.6904 3.35999C16.9004 3.71999 16.7904 4.18001 16.4304 4.39001C16.0804 4.60001 15.6104 4.49001 15.4004 4.13L14.3504 2.38C14.2104 2.15 14.2104 1.86 14.3404 1.63C14.4704 1.39 14.7204 1.25 14.9904 1.25C19.2604 1.25 22.7404 4.73 22.7404 9C22.7504 9.41 22.4104 9.75 22.0004 9.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCloudChange as IconComponentType).keywords = [
  "cloud",
  "change",
  "fog",
  "mist",
  "befog",
  "haze over",
  "becloud",
  "dapple",
  "mottle",
  "sully",
  "defile",
  "alteration",
  "alter",
  "convert",
  "interchange",
  "vary",
  "modification",
  "variety",
  "transfer",
  "exchange"
];

export default IconCloudChange as IconComponentType;