import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconArrowRight1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6 9.32993V14.6699C6 17.9899 8.35 19.3399 11.22 17.6899L12.5 16.9499C12.81 16.7699 13 16.4399 13 16.0799V7.91993C13 7.55993 12.81 7.22993 12.5 7.04993L11.22 6.30992C8.35 4.65992 6 6.00993 6 9.32993Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14 8.79006V15.2201C14 15.6101 14.42 15.8501 14.75 15.6501L15.85 15.0101C18.72 13.3601 18.72 10.6401 15.85 8.99006L14.75 8.35006C14.42 8.16006 14 8.40006 14 8.79006Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrowRight1 as IconComponentType).keywords = [
  "arrow",
  "right",
  "1",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "straight",
  "precise",
  "right on",
  "accurate",
  "decently",
  "satisfactory",
  "exact",
  "powerful",
  "opportune",
  "wash out",
  "cut up",
  "pull out",
  "pull in",
  "pull up",
  "pull over",
  "work out",
  "ride down",
  "rush hour"
];

export default IconArrowRight1 as IconComponentType;