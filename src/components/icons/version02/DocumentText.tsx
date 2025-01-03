import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDocumentText: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6699 10V15C22.6699 20 20.6699 22 15.6699 22H9.66992C4.66992 22 2.66992 20 2.66992 15V9C2.66992 4 4.66992 2 9.66992 2H14.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6699 10H18.6699C15.6699 10 14.6699 9 14.6699 6V2L22.6699 10Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.66992 13H13.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.66992 17H11.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.1699 10.19H18.2799C15.9099 10.19 13.9799 8.26 13.9799 5.89V3C13.9799 2.45 13.5299 2 12.9799 2H8.73992C5.65992 2 3.16992 4 3.16992 7.57V16.43C3.16992 20 5.65992 22 8.73992 22H16.5999C19.6799 22 22.1699 20 22.1699 16.43V11.19C22.1699 10.64 21.7199 10.19 21.1699 10.19Z" fill="currentColor" /><path d="M16.4701 2.20999C16.0601 1.79999 15.3501 2.07999 15.3501 2.64999V6.13999C15.3501 7.59999 16.5901 8.80999 18.1001 8.80999C19.0501 8.81999 20.3701 8.81999 21.5001 8.81999C22.0701 8.81999 22.3701 8.14999 21.9701 7.74999C20.5301 6.29999 17.9501 3.68999 16.4701 2.20999Z" fill="currentColor" /><path d="M14.1699 13.75H8.16992C7.75992 13.75 7.41992 13.41 7.41992 13C7.41992 12.59 7.75992 12.25 8.16992 12.25H14.1699C14.5799 12.25 14.9199 12.59 14.9199 13C14.9199 13.41 14.5799 13.75 14.1699 13.75Z" fill="currentColor" /><path d="M12.1699 17.75H8.16992C7.75992 17.75 7.41992 17.41 7.41992 17C7.41992 16.59 7.75992 16.25 8.16992 16.25H12.1699C12.5799 16.25 12.9199 16.59 12.9199 17C12.9199 17.41 12.5799 17.75 12.1699 17.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.4701 2.20999C16.0601 1.79999 15.3501 2.07999 15.3501 2.64999V6.13999C15.3501 7.59999 16.5901 8.80999 18.1001 8.80999C19.0501 8.81999 20.3701 8.81999 21.5001 8.81999C22.0701 8.81999 22.3701 8.14999 21.9701 7.74999C20.5301 6.29999 17.9501 3.68999 16.4701 2.20999Z" fill="currentColor" /><path d="M21.1699 10.19H18.2799C15.9099 10.19 13.9799 8.26 13.9799 5.89V3C13.9799 2.45 13.5299 2 12.9799 2H8.73992C5.65992 2 3.16992 4 3.16992 7.57V16.43C3.16992 20 5.65992 22 8.73992 22H16.5999C19.6799 22 22.1699 20 22.1699 16.43V11.19C22.1699 10.64 21.7199 10.19 21.1699 10.19ZM12.1699 17.75H8.16992C7.75992 17.75 7.41992 17.41 7.41992 17C7.41992 16.59 7.75992 16.25 8.16992 16.25H12.1699C12.5799 16.25 12.9199 16.59 12.9199 17C12.9199 17.41 12.5799 17.75 12.1699 17.75ZM14.1699 13.75H8.16992C7.75992 13.75 7.41992 13.41 7.41992 13C7.41992 12.59 7.75992 12.25 8.16992 12.25H14.1699C14.5799 12.25 14.9199 12.59 14.9199 13C14.9199 13.41 14.5799 13.75 14.1699 13.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDocumentText as IconComponentType).keywords = [
  "document",
  "text",
  "papers",
  "text file",
  "written document",
  "documentation",
  "backgrounder",
  "workbook",
  "dossier",
  "handbook",
  "listing",
  "schoolbook",
  "textbook",
  "school text",
  "text edition",
  "textual matter",
  "writing",
  "letter",
  "paragraph",
  "manuscript"
];

export default IconDocumentText as IconComponentType;