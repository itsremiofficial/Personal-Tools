import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDocumentCode: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6699 7V17C21.6699 20 20.1699 22 16.6699 22H8.66992C5.16992 22 3.66992 20 3.66992 17V7C3.66992 4 5.16992 2 8.66992 2H16.6699C20.1699 2 21.6699 4 21.6699 7Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.1699 4.5V6.5C15.1699 7.6 16.0699 8.5 17.1699 8.5H19.1699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.6699 13L8.66992 15L10.6699 17" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.6699 13L16.6699 15L14.6699 17" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.6699 7V17C21.6699 20 20.1699 22 16.6699 22H8.66992C5.16992 22 3.66992 20 3.66992 17V7C3.66992 4 5.16992 2 8.66992 2H16.6699C20.1699 2 21.6699 4 21.6699 7Z" fill="currentColor" /><path d="M19.1699 9.25H17.1699C15.6499 9.25 14.4199 8.02 14.4199 6.5V4.5C14.4199 4.09 14.7599 3.75 15.1699 3.75C15.5799 3.75 15.9199 4.09 15.9199 4.5V6.5C15.9199 7.19 16.4799 7.75 17.1699 7.75H19.1699C19.5799 7.75 19.9199 8.09 19.9199 8.5C19.9199 8.91 19.5799 9.25 19.1699 9.25Z" fill="currentColor" /><path d="M10.6699 17.75C10.4799 17.75 10.2899 17.68 10.1399 17.53L8.13986 15.53C7.84986 15.24 7.84986 14.7599 8.13986 14.4699L10.1399 12.4699C10.4299 12.1799 10.9099 12.1799 11.1999 12.4699C11.4899 12.7599 11.4899 13.24 11.1999 13.53L9.72986 15L11.1999 16.4699C11.4899 16.7599 11.4899 17.24 11.1999 17.53C11.0499 17.68 10.8599 17.75 10.6699 17.75Z" fill="currentColor" /><path d="M14.6699 17.75C14.4799 17.75 14.2899 17.68 14.1399 17.53C13.8499 17.24 13.8499 16.7599 14.1399 16.4699L15.6099 15L14.1399 13.53C13.8499 13.24 13.8499 12.7599 14.1399 12.4699C14.4299 12.1799 14.9099 12.1799 15.1999 12.4699L17.1999 14.4699C17.4899 14.7599 17.4899 15.24 17.1999 15.53L15.1999 17.53C15.0499 17.68 14.8599 17.75 14.6699 17.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6699 2H8.66992C5.16992 2 3.66992 4 3.66992 7V17C3.66992 20 5.16992 22 8.66992 22H16.6699C20.1699 22 21.6699 20 21.6699 17V7C21.6699 4 20.1699 2 16.6699 2ZM11.1999 16.47C11.4899 16.76 11.4899 17.24 11.1999 17.53C11.0499 17.68 10.8599 17.75 10.6699 17.75C10.4799 17.75 10.2899 17.68 10.1399 17.53L8.13992 15.53C7.84992 15.24 7.84992 14.76 8.13992 14.47L10.1399 12.47C10.4299 12.18 10.9099 12.18 11.1999 12.47C11.4899 12.76 11.4899 13.24 11.1999 13.53L9.72992 15L11.1999 16.47ZM17.1999 15.53L15.1999 17.53C15.0499 17.68 14.8599 17.75 14.6699 17.75C14.4799 17.75 14.2899 17.68 14.1399 17.53C13.8499 17.24 13.8499 16.76 14.1399 16.47L15.6099 15L14.1399 13.53C13.8499 13.24 13.8499 12.76 14.1399 12.47C14.4299 12.18 14.9099 12.18 15.1999 12.47L17.1999 14.47C17.4899 14.76 17.4899 15.24 17.1999 15.53ZM19.1699 9.25H17.1699C15.6499 9.25 14.4199 8.02 14.4199 6.5V4.5C14.4199 4.09 14.7599 3.75 15.1699 3.75C15.5799 3.75 15.9199 4.09 15.9199 4.5V6.5C15.9199 7.19 16.4799 7.75 17.1699 7.75H19.1699C19.5799 7.75 19.9199 8.09 19.9199 8.5C19.9199 8.91 19.5799 9.25 19.1699 9.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDocumentCode as IconComponentType).keywords = [
  "document",
  "code",
  "papers",
  "text file",
  "written document",
  "documentation",
  "backgrounder",
  "workbook",
  "dossier",
  "handbook",
  "listing",
  "encode",
  "cypher",
  "encipher",
  "cipher",
  "encrypt",
  "computer code",
  "codification",
  "inscribe",
  "write in code"
];

export default IconDocumentCode as IconComponentType;