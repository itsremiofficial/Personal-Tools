import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconOkbOkb: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6699 17C20.4313 17 22.6699 14.7614 22.6699 12C22.6699 9.23858 20.4313 7 17.6699 7C14.9085 7 12.6699 9.23858 12.6699 12C12.6699 14.7614 14.9085 17 17.6699 17Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M12.6699 22C15.4313 22 17.6699 19.7614 17.6699 17C17.6699 14.2386 15.4313 12 12.6699 12C9.9085 12 7.66992 14.2386 7.66992 17C7.66992 19.7614 9.9085 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 12C15.4313 12 17.6699 9.76142 17.6699 7C17.6699 4.23858 15.4313 2 12.6699 2C9.9085 2 7.66992 4.23858 7.66992 7C7.66992 9.76142 9.9085 12 12.6699 12Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M7.66992 17C10.4313 17 12.6699 14.7614 12.6699 12C12.6699 9.23858 10.4313 7 7.66992 7C4.9085 7 2.66992 9.23858 2.66992 12C2.66992 14.7614 4.9085 17 7.66992 17Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M22.6699 12C22.6699 14.76 20.4299 17 17.6699 17C17.6699 14.24 15.4299 12 12.6699 12C15.4299 12 17.6699 9.76 17.6699 7C20.4299 7 22.6699 9.24 22.6699 12Z" fill="currentColor" /><path d="M17.6699 17C14.9099 17 12.6699 14.76 12.6699 12C15.4299 12 17.6699 14.24 17.6699 17Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.6699 17C17.6699 19.76 15.4299 22 12.6699 22C9.90992 22 7.66992 19.76 7.66992 17C10.4299 17 12.6699 14.76 12.6699 12C12.6699 14.76 14.9099 17 17.6699 17Z" fill="currentColor" /><path d="M17.6699 7C17.6699 9.76 15.4299 12 12.6699 12C12.6699 9.24 14.9099 7 17.6699 7Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.6699 7C14.9099 7 12.6699 9.24 12.6699 12C12.6699 9.24 10.4299 7 7.66992 7C7.66992 4.24 9.90992 2 12.6699 2C15.4299 2 17.6699 4.24 17.6699 7Z" fill="currentColor" /><path d="M12.6699 12C12.6699 14.76 10.4299 17 7.66992 17C7.66992 14.24 9.90992 12 12.6699 12Z" fill="currentColor" /><path d="M12.6699 12C9.90992 12 7.66992 9.76 7.66992 7C10.4299 7 12.6699 9.24 12.6699 12Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 12C9.90992 12 7.66992 14.24 7.66992 17C4.90992 17 2.66992 14.76 2.66992 12C2.66992 9.24 4.90992 7 7.66992 7C7.66992 9.76 9.90992 12 12.6699 12Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6699 7C17.6699 9.76 15.4299 12 12.6699 12C15.4299 12 17.6699 14.24 17.6699 17C20.4299 17 22.6699 14.76 22.6699 12C22.6699 9.24 20.4299 7 17.6699 7Z" fill="none" /><path d="M12.6699 12C12.6699 14.76 10.4299 17 7.66992 17C7.66992 19.76 9.90992 22 12.6699 22C15.4299 22 17.6699 19.76 17.6699 17C14.9099 17 12.6699 14.76 12.6699 12Z" fill="none" /><path d="M12.6699 12C12.6699 9.24 14.9099 7 17.6699 7C17.6699 4.24 15.4299 2 12.6699 2C9.90992 2 7.66992 4.24 7.66992 7C10.4299 7 12.6699 9.24 12.6699 12Z" fill="none" /><path d="M12.6699 12C9.90992 12 7.66992 9.76 7.66992 7C4.90992 7 2.66992 9.24 2.66992 12C2.66992 14.76 4.90992 17 7.66992 17C7.66992 14.24 9.90992 12 12.6699 12Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconOkbOkb as IconComponentType).keywords = [
  "okb",
  "12a",
  "bl",
  "bt",
  "dlb",
  "eb",
  "fig",
  "gt",
  "hh"
];

export default IconOkbOkb as IconComponentType;