import { FC } from 'react';

const IconDocumentCloud: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6699 10V13" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6699 10H18.6699C15.6699 10 14.6699 9 14.6699 6V2L22.6699 10Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.43 18.2601C12.08 18.4301 12.08 21.8301 14.43 22.0001H19.99C20.66 22.0001 21.32 21.7501 21.81 21.3001C23.46 19.8601 22.58 16.9801 20.41 16.7101C19.63 12.0201 12.85 13.8001 14.45 18.2701" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.1699 10.19H18.2799C15.9099 10.19 13.9799 8.26 13.9799 5.89V3C13.9799 2.45 13.5299 2 12.9799 2H8.73992C5.65992 2 3.16992 4.00001 3.16992 7.57001V16.43C3.16992 20 5.65992 22 8.73992 22H16.5999C19.6799 22 22.1699 20 22.1699 16.43V11.19C22.1699 10.64 21.7199 10.19 21.1699 10.19Z" fill="currentColor" /><path d="M16.4699 2.21C16.0599 1.8 15.3499 2.07998 15.3499 2.64998V6.13999C15.3499 7.59999 16.5899 8.80999 18.0999 8.80999C19.0499 8.81999 20.3699 8.82 21.4999 8.82C22.0699 8.82 22.3699 8.14999 21.9699 7.74999C20.5299 6.29999 17.9499 3.69 16.4699 2.21Z" fill="currentColor" /><path d="M15.43 19.2601C13.08 19.4301 13.08 22.8301 15.43 23.0001H20.99C21.66 23.0001 22.32 22.7501 22.81 22.3001C24.46 20.8601 23.58 17.9801 21.41 17.7101C20.63 13.0201 13.85 14.8001 15.45 19.2701" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.4699 2.20999C16.0599 1.79999 15.3499 2.07999 15.3499 2.64999V6.13999C15.3499 7.59999 16.5899 8.80999 18.0999 8.80999C19.0499 8.81999 20.3699 8.81999 21.4999 8.81999C22.0699 8.81999 22.3699 8.14999 21.9699 7.74999C20.5299 6.29999 17.9499 3.68999 16.4699 2.20999Z" fill="currentColor" /><path d="M15.43 19.2599C13.08 19.4299 13.08 22.8299 15.43 22.9999H20.99C21.66 22.9999 22.32 22.7499 22.81 22.2999C24.46 20.8599 23.58 17.9799 21.41 17.7099C20.63 13.0199 13.85 14.7999 15.45 19.2699" fill="currentColor" /><path d="M22.1699 11.19V14.44C22.1699 14.74 21.7299 14.88 21.5099 14.67C21.0299 14.2 20.4399 13.84 19.7599 13.63C18.0799 13.11 16.1299 13.62 14.9199 14.9C14.1099 15.74 13.6999 16.81 13.7099 17.97C13.7099 18.16 13.6199 18.33 13.4699 18.44C12.6699 19.05 12.1699 20.01 12.1699 21.12C12.1699 21.2 12.1699 21.28 12.1799 21.36C12.1999 21.68 11.9699 21.99 11.6399 21.99H8.73992C5.65992 21.99 3.16992 19.99 3.16992 16.42V7.57C3.16992 4 5.65992 2 8.73992 2H12.9799C13.5299 2 13.9799 2.45 13.9799 3V5.89C13.9799 8.27 15.8999 10.19 18.2799 10.19H21.1699C21.7199 10.19 22.1699 10.64 22.1699 11.19Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDocumentCloud as IconComponent).keywords = [
  "document",
  "cloud",
  "papers",
  "text file",
  "written document",
  "documentation",
  "backgrounder",
  "workbook",
  "dossier",
  "handbook",
  "listing",
  "fog",
  "mist",
  "befog",
  "haze over",
  "becloud",
  "dapple",
  "mottle",
  "sully",
  "defile"
];

export default IconDocumentCloud as IconComponent;