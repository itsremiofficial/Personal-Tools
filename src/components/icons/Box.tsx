import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBox: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46991" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 21.61V12.54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.9306 2.48L4.59061 5.45003C3.38061 6.12003 2.39062 7.80001 2.39062 9.18001V14.83C2.39062 16.21 3.38061 17.89 4.59061 18.56L9.9306 21.53C11.0706 22.16 12.9406 22.16 14.0806 21.53L19.4206 18.56C20.6306 17.89 21.6206 16.21 21.6206 14.83V9.18001C21.6206 7.80001 20.6306 6.12003 19.4206 5.45003L14.0806 2.48C12.9306 1.84 11.0706 1.84 9.9306 2.48Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M16.9998 13.2401V9.58014L7.50977 4.1001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.1004 6.93998C20.1004 7.47998 19.8104 7.96995 19.3504 8.21995L17.6104 9.15995L16.1304 9.94999L13.0604 11.61C12.7304 11.79 12.3704 11.88 12.0004 11.88C11.6304 11.88 11.2704 11.79 10.9404 11.61L4.65039 8.21995C4.19039 7.96995 3.90039 7.47998 3.90039 6.93998C3.90039 6.39998 4.19039 5.90995 4.65039 5.65995L6.62039 4.59996L8.1904 3.74998L10.9404 2.27C11.6004 1.91 12.4004 1.91 13.0604 2.27L19.3504 5.65995C19.8104 5.90995 20.1004 6.39998 20.1004 6.93998Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M9.9007 12.7899L4.05069 9.85989C3.60069 9.62989 3.0807 9.65989 2.6507 9.91989C2.2207 10.1799 1.9707 10.6399 1.9707 11.1399V16.6699C1.9707 17.6299 2.50069 18.4899 3.36069 18.9199L9.21069 21.8399C9.41069 21.9399 9.63071 21.9899 9.85071 21.9899C10.1107 21.9899 10.3707 21.9199 10.6007 21.7699C11.0307 21.5099 11.2807 21.0499 11.2807 20.5499V15.0199C11.2907 14.0799 10.7607 13.2199 9.9007 12.7899Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22.0309 11.1502V16.6801C22.0309 17.6301 21.501 18.4901 20.641 18.9201L14.791 21.8501C14.591 21.9501 14.3709 22.0001 14.1509 22.0001C13.8909 22.0001 13.631 21.9302 13.391 21.7802C12.971 21.5202 12.7109 21.0601 12.7109 20.5601V15.0401C12.7109 14.0801 13.241 13.2201 14.101 12.7901L16.2509 11.7201L17.7509 10.9701L19.951 9.87013C20.401 9.64013 20.921 9.66012 21.351 9.93012C21.771 10.1901 22.0309 10.6502 22.0309 11.1502Z" fill="currentColor" /><path d="M17.6091 9.15997L16.1292 9.95001L6.61914 4.59998L8.18915 3.75L17.3691 8.92999C17.4691 8.98999 17.5491 9.06997 17.6091 9.15997Z" fill="currentColor" /><path d="M17.75 10.97V13.24C17.75 13.65 17.41 13.99 17 13.99C16.59 13.99 16.25 13.65 16.25 13.24V11.72L17.75 10.97Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBox as IconComponentType).keywords = [
  "box",
  "package",
  "loge",
  "corner",
  "box seat",
  "boxwood",
  "bin",
  "chest",
  "toolbox",
  "shoebox"
];

export default IconBox as IconComponentType;