import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M19.5703 5L5.57031 19" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.1999 5.53L6.19992 19.53C6.17992 19.55 6.16992 19.56 6.14992 19.57C5.76992 19.25 5.41992 18.9 5.09992 18.52C3.57992 16.77 2.66992 14.49 2.66992 12C2.66992 6.48 7.14992 2 12.6699 2C15.1599 2 17.4399 2.91 19.1899 4.43C19.5699 4.75 19.9199 5.1 20.2399 5.48C20.2299 5.5 20.2199 5.51 20.1999 5.53Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22.6695 12C22.6695 17.52 18.1895 22 12.6695 22C10.6795 22 8.82953 21.42 7.26953 20.4L21.0695 6.6C22.0895 8.16 22.6695 10.01 22.6695 12Z" fill="currentColor" /><path d="M22.4398 2.23C22.1398 1.93 21.6498 1.93 21.3498 2.23L2.8998 20.69C2.5998 20.99 2.5998 21.48 2.8998 21.78C3.0498 21.92 3.2398 22 3.4398 22C3.6398 22 3.8298 21.92 3.9798 21.77L22.4398 3.31C22.7498 3.01 22.7498 2.53 22.4398 2.23Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.1999 5.53L6.19992 19.53C6.17992 19.55 6.16992 19.56 6.14992 19.57C5.76992 19.25 5.41992 18.9 5.09992 18.52C3.57992 16.77 2.66992 14.49 2.66992 12C2.66992 6.48 7.14992 2 12.6699 2C15.1599 2 17.4399 2.91 19.1899 4.43C19.5699 4.75 19.9199 5.1 20.2399 5.48C20.2299 5.5 20.2199 5.51 20.1999 5.53Z" fill="currentColor" /><path d="M22.6698 12C22.6698 17.49 18.1598 22 12.6698 22C11.1698 22 9.74978 21.67 8.46978 21.07C7.84978 20.78 7.72978 19.95 8.20978 19.46L20.1298 7.54C20.6098 7.06 21.4498 7.18 21.7398 7.8C22.3398 9.07 22.6698 10.5 22.6698 12Z" fill="currentColor" /><path d="M22.4398 2.23C22.1398 1.93 21.6498 1.93 21.3498 2.23L2.8998 20.69C2.5998 20.99 2.5998 21.48 2.8998 21.78C3.0498 21.92 3.2398 22 3.4398 22C3.6398 22 3.8298 21.92 3.9798 21.77L22.4398 3.31C22.7498 3.01 22.7498 2.53 22.4398 2.23Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSlash as IconComponentType).keywords = [
  "slash",
  "flog",
  "gash",
  "lash",
  "cut",
  "slice",
  "whip",
  "thrash",
  "trounce",
  "thrash about"
];

export default IconSlash as IconComponentType;