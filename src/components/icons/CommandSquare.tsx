import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCommandSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M14.3997 9.6001H9.59961V14.4001H14.3997V9.6001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.79999 17.9999C8.78999 17.9999 9.59998 17.1899 9.59998 16.1999V14.3999H7.79999C6.80999 14.3999 6 15.2099 6 16.1999C6 17.1899 6.80999 17.9999 7.79999 17.9999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.79999 9.60001H9.59998V7.79999C9.59998 6.80999 8.78999 6 7.79999 6C6.80999 6 6 6.80999 6 7.79999C6 8.78999 6.80999 9.60001 7.79999 9.60001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.4004 9.60001H16.2004C17.1904 9.60001 18.0004 8.78999 18.0004 7.79999C18.0004 6.80999 17.1904 6 16.2004 6C15.2104 6 14.4004 6.80999 14.4004 7.79999V9.60001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.2004 17.9999C17.1904 17.9999 18.0004 17.1899 18.0004 16.1999C18.0004 15.2099 17.1904 14.3999 16.2004 14.3999H14.4004V16.1999C14.4004 17.1899 15.2104 17.9999 16.2004 17.9999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M10.7496 14.1498H13.2596C13.7496 14.1498 14.1596 13.7498 14.1596 13.2498V10.7398C14.1596 10.2498 13.7596 9.83984 13.2596 9.83984H10.7496C10.2596 9.83984 9.84961 10.2398 9.84961 10.7398V13.2498C9.84961 13.7498 10.2496 14.1498 10.7496 14.1498Z" fill="currentColor" /><path d="M7.79999 17.9999C8.78999 17.9999 9.59998 17.1899 9.59998 16.1999V15.3999C9.59998 14.8499 9.14998 14.3999 8.59998 14.3999H7.79999C6.80999 14.3999 6 15.2099 6 16.1999C6 17.1899 6.80999 17.9999 7.79999 17.9999Z" fill="currentColor" /><path d="M7.79999 9.60001H8.59998C9.14998 9.60001 9.59998 9.15001 9.59998 8.60001V7.79999C9.59998 6.80999 8.78999 6 7.79999 6C6.80999 6 6 6.80999 6 7.79999C6 8.78999 6.80999 9.60001 7.79999 9.60001Z" fill="currentColor" /><path d="M15.4004 9.60001H16.2004C17.1904 9.60001 18.0004 8.78999 18.0004 7.79999C18.0004 6.80999 17.1904 6 16.2004 6C15.2104 6 14.4004 6.80999 14.4004 7.79999V8.60001C14.4004 9.15001 14.8504 9.60001 15.4004 9.60001Z" fill="currentColor" /><path d="M16.2004 17.9999C17.1904 17.9999 18.0004 17.1899 18.0004 16.1999C18.0004 15.2099 17.1904 14.3999 16.2004 14.3999H15.4004C14.8504 14.3999 14.4004 14.8499 14.4004 15.3999V16.1999C14.4004 17.1899 15.2104 17.9999 16.2004 17.9999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCommandSquare as IconComponentType).keywords = [
  "command",
  "square",
  "control",
  "bidding",
  "mastery",
  "dominate",
  "instruction",
  "require",
  "statement",
  "compel",
  "overlook",
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

export default IconCommandSquare as IconComponentType;