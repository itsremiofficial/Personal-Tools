import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconScan: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.66992 9V6.5C2.66992 4.01 4.67992 2 7.16992 2H9.66992" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M15.6699 2H18.1699C20.6599 2 22.6699 4.01 22.6699 6.5V9" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6699 16V17.5C22.6699 19.99 20.6599 22 18.1699 22H16.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M9.66992 22H7.16992C4.67992 22 2.66992 19.99 2.66992 17.5V15" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M17.6699 9.5V14.5C17.6699 16.5 16.6699 17.5 14.6699 17.5H10.6699C8.66992 17.5 7.66992 16.5 7.66992 14.5V9.5C7.66992 7.5 8.66992 6.5 10.6699 6.5H14.6699C16.6699 6.5 17.6699 7.5 17.6699 9.5Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M19.6699 12H5.66992" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M3.43992 10C3.00992 10 2.66992 9.66 2.66992 9.23V6.92C2.66992 4.21 4.87992 2 7.58992 2H9.89992C10.3299 2 10.6699 2.34 10.6699 2.77C10.6699 3.2 10.3299 3.54 9.89992 3.54H7.58992C5.71992 3.54 4.20992 5.06 4.20992 6.92V9.23C4.20992 9.66 3.85992 10 3.43992 10Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.8999 10C21.4799 10 21.1299 9.66 21.1299 9.23V6.92C21.1299 5.05 19.6099 3.54 17.7499 3.54H15.4399C15.0099 3.54 14.6699 3.19 14.6699 2.77C14.6699 2.35 15.0099 2 15.4399 2H17.7499C20.4599 2 22.6699 4.21 22.6699 6.92V9.23C22.6699 9.66 22.3299 10 21.8999 10Z" fill="currentColor" /><path d="M17.7498 22.0002H16.3598C15.9398 22.0002 15.5898 21.6602 15.5898 21.2302C15.5898 20.8102 15.9298 20.4602 16.3598 20.4602H17.7498C19.6198 20.4602 21.1298 18.9402 21.1298 17.0802V15.7002C21.1298 15.2802 21.4698 14.9302 21.8998 14.9302C22.3198 14.9302 22.6698 15.2702 22.6698 15.7002V17.0802C22.6698 19.7902 20.4598 22.0002 17.7498 22.0002Z" fill="currentColor" /><path d="M9.89992 22H7.58992C4.87992 22 2.66992 19.79 2.66992 17.08V14.77C2.66992 14.34 3.00992 14 3.43992 14C3.86992 14 4.20992 14.34 4.20992 14.77V17.08C4.20992 18.95 5.72992 20.46 7.58992 20.46H9.89992C10.3199 20.46 10.6699 20.8 10.6699 21.23C10.6699 21.66 10.3299 22 9.89992 22Z" fill="currentColor" /><path d="M19.1299 11.23H17.7699H7.56994H6.20994C5.77994 11.23 5.43994 11.58 5.43994 12C5.43994 12.42 5.77994 12.77 6.20994 12.77H7.56994H17.7699H19.1299C19.5599 12.77 19.8999 12.42 19.8999 12C19.8999 11.58 19.5599 11.23 19.1299 11.23Z" fill="currentColor" /><path d="M7.56982 13.94V14.27C7.56982 15.93 8.90982 17.27 10.5698 17.27H14.7698C16.4298 17.27 17.7698 15.93 17.7698 14.27V13.94C17.7698 13.82 17.6798 13.73 17.5598 13.73H7.77982C7.65982 13.73 7.56982 13.82 7.56982 13.94Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M7.56982 10.06V9.72998C7.56982 8.06998 8.90982 6.72998 10.5698 6.72998H14.7698C16.4298 6.72998 17.7698 8.06998 17.7698 9.72998V10.06C17.7698 10.18 17.6798 10.27 17.5598 10.27H7.77982C7.65982 10.27 7.56982 10.18 7.56982 10.06Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.43992 10C3.00992 10 2.66992 9.66 2.66992 9.23V6.92C2.66992 4.21 4.87992 2 7.58992 2H9.89992C10.3299 2 10.6699 2.34 10.6699 2.77C10.6699 3.2 10.3299 3.54 9.89992 3.54H7.58992C5.71992 3.54 4.20992 5.06 4.20992 6.92V9.23C4.20992 9.66 3.85992 10 3.43992 10Z" fill="currentColor" /><path d="M21.8999 10C21.4799 10 21.1299 9.66 21.1299 9.23V6.92C21.1299 5.05 19.6099 3.54 17.7499 3.54H15.4399C15.0099 3.54 14.6699 3.19 14.6699 2.77C14.6699 2.35 15.0099 2 15.4399 2H17.7499C20.4599 2 22.6699 4.21 22.6699 6.92V9.23C22.6699 9.66 22.3299 10 21.8999 10Z" fill="currentColor" /><path d="M17.7498 22.0002H16.3598C15.9398 22.0002 15.5898 21.6602 15.5898 21.2302C15.5898 20.8102 15.9298 20.4602 16.3598 20.4602H17.7498C19.6198 20.4602 21.1298 18.9402 21.1298 17.0802V15.7002C21.1298 15.2802 21.4698 14.9302 21.8998 14.9302C22.3198 14.9302 22.6698 15.2702 22.6698 15.7002V17.0802C22.6698 19.7902 20.4598 22.0002 17.7498 22.0002Z" fill="currentColor" /><path d="M9.89992 22H7.58992C4.87992 22 2.66992 19.79 2.66992 17.08V14.77C2.66992 14.34 3.00992 14 3.43992 14C3.86992 14 4.20992 14.34 4.20992 14.77V17.08C4.20992 18.95 5.72992 20.46 7.58992 20.46H9.89992C10.3199 20.46 10.6699 20.8 10.6699 21.23C10.6699 21.66 10.3299 22 9.89992 22Z" fill="currentColor" /><path d="M19.1299 11.23H17.7699H7.56994H6.20994C5.77994 11.23 5.43994 11.58 5.43994 12C5.43994 12.42 5.77994 12.77 6.20994 12.77H7.56994H17.7699H19.1299C19.5599 12.77 19.8999 12.42 19.8999 12C19.8999 11.58 19.5599 11.23 19.1299 11.23Z" fill="currentColor" /><path d="M7.56982 13.94V14.27C7.56982 15.93 8.90982 17.27 10.5698 17.27H14.7698C16.4298 17.27 17.7698 15.93 17.7698 14.27V13.94C17.7698 13.82 17.6798 13.73 17.5598 13.73H7.77982C7.65982 13.73 7.56982 13.82 7.56982 13.94Z" fill="currentColor" /><path d="M7.56982 10.06V9.72998C7.56982 8.06998 8.90982 6.72998 10.5698 6.72998H14.7698C16.4298 6.72998 17.7698 8.06998 17.7698 9.72998V10.06C17.7698 10.18 17.6798 10.27 17.5598 10.27H7.77982C7.65982 10.27 7.56982 10.18 7.56982 10.06Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconScan as IconComponentType).keywords = [
  "scan",
  "read",
  "run down",
  "glance over",
  "skim",
  "rake",
  "examine",
  "inspect",
  "finding",
  "scrutinize"
];

export default IconScan as IconComponentType;