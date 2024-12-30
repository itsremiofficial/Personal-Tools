import { FC } from 'react';
import { IconProps } from "../../types";

const IconDocumentFilter: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M3.34985 2H12.2499C12.9899 2 13.5999 2.61001 13.5999 3.35001V4.82999C13.5999 5.36999 13.2599 6.04 12.9299 6.38L10.0299 8.94C9.62991 9.28 9.35986 9.94999 9.35986 10.49V13.39C9.35986 13.79 9.08988 14.33 8.74988 14.54L7.80987 15.15C6.92987 15.69 5.71985 15.08 5.71985 14V10.43C5.71985 9.95999 5.44987 9.35001 5.17987 9.01001L2.61987 6.31C2.27987 5.97 2.00989 5.36999 2.00989 4.95999V3.41C1.99989 2.61 2.60985 2 3.34985 2Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 12.0002V15.0002C2 20.0002 4 22.0002 9 22.0002H15C20 22.0002 22 20.0002 22 15.0002V9.00024C22 5.88024 21.22 3.92024 19.41 2.90024C18.9 2.61024 17.88 2.39023 16.95 2.24023" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M13 13H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11 17H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" fill="currentColor" /><path d="M18.5 9.25H16.5C14.98 9.25 13.75 8.02 13.75 6.5V4.5C13.75 4.09 14.09 3.75 14.5 3.75C14.91 3.75 15.25 4.09 15.25 4.5V6.5C15.25 7.19 15.81 7.75 16.5 7.75H18.5C18.91 7.75 19.25 8.09 19.25 8.5C19.25 8.91 18.91 9.25 18.5 9.25Z" fill="currentColor" /><path d="M9.99945 17.75C9.80945 17.75 9.61945 17.68 9.46945 17.53L7.46945 15.53C7.17945 15.24 7.17945 14.7599 7.46945 14.4699L9.46945 12.4699C9.75945 12.1799 10.2395 12.1799 10.5295 12.4699C10.8195 12.7599 10.8195 13.24 10.5295 13.53L9.05945 15L10.5295 16.4699C10.8195 16.7599 10.8195 17.24 10.5295 17.53C10.3795 17.68 10.1895 17.75 9.99945 17.75Z" fill="currentColor" /><path d="M13.9995 17.75C13.8095 17.75 13.6195 17.68 13.4695 17.53C13.1795 17.24 13.1795 16.7599 13.4695 16.4699L14.9395 15L13.4695 13.53C13.1795 13.24 13.1795 12.7599 13.4695 12.4699C13.7595 12.1799 14.2395 12.1799 14.5295 12.4699L16.5295 14.4699C16.8195 14.7599 16.8195 15.24 16.5295 15.53L14.5295 17.53C14.3795 17.68 14.1895 17.75 13.9995 17.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDocumentFilter;