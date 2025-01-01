import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconText: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.66992 7.16979V5.34979C2.66992 4.19979 3.59992 3.27979 4.73992 3.27979H19.2599C20.4099 3.27979 21.3299 4.20979 21.3299 5.34979V7.16979" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 20.7199V4.10986" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.06055 20.7202H15.9405" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C7.61 22 7.41 21.99 7.22 21.98C5.99 21.9 4.95 21.55 4.13 20.95C3.71 20.66 3.34 20.29 3.05 19.87C2.36 18.92 2 17.68 2 16.19V7.81C2 4.37 3.94 2.24 7.22 2.03C7.41 2.01 7.61 2 7.81 2H16.19C17.68 2 18.92 2.36 19.87 3.05C20.29 3.34 20.66 3.71 20.95 4.13C21.64 5.08 22 6.32 22 7.81Z" fill="currentColor" /><path d="M16.67 5.64014H7.33C6.18 5.64014 5.25 6.57014 5.25 7.72014V8.90014C5.25 9.31014 5.59 9.65014 6 9.65014C6.41 9.65014 6.75 9.31014 6.75 8.90014V7.72014C6.75 7.40014 7.01 7.14014 7.33 7.14014H11.25V16.8601H9.47C9.06 16.8601 8.72 17.2001 8.72 17.6101C8.72 18.0201 9.06 18.3601 9.47 18.3601H14.54C14.95 18.3601 15.29 18.0201 15.29 17.6101C15.29 17.2001 14.95 16.8601 14.54 16.8601H12.76V7.14014H16.68C17 7.14014 17.26 7.40014 17.26 7.72014V8.90014C17.26 9.31014 17.6 9.65014 18.01 9.65014C18.42 9.65014 18.76 9.31014 18.76 8.90014V7.72014C18.75 6.58014 17.82 5.64014 16.67 5.64014Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconText as IconComponentType).keywords = [
  "text",
  "schoolbook",
  "textbook",
  "school text",
  "text edition",
  "textual matter",
  "writing",
  "letter",
  "paragraph",
  "manuscript"
];

export default IconText as IconComponentType;