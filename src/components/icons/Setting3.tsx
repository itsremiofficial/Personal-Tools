import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSetting3: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M15.5703 18.4996V14.5996" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.5703 7.45V5.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.5697 12.6502C17.0057 12.6502 18.1697 11.4861 18.1697 10.0502C18.1697 8.61426 17.0057 7.4502 15.5697 7.4502C14.1338 7.4502 12.9697 8.61426 12.9697 10.0502C12.9697 11.4861 14.1338 12.6502 15.5697 12.6502Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.42969 18.4998V16.5498" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.42969 9.4V5.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.43008 16.5496C9.86602 16.5496 11.0301 15.3855 11.0301 13.9496C11.0301 12.5137 9.86602 11.3496 8.43008 11.3496C6.99414 11.3496 5.83008 12.5137 5.83008 13.9496C5.83008 15.3855 6.99414 16.5496 8.43008 16.5496Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M15.5801 19.2501C15.1701 19.2501 14.8301 18.9101 14.8301 18.5001V14.6001C14.8301 14.1901 15.1701 13.8501 15.5801 13.8501C15.9901 13.8501 16.3301 14.1901 16.3301 14.6001V18.5001C16.3301 18.9101 15.9901 19.2501 15.5801 19.2501Z" fill="currentColor" /><path d="M15.5801 8.2C15.1701 8.2 14.8301 7.86 14.8301 7.45V5.5C14.8301 5.09 15.1701 4.75 15.5801 4.75C15.9901 4.75 16.3301 5.09 16.3301 5.5V7.45C16.3301 7.86 15.9901 8.2 15.5801 8.2Z" fill="currentColor" /><path d="M8.41992 19.2498C8.00992 19.2498 7.66992 18.9098 7.66992 18.4998V16.5498C7.66992 16.1398 8.00992 15.7998 8.41992 15.7998C8.82992 15.7998 9.16992 16.1398 9.16992 16.5498V18.4998C9.16992 18.9098 8.83992 19.2498 8.41992 19.2498Z" fill="currentColor" /><path d="M8.41992 10.15C8.00992 10.15 7.66992 9.81 7.66992 9.4V5.5C7.66992 5.09 8.00992 4.75 8.41992 4.75C8.82992 4.75 9.16992 5.09 9.16992 5.5V9.4C9.16992 9.81 8.83992 10.15 8.41992 10.15Z" fill="currentColor" /><path d="M15.5796 7.33008C14.0796 7.33008 12.8496 8.55008 12.8496 10.0501C12.8496 11.5501 14.0696 12.7801 15.5796 12.7801C17.0796 12.7801 18.2996 11.5601 18.2996 10.0501C18.2996 8.54008 17.0796 7.33008 15.5796 7.33008Z" fill="currentColor" /><path d="M8.41922 11.23C6.91922 11.23 5.69922 12.45 5.69922 13.96C5.69922 15.47 6.91922 16.68 8.41922 16.68C9.91922 16.68 11.1492 15.46 11.1492 13.96C11.1492 12.46 9.92922 11.23 8.41922 11.23Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSetting3 as IconComponentType).keywords = [
  "setting",
  "3",
  "scene",
  "stage setting",
  "mise en scene",
  "scope",
  "background",
  "mount",
  "place setting",
  "scenario",
  "context",
  "omega",
  "wash out",
  "cut up",
  "pull out",
  "pull up",
  "pull over",
  "pull in",
  "work out",
  "ride down"
];

export default IconSetting3 as IconComponentType;