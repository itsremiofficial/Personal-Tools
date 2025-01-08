import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconConvertshape: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6699 5.15V8.85C22.6699 11.1 21.7699 12 19.5199 12H16.8199C14.5699 12 13.6699 11.1 13.6699 8.85V5.15C13.6699 2.9 14.5699 2 16.8199 2H19.5199C21.7699 2 22.6699 2.9 22.6699 5.15Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M11.6699 15.15V18.85C11.6699 21.1 10.7699 22 8.51992 22H5.81992C3.56992 22 2.66992 21.1 2.66992 18.85V15.15C2.66992 12.9 3.56992 12 5.81992 12H8.51992C10.7699 12 11.6699 12.9 11.6699 15.15Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22.6699 15C22.6699 18.87 19.5399 22 15.6699 22L16.7199 20.25" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2.66992 9C2.66992 5.13 5.79992 2 9.66992 2L8.61992 3.75" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6699 5.15V8.85C22.6699 11.1 21.7699 12 19.5199 12H16.8199C14.5699 12 13.6699 11.1 13.6699 8.85V5.15C13.6699 2.9 14.5699 2 16.8199 2H19.5199C21.7699 2 22.6699 2.9 22.6699 5.15Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M11.6699 15.15V18.85C11.6699 21.1 10.7699 22 8.51992 22H5.81992C3.56992 22 2.66992 21.1 2.66992 18.85V15.15C2.66992 12.9 3.56992 12 5.81992 12H8.51992C10.7699 12 11.6699 12.9 11.6699 15.15Z" fill="currentColor" /><path d="M15.4499 22C15.1799 22 14.9299 21.85 14.7999 21.62C14.6699 21.38 14.6699 21.1 14.8099 20.86L15.7799 19.24C15.9899 18.88 16.4499 18.77 16.8099 18.98C17.1699 19.19 17.2799 19.65 17.0699 20.01L16.8899 20.31C19.3599 19.67 21.1799 17.43 21.1799 14.77C21.1799 14.36 21.5199 14.02 21.9299 14.02C22.3399 14.02 22.6699 14.36 22.6699 14.78C22.6699 18.76 19.4299 22 15.4499 22Z" fill="currentColor" /><path d="M3.41992 9.97C3.00992 9.97 2.66992 9.64 2.66992 9.22C2.66992 5.24 5.90992 2 9.88992 2C10.1699 2 10.4099 2.15 10.5499 2.38C10.6799 2.62 10.6799 2.9 10.5399 3.14L9.56992 4.75C9.34992 5.11 8.88992 5.23 8.53992 5.01C8.17992 4.8 8.06992 4.34 8.27992 3.98L8.45992 3.68C5.99992 4.32 4.16992 6.56 4.16992 9.22C4.16992 9.64 3.82992 9.97 3.41992 9.97Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6699 5.15V8.85C22.6699 11.1 21.7699 12 19.5199 12H16.8199C14.5699 12 13.6699 11.1 13.6699 8.85V5.15C13.6699 2.9 14.5699 2 16.8199 2H19.5199C21.7699 2 22.6699 2.9 22.6699 5.15Z" fill="currentColor" /><path d="M11.6699 15.15V18.85C11.6699 21.1 10.7699 22 8.51992 22H5.81992C3.56992 22 2.66992 21.1 2.66992 18.85V15.15C2.66992 12.9 3.56992 12 5.81992 12H8.51992C10.7699 12 11.6699 12.9 11.6699 15.15Z" fill="currentColor" /><path d="M15.4499 22C15.1799 22 14.9299 21.85 14.7999 21.62C14.6699 21.38 14.6699 21.1 14.8099 20.86L15.7799 19.24C15.9899 18.88 16.4499 18.77 16.8099 18.98C17.1699 19.19 17.2799 19.65 17.0699 20.01L16.8899 20.31C19.3599 19.67 21.1799 17.43 21.1799 14.77C21.1799 14.36 21.5199 14.02 21.9299 14.02C22.3399 14.02 22.6699 14.36 22.6699 14.78C22.6699 18.76 19.4299 22 15.4499 22Z" fill="currentColor" /><path d="M3.41992 9.97C3.00992 9.97 2.66992 9.64 2.66992 9.22C2.66992 5.24 5.90992 2 9.88992 2C10.1699 2 10.4099 2.15 10.5499 2.38C10.6799 2.62 10.6799 2.9 10.5399 3.14L9.56992 4.75C9.34992 5.11 8.88992 5.23 8.53992 5.01C8.17992 4.8 8.06992 4.34 8.27992 3.98L8.45992 3.68C5.99992 4.32 4.16992 6.56 4.16992 9.22C4.16992 9.64 3.82992 9.97 3.41992 9.97Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconConvertshape as IconComponentType).keywords = [
  "convertshape"
];

export default IconConvertshape as IconComponentType;