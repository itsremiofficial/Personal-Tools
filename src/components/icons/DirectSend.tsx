import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDirectSend: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M12 9V2L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 2L14 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M1.98047 13H6.39047C6.77047 13 7.11047 13.21 7.28047 13.55L8.45047 15.89C8.79047 16.57 9.48047 17 10.2405 17H13.7705C14.5305 17 15.2205 16.57 15.5605 15.89L16.7305 13.55C16.9005 13.21 17.2505 13 17.6205 13H21.9805" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 5.12988C3.46 5.64988 2 7.72988 2 11.9999V14.9999C2 19.9999 4 21.9999 9 21.9999H15C20 21.9999 22 19.9999 22 14.9999V11.9999C22 7.72988 20.54 5.64988 17 5.12988" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.5292 3.47023L12.5292 1.47023C12.5192 1.46023 12.5092 1.46023 12.5092 1.45023C12.4492 1.39023 12.3692 1.34023 12.2892 1.30023C12.2792 1.30023 12.2792 1.30023 12.2692 1.29023C12.1892 1.26023 12.1092 1.25023 12.0292 1.24023C11.9992 1.24023 11.9792 1.24023 11.9492 1.24023C11.8892 1.24023 11.8292 1.26023 11.7692 1.28023C11.7392 1.29023 11.7192 1.30023 11.6992 1.31023C11.6192 1.35023 11.5392 1.39023 11.4792 1.46023L9.47922 3.46023C9.18922 3.75023 9.18922 4.23023 9.47922 4.52023C9.76922 4.81023 10.2492 4.81023 10.5392 4.52023L11.2592 3.80023V9.00023C11.2592 9.41023 11.5992 9.75023 12.0092 9.75023C12.4192 9.75023 12.7492 9.41023 12.7492 9.00023V3.81023L13.4692 4.53023C13.6192 4.68023 13.8092 4.75023 13.9992 4.75023C14.1892 4.75023 14.3792 4.68023 14.5292 4.53023C14.8192 4.24023 14.8192 3.76023 14.5292 3.47023Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.19 6H7.81C4.17 6 2 8.17 2 11.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V11.82C22 8.17 19.83 6 16.19 6Z" fill="currentColor" /><path d="M21.3 12.23H17.82C16.84 12.23 15.97 12.77 15.53 13.65L14.69 15.31C14.49 15.71 14.09 15.96 13.65 15.96H10.37C10.06 15.96 9.62 15.89 9.33 15.31L8.49 13.66C8.05 12.79 7.17 12.24 6.2 12.24H2.7C2.31 12.24 2 12.55 2 12.94V16.2C2 19.83 4.18 22 7.82 22H16.2C19.63 22 21.74 20.12 22 16.78V12.93C22 12.55 21.69 12.23 21.3 12.23Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDirectSend as IconComponentType).keywords = [
  "direct",
  "send",
  "straightforward",
  "directly",
  "forthright",
  "plainspoken",
  "man-to-man",
  "straight",
  "frank",
  "free-spoken",
  "outspoken",
  "transmit",
  "charge",
  "transport",
  "mail",
  "base",
  "institutionalize",
  "place",
  "broadcast",
  "commit"
];

export default IconDirectSend as IconComponentType;