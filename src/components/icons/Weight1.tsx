import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconWeight1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1797 18C19.5797 18 20.1797 16.65 20.1797 15V9C20.1797 7.35 19.5797 6 17.1797 6C14.7797 6 14.1797 7.35 14.1797 9V15C14.1797 16.65 14.7797 18 17.1797 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.82031 18C4.42031 18 3.82031 16.65 3.82031 15V9C3.82031 7.35 4.42031 6 6.82031 6C9.22031 6 9.82031 7.35 9.82031 9V15C9.82031 16.65 9.22031 18 6.82031 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.82031 12H14.1803" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22.5 14.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M1.5 14.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17.1797 5.25C15.4697 5.25 13.4297 5.9 13.4297 9V15C13.4297 18.1 15.4697 18.75 17.1797 18.75C18.8897 18.75 20.9297 18.1 20.9297 15V9C20.9297 5.9 18.8897 5.25 17.1797 5.25Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M6.82031 5.25C5.11031 5.25 3.07031 5.9 3.07031 9V15C3.07031 18.1 5.11031 18.75 6.82031 18.75C8.53031 18.75 10.5703 18.1 10.5703 15V9C10.5703 5.9 8.53031 5.25 6.82031 5.25Z" fill="currentColor" /><path d="M13.4303 11.25H10.5703V12.75H13.4303V11.25Z" fill="currentColor" /><path d="M22.5 15.25C22.09 15.25 21.75 14.91 21.75 14.5V9.5C21.75 9.09 22.09 8.75 22.5 8.75C22.91 8.75 23.25 9.09 23.25 9.5V14.5C23.25 14.91 22.91 15.25 22.5 15.25Z" fill="currentColor" /><path d="M1.5 15.25C1.09 15.25 0.75 14.91 0.75 14.5V9.5C0.75 9.09 1.09 8.75 1.5 8.75C1.91 8.75 2.25 9.09 2.25 9.5V14.5C2.25 14.91 1.91 15.25 1.5 15.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWeight1 as IconComponentType).keywords = [
  "weight",
  "1",
  "angle",
  "burthen",
  "slant",
  "weight down",
  "burden",
  "exercising weight",
  "system of weights",
  "weight unit",
  "solid",
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

export default IconWeight1 as IconComponentType;