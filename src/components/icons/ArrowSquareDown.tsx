import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconArrowSquareDown: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.4707 10.6401L12.0007 14.1601L15.5307 10.6401" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M12.0002 14.9098C11.8102 14.9098 11.6202 14.8398 11.4702 14.6898L7.94016 11.1598C7.65016 10.8698 7.65016 10.3898 7.94016 10.0998C8.23016 9.80982 8.71016 9.80982 9.00016 10.0998L12.0002 13.0998L15.0002 10.0998C15.2902 9.80982 15.7702 9.80982 16.0602 10.0998C16.3502 10.3898 16.3502 10.8698 16.0602 11.1598L12.5302 14.6898C12.3802 14.8398 12.1902 14.9098 12.0002 14.9098Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrowSquareDown as IconComponentType).keywords = [
  "arrow",
  "square",
  "down",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
  "downwards",
  "downward",
  "downbound",
  "falling",
  "fallen",
  "pull down",
  "downwardly",
  "declining",
  "descending"
];

export default IconArrowSquareDown as IconComponentType;