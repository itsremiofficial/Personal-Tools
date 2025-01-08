import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconAudioSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M10.2899 17.3C11.4608 17.3 12.4099 16.3508 12.4099 15.18C12.4099 14.0091 11.4608 13.06 10.2899 13.06C9.11907 13.06 8.16992 14.0091 8.16992 15.18C8.16992 16.3508 9.11907 17.3 10.2899 17.3Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.4102 15.18V7.77002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M13.8002 6.77004L16.1401 7.55C16.7101 7.74 17.1702 8.38 17.1702 8.98V9.59999C17.1702 10.41 16.5402 10.86 15.7802 10.6L13.4402 9.82002C12.8702 9.63002 12.4102 8.99003 12.4102 8.39003V7.77004C12.4102 6.97004 13.0302 6.51004 13.8002 6.77004Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8597 2H8.48969C4.84968 2 2.67969 4.17 2.67969 7.81V16.18C2.67969 19.82 4.84968 21.99 8.48969 21.99H16.8597C20.4997 21.99 22.6697 19.82 22.6697 16.18V7.81C22.6697 4.17 20.4997 2 16.8597 2Z" fill="currentColor" /><path d="M16.29 7.09996L14.0001 6.34001C13.4201 6.14001 12.8301 6.21996 12.3801 6.53996C11.9301 6.85996 11.6801 7.39999 11.6801 8.00999V8.61998V12.8C11.2801 12.58 10.83 12.45 10.34 12.45C8.80003 12.45 7.54004 13.71 7.54004 15.25C7.54004 16.79 8.80003 18.05 10.34 18.05C11.88 18.05 13.14 16.79 13.14 15.25V10.7C13.15 10.71 13.1701 10.71 13.1801 10.72L15.47 11.48C15.68 11.55 15.9 11.59 16.11 11.59C16.47 11.59 16.81 11.49 17.09 11.28C17.54 10.96 17.79 10.42 17.79 9.80998V9.2C17.79 8.29 17.15 7.38996 16.29 7.09996ZM10.34 16.59C9.60003 16.59 9.01007 15.99 9.01007 15.26C9.01007 14.52 9.61003 13.92 10.34 13.92C11.08 13.92 11.6801 14.52 11.6801 15.26C11.6801 15.99 11.08 16.59 10.34 16.59Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3398 13.92C9.59977 13.92 9.00977 14.52 9.00977 15.26C9.00977 16 9.60977 16.59 10.3398 16.59C11.0798 16.59 11.6798 15.99 11.6798 15.26C11.6798 14.52 11.0798 13.92 10.3398 13.92Z" fill="currentColor" /><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM17.7899 9.8C17.7899 10.41 17.5299 10.95 17.0899 11.27C16.8099 11.47 16.4699 11.58 16.1099 11.58C15.8999 11.58 15.6899 11.54 15.4699 11.47L13.1799 10.71C13.1699 10.71 13.1499 10.7 13.1399 10.69V15.25C13.1399 16.79 11.8799 18.05 10.3399 18.05C8.79992 18.05 7.53992 16.79 7.53992 15.25C7.53992 13.71 8.79992 12.45 10.3399 12.45C10.8299 12.45 11.2799 12.59 11.6799 12.8V8.63V8.02C11.6799 7.41 11.9399 6.87 12.3799 6.55C12.8299 6.23 13.4199 6.15 13.9999 6.35L16.2899 7.11C17.1499 7.4 17.7999 8.3 17.7999 9.2V9.8H17.7899Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAudioSquare as IconComponentType).keywords = [
  "audio",
  "square",
  "audio frequency",
  "sound",
  "aural",
  "audiological",
  "auditory",
  "sonic",
  "audible",
  "graphics",
  "resounding",
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

export default IconAudioSquare as IconComponentType;