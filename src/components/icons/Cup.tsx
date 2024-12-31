import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCup: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.34" : "1"} d="M12.1504 16.5V18.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.15039 22H17.1504V21C17.1504 19.9 16.2504 19 15.1504 19H9.15039C8.05039 19 7.15039 19.9 7.15039 21V22V22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path d="M6.15039 22H18.1504" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 16C8.13 16 5 12.87 5 9V6C5 3.79 6.79 2 9 2H15C17.21 2 19 3.79 19 6V9C19 12.87 15.87 16 12 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M5.46906 11.6501C4.71906 11.4101 4.05906 10.9701 3.53906 10.4501C2.63906 9.4501 2.03906 8.2501 2.03906 6.8501C2.03906 5.4501 3.13906 4.3501 4.53906 4.3501H5.18906C4.98906 4.8101 4.88906 5.3201 4.88906 5.8501V8.8501C4.88906 9.8501 5.09906 10.7901 5.46906 11.6501Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M18.5293 11.6501C19.2793 11.4101 19.9393 10.9701 20.4593 10.4501C21.3593 9.4501 21.9593 8.2501 21.9593 6.8501C21.9593 5.4501 20.8593 4.3501 19.4593 4.3501H18.8093C19.0093 4.8101 19.1093 5.3201 19.1093 5.8501V8.8501C19.1093 9.8501 18.8993 10.7901 18.5293 11.6501Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18 20.5H17V20.25C17 19.15 16.1 18.25 15 18.25H12.75V15.96C12.5 15.99 12.25 16 12 16C11.75 16 11.5 15.99 11.25 15.96V18.25H9C7.9 18.25 7 19.15 7 20.25V20.5H6C5.59 20.5 5.25 20.84 5.25 21.25C5.25 21.66 5.59 22 6 22H18C18.41 22 18.75 21.66 18.75 21.25C18.75 20.84 18.41 20.5 18 20.5Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M5.5193 11.64C4.8593 11.39 4.2793 10.98 3.8193 10.52C2.8893 9.49 2.2793 8.26 2.2793 6.82C2.2793 5.38 3.4093 4.25 4.8493 4.25H5.4093C5.1493 4.78 4.9993 5.37 4.9993 6V9C4.9993 9.94 5.1793 10.83 5.5193 11.64Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.7205 6.82C21.7205 8.26 21.1105 9.49 20.1805 10.52C19.7205 10.98 19.1405 11.39 18.4805 11.64C18.8205 10.83 19.0005 9.94 19.0005 9V6C19.0005 5.37 18.8505 4.78 18.5905 4.25H19.1505C20.5905 4.25 21.7205 5.38 21.7205 6.82Z" fill="currentColor" /><path d="M15 2H9C6.79 2 5 3.79 5 6V9C5 12.87 8.13 16 12 16C15.87 16 19 12.87 19 9V6C19 3.79 17.21 2 15 2ZM14.84 8.45L14.22 9.21C14.12 9.32 14.05 9.54 14.06 9.69L14.12 10.67C14.16 11.27 13.73 11.58 13.17 11.36L12.26 11C12.12 10.95 11.88 10.95 11.74 11L10.83 11.36C10.27 11.58 9.84 11.27 9.88 10.67L9.94 9.69C9.95 9.54 9.88 9.32 9.78 9.21L9.16 8.45C8.77 7.99 8.94 7.48 9.52 7.33L10.47 7.09C10.62 7.05 10.8 6.91 10.88 6.78L11.41 5.96C11.74 5.45 12.26 5.45 12.59 5.96L13.12 6.78C13.2 6.91 13.38 7.05 13.53 7.09L14.48 7.33C15.06 7.48 15.23 7.99 14.84 8.45Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.8397 8.44989L14.2197 9.20989C14.1197 9.31989 14.0497 9.53989 14.0597 9.68989L14.1197 10.6699C14.1597 11.2699 13.7297 11.5799 13.1697 11.3599L12.2597 10.9999C12.1197 10.9499 11.8797 10.9499 11.7397 10.9999L10.8297 11.3599C10.2697 11.5799 9.83975 11.2699 9.87975 10.6699L9.93975 9.68989C9.94975 9.53989 9.87975 9.31989 9.77975 9.20989L9.15975 8.44989C8.76975 7.98989 8.93975 7.47989 9.51975 7.32989L10.4697 7.08989C10.6197 7.04989 10.7997 6.90989 10.8797 6.77989L11.4097 5.95989C11.7397 5.44989 12.2597 5.44989 12.5897 5.95989L13.1197 6.77989C13.1997 6.90989 13.3797 7.04989 13.5297 7.08989L14.4797 7.32989C15.0597 7.47989 15.2297 7.98989 14.8397 8.44989Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCup as IconComponentType).keywords = [
  "cup",
  "loving cup",
  "cupful",
  "transfuse",
  "chalice",
  "goblet",
  "bottle",
  "jar",
  "pot",
  "bowl"
];

export default IconCup as IconComponentType;