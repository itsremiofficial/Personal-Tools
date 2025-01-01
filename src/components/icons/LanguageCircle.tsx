import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconLanguageCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M16.9897 8.96045H7.00977" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 7.28027V8.96027" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5 8.94043C14.5 13.2404 11.14 16.7204 7 16.7204" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.9992 16.72C15.1992 16.72 13.5992 15.76 12.4492 14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M17.0002 15.97C15.6902 15.97 14.4402 15.37 13.4402 14.26C14.4302 12.99 15.0702 11.42 15.2102 9.70004H16.9902C17.4002 9.70004 17.7402 9.36004 17.7402 8.95004C17.7402 8.54004 17.4002 8.20004 16.9902 8.20004H14.5602C14.5402 8.20004 14.5202 8.19003 14.5002 8.19003C14.4802 8.19003 14.4602 8.20004 14.4402 8.20004H12.7502V7.27002C12.7502 6.86002 12.4102 6.52002 12.0002 6.52002C11.5902 6.52002 11.2502 6.86002 11.2502 7.27002V8.20004H7.01025C6.60025 8.20004 6.26025 8.54004 6.26025 8.95004C6.26025 9.36004 6.60025 9.70004 7.01025 9.70004H12.0002H13.7003C13.3303 13.22 10.4702 15.97 6.99023 15.97C6.58023 15.97 6.24023 16.31 6.24023 16.72C6.24023 17.13 6.58023 17.47 6.99023 17.47C9.06023 17.47 10.9502 16.67 12.4002 15.36C13.6702 16.72 15.2802 17.47 16.9902 17.47C17.4002 17.47 17.7402 17.13 17.7402 16.72C17.7402 16.31 17.4102 15.97 17.0002 15.97Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLanguageCircle as IconComponentType).keywords = [
  "language",
  "circle",
  "speech",
  "nomenclature",
  "terminology",
  "lyric",
  "words",
  "linguistic communication",
  "linguistic process",
  "oral communication",
  "spoken language",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle"
];

export default IconLanguageCircle as IconComponentType;