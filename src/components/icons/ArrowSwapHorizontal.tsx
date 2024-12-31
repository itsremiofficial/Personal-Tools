import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconArrowSwapHorizontal: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M20.5002 14.9902L15.4902 20.0102" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.5 14.9902H20.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M3.5 9.01023L8.51 3.99023" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.5 9.00977H3.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.81 2H16.18C19.83 2 22 4.17 22 7.81V16.18C22 19.82 19.83 21.99 16.19 21.99H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2Z" fill="currentColor" /><path d="M17.69 13.4798C17.61 13.2998 17.47 13.1498 17.28 13.0698C17.19 13.0298 17.09 13.0098 16.99 13.0098H7C6.59 13.0098 6.25 13.3498 6.25 13.7598C6.25 14.1698 6.59 14.5098 7 14.5098H15.19L13.52 16.1798C13.23 16.4698 13.23 16.9498 13.52 17.2398C13.67 17.3898 13.86 17.4598 14.05 17.4598C14.24 17.4598 14.43 17.3898 14.58 17.2398L17.53 14.2898C17.6 14.2198 17.65 14.1398 17.69 14.0498C17.77 13.8598 17.77 13.6598 17.69 13.4798Z" fill="currentColor" /><path d="M6.31 10.52C6.39 10.7 6.53 10.85 6.72 10.93C6.81 10.97 6.9 10.99 7 10.99H17C17.41 10.99 17.75 10.65 17.75 10.24C17.75 9.82998 17.41 9.48998 17 9.48998H8.81L10.48 7.81998C10.77 7.52998 10.77 7.04998 10.48 6.75998C10.19 6.46998 9.71 6.46998 9.42 6.75998L6.47 9.70998C6.4 9.77998 6.35 9.85998 6.31 9.94998C6.23 10.14 6.23 10.34 6.31 10.52Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrowSwapHorizontal as IconComponentType).keywords = [
  "arrow",
  "swap",
  "horizontal",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "barter",
  "quid pro quo",
  "trade",
  "swop",
  "switch",
  "exchange",
  "bartering",
  "substitute",
  "trade-in",
  "level",
  "flat",
  "crosswise",
  "swimming",
  "naiant",
  "cross-sectional",
  "transverse",
  "transversal",
  "landscape"
];

export default IconArrowSwapHorizontal as IconComponentType;