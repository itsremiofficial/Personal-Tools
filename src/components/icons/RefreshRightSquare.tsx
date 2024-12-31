import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRefreshRightSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M13.67 7.51025C13.17 7.36025 12.62 7.26025 12 7.26025C9.24 7.26025 7 9.50025 7 12.2603C7 15.0203 9.24 17.2603 12 17.2603C14.76 17.2603 17 15.0203 17 12.2603C17 11.2303 16.69 10.2803 16.16 9.48026" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.3807 7.65024L12.7207 5.74023" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.3795 7.65039L12.4395 9.07039" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.82001C4.17001 2 2 4.17 2 7.81V16.18C2 19.82 4.17 21.99 7.81 21.99H16.18C19.82 21.99 21.99 19.82 21.99 16.18V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M16.78 9.07011C16.55 8.72011 16.08 8.63011 15.74 8.86011C15.4 9.09011 15.3 9.56011 15.53 9.90011C16 10.6001 16.24 11.4201 16.24 12.2601C16.24 14.6001 14.33 16.5101 11.99 16.5101C9.65001 16.5101 7.74001 14.6001 7.74001 12.2601C7.74001 9.92011 9.65001 8.01011 11.99 8.01011C12.18 8.01011 12.36 8.03011 12.55 8.05011L12 8.46011C11.67 8.70011 11.59 9.17011 11.84 9.51011C11.99 9.71011 12.22 9.82011 12.45 9.82011C12.6 9.82011 12.76 9.77011 12.89 9.68011L14.83 8.26011C14.84 8.25011 14.84 8.24011 14.85 8.24011C14.86 8.23011 14.87 8.23011 14.88 8.22011C14.91 8.19011 14.93 8.16011 14.95 8.13011C14.98 8.09011 15.02 8.06011 15.04 8.01011C15.06 7.97011 15.07 7.92011 15.09 7.88011C15.1 7.83011 15.12 7.79011 15.13 7.74011C15.14 7.69011 15.13 7.65011 15.12 7.60011C15.12 7.55011 15.12 7.51011 15.1 7.46011C15.09 7.41011 15.06 7.37011 15.04 7.32011C15.02 7.29011 15.02 7.25011 14.99 7.21011C14.98 7.20011 14.97 7.20011 14.97 7.19011C14.96 7.18011 14.96 7.17011 14.95 7.16011L13.28 5.25011C13.01 4.94011 12.53 4.90011 12.22 5.18011C11.91 5.45011 11.88 5.93011 12.15 6.24011L12.43 6.56011C12.29 6.55011 12.15 6.53011 12 6.53011C8.83 6.53011 6.25 9.11011 6.25 12.2801C6.25 15.4501 8.83 18.0301 12 18.0301C15.17 18.0301 17.75 15.4501 17.75 12.2801C17.75 11.1201 17.42 10.0201 16.78 9.07011Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRefreshRightSquare as IconComponentType).keywords = [
  "refresh",
  "right",
  "square",
  "refreshen",
  "freshen",
  "review",
  "freshen up",
  "brush up",
  "refresher",
  "refreshment",
  "rejuvenate",
  "revive",
  "straight",
  "precise",
  "right on",
  "accurate",
  "decently",
  "satisfactory",
  "exact",
  "powerful",
  "opportune",
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

export default IconRefreshRightSquare as IconComponentType;