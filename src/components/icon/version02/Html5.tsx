import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHtml5: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.79001 2H20.56C21.16 2 21.62 2.52 21.55 3.11L19.75 19.33C19.71 19.73 19.42 20.07 19.03 20.18L12.95 21.92C12.77 21.97 12.58 21.97 12.4 21.92L6.32004 20.18C5.93004 20.07 5.65001 19.73 5.60001 19.33L3.80002 3.11C3.73002 2.52 4.19001 2 4.79001 2Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.9199 6.75H8.41992L8.91992 11.25H16.4199L15.9199 16.25L12.4199 17.25L8.91992 16.25V14.25" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M4.79001 2H20.56C21.16 2 21.62 2.52 21.55 3.11L19.75 19.33C19.71 19.73 19.42 20.07 19.03 20.18L12.95 21.92C12.77 21.97 12.58 21.97 12.4 21.92L6.32004 20.18C5.93004 20.07 5.65001 19.73 5.60001 19.33L3.80002 3.11C3.73002 2.52 4.19001 2 4.79001 2Z" fill="currentColor" /><path d="M12.4197 18C12.3497 18 12.2797 17.99 12.2097 17.97L8.70972 16.97C8.38972 16.88 8.16975 16.58 8.16975 16.25V14.25C8.16975 13.84 8.50975 13.5 8.91975 13.5C9.32975 13.5 9.66975 13.84 9.66975 14.25V15.68L12.4197 16.47L15.2197 15.67L15.5897 12H8.91975C8.53975 12 8.21975 11.71 8.16975 11.33L7.66975 6.83C7.64975 6.62 7.70975 6.41 7.85975 6.25C7.99975 6.09 8.20975 6 8.41975 6H16.9197C17.3297 6 17.6697 6.34 17.6697 6.75C17.6697 7.16 17.3297 7.5 16.9197 7.5H9.25977L9.58973 10.5H16.4197C16.6297 10.5 16.8297 10.59 16.9797 10.75C17.1197 10.91 17.1897 11.12 17.1697 11.33L16.6697 16.33C16.6397 16.64 16.4298 16.89 16.1298 16.98L12.6298 17.98C12.5598 17.99 12.4897 18 12.4197 18Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5498 2H4.77976C4.17976 2 3.71977 2.52 3.78977 3.11L5.58975 19.33C5.62975 19.73 5.91979 20.07 6.30979 20.18L12.3897 21.92C12.5697 21.97 12.7598 21.97 12.9398 21.92L19.0197 20.18C19.4097 20.07 19.6898 19.73 19.7398 19.33L21.5398 3.11C21.6098 2.52 21.1498 2 20.5498 2ZM16.9198 7.5H9.2598L9.58975 10.5H16.4198C16.6298 10.5 16.8298 10.59 16.9798 10.75C17.1198 10.91 17.1898 11.12 17.1698 11.33L16.6698 16.33C16.6398 16.64 16.4298 16.89 16.1298 16.98L12.6298 17.98C12.5598 18 12.4898 18.01 12.4198 18.01C12.3498 18.01 12.2797 18 12.2097 17.98L8.70975 16.98C8.38975 16.89 8.16977 16.59 8.16977 16.26V14.26C8.16977 13.85 8.50977 13.51 8.91977 13.51C9.32977 13.51 9.66977 13.85 9.66977 14.26V15.69L12.4198 16.48L15.2198 15.68L15.5898 12.01H8.91977C8.53977 12.01 8.21977 11.72 8.16977 11.34L7.66977 6.84C7.64977 6.63 7.70977 6.41999 7.85977 6.25999C7.99977 6.09999 8.20977 6.00999 8.41977 6.00999H16.9198C17.3298 6.00999 17.6698 6.34999 17.6698 6.75999C17.6698 7.16999 17.3298 7.5 16.9198 7.5Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHtml5 as IconComponentType).keywords = [
  "html",
  "5",
  "hypertext markup language",
  "xhtml",
  "javascript",
  "javascripts",
  "imagemaps",
  "wysiwyg",
  "dreamweaver",
  "jscript",
  "textarea",
  "wash out",
  "cut up",
  "pull out",
  "pull up",
  "pull over",
  "pull in",
  "work out",
  "ride down",
  "rush hour"
];

export default IconHtml5 as IconComponentType;