import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconTextBlock: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 8.89039C10.15 7.32039 13.85 7.32039 17 8.89039" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 16.2997V7.92969" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M17.3403 8.21002C14.0003 6.54002 10.0103 6.54002 6.67026 8.21002C6.29026 8.40002 6.14026 8.85002 6.33026 9.22002C6.46026 9.48002 6.73026 9.63002 7.00026 9.63002C7.11026 9.63002 7.23026 9.60002 7.34026 9.55002C8.57026 8.94002 9.90026 8.60002 11.2503 8.50002V16.29C11.2503 16.7 11.5903 17.04 12.0003 17.04C12.4103 17.04 12.7503 16.7 12.7503 16.29V8.50002C14.1003 8.60002 15.4303 8.94002 16.6603 9.55002C17.0303 9.73002 17.4803 9.59002 17.6703 9.21002C17.8603 8.85002 17.7103 8.40002 17.3403 8.21002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTextBlock as IconComponentType).keywords = [
  "text",
  "block",
  "schoolbook",
  "textbook",
  "school text",
  "text edition",
  "textual matter",
  "writing",
  "letter",
  "paragraph",
  "manuscript",
  "bar",
  "stuff",
  "pulley",
  "barricade",
  "engine block",
  "lug",
  "freeze",
  "blockade",
  "parry"
];

export default IconTextBlock as IconComponentType;