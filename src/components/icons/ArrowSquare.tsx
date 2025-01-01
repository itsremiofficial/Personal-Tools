import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconArrowSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M12.1406 15.0701V13.11C12.1406 10.59 14.1806 8.54004 16.7106 8.54004H18.6706" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.62109 8.5498H7.58112C10.1011 8.5498 12.1511 10.5898 12.1511 13.1198V13.7698V17.2498" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.13983 6.75L5.33984 8.55L7.13983 10.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.8594 6.75L18.6594 8.55L16.8594 10.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M19.3495 8.2702C19.3095 8.1802 19.2595 8.1002 19.1895 8.0302L17.3896 6.2302C17.0996 5.9402 16.6196 5.9402 16.3296 6.2302C16.0396 6.5202 16.0396 7.00019 16.3296 7.29019L16.8495 7.8102H16.6996C14.7496 7.8102 13.0595 8.8802 12.1295 10.4502C11.2095 8.8802 9.51955 7.8102 7.56955 7.8102H7.13956L7.65952 7.29019C7.94952 7.00019 7.94952 6.5202 7.65952 6.2302C7.36952 5.9402 6.88952 5.9402 6.59952 6.2302L4.79953 8.0302C4.50953 8.3202 4.50953 8.8002 4.79953 9.0902L6.59952 10.8902C6.74952 11.0402 6.93955 11.1102 7.12955 11.1102C7.31955 11.1102 7.50952 11.0402 7.65952 10.8902C7.94952 10.6002 7.94952 10.1202 7.65952 9.8302L7.13956 9.3102H7.55954C9.65954 9.3102 11.3695 11.0202 11.3695 13.1202V15.0802V17.2502C11.3695 17.6602 11.7095 18.0002 12.1195 18.0002C12.5295 18.0002 12.8695 17.6602 12.8695 17.2502V15.0802V13.1202C12.8695 11.0202 14.5795 9.3102 16.6895 9.3102H16.8396L16.3196 9.8302C16.0296 10.1202 16.0296 10.6002 16.3196 10.8902C16.4696 11.0402 16.6595 11.1102 16.8495 11.1102C17.0395 11.1102 17.2295 11.0402 17.3795 10.8902L19.1795 9.0902C19.2495 9.0202 19.2996 8.94021 19.3396 8.85021C19.4296 8.66021 19.4295 8.4502 19.3495 8.2702Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrowSquare as IconComponentType).keywords = [
  "arrow",
  "square",
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
  "honest"
];

export default IconArrowSquare as IconComponentType;