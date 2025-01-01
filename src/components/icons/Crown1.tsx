import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCrown1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6992 18.9799H7.29922C6.87922 18.9799 6.40922 18.6499 6.26922 18.2499L2.12922 6.66986C1.53922 5.00986 2.22922 4.49986 3.64922 5.51986L7.54922 8.30986C8.19922 8.75986 8.93922 8.52986 9.21922 7.79986L10.9792 3.10986C11.5392 1.60986 12.4692 1.60986 13.0292 3.10986L14.7892 7.79986C15.0692 8.52986 15.8092 8.75986 16.4492 8.30986L20.1092 5.69986C21.6692 4.57986 22.4192 5.14986 21.7792 6.95986L17.7392 18.2699C17.5892 18.6499 17.1192 18.9799 16.6992 18.9799Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M6.5 22H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M9.5 14H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.0003 5.71V15.29C22.0003 18.05 19.7603 20.29 17.0003 20.29H7.00031C6.54031 20.29 6.10031 20.23 5.67031 20.11C5.05031 19.94 4.85031 19.15 5.31031 18.69L15.9403 8.06C16.1603 7.84 16.4903 7.79 16.8003 7.85C17.1203 7.91 17.4703 7.82 17.7203 7.58L20.2903 5C21.2303 4.06 22.0003 4.37 22.0003 5.71Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.64 7.36002L4.17 17.83C3.69 18.31 2.89 18.19 2.57 17.59C2.2 16.91 2 16.12 2 15.29V5.71002C2 4.37002 2.77 4.06002 3.71 5.00002L6.29 7.59002C6.68 7.97002 7.32 7.97002 7.71 7.59002L11.29 4.00002C11.68 3.61002 12.32 3.61002 12.71 4.00002L14.65 5.94002C15.03 6.33002 15.03 6.97002 14.64 7.36002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCrown1 as IconComponentType).keywords = [
  "crown",
  "1",
  "diadem",
  "coronate",
  "pate",
  "tip",
  "crest",
  "summit",
  "top",
  "peak",
  "treetop",
  "wash out",
  "cut up",
  "pull out",
  "pull in",
  "pull up",
  "pull over",
  "work out",
  "ride down",
  "rush hour"
];

export default IconCrown1 as IconComponentType;