import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconData: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 20 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 6C21.1046 6 22 5.10457 22 4C22 2.89543 21.1046 2 20 2C18.8954 2 18 2.89543 18 4C18 5.10457 18.8954 6 20 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 22C21.1046 22 22 21.1046 22 20C22 18.8954 21.1046 18 20 18C18.8954 18 18 18.8954 18 20C18 21.1046 18.8954 22 20 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M6 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 4H14C12 4 11 5 11 7V17C11 19 12 20 14 20H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 14.25C21.2426 14.25 22.25 13.2426 22.25 12C22.25 10.7574 21.2426 9.75 20 9.75C18.7574 9.75 17.75 10.7574 17.75 12C17.75 13.2426 18.7574 14.25 20 14.25Z" fill="currentColor" /><path d="M20 6.25C21.2426 6.25 22.25 5.24264 22.25 4C22.25 2.75736 21.2426 1.75 20 1.75C18.7574 1.75 17.75 2.75736 17.75 4C17.75 5.24264 18.7574 6.25 20 6.25Z" fill="currentColor" /><path d="M20 22.25C21.2426 22.25 22.25 21.2426 22.25 20C22.25 18.7574 21.2426 17.75 20 17.75C18.7574 17.75 17.75 18.7574 17.75 20C17.75 21.2426 18.7574 22.25 20 22.25Z" fill="currentColor" /><path d="M4 14.25C5.24264 14.25 6.25 13.2426 6.25 12C6.25 10.7574 5.24264 9.75 4 9.75C2.75736 9.75 1.75 10.7574 1.75 12C1.75 13.2426 2.75736 14.25 4 14.25Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M19 12.75C19.41 12.75 19.75 12.41 19.75 12C19.75 11.59 19.41 11.25 19 11.25H11.75V7C11.75 5.42 12.42 4.75 14 4.75H19C19.41 4.75 19.75 4.41 19.75 4C19.75 3.59 19.41 3.25 19 3.25H14C11.58 3.25 10.25 4.58 10.25 7V11.25H5C4.59 11.25 4.25 11.59 4.25 12C4.25 12.41 4.59 12.75 5 12.75H10.25V17C10.25 19.42 11.58 20.75 14 20.75H19C19.41 20.75 19.75 20.41 19.75 20C19.75 19.59 19.41 19.25 19 19.25H14C12.42 19.25 11.75 18.58 11.75 17V12.75H19Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconData as IconComponentType).keywords = [
  "data",
  "information",
  "informatics",
  "computer",
  "datafile",
  "datatype",
  "dataset",
  "databank",
  "database",
  "datasheet"
];

export default IconData as IconComponentType;