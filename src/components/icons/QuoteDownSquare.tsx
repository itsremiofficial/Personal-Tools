import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconQuoteDownSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M7 12.1597H9.68C10.39 12.1597 10.87 12.6997 10.87 13.3497V14.8397C10.87 15.4897 10.39 16.0297 9.68 16.0297H8.19C7.54 16.0297 7 15.4897 7 14.8397V12.1597" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 12.1597C7 9.36973 7.52 8.89973 9.09 7.96973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.1406 12.1597H15.8206C16.5306 12.1597 17.0106 12.6997 17.0106 13.3497V14.8397C17.0106 15.4897 16.5306 16.0297 15.8206 16.0297H14.3306C13.6806 16.0297 13.1406 15.4897 13.1406 14.8397V12.1597" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.1406 12.1597C13.1406 9.36973 13.6606 8.89973 15.2306 7.96973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M8.19 16.78H9.68C10.77 16.78 11.62 15.93 11.62 14.84V13.35C11.62 12.26 10.77 11.41 9.68 11.41H7.77C7.85 9.59997 8.27 9.33 9.48 8.62C9.84 8.41 9.95 7.95003 9.74 7.59003C9.6 7.35003 9.35 7.21997 9.09 7.21997C8.96 7.21997 8.83 7.25001 8.71 7.32001C6.92 8.38001 6.25 9.07002 6.25 12.15V14.82C6.25 15.91 7.12 16.78 8.19 16.78Z" fill="currentColor" /><path d="M14.3209 16.78H15.8109C16.9009 16.78 17.7509 15.93 17.7509 14.84V13.35C17.7509 12.26 16.9009 11.41 15.8109 11.41H13.9009C13.9809 9.59997 14.4009 9.33 15.6109 8.62C15.9709 8.41 16.0809 7.95003 15.8709 7.59003C15.7309 7.35003 15.4809 7.21997 15.2209 7.21997C15.0909 7.21997 14.9609 7.25001 14.8409 7.32001C13.0509 8.38001 12.3809 9.07002 12.3809 12.15V14.82C12.3909 15.91 13.2609 16.78 14.3209 16.78Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconQuoteDownSquare as IconComponentType).keywords = [
  "quote",
  "down",
  "square",
  "quotation",
  "cite",
  "quotation mark",
  "inverted comma",
  "cited",
  "phrase",
  "naming",
  "recite",
  "read",
  "downwards",
  "downward",
  "downbound",
  "falling",
  "fallen",
  "pull down",
  "downwardly",
  "declining",
  "descending",
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

export default IconQuoteDownSquare as IconComponentType;