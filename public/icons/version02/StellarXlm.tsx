import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconStellarXlm: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0299 4.99C15.7699 4.2 14.2699 3.75 12.6699 3.75C8.10992 3.75 4.41992 7.44 4.41992 12C4.41992 12.76 4.5199 13.49 4.7099 14.19" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M2.66992 16L22.6699 5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M8.29004 18.99C9.56004 19.79 11.06 20.25 12.67 20.25C17.23 20.25 20.92 16.56 20.92 12C20.92 11.18 20.8 10.38 20.58 9.64001" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6699 8.5L2.66992 19.5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path d="M23.33 4.64C23.13 4.28 22.67 4.14 22.31 4.34L5.37 13.66C5.25 13.12 5.16999 12.56 5.16999 12C5.16999 7.86 8.52999 4.5 12.67 4.5C14.08 4.5 15.45 4.89 16.63 5.63C16.98 5.85 17.44 5.74 17.66 5.39C17.88 5.04 17.77 4.58 17.42 4.36C16 3.47 14.36 3 12.67 3C7.70999 3 3.66999 7.04 3.66999 12C3.66999 12.81 3.77999 13.61 3.98999 14.39C3.98999 14.4 4 14.4 4 14.41L2.31 15.34C1.95 15.54 1.81001 16 2.01001 16.36C2.15001 16.61 2.39999 16.75 2.66999 16.75C2.78999 16.75 2.91997 16.72 3.02997 16.66L23.03 5.66C23.39 5.46 23.53 5 23.33 4.64Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M23.33 8.13997C23.13 7.77997 22.67 7.63997 22.31 7.83997L20.2 8.99997C20.17 9.01997 20.13 9.02997 20.1 9.05997L2.31 18.84C1.95 19.04 1.81001 19.5 2.01001 19.86C2.15001 20.11 2.39999 20.25 2.66999 20.25C2.78999 20.25 2.91997 20.22 3.02997 20.16L20.06 10.79C20.12 11.19 20.17 11.59 20.17 12C20.17 16.14 16.81 19.5 12.67 19.5C11.25 19.5 9.88001 19.1 8.69001 18.36C8.34001 18.14 7.87998 18.25 7.65998 18.6C7.43998 18.95 7.53997 19.41 7.89997 19.63C9.32997 20.53 10.98 21 12.68 21C17.64 21 21.68 16.96 21.68 12C21.68 11.33 21.58 10.68 21.44 10.04L23.04 9.15997C23.39 8.95997 23.53 8.49997 23.33 8.13997Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.33 4.64C23.13 4.28 22.67 4.14 22.31 4.34L5.37 13.66C5.25 13.12 5.16999 12.56 5.16999 12C5.16999 7.86 8.52999 4.5 12.67 4.5C14.08 4.5 15.45 4.89 16.63 5.63C16.98 5.85 17.44 5.74 17.66 5.39C17.88 5.04 17.77 4.58 17.42 4.36C16 3.47 14.36 3 12.67 3C7.70999 3 3.66999 7.04 3.66999 12C3.66999 12.81 3.77999 13.61 3.98999 14.39C3.98999 14.4 4 14.4 4 14.41L2.31 15.34C1.95 15.54 1.81001 16 2.01001 16.36C2.15001 16.61 2.39999 16.75 2.66999 16.75C2.78999 16.75 2.91997 16.72 3.02997 16.66L23.03 5.66C23.39 5.46 23.53 5 23.33 4.64Z" fill="none" /><path d="M23.33 8.14C23.13 7.78 22.67 7.64 22.31 7.84L20.2 9C20.17 9.02 20.13 9.03 20.1 9.06L2.31 18.84C1.95 19.04 1.81001 19.5 2.01001 19.86C2.15001 20.11 2.39999 20.25 2.66999 20.25C2.78999 20.25 2.91997 20.22 3.02997 20.16L20.06 10.79C20.12 11.19 20.17 11.59 20.17 12C20.17 16.14 16.81 19.5 12.67 19.5C11.25 19.5 9.88001 19.1 8.69001 18.36C8.34001 18.14 7.87998 18.25 7.65998 18.6C7.43998 18.95 7.53997 19.41 7.89997 19.63C9.32997 20.53 10.98 21 12.68 21C17.64 21 21.68 16.96 21.68 12C21.68 11.33 21.58 10.68 21.44 10.04L23.04 9.16C23.39 8.96 23.53 8.5 23.33 8.14Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconStellarXlm as IconComponentType).keywords = [
  "stellar",
  "xlm",
  "star",
  "astral",
  "leading",
  "starring",
  "prima",
  "major",
  "stellate",
  "shiny",
  "bright"
];

export default IconStellarXlm as IconComponentType;