import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconTrushSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M17.8996 9.04973C15.7196 8.82973 13.5196 8.71973 11.3296 8.71973C10.0296 8.71973 8.72961 8.78972 7.43961 8.91972L6.09961 9.04973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.70898 8.38994L9.84898 7.52994C9.94898 6.90994 10.029 6.43994 11.139 6.43994H12.859C13.969 6.43994 14.049 6.92994 14.149 7.52994L14.289 8.37994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.49 9.12988L16.06 15.7299C15.99 16.7599 15.93 17.5599 14.1 17.5599H9.89C8.06 17.5599 7.99999 16.7599 7.92999 15.7299L7.5 9.12988" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81978C4.17978 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17978 21.99 7.81978 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M16.8598 8.46008C16.0198 8.38008 15.2498 8.33008 14.4998 8.28008L14.4198 7.80008C14.3498 7.32008 14.1998 6.33008 12.6898 6.33008H11.2998C9.80979 6.33008 9.6498 7.28008 9.5698 7.79008L9.4898 8.26007C9.0598 8.29007 8.6398 8.31007 8.2098 8.35007L7.11979 8.46008C6.73979 8.50008 6.46979 8.83008 6.50979 9.21008C6.54979 9.56008 6.83979 9.83008 7.18979 9.83008C7.20979 9.83008 7.23979 9.83008 7.25979 9.83008L8.33979 9.72008C8.93979 9.67008 9.54979 9.62008 10.1498 9.59008C11.3698 9.54008 12.5898 9.56008 13.8198 9.62008C14.7298 9.66008 15.6798 9.73008 16.7198 9.83008C16.7398 9.83008 16.7598 9.83008 16.7798 9.83008C17.1298 9.83008 17.4298 9.56008 17.4598 9.21008C17.5098 8.83008 17.2398 8.49008 16.8598 8.46008Z" fill="currentColor" /><path d="M15.8305 11.1001C15.6605 10.9101 15.4105 10.8101 15.1605 10.8101H8.84049C8.59049 10.8101 8.34049 10.9201 8.17049 11.1001C8.00049 11.2901 7.91048 11.5401 7.93048 11.7901L8.2405 15.7501C8.3005 16.6001 8.37049 17.6601 10.2905 17.6601H13.7105C15.6305 17.6601 15.7005 16.6001 15.7605 15.7501L16.0705 11.7901C16.0905 11.5401 16.0005 11.2901 15.8305 11.1001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTrushSquare as IconComponentType).keywords = [
  "trush",
  "square",
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

export default IconTrushSquare as IconComponentType;