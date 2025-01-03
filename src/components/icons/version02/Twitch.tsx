import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconTwitch: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.16992 2H22.1699V14L17.1699 19H12.1699L10.1699 22H7.16992V19H3.16992V5L5.16992 2Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.6699 7H9.66992V13H11.6699V7Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.6699 7H14.6699V13H16.6699V7Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} fillRule="evenodd" clipRule="evenodd" d="M5.70969 2H21.1697C21.7197 2 22.1697 2.45 22.1697 3V13.59C22.1697 13.86 22.0597 14.11 21.8797 14.3L17.4697 18.71C17.2797 18.9 17.0297 19 16.7597 19H12.7097C12.3797 19 12.0597 19.17 11.8797 19.45L10.4697 21.56C10.2797 21.84 9.96969 22.01 9.63969 22.01H8.17969C7.62969 22.01 7.17969 21.56 7.17969 21.01V20.01C7.17969 19.46 6.72969 19.01 6.17969 19.01H4.17969C3.62969 19.01 3.17969 18.56 3.17969 18.01V5.31C3.17969 5.11 3.23969 4.91999 3.34969 4.75999L4.88969 2.46001C5.05969 2.17001 5.36969 2 5.70969 2Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M9.16992 7.14006V12.8501C9.16992 13.1701 9.42993 13.4201 9.73993 13.4201H10.8799C11.1999 13.4201 11.4499 13.1601 11.4499 12.8501V7.14006C11.4499 6.82006 11.1899 6.57007 10.8799 6.57007H9.73993C9.42993 6.57007 9.16992 6.83006 9.16992 7.14006Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M14.8799 7.14006V12.8501C14.8799 13.1701 15.1399 13.4201 15.4499 13.4201H16.5899C16.9099 13.4201 17.1599 13.1601 17.1599 12.8501V7.14006C17.1599 6.82006 16.8999 6.57007 16.5899 6.57007H15.4499C15.1399 6.57007 14.8799 6.83006 14.8799 7.14006Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M21.1699 2H5.70992C5.37992 2 5.05993 2.17001 4.87993 2.45001L3.33992 4.75C3.22992 4.91 3.16992 5.10999 3.16992 5.29999V18C3.16992 18.55 3.61992 19 4.16992 19H6.16992C6.71992 19 7.16992 19.45 7.16992 20V21C7.16992 21.55 7.61992 22 8.16992 22H9.62993C9.95993 22 10.2799 21.83 10.4599 21.55L11.8699 19.44C12.0599 19.16 12.3699 18.99 12.6999 18.99H16.7499C17.0199 18.99 17.2699 18.88 17.4599 18.7L21.8699 14.29C22.0599 14.1 22.1599 13.85 22.1599 13.58V3C22.1699 2.45 21.7199 2 21.1699 2ZM11.4599 12.86C11.4599 13.18 11.1999 13.43 10.8899 13.43H9.74992C9.42992 13.43 9.17992 13.17 9.17992 12.86V7.14999C9.17992 6.82999 9.43992 6.57999 9.74992 6.57999H10.8899C11.2099 6.57999 11.4599 6.83999 11.4599 7.14999V12.86ZM17.1699 12.86C17.1699 13.18 16.9099 13.43 16.5999 13.43H15.4599C15.1399 13.43 14.8899 13.17 14.8899 12.86V7.14999C14.8899 6.82999 15.1499 6.57999 15.4599 6.57999H16.5999C16.9199 6.57999 17.1699 6.83999 17.1699 7.14999V12.86Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTwitch as IconComponentType).keywords = [
  "twitch",
  "twinge",
  "pinch",
  "vellicate",
  "squeeze",
  "nip",
  "tweet",
  "jerk",
  "flip",
  "tic"
];

export default IconTwitch as IconComponentType;