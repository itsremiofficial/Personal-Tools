import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconNoteFavorite: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M21 8.5V13.63C20.11 12.92 18.98 12.5 17.75 12.5C16.52 12.5 15.37 12.93 14.47 13.66C13.26 14.61 12.5 16.1 12.5 17.75C12.5 18.73 12.78 19.67 13.26 20.45C13.63 21.06 14.11 21.59 14.68 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7 11H13" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7 16H9.62" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M23 17.75C23 18.73 22.72 19.67 22.24 20.45C21.96 20.93 21.61 21.35 21.2 21.69C20.28 22.51 19.08 23 17.75 23C16.6 23 15.54 22.63 14.68 22C14.11 21.59 13.63 21.06 13.26 20.45C12.78 19.67 12.5 18.73 12.5 17.75C12.5 16.1 13.26 14.61 14.47 13.66C15.37 12.93 16.52 12.5 17.75 12.5C18.98 12.5 20.11 12.92 21 13.63C22.22 14.59 23 16.08 23 17.75Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.75 20.25C17.75 18.87 18.87 17.75 20.25 17.75C18.87 17.75 17.75 16.63 17.75 15.25C17.75 16.63 16.63 17.75 15.25 17.75C16.63 17.75 17.75 18.87 17.75 20.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75C6.59 5.75 6.25 5.41 6.25 5V2C6.25 1.59 6.59 1.25 7 1.25C7.41 1.25 7.75 1.59 7.75 2V5C7.75 5.41 7.41 5.75 7 5.75Z" fill="currentColor" /><path d="M15 5.75C14.59 5.75 14.25 5.41 14.25 5V2C14.25 1.59 14.59 1.25 15 1.25C15.41 1.25 15.75 1.59 15.75 2V5C15.75 5.41 15.41 5.75 15 5.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20 8.5V17C20 20 18.5 22 15 22H7C3.5 22 2 20 2 17V8.5C2 5.5 3.5 3.5 7 3.5H15C18.5 3.5 20 5.5 20 8.5Z" fill="currentColor" /><path d="M13 11.75H7C6.59 11.75 6.25 11.41 6.25 11C6.25 10.59 6.59 10.25 7 10.25H13C13.41 10.25 13.75 10.59 13.75 11C13.75 11.41 13.41 11.75 13 11.75Z" fill="currentColor" /><path d="M10 16.75H7C6.59 16.75 6.25 16.41 6.25 16C6.25 15.59 6.59 15.25 7 15.25H10C10.41 15.25 10.75 15.59 10.75 16C10.75 16.41 10.41 16.75 10 16.75Z" fill="currentColor" /><path d="M21 13.63C20.11 12.92 18.98 12.5 17.75 12.5C16.52 12.5 15.37 12.93 14.47 13.66C13.26 14.61 12.5 16.1 12.5 17.75C12.5 18.73 12.78 19.67 13.26 20.45C13.63 21.06 14.11 21.59 14.68 22C15.54 22.63 16.6 23 17.75 23C19.08 23 20.28 22.51 21.2 21.69C21.61 21.35 21.96 20.93 22.24 20.45C22.72 19.67 23 18.73 23 17.75C23 16.08 22.22 14.59 21 13.63ZM17.75 20.25C17.75 18.87 16.63 17.75 15.25 17.75C16.63 17.75 17.75 16.63 17.75 15.25C17.75 16.63 18.87 17.75 20.25 17.75C18.87 17.75 17.75 18.87 17.75 20.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconNoteFavorite as IconComponentType).keywords = [
  "note",
  "favorite",
  "annotation",
  "notation",
  "mention",
  "remark",
  "notice",
  "observe",
  "take note",
  "distinction",
  "bank note",
  "favored",
  "favourite",
  "preferred",
  "popular",
  "loved",
  "deary",
  "darling",
  "dearie",
  "front-runner"
];

export default IconNoteFavorite as IconComponentType;