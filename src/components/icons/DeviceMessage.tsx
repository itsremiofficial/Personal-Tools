import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDeviceMessage: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.25V9.15002C22 10.64 21.24 11.76 20 12.2C19.62 12.33 19.2 12.4 18.75 12.4H16.15L13.26 14.33C12.83 14.61 12.25 14.3 12.25 13.79V12.4C11.28 12.4 10.46 12.08 9.89 11.51C9.32 10.94 9 10.12 9 9.15002V5.25C9 4.8 9.07 4.38 9.2 4C9.64 2.76 10.76 2 12.25 2H18.75C20.7 2 22 3.3 22 5.25Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M20 12.2V13.9C20 17.05 18.2 18.4 15.5 18.4H6.5C3.8 18.4 2 17.05 2 13.9V8.5C2 5.35 3.8 4 6.5 4H9.2C9.07 4.38 9 4.8 9 5.25V9.15002C9 10.12 9.32 10.94 9.89 11.51C10.46 12.08 11.28 12.4 12.25 12.4V13.79C12.25 14.3 12.83 14.61 13.26 14.33L16.15 12.4H18.75C19.2 12.4 19.62 12.33 20 12.2Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.40039 22H14.6004" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M11 18.3999V21.9999" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M18.4955 7.25H18.5045" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.6947 7.25H15.7037" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.8959 7.25H12.9049" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 12.2V13.9C20 17.05 18.2 18.4 15.5 18.4H6.5C3.8 18.4 2 17.05 2 13.9V8.5C2 5.35 3.8 4 6.5 4H9.2C9.07 4.38 9 4.8 9 5.25V9.15002C9 10.12 9.32 10.94 9.89 11.51C10.46 12.08 11.28 12.4 12.25 12.4V13.79C12.25 14.3 12.83 14.61 13.26 14.33L16.15 12.4H18.75C19.2 12.4 19.62 12.33 20 12.2Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22 5.25V9.15002C22 10.64 21.24 11.76 20 12.2C19.62 12.33 19.2 12.4 18.75 12.4H16.15L13.26 14.33C12.83 14.61 12.25 14.3 12.25 13.79V12.4C11.28 12.4 10.46 12.08 9.89 11.51C9.32 10.94 9 10.12 9 9.15002V5.25C9 4.8 9.07 4.38 9.2 4C9.64 2.76 10.76 2 12.25 2H18.75C20.7 2 22 3.3 22 5.25Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.6004 21.2499H11.7504V18.3999C11.7504 17.9899 11.4104 17.6499 11.0004 17.6499C10.5904 17.6499 10.2504 17.9899 10.2504 18.3999V21.2499H7.40039C6.99039 21.2499 6.65039 21.5899 6.65039 21.9999C6.65039 22.4099 6.99039 22.7499 7.40039 22.7499H14.6004C15.0104 22.7499 15.3504 22.4099 15.3504 21.9999C15.3504 21.5899 15.0104 21.2499 14.6004 21.2499Z" fill="currentColor" /><path d="M15.4395 8C15.0195 8 14.6895 7.66 14.6895 7.25C14.6895 6.84 15.0295 6.5 15.4395 6.5C15.8495 6.5 16.1895 6.84 16.1895 7.25C16.1895 7.66 15.8495 8 15.4395 8Z" fill="currentColor" /><path d="M18.25 8C17.83 8 17.5 7.66 17.5 7.25C17.5 6.84 17.84 6.5 18.25 6.5C18.66 6.5 19 6.84 19 7.25C19 7.66 18.66 8 18.25 8Z" fill="currentColor" /><path d="M12.6191 8C12.1991 8 11.8691 7.66 11.8691 7.25C11.8691 6.84 12.2091 6.5 12.6191 6.5C13.0291 6.5 13.3691 6.84 13.3691 7.25C13.3691 7.66 13.0391 8 12.6191 8Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDeviceMessage as IconComponentType).keywords = [
  "device",
  "message",
  "twist",
  "gimmick",
  "contrivance",
  "machinery",
  "apparatus",
  "contraption",
  "mechanism",
  "machine",
  "charger",
  "subject matter",
  "substance",
  "content",
  "file",
  "communiqué",
  "transmission",
  "communication",
  "news",
  "advertisement"
];

export default IconDeviceMessage as IconComponentType;