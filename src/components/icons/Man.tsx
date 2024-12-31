import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMan: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.25 21.5C14.5302 21.5 18 18.0302 18 13.75C18 9.46979 14.5302 6 10.25 6C5.96979 6 2.5 9.46979 2.5 13.75C2.5 18.0302 5.96979 21.5 10.25 21.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M21.5 2.5L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 2.5H21.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18 13.75C18 18.03 14.53 21.5 10.25 21.5C5.97 21.5 2.5 18.03 2.5 13.75C2.5 9.47 5.97 6 10.25 6C12.12 6 13.83 6.66 15.17 7.77H15.18C15.57 8.09 15.92 8.44 16.23 8.83C17.34 10.17 18 11.88 18 13.75Z" fill="currentColor" /><path d="M22.25 2.5V9C22.25 9.41 21.91 9.75 21.5 9.75C21.09 9.75 20.75 9.41 20.75 9V4.31L16.23 8.83C15.92 8.44 15.57 8.09 15.18 7.77L19.69 3.25H15C14.59 3.25 14.25 2.91 14.25 2.5C14.25 2.09 14.59 1.75 15 1.75H21.5C21.6 1.75 21.69 1.77 21.79 1.81C21.97 1.88 22.12 2.03 22.19 2.21C22.23 2.31 22.25 2.4 22.25 2.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMan as IconComponentType).keywords = [
  "man",
  "mankind",
  "humanity",
  "humankind",
  "human race",
  "homo",
  "gentleman",
  "valet",
  "world",
  "piece"
];

export default IconMan as IconComponentType;