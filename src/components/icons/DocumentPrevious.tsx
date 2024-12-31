import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDocumentPrevious: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M13 15H7L9 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 15L9 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 10H18C15 10 14 9 14 6V2L18 6L22 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z" fill="currentColor" /><path d="M15.7997 2.20999C15.3897 1.79999 14.6797 2.07999 14.6797 2.64999V6.13999C14.6797 7.59999 15.9197 8.80999 17.4297 8.80999C18.3797 8.81999 19.6997 8.81999 20.8297 8.81999C21.3997 8.81999 21.6997 8.14999 21.2997 7.74999C19.8597 6.29999 17.2797 3.68999 15.7997 2.20999Z" fill="currentColor" /><path d="M13.0002 14.2499H8.81024L9.53023 13.5299C9.82023 13.2399 9.82023 12.7599 9.53023 12.4699C9.24023 12.1799 8.76023 12.1799 8.47023 12.4699L6.47023 14.4699C6.46023 14.4799 6.46023 14.4899 6.45023 14.4899C6.39023 14.5499 6.34023 14.6299 6.30023 14.7099C6.30023 14.7199 6.30023 14.7199 6.29023 14.7299C6.26023 14.8099 6.25023 14.8899 6.24023 14.9699C6.24023 14.9999 6.24023 15.0199 6.24023 15.0499C6.24023 15.1099 6.26023 15.1699 6.28023 15.2299C6.29023 15.2599 6.30023 15.2799 6.31023 15.2999C6.35023 15.3799 6.39023 15.4599 6.46023 15.5199L8.46023 17.5199C8.61023 17.6699 8.80023 17.7399 8.99023 17.7399C9.18023 17.7399 9.37023 17.6699 9.52024 17.5199C9.81024 17.2299 9.81024 16.7499 9.52024 16.4599L8.80023 15.7399H13.0002C13.4102 15.7399 13.7502 15.3999 13.7502 14.9899C13.7502 14.5799 13.4102 14.2499 13.0002 14.2499Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDocumentPrevious as IconComponentType).keywords = [
  "document",
  "previous",
  "papers",
  "text file",
  "written document",
  "documentation",
  "backgrounder",
  "workbook",
  "dossier",
  "handbook",
  "listing",
  "preceding",
  "early",
  "premature",
  "former",
  "past",
  "old",
  "late",
  "foregoing",
  "antecedent"
];

export default IconDocumentPrevious as IconComponentType;