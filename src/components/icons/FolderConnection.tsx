import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconFolderConnection: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 16V19" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 23C13.1046 23 14 22.1046 14 21C14 19.8954 13.1046 19 12 19C10.8954 19 10 19.8954 10 21C10 22.1046 10.8954 23 12 23Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18 21H14" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10 21H6" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 8.30005V12.5C19 15.3 18.3 16 15.5 16H8.5C5.7 16 5 15.3 5 12.5V5.5C5 2.7 5.7 2 8.5 2H9.54999C10.6 2 10.83 2.30997 11.23 2.83997L12.28 4.23999C12.55 4.58999 12.7 4.80005 13.4 4.80005H15.5C18.3 4.80005 19 5.50005 19 8.30005Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.75 21C18.75 21.41 18.41 21.75 18 21.75H14C13.95 21.75 13.91 21.73 13.86 21.72C13.57 22.47 12.85 23 12 23C11.15 23 10.43 22.47 10.14 21.72C10.09 21.73 10.05 21.75 10 21.75H6C5.59 21.75 5.25 21.41 5.25 21C5.25 20.59 5.59 20.25 6 20.25H10C10.05 20.25 10.09 20.27 10.14 20.28C10.34 19.76 10.76 19.34 11.28 19.14C11.27 19.09 11.25 19.05 11.25 19V16H12.75V19C12.75 19.05 12.73 19.09 12.72 19.14C13.24 19.34 13.66 19.76 13.86 20.28C13.91 20.27 13.95 20.25 14 20.25H18C18.41 20.25 18.75 20.59 18.75 21Z" fill="currentColor" /><path d="M19 8.29999V12.5C19 15.3 18.3 16 15.5 16H8.5C5.7 16 5 15.3 5 12.5V5.5C5 2.7 5.7 2 8.5 2H9.54999C10.6 2 10.83 2.31003 11.23 2.84003L12.28 4.23999C12.55 4.58999 12.7 4.79999 13.4 4.79999H15.5C18.3 4.79999 19 5.49999 19 8.29999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFolderConnection as IconComponentType).keywords = [
  "folder",
  "connection",
  "booklet",
  "pamphlet",
  "brochure",
  "leaflet",
  "toolkit",
  "pack",
  "package",
  "kit",
  "shirt",
  "connexion",
  "connectedness",
  "connective",
  "joining",
  "connector",
  "link",
  "connecter",
  "association",
  "connecting"
];

export default IconFolderConnection as IconComponentType;