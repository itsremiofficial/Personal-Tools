import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconArrowUp2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M12 15.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 11.5L12 8.5L15 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M15.4807 10.7702L11.6907 15.8202H6.08072C5.12072 15.8202 4.64073 14.6602 5.32073 13.9802L10.5007 8.80023C11.3307 7.97023 12.6807 7.97023 13.5107 8.80023L15.4807 10.7702Z" fill="currentColor" /><path d="M17.9195 15.82H11.6895L15.4795 10.77L18.6895 13.98C19.3595 14.66 18.8795 15.82 17.9195 15.82Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrowUp2 as IconComponentType).keywords = [
  "arrow",
  "up",
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
  "upbound",
  "upwardly",
  "ascending",
  "upward",
  "upwards",
  "rising",
  "astir",
  "ahead",
  "awake",
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

export default IconArrowUp2 as IconComponentType;