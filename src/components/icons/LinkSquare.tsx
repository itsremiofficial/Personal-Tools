import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconLinkSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.17961 16.0199C7.41961 15.9499 6.66961 15.5999 6.08961 14.9899C4.76961 13.5999 4.76961 11.3199 6.08961 9.92989L8.27961 7.6299C9.59961 6.2399 11.7696 6.2399 13.0996 7.6299C14.4196 9.0199 14.4196 11.2999 13.0996 12.6899L12.0096 13.8399" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.8202 7.97998C16.5802 8.04998 17.3302 8.39998 17.9102 9.00998C19.2302 10.4 19.2302 12.68 17.9102 14.07L15.7202 16.37C14.4002 17.76 12.2302 17.76 10.9002 16.37C9.58016 14.98 9.58016 12.7 10.9002 11.31L11.9902 10.16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81978C4.17978 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17978 21.99 7.81978 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M8.1796 16.7701C8.1596 16.7701 8.12961 16.7701 8.10961 16.7701C7.13961 16.6801 6.22961 16.2301 5.54961 15.5101C3.94961 13.8301 3.94961 11.1001 5.54961 9.4201L7.73961 7.12009C8.51961 6.30009 9.56961 5.84009 10.6896 5.84009C11.8096 5.84009 12.8596 6.29009 13.6396 7.12009C15.2396 8.80009 15.2396 11.5301 13.6396 13.2101L12.5496 14.3601C12.2596 14.6601 11.7896 14.6701 11.4896 14.3901C11.1896 14.1001 11.1796 13.6301 11.4596 13.3301L12.5496 12.1801C13.6096 11.0701 13.6096 9.2601 12.5496 8.1601C11.5596 7.1201 9.81961 7.1201 8.81961 8.1601L6.62961 10.4601C5.56961 11.5701 5.56961 13.3801 6.62961 14.4801C7.05961 14.9401 7.63961 15.2201 8.24961 15.2801C8.65961 15.3201 8.9596 15.6901 8.9196 16.1001C8.8896 16.4801 8.5596 16.7701 8.1796 16.7701Z" fill="currentColor" /><path d="M13.3102 18.1601C12.1902 18.1601 11.1402 17.7101 10.3602 16.8801C8.76016 15.2001 8.76016 12.4701 10.3602 10.7902L11.4502 9.64016C11.7402 9.34016 12.2102 9.33013 12.5102 9.61013C12.8102 9.90013 12.8201 10.3702 12.5401 10.6702L11.4502 11.8201C10.3902 12.9301 10.3902 14.7401 11.4502 15.8401C12.4402 16.8801 14.1801 16.8901 15.1801 15.8401L17.3702 13.5402C18.4302 12.4302 18.4302 10.6201 17.3702 9.52013C16.9402 9.06013 16.3602 8.78014 15.7502 8.72014C15.3402 8.68014 15.0402 8.31014 15.0802 7.90014C15.1202 7.49014 15.4801 7.18015 15.9001 7.23015C16.8701 7.33015 17.7802 7.77013 18.4602 8.49013C20.0602 10.1701 20.0602 12.9001 18.4602 14.5801L16.2702 16.8801C15.4802 17.7101 14.4302 18.1601 13.3102 18.1601Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLinkSquare as IconComponentType).keywords = [
  "link",
  "square",
  "linkup",
  "connection",
  "nexus",
  "connexion",
  "connectedness",
  "connect",
  "tie-in",
  "unite",
  "associate",
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

export default IconLinkSquare as IconComponentType;