import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBackwardItem: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.14999V7.85001C22 10.1 21.1 11 18.85 11H16.15C13.9 11 13 10.1 13 7.85001V5.14999C13 2.89999 13.9 2 16.15 2H18.85C21.1 2 22 2.89999 22 5.14999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.3791 11.0001V13.6201C17.3791 16.3101 16.3091 17.3801 13.6191 17.3801H10.9991V16.1501C10.9991 13.9001 10.0991 13.0001 7.84914 13.0001H6.61914V10.3801C6.61914 7.69013 7.68914 6.62012 10.3791 6.62012H12.9991V7.85013C12.9991 10.1001 13.8991 11.0001 16.1491 11.0001H17.3791Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.25 5.14999V7.85001C21.25 9.69001 20.69 10.25 18.85 10.25H16.15C14.31 10.25 13.75 9.69001 13.75 7.85001V5.14999C13.75 3.30999 14.31 2.75 16.15 2.75H18.85C20.69 2.75 21.25 3.30999 21.25 5.14999Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M10.25 16.15V18.85C10.25 20.69 9.69 21.25 7.85 21.25H5.15C3.31 21.25 2.75 20.69 2.75 18.85V16.15C2.75 14.31 3.31 13.75 5.15 13.75H7.85C9.69 13.75 10.25 14.31 10.25 16.15Z" fill="currentColor" /><path d="M16.6291 11.7501V13.6201C16.6291 15.9001 15.8991 16.6301 13.6191 16.6301H11.7491V16.1501C11.7491 13.4901 10.5091 12.2501 7.84914 12.2501H7.36914V10.3801C7.36914 8.10013 8.09914 7.37012 10.3791 7.37012H12.2491V7.85013C12.2491 10.5101 13.4891 11.7501 16.1491 11.7501H16.6291Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBackwardItem as IconComponentType).keywords = [
  "backward",
  "item",
  "rearward",
  "back",
  "rearwards",
  "retral",
  "reversed",
  "reverse",
  "retrograde",
  "inverse",
  "reversive",
  "point",
  "particular",
  "token",
  "detail",
  "object",
  "thing",
  "concept",
  "notion",
  "status"
];

export default IconBackwardItem as IconComponentType;