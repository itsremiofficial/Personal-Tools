import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconShoppingCart: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.66992 2H4.40993C5.48993 2 6.33992 2.93 6.24992 4L5.41992 13.96C5.27992 15.59 6.56992 16.99 8.20992 16.99H18.8599C20.2999 16.99 21.5599 15.81 21.6699 14.38L22.2099 6.88C22.3299 5.22 21.0699 3.87 19.3999 3.87H6.48993" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.9199 22C17.6103 22 18.1699 21.4404 18.1699 20.75C18.1699 20.0596 17.6103 19.5 16.9199 19.5C16.2296 19.5 15.6699 20.0596 15.6699 20.75C15.6699 21.4404 16.2296 22 16.9199 22Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.91992 22C9.61028 22 10.1699 21.4404 10.1699 20.75C10.1699 20.0596 9.61028 19.5 8.91992 19.5C8.22957 19.5 7.66992 20.0596 7.66992 20.75C7.66992 21.4404 8.22957 22 8.91992 22Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.66992 8H21.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9199 22.5C17.8864 22.5 18.6699 21.7165 18.6699 20.75C18.6699 19.7835 17.8864 19 16.9199 19C15.9534 19 15.1699 19.7835 15.1699 20.75C15.1699 21.7165 15.9534 22.5 16.9199 22.5Z" fill="currentColor" /><path d="M8.91992 22.5C9.88642 22.5 10.6699 21.7165 10.6699 20.75C10.6699 19.7835 9.88642 19 8.91992 19C7.95342 19 7.16992 19.7835 7.16992 20.75C7.16992 21.7165 7.95342 22.5 8.91992 22.5Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M5.50992 3.94L5.30992 6.39C5.26992 6.86 5.63992 7.25 6.10992 7.25H21.4199C21.8399 7.25 22.1899 6.92999 22.2199 6.50999C22.3499 4.73999 20.9999 3.3 19.2299 3.3H6.95992C6.85992 2.86 6.65991 2.44 6.34991 2.09C5.85991 1.56 5.15993 1.25 4.43993 1.25H2.66992C2.25992 1.25 1.91992 1.59 1.91992 2C1.91992 2.41 2.25992 2.75 2.66992 2.75H4.40993C4.71993 2.75 5.00992 2.88001 5.21992 3.10001C5.42992 3.33001 5.52992 3.63 5.50992 3.94Z" fill="currentColor" /><path d="M21.18 8.75H5.83998C5.41998 8.75 5.07998 9.07 5.03998 9.48L4.67997 13.83C4.53997 15.53 5.87998 17 7.58998 17H18.71C20.21 17 21.53 15.77 21.64 14.27L21.97 9.60001C22.01 9.14001 21.65 8.75 21.18 8.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9199 22.5C17.8864 22.5 18.6699 21.7165 18.6699 20.75C18.6699 19.7835 17.8864 19 16.9199 19C15.9534 19 15.1699 19.7835 15.1699 20.75C15.1699 21.7165 15.9534 22.5 16.9199 22.5Z" fill="currentColor" /><path d="M8.91992 22.5C9.88642 22.5 10.6699 21.7165 10.6699 20.75C10.6699 19.7835 9.88642 19 8.91992 19C7.95342 19 7.16992 19.7835 7.16992 20.75C7.16992 21.7165 7.95342 22.5 8.91992 22.5Z" fill="currentColor" /><path d="M5.50992 3.94L5.30992 6.39C5.26992 6.86 5.63992 7.25 6.10992 7.25H21.4199C21.8399 7.25 22.1899 6.93 22.2199 6.51C22.3499 4.74 20.9999 3.3 19.2299 3.3H6.93992C6.83992 2.86 6.63992 2.44 6.32992 2.09C5.82992 1.56 5.12992 1.25 4.40992 1.25H2.66992C2.25992 1.25 1.91992 1.59 1.91992 2C1.91992 2.41 2.25992 2.75 2.66992 2.75H4.40992C4.71992 2.75 5.00992 2.88 5.21992 3.1C5.42992 3.33 5.52992 3.63 5.50992 3.94Z" fill="currentColor" /><path d="M21.18 8.75H5.83997C5.41997 8.75 5.07997 9.07 5.03997 9.48L4.67997 13.83C4.53997 15.54 5.87997 17 7.58997 17H18.71C20.21 17 21.53 15.77 21.64 14.27L21.97 9.6C22.01 9.14 21.65 8.75 21.18 8.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconShoppingCart as IconComponentType).keywords = [
  "shopping",
  "cart",
  "shopper",
  "marketing",
  "errand",
  "grocery",
  "store",
  "supermarket",
  "teleshopping",
  "retail",
  "market",
  "handcart",
  "pushcart",
  "go-cart",
  "haul",
  "drag",
  "dray",
  "wheelbarrow",
  "wagon",
  "bandwagon"
];

export default IconShoppingCart as IconComponentType;