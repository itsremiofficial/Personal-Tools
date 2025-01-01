import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconListUp: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 18.0002L17.5 15.0002L21 18.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.5" : "1"} d="M21 6.00024L3 6.00024" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M21 10.0002L3 10.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M11 14.0002L3 14.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M11 18.0002H3" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M2.25 6.00024C2.25 5.58603 2.58579 5.25024 3 5.25024H21C21.4142 5.25024 21.75 5.58603 21.75 6.00024C21.75 6.41446 21.4142 6.75024 21 6.75024H3C2.58579 6.75024 2.25 6.41446 2.25 6.00024ZM2.25 10.0002C2.25 9.58603 2.58579 9.25024 3 9.25024H21C21.4142 9.25024 21.75 9.58603 21.75 10.0002C21.75 10.4145 21.4142 10.7502 21 10.7502H3C2.58579 10.7502 2.25 10.4145 2.25 10.0002ZM2.25 14.0002C2.25 13.586 2.58579 13.2502 3 13.2502H11C11.4142 13.2502 11.75 13.586 11.75 14.0002C11.75 14.4145 11.4142 14.7502 11 14.7502H3C2.58579 14.7502 2.25 14.4145 2.25 14.0002ZM2.25 18.0002C2.25 17.586 2.58579 17.2502 3 17.2502H11C11.4142 17.2502 11.75 17.586 11.75 18.0002C11.75 18.4145 11.4142 18.7502 11 18.7502H3C2.58579 18.7502 2.25 18.4145 2.25 18.0002Z" fill="currentColor" /><path d="M17.0119 14.4308C17.2928 14.1901 17.7072 14.1901 17.9881 14.4308L21.4881 17.4308C21.8026 17.7004 21.839 18.1738 21.5695 18.4883C21.2999 18.8028 20.8264 18.8393 20.5119 18.5697L17.5 15.9881L14.4881 18.5697C14.1736 18.8393 13.7001 18.8028 13.4306 18.4883C13.161 18.1738 13.1974 17.7004 13.5119 17.4308L17.0119 14.4308Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.25 6.00024C2.25 5.58603 2.58579 5.25024 3 5.25024H21C21.4142 5.25024 21.75 5.58603 21.75 6.00024C21.75 6.41446 21.4142 6.75024 21 6.75024H3C2.58579 6.75024 2.25 6.41446 2.25 6.00024ZM2.25 10.0002C2.25 9.58603 2.58579 9.25024 3 9.25024H21C21.4142 9.25024 21.75 9.58603 21.75 10.0002C21.75 10.4145 21.4142 10.7502 21 10.7502H3C2.58579 10.7502 2.25 10.4145 2.25 10.0002ZM2.25 14.0002C2.25 13.586 2.58579 13.2502 3 13.2502H11C11.4142 13.2502 11.75 13.586 11.75 14.0002C11.75 14.4145 11.4142 14.7502 11 14.7502H3C2.58579 14.7502 2.25 14.4145 2.25 14.0002ZM17.0119 14.4308C17.2928 14.1901 17.7072 14.1901 17.9881 14.4308L21.4881 17.4308C21.8026 17.7004 21.839 18.1738 21.5694 18.4883C21.2999 18.8028 20.8264 18.8393 20.5119 18.5697L17.5 15.9881L14.4881 18.5697C14.1736 18.8393 13.7001 18.8028 13.4306 18.4883C13.161 18.1738 13.1974 17.7004 13.5119 17.4308L17.0119 14.4308ZM2.25 18.0002C2.25 17.586 2.58579 17.2502 3 17.2502H11C11.4142 17.2502 11.75 17.586 11.75 18.0002C11.75 18.4145 11.4142 18.7502 11 18.7502H3C2.58579 18.7502 2.25 18.4145 2.25 18.0002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconListUp as IconComponentType).keywords = [
  "list",
  "up",
  "tilt",
  "inclination",
  "lean",
  "leaning",
  "name",
  "number",
  "sheet",
  "heel",
  "table",
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

export default IconListUp as IconComponentType;