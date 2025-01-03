import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconTrendUp: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M17.1699 9.5L12.9699 13.7L11.3699 11.3L8.16992 14.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M15.1699 9.5H17.1699V11.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path d="M17.5004 9.40998C17.4304 9.23998 17.2904 9.09998 17.1204 9.02998C17.0404 8.99998 16.9504 8.97998 16.8604 8.97998H15.0004C14.6104 8.97998 14.3004 9.28998 14.3004 9.67998C14.3004 10.07 14.6104 10.38 15.0004 10.38H15.1804L13.0704 12.49L12.0504 10.97C11.9304 10.8 11.7504 10.68 11.5404 10.66C11.3204 10.64 11.1304 10.71 10.9804 10.86L8.00035 13.84C7.73035 14.11 7.73035 14.55 8.00035 14.83C8.14035 14.97 8.31035 15.03 8.49035 15.03C8.67035 15.03 8.85035 14.96 8.98035 14.83L11.3604 12.45L12.3804 13.97C12.5004 14.14 12.6804 14.26 12.8904 14.28C13.1104 14.3 13.3004 14.23 13.4504 14.08L16.1704 11.36V11.54C16.1704 11.93 16.4804 12.24 16.8704 12.24C17.2604 12.24 17.5704 11.93 17.5704 11.54V9.66998C17.5504 9.57998 17.5404 9.48998 17.5004 9.40998Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM17.5499 11.53C17.5499 11.92 17.2399 12.23 16.8499 12.23C16.4599 12.23 16.1499 11.92 16.1499 11.53V11.35L13.4299 14.07C13.2799 14.22 13.0799 14.29 12.8699 14.27C12.6599 14.25 12.4699 14.14 12.3599 13.96L11.3399 12.44L8.95992 14.82C8.81992 14.96 8.64992 15.02 8.46992 15.02C8.28992 15.02 8.10992 14.95 7.97992 14.82C7.70992 14.55 7.70992 14.11 7.97992 13.83L10.9599 10.85C11.1099 10.7 11.3099 10.63 11.5199 10.65C11.7299 10.67 11.9199 10.78 12.0299 10.96L13.0499 12.48L15.1599 10.37H14.9799C14.5899 10.37 14.2799 10.06 14.2799 9.67C14.2799 9.28 14.5899 8.97 14.9799 8.97H16.8399C16.9299 8.97 17.0199 8.99 17.1099 9.02C17.2799 9.09 17.4199 9.23 17.4899 9.4C17.5299 9.49 17.5399 9.58 17.5399 9.67V11.53H17.5499Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTrendUp as IconComponentType).keywords = [
  "trend",
  "up",
  "tendency",
  "vogue",
  "course",
  "curve",
  "slue",
  "swerve",
  "slew",
  "style",
  "cut",
  "upbound",
  "upwardly",
  "ascending",
  "upward",
  "upwards",
  "rising",
  "astir",
  "ahead",
  "awake"
];

export default IconTrendUp as IconComponentType;