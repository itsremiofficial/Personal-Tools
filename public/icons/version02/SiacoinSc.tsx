import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSiacoinSc: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.63989 2.84C9.86989 2.3 11.2299 2 12.6699 2C18.1899 2 22.6699 6.48 22.6699 12C22.6699 17.52 18.1899 22 12.6699 22C7.14992 22 2.66992 17.52 2.66992 12C2.66992 10.59 2.95993 9.24 3.48993 8.02" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.6699 16.25V12C16.6699 9.65 14.7699 7.75 12.4199 7.75C10.0699 7.75 8.16992 9.65 8.16992 12C8.16992 14.35 10.0699 16.25 12.4199 16.25H16.6699Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5.66992 6.5C6.49835 6.5 7.16992 5.82843 7.16992 5C7.16992 4.17157 6.49835 3.5 5.66992 3.5C4.84149 3.5 4.16992 4.17157 4.16992 5C4.16992 5.82843 4.84149 6.5 5.66992 6.5Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22.75C6.73992 22.75 1.91992 17.93 1.91992 12C1.91992 10.51 2.21994 9.08 2.80994 7.72C2.97994 7.34 3.41993 7.17 3.79993 7.33C4.17993 7.5 4.34994 7.94 4.18994 8.32C3.68994 9.48 3.42993 10.72 3.42993 12C3.42993 17.1 7.57993 21.25 12.6799 21.25C17.7799 21.25 21.9299 17.1 21.9299 12C21.9299 6.9 17.7699 2.75 12.6699 2.75C11.3799 2.75 10.12 3.01 8.94995 3.53C8.57995 3.7 8.1299 3.53 7.9599 3.15C7.7899 2.77 7.9599 2.33 8.3399 2.16C9.7099 1.56 11.1599 1.25 12.6699 1.25C18.5999 1.25 23.4199 6.07 23.4199 12C23.4199 17.93 18.5999 22.75 12.6699 22.75Z" fill="currentColor" /><path d="M16.6699 15.25V12C16.6699 9.65 14.7699 7.75 12.4199 7.75C10.0699 7.75 8.16992 9.65 8.16992 12C8.16992 14.35 10.0699 16.25 12.4199 16.25H15.6699C16.2199 16.25 16.6699 15.8 16.6699 15.25Z" fill="currentColor" /><path d="M5.67004 6.88C6.70834 6.88 7.55005 6.03829 7.55005 5C7.55005 3.9617 6.70834 3.12 5.67004 3.12C4.63175 3.12 3.79004 3.9617 3.79004 5C3.79004 6.03829 4.63175 6.88 5.67004 6.88Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 22.75C6.73992 22.75 1.91992 17.93 1.91992 12C1.91992 10.51 2.21994 9.08 2.80994 7.72C2.97994 7.34 3.41993 7.17 3.79993 7.33C4.17993 7.5 4.34994 7.94001 4.18994 8.32001C3.68994 9.48001 3.42993 10.72 3.42993 12C3.42993 17.1 7.57993 21.25 12.6799 21.25C17.7799 21.25 21.9299 17.1 21.9299 12C21.9299 6.9 17.7799 2.75 12.6799 2.75C11.3899 2.75 10.1299 3.01 8.9599 3.53C8.5899 3.7 8.13991 3.52999 7.96991 3.14999C7.79991 2.76999 7.96991 2.33 8.34991 2.16C9.71991 1.56 11.1699 1.25 12.6799 1.25C18.6099 1.25 23.4299 6.07 23.4299 12C23.4299 17.93 18.5999 22.75 12.6699 22.75Z" fill="none" /><path d="M16.6699 15.25V12C16.6699 9.65 14.7699 7.75 12.4199 7.75C10.0699 7.75 8.16992 9.65 8.16992 12C8.16992 14.35 10.0699 16.25 12.4199 16.25H15.6699C16.2199 16.25 16.6699 15.8 16.6699 15.25Z" fill="none" /><path d="M5.67004 6.88C6.70834 6.88 7.55005 6.0383 7.55005 5C7.55005 3.9617 6.70834 3.12 5.67004 3.12C4.63175 3.12 3.79004 3.9617 3.79004 5C3.79004 6.0383 4.63175 6.88 5.67004 6.88Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSiacoinSc as IconComponentType).keywords = [
  "siacoin",
  "sc",
  "scandium",
  "security council",
  "atomic number 21",
  "pml",
  "pascal",
  "ssb",
  "dlo",
  "faber",
  "dsb"
];

export default IconSiacoinSc as IconComponentType;