import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDocumentNormal: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6699 6H14.6699C16.6699 6 16.6699 5 16.6699 4C16.6699 2 15.6699 2 14.6699 2H10.6699C9.66992 2 8.66992 2 8.66992 4C8.66992 6 9.66992 6 10.6699 6Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.6699 4.02002C19.9999 4.20002 21.6699 5.43002 21.6699 10V16C21.6699 20 20.6699 22 15.6699 22H9.66992C4.66992 22 3.66992 20 3.66992 16V10C3.66992 5.44002 5.33992 4.20002 8.66992 4.02002" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.91 3.65002H8.42996C5.95996 3.65002 3.95996 5.66002 3.95996 8.12002V17.53C3.95996 19.99 5.96996 22 8.42996 22H16.9C19.37 22 21.37 19.99 21.37 17.53V8.12002C21.38 5.65002 19.37 3.65002 16.91 3.65002Z" fill="currentColor" /><path d="M15.0199 2H10.3199C9.27993 2 8.42993 2.84 8.42993 3.88V4.82C8.42993 5.86 9.26993 6.7 10.3099 6.7H15.0199C16.0599 6.7 16.8999 5.86 16.8999 4.82V3.88C16.9099 2.84 16.0599 2 15.0199 2Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.38 8.11998V17.53C21.38 19.99 19.37 22 16.91 22H8.42996C5.96996 22 3.95996 19.99 3.95996 17.53V8.11998C3.95996 6.40998 4.91996 4.91998 6.32996 4.16998C6.81996 3.90998 7.42996 4.25998 7.42996 4.81998C7.42996 6.40998 8.72996 7.70998 10.32 7.70998H15.02C16.61 7.70998 17.91 6.40998 17.91 4.81998C17.91 4.25998 18.51 3.90998 19.01 4.16998C20.42 4.91998 21.38 6.40998 21.38 8.11998Z" fill="currentColor" /><path d="M15.0199 2H10.3199C9.27993 2 8.42993 2.84 8.42993 3.88V4.82C8.42993 5.86 9.26993 6.7 10.3099 6.7H15.0199C16.0599 6.7 16.8999 5.86 16.8999 4.82V3.88C16.9099 2.84 16.0599 2 15.0199 2Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDocumentNormal as IconComponentType).keywords = [
  "document",
  "normal",
  "papers",
  "text file",
  "written document",
  "documentation",
  "backgrounder",
  "workbook",
  "dossier",
  "handbook",
  "listing",
  "typical",
  "natural",
  "mean",
  "rule",
  "modal",
  "pattern",
  "convention",
  "regular",
  "average"
];

export default IconDocumentNormal as IconComponentType;