import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBuildings: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 22L2 22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M21 22V6C21 4.11438 21 3.17157 20.4142 2.58579C19.8284 2 18.8856 2 17 2H15C13.1144 2 12.1716 2 11.5858 2.58579C11.1142 3.05733 11.0223 3.76022 11.0043 5" stroke="currentColor" strokeWidth={width} /><path d="M15 22V9C15 7.11438 15 6.17157 14.4142 5.58579C13.8284 5 12.8856 5 11 5H7C5.11438 5 4.17157 5 3.58579 5.58579C3 6.17157 3 7.11438 3 9V22" stroke="currentColor" strokeWidth={width} /><path d="M9 22V19" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M6 8H12" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M6 11H12" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M6 14H12" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7 5H11C12.8856 5 13.8284 5 14.4142 5.58579C15 6.17157 15 7.11438 15 9V21.25H16.5H21H22C22.4142 21.25 22.75 21.5858 22.75 22C22.75 22.4142 22.4142 22.75 22 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22C1.25 21.5858 1.58579 21.25 2 21.25H3V9C3 7.11438 3 6.17157 3.58579 5.58579C4.17157 5 5.11438 5 7 5ZM5.25 8C5.25 7.58579 5.58579 7.25 6 7.25H12C12.4142 7.25 12.75 7.58579 12.75 8C12.75 8.41421 12.4142 8.75 12 8.75H6C5.58579 8.75 5.25 8.41421 5.25 8ZM5.25 11C5.25 10.5858 5.58579 10.25 6 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11C12.75 11.4142 12.4142 11.75 12 11.75H6C5.58579 11.75 5.25 11.4142 5.25 11ZM5.25 14C5.25 13.5858 5.58579 13.25 6 13.25H12C12.4142 13.25 12.75 13.5858 12.75 14C12.75 14.4142 12.4142 14.75 12 14.75H6C5.58579 14.75 5.25 14.4142 5.25 14ZM9 18.25C9.41421 18.25 9.75 18.5858 9.75 19V21.25H8.25V19C8.25 18.5858 8.58579 18.25 9 18.25Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M15 2H17C18.8856 2 19.8284 2 20.4142 2.58579C21 3.17157 21 4.11438 21 6V21.25H15V9C15 7.11438 15 6.17157 14.4142 5.58579C13.8416 5.01319 12.9279 5.0003 11.126 5.00001V3.49999C11.2103 3.11275 11.351 2.82059 11.5858 2.58579C12.1715 2 13.1144 2 15 2Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15 2H17C18.8856 2 19.8284 2 20.4142 2.58579C21 3.17157 21 4.11438 21 6V21.25H22C22.4142 21.25 22.75 21.5858 22.75 22C22.75 22.4142 22.4142 22.75 22 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22C1.25 21.5858 1.58579 21.25 2 21.25H3V9C3 7.11438 3 6.17157 3.58579 5.58579C4.17157 5 5.11438 5 7 5H11C12.8856 5 13.8284 5 14.4142 5.58579C15 6.17157 15 7.11438 15 9V21.25H16.5V9L16.5 8.91051C16.5001 8.04488 16.5002 7.25121 16.4134 6.60559C16.3178 5.89462 16.0929 5.14317 15.4749 4.52513C14.8568 3.90708 14.1054 3.68219 13.3944 3.5866C12.7579 3.50102 11.9774 3.49991 11.126 3.49999C11.2103 3.11275 11.351 2.82059 11.5858 2.58579C12.1716 2 13.1144 2 15 2ZM5.25 8C5.25 7.58579 5.58579 7.25 6 7.25H12C12.4142 7.25 12.75 7.58579 12.75 8C12.75 8.41421 12.4142 8.75 12 8.75H6C5.58579 8.75 5.25 8.41421 5.25 8ZM5.25 11C5.25 10.5858 5.58579 10.25 6 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11C12.75 11.4142 12.4142 11.75 12 11.75H6C5.58579 11.75 5.25 11.4142 5.25 11ZM5.25 14C5.25 13.5858 5.58579 13.25 6 13.25H12C12.4142 13.25 12.75 13.5858 12.75 14C12.75 14.4142 12.4142 14.75 12 14.75H6C5.58579 14.75 5.25 14.4142 5.25 14ZM9 18.25C9.41421 18.25 9.75 18.5858 9.75 19V21.25H8.25V19C8.25 18.5858 8.58579 18.25 9 18.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBuildings as IconComponentType).keywords = [
  "buildings",
  "edifice",
  "construction",
  "rising",
  "increasing",
  "augmentative",
  "heightening",
  "augmenting",
  "accommodation",
  "accommodations"
];

export default IconBuildings as IconComponentType;