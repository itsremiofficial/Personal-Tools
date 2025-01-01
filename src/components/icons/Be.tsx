import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBe: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12H9C10.66 12 12 13.34 12 15C12 16.66 10.66 18 9 18H3C2.45 18 2 17.55 2 17V7C2 6.45 2.45 6 3 6H8C9.66 6 11 7.34 11 9C11 10.66 9.66 12 8 12H2Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M14 14H22C22 11.79 20.21 10 18 10C15.79 10 14 11.79 14 14ZM14 14C14 16.21 15.79 18 18 18H19.67" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19.5 7.5H16.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9 18.75H3C2.04 18.75 1.25 17.96 1.25 17V7C1.25 6.04 2.04 5.25 3 5.25H8C10.07 5.25 11.75 6.93 11.75 9C11.75 10.03 11.33 10.96 10.66 11.64C11.9 12.25 12.75 13.53 12.75 15C12.75 17.07 11.07 18.75 9 18.75ZM2.75 12.75V17C2.75 17.14 2.86 17.25 3 17.25H9C10.24 17.25 11.25 16.24 11.25 15C11.25 13.76 10.24 12.75 9 12.75H2.75ZM2.75 11.25H8C9.24 11.25 10.25 10.24 10.25 9C10.25 7.76 9.24 6.75 8 6.75H3C2.86 6.75 2.75 6.86 2.75 7V11.25Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M19.67 18.75H18C15.38 18.75 13.25 16.62 13.25 14C13.25 11.38 15.38 9.25 18 9.25C20.62 9.25 22.75 11.38 22.75 14C22.75 14.41 22.41 14.75 22 14.75H14.84C15.18 16.18 16.47 17.25 18 17.25H19.67C20.08 17.25 20.42 17.59 20.42 18C20.42 18.41 20.08 18.75 19.67 18.75ZM14.84 13.25H21.17C20.83 11.82 19.54 10.75 18.01 10.75C16.48 10.75 15.18 11.82 14.84 13.25Z" fill="currentColor" /><path d="M19.5 8.25H16.5C16.09 8.25 15.75 7.91 15.75 7.5C15.75 7.09 16.09 6.75 16.5 6.75H19.5C19.91 6.75 20.25 7.09 20.25 7.5C20.25 7.91 19.91 8.25 19.5 8.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBe as IconComponentType).keywords = [
  "be",
  "living thing",
  "existence",
  "beingness",
  "life form",
  "organism",
  "hib",
  "cgs",
  "osi",
  "ocs"
];

export default IconBe as IconComponentType;