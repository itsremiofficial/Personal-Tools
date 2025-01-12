import { FC } from 'react';

const IconHierarchySquare3: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M8.46973 13.8001V9.6001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M8.61993 18.0001C9.69689 18.0001 10.5699 17.127 10.5699 16.0501C10.5699 14.9731 9.69689 14.1001 8.61993 14.1001C7.54298 14.1001 6.66992 14.9731 6.66992 16.0501C6.66992 17.127 7.54298 18.0001 8.61993 18.0001Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M8.46991 9.60001C9.46402 9.60001 10.2699 8.7941 10.2699 7.79999C10.2699 6.80588 9.46402 6 8.46991 6C7.4758 6 6.66992 6.80588 6.66992 7.79999C6.66992 8.7941 7.4758 9.60001 8.46991 9.60001Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M16.8698 9.60001C17.8639 9.60001 18.6698 8.7941 18.6698 7.79999C18.6698 6.80588 17.8639 6 16.8698 6C15.8757 6 15.0698 6.80588 15.0698 7.79999C15.0698 8.7941 15.8757 9.60001 16.8698 9.60001Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M8.5498 13.8001C8.8198 12.7501 9.77979 11.9701 10.9098 11.9801L12.9698 11.9901C14.5398 12.0001 15.8798 10.9901 16.3698 9.58008" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9.66992 2H15.6699C20.6699 2 22.6699 4 22.6699 9V15C22.6699 20 20.6699 22 15.6699 22H9.66992C4.66992 22 2.66992 20 2.66992 15V9C2.66992 4 4.66992 2 9.66992 2Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 22H8.48993C4.84993 22 2.67993 19.83 2.67993 16.19V7.82001C2.67993 4.18001 4.84993 2.01001 8.48993 2.01001H16.8599C20.4999 2.01001 22.6699 4.18001 22.6699 7.82001V16.19C22.6699 19.83 20.4999 22 16.8599 22Z" fill="currentColor" /><path d="M17.0799 9.83002C16.4699 11.57 14.8299 12.74 12.9899 12.74C12.9799 12.74 12.9799 12.74 12.9699 12.74L10.9099 12.73C10.9099 12.73 10.9099 12.73 10.8999 12.73C10.1399 12.73 9.47991 13.24 9.27991 13.97C10.1699 14.25 10.8199 15.08 10.8199 16.06C10.8199 17.27 9.82993 18.26 8.61993 18.26C7.40993 18.26 6.41992 17.27 6.41992 16.06C6.41992 15.17 6.95991 14.4 7.71991 14.06V9.72003C6.95991 9.42003 6.41992 8.68004 6.41992 7.82004C6.41992 6.69004 7.33991 5.77002 8.46991 5.77002C9.59991 5.77002 10.5199 6.69004 10.5199 7.82004C10.5199 8.69004 9.97991 9.42003 9.21991 9.72003V11.74C9.70991 11.43 10.2899 11.25 10.8999 11.25H10.9099L12.9699 11.26C14.1499 11.3 15.1999 10.54 15.6199 9.44003C15.1299 9.06003 14.8099 8.48004 14.8099 7.82004C14.8099 6.69004 15.7299 5.77002 16.8599 5.77002C17.9899 5.77002 18.9099 6.69004 18.9099 7.82004C18.9199 8.86004 18.1099 9.72002 17.0799 9.83002Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM17.0799 9.83C16.4699 11.57 14.8299 12.74 12.9899 12.74C12.9799 12.74 12.9799 12.74 12.9699 12.74L10.9099 12.73C10.9099 12.73 10.9099 12.73 10.8999 12.73C10.1399 12.73 9.47992 13.24 9.27992 13.97C10.1699 14.25 10.8199 15.08 10.8199 16.06C10.8199 17.27 9.82992 18.26 8.61992 18.26C7.40992 18.26 6.41992 17.27 6.41992 16.06C6.41992 15.17 6.95992 14.4 7.71992 14.06V9.7C6.95992 9.4 6.41992 8.66 6.41992 7.8C6.41992 6.67 7.33992 5.75 8.46992 5.75C9.59992 5.75 10.5199 6.67 10.5199 7.8C10.5199 8.67 9.97992 9.4 9.21992 9.7V11.72C9.70992 11.41 10.2899 11.23 10.8999 11.23H10.9099L12.9699 11.24C14.1499 11.28 15.1999 10.52 15.6199 9.42C15.1299 9.04 14.8099 8.46 14.8099 7.8C14.8099 6.67 15.7299 5.75 16.8599 5.75C17.9899 5.75 18.9099 6.67 18.9099 7.8C18.9199 8.86 18.1099 9.72 17.0799 9.83Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHierarchySquare3 as IconComponent).keywords = [
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

export default IconHierarchySquare3 as IconComponent;