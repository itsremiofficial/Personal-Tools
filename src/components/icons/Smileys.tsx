import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSmileys: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M14 6.19995V10C11.21 10.05 10.05 11.21 10 14H6.2C3.2 14 2 12.8 2 9.80005V6.19995C2 3.19995 3.2 2 6.2 2H9.8C12.8 2 14 3.19995 14 6.19995Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.95922 5.87008C6.42922 5.51008 5.72922 5.5101 5.19922 5.8901" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.9592 5.87008C10.4292 5.51008 9.72922 5.5101 9.19922 5.8901" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.16078 11.4202H5.84078C5.54078 11.4202 5.30078 11.1801 5.30078 10.8801C5.30078 9.39013 6.51078 8.18018 8.00078 8.18018C8.64078 8.18018 9.23078 8.40014 9.69078 8.77014" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 14.2V17.8C22 20.8 20.8 22 17.8 22H14.2C11.2 22 10 20.8 10 17.8V14C10.05 11.21 11.21 10.05 14 10H17.8C20.8 10 22 11.2 22 14.2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.9592 13.6201C14.4292 13.9801 13.7292 13.9801 13.1992 13.6001" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.9592 13.6201C18.4292 13.9801 17.7292 13.9801 17.1992 13.6001" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.8408 16.1802H18.1608C18.4608 16.1802 18.7008 16.4201 18.7008 16.7201C18.7008 18.2101 17.4908 19.4202 16.0008 19.4202C14.5108 19.4202 13.3008 18.2101 13.3008 16.7201C13.3008 16.4201 13.5408 16.1802 13.8408 16.1802Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M14 5V10H13C11.35 10 10 11.35 10 13V14H5C3.34 14 2 12.66 2 11V5C2 3.34 3.34 2 5 2H11C12.66 2 14 3.34 14 5Z" fill="currentColor" /><path d="M5.19952 6.63014C4.96952 6.63014 4.72952 6.52013 4.58952 6.31013C4.34952 5.97013 4.42952 5.50015 4.76952 5.26015C5.54952 4.71015 6.59951 4.70013 7.38951 5.24013C7.72951 5.47013 7.81952 5.94017 7.58952 6.28017C7.35952 6.62017 6.88951 6.71012 6.54951 6.48012C6.27951 6.30012 5.91952 6.30013 5.64952 6.49013C5.49952 6.59013 5.34952 6.63014 5.19952 6.63014Z" fill="currentColor" /><path d="M9.19952 6.63014C8.96952 6.63014 8.72952 6.52013 8.58952 6.31013C8.34952 5.97013 8.42952 5.50015 8.76952 5.26015C9.54952 4.71015 10.5995 4.70013 11.3895 5.24013C11.7295 5.47013 11.8195 5.94017 11.5895 6.28017C11.3595 6.62017 10.8895 6.71012 10.5495 6.48012C10.2795 6.30012 9.91952 6.30013 9.64952 6.49013C9.49952 6.59013 9.34952 6.63014 9.19952 6.63014Z" fill="currentColor" /><path d="M8.16078 12.1699H5.84078C5.13078 12.1699 4.55078 11.5899 4.55078 10.8799C4.55078 8.97994 6.10078 7.42993 8.00078 7.42993C8.78078 7.42993 9.55078 7.69994 10.1608 8.18994C10.4808 8.44994 10.5408 8.91993 10.2808 9.23993C10.0208 9.55993 9.55078 9.61992 9.23078 9.35992C8.88078 9.07992 8.46078 8.92993 8.01078 8.92993C7.01078 8.92993 6.18078 9.68992 6.07078 10.6699H8.17078C8.58078 10.6699 8.92078 11.0099 8.92078 11.4199C8.92078 11.8299 8.57078 12.1699 8.16078 12.1699Z" fill="currentColor" /><path d="M18.2207 16.6801C18.1507 16.6001 18.0507 16.5601 17.9407 16.5601H14.0607C13.9507 16.5601 13.8507 16.6001 13.7807 16.6801C13.7107 16.7601 13.6707 16.87 13.6907 16.97C13.8207 18.15 14.8107 19.05 16.0007 19.05C17.1907 19.05 18.1807 18.16 18.3107 16.97C18.3207 16.86 18.2907 16.7601 18.2207 16.6801Z" fill="currentColor" /><path d="M19 10H13C11.35 10 10 11.35 10 13V19C10 20.65 11.35 22 13 22H19C20.65 22 22 20.65 22 19V13C22 11.35 20.65 10 19 10ZM12.59 13.17C12.83 12.83 13.3 12.75 13.64 12.99C13.91 13.18 14.27 13.18 14.54 13C14.88 12.76 15.35 12.85 15.58 13.2C15.81 13.54 15.73 14.01 15.38 14.24C14.99 14.5 14.54 14.64 14.09 14.64C13.62 14.64 13.16 14.5 12.77 14.22C12.43 13.97 12.35 13.5 12.59 13.17ZM16 20.17C14.1 20.17 12.55 18.62 12.55 16.72C12.55 16.01 13.13 15.43 13.84 15.43H18.16C18.87 15.43 19.45 16.01 19.45 16.72C19.45 18.62 17.9 20.17 16 20.17ZM19.38 14.23C18.99 14.49 18.54 14.63 18.09 14.63C17.62 14.63 17.16 14.49 16.77 14.21C16.43 13.97 16.35 13.5 16.59 13.16C16.83 12.82 17.3 12.74 17.64 12.98C17.91 13.17 18.27 13.17 18.54 12.99C18.88 12.75 19.35 12.84 19.58 13.19C19.81 13.54 19.72 14 19.38 14.23Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSmileys as IconComponentType).keywords = [
  "smileys",
  "merry",
  "cheerful",
  "happy",
  "expensive",
  "face",
  "side",
  "cara",
  "-happy",
  "sided"
];

export default IconSmileys as IconComponentType;