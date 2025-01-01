import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHeadphones: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M15.5 21.9998V7.21973" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.0998 5.29999C10.0998 5.78999 9.89982 6.25001 9.56982 6.57001C9.24982 6.90001 8.7998 7.09998 8.2998 7.09998H6.0498C6.3298 6.72998 6.49982 6.25 6.49982 5.75V4.84998C6.49982 4.34998 6.3298 3.87 6.0498 3.5H8.2998C9.2898 3.5 10.0998 4.30999 10.0998 5.29999Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.5 4.85002V5.75005C6.5 6.25005 6.32999 6.73002 6.04999 7.10002C5.28999 8.11002 3.73 8.45002 2.28 7.16002C2.12 7.02002 2 6.72005 2 6.50005V4.16002C2 3.97002 2.10001 3.69003 2.23001 3.55003C3.49001 2.23003 5.01 2.42005 5.84 3.25005C5.91 3.32005 5.97999 3.40004 6.04999 3.49004C6.32999 3.87004 6.5 4.35002 6.5 4.85002Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.9004 5.29999C13.9004 5.78999 14.1004 6.25001 14.4304 6.57001C14.7504 6.90001 15.2004 7.09998 15.7004 7.09998H17.9504C17.6704 6.72998 17.5004 6.25 17.5004 5.75V4.84998C17.5004 4.34998 17.6704 3.87 17.9504 3.5H15.7004C14.7104 3.5 13.9004 4.30999 13.9004 5.29999Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.5 4.85002V5.75005C17.5 6.25005 17.67 6.73002 17.95 7.10002C18.71 8.11002 20.27 8.45002 21.72 7.16002C21.88 7.02002 22 6.72005 22 6.50005V4.16002C22 3.97002 21.9 3.69003 21.77 3.55003C20.51 2.23003 18.99 2.42005 18.16 3.25005C18.09 3.32005 18.02 3.40004 17.95 3.49004C17.67 3.87004 17.5 4.35002 17.5 4.85002Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M8.5 11.9998V7.21973" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.5 22V19" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 13.5V17.5C10 18.33 9.33 19 8.5 19C7.67 19 7 18.33 7 17.5V13.5C7 12.67 7.67 12 8.5 12C9.33 12 10 12.67 10 13.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M8.5 12.75C8.09 12.75 7.75 12.41 7.75 12V6C7.75 5.59 8.09 5.25 8.5 5.25C8.91 5.25 9.25 5.59 9.25 6V12C9.25 12.41 8.91 12.75 8.5 12.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M8.5 22.75C8.09 22.75 7.75 22.41 7.75 22V18C7.75 17.59 8.09 17.25 8.5 17.25C8.91 17.25 9.25 17.59 9.25 18V22C9.25 22.41 8.91 22.75 8.5 22.75Z" fill="currentColor" /><path d="M15.5 22.75C15.09 22.75 14.75 22.41 14.75 22V6C14.75 5.59 15.09 5.25 15.5 5.25C15.91 5.25 16.25 5.59 16.25 6V22C16.25 22.41 15.91 22.75 15.5 22.75Z" fill="currentColor" /><path d="M10.1008 5.29999C10.1008 5.78999 9.9008 6.25001 9.5708 6.57001C9.2508 6.90001 8.80078 7.09998 8.30078 7.09998H6.05078C6.33078 6.72998 6.50079 6.25 6.50079 5.75V4.84998C6.50079 4.34998 6.33078 3.87 6.05078 3.5H8.30078C9.29078 3.5 10.1008 4.30999 10.1008 5.29999Z" fill="currentColor" /><path d="M6.5 4.85002V5.75005C6.5 6.25005 6.32999 6.73002 6.04999 7.10002C5.28999 8.11002 3.73 8.45002 2.28 7.16002C2.12 7.02002 2 6.72005 2 6.50005V4.16002C2 3.97002 2.10001 3.69003 2.23001 3.55003C3.49001 2.23003 5.01 2.42005 5.84 3.25005C5.91 3.32005 5.97999 3.40004 6.04999 3.49004C6.32999 3.87004 6.5 4.35002 6.5 4.85002Z" fill="currentColor" /><path d="M13.9004 5.29999C13.9004 5.78999 14.1004 6.25001 14.4304 6.57001C14.7504 6.90001 15.2004 7.09998 15.7004 7.09998H17.9504C17.6704 6.72998 17.5004 6.25 17.5004 5.75V4.84998C17.5004 4.34998 17.6704 3.87 17.9504 3.5H15.7004C14.7104 3.5 13.9004 4.30999 13.9004 5.29999Z" fill="currentColor" /><path d="M17.5 4.85002V5.75005C17.5 6.25005 17.67 6.73002 17.95 7.10002C18.71 8.11002 20.27 8.45002 21.72 7.16002C21.88 7.02002 22 6.72005 22 6.50005V4.16002C22 3.97002 21.9 3.69003 21.77 3.55003C20.51 2.23003 18.99 2.42005 18.16 3.25005C18.09 3.32005 18.02 3.40004 17.95 3.49004C17.67 3.87004 17.5 4.35002 17.5 4.85002Z" fill="currentColor" /><path d="M10 13.5V17.5C10 18.33 9.33 19 8.5 19C7.67 19 7 18.33 7 17.5V13.5C7 12.67 7.67 12 8.5 12C9.33 12 10 12.67 10 13.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHeadphones as IconComponentType).keywords = [
  "headphones",
  "earpiece",
  "earphone",
  "phone",
  "earphones",
  "headset",
  "phones",
  "canceling",
  "handsets",
  "headsets"
];

export default IconHeadphones as IconComponentType;