import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBoxTime: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46991" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 21.61V12.54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.6106 9.17V14.83C21.6106 14.88 21.6106 14.92 21.6006 14.97C20.9006 14.36 20.0006 14 19.0006 14C18.0606 14 17.1906 14.33 16.5006 14.88C15.5806 15.61 15.0006 16.74 15.0006 18C15.0006 18.75 15.2106 19.46 15.5806 20.06C15.6706 20.22 15.7806 20.37 15.9006 20.51L14.0706 21.52C12.9306 22.16 11.0706 22.16 9.9306 21.52L4.59061 18.56C3.38061 17.89 2.39062 16.21 2.39062 14.83V9.17C2.39062 7.79 3.38061 6.11002 4.59061 5.44002L9.9306 2.48C11.0706 1.84 12.9306 1.84 14.0706 2.48L19.4106 5.44002C20.6206 6.11002 21.6106 7.79 21.6106 9.17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M23 18C23 19.2 22.47 20.27 21.64 21C20.93 21.62 20.01 22 19 22C16.79 22 15 20.21 15 18C15 16.74 15.58 15.61 16.5 14.88C17.19 14.33 18.06 14 19 14C21.21 14 23 15.79 23 18Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.25 16.75V18.25L18 19" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.3504 5.65995L13.0604 2.27C12.4004 1.91 11.6004 1.91 10.9304 2.27L4.64041 5.65995C4.18041 5.90995 3.90039 6.39998 3.90039 6.93998C3.90039 7.47998 4.18041 7.96995 4.64041 8.21995L10.9304 11.61C11.2604 11.79 11.6304 11.88 11.9904 11.88C12.3604 11.88 12.7204 11.79 13.0504 11.61L19.3404 8.21995C19.8004 7.96995 20.0804 7.47998 20.0804 6.93998C20.0904 6.39998 19.8104 5.90995 19.3504 5.65995Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M9.9007 12.7899L4.05069 9.85989C3.60069 9.62989 3.0807 9.65989 2.6507 9.91989C2.2207 10.1799 1.9707 10.6399 1.9707 11.1399V16.6699C1.9707 17.6299 2.50069 18.4899 3.36069 18.9199L9.21069 21.8399C9.41069 21.9399 9.63071 21.9899 9.85071 21.9899C10.1107 21.9899 10.3707 21.9199 10.6007 21.7699C11.0307 21.5099 11.2807 21.0499 11.2807 20.5499V15.0199C11.2907 14.0799 10.7607 13.2199 9.9007 12.7899Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22.0309 11.1502V15.7401C22.0209 15.7301 22.0109 15.7101 22.0009 15.7001C22.0009 15.6901 21.991 15.6801 21.981 15.6701C21.941 15.6101 21.8909 15.5501 21.8409 15.5001C21.8309 15.4901 21.8209 15.4702 21.8109 15.4602C21.0009 14.5602 19.8109 14.0001 18.5009 14.0001C17.2409 14.0001 16.0909 14.5201 15.2709 15.3601C14.4809 16.1701 14.0009 17.2801 14.0009 18.5001C14.0009 19.3401 14.2409 20.1401 14.6509 20.8201C14.8209 21.1101 15.031 21.3701 15.261 21.6101L14.791 21.8501C14.591 21.9501 14.3709 22.0001 14.1509 22.0001C13.8909 22.0001 13.631 21.9302 13.391 21.7802C12.971 21.5202 12.7109 21.0601 12.7109 20.5601V15.0401C12.7109 14.0801 13.241 13.2201 14.101 12.7901L19.951 9.87013C20.401 9.64013 20.921 9.66012 21.351 9.93012C21.771 10.1901 22.0309 10.6502 22.0309 11.1502Z" fill="currentColor" /><path d="M21.98 15.65C21.16 14.64 19.91 14 18.5 14C17.44 14 16.46 14.37 15.69 14.99C14.65 15.81 14 17.08 14 18.5C14 19.91 14.64 21.16 15.65 21.98C16.42 22.62 17.42 23 18.5 23C19.64 23 20.67 22.57 21.47 21.88C22.4 21.05 23 19.85 23 18.5C23 17.42 22.62 16.42 21.98 15.65ZM19.53 18.78C19.53 19.04 19.39 19.29 19.17 19.42L17.76 20.26C17.64 20.33 17.51 20.37 17.37 20.37C17.12 20.37 16.87 20.24 16.73 20.01C16.52 19.65 16.63 19.19 16.99 18.98L18.03 18.36V17.1C18.03 16.69 18.37 16.35 18.78 16.35C19.19 16.35 19.53 16.69 19.53 17.1V18.78Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBoxTime as IconComponentType).keywords = [
  "box",
  "time",
  "package",
  "loge",
  "corner",
  "box seat",
  "boxwood",
  "bin",
  "chest",
  "toolbox",
  "shoebox",
  "fourth dimension",
  "clock",
  "meter",
  "clip",
  "sentence",
  "clock time",
  "prison term",
  "space-time",
  "momentum"
];

export default IconBoxTime as IconComponentType;