import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPaperclip: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9707 12V15.5C11.9707 17.43 13.5407 19 15.4707 19C17.4007 19 18.9707 17.43 18.9707 15.5V10C18.9707 6.13 15.8407 3 11.9707 3C8.1007 3 4.9707 6.13 4.9707 10V16C4.9707 19.31 7.6607 22 10.9707 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M11.43 18.1798C9.13 18.1798 7.25 16.2998 7.25 13.9998V10.5698C7.25 7.94982 9.38 5.81982 12 5.81982C14.62 5.81982 16.75 7.94982 16.75 10.5698V13.7098C16.75 15.2298 15.52 16.4598 14 16.4598C12.48 16.4598 11.25 15.2298 11.25 13.7098V11.7098C11.25 11.2998 11.59 10.9598 12 10.9598C12.41 10.9598 12.75 11.2998 12.75 11.7098V13.7098C12.75 14.3998 13.31 14.9598 14 14.9598C14.69 14.9598 15.25 14.3998 15.25 13.7098V10.5698C15.25 8.77982 13.79 7.31982 12 7.31982C10.21 7.31982 8.75 8.77982 8.75 10.5698V13.9998C8.75 15.4798 9.95 16.6798 11.43 16.6798C11.84 16.6798 12.18 17.0198 12.18 17.4298C12.18 17.8398 11.84 18.1798 11.43 18.1798Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPaperclip as IconComponentType).keywords = [
  "paperclip",
  "gem clip",
  "clip",
  "crisis",
  "video",
  "trombone",
  "thumbtack",
  "clothespin",
  "screwdriver",
  "ribbon"
];

export default IconPaperclip as IconComponentType;