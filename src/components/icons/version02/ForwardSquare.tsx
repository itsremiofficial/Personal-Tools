import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconForwardSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M15.6699 15.38H10.7499C9.04992 15.38 7.66992 14 7.66992 12.3C7.66992 10.6 9.04992 9.21997 10.7499 9.21997H17.5199" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.1001 10.77L17.6701 9.18999L16.1001 7.62" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.48993C4.83993 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.82 4.83992 21.99 8.47992 21.99H16.8499C20.4899 21.99 22.6599 19.82 22.6599 16.18V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path d="M18.1999 8.66006L16.6299 7.09006C16.3399 6.80006 15.8599 6.80006 15.5699 7.09006C15.2799 7.38006 15.2799 7.86006 15.5699 8.15006L15.8999 8.48006H10.7499C8.63992 8.48006 6.91992 10.2001 6.91992 12.3101C6.91992 14.4201 8.63992 16.1401 10.7499 16.1401H15.6699C16.0799 16.1401 16.4199 15.8001 16.4199 15.3901C16.4199 14.9801 16.0799 14.6401 15.6699 14.6401H10.7499C9.46992 14.6401 8.41992 13.6001 8.41992 12.3101C8.41992 11.0201 9.45992 9.98006 10.7499 9.98006H15.8299L15.5699 10.2401C15.2799 10.5301 15.2799 11.0101 15.5699 11.3001C15.7199 11.4501 15.9099 11.5201 16.0999 11.5201C16.2899 11.5201 16.4799 11.4501 16.6299 11.3001L18.1999 9.73006C18.4899 9.43006 18.4899 8.96006 18.1999 8.66006Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM18.1999 9.72L16.6299 11.29C16.4799 11.44 16.2899 11.51 16.0999 11.51C15.9099 11.51 15.7199 11.44 15.5699 11.29C15.2799 11 15.2799 10.52 15.5699 10.23L15.8299 9.97H10.7499C9.46992 9.97 8.41992 11.01 8.41992 12.3C8.41992 13.59 9.45992 14.63 10.7499 14.63H15.6699C16.0799 14.63 16.4199 14.97 16.4199 15.38C16.4199 15.79 16.0799 16.13 15.6699 16.13H10.7499C8.63992 16.13 6.91992 14.41 6.91992 12.3C6.91992 10.19 8.63992 8.47 10.7499 8.47H15.8999L15.5699 8.15C15.2799 7.86 15.2799 7.38 15.5699 7.09C15.8599 6.8 16.3399 6.8 16.6299 7.09L18.1999 8.66C18.4899 8.96 18.4899 9.43 18.1999 9.72Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconForwardSquare as IconComponentType).keywords = [
  "forward",
  "square",
  "frontwards",
  "ahead",
  "frontward",
  "forrader",
  "front",
  "forth",
  "onwards",
  "onward",
  "advancing",
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

export default IconForwardSquare as IconComponentType;