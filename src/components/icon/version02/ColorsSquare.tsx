import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconColorsSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M13.8699 14.3999C13.8699 15.4599 13.4099 16.4199 12.6699 17.0799C12.0299 17.6599 11.1899 17.9999 10.2699 17.9999C8.2799 17.9999 6.66992 16.3899 6.66992 14.3999C6.66992 12.7399 7.79995 11.3399 9.31995 10.9299C9.72995 11.9699 10.6199 12.7799 11.7199 13.0799C12.0199 13.1599 12.3399 13.2099 12.6699 13.2099C12.9999 13.2099 13.3199 13.1699 13.6199 13.0799C13.7799 13.4799 13.8699 13.9299 13.8699 14.3999Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M16.2703 9.6C16.2703 10.07 16.1803 10.52 16.0203 10.93C15.6103 11.97 14.7203 12.78 13.6203 13.08C13.3203 13.16 13.0003 13.21 12.6703 13.21C12.3403 13.21 12.0203 13.17 11.7203 13.08C10.6203 12.78 9.73031 11.98 9.32031 10.93C9.16031 10.52 9.07031 10.07 9.07031 9.6C9.07031 7.61 10.6803 6 12.6703 6C14.6603 6 16.2703 7.61 16.2703 9.6Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M18.6699 14.3999C18.6699 16.3899 17.0599 17.9999 15.0699 17.9999C14.1499 17.9999 13.3099 17.6499 12.6699 17.0799C13.4099 16.4299 13.8699 15.4699 13.8699 14.3999C13.8699 13.9299 13.7799 13.4799 13.6199 13.0699C14.7199 12.7699 15.6099 11.9699 16.0199 10.9199C17.5399 11.3399 18.6699 12.7399 18.6699 14.3999Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.48993C4.83993 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.82 4.83992 21.99 8.47992 21.99H16.8499C20.4899 21.99 22.6599 19.82 22.6599 16.18V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M13.8699 14.3999C13.8699 15.4599 13.4099 16.4199 12.6699 17.0799C12.0299 17.6599 11.1899 17.9999 10.2699 17.9999C8.2799 17.9999 6.66992 16.3899 6.66992 14.3999C6.66992 12.7399 7.79995 11.3399 9.31995 10.9299C9.72995 11.9699 10.6199 12.7799 11.7199 13.0799C12.0199 13.1599 12.3399 13.2099 12.6699 13.2099C12.9999 13.2099 13.3199 13.1699 13.6199 13.0799C13.7799 13.4799 13.8699 13.9299 13.8699 14.3999Z" fill="currentColor" /><path d="M16.2703 9.6C16.2703 10.07 16.1803 10.52 16.0203 10.93C15.6103 11.97 14.7203 12.78 13.6203 13.08C13.3203 13.16 13.0003 13.21 12.6703 13.21C12.3403 13.21 12.0203 13.17 11.7203 13.08C10.6203 12.78 9.73031 11.98 9.32031 10.93C9.16031 10.52 9.07031 10.07 9.07031 9.6C9.07031 7.61 10.6803 6 12.6703 6C14.6603 6 16.2703 7.61 16.2703 9.6Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.6699 14.3999C18.6699 16.3899 17.0599 17.9999 15.0699 17.9999C14.1499 17.9999 13.3099 17.6499 12.6699 17.0799C13.4099 16.4299 13.8699 15.4699 13.8699 14.3999C13.8699 13.9299 13.7799 13.4799 13.6199 13.0699C14.7199 12.7699 15.6099 11.9699 16.0199 10.9199C17.5399 11.3399 18.6699 12.7399 18.6699 14.3999Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM12.6699 6C14.6599 6 16.2699 7.61 16.2699 9.6C16.2699 10.07 16.1799 10.52 16.0199 10.93C15.6099 11.97 14.7199 12.78 13.6199 13.08C13.3199 13.16 12.9999 13.21 12.6699 13.21C12.3399 13.21 12.0199 13.17 11.7199 13.08C10.6199 12.78 9.72992 11.98 9.31992 10.93C9.15992 10.52 9.06992 10.07 9.06992 9.6C9.06992 7.61 10.6799 6 12.6699 6ZM10.2699 18C8.27992 18 6.66992 16.39 6.66992 14.4C6.66992 13.2675 7.19853 12.2563 8.01425 11.5961C8.25097 11.4045 8.58908 11.5252 8.73736 11.7912C9.32213 12.8402 10.3155 13.6195 11.4799 13.93C11.8599 14.04 12.2499 14.09 12.6699 14.09C12.9189 14.09 13.1567 14.0716 13.388 14.0347C13.6253 13.9969 13.8699 14.1497 13.8699 14.39C13.8699 15.45 13.4099 16.41 12.6699 17.07C12.0299 17.65 11.1899 18 10.2699 18ZM15.0699 18C14.7214 18 14.3799 17.9512 14.0577 17.8576C13.7313 17.7628 13.6715 17.3559 13.8758 17.0843C14.4509 16.3202 14.7699 15.3764 14.7699 14.4C14.7699 14.2 14.7499 13.99 14.7199 13.8C14.702 13.6868 14.7597 13.5756 14.8598 13.5197C15.5839 13.1155 16.1904 12.5224 16.5942 11.7942C16.7422 11.5272 17.0806 11.4042 17.3186 11.5953C18.1409 12.2555 18.6699 13.267 18.6699 14.4C18.6699 16.39 17.0599 18 15.0699 18Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconColorsSquare as IconComponentType).keywords = [
  "colors",
  "square",
  "colours",
  "alwan",
  "colorants",
  "colorful",
  "colour",
  "colourants",
  "coloured",
  "colourings",
  "connotations",
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

export default IconColorsSquare as IconComponentType;