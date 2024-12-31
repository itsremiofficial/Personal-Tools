import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBezier: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 9C4.10457 9 5 8.10457 5 7C5 5.89543 4.10457 5 3 5C1.89543 5 1 5.89543 1 7C1 8.10457 1.89543 9 3 9Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M21 9C22.1046 9 23 8.10457 23 7C23 5.89543 22.1046 5 21 5C19.8954 5 19 5.89543 19 7C19 8.10457 19.8954 9 21 9Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 7H15" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 7H5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.5 16.5V18.5C7.5 19.11 7.13 19.64 6.61 19.86C6.42 19.95 6.22 20 6 20H4C3.17 20 2.5 19.33 2.5 18.5V16.5C2.5 15.67 3.17 15 4 15H6C6.83 15 7.5 15.67 7.5 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.5 16.5V18.5C21.5 19.33 20.83 20 20 20H18C17.78 20 17.58 19.95 17.39 19.86C16.87 19.64 16.5 19.11 16.5 18.5V16.5C16.5 15.67 17.17 15 18 15H20C20.83 15 21.5 15.67 21.5 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 5.5V8.5C15 9.32 14.32 10 13.5 10H10.5C9.68 10 9 9.32 9 8.5V5.5C9 4.68 9.68 4 10.5 4H13.5C14.32 4 15 4.68 15 5.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15 7.72998C17.37 8.92998 19 11.51 19 14.5C19 14.67 18.99 14.83 18.97 15" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5.03 15C5.01 14.83 5 14.67 5 14.5C5 11.51 6.63 8.92998 9 7.72998" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3 9C4.10457 9 5 8.10457 5 7C5 5.89543 4.10457 5 3 5C1.89543 5 1 5.89543 1 7C1 8.10457 1.89543 9 3 9Z" fill="currentColor" /><path d="M21 9C22.1046 9 23 8.10457 23 7C23 5.89543 22.1046 5 21 5C19.8954 5 19 5.89543 19 7C19 8.10457 19.8954 9 21 9Z" fill="currentColor" /><path d="M7.5 16.5V18.5C7.5 19.11 7.13 19.64 6.61 19.86C6.42 19.95 6.22 20 6 20H4C3.17 20 2.5 19.33 2.5 18.5V16.5C2.5 15.67 3.17 15 4 15H6C6.83 15 7.5 15.67 7.5 16.5Z" fill="currentColor" /><path d="M21.5 16.5V18.5C21.5 19.33 20.83 20 20 20H18C17.78 20 17.58 19.95 17.39 19.86C16.87 19.64 16.5 19.11 16.5 18.5V16.5C16.5 15.67 17.17 15 18 15H20C20.83 15 21.5 15.67 21.5 16.5Z" fill="currentColor" /><path d="M15 5.5V8.5C15 9.32 14.32 10 13.5 10H10.5C9.68 10 9 9.32 9 8.5V5.5C9 4.68 9.68 4 10.5 4H13.5C14.32 4 15 4.68 15 5.5Z" fill="currentColor" /><g opacity={duotone ? "0.4" : "1"}><path opacity={duotone ? "0.4" : "1"} d="M9 6.25H5C4.59 6.25 4.25 6.59 4.25 7C4.25 7.41 4.59 7.75 5 7.75H7.57C5.52 9.27 4.25 11.79 4.25 14.5C4.25 14.7 4.26 14.89 4.29 15.09C4.33 15.47 4.66 15.75 5.03 15.75C5.06 15.75 5.09 15.75 5.12 15.75C5.53 15.7 5.83 15.33 5.78 14.92C5.76 14.78 5.76 14.65 5.76 14.51C5.76 11.91 7.17 9.50997 9.35 8.40997C9.72 8.21997 9.87 7.77002 9.68 7.40002C9.67 7.39002 9.66 7.38 9.66 7.37C9.72 7.26 9.77 7.14001 9.77 7.01001C9.75 6.59001 9.41 6.25 9 6.25Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.43 7.75H19C19.41 7.75 19.75 7.41 19.75 7C19.75 6.59 19.41 6.25 19 6.25H15C14.59 6.25 14.25 6.59 14.25 7C14.25 7.13 14.29 7.24999 14.36 7.35999C14.35 7.36999 14.34 7.38001 14.34 7.39001C14.15 7.76001 14.3 8.21002 14.67 8.40002C16.85 9.50002 18.26 11.9 18.26 14.5C18.26 14.64 18.25 14.77 18.24 14.91C18.19 15.32 18.49 15.69 18.9 15.74C18.93 15.74 18.96 15.74 18.99 15.74C19.37 15.74 19.69 15.46 19.73 15.08C19.75 14.88 19.77 14.69 19.77 14.49C19.75 11.79 18.48 9.27 16.43 7.75Z" fill="currentColor" /></g></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBezier as IconComponentType).keywords = [
  "bezier",
  "nurbs",
  "polyline",
  "spline",
  "ellipse",
  "polygon",
  "polylines",
  "keyframes",
  "xform",
  "keyframe"
];

export default IconBezier as IconComponentType;