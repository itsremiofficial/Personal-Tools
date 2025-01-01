import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconIllustrator: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M6.5 16L10 8L13.6 16" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.2998 13.2998H12.6998" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path d="M16.0996 16.0002V10.7002" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.1406 8.03418V8.03418" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.82 4.17 21.99 7.81 21.99H16.18C19.82 21.99 21.99 19.82 21.99 16.18V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M10.8905 7.8001C10.7905 7.5101 10.5205 7.30009 10.2105 7.29009C9.89047 7.27009 9.61047 7.45009 9.49047 7.73009L5.96047 15.6601C5.79047 16.0401 5.96047 16.4801 6.34047 16.6501C6.72047 16.8201 7.16047 16.6501 7.33047 16.2701L8.31047 14.0701H11.3905L12.1005 16.2001C12.2005 16.5101 12.5005 16.7101 12.8105 16.7101C12.8905 16.7101 12.9705 16.7001 13.0505 16.6701C13.4405 16.5401 13.6505 16.1101 13.5205 15.7201L10.8905 7.8001ZM8.98047 12.5701L10.0805 10.1001L10.9005 12.5701H8.98047Z" fill="currentColor" /><path d="M16.3496 9.93018C15.9396 9.93018 15.5996 10.2702 15.5996 10.6802V15.9702C15.5996 16.3802 15.9396 16.7202 16.3496 16.7202C16.7596 16.7202 17.0996 16.3802 17.0996 15.9702V10.6802C17.0996 10.2602 16.7596 9.93018 16.3496 9.93018Z" fill="currentColor" /><path d="M17.2696 7.65C17.2196 7.53 17.1496 7.42 17.0496 7.33C16.7796 7.05 16.3296 6.96 15.9596 7.11C15.8396 7.16 15.7296 7.23 15.6396 7.33C15.5496 7.42 15.4796 7.53 15.4196 7.65C15.3696 7.77 15.3496 7.9 15.3496 8.03C15.3496 8.17 15.3696 8.29 15.4196 8.42C15.4696 8.54 15.5496 8.65001 15.6396 8.74001C15.8296 8.93001 16.0796 9.03 16.3496 9.03C16.4796 9.03 16.6096 9.01001 16.7296 8.96001C16.8496 8.91001 16.9596 8.83001 17.0496 8.74001C17.1496 8.65001 17.2196 8.54 17.2696 8.42C17.3196 8.3 17.3496 8.17 17.3496 8.03C17.3496 7.9 17.3196 7.77 17.2696 7.65Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconIllustrator as IconComponentType).keywords = [
  "illustrator",
  "cartoonist",
  "artist",
  "designer",
  "draftsperson",
  "draftsman",
  "artists",
  "illustrations",
  "animator",
  "author"
];

export default IconIllustrator as IconComponentType;