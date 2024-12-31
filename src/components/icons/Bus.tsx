import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBus: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9 22H7.10001C5.40001 22 4 20.61 4 18.9V5.10001C4 3.40001 5.39001 2 7.10001 2H16.9C18.6 2 20 3.39001 20 5.10001V18.9C20 20.61 18.61 22 16.9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.5 13H5.5C4.67 13 4 12.33 4 11.5V9.5C4 8.67 4.67 8 5.5 8H18.5C19.33 8 20 8.67 20 9.5V11.5C20 12.33 19.33 13 18.5 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.5 5H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.49451 17.7002H8.50349" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.4945 17.7002H15.5035" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.9 22H7.10001C5.40001 22 4 20.61 4 18.9V5.10001C4 3.40001 5.39001 2 7.10001 2H16.9C18.6 2 20 3.39001 20 5.10001V18.9C20 20.61 18.61 22 16.9 22Z" fill="currentColor" /><path d="M20 8H4V13H20V8Z" fill="currentColor" /><path d="M8 18.7501C7.92 18.7501 7.83999 18.7401 7.75999 18.7301C7.67999 18.7101 7.6 18.6901 7.52 18.6501C7.45 18.6201 7.37 18.5801 7.31 18.5401C7.24 18.4901 7.17 18.4401 7.12 18.3801C6.88 18.1501 6.75 17.8301 6.75 17.5001C6.75 17.1701 6.88 16.8501 7.12 16.6201C7.17 16.5601 7.24 16.5101 7.31 16.4601C7.37 16.4201 7.45 16.3801 7.52 16.3501C7.6 16.3101 7.67999 16.2901 7.75999 16.2701C8.15999 16.1901 8.59 16.3301 8.88 16.6201C9.12 16.8501 9.25 17.1701 9.25 17.5001C9.25 17.8301 9.12 18.1501 8.88 18.3801C8.65 18.6201 8.33 18.7501 8 18.7501Z" fill="currentColor" /><path d="M16 18.7501C15.92 18.7501 15.84 18.7401 15.76 18.7301C15.68 18.7101 15.6 18.6901 15.52 18.6501C15.45 18.6201 15.37 18.5801 15.31 18.5401C15.24 18.4901 15.17 18.4401 15.12 18.3801C14.88 18.1501 14.75 17.8301 14.75 17.5001C14.75 17.1701 14.88 16.8501 15.12 16.6201C15.17 16.5601 15.24 16.5101 15.31 16.4601C15.37 16.4201 15.45 16.3801 15.52 16.3501C15.6 16.3101 15.68 16.2901 15.76 16.2701C15.92 16.2401 16.08 16.2401 16.25 16.2701C16.32 16.2901 16.4 16.3101 16.48 16.3501C16.55 16.3801 16.63 16.4201 16.69 16.4601C16.76 16.5101 16.83 16.5601 16.88 16.6201C17.12 16.8501 17.25 17.1701 17.25 17.5001C17.25 17.8301 17.12 18.1501 16.88 18.3801C16.83 18.4401 16.76 18.4901 16.69 18.5401C16.63 18.5801 16.55 18.6201 16.48 18.6501C16.4 18.6901 16.32 18.7101 16.25 18.7301C16.16 18.7401 16.08 18.7501 16 18.7501Z" fill="currentColor" /><path d="M14.5 5.75H9.5C9.09 5.75 8.75 5.41 8.75 5C8.75 4.59 9.09 4.25 9.5 4.25H14.5C14.91 4.25 15.25 4.59 15.25 5C15.25 5.41 14.91 5.75 14.5 5.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBus as IconComponentType).keywords = [
  "bus",
  "omnibus",
  "jitney",
  "autobus",
  "motorbus",
  "double-decker",
  "motorcoach",
  "jalopy",
  "charabanc",
  "coach"
];

export default IconBus as IconComponentType;