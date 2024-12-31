import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconFilterSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M8.16 6.6499H15.83C16.47 6.6499 16.99 7.1699 16.99 7.8099V9.0899C16.99 9.5599 16.7 10.1399 16.41 10.4299L13.91 12.6399C13.56 12.9299 13.33 13.5099 13.33 13.9799V16.4799C13.33 16.8299 13.1 17.2899 12.81 17.4699L12 17.9799C11.24 18.4499 10.2 17.9199 10.2 16.9899V13.9099C10.2 13.4999 9.97 12.9799 9.73 12.6899L7.52 10.3599C7.23 10.0799 7 9.5499 7 9.1999V7.8699C7 7.1699 7.52 6.6499 8.16 6.6499Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C7.61 22 7.41 21.99 7.22 21.98C5.99 21.9 4.95 21.55 4.13 20.95C3.71 20.66 3.34 20.29 3.05 19.87C2.36 18.92 2 17.68 2 16.19V7.81C2 4.37 3.94 2.24 7.22 2.03C7.41 2.01 7.61 2 7.81 2H16.19C17.68 2 18.92 2.36 19.87 3.05C20.29 3.34 20.66 3.71 20.95 4.13C21.64 5.08 22 6.32 22 7.81Z" fill="currentColor" /><path d="M8.16 6.6499H15.83C16.47 6.6499 16.99 7.1699 16.99 7.8099V9.0899C16.99 9.5599 16.7 10.1399 16.41 10.4299L13.91 12.6399C13.56 12.9299 13.33 13.5099 13.33 13.9799V16.4799C13.33 16.8299 13.1 17.2899 12.81 17.4699L12 17.9799C11.24 18.4499 10.2 17.9199 10.2 16.9899V13.9099C10.2 13.4999 9.97 12.9799 9.73 12.6899L7.52 10.3599C7.23 10.0799 7 9.5499 7 9.1999V7.8699C7 7.1699 7.52 6.6499 8.16 6.6499Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFilterSquare as IconComponentType).keywords = [
  "filter",
  "square",
  "filtrate",
  "filter out",
  "percolate",
  "permeate",
  "trickle",
  "sink in",
  "strain",
  "dribble",
  "separate out",
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

export default IconFilterSquare as IconComponentType;