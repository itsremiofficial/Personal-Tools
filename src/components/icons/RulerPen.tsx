import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRulerPen: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.4707 19V5C21.4707 3 20.4707 2 18.4707 2H14.4707C12.4707 2 11.4707 3 11.4707 5V19C11.4707 21 12.4707 22 14.4707 22H18.4707C20.4707 22 21.4707 21 21.4707 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.4707 6H16.4707" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.4707 18H15.4707" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.4707 13.9502L16.4707 14.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.4707 10H14.4707" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M5.4893 2C3.8593 2 2.5293 3.33 2.5293 4.95V17.91C2.5293 18.36 2.7193 19.04 2.9493 19.43L3.7693 20.79C4.7093 22.36 6.2593 22.36 7.1993 20.79L8.0193 19.43C8.2493 19.04 8.4393 18.36 8.4393 17.91V4.95C8.4393 3.33 7.1093 2 5.4893 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.4393 7H2.5293" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.4707 5V19C21.4707 20.66 20.1207 22 18.4707 22H14.4707C12.8107 22 11.4707 20.66 11.4707 19V5C11.4707 3.34 12.8107 2 14.4707 2H18.4707C20.1207 2 21.4707 3.34 21.4707 5Z" fill="currentColor" /><path d="M17.2207 6C17.2207 6.41 16.8807 6.75 16.4707 6.75H11.4707V5.25H16.4707C16.8807 5.25 17.2207 5.59 17.2207 6Z" fill="currentColor" /><path d="M16.1207 18C16.1207 18.41 15.7907 18.75 15.3707 18.75H11.4707V17.25H15.3707C15.7907 17.25 16.1207 17.59 16.1207 18Z" fill="currentColor" /><path d="M17.2207 14.0102C17.2107 14.4202 16.8807 14.7502 16.4707 14.7502C16.4607 14.7502 16.4607 14.7502 16.4607 14.7502L11.4707 14.7002V13.2002L16.4707 13.2502C16.8907 13.2502 17.2207 13.5902 17.2207 14.0102Z" fill="currentColor" /><path d="M15.0307 10C15.0307 10.41 14.6907 10.75 14.2807 10.75H11.4707V9.25H14.2807C14.6907 9.25 15.0307 9.59 15.0307 10Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M8.4393 4.95V17.91C8.4393 18.36 8.2493 19.05 8.0193 19.43L7.1993 20.79C6.2593 22.37 4.7193 22.37 3.7693 20.79L2.9593 19.43C2.7193 19.05 2.5293 18.36 2.5293 17.91V4.95C2.5293 3.33 3.8593 2 5.4893 2C7.1093 2 8.4393 3.33 8.4393 4.95Z" fill="currentColor" /><path d="M8.4393 6.25H2.5293V7.75H8.4393V6.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRulerPen as IconComponentType).keywords = [
  "ruler",
  "pen",
  "rule",
  "ndp",
  "head",
  "roi",
  "officer",
  "leadership",
  "boss",
  "leader",
  "administrator",
  "playpen",
  "penitentiary",
  "compose",
  "indite",
  "write",
  "paddock",
  "corral",
  "basin",
  "sty"
];

export default IconRulerPen as IconComponentType;