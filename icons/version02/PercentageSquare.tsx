import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPercentageSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.68164 2H15.6816C20.6816 2 22.6816 4 22.6816 9V15C22.6816 20 20.6816 22 15.6816 22H9.68164C4.68164 22 2.68164 20 2.68164 15V9C2.68164 4 4.68164 2 9.68164 2Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.00195 15.27L15.5419 8.72998" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.41165 10.37C10.091 10.37 10.6416 9.81936 10.6416 9.14005C10.6416 8.46073 10.091 7.91003 9.41165 7.91003C8.73234 7.91003 8.18164 8.46073 8.18164 9.14005C8.18164 9.81936 8.73234 10.37 9.41165 10.37Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.9517 16.09C16.631 16.09 17.1817 15.5393 17.1817 14.86C17.1817 14.1807 16.631 13.63 15.9517 13.63C15.2723 13.63 14.7217 14.1807 14.7217 14.86C14.7217 15.5393 15.2723 16.09 15.9517 16.09Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8714 2H8.5014C4.8614 2 2.69141 4.17 2.69141 7.81V16.18C2.69141 19.82 4.8614 21.99 8.5014 21.99H16.8714C20.5114 21.99 22.6814 19.82 22.6814 16.18V7.81C22.6814 4.17 20.5114 2 16.8714 2Z" fill="currentColor" /><path d="M9.50141 16.02C9.31141 16.02 9.12141 15.95 8.97141 15.8C8.68141 15.51 8.68141 15.03 8.97141 14.74L15.5214 8.19003C15.8114 7.90003 16.2914 7.90003 16.5814 8.19003C16.8714 8.48003 16.8714 8.96003 16.5814 9.25003L10.0314 15.8C9.8814 15.95 9.6914 16.02 9.50141 16.02Z" fill="currentColor" /><path d="M9.91165 7.66003C9.10165 7.66003 8.43164 8.32005 8.43164 9.14005C8.43164 9.95005 9.09165 10.62 9.91165 10.62C10.7217 10.62 11.3916 9.96005 11.3916 9.14005C11.3816 8.32005 10.7217 7.66003 9.91165 7.66003Z" fill="currentColor" /><path d="M16.4517 13.39C15.6417 13.39 14.9717 14.05 14.9717 14.87C14.9717 15.68 15.6317 16.35 16.4517 16.35C17.2617 16.35 17.9317 15.69 17.9317 14.87C17.9317 14.05 17.2717 13.39 16.4517 13.39Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8736 2H8.49359C4.85359 2 2.68359 4.17 2.68359 7.81V16.18C2.68359 19.83 4.85359 22 8.49359 22H16.8636C20.5036 22 22.6736 19.83 22.6736 16.19V7.81C22.6836 4.17 20.5136 2 16.8736 2ZM8.43359 9.14C8.43359 8.33 9.09359 7.66 9.91359 7.66C10.7236 7.66 11.3936 8.32 11.3936 9.14C11.3936 9.95 10.7336 10.62 9.91359 10.62C9.09359 10.61 8.43359 9.95 8.43359 9.14ZM9.50359 16.02C9.31359 16.02 9.12359 15.95 8.97359 15.8C8.68359 15.51 8.68359 15.04 8.97359 14.74L15.5236 8.19C15.8136 7.9 16.2936 7.9 16.5836 8.19C16.8736 8.48 16.8736 8.96 16.5836 9.25L10.0336 15.8C9.88359 15.95 9.69359 16.02 9.50359 16.02ZM16.4536 16.34C15.6436 16.34 14.9736 15.68 14.9736 14.86C14.9736 14.05 15.6336 13.38 16.4536 13.38C17.2636 13.38 17.9336 14.04 17.9336 14.86C17.9336 15.68 17.2736 16.34 16.4536 16.34Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPercentageSquare as IconComponentType).keywords = [
  "percentage",
  "square",
  "per centum",
  "percent",
  "pct",
  "part",
  "portion",
  "share",
  "centenary",
  "centennial",
  "percentile",
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

export default IconPercentageSquare as IconComponentType;