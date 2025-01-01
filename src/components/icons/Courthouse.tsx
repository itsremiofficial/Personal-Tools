import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCourthouse: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 22H22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 2C13.6 2.64 15.4 2.64 17 2V5C15.4 5.64 13.6 5.64 12 5V2Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 5V8" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17 8H7C5 8 4 9 4 11V22H20V11C20 9 19 8 17 8Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M4.58008 12H19.4201" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.99023 12V22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.9902 12V22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.9902 12V22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17.42 1.3802C17.21 1.2402 16.95 1.21018 16.72 1.30018C15.29 1.87018 13.71 1.87018 12.28 1.30018C12.05 1.21018 11.79 1.2402 11.58 1.3802C11.37 1.5202 11.25 1.7502 11.25 2.0002V5.0002V8.0002C11.25 8.41019 11.59 8.7502 12 8.7502C12.41 8.7502 12.75 8.41019 12.75 8.0002V6.02021C13.33 6.16021 13.91 6.24019 14.5 6.24019C15.44 6.24019 16.38 6.06021 17.28 5.70021C17.56 5.59021 17.75 5.3102 17.75 5.0002V2.0002C17.75 1.7502 17.63 1.5202 17.42 1.3802Z" fill="currentColor" /><path d="M22 21.25H20.75V11C20.75 8.58 19.42 7.25 17 7.25H7C4.58 7.25 3.25 8.58 3.25 11V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H4H20H22C22.41 22.75 22.75 22.41 22.75 22C22.75 21.59 22.41 21.25 22 21.25ZM19.25 12.75V21.25H16.74V12.75H19.25ZM11.24 21.25H8.74V12.75H11.24V21.25ZM12.74 12.75H15.24V21.25H12.74V12.75ZM4.75 12.75H7.24V21.25H4.75V12.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCourthouse as IconComponentType).keywords = [
  "courthouse",
  "courtroom",
  "tribunal",
  "palace",
  "hall",
  "court",
  "palate",
  "ictr",
  "palais",
  "courtrooms"
];

export default IconCourthouse as IconComponentType;