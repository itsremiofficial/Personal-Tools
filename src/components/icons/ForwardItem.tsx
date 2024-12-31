import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconForwardItem: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3794 10.3799V13.6099C17.3794 16.2999 16.2994 17.3799 13.6094 17.3799H10.3794C7.68938 17.3799 6.60938 16.2999 6.60938 13.6099V10.3799C6.60938 7.68988 7.68938 6.60986 10.3794 6.60986H13.6094C16.3094 6.61986 17.3794 7.68988 17.3794 10.3799Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22.0005 5.76999V9C22.0005 11.69 20.9205 12.77 18.2305 12.77H17.3805V10.39C17.3805 7.70001 16.3005 6.62 13.6105 6.62H11.2305V5.76999C11.2305 3.07999 12.3105 2 15.0005 2H18.2305C20.9205 2 22.0005 3.07999 22.0005 5.76999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 18.23V15C2 12.31 3.08 11.23 5.77 11.23H6.62V13.61C6.62 16.3 7.7 17.38 10.39 17.38H12.77V18.23C12.77 20.92 11.69 22 9 22H5.77C3.08 22 2 20.92 2 18.23Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.2505 5.77V9C21.2505 11.29 20.5205 12.02 18.2305 12.02H18.1305V10.38C18.1305 7.26 16.7405 5.87 13.6205 5.87H11.9805V5.77C11.9805 3.48 12.7105 2.75 15.0005 2.75H18.2305C20.5205 2.75 21.2505 3.48 21.2505 5.77Z" fill="currentColor" /><path d="M16.6291 10.3801V13.6201C16.6291 15.9001 15.8991 16.6301 13.6191 16.6301H10.3791C8.09914 16.6301 7.36914 15.9001 7.36914 13.6201V10.3801C7.36914 8.10013 8.09914 7.37012 10.3791 7.37012H13.6191C15.8991 7.37012 16.6291 8.10013 16.6291 10.3801Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12.02 18.13V18.23C12.02 20.52 11.29 21.25 9 21.25H5.77C3.48 21.25 2.75 20.52 2.75 18.23V15C2.75 12.71 3.48 11.98 5.77 11.98H5.87V13.62C5.87 16.74 7.26 18.13 10.38 18.13H12.02Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconForwardItem as IconComponentType).keywords = [
  "forward",
  "item",
  "frontwards",
  "ahead",
  "frontward",
  "forrader",
  "front",
  "forth",
  "onwards",
  "onward",
  "advancing",
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

export default IconForwardItem as IconComponentType;