import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconArrangeCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M14.4897 6.84998L17.5297 9.88998" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.4897 17.15V6.84998" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.85 17.15L7.81006 14.11" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.8501 6.84998V17.15" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path d="M18.0598 9.25986L15.0197 6.21988C14.9497 6.14988 14.8697 6.09988 14.7797 6.05988C14.5997 5.97988 14.3897 5.97988 14.2097 6.05988C14.0297 6.13988 13.8797 6.27988 13.7997 6.46988C13.7597 6.55988 13.7397 6.65986 13.7397 6.75986V17.0699C13.7397 17.4799 14.0797 17.8199 14.4897 17.8199C14.8997 17.8199 15.2397 17.4799 15.2397 17.0699V8.56989L16.9997 10.3299C17.1497 10.4799 17.3397 10.5499 17.5297 10.5499C17.7197 10.5499 17.9098 10.4799 18.0598 10.3299C18.3498 10.0199 18.3498 9.54986 18.0598 9.25986Z" fill="currentColor" /><path d="M11.6 6.74988C11.6 6.33988 11.26 5.99988 10.85 5.99988C10.44 5.99988 10.1 6.33988 10.1 6.74988V15.2499L8.34003 13.4899C8.05003 13.1999 7.57 13.1999 7.28 13.4899C6.99 13.7799 6.99 14.2599 7.28 14.5499L10.32 17.5899C10.39 17.6599 10.47 17.7099 10.56 17.7499C10.65 17.7899 10.75 17.8099 10.85 17.8099C10.95 17.8099 11.04 17.7899 11.14 17.7499C11.32 17.6699 11.47 17.5299 11.55 17.3399C11.59 17.2499 11.61 17.1499 11.61 17.0499V6.74988H11.6Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM11.5999 17.15C11.5999 17.25 11.5799 17.34 11.5399 17.44C11.4599 17.62 11.3199 17.77 11.1299 17.85C11.0399 17.89 10.9399 17.91 10.8399 17.91C10.7399 17.91 10.6499 17.89 10.5499 17.85C10.4599 17.81 10.3799 17.76 10.3099 17.69L7.26992 14.65C6.97992 14.36 6.97992 13.88 7.26992 13.59C7.55992 13.3 8.03992 13.3 8.32992 13.59L10.0899 15.35V6.85C10.0899 6.44 10.4299 6.1 10.8399 6.1C11.2499 6.1 11.5899 6.44 11.5899 6.85V17.15H11.5999ZM18.0599 10.42C17.9099 10.57 17.7199 10.64 17.5299 10.64C17.3399 10.64 17.1499 10.57 16.9999 10.42L15.2399 8.66V17.16C15.2399 17.57 14.8999 17.91 14.4899 17.91C14.0799 17.91 13.7399 17.57 13.7399 17.16V6.85C13.7399 6.75 13.7599 6.66 13.7999 6.56C13.8799 6.38 14.0199 6.23 14.2099 6.15C14.3899 6.07 14.5999 6.07 14.7799 6.15C14.8699 6.19 14.9499 6.24 15.0199 6.31L18.0599 9.35C18.3499 9.65 18.3499 10.12 18.0599 10.42Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrangeCircle as IconComponentType).keywords = [
  "arrange",
  "circle",
  "order",
  "put",
  "set up",
  "fix up",
  "stage",
  "bring about",
  "format",
  "do",
  "set",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle"
];

export default IconArrangeCircle as IconComponentType;