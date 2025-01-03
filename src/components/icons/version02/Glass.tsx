import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconGlass: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.82971 22C4.64971 22 3.80971 19.47 5.16971 16.39L9.41971 6.74H9.11971C8.46971 6.74 7.86971 6.48 7.43971 6.05C6.99971 5.62 6.73971 5.02 6.73971 4.37C6.73971 3.07 7.79971 2 9.10971 2H16.2197C16.8797 2 17.4697 2.27 17.8997 2.7C18.4597 3.26 18.7397 4.08 18.5297 4.95C18.2597 6.03 17.2197 6.74 16.1097 6.74H15.9497L20.1697 16.4C21.5197 19.48 20.6397 22 16.4997 22H8.82971Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.61035 13.1201C6.61035 13.1201 9.67035 13.0001 12.6704 14.0001C15.6704 15.0001 18.5004 13.1101 18.5004 13.1101" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5095 22H8.82953C4.63953 22 3.80953 19.47 5.16953 16.39L6.60953 13.12C6.60953 13.12 9.66953 13 12.6695 14C15.6695 15 18.4995 13.11 18.4995 13.11L18.6895 12.99L20.1795 16.4C21.5195 19.48 20.6395 22 16.5095 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.6904 12.99L18.5004 13.11C18.5004 13.11 15.6704 15 12.6704 14C9.67035 13 6.61035 13.12 6.61035 13.12L9.41035 6.74H9.11035C8.46035 6.74 7.86035 6.48 7.43035 6.05C7.00035 5.62 6.74035 5.02 6.74035 4.37C6.74035 3.07 7.80035 2 9.11035 2H16.2204C16.8804 2 17.4704 2.27 17.9004 2.7C18.4604 3.26 18.7504 4.08 18.5304 4.95C18.2704 6.03 17.2304 6.74 16.1104 6.74H15.9504L18.6904 12.99Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5095 22H8.82953C4.63953 22 3.80953 19.47 5.16953 16.39L6.60953 13.12C6.60953 13.12 9.66953 13 12.6695 14C15.6695 15 18.4995 13.11 18.4995 13.11L18.6895 12.99L20.1795 16.4C21.5195 19.48 20.6395 22 16.5095 22Z" fill="currentColor" /><path d="M16.1102 6.74H15.9502L18.0802 11.6L17.6702 11.86C17.6502 11.87 15.3902 13.32 13.1402 12.58C10.7902 11.79 8.43023 11.65 7.27023 11.63L9.41023 6.74H9.11023C8.46023 6.74 7.86023 6.48 7.43023 6.05C7.00023 5.62 6.74023 5.02 6.74023 4.37C6.74023 3.07 7.80023 2 9.11023 2H16.2202C16.8802 2 17.4702 2.27 17.9002 2.7C18.4602 3.26 18.7502 4.08 18.5302 4.95C18.2702 6.03 17.2302 6.74 16.1102 6.74Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGlass as IconComponentType).keywords = [
  "glass",
  "glaze",
  "looking glass",
  "spyglass",
  "field glass",
  "glaze over",
  "drinking glass",
  "glass in",
  "glass over",
  "coke"
];

export default IconGlass as IconComponentType;