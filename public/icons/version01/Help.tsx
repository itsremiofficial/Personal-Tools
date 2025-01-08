import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHelp: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={width} /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M15 9L19 5" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M5 19L9 15" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M9 9L5 5" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M19 19L15 15" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor" /><path d="M5.47912 19.5816L9.75186 15.3089C9.33517 15.0253 8.97484 14.665 8.69116 14.2483L4.41844 18.521C4.74507 18.9004 5.0997 19.255 5.47912 19.5816Z" fill="currentColor" /><path d="M4.41833 5.479L8.69106 9.75172C8.97473 9.33504 9.33504 8.97473 9.75172 8.69106L5.479 4.41833C5.09959 4.74496 4.74496 5.09959 4.41833 5.479Z" fill="currentColor" /><path d="M14.2483 8.69116L18.521 4.41844C18.9004 4.74507 19.255 5.0997 19.5816 5.47912L15.3089 9.75186C15.0253 9.33517 14.665 8.97484 14.2483 8.69116Z" fill="currentColor" /><path d="M19.5815 18.5209L15.3088 14.2482C15.0252 14.6648 14.6648 15.0252 14.2482 15.3088L18.5209 19.5815C18.9003 19.2549 19.2549 18.9003 19.5815 18.5209Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5816 18.5209C21.0889 16.7701 22 14.4915 22 12C22 9.50853 21.0889 7.22987 19.5816 5.47906L15.3089 9.75178C15.745 10.3925 16 11.1665 16 12C16 12.8335 15.745 13.6075 15.3089 14.2482L19.5816 18.5209Z" fill="currentColor" /><path d="M18.5209 19.5816C16.7701 21.0889 14.4915 22 12 22C9.50853 22 7.22987 21.0889 5.47906 19.5816L9.75178 15.3089C10.3925 15.745 11.1665 16 12 16C12.8335 16 13.6075 15.745 14.2482 15.3089L18.5209 19.5816Z" fill="currentColor" /><path d="M4.4184 18.5209L8.69112 14.2482C8.25495 13.6075 8 12.8335 8 12C8 11.1665 8.25495 10.3925 8.69112 9.75178L4.4184 5.47906C2.91114 7.22987 2 9.50853 2 12C2 14.4915 2.91114 16.7701 4.4184 18.5209Z" fill="currentColor" /><path d="M12 8C11.1665 8 10.3925 8.25495 9.75178 8.69112L5.47906 4.4184C7.22987 2.91114 9.50853 2 12 2C14.4915 2 16.7701 2.91114 18.5209 4.4184L14.2482 8.69112C13.6075 8.25495 12.8335 8 12 8Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHelp as IconComponentType).keywords = [
  "help",
  "aid",
  "service",
  "assistance",
  "assist",
  "helper",
  "avail",
  "facilitate",
  "supporter",
  "assistant"
];

export default IconHelp as IconComponentType;