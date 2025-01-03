import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconArrangeSquare2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M10.8501 17.15L7.81006 14.11" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.8501 6.84998V17.15" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.4897 6.84998L17.5297 9.88998" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.4897 17.15V6.84998" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.48992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.82 4.83992 21.99 8.47992 21.99H16.8499C20.4899 21.99 22.6599 19.82 22.6599 16.18V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path d="M10.85 6.09998C10.44 6.09998 10.1 6.43998 10.1 6.84998V15.35L8.34 13.59C8.05 13.3 7.57 13.3 7.28 13.59C6.99 13.88 6.99 14.36 7.28 14.65L10.32 17.69C10.39 17.76 10.47 17.81 10.56 17.85C10.65 17.89 10.75 17.91 10.85 17.91C10.95 17.91 11.04 17.89 11.14 17.85C11.32 17.77 11.47 17.63 11.55 17.44C11.59 17.35 11.61 17.25 11.61 17.15V6.84998C11.6 6.42998 11.27 6.09998 10.85 6.09998Z" fill="currentColor" /><path d="M18.0602 9.35998L15.0202 6.31998C14.9502 6.24998 14.8702 6.19998 14.7802 6.15998C14.6002 6.07998 14.3902 6.07998 14.2102 6.15998C14.0302 6.23998 13.8802 6.37998 13.8002 6.56998C13.7602 6.65998 13.7402 6.75998 13.7402 6.85998V17.17C13.7402 17.58 14.0802 17.92 14.4902 17.92C14.9002 17.92 15.2402 17.58 15.2402 17.17V8.66998L17.0002 10.43C17.1502 10.58 17.3402 10.65 17.5302 10.65C17.7202 10.65 17.9102 10.58 18.0602 10.43C18.3502 10.12 18.3502 9.64998 18.0602 9.35998Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM11.5999 17.15C11.5999 17.25 11.5799 17.34 11.5399 17.44C11.4599 17.62 11.3199 17.77 11.1299 17.85C11.0399 17.89 10.9399 17.91 10.8399 17.91C10.7399 17.91 10.6499 17.89 10.5499 17.85C10.4599 17.81 10.3799 17.76 10.3099 17.69L7.26992 14.65C6.97992 14.36 6.97992 13.88 7.26992 13.59C7.55992 13.3 8.03992 13.3 8.32992 13.59L10.0899 15.35V6.85C10.0899 6.44 10.4299 6.1 10.8399 6.1C11.2499 6.1 11.5899 6.44 11.5899 6.85V17.15H11.5999ZM18.0599 10.42C17.9099 10.57 17.7199 10.64 17.5299 10.64C17.3399 10.64 17.1499 10.57 16.9999 10.42L15.2399 8.66V17.16C15.2399 17.57 14.8999 17.91 14.4899 17.91C14.0799 17.91 13.7399 17.57 13.7399 17.16V6.85C13.7399 6.75 13.7599 6.66 13.7999 6.56C13.8799 6.38 14.0199 6.23 14.2099 6.15C14.3899 6.07 14.5999 6.07 14.7799 6.15C14.8699 6.19 14.9499 6.24 15.0199 6.31L18.0599 9.35C18.3499 9.65 18.3499 10.12 18.0599 10.42Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrangeSquare2 as IconComponentType).keywords = [
  "arrange",
  "square",
  "2",
  "order",
  "put",
  "set up",
  "fix up",
  "stage",
  "bring about",
  "format",
  "do",
  "set",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
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

export default IconArrangeSquare2 as IconComponentType;