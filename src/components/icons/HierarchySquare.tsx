import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHierarchySquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M16.4508 14.4V8.5C16.4508 7.95 16.0008 7.5 15.4508 7.5H12.5508" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.05 6L12.25 7.5L14.05 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.55078 10.2002V14.4002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.70001 9.89999C8.77697 9.89999 9.65002 9.02697 9.65002 7.95001C9.65002 6.87306 8.77697 6 7.70001 6C6.62306 6 5.75 6.87306 5.75 7.95001C5.75 9.02697 6.62306 9.89999 7.70001 9.89999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.54999 17.9999C8.5441 17.9999 9.34998 17.194 9.34998 16.1999C9.34998 15.2058 8.5441 14.3999 7.54999 14.3999C6.55588 14.3999 5.75 15.2058 5.75 16.1999C5.75 17.194 6.55588 17.9999 7.54999 17.9999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.4504 17.9999C17.4445 17.9999 18.2504 17.194 18.2504 16.1999C18.2504 15.2058 17.4445 14.3999 16.4504 14.3999C15.4563 14.3999 14.6504 15.2058 14.6504 16.1999C14.6504 17.194 15.4563 17.9999 16.4504 17.9999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M8.54962 14.55V10.26C9.38962 9.95001 9.99963 9.15001 9.99963 8.20001C9.99963 6.99001 9.00962 6 7.79962 6C6.58962 6 5.59961 6.99001 5.59961 8.20001C5.59961 9.15001 6.20962 9.95001 7.04962 10.26V14.55C6.28962 14.85 5.74963 15.59 5.74963 16.45C5.74963 17.58 6.66962 18.5 7.79962 18.5C8.92962 18.5 9.84961 17.58 9.84961 16.45C9.84961 15.59 9.30962 14.85 8.54962 14.55Z" fill="currentColor" /><path d="M17.4988 14.5502V8.75017C17.4988 7.79017 16.7088 7.00017 15.7488 7.00017H14.6188L14.8289 6.83016C15.1489 6.56016 15.1888 6.09016 14.9288 5.77016C14.6588 5.45016 14.1888 5.41019 13.8688 5.67019L12.0688 7.17019C11.8988 7.31019 11.7988 7.52017 11.7988 7.75017C11.7988 7.98017 11.8988 8.18016 12.0688 8.33016L13.8688 9.83016C14.0088 9.95016 14.1788 10.0002 14.3488 10.0002C14.5588 10.0002 14.7788 9.91018 14.9288 9.73018C15.1988 9.41018 15.1489 8.94019 14.8289 8.67019L14.6188 8.50017H15.7488C15.8888 8.50017 15.9988 8.61017 15.9988 8.75017V14.5502C15.2388 14.8502 14.6989 15.5902 14.6989 16.4502C14.6989 17.5802 15.6188 18.5002 16.7488 18.5002C17.8788 18.5002 18.7988 17.5802 18.7988 16.4502C18.7988 15.5902 18.2588 14.8502 17.4988 14.5502Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHierarchySquare as IconComponentType).keywords = [
  "hierarchy",
  "square",
  "power structure",
  "pecking order",
  "hierarchical",
  "seniority",
  "class",
  "leadership",
  "high-ranking",
  "affiliated",
  "authority",
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

export default IconHierarchySquare as IconComponentType;