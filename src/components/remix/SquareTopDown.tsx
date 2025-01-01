import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSquareTopDown: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 11L22 2M22 2H16.6562M22 2V7.34375" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.5" : "1"} d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12.4697 11.5303C12.1768 11.2374 12.1768 10.7626 12.4697 10.4697L20.1893 2.75H16.6562C16.242 2.75 15.9062 2.41421 15.9062 2C15.9062 1.58579 16.242 1.25 16.6562 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V7.34375C22.75 7.75796 22.4142 8.09375 22 8.09375C21.5858 8.09375 21.25 7.75796 21.25 7.34375V3.81066L13.5303 11.5303C13.2374 11.8232 12.7626 11.8232 12.4697 11.5303Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M14.25 3C14.25 2.58579 14.5858 2.25 15 2.25H21C21.4142 2.25 21.75 2.58579 21.75 3V9C21.75 9.41421 21.4142 9.75 21 9.75C20.5858 9.75 20.25 9.41421 20.25 9V4.81066L13.5303 11.5303C13.2374 11.8232 12.7626 11.8232 12.4697 11.5303C12.1768 11.2374 12.1768 10.7626 12.4697 10.4697L19.1893 3.75H15C14.5858 3.75 14.25 3.41421 14.25 3Z" fill="currentColor" /><path d="M21.9995 11.0164C21.6983 11.1659 21.359 11.25 21 11.25C19.7574 11.25 18.75 10.2426 18.75 9V8.43198L14.591 12.591C13.7123 13.4697 12.2877 13.4697 11.409 12.591C10.5303 11.7123 10.5303 10.2877 11.409 9.40901L15.568 5.25H15C13.7574 5.25 12.75 4.24264 12.75 3C12.75 2.64101 12.8341 2.30165 12.9836 2.00055C12.6676 2 12.3399 2 12 2C7.28596 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28596 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28596 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 11.6601 22 11.3324 21.9995 11.0164Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSquareTopDown as IconComponentType).keywords = [
  "square",
  "top",
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
  "upper side",
  "upside",
  "elevation",
  "uppermost",
  "height",
  "pinnacle",
  "peak",
  "upper",
  "topmost",
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

export default IconSquareTopDown as IconComponentType;