import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDocumentSketch: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 9V14C21 19 19 21 14 21H8C3 21 1 19 1 14V8C1 3 3 1 8 1H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21 9H17C14 9 13 8 13 5V1L21 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} fillRule="evenodd" clipRule="evenodd" d="M7.31975 11H9.96975C10.2398 11 10.5798 11.18 10.7198 11.4L11.8498 13.1C12.0798 13.44 12.0298 13.95 11.7398 14.24L9.27975 16.7C8.92975 17.05 8.34975 17.05 7.99975 16.7L5.53975 14.24C5.24975 13.95 5.19975 13.44 5.42975 13.1L6.55975 11.4C6.71975 11.18 7.05975 11 7.31975 11Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z" fill="currentColor" /><path d="M15.7997 2.20999C15.3897 1.79999 14.6797 2.07999 14.6797 2.64999V6.13999C14.6797 7.59999 15.9197 8.80999 17.4297 8.80999C18.3797 8.81999 19.6997 8.81999 20.8297 8.81999C21.3997 8.81999 21.6997 8.14999 21.2997 7.74999C19.8597 6.29999 17.2797 3.68999 15.7997 2.20999Z" fill="currentColor" /><path d="M12.5496 14.0002L11.6996 12.7202C11.4896 12.3902 11.0496 12.1602 10.6596 12.1602H8.63962C8.24962 12.1602 7.81962 12.3902 7.59962 12.7202L6.74962 14.0002C6.41962 14.4802 6.48962 15.1702 6.89962 15.5802L8.75962 17.4402C8.99962 17.6702 9.31962 17.8002 9.64962 17.8002C9.97962 17.8002 10.2996 17.6702 10.5396 17.4402L12.3996 15.5802C12.7996 15.1702 12.8596 14.4802 12.5496 14.0002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDocumentSketch as IconComponentType).keywords = [
  "document",
  "sketch",
  "papers",
  "text file",
  "written document",
  "documentation",
  "backgrounder",
  "workbook",
  "dossier",
  "handbook",
  "listing",
  "outline",
  "cartoon",
  "chalk out",
  "study",
  "survey",
  "vignette",
  "resume",
  "adumbrate",
  "drawing"
];

export default IconDocumentSketch as IconComponentType;