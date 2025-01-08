import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconLink2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.7317 10.9399C15.9817 13.1899 15.9817 16.8299 13.7317 19.0699C11.4817 21.3099 7.84172 21.3199 5.60172 19.0699C3.36172 16.8199 3.35172 13.1799 5.60172 10.9399" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.2618 13.41C8.92184 11.07 8.92184 7.27001 11.2618 4.92001C13.6018 2.57001 17.4018 2.58001 19.7518 4.92001C22.1018 7.26001 22.0918 11.06 19.7518 13.41" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.7421 14.24C19.4521 14.53 18.9921 14.53 18.7121 14.24C18.4221 13.95 18.4221 13.49 18.7121 13.21C20.7121 11.21 20.7121 7.95998 18.7121 5.96998C16.7121 3.97998 13.4621 3.96998 11.4721 5.96998C9.48215 7.96998 9.47215 11.22 11.4721 13.21C11.7621 13.5 11.7621 13.96 11.4721 14.24C11.1821 14.53 10.7221 14.53 10.4421 14.24C7.87215 11.67 7.87215 7.48998 10.4421 4.92998C13.0121 2.36998 17.1921 2.35998 19.7521 4.92998C22.3121 7.49998 22.3121 11.67 19.7421 14.24Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M19.7414 4.92994C22.3114 7.49994 22.3114 11.6699 19.7414 14.2399C18.8614 15.1199 17.7814 15.6999 16.6514 15.9799C17.1814 13.8199 16.6014 11.4499 14.9114 9.75994C13.2214 8.06994 10.8514 7.48994 8.69141 8.01994C8.97141 6.88994 9.54141 5.80994 10.4314 4.92994C13.0014 2.35994 17.1714 2.35994 19.7414 4.92994Z" fill="currentColor" /><path d="M5.6016 9.75998C5.8916 9.46998 6.3516 9.46998 6.6316 9.75998C6.9216 10.05 6.9216 10.51 6.6316 10.79C4.6316 12.79 4.6316 16.04 6.6316 18.03C8.6316 20.02 11.8816 20.03 13.8716 18.03C15.8616 16.03 15.8716 12.78 13.8716 10.79C13.5816 10.5 13.5816 10.04 13.8716 9.75998C14.1616 9.46998 14.6216 9.46998 14.9016 9.75998C17.4716 12.33 17.4716 16.51 14.9016 19.07C12.3316 21.63 8.1516 21.64 5.5916 19.07C3.0316 16.5 3.0316 12.33 5.6016 9.75998Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M14.9123 9.76C16.6023 11.45 17.1823 13.82 16.6523 15.98C16.3723 17.11 15.7923 18.19 14.9123 19.07C12.3423 21.64 8.1723 21.64 5.6023 19.07C3.0323 16.5 3.0323 12.33 5.6023 9.76C6.4823 8.87 7.5623 8.3 8.69231 8.02C10.8523 7.49 13.2223 8.07 14.9123 9.76Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.7421 14.24C19.4521 14.53 18.9921 14.53 18.7121 14.24C18.4221 13.95 18.4221 13.49 18.7121 13.21C20.7121 11.21 20.7121 7.95998 18.7121 5.96998C16.7121 3.97998 13.4621 3.96998 11.4721 5.96998C9.48215 7.96998 9.47215 11.22 11.4721 13.21C11.7621 13.5 11.7621 13.96 11.4721 14.24C11.1821 14.53 10.7221 14.53 10.4421 14.24C7.87215 11.67 7.87215 7.48998 10.4421 4.92998C13.0121 2.36998 17.1921 2.35998 19.7521 4.92998C22.3121 7.49998 22.3121 11.67 19.7421 14.24Z" fill="currentColor" /><path d="M5.6016 9.75998C5.8916 9.46998 6.3516 9.46998 6.6316 9.75998C6.9216 10.05 6.9216 10.51 6.6316 10.79C4.6316 12.79 4.6316 16.04 6.6316 18.03C8.6316 20.02 11.8816 20.03 13.8716 18.03C15.8616 16.03 15.8716 12.78 13.8716 10.79C13.5816 10.5 13.5816 10.04 13.8716 9.75998C14.1616 9.46998 14.6216 9.46998 14.9016 9.75998C17.4716 12.33 17.4716 16.51 14.9016 19.07C12.3316 21.63 8.1516 21.64 5.5916 19.07C3.0316 16.5 3.0316 12.33 5.6016 9.75998Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLink2 as IconComponentType).keywords = [
  "link",
  "2",
  "linkup",
  "connection",
  "nexus",
  "connexion",
  "connectedness",
  "connect",
  "tie-in",
  "unite",
  "associate",
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

export default IconLink2 as IconComponentType;