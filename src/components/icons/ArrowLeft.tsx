import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconArrowLeft: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.57 5.93018L3.5 12.0002L9.57 18.0702" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.4999 12H3.66992" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M15.4995 11.2499H10.3095L12.0295 9.52994C12.3195 9.23994 12.3195 8.75994 12.0295 8.46994C11.7395 8.17994 11.2595 8.17994 10.9695 8.46994L7.96945 11.4699C7.67945 11.7599 7.67945 12.2399 7.96945 12.5299L10.9695 15.5299C11.1195 15.6799 11.3095 15.7499 11.4995 15.7499C11.6895 15.7499 11.8795 15.6799 12.0295 15.5299C12.3195 15.2399 12.3195 14.7599 12.0295 14.4699L10.3095 12.7499H15.4995C15.9095 12.7499 16.2495 12.4099 16.2495 11.9999C16.2495 11.5899 15.9095 11.2499 15.4995 11.2499Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrowLeft as IconComponentType).keywords = [
  "arrow",
  "left",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "left-hand",
  "left-handed",
  "left over",
  "near",
  "leftover",
  "nigh",
  "remaining",
  "leftfield",
  "odd"
];

export default IconArrowLeft as IconComponentType;