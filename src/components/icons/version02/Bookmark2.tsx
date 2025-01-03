import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBookmark2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6699 2C16.6699 2 17.6699 3.01 17.6699 5.03V12.08C17.6699 14.07 16.2599 14.84 14.5299 13.8L13.2099 13C12.9099 12.82 12.4299 12.82 12.1299 13L10.8099 13.8C9.07992 14.84 7.66992 14.07 7.66992 12.08V5.03C7.66992 3.01 8.66992 2 10.6699 2H14.6699Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.48992 4.98996C4.07992 5.55996 2.66992 7.65996 2.66992 11.9V14.93C2.66992 19.98 4.66992 22 9.66992 22H15.6699C20.6699 22 22.6699 19.98 22.6699 14.93V11.9C22.6699 7.58996 21.2099 5.47996 17.6699 4.95996" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6699 4.96V12.08C17.6699 14.07 16.2599 14.84 14.5299 13.8L13.2099 13C12.9099 12.82 12.4299 12.82 12.1299 13L10.8099 13.8C9.07992 14.84 7.66992 14.07 7.66992 12.08V4.99C7.67992 3 8.67992 2 10.6699 2H14.6699C16.6499 2 17.6499 2.99 17.6699 4.96Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22.6699 11.9V14.93C22.6699 19.98 20.6699 22 15.6699 22H9.66992C4.66992 22 2.66992 19.98 2.66992 14.93V11.9C2.66992 7.65996 4.07992 5.55996 7.48992 4.98996H7.66992V12.08C7.66992 14.07 9.07992 14.84 10.8099 13.8L12.1299 13C12.4299 12.82 12.9099 12.82 13.2099 13L14.5299 13.8C16.2599 14.84 17.6699 14.07 17.6699 12.08V4.95996C21.2099 5.47996 22.6699 7.58996 22.6699 11.9Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6699 4.96V12.08C17.6699 14.07 16.2599 14.84 14.5299 13.8L13.2099 13C12.9099 12.82 12.4299 12.82 12.1299 13L10.8099 13.8C9.07992 14.84 7.66992 14.07 7.66992 12.08V4.99C7.67992 3 8.67992 2 10.6699 2H14.6699C16.6499 2 17.6499 2.99 17.6699 4.96Z" fill="currentColor" /><path d="M22.6699 11.9001V14.9301C22.6699 19.9801 20.6699 22.0001 15.6699 22.0001H9.66992C4.66992 22.0001 2.66992 19.9801 2.66992 14.9301V11.9001C2.66992 9.2101 3.23992 7.3801 4.51992 6.2601C5.16992 5.7101 6.16992 6.1901 6.16992 7.0401V12.0801C6.16992 13.5701 6.77992 14.7701 7.83992 15.3701C8.90992 15.9801 10.2699 15.8701 11.5899 15.0801L12.6699 14.4301L13.7599 15.0801C14.4999 15.5301 15.2699 15.7601 15.9899 15.7601C16.5299 15.7601 17.0399 15.6301 17.4999 15.3701C18.5599 14.7701 19.1699 13.5701 19.1699 12.0801V7.0301C19.1699 6.1801 20.1799 5.7001 20.8199 6.2601C22.0999 7.3801 22.6699 9.2101 22.6699 11.9001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBookmark2 as IconComponentType).keywords = [
  "bookmark",
  "2",
  "bookmarker",
  "marking",
  "caller",
  "dialing",
  "dialer",
  "maker",
  "add",
  "marker",
  "make",
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

export default IconBookmark2 as IconComponentType;