import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconUserCirlceAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.4604 13.7299C13.0123 13.7299 14.2704 12.4718 14.2704 10.9199C14.2704 9.36794 13.0123 8.10986 11.4604 8.10986C9.90847 8.10986 8.65039 9.36794 8.65039 10.9199C8.65039 12.4718 9.90847 13.7299 11.4604 13.7299Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.6495 20.1998C16.6495 17.8698 14.3295 15.9697 11.4595 15.9697C8.58953 15.9697 6.26953 17.8598 6.26953 20.1998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21 12.5C21 17.75 16.75 22 11.5 22C6.25 22 2 17.75 2 12.5C2 7.25 6.25 3 11.5 3C12.81 3 14.06 3.25999 15.2 3.73999C15.07 4.13999 15 4.56 15 5C15 5.75 15.21 6.46 15.58 7.06C15.78 7.4 16.04 7.70997 16.34 7.96997C17.04 8.60997 17.97 9 19 9C19.44 9 19.86 8.92998 20.25 8.78998C20.73 9.92998 21 11.19 21 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M23 5C23 5.32 22.96 5.62999 22.88 5.92999C22.79 6.32999 22.63 6.72 22.42 7.06C21.94 7.87 21.17 8.49998 20.25 8.78998C19.86 8.92998 19.44 9 19 9C17.97 9 17.04 8.60997 16.34 7.96997C16.04 7.70997 15.78 7.4 15.58 7.06C15.21 6.46 15 5.75 15 5C15 4.56 15.07 4.13999 15.2 3.73999C15.39 3.15999 15.71 2.64002 16.13 2.21002C16.86 1.46002 17.88 1 19 1C20.18 1 21.25 1.51002 21.97 2.33002C22.61 3.04002 23 3.98 23 5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.4898 4.97998H17.5098" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 3.52002V6.51001" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16.6495 20.2V20.49C15.1695 21.44 13.3995 22 11.4995 22C9.56953 22 7.76953 21.42 6.26953 20.43V20.2C6.26953 17.87 8.59953 15.97 11.4595 15.97C14.3295 15.97 16.6495 17.87 16.6495 20.2Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21 12.5C21 15.85 19.27 18.79 16.65 20.49V20.2C16.65 17.87 14.33 15.97 11.46 15.97C8.6 15.97 6.27 17.87 6.27 20.2V20.43C3.7 18.73 2 15.82 2 12.5C2 7.25 6.25 3 11.5 3C12.81 3 14.06 3.25999 15.2 3.73999C15.07 4.13999 15 4.56 15 5C15 5.75 15.21 6.46 15.58 7.06C15.78 7.4 16.04 7.70997 16.34 7.96997C17.04 8.60997 17.97 9 19 9C19.44 9 19.86 8.92998 20.25 8.78998C20.73 9.92998 21 11.19 21 12.5Z" fill="currentColor" /><path d="M21.97 2.33002C21.25 1.51002 20.18 1 19 1C17.88 1 16.86 1.46002 16.13 2.21002C15.71 2.64002 15.39 3.15999 15.2 3.73999C15.07 4.13999 15 4.56 15 5C15 5.75 15.21 6.46 15.58 7.06C15.78 7.4 16.04 7.70997 16.34 7.96997C17.04 8.60997 17.97 9 19 9C19.44 9 19.86 8.92998 20.25 8.78998C21.17 8.49998 21.94 7.87 22.42 7.06C22.63 6.72 22.79 6.32999 22.88 5.92999C22.96 5.62999 23 5.32 23 5C23 3.98 22.61 3.04002 21.97 2.33002ZM20.49 5.72998H19.75V6.51001C19.75 6.92001 19.41 7.26001 19 7.26001C18.59 7.26001 18.25 6.92001 18.25 6.51001V5.72998H17.51C17.1 5.72998 16.76 5.38998 16.76 4.97998C16.76 4.56998 17.1 4.22998 17.51 4.22998H18.25V3.52002C18.25 3.11002 18.59 2.77002 19 2.77002C19.41 2.77002 19.75 3.11002 19.75 3.52002V4.22998H20.49C20.9 4.22998 21.24 4.56998 21.24 4.97998C21.24 5.38998 20.91 5.72998 20.49 5.72998Z" fill="currentColor" /><path d="M11.4604 14.7299C13.0123 14.7299 14.2704 13.4718 14.2704 11.9199C14.2704 10.3679 13.0123 9.10986 11.4604 9.10986C9.90847 9.10986 8.65039 10.3679 8.65039 11.9199C8.65039 13.4718 9.90847 14.7299 11.4604 14.7299Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUserCirlceAdd as IconComponentType).keywords = [
  "user",
  "cirlce",
  "add",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "customer",
  "client",
  "employer",
  "consumer",
  "employee",
  "total",
  "sum up",
  "tot up",
  "add up",
  "sum",
  "summate",
  "impart",
  "contribute",
  "supply"
];

export default IconUserCirlceAdd as IconComponentType;