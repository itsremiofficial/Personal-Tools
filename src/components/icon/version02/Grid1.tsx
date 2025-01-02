import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconGrid1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M2.69922 8.5H22.6692" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M2.69922 15.5H22.6692" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M9.17969 21.9898V2.00977" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M16.1797 21.9898V2.00977" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.17992 2V8.5H2.66992V7.81C2.66992 4.17 4.83992 2 8.47992 2H9.17992Z" fill="currentColor" /><path d="M22.6697 7.81V8.5H16.1797V2H16.8597C20.4997 2 22.6697 4.17 22.6697 7.81Z" fill="currentColor" /><path d="M22.6697 15.5V16.19C22.6697 19.83 20.4997 22 16.8597 22H16.1797V15.5H22.6697Z" fill="currentColor" /><path d="M9.17992 15.5V22H8.47992C4.83992 22 2.66992 19.83 2.66992 16.19V15.5H9.17992Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M9.17992 8.5H2.66992V15.5H9.17992V8.5Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22.6697 8.5H16.1797V15.5H22.6697V8.5Z" fill="currentColor" /><path d="M16.1797 8.5H9.17969V15.5H16.1797V8.5Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.1797 2H9.17969V8.5H16.1797V2Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.1797 15.5H9.17969V22H16.1797V15.5Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.41992 2V7.8H2.66992C2.66992 4.19 4.81992 2.02 8.41992 2Z" fill="currentColor" /><path d="M22.6699 7.8H16.9199V2C20.5199 2.02 22.6699 4.19 22.6699 7.8Z" fill="currentColor" /><path d="M22.6699 16.3C22.6299 19.85 20.4899 21.98 16.9199 22V16.3H22.6699Z" fill="currentColor" /><path d="M8.41992 16.3V22C4.84992 21.98 2.70992 19.85 2.66992 16.3H8.41992Z" fill="currentColor" /><path d="M8.41992 9.30005H2.66992V14.8H8.41992V9.30005Z" fill="currentColor" /><path d="M22.6699 9.30005H16.9199V14.8H22.6699V9.30005Z" fill="currentColor" /><path d="M15.4199 9.30005H9.91992V14.8H15.4199V9.30005Z" fill="currentColor" /><path d="M15.4199 2H9.91992V7.8H15.4199V2Z" fill="currentColor" /><path d="M15.4199 16.3H9.91992V22H15.4199V16.3Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGrid1 as IconComponentType).keywords = [
  "grid",
  "1",
  "gridiron",
  "control grid",
  "power grid",
  "power system",
  "reference grid",
  "crossword",
  "card",
  "bars",
  "parcel",
  "wash out",
  "cut up",
  "pull out",
  "pull in",
  "pull up",
  "pull over",
  "work out",
  "ride down",
  "rush hour"
];

export default IconGrid1 as IconComponentType;