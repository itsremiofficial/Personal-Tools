import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSquareArrowLeftDown: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 9L9 15M9 15L9 10.5M9 15L13.5 15" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.5" : "1"} d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28596 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28596 2 12C2 16.714 2 19.0711 3.46447 20.5355Z" fill="currentColor" /><path d="M8.42139 14.8278C8.42139 15.242 8.75717 15.5778 9.17139 15.5778L13.414 15.5778C13.8282 15.5778 14.164 15.242 14.164 14.8278C14.164 14.4135 13.8282 14.0778 13.414 14.0778H10.982L15.3586 9.70123C15.6515 9.40834 15.6515 8.93346 15.3586 8.64057C15.0657 8.34768 14.5908 8.34768 14.2979 8.64057L9.92139 13.0171L9.92139 10.5851C9.92139 10.1709 9.5856 9.83511 9.17139 9.83511C8.75717 9.83511 8.42139 10.1709 8.42139 10.5851L8.42139 14.8278Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM9.17157 15.5784C8.75736 15.5784 8.42157 15.2426 8.42157 14.8284L8.42157 10.5858C8.42157 10.1716 8.75736 9.83578 9.17157 9.83578C9.58579 9.83578 9.92157 10.1716 9.92157 10.5858L9.92157 13.0178L14.2981 8.64124C14.591 8.34835 15.0659 8.34835 15.3588 8.64124C15.6517 8.93414 15.6517 9.40901 15.3588 9.7019L10.9822 14.0784H13.4142C13.8284 14.0784 14.1642 14.4142 14.1642 14.8284C14.1642 15.2426 13.8284 15.5784 13.4142 15.5784L9.17157 15.5784Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSquareArrowLeftDown as IconComponentType).keywords = [
  "square",
  "arrow",
  "left",
  "down",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "left-hand",
  "left-handed",
  "left over",
  "near",
  "leftover",
  "nigh",
  "remaining",
  "leftfield",
  "odd",
  "downwards",
  "downward",
  "downbound",
  "falling",
  "fallen",
  "pull down",
  "downwardly",
  "declining",
  "descending"
];

export default IconSquareArrowLeftDown as IconComponentType;