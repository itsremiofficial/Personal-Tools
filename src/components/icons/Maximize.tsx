import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMaximize: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 10V6H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 14V18H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 10V6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 14V18H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M18 9.25C17.59 9.25 17.25 9.59 17.25 10V11.25H12.75V6.75H14C14.41 6.75 14.75 6.41 14.75 6C14.75 5.59 14.41 5.25 14 5.25H10C9.59 5.25 9.25 5.59 9.25 6C9.25 6.41 9.59 6.75 10 6.75H11.25V11.25H6.75V10C6.75 9.59 6.41 9.25 6 9.25C5.59 9.25 5.25 9.59 5.25 10V14C5.25 14.41 5.59 14.75 6 14.75C6.41 14.75 6.75 14.41 6.75 14V12.75H11.25V17.25H10C9.59 17.25 9.25 17.59 9.25 18C9.25 18.41 9.59 18.75 10 18.75H14C14.41 18.75 14.75 18.41 14.75 18C14.75 17.59 14.41 17.25 14 17.25H12.75V12.75H17.25V14C17.25 14.41 17.59 14.75 18 14.75C18.41 14.75 18.75 14.41 18.75 14V10C18.75 9.59 18.41 9.25 18 9.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMaximize as IconComponentType).keywords = [
  "maximize",
  "max",
  "maximum",
  "maximal",
  "optimum",
  "broaden",
  "optimal",
  "maximisation",
  "maximise",
  "optimizing"
];

export default IconMaximize as IconComponentType;