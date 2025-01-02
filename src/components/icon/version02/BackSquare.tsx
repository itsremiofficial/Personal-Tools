import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBackSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M9.66982 15.38H14.5898C16.2898 15.38 17.6698 14 17.6698 12.3C17.6698 10.6 16.2898 9.21997 14.5898 9.21997H7.81982" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.23992 10.77L7.66992 9.18999L9.23992 7.62" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.48992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.82 4.83992 21.99 8.47992 21.99H16.8499C20.4899 21.99 22.6599 19.82 22.6599 16.18V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path d="M14.5899 8.48006H9.43986L9.76986 8.15006C10.0599 7.86006 10.0599 7.38006 9.76986 7.09006C9.47986 6.80006 8.99986 6.80006 8.70986 7.09006L7.13986 8.66006C6.84986 8.95006 6.84986 9.43006 7.13986 9.72006L8.70986 11.2901C8.85986 11.4401 9.04986 11.5101 9.23986 11.5101C9.42986 11.5101 9.61986 11.4401 9.76986 11.2901C10.0599 11.0001 10.0599 10.5201 9.76986 10.2301L9.50986 9.97006H14.5899C15.8699 9.97006 16.9199 11.0101 16.9199 12.3001C16.9199 13.5901 15.8799 14.6301 14.5899 14.6301H9.66986C9.25986 14.6301 8.91986 14.9701 8.91986 15.3801C8.91986 15.7901 9.25986 16.1301 9.66986 16.1301H14.5899C16.6999 16.1301 18.4199 14.4101 18.4199 12.3001C18.4199 10.1901 16.6999 8.48006 14.5899 8.48006Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM14.5899 16.13H9.66992C9.25992 16.13 8.91992 15.79 8.91992 15.38C8.91992 14.97 9.25992 14.63 9.66992 14.63H14.5899C15.8699 14.63 16.9199 13.59 16.9199 12.3C16.9199 11.01 15.8799 9.97 14.5899 9.97H9.51992L9.77992 10.23C10.0699 10.53 10.0699 11 9.76992 11.3C9.61992 11.45 9.42992 11.52 9.23992 11.52C9.04992 11.52 8.85992 11.45 8.70992 11.3L7.13992 9.72C6.84992 9.43 6.84992 8.95 7.13992 8.66L8.70992 7.09C8.99992 6.8 9.47992 6.8 9.76992 7.09C10.0599 7.38 10.0599 7.86 9.76992 8.15L9.43992 8.48H14.5899C16.6999 8.48 18.4199 10.2 18.4199 12.31C18.4199 14.42 16.6999 16.13 14.5899 16.13Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBackSquare as IconComponentType).keywords = [
  "back",
  "square",
  "backward",
  "rearward",
  "rearwards",
  "backwards",
  "back up",
  "backmost",
  "rearmost",
  "hindermost",
  "support",
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

export default IconBackSquare as IconComponentType;