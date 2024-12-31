import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconArrowLeft1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 9.32993V14.6699C18 17.9899 15.65 19.3399 12.78 17.6899L11.5 16.9499C11.19 16.7699 11 16.4399 11 16.0799V7.91993C11 7.55993 11.19 7.22993 11.5 7.04993L12.78 6.30992C15.65 4.65992 18 6.00993 18 9.32993Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M10.0005 8.79006V15.2201C10.0005 15.6101 9.58055 15.8501 9.25055 15.6501L8.15055 15.0101C5.28055 13.3601 5.28055 10.6401 8.15055 8.99006L9.25055 8.35006C9.58055 8.16006 10.0005 8.40006 10.0005 8.79006Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrowLeft1 as IconComponentType).keywords = [
  "arrow",
  "left",
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
  "left-hand",
  "left-handed",
  "left over",
  "near",
  "leftover",
  "nigh",
  "remaining",
  "leftfield",
  "odd",
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

export default IconArrowLeft1 as IconComponentType;