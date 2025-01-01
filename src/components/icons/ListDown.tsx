import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconListDown: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M21 6.00024L3 6.00024" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M21 10.0002L3 10.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M10 14.0002H3" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M10 18.0002H3" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M14 15.0002L17.5 18.0002L21 15.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M2.25 6.00024C2.25 5.58603 2.58579 5.25024 3 5.25024H21C21.4142 5.25024 21.75 5.58603 21.75 6.00024C21.75 6.41446 21.4142 6.75024 21 6.75024H3C2.58579 6.75024 2.25 6.41446 2.25 6.00024ZM2.25 10.0002C2.25 9.58603 2.58579 9.25024 3 9.25024H21C21.4142 9.25024 21.75 9.58603 21.75 10.0002C21.75 10.4145 21.4142 10.7502 21 10.7502H3C2.58579 10.7502 2.25 10.4145 2.25 10.0002ZM2.25 14.0002C2.25 13.586 2.58579 13.2502 3 13.2502H10C10.4142 13.2502 10.75 13.586 10.75 14.0002C10.75 14.4145 10.4142 14.7502 10 14.7502H3C2.58579 14.7502 2.25 14.4145 2.25 14.0002ZM2.25 18.0002C2.25 17.586 2.58579 17.2502 3 17.2502H10C10.4142 17.2502 10.75 17.586 10.75 18.0002C10.75 18.4145 10.4142 18.7502 10 18.7502H3C2.58579 18.7502 2.25 18.4145 2.25 18.0002Z" fill="currentColor" /><path d="M13.4306 14.5122C13.7001 14.1977 14.1736 14.1612 14.4881 14.4308L17.5 17.0124L20.5119 14.4308C20.8264 14.1612 21.2999 14.1977 21.5695 14.5122C21.839 14.8267 21.8026 15.3001 21.4881 15.5697L17.9881 18.5697C17.7072 18.8104 17.2928 18.8104 17.0119 18.5697L13.5119 15.5697C13.1974 15.3001 13.161 14.8267 13.4306 14.5122Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.25 6.00024C2.25 5.58603 2.58579 5.25024 3 5.25024H21C21.4142 5.25024 21.75 5.58603 21.75 6.00024C21.75 6.41446 21.4142 6.75024 21 6.75024H3C2.58579 6.75024 2.25 6.41446 2.25 6.00024ZM2.25 10.0002C2.25 9.58603 2.58579 9.25024 3 9.25024H21C21.4142 9.25024 21.75 9.58603 21.75 10.0002C21.75 10.4145 21.4142 10.7502 21 10.7502H3C2.58579 10.7502 2.25 10.4145 2.25 10.0002ZM2.25 14.0002C2.25 13.586 2.58579 13.2502 3 13.2502H10C10.4142 13.2502 10.75 13.586 10.75 14.0002C10.75 14.4145 10.4142 14.7502 10 14.7502H3C2.58579 14.7502 2.25 14.4145 2.25 14.0002ZM13.4306 14.5122C13.7001 14.1977 14.1736 14.1612 14.4881 14.4308L17.5 17.0124L20.5119 14.4308C20.8264 14.1612 21.2999 14.1977 21.5694 14.5122C21.839 14.8266 21.8026 15.3001 21.4881 15.5697L17.9881 18.5697C17.7072 18.8104 17.2928 18.8104 17.0119 18.5697L13.5119 15.5697C13.1974 15.3001 13.161 14.8266 13.4306 14.5122ZM2.25 18.0002C2.25 17.586 2.58579 17.2502 3 17.2502H10C10.4142 17.2502 10.75 17.586 10.75 18.0002C10.75 18.4145 10.4142 18.7502 10 18.7502H3C2.58579 18.7502 2.25 18.4145 2.25 18.0002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconListDown as IconComponentType).keywords = [
  "list",
  "down",
  "tilt",
  "inclination",
  "lean",
  "leaning",
  "name",
  "number",
  "sheet",
  "heel",
  "table",
  "downwards",
  "downward",
  "downbound",
  "falling",
  "fallen",
  "pull down",
  "downwardly",
  "declining",
  "descending"
];

export default IconListDown as IconComponentType;