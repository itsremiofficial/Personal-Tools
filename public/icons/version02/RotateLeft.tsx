import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRotateLeft: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9.78 5.08002C10.65 4.82002 11.61 4.65002 12.67 4.65002C17.46 4.65002 21.34 8.53002 21.34 13.32C21.34 18.11 17.46 21.99 12.67 21.99C7.88 21.99 4 18.11 4 13.32C4 11.54 4.54 9.88002 5.46 8.50002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M8.54004 5.32L11.43 2" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M8.54004 5.31995L11.91 7.77995" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M8.47992 2H16.8499C20.4999 2 22.6699 4.17 22.6699 7.81V16.18C22.6699 19.82 20.4999 21.99 16.8599 21.99H8.47992C4.83992 22 2.66992 19.83 2.66992 16.19V7.81C2.66992 4.17 4.83992 2 8.47992 2Z" fill="currentColor" /><path d="M12.6699 18.58C9.49992 18.58 6.91992 16 6.91992 12.83C6.91992 11.69 7.24992 10.58 7.88992 9.64002C8.11992 9.30002 8.58992 9.20002 8.92992 9.43002C9.26992 9.66002 9.36992 10.13 9.13992 10.47C8.66992 11.17 8.42992 11.99 8.42992 12.83C8.42992 15.17 10.3399 17.08 12.6799 17.08C15.0199 17.08 16.9299 15.17 16.9299 12.83C16.9299 10.59 15.1899 8.75002 12.9899 8.59002L13.3999 8.89002C13.7299 9.13002 13.8099 9.60002 13.5599 9.94002C13.3199 10.27 12.8499 10.35 12.5099 10.1L10.5699 8.69002C10.4999 8.64002 10.4399 8.58002 10.3899 8.51002C10.3799 8.50002 10.3699 8.49002 10.3599 8.47002C10.3199 8.40002 10.2899 8.32002 10.2699 8.24002C10.2499 8.14002 10.2499 8.05002 10.2599 7.95002C10.2699 7.91002 10.2799 7.87002 10.2899 7.83002C10.3099 7.76002 10.3499 7.70002 10.3899 7.63002C10.4099 7.62002 10.4299 7.60002 10.4499 7.58002L12.1099 5.68002C12.3799 5.37002 12.8599 5.34002 13.1699 5.61002C13.4799 5.88002 13.5099 6.36002 13.2399 6.67002L12.8699 7.10002C15.9499 7.20002 18.4299 9.74002 18.4299 12.85C18.4199 16 15.8399 18.58 12.6699 18.58Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM12.6699 18.58C9.49992 18.58 6.91992 16 6.91992 12.83C6.91992 11.69 7.24992 10.58 7.88992 9.64C8.11992 9.3 8.58992 9.2 8.92992 9.43C9.26992 9.66 9.36992 10.13 9.13992 10.47C8.66992 11.17 8.42992 11.99 8.42992 12.83C8.42992 15.17 10.3399 17.08 12.6799 17.08C15.0199 17.08 16.9299 15.17 16.9299 12.83C16.9299 10.59 15.1899 8.75 12.9899 8.59L13.3999 8.89C13.7299 9.13 13.8099 9.6 13.5599 9.94C13.3199 10.27 12.8499 10.35 12.5099 10.1L10.5699 8.69C10.4999 8.64 10.4399 8.58 10.3899 8.51C10.3799 8.5 10.3699 8.49 10.3599 8.47C10.3199 8.4 10.2899 8.32 10.2699 8.24C10.2499 8.14 10.2499 8.05 10.2599 7.95C10.2699 7.91 10.2799 7.87 10.2899 7.83C10.3099 7.76 10.3499 7.7 10.3899 7.63C10.4099 7.62 10.4299 7.6 10.4499 7.58L12.1099 5.68C12.3799 5.37 12.8599 5.34 13.1699 5.61C13.4799 5.88 13.5099 6.36 13.2399 6.67L12.8699 7.1C15.9499 7.2 18.4299 9.74 18.4299 12.85C18.4199 16 15.8399 18.58 12.6699 18.58Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRotateLeft as IconComponentType).keywords = [
  "rotate",
  "left",
  "go around",
  "revolve",
  "rotation",
  "rotational",
  "slue",
  "turn",
  "tilt",
  "spinning",
  "counterclockwise",
  "left-hand",
  "left-handed",
  "left over",
  "near",
  "leftover",
  "nigh",
  "remaining",
  "leftfield",
  "odd"
];

export default IconRotateLeft as IconComponentType;