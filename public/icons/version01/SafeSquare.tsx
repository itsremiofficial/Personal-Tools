import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSafeSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12.0005C2 7.28644 2 4.92942 3.46447 3.46495C4.92893 2.00049 7.28595 2.00049 12 2.00049C16.714 2.00049 19.0711 2.00049 20.5355 3.46495C22 4.92942 22 7.28644 22 12.0005C22 16.7145 22 19.0716 20.5355 20.536C19.0711 22.0005 16.714 22.0005 12 22.0005C7.28595 22.0005 4.92893 22.0005 3.46447 20.536C2 19.0716 2 16.7145 2 12.0005Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M6 7.00049L6 17.0005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M11 12.0005C11 10.3436 12.3431 9.00049 14 9.00049C15.6569 9.00049 17 10.3436 17 12.0005C17 13.6573 15.6569 15.0005 14 15.0005C12.3431 15.0005 11 13.6573 11 12.0005Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M16.5 9.50049L18 8.00049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M10 16.0005L11.5 14.5005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M11.5 9.50049L10 8.00049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M18 16.0005L16.5 14.5005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M3.46447 3.46495C2 4.92942 2 7.28644 2 12.0005C2 16.7145 2 19.0716 3.46447 20.536C4.92893 22.0005 7.28595 22.0005 12 22.0005C16.714 22.0005 19.0711 22.0005 20.5355 20.536C22 19.0716 22 16.7145 22 12.0005C22 7.28644 22 4.92942 20.5355 3.46495C19.0711 2.00049 16.714 2.00049 12 2.00049C7.28595 2.00049 4.92893 2.00049 3.46447 3.46495Z" fill="currentColor" /><path d="M6.75 7.00049C6.75 6.58627 6.41421 6.25049 6 6.25049C5.58579 6.25049 5.25 6.58627 5.25 7.00049L5.25 17.0005C5.25 17.4147 5.58579 17.7505 6 17.7505C6.41421 17.7505 6.75 17.4147 6.75 17.0005L6.75 7.00049Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M9.46967 7.47016C9.76256 7.17727 10.2374 7.17727 10.5303 7.47016L11.932 8.87179C12.5248 8.47915 13.2357 8.25049 14 8.25049C14.7643 8.25049 15.4752 8.47915 16.068 8.87179L17.4697 7.47016C17.7626 7.17727 18.2374 7.17727 18.5303 7.47016C18.8232 7.76305 18.8232 8.23793 18.5303 8.53082L17.1287 9.93245C17.5213 10.5253 17.75 11.2362 17.75 12.0005C17.75 12.7648 17.5213 13.4757 17.1287 14.0685L18.5303 15.4702C18.8232 15.7631 18.8232 16.2379 18.5303 16.5308C18.2374 16.8237 17.7626 16.8237 17.4697 16.5308L16.068 15.1292C15.4752 15.5218 14.7643 15.7505 14 15.7505C13.2357 15.7505 12.5248 15.5218 11.932 15.1292L10.5303 16.5308C10.2374 16.8237 9.76256 16.8237 9.46967 16.5308C9.17678 16.2379 9.17678 15.7631 9.46967 15.4702L10.8713 14.0685C10.4787 13.4757 10.25 12.7648 10.25 12.0005C10.25 11.2362 10.4787 10.5253 10.8713 9.93245L9.46967 8.53082C9.17678 8.23793 9.17678 7.76305 9.46967 7.47016ZM11.75 12.0005C11.75 10.7578 12.7574 9.75049 14 9.75049C15.2426 9.75049 16.25 10.7578 16.25 12.0005C16.25 13.2431 15.2426 14.2505 14 14.2505C12.7574 14.2505 11.75 13.2431 11.75 12.0005Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.75 12.0005C11.75 10.7578 12.7574 9.75049 14 9.75049C15.2426 9.75049 16.25 10.7578 16.25 12.0005C16.25 13.2431 15.2426 14.2505 14 14.2505C12.7574 14.2505 11.75 13.2431 11.75 12.0005Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3.46447 3.46495C2 4.92942 2 7.28644 2 12.0005C2 16.7145 2 19.0716 3.46447 20.536C4.92893 22.0005 7.28595 22.0005 12 22.0005C16.714 22.0005 19.0711 22.0005 20.5355 20.536C22 19.0716 22 16.7145 22 12.0005C22 7.28644 22 4.92942 20.5355 3.46495C19.0711 2.00049 16.714 2.00049 12 2.00049C7.28595 2.00049 4.92893 2.00049 3.46447 3.46495ZM6.75 7.00049C6.75 6.58627 6.41421 6.25049 6 6.25049C5.58579 6.25049 5.25 6.58627 5.25 7.00049L5.25 17.0005C5.25 17.4147 5.58579 17.7505 6 17.7505C6.41421 17.7505 6.75 17.4147 6.75 17.0005L6.75 7.00049ZM10.5303 7.47016C10.2374 7.17727 9.76256 7.17727 9.46967 7.47016C9.17678 7.76305 9.17678 8.23793 9.46967 8.53082L10.8713 9.93245C10.4787 10.5253 10.25 11.2362 10.25 12.0005C10.25 12.7648 10.4787 13.4757 10.8713 14.0685L9.46967 15.4702C9.17678 15.7631 9.17678 16.2379 9.46967 16.5308C9.76256 16.8237 10.2374 16.8237 10.5303 16.5308L11.932 15.1292C12.5248 15.5218 13.2357 15.7505 14 15.7505C14.7643 15.7505 15.4752 15.5218 16.068 15.1292L17.4697 16.5308C17.7626 16.8237 18.2374 16.8237 18.5303 16.5308C18.8232 16.2379 18.8232 15.7631 18.5303 15.4702L17.1287 14.0685C17.5213 13.4757 17.75 12.7648 17.75 12.0005C17.75 11.2362 17.5213 10.5253 17.1287 9.93245L18.5303 8.53082C18.8232 8.23793 18.8232 7.76305 18.5303 7.47016C18.2374 7.17727 17.7626 7.17727 17.4697 7.47016L16.068 8.87179C15.4752 8.47915 14.7643 8.25049 14 8.25049C13.2357 8.25049 12.5248 8.47915 11.932 8.87179L10.5303 7.47016Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSafeSquare as IconComponentType).keywords = [
  "safe",
  "square",
  "secure",
  "safe and sound",
  "safety",
  "risk-free",
  "dependable",
  "harmless",
  "innocuous",
  "off the hook",
  "sound",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest"
];

export default IconSafeSquare as IconComponentType;