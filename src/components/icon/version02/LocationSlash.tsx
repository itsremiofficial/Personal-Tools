import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconLocationSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0898 12.9999C10.1698 12.4599 9.5498 11.4599 9.5498 10.3099C9.5498 8.58994 10.9398 7.18994 12.6698 7.18994C13.8198 7.18994 14.8198 7.80994 15.3598 8.73994" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M6.66 17.8101C4.82 15.3001 3.48 12.0901 4.3 8.49011C5.95 1.23011 15.24 0.0601072 19.35 4.98011" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M21.0496 8.5C22.1996 13.58 19.0396 17.88 16.2696 20.54C14.2596 22.48 11.0796 22.48 9.05957 20.54" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6699 2L2.66992 22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.5595 5.11L6.45955 18.21C4.56955 15.64 3.20955 12.36 4.04955 8.69C4.56955 6.38 5.84955 4.71 7.42955 3.61C9.00955 2.52 10.8995 2 12.6695 2C15.1095 2 17.7895 2.98 19.5595 5.11Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.4496 20.98C15.3896 22 14.0296 22.51 12.6696 22.51C11.3096 22.51 9.94957 21.99 8.88957 20.97C8.52957 20.63 8.16957 20.25 7.80957 19.86L20.7096 6.95996C20.9596 7.49996 21.1496 8.06996 21.2896 8.69996C22.4596 13.86 19.2996 18.22 16.4496 20.98Z" fill="currentColor" /><path d="M22.4395 2.23006C22.1395 1.92006 21.6595 1.92006 21.3595 2.23006L15.6895 7.90006L14.9695 8.62006C14.4295 7.88006 13.5795 7.44006 12.6695 7.44006C11.0895 7.44006 9.79949 8.73006 9.79949 10.3101C9.79949 11.2101 10.2395 12.0601 10.9795 12.6101L2.89949 20.6901C2.58949 20.9901 2.58949 21.4701 2.89949 21.7701C3.04949 21.9201 3.23949 22.0001 3.43949 22.0001C3.63949 22.0001 3.82949 21.9201 3.97949 21.7701L22.4395 3.31006C22.7495 3.01006 22.7495 2.53006 22.4395 2.23006Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_12_64837)"><path d="M16.4496 20.98C15.3896 22 14.0296 22.51 12.6696 22.51C11.3096 22.51 9.94957 21.99 8.88957 20.97C8.52957 20.63 8.16957 20.25 7.80957 19.86L20.7096 6.95996C20.9596 7.49996 21.1496 8.06996 21.2896 8.69996C22.4596 13.86 19.2996 18.22 16.4496 20.98Z" fill="currentColor" /><path d="M22.4398 2.22988C22.1398 1.92988 21.6498 1.92988 21.3498 2.22988L2.8998 20.6899C2.5998 20.9899 2.5998 21.4799 2.8998 21.7799C3.0498 21.9199 3.2398 21.9999 3.4398 21.9999C3.6398 21.9999 3.8298 21.9199 3.9798 21.7699L22.4398 3.30988C22.7498 3.00988 22.7498 2.52988 22.4398 2.22988Z" fill="currentColor" /><path d="M9.51955 10.31C9.51955 8.57 10.9295 7.16 12.6695 7.16C13.9795 7.16 15.0995 7.96 15.5795 9.1L19.5595 5.12C17.7895 2.98 15.1095 2 12.6695 2C10.8995 2 9.00955 2.52 7.42955 3.61C5.84955 4.71 4.56955 6.38 4.04955 8.69C3.20955 12.36 4.56955 15.64 6.45955 18.21L11.4595 13.21C10.3195 12.74 9.51955 11.61 9.51955 10.31Z" fill="currentColor" /></g><defs><clipPath ><rect width="24" height="24" fill="none" transform="translate(0.669922)" /></clipPath></defs></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLocationSlash as IconComponentType).keywords = [
  "location",
  "slash",
  "position",
  "placement",
  "positioning",
  "localization",
  "localisation",
  "emplacement",
  "fix",
  "locating",
  "situating",
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

export default IconLocationSlash as IconComponentType;