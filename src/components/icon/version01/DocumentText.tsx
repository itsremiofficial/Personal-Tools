import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDocumentText: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M3 10.0005C3 6.22925 3 4.34363 4.17157 3.17206C5.34315 2.00049 7.22876 2.00049 11 2.00049H13C16.7712 2.00049 18.6569 2.00049 19.8284 3.17206C21 4.34363 21 6.22925 21 10.0005V14.0005C21 17.7717 21 19.6573 19.8284 20.8289C18.6569 22.0005 16.7712 22.0005 13 22.0005H11C7.22876 22.0005 5.34315 22.0005 4.17157 20.8289C3 19.6573 3 17.7717 3 14.0005V10.0005Z" stroke="currentColor" strokeWidth={width} /><path d="M8 12.0005H16" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M8 8.00049H16" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M8 16.0005H13" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M3 10.0005C3 6.22925 3 4.34363 4.17157 3.17206C5.34315 2.00049 7.22876 2.00049 11 2.00049H13C16.7712 2.00049 18.6569 2.00049 19.8284 3.17206C21 4.34363 21 6.22925 21 10.0005V14.0005C21 17.7717 21 19.6573 19.8284 20.8289C18.6569 22.0005 16.7712 22.0005 13 22.0005H11C7.22876 22.0005 5.34315 22.0005 4.17157 20.8289C3 19.6573 3 17.7717 3 14.0005V10.0005Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M7.25 12.0005C7.25 11.5863 7.58579 11.2505 8 11.2505H16C16.4142 11.2505 16.75 11.5863 16.75 12.0005C16.75 12.4147 16.4142 12.7505 16 12.7505H8C7.58579 12.7505 7.25 12.4147 7.25 12.0005Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M7.25 8.00049C7.25 7.58627 7.58579 7.25049 8 7.25049H16C16.4142 7.25049 16.75 7.58627 16.75 8.00049C16.75 8.4147 16.4142 8.75049 16 8.75049H8C7.58579 8.75049 7.25 8.4147 7.25 8.00049Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M7.25 16.0005C7.25 15.5863 7.58579 15.2505 8 15.2505H13C13.4142 15.2505 13.75 15.5863 13.75 16.0005C13.75 16.4147 13.4142 16.7505 13 16.7505H8C7.58579 16.7505 7.25 16.4147 7.25 16.0005Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.17157 3.17206C3 4.34363 3 6.22925 3 10.0005V14.0005C3 17.7717 3 19.6573 4.17157 20.8289C5.34315 22.0005 7.22876 22.0005 11 22.0005H13C16.7712 22.0005 18.6569 22.0005 19.8284 20.8289C21 19.6573 21 17.7717 21 14.0005V10.0005C21 6.22925 21 4.34363 19.8284 3.17206C18.6569 2.00049 16.7712 2.00049 13 2.00049H11C7.22876 2.00049 5.34315 2.00049 4.17157 3.17206ZM7.25 8.00049C7.25 7.58627 7.58579 7.25049 8 7.25049H16C16.4142 7.25049 16.75 7.58627 16.75 8.00049C16.75 8.4147 16.4142 8.75049 16 8.75049H8C7.58579 8.75049 7.25 8.4147 7.25 8.00049ZM7.25 12.0005C7.25 11.5863 7.58579 11.2505 8 11.2505H16C16.4142 11.2505 16.75 11.5863 16.75 12.0005C16.75 12.4147 16.4142 12.7505 16 12.7505H8C7.58579 12.7505 7.25 12.4147 7.25 12.0005ZM8 15.2505C7.58579 15.2505 7.25 15.5863 7.25 16.0005C7.25 16.4147 7.58579 16.7505 8 16.7505H13C13.4142 16.7505 13.75 16.4147 13.75 16.0005C13.75 15.5863 13.4142 15.2505 13 15.2505H8Z" fill="currentColor" /></svg> 
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