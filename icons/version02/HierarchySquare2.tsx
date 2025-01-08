import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHierarchySquare2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M8.46973 10.2V14.3999" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M8.61993 9.89999C9.69689 9.89999 10.5699 9.02697 10.5699 7.95001C10.5699 6.87306 9.69689 6 8.61993 6C7.54298 6 6.66992 6.87306 6.66992 7.95001C6.66992 9.02697 7.54298 9.89999 8.61993 9.89999Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M8.46991 17.9999C9.46402 17.9999 10.2699 17.194 10.2699 16.1999C10.2699 15.2058 9.46402 14.3999 8.46991 14.3999C7.4758 14.3999 6.66992 15.2058 6.66992 16.1999C6.66992 17.194 7.4758 17.9999 8.46991 17.9999Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M16.8698 17.9999C17.8639 17.9999 18.6698 17.194 18.6698 16.1999C18.6698 15.2058 17.8639 14.3999 16.8698 14.3999C15.8757 14.3999 15.0698 15.2058 15.0698 16.1999C15.0698 17.194 15.8757 17.9999 16.8698 17.9999Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M8.5498 10.2C8.8198 11.25 9.77979 12.0299 10.9098 12.0199L12.9698 12.0099C14.5398 11.9999 15.8798 13.01 16.3698 14.42" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.48993C4.84993 2 2.67993 4.17 2.67993 7.81V16.18C2.67993 19.82 4.84993 21.99 8.48993 21.99H16.8599C20.4999 21.99 22.6699 19.82 22.6699 16.18V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path d="M17.0799 14.17C16.4699 12.43 14.8299 11.26 12.9899 11.26C12.9799 11.26 12.9799 11.26 12.9699 11.26L10.9099 11.27C10.9099 11.27 10.9099 11.27 10.8999 11.27C10.1399 11.27 9.47991 10.76 9.27991 10.03C10.1699 9.75 10.8199 8.92 10.8199 7.94C10.8199 6.73 9.82993 5.73999 8.61993 5.73999C7.40993 5.73999 6.41992 6.73 6.41992 7.94C6.41992 8.83 6.95991 9.6 7.71991 9.94V14.28C6.95991 14.58 6.41992 15.32 6.41992 16.18C6.41992 17.31 7.33991 18.23 8.46991 18.23C9.59991 18.23 10.5199 17.31 10.5199 16.18C10.5199 15.31 9.97991 14.58 9.21991 14.28V12.26C9.70991 12.57 10.2899 12.75 10.8999 12.75H10.9099L12.9699 12.74C14.1499 12.7 15.1999 13.46 15.6199 14.56C15.1299 14.94 14.8099 15.52 14.8099 16.18C14.8099 17.31 15.7299 18.23 16.8599 18.23C17.9899 18.23 18.9099 17.31 18.9099 16.18C18.9199 15.14 18.1099 14.28 17.0799 14.17Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM16.8699 18.25C15.7399 18.25 14.8199 17.33 14.8199 16.2C14.8199 15.54 15.1399 14.96 15.6299 14.58C15.2099 13.48 14.1599 12.72 12.9799 12.76L10.9199 12.77H10.9099C10.2999 12.77 9.71992 12.59 9.22992 12.28V14.3C9.98992 14.6 10.5299 15.34 10.5299 16.2C10.5299 17.33 9.60992 18.25 8.47992 18.25C7.34992 18.25 6.42992 17.33 6.42992 16.2C6.42992 15.33 6.96992 14.6 7.72992 14.3V9.95C6.96992 9.6 6.42992 8.84 6.42992 7.95C6.42992 6.74 7.41992 5.75 8.62992 5.75C9.83992 5.75 10.8299 6.74 10.8299 7.95C10.8299 8.93 10.1799 9.75 9.28992 10.04C9.48992 10.77 10.1499 11.28 10.9099 11.28C10.9099 11.28 10.9099 11.28 10.9199 11.28L12.9799 11.27C12.9899 11.27 12.9899 11.27 12.9999 11.27C14.8399 11.27 16.4899 12.44 17.0899 14.18C18.1199 14.29 18.9299 15.15 18.9299 16.21C18.9199 17.33 17.9999 18.25 16.8699 18.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHierarchySquare2 as IconComponentType).keywords = [
  "hierarchy",
  "square",
  "2",
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

export default IconHierarchySquare2 as IconComponentType;