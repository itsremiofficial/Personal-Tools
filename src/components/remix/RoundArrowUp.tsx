import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRoundArrowUp: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity={duotone ? "0.5" : "1"} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={width} /><path d="M12 16L12 8M12 8L15 11M12 8L9 11" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="currentColor" /><path d="M15.5303 10.4697C15.8232 10.7626 15.8232 11.2374 15.5303 11.5303C15.2374 11.8232 14.7626 11.8232 14.4697 11.5303L12.75 9.81066L12.75 16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16L11.25 9.81066L9.53033 11.5303C9.23744 11.8232 8.76256 11.8232 8.46967 11.5303C8.17678 11.2374 8.17678 10.7626 8.46967 10.4697L11.4697 7.46967C11.7626 7.17678 12.2374 7.17678 12.5303 7.46967L15.5303 10.4697Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22 12.0002C22 6.4774 17.5228 2.00024 12 2.00024C6.47715 2.00024 2 6.4774 2 12.0002C2 17.5231 6.47715 22.0002 12 22.0002C17.5228 22.0002 22 17.5231 22 12.0002ZM8.46967 11.5306C8.17678 11.2377 8.17678 10.7628 8.46967 10.4699L11.4697 7.46991C11.7626 7.17702 12.2374 7.17702 12.5303 7.46991L15.5303 10.4699C15.8232 10.7628 15.8232 11.2377 15.5303 11.5306C15.2374 11.8235 14.7626 11.8235 14.4697 11.5306L12.75 9.8109V16.0002C12.75 16.4145 12.4142 16.7502 12 16.7502C11.5858 16.7502 11.25 16.4145 11.25 16.0002V9.8109L9.53033 11.5306C9.23744 11.8235 8.76256 11.8235 8.46967 11.5306Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRoundArrowUp as IconComponentType).keywords = [
  "round",
  "arrow",
  "up",
  "orbicular",
  "rotund",
  "orbiculate",
  "discoidal",
  "disklike",
  "discoid",
  "ringlike",
  "globular",
  "globose",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "upbound",
  "upwardly",
  "ascending",
  "upward",
  "upwards",
  "rising",
  "astir",
  "ahead",
  "awake"
];

export default IconRoundArrowUp as IconComponentType;