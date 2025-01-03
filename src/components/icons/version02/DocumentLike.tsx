import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDocumentLike: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6699 7V17C21.6699 20 20.1699 22 16.6699 22H8.66992C5.16992 22 3.66992 20 3.66992 17V7C3.66992 4 5.16992 2 8.66992 2H16.6699C20.1699 2 21.6699 4 21.6699 7Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.1699 4.5V6.5C15.1699 7.6 16.0699 8.5 17.1699 8.5H19.1699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.15006 15.49C7.82006 14.46 8.21003 13.19 9.28003 12.84C9.85003 12.66 10.55 12.81 10.94 13.36C11.31 12.79 12.04 12.66 12.6 12.84C13.68 13.19 14.0601 14.46 13.7401 15.49C13.2301 17.12 11.44 17.9699 10.94 17.9699C10.45 17.9599 8.68006 17.13 8.15006 15.49Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.6699 7V17C21.6699 20 20.1699 22 16.6699 22H8.66992C5.16992 22 3.66992 20 3.66992 17V7C3.66992 4 5.16992 2 8.66992 2H16.6699C20.1699 2 21.6699 4 21.6699 7Z" fill="currentColor" /><path d="M19.1699 9.25H17.1699C15.6499 9.25 14.4199 8.02 14.4199 6.5V4.5C14.4199 4.09 14.7599 3.75 15.1699 3.75C15.5799 3.75 15.9199 4.09 15.9199 4.5V6.5C15.9199 7.19 16.4799 7.75 17.1699 7.75H19.1699C19.5799 7.75 19.9199 8.09 19.9199 8.5C19.9199 8.91 19.5799 9.25 19.1699 9.25Z" fill="currentColor" /><path d="M8.15006 15.49C7.82006 14.46 8.21003 13.19 9.28003 12.84C9.85003 12.66 10.55 12.81 10.94 13.36C11.31 12.79 12.04 12.66 12.6 12.84C13.68 13.19 14.0601 14.46 13.7401 15.49C13.2301 17.12 11.44 17.9699 10.94 17.9699C10.45 17.9599 8.68006 17.13 8.15006 15.49Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6699 2H8.66992C5.16992 2 3.66992 4 3.66992 7V17C3.66992 20 5.16992 22 8.66992 22H16.6699C20.1699 22 21.6699 20 21.6699 17V7C21.6699 4 20.1699 2 16.6699 2ZM13.7399 15.49C13.2299 17.12 11.4399 17.97 10.9399 17.97C10.4499 17.96 8.67992 17.13 8.14992 15.49C7.81992 14.46 8.20992 13.19 9.27992 12.84C9.84992 12.66 10.5499 12.81 10.9399 13.36C11.3099 12.79 12.0399 12.66 12.5999 12.84C13.6799 13.19 14.0599 14.46 13.7399 15.49ZM19.1699 9.25H17.1699C15.6499 9.25 14.4199 8.02 14.4199 6.5V4.5C14.4199 4.09 14.7599 3.75 15.1699 3.75C15.5799 3.75 15.9199 4.09 15.9199 4.5V6.5C15.9199 7.19 16.4799 7.75 17.1699 7.75H19.1699C19.5799 7.75 19.9199 8.09 19.9199 8.5C19.9199 8.91 19.5799 9.25 19.1699 9.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDocumentLike as IconComponentType).keywords = [
  "document",
  "like",
  "papers",
  "text file",
  "written document",
  "documentation",
  "backgrounder",
  "workbook",
  "dossier",
  "handbook",
  "listing",
  "wish",
  "ish",
  "like-minded",
  "suchlike",
  "corresponding",
  "similar",
  "alike",
  "equal",
  "comparable"
];

export default IconDocumentLike as IconComponentType;