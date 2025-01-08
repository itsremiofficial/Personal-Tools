import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBed: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6V18" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22 18V15.6429C22 13.6479 22 12.6505 21.7194 11.8486C21.2169 10.4124 20.0876 9.28314 18.6514 8.78058C17.8495 8.5 16.8521 8.5 14.8571 8.5C14.0592 8.5 13.6602 8.5 13.3394 8.61223C12.7649 8.81326 12.3133 9.26495 12.1122 9.83944C12 10.1602 12 10.5592 12 11.3571V16" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M2 16H22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.5" : "1"} d="M9.5 11C9.5 12.3807 8.38071 13.5 7 13.5C5.61929 13.5 4.5 12.3807 4.5 11C4.5 9.61929 5.61929 8.5 7 8.5C8.38071 8.5 9.5 9.61929 9.5 11Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2 5.25C2.41421 5.25 2.75 5.58579 2.75 6V15.25H12H22.6428L22.6429 15.643L22.642 16.0001V18.0002C22.642 18.4144 22.3063 18.7502 21.892 18.7502C21.4778 18.7502 21.142 18.4144 21.142 18.0002V16.75H2.75V18C2.75 18.4142 2.41421 18.75 2 18.75C1.58579 18.75 1.25 18.4142 1.25 18V6C1.25 5.58579 1.58579 5.25 2 5.25Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M7 13.5C8.38071 13.5 9.5 12.3807 9.5 11C9.5 9.61929 8.38071 8.5 7 8.5C5.61929 8.5 4.5 9.61929 4.5 11C4.5 12.3807 5.61929 13.5 7 13.5Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M22.3623 11.8486C21.8597 10.4124 20.7305 9.28314 19.2943 8.78058C18.4924 8.5 17.4949 8.5 15.5 8.5H15.4977C14.7 8.5 13.6599 8.5 13.3394 8.61213C12.7649 8.81315 12.3133 9.26484 12.1122 9.83933C12 10.1601 12 10.5591 12 11.357V15.2499H22.6428C22.6416 13.5133 22.6238 12.596 22.3623 11.8486Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.75 6C2.75 5.58579 2.41421 5.25 2 5.25C1.58579 5.25 1.25 5.58579 1.25 6V18C1.25 18.4142 1.58579 18.75 2 18.75C2.41421 18.75 2.75 18.4142 2.75 18V16.75H21.142V18.0002C21.142 18.4144 21.4778 18.7502 21.892 18.7502C22.3063 18.7502 22.642 18.4144 22.642 18.0002V16.0001L22.6429 15.643C22.6429 13.648 22.6429 12.6506 22.3623 11.8487C21.8597 10.4125 20.7305 9.28325 19.2943 8.78069C18.4924 8.50011 17.4949 8.50011 15.5 8.50011H15.4977C14.7 8.50011 13.6599 8.50011 13.3394 8.61223C12.7649 8.81326 12.3133 9.26495 12.1122 9.83944C12 10.1602 12 10.5592 12 11.3571V15.25H2.75V6Z" fill="currentColor" /><path d="M7 13.5C8.38071 13.5 9.5 12.3807 9.5 11C9.5 9.61929 8.38071 8.5 7 8.5C5.61929 8.5 4.5 9.61929 4.5 11C4.5 12.3807 5.61929 13.5 7 13.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBed as IconComponentType).keywords = [
  "bed",
  "seam",
  "screw",
  "bottom",
  "hump",
  "bonk",
  "bang",
  "get it on",
  "sleep with",
  "do it"
];

export default IconBed as IconComponentType;