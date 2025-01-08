import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPlayRemove: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6699 12C22.6699 13.31 22.4199 14.57 21.9499 15.72C21.2999 15.27 20.5099 15 19.6699 15C18.7299 15 17.8599 15.33 17.1699 15.88C16.2499 16.61 15.6699 17.74 15.6699 19C15.6699 19.75 15.8799 20.46 16.2499 21.06C16.2899 21.13 16.3399 21.2 16.3999 21.27C15.2499 21.74 13.9899 22 12.6699 22C7.14992 22 2.66992 17.52 2.66992 12C2.66992 6.48 7.14992 2 12.6699 2C18.1899 2 22.6699 6.48 22.6699 12Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M10.0498 12V10.61C10.0498 8.89001 11.2698 8.18001 12.7598 9.04001L13.9598 9.73001L15.1598 10.42C16.6498 11.28 16.6498 12.69 15.1598 13.55L13.9598 14.24L12.7598 14.93C11.2698 15.79 10.0498 15.09 10.0498 13.36V12Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M23.6699 19C23.6699 19.75 23.4599 20.46 23.0899 21.06C22.8799 21.42 22.6099 21.74 22.2999 22C21.5999 22.63 20.6799 23 19.6699 23C18.2999 23 17.0999 22.31 16.3999 21.27C16.3399 21.2 16.2899 21.13 16.2499 21.06C15.8799 20.46 15.6699 19.75 15.6699 19C15.6699 17.74 16.2499 16.61 17.1699 15.88C17.8599 15.33 18.7299 15 19.6699 15C20.5099 15 21.2999 15.27 21.9499 15.72C22.9899 16.44 23.6699 17.64 23.6699 19Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M20.7391 20.04L18.6191 17.93" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.7196 17.9598L18.5996 20.0698" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9499 15.72C21.2999 15.27 20.5099 15 19.6699 15C18.7299 15 17.8599 15.33 17.1699 15.88C16.2499 16.61 15.6699 17.74 15.6699 19C15.6699 19.75 15.8799 20.46 16.2499 21.06C16.2899 21.13 16.3399 21.2 16.3999 21.27C17.0999 22.31 18.2999 23 19.6699 23C20.6799 23 21.5999 22.63 22.2999 22C22.6099 21.74 22.8799 21.42 23.0899 21.06C23.4599 20.46 23.6699 19.75 23.6699 19C23.6699 17.64 22.9899 16.44 21.9499 15.72ZM21.2699 20.58C21.1199 20.73 20.9299 20.8 20.7399 20.8C20.5499 20.8 20.3599 20.73 20.2099 20.58L19.6799 20.05L19.1299 20.6C18.9799 20.75 18.7899 20.82 18.5999 20.82C18.4099 20.82 18.2199 20.75 18.0699 20.6C17.7799 20.31 17.7799 19.83 18.0699 19.54L18.6199 18.99L18.0899 18.46C17.7999 18.17 17.7999 17.69 18.0899 17.4C18.3799 17.11 18.8599 17.11 19.1499 17.4L19.6799 17.93L20.1799 17.43C20.4699 17.14 20.9499 17.14 21.2399 17.43C21.5299 17.72 21.5299 18.2 21.2399 18.49L20.7399 18.99L21.2699 19.52C21.5599 19.81 21.5599 20.28 21.2699 20.58Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22.6699 12C22.6699 13.31 22.4199 14.57 21.9499 15.72C21.2999 15.27 20.5099 15 19.6699 15C18.7299 15 17.8599 15.33 17.1699 15.88C16.2499 16.61 15.6699 17.74 15.6699 19C15.6699 19.75 15.8799 20.46 16.2499 21.06C16.2899 21.13 16.3399 21.2 16.3999 21.27C15.2499 21.74 13.9899 22 12.6699 22C7.14992 22 2.66992 17.52 2.66992 12C2.66992 6.48 7.14992 2 12.6699 2C18.1899 2 22.6699 6.48 22.6699 12Z" fill="currentColor" /><path d="M10.0498 12V10.61C10.0498 8.89001 11.2698 8.18001 12.7598 9.04001L13.9598 9.73001L15.1598 10.42C16.6498 11.28 16.6498 12.69 15.1598 13.55L13.9598 14.24L12.7598 14.93C11.2698 15.79 10.0498 15.09 10.0498 13.36V12Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9499 15.72C21.2999 15.27 20.5099 15 19.6699 15C18.7299 15 17.8599 15.33 17.1699 15.88C16.2499 16.61 15.6699 17.74 15.6699 19C15.6699 19.75 15.8799 20.46 16.2499 21.06C16.2899 21.13 16.3399 21.2 16.3999 21.27C17.0999 22.31 18.2999 23 19.6699 23C20.6799 23 21.5999 22.63 22.2999 22C22.6099 21.74 22.8799 21.42 23.0899 21.06C23.4599 20.46 23.6699 19.75 23.6699 19C23.6699 17.64 22.9899 16.44 21.9499 15.72ZM21.2699 20.58C21.1199 20.73 20.9299 20.8 20.7399 20.8C20.5499 20.8 20.3599 20.73 20.2099 20.58L19.6799 20.05L19.1299 20.6C18.9799 20.75 18.7899 20.82 18.5999 20.82C18.4099 20.82 18.2199 20.75 18.0699 20.6C17.7799 20.31 17.7799 19.83 18.0699 19.54L18.6199 18.99L18.0899 18.46C17.7999 18.17 17.7999 17.69 18.0899 17.4C18.3799 17.11 18.8599 17.11 19.1499 17.4L19.6799 17.93L20.1799 17.43C20.4699 17.14 20.9499 17.14 21.2399 17.43C21.5299 17.72 21.5299 18.2 21.2399 18.49L20.7399 18.99L21.2699 19.52C21.5599 19.81 21.5599 20.28 21.2699 20.58Z" fill="currentColor" /><path d="M22.5196 10.25C21.7396 5.8 17.9096 2.35 13.3996 2.03C7.29964 1.59 2.25964 6.64 2.69964 12.73C3.01964 17.24 6.46964 21.06 10.9196 21.84C12.0696 22.04 13.1896 22.04 14.2596 21.86C14.5696 21.81 14.7496 21.47 14.6296 21.19C14.3296 20.51 14.1696 19.76 14.1696 18.99C14.1696 17.3 14.9196 15.74 16.2396 14.7C17.2096 13.92 18.4296 13.49 19.6696 13.49C20.4496 13.49 21.1896 13.65 21.8596 13.95C22.1496 14.08 22.4796 13.89 22.5396 13.58C22.7196 12.52 22.7196 11.4 22.5196 10.25ZM15.1696 13.57L13.9696 14.26L12.7696 14.95C11.2796 15.81 10.0596 15.11 10.0596 13.38V12V10.61C10.0596 8.89 11.2796 8.18 12.7696 9.04L13.9696 9.73L15.1696 10.42C16.6596 11.3 16.6596 12.7 15.1696 13.57Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPlayRemove as IconComponentType).keywords = [
  "play",
  "remove",
  "frolic",
  "fun",
  "gambol",
  "caper",
  "romp",
  "toy",
  "make-believe",
  "pretend",
  "dally",
  "take out",
  "get rid of",
  "take away",
  "move out",
  "bump off",
  "slay",
  "murder",
  "take",
  "transfer"
];

export default IconPlayRemove as IconComponentType;