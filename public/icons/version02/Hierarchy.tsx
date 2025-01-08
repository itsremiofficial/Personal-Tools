import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHierarchy: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.91992 8.5C7.71485 8.5 9.16992 7.04493 9.16992 5.25C9.16992 3.45507 7.71485 2 5.91992 2C4.125 2 2.66992 3.45507 2.66992 5.25C2.66992 7.04493 4.125 8.5 5.91992 8.5Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M5.66992 22C7.32678 22 8.66992 20.6569 8.66992 19C8.66992 17.3431 7.32678 16 5.66992 16C4.01307 16 2.66992 17.3431 2.66992 19C2.66992 20.6569 4.01307 22 5.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M19.6699 22C21.3268 22 22.6699 20.6569 22.6699 19C22.6699 17.3431 21.3268 16 19.6699 16C18.0131 16 16.6699 17.3431 16.6699 19C16.6699 20.6569 18.0131 22 19.6699 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M5.66992 9V16" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M5.7998 9C6.2498 10.75 7.8498 12.05 9.7398 12.04L13.1698 12.03C15.7898 12.02 18.0198 13.7 18.8398 16.04" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.91992 8.5C7.71485 8.5 9.16992 7.04493 9.16992 5.25C9.16992 3.45507 7.71485 2 5.91992 2C4.125 2 2.66992 3.45507 2.66992 5.25C2.66992 7.04493 4.125 8.5 5.91992 8.5Z" fill="currentColor" /><path d="M5.66992 22C7.32678 22 8.66992 20.6569 8.66992 19C8.66992 17.3431 7.32678 16 5.66992 16C4.01307 16 2.66992 17.3431 2.66992 19C2.66992 20.6569 4.01307 22 5.66992 22Z" fill="currentColor" /><path d="M19.6699 22C21.3268 22 22.6699 20.6569 22.6699 19C22.6699 17.3431 21.3268 16 19.6699 16C18.0131 16 16.6699 17.3431 16.6699 19C16.6699 20.6569 18.0131 22 19.6699 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M19.8399 15.98C18.8699 13.2 16.2499 11.33 13.2999 11.33C13.2899 11.33 13.2799 11.33 13.2699 11.33L9.73992 11.34C8.21992 11.36 6.85992 10.33 6.44992 8.84999V6.99998C6.44992 6.57998 6.10992 6.23999 5.67992 6.23999C5.24992 6.23999 4.91992 6.57998 4.91992 6.99998V18.22C4.91992 18.64 5.25992 18.98 5.67992 18.98C6.09992 18.98 6.44992 18.64 6.44992 18.22V11.6C7.32992 12.38 8.47992 12.86 9.72992 12.86C9.73992 12.86 9.73992 12.86 9.74992 12.86L13.2799 12.85C13.2899 12.85 13.2899 12.85 13.2999 12.85C15.5899 12.85 17.6399 14.3 18.3899 16.47C18.4999 16.79 18.7999 16.98 19.1099 16.98C19.1899 16.98 19.2799 16.97 19.3599 16.94C19.7699 16.82 19.9799 16.38 19.8399 15.98Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.91992 8.5C7.71485 8.5 9.16992 7.04493 9.16992 5.25C9.16992 3.45507 7.71485 2 5.91992 2C4.125 2 2.66992 3.45507 2.66992 5.25C2.66992 7.04493 4.125 8.5 5.91992 8.5Z" fill="currentColor" /><path d="M5.66992 22C7.32678 22 8.66992 20.6569 8.66992 19C8.66992 17.3431 7.32678 16 5.66992 16C4.01307 16 2.66992 17.3431 2.66992 19C2.66992 20.6569 4.01307 22 5.66992 22Z" fill="currentColor" /><path d="M19.6699 22C21.3268 22 22.6699 20.6569 22.6699 19C22.6699 17.3431 21.3268 16 19.6699 16C18.0131 16 16.6699 17.3431 16.6699 19C16.6699 20.6569 18.0131 22 19.6699 22Z" fill="currentColor" /><path d="M19.8399 15.98C18.8699 13.2 16.2499 11.33 13.2999 11.33C13.2899 11.33 13.2799 11.33 13.2699 11.33L9.73992 11.34C8.21992 11.36 6.85992 10.33 6.44992 8.85V7.01C6.44992 6.59 6.10992 6.25 5.67992 6.25C5.24992 6.25 4.91992 6.59 4.91992 7.01V18.23C4.91992 18.65 5.25992 18.99 5.67992 18.99C6.09992 18.99 6.44992 18.65 6.44992 18.23V11.61C7.32992 12.39 8.47992 12.87 9.72992 12.87C9.73992 12.87 9.73992 12.87 9.74992 12.87L13.2799 12.86C13.2899 12.86 13.2899 12.86 13.2999 12.86C15.5899 12.86 17.6399 14.31 18.3899 16.48C18.5099 16.8 18.7999 17 19.1199 17C19.1999 17 19.2899 16.99 19.3699 16.96C19.7699 16.82 19.9799 16.38 19.8399 15.98Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHierarchy as IconComponentType).keywords = [
  "hierarchy",
  "power structure",
  "pecking order",
  "hierarchical",
  "seniority",
  "class",
  "leadership",
  "high-ranking",
  "affiliated",
  "authority"
];

export default IconHierarchy as IconComponentType;