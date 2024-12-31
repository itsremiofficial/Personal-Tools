import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconArrowDown2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M12 8.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 12.5L12 15.5L15 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.18C19.83 2 22 4.17 22 7.81V16.18C22 19.82 19.83 21.99 16.19 21.99H7.81C4.17 22 2 19.83 2 16.19Z" fill="currentColor" /><path d="M11.4704 18.53L7.18039 14.24C6.89039 13.95 6.89039 13.47 7.18039 13.18C7.47039 12.89 7.95039 12.89 8.24039 13.18L11.2504 16.19V6C11.2504 5.59 11.5904 5.25 12.0004 5.25C12.4104 5.25 12.7504 5.59 12.7504 6V16.19L15.7604 13.18C16.0504 12.89 16.5304 12.89 16.8204 13.18C16.9704 13.33 17.0404 13.52 17.0404 13.71C17.0404 13.9 16.9704 14.09 16.8204 14.24L12.5304 18.53C12.3904 18.67 12.2004 18.75 12.0004 18.75C11.8004 18.75 11.6104 18.67 11.4704 18.53Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrowDown2 as IconComponentType).keywords = [
  "arrow",
  "down",
  "2",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "downwards",
  "downward",
  "downbound",
  "falling",
  "fallen",
  "pull down",
  "downwardly",
  "declining",
  "descending",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconArrowDown2 as IconComponentType;