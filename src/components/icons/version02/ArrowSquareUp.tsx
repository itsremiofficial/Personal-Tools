import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconArrowSquareUp: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.14014 13.4599L12.6701 9.93994L16.2001 13.4599" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path d="M16.2001 14.21C16.0101 14.21 15.8201 14.14 15.6701 13.99L12.6701 10.99L9.67008 13.99C9.38008 14.28 8.90008 14.28 8.61008 13.99C8.32008 13.7 8.32008 13.22 8.61008 12.93L12.1401 9.4C12.4301 9.11 12.9101 9.11 13.2001 9.4L16.7301 12.93C17.0201 13.22 17.0201 13.7 16.7301 13.99C16.5801 14.14 16.3901 14.21 16.2001 14.21Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM16.7299 14C16.5799 14.15 16.3899 14.22 16.1999 14.22C16.0099 14.22 15.8199 14.14 15.6699 14L12.6699 11L9.66992 14C9.37992 14.29 8.89992 14.29 8.60992 14C8.31992 13.71 8.31992 13.23 8.60992 12.94L12.1399 9.41C12.4299 9.12 12.9099 9.12 13.1999 9.41L16.7299 12.94C17.0199 13.23 17.0199 13.7 16.7299 14Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrowSquareUp as IconComponentType).keywords = [
  "arrow",
  "square",
  "up",
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
  "upbound",
  "upwardly",
  "ascending",
  "upward",
  "upwards",
  "rising",
  "astir",
  "ahead",
  "awake"
];

export default IconArrowSquareUp as IconComponentType;