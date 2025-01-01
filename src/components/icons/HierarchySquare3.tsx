import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHierarchySquare3: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M7.80078 13.8001V9.6001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.95001 18.0001C9.02697 18.0001 9.90002 17.127 9.90002 16.0501C9.90002 14.9731 9.02697 14.1001 7.95001 14.1001C6.87306 14.1001 6 14.9731 6 16.0501C6 17.127 6.87306 18.0001 7.95001 18.0001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.79999 9.60001C8.7941 9.60001 9.59998 8.7941 9.59998 7.79999C9.59998 6.80588 8.7941 6 7.79999 6C6.80588 6 6 6.80588 6 7.79999C6 8.7941 6.80588 9.60001 7.79999 9.60001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.2004 9.60001C17.1945 9.60001 18.0004 8.7941 18.0004 7.79999C18.0004 6.80588 17.1945 6 16.2004 6C15.2063 6 14.4004 6.80588 14.4004 7.79999C14.4004 8.7941 15.2063 9.60001 16.2004 9.60001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.87891 13.8001C8.14891 12.7501 9.10889 11.9701 10.2389 11.9801L12.2989 11.9901C13.8689 12.0001 15.2089 10.9901 15.6989 9.58008" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 21.9998H7.81976C4.17976 21.9998 2.00977 19.8298 2.00977 16.1898V7.81976C2.00977 4.17976 4.17976 2.00977 7.81976 2.00977H16.1898C19.8298 2.00977 21.9998 4.17976 21.9998 7.81976V16.1898C21.9998 19.8298 19.8298 21.9998 16.1898 21.9998Z" fill="currentColor" /><path d="M16.41 9.83002C15.8 11.57 14.16 12.74 12.32 12.74C12.31 12.74 12.31 12.74 12.3 12.74L10.24 12.73C10.24 12.73 10.24 12.73 10.23 12.73C9.46998 12.73 8.80999 13.24 8.60999 13.97C9.49999 14.25 10.15 15.08 10.15 16.06C10.15 17.27 9.16001 18.26 7.95001 18.26C6.74001 18.26 5.75 17.27 5.75 16.06C5.75 15.17 6.28999 14.4 7.04999 14.06V9.72003C6.28999 9.42003 5.75 8.68004 5.75 7.82004C5.75 6.69004 6.66999 5.77002 7.79999 5.77002C8.92999 5.77002 9.84998 6.69004 9.84998 7.82004C9.84998 8.69004 9.30999 9.42003 8.54999 9.72003V11.74C9.03999 11.43 9.61998 11.25 10.23 11.25H10.24L12.3 11.26C13.48 11.3 14.53 10.54 14.95 9.44003C14.46 9.06003 14.14 8.48004 14.14 7.82004C14.14 6.69004 15.06 5.77002 16.19 5.77002C17.32 5.77002 18.24 6.69004 18.24 7.82004C18.25 8.86004 17.44 9.72002 16.41 9.83002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHierarchySquare3 as IconComponentType).keywords = [
  "hierarchy",
  "square",
  "3",
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
  "honest",
  "omega",
  "wash out",
  "cut up",
  "pull out",
  "pull up",
  "pull over",
  "pull in",
  "work out",
  "ride down"
];

export default IconHierarchySquare3 as IconComponentType;