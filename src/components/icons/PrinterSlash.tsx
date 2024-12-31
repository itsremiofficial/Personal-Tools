import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPrinterSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.25 7H16.75V5C16.75 3 16 2 13.75 2H10.25C8 2 7.25 3 7.25 5V7Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.9703 15H16.0003V19C16.0003 21 15.0003 22 13.0003 22H11.0003C9.31031 22 8.33031 21.29 8.07031 19.86" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 18C4 18 3 17 3 15V10C3 8 4 7 6 7H16.59" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.97 7.52002C20.66 8.00002 21 8.83002 21 10V15C21 17 20 18 18 18H16V15H13" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17 15H15.79" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7 11H9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 2L2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M6 7C4 7 3 8 3 10V15C3 17 4 18 6 18L8 16V15H9L17 7H6ZM7 11.75C6.59 11.75 6.25 11.41 6.25 11C6.25 10.59 6.59 10.25 7 10.25H9C9.41 10.25 9.75 10.59 9.75 11C9.75 11.41 9.41 11.75 9 11.75H7Z" fill="currentColor" /><path d="M9 15L8 16V15H9Z" fill="currentColor" /><path d="M17 5V7H7V5C7 3.34 8.34 2 10 2H14C15.66 2 17 3.34 17 5Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M22.5303 1.46967C22.8232 1.76256 22.8232 2.23744 22.5303 2.53033L2.53033 22.5303C2.23744 22.8232 1.76256 22.8232 1.46967 22.5303C1.17678 22.2374 1.17678 21.7626 1.46967 21.4697L21.4697 1.46967C21.7626 1.17678 22.2374 1.17678 22.5303 1.46967Z" fill="currentColor" /><path d="M9.75 11C9.75 11.41 9.41 11.75 9 11.75H7C6.59 11.75 6.25 11.41 6.25 11C6.25 10.59 6.59 10.25 7 10.25H9C9.41 10.25 9.75 10.59 9.75 11Z" fill="currentColor" /><path d="M17.75 15C17.75 15.41 17.41 15.75 17 15.75H11.25L12.75 14.25H17C17.41 14.25 17.75 14.59 17.75 15Z" fill="currentColor" /><path d="M16 15V19C16 20.66 14.66 22 13 22H11C9.34 22 8 20.66 8 19L12 15H16Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21 10.0001V15.0001C21 17.0001 20 18.0001 18 18.0001H16V15.0001H12L19.67 7.33008C20.56 7.78008 21 8.67008 21 10.0001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPrinterSlash as IconComponentType).keywords = [
  "printer",
  "slash",
  "pressman",
  "printing machine",
  "printout",
  "copier",
  "printing",
  "impression",
  "print",
  "ink",
  "typesetting",
  "flog",
  "gash",
  "lash",
  "cut",
  "slice",
  "whip",
  "thrash",
  "trounce",
  "thrash about"
];

export default IconPrinterSlash as IconComponentType;