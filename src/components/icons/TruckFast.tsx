import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconTruckFast: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.9998 14H12.9998C14.0998 14 14.9998 13.1 14.9998 12V2H5.99976C4.49976 2 3.18977 2.82999 2.50977 4.04999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 17C2 18.66 3.34 20 5 20H6C6 18.9 6.9 18 8 18C9.1 18 10 18.9 10 20H14C14 18.9 14.9 18 16 18C17.1 18 18 18.9 18 20H19C20.66 20 22 18.66 22 17V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L18.58 6.01001C18.22 5.39001 17.56 5 16.84 5H15V12C15 13.1 14.1 14 13 14H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 8H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 11H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 14H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 14V17C22 18.66 20.66 20 19 20H18C18 18.9 17.1 18 16 18C14.9 18 14 18.9 14 20H10C10 18.9 9.1 18 8 18C6.9 18 6 18.9 6 20H5C3.34 20 2 18.66 2 17V14H13C14.1 14 15 13.1 15 12V5H16.84C17.56 5 18.22 5.39001 18.58 6.01001L20.29 9H19C18.45 9 18 9.45 18 10V13C18 13.55 18.45 14 19 14H22Z" fill="currentColor" /><path d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" fill="currentColor" /><path d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z" fill="currentColor" /><path d="M22 12.53V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L21.74 11.54C21.91 11.84 22 12.18 22 12.53Z" fill="currentColor" /><path d="M14 2H6C4.05 2 2.43002 3.4 2.08002 5.25H7C7.41 5.25 7.75 5.59 7.75 6C7.75 6.41 7.41 6.75 7 6.75H2V8.25H5C5.41 8.25 5.75 8.59 5.75 9C5.75 9.41 5.41 9.75 5 9.75H2V11.25H3C3.41 11.25 3.75 11.59 3.75 12C3.75 12.41 3.41 12.75 3 12.75H2V14H13C14.1 14 15 13.1 15 12V3C15 2.45 14.55 2 14 2Z" fill="currentColor" /><path d="M2.08002 5.25H1C0.59 5.25 0.25 5.59 0.25 6C0.25 6.41 0.59 6.75 1 6.75H2V6C2 5.74 2.03002 5.49 2.08002 5.25Z" fill="currentColor" /><path d="M1 8.25C0.59 8.25 0.25 8.59 0.25 9C0.25 9.41 0.59 9.75 1 9.75H2V8.25H1Z" fill="currentColor" /><path d="M1 11.25C0.59 11.25 0.25 11.59 0.25 12C0.25 12.41 0.59 12.75 1 12.75H2V11.25H1Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTruckFast as IconComponentType).keywords = [
  "truck",
  "fast",
  "hand truck",
  "motortruck",
  "tractor-trailer",
  "lorry",
  "semi-trailer",
  "flatbed",
  "van",
  "truckload",
  "cartage",
  "tight",
  "instantaneous",
  "immediate",
  "instant",
  "true",
  "profligate",
  "constant",
  "faithful",
  "loyal"
];

export default IconTruckFast as IconComponentType;