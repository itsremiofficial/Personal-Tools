import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconGlass1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10 17.5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 17.5V7.5C2 3.5 3 2.5 7 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 17.5V7.5C22 3.5 21 2.5 17 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 15.9099V19.1999C10 21.1999 9.2 21.9999 7.2 21.9999H4.8C2.8 21.9999 2 21.1999 2 19.1999V15.9099C2 13.9099 2.8 13.1099 4.8 13.1099H7.2C9.2 13.1099 10 13.9099 10 15.9099Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 15.9099V19.1999C22 21.1999 21.2 21.9999 19.2 21.9999H16.8C14.8 21.9999 14 21.1999 14 19.1999V15.9099C14 13.9099 14.8 13.1099 16.8 13.1099H19.2C21.2 13.1099 22 13.9099 22 15.9099Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.8406 22.0002H8.16059C3.97059 22.0002 3.14059 19.4702 4.50059 16.3902L5.94059 13.1202C5.94059 13.1202 9.00059 13.0002 12.0006 14.0002C15.0006 15.0002 17.8306 13.1102 17.8306 13.1102L18.0206 12.9902L19.5106 16.4002C20.8506 19.4802 19.9706 22.0002 15.8406 22.0002Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.0195 12.99L17.8295 13.11C17.8295 13.11 14.9995 15 11.9995 14C8.99945 13 5.93945 13.12 5.93945 13.12L8.73945 6.74H8.43945C7.78945 6.74 7.18945 6.48 6.75945 6.05C6.32945 5.62 6.06945 5.02 6.06945 4.37C6.06945 3.07 7.12945 2 8.43945 2H15.5495C16.2095 2 16.7995 2.27 17.2295 2.7C17.7895 3.26 18.0795 4.08 17.8595 4.95C17.5995 6.03 16.5595 6.74 15.4395 6.74H15.2795L18.0195 12.99Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGlass1 as IconComponentType).keywords = [
  "glass",
  "1",
  "glaze",
  "looking glass",
  "spyglass",
  "field glass",
  "glaze over",
  "drinking glass",
  "glass in",
  "glass over",
  "coke",
  "wash out",
  "cut up",
  "pull out",
  "pull in",
  "pull up",
  "pull over",
  "work out",
  "ride down",
  "rush hour"
];

export default IconGlass1 as IconComponentType;