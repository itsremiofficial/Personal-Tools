import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconGrid3: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M12.6699 2V22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M2.66992 9.5H12.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 14.5H22.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.6" : "1"} d="M22.6699 7.81V14.5H12.6699V2H16.8599C20.4999 2 22.6699 4.17 22.6699 7.81Z" fill="currentColor" /><path d="M12.6699 9.5V22H8.47992C4.83992 22 2.66992 19.83 2.66992 16.19V9.5H12.6699Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 2V9.5H2.66992V7.81C2.66992 4.17 4.83992 2 8.47992 2H12.6699Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22.6699 14.5V16.19C22.6699 19.83 20.4999 22 16.8599 22H12.6699V14.5H22.6699Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H13.4199V8V8.75V13.75H22.6699V8.75V8V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path d="M2.66992 10.25V15.25V15.75V16.19C2.66992 19.83 4.83992 22 8.47992 22H11.9199V15.75V15.25V10.25H2.66992Z" fill="currentColor" /><path d="M11.9199 2V8.75H2.66992V7.81C2.66992 4.17 4.83992 2 8.47992 2H11.9199Z" fill="currentColor" /><path d="M22.6699 15.25V16.19C22.6699 19.83 20.4999 22 16.8599 22H13.4199V15.25H22.6699Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGrid3 as IconComponentType).keywords = [
  "grid",
  "3",
  "gridiron",
  "control grid",
  "power grid",
  "power system",
  "reference grid",
  "crossword",
  "card",
  "bars",
  "parcel",
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

export default IconGrid3 as IconComponentType;