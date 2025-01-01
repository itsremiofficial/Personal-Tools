import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconListArrowDownMinimalistic: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M20 6.00024L3 6.00024" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M11 16.0002H3" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M12 11.0002L3 11.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M15 14.5002L17.5 17.0002M17.5 17.0002L20 14.5002M17.5 17.0002V9.00024" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M2.25 6.00024C2.25 5.58603 2.58579 5.25024 3 5.25024H20C20.4142 5.25024 20.75 5.58603 20.75 6.00024C20.75 6.41446 20.4142 6.75024 20 6.75024H3C2.58579 6.75024 2.25 6.41446 2.25 6.00024ZM2.25 11.0002C2.25 10.586 2.58579 10.2502 3 10.2502H12C12.4142 10.2502 12.75 10.586 12.75 11.0002C12.75 11.4145 12.4142 11.7502 12 11.7502H3C2.58579 11.7502 2.25 11.4145 2.25 11.0002ZM2.25 16.0002C2.25 15.586 2.58579 15.2502 3 15.2502H11C11.4142 15.2502 11.75 15.586 11.75 16.0002C11.75 16.4145 11.4142 16.7502 11 16.7502H3C2.58579 16.7502 2.25 16.4145 2.25 16.0002Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.9697 17.5306C17.2626 17.8235 17.7374 17.8235 18.0303 17.5306L20.5303 15.0306C20.8232 14.7377 20.8232 14.2628 20.5303 13.9699C20.2374 13.677 19.7626 13.677 19.4697 13.9699L18.25 15.1896V9.00024C18.25 8.58603 17.9142 8.25024 17.5 8.25024C17.0858 8.25024 16.75 8.58603 16.75 9.00024V15.1896L15.5303 13.9699C15.2374 13.677 14.7626 13.677 14.4697 13.9699C14.1768 14.2628 14.1768 14.7377 14.4697 15.0306L16.9697 17.5306Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.25 6.00024C2.25 5.58603 2.58579 5.25024 3 5.25024H20C20.4142 5.25024 20.75 5.58603 20.75 6.00024C20.75 6.41446 20.4142 6.75024 20 6.75024H3C2.58579 6.75024 2.25 6.41446 2.25 6.00024ZM2.25 11.0002C2.25 10.586 2.58579 10.2502 3 10.2502H12C12.4142 10.2502 12.75 10.586 12.75 11.0002C12.75 11.4145 12.4142 11.7502 12 11.7502H3C2.58579 11.7502 2.25 11.4145 2.25 11.0002ZM2.25 16.0002C2.25 15.586 2.58579 15.2502 3 15.2502H11C11.4142 15.2502 11.75 15.586 11.75 16.0002C11.75 16.4145 11.4142 16.7502 11 16.7502H3C2.58579 16.7502 2.25 16.4145 2.25 16.0002Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.9697 17.5306C17.2626 17.8235 17.7374 17.8235 18.0303 17.5306L20.5303 15.0306C20.8232 14.7377 20.8232 14.2628 20.5303 13.9699C20.2374 13.677 19.7626 13.677 19.4697 13.9699L18.25 15.1896V9.00024C18.25 8.58603 17.9142 8.25024 17.5 8.25024C17.0858 8.25024 16.75 8.58603 16.75 9.00024V15.1896L15.5303 13.9699C15.2374 13.677 14.7626 13.677 14.4697 13.9699C14.1768 14.2628 14.1768 14.7377 14.4697 15.0306L16.9697 17.5306Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconListArrowDownMinimalistic as IconComponentType).keywords = [
  "list",
  "arrow",
  "down",
  "minimalistic",
  "tilt",
  "inclination",
  "lean",
  "leaning",
  "name",
  "number",
  "sheet",
  "heel",
  "table",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "downwards",
  "downward",
  "downbound",
  "falling",
  "fallen",
  "pull down",
  "downwardly",
  "declining",
  "descending",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic"
];

export default IconListArrowDownMinimalistic as IconComponentType;