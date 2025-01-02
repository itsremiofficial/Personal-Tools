import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconWarning2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6699 7.75V13" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M21.7501 8.58003V15.42C21.7501 16.54 21.1501 17.58 20.1801 18.15L14.2401 21.58C13.2701 22.14 12.0701 22.14 11.0901 21.58L5.15009 18.15C4.18009 17.59 3.58008 16.55 3.58008 15.42V8.58003C3.58008 7.46003 4.18009 6.41999 5.15009 5.84999L11.0901 2.42C12.0601 1.86 13.2601 1.86 14.2401 2.42L20.1801 5.84999C21.1501 6.41999 21.7501 7.45003 21.7501 8.58003Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 16.2V16.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.7501 8.58003V15.42C21.7501 16.54 21.1501 17.58 20.1801 18.15L14.2401 21.58C13.2701 22.14 12.0701 22.14 11.0901 21.58L5.15009 18.15C4.18009 17.59 3.58008 16.55 3.58008 15.42V8.58003C3.58008 7.46003 4.18009 6.41999 5.15009 5.84999L11.0901 2.42C12.0601 1.86 13.2601 1.86 14.2401 2.42L20.1801 5.84999C21.1501 6.41999 21.7501 7.45003 21.7501 8.58003Z" fill="currentColor" /><path d="M12.6699 13.75C12.2599 13.75 11.9199 13.41 11.9199 13V7.75C11.9199 7.34 12.2599 7 12.6699 7C13.0799 7 13.4199 7.34 13.4199 7.75V13C13.4199 13.41 13.0799 13.75 12.6699 13.75Z" fill="currentColor" /><path d="M12.6699 17.25C12.5399 17.25 12.4099 17.22 12.2899 17.17C12.1599 17.12 12.0599 17.05 11.9599 16.96C11.8699 16.86 11.7999 16.75 11.7399 16.63C11.6899 16.51 11.6699 16.38 11.6699 16.25C11.6699 15.99 11.7699 15.73 11.9599 15.54C12.0599 15.45 12.1599 15.38 12.2899 15.33C12.6599 15.17 13.0999 15.26 13.3799 15.54C13.4699 15.64 13.5399 15.74 13.5899 15.87C13.6399 15.99 13.6699 16.12 13.6699 16.25C13.6699 16.38 13.6399 16.51 13.5899 16.63C13.5399 16.75 13.4699 16.86 13.3799 16.96C13.1899 17.15 12.9399 17.25 12.6699 17.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.1798 5.85L14.2398 2.42C13.2698 1.86 12.0698 1.86 11.0898 2.42L5.15984 5.85C4.18984 6.41 3.58984 7.45 3.58984 8.58V15.42C3.58984 16.54 4.18984 17.58 5.15984 18.15L11.0998 21.58C12.0698 22.14 13.2698 22.14 14.2498 21.58L20.1898 18.15C21.1598 17.59 21.7598 16.55 21.7598 15.42V8.58C21.7498 7.45 21.1498 6.42 20.1798 5.85ZM11.9198 7.75C11.9198 7.34 12.2598 7 12.6698 7C13.0798 7 13.4198 7.34 13.4198 7.75V13C13.4198 13.41 13.0798 13.75 12.6698 13.75C12.2598 13.75 11.9198 13.41 11.9198 13V7.75ZM13.5898 16.63C13.5398 16.75 13.4698 16.86 13.3798 16.96C13.1898 17.15 12.9398 17.25 12.6698 17.25C12.5398 17.25 12.4098 17.22 12.2898 17.17C12.1598 17.12 12.0598 17.05 11.9598 16.96C11.8698 16.86 11.7998 16.75 11.7398 16.63C11.6898 16.51 11.6698 16.38 11.6698 16.25C11.6698 15.99 11.7698 15.73 11.9598 15.54C12.0598 15.45 12.1598 15.38 12.2898 15.33C12.6598 15.17 13.0998 15.26 13.3798 15.54C13.4698 15.64 13.5398 15.74 13.5898 15.87C13.6398 15.99 13.6698 16.12 13.6698 16.25C13.6698 16.38 13.6398 16.51 13.5898 16.63Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWarning2 as IconComponentType).keywords = [
  "warning",
  "2",
  "cautionary",
  "exemplary",
  "dissuasive",
  "monitory",
  "admonition",
  "admonitory",
  "word of advice",
  "cautioning",
  "cautioned",
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

export default IconWarning2 as IconComponentType;