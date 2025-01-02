import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconStrongbox2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M8.66992 19H16.6699C18.6699 19 19.6699 18 19.6699 16V8C19.6699 6 18.6699 5 16.6699 5H8.66992C6.66992 5 5.66992 6 5.66992 8V16C5.66992 18 6.66992 19 8.66992 19Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M5.66992 9.5H8.14992C9.52992 9.5 10.6499 10.62 10.6499 12C10.6499 13.38 9.52992 14.5 8.14992 14.5H5.66992" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M19.6699 9.98999H16.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M19.6699 14H16.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M7.87012 12H7.97012" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8597 2H8.4897C4.8497 2 2.67969 4.17 2.67969 7.81V16.18C2.67969 19.82 4.8497 21.99 8.4897 21.99H16.8597C20.4997 21.99 22.6697 19.82 22.6697 16.18V7.81C22.6697 4.17 20.4997 2 16.8597 2Z" fill="currentColor" /><path d="M16.6699 9.23999H18.6699C19.2199 9.23999 19.6699 8.78999 19.6699 8.23999V8C19.6699 6.34 18.3299 5 16.6699 5H8.66992C7.00992 5 5.66992 6.34 5.66992 8V8.5C5.66992 9.05 6.11992 9.5 6.66992 9.5H8.00992C9.31992 9.5 10.5099 10.44 10.6399 11.75C10.7899 13.25 9.61992 14.51 8.14992 14.51H6.66992C6.11992 14.51 5.66992 14.96 5.66992 15.51V16.01C5.66992 17.67 7.00992 19.01 8.66992 19.01H16.6699C18.3299 19.01 19.6699 17.67 19.6699 16.01V15.76C19.6699 15.21 19.2199 14.76 18.6699 14.76H16.6699C16.2599 14.76 15.9199 14.42 15.9199 14.01C15.9199 13.6 16.2599 13.26 16.6699 13.26H18.6699C19.2199 13.26 19.6699 12.81 19.6699 12.26V11.75C19.6699 11.2 19.2199 10.75 18.6699 10.75H16.6699C16.2599 10.75 15.9199 10.42 15.9199 10C15.9199 9.58 16.2599 9.23999 16.6699 9.23999Z" fill="currentColor" /><path d="M7.66992 13H6.66992C6.11992 13 5.66992 12.55 5.66992 12C5.66992 11.45 6.11992 11 6.66992 11H7.66992C8.21992 11 8.66992 11.45 8.66992 12C8.66992 12.55 8.21992 13 7.66992 13Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8619 2H8.48187C4.84187 2 2.67188 4.17 2.67188 7.81V16.18C2.67188 19.83 4.84187 22 8.48187 22H16.8519C20.4919 22 22.6619 19.83 22.6619 16.19V7.81C22.6719 4.17 20.5019 2 16.8619 2ZM19.6719 8.24C19.6719 8.79 19.2219 9.24 18.6719 9.24H16.6719C16.2619 9.24 15.9219 9.58 15.9219 9.99C15.9219 10.41 16.2619 10.74 16.6719 10.74H18.6719C19.2219 10.74 19.6719 11.19 19.6719 11.74V12.25C19.6719 12.8 19.2219 13.25 18.6719 13.25H16.6719C16.2619 13.25 15.9219 13.59 15.9219 14C15.9219 14.41 16.2619 14.75 16.6719 14.75H18.6719C19.2219 14.75 19.6719 15.2 19.6719 15.75V16C19.6719 17.66 18.3319 19 16.6719 19H8.67188C7.01188 19 5.67188 17.66 5.67188 16V15.5C5.67188 14.95 6.12188 14.5 6.67188 14.5H8.15188C9.62187 14.5 10.7919 13.24 10.6419 11.74C10.5119 10.44 9.32188 9.5 8.01188 9.5H6.67188C6.12188 9.5 5.67188 9.05 5.67188 8.5V8C5.67188 6.34 7.01188 5 8.67188 5H16.6719C18.3319 5 19.6719 6.34 19.6719 8V8.24ZM5.67188 12C5.67188 11.45 6.12188 11 6.67188 11H7.67188C8.22188 11 8.67188 11.45 8.67188 12C8.67188 12.55 8.22188 13 7.67188 13H6.67188C6.12188 13 5.67188 12.55 5.67188 12Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconStrongbox2 as IconComponentType).keywords = [
  "strongbox",
  "2",
  "deedbox",
  "safe",
  "cashbox",
  "strongroom",
  "coffer",
  "valise",
  "chiffonier",
  "storeroom",
  "vault",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconStrongbox2 as IconComponentType;