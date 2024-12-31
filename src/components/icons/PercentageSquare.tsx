import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPercentageSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.32031 15.27L14.8603 8.72998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.73001 10.3701C9.40932 10.3701 9.95999 9.81948 9.95999 9.14017C9.95999 8.46086 9.40932 7.91016 8.73001 7.91016C8.0507 7.91016 7.5 8.46086 7.5 9.14017C7.5 9.81948 8.0507 10.3701 8.73001 10.3701Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.269 16.0899C15.9484 16.0899 16.4991 15.5392 16.4991 14.8599C16.4991 14.1806 15.9484 13.6299 15.269 13.6299C14.5897 13.6299 14.0391 14.1806 14.0391 14.8599C14.0391 15.5392 14.5897 16.0899 15.269 16.0899Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M8.81976 16.0201C8.62976 16.0201 8.43977 15.9501 8.28977 15.8001C7.99977 15.5101 7.99977 15.0301 8.28977 14.7401L14.8398 8.19016C15.1298 7.90016 15.6098 7.90016 15.8998 8.19016C16.1898 8.48016 16.1898 8.96015 15.8998 9.25015L9.34976 15.8001C9.19976 15.9501 9.00976 16.0201 8.81976 16.0201Z" fill="currentColor" /><path d="M9.23001 7.66016C8.42001 7.66016 7.75 8.32017 7.75 9.14017C7.75 9.95017 8.41001 10.6201 9.23001 10.6201C10.04 10.6201 10.71 9.96017 10.71 9.14017C10.7 8.32017 10.04 7.66016 9.23001 7.66016Z" fill="currentColor" /><path d="M15.769 13.3901C14.959 13.3901 14.2891 14.0501 14.2891 14.8701C14.2891 15.6801 14.949 16.3501 15.769 16.3501C16.579 16.3501 17.2491 15.6901 17.2491 14.8701C17.2491 14.0501 16.589 13.3901 15.769 13.3901Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPercentageSquare as IconComponentType).keywords = [
  "percentage",
  "square",
  "per centum",
  "percent",
  "pct",
  "part",
  "portion",
  "share",
  "centenary",
  "centennial",
  "percentile",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest"
];

export default IconPercentageSquare as IconComponentType;