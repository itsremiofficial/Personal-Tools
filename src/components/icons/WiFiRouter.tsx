import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconWiFiRouter: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M7 15.0004C7 15.5527 6.55228 16.0004 6 16.0004C5.44772 16.0004 5 15.5527 5 15.0004C5 14.4481 5.44772 14.0004 6 14.0004C6.55228 14.0004 7 14.4481 7 15.0004Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M10 15.0004C10 15.5527 9.55228 16.0004 9 16.0004C8.44772 16.0004 8 15.5527 8 15.0004C8 14.4481 8.44772 14.0004 9 14.0004C9.55228 14.0004 10 14.4481 10 15.0004Z" fill="currentColor" /><path d="M2 15.0004C2 13.1147 2 12.1719 2.58579 11.5862C3.17157 11.0004 4.11438 11.0004 6 11.0004H18C19.8856 11.0004 20.8284 11.0004 21.4142 11.5862C22 12.1719 22 13.1147 22 15.0004C22 16.886 22 17.8288 21.4142 18.4146C20.8284 19.0004 19.8856 19.0004 18 19.0004H6C4.11438 19.0004 3.17157 19.0004 2.58579 18.4146C2 17.8288 2 16.886 2 15.0004Z" stroke="currentColor" strokeWidth={width} /><path d="M7 11.0004L3 4.00037" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M17 11.0004L21 4.00037" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M14 15.0004L18 15.0004" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.1673 5.39739C16.3414 3.40322 14.3763 2.00037 12.0836 2.00037C9.79092 2.00037 7.82586 3.40322 7 5.39739" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.7" : "1"} d="M14.9646 6.65847C14.6007 5.41143 13.4489 4.50037 12.0844 4.50037C10.7198 4.50037 9.568 5.41143 9.2041 6.65847" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M13.084 7.00037C13.084 7.55265 12.6363 8.00037 12.084 8.00037C11.5317 8.00037 11.084 7.55265 11.084 7.00037C11.084 6.44808 11.5317 6.00037 12.084 6.00037C12.6363 6.00037 13.084 6.44808 13.084 7.00037Z" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.58579 12.3362C2 12.9219 2 13.8647 2 15.7504C2 17.636 2 18.5788 2.58579 19.1646C3.17157 19.7504 4.11438 19.7504 6 19.7504H18C19.8856 19.7504 20.8284 19.7504 21.4142 19.1646C22 18.5788 22 17.636 22 15.7504C22 13.8647 22 12.9219 21.4142 12.3362C20.8284 11.7504 19.8856 11.7504 18 11.7504H6C4.11438 11.7504 3.17157 11.7504 2.58579 12.3362ZM6 16.7504C6.55228 16.7504 7 16.3027 7 15.7504C7 15.1981 6.55228 14.7504 6 14.7504C5.44772 14.7504 5 15.1981 5 15.7504C5 16.3027 5.44772 16.7504 6 16.7504ZM10 15.7504C10 16.3027 9.55228 16.7504 9 16.7504C8.44772 16.7504 8 16.3027 8 15.7504C8 15.1981 8.44772 14.7504 9 14.7504C9.55228 14.7504 10 15.1981 10 15.7504ZM14 15.0004C13.5858 15.0004 13.25 15.3362 13.25 15.7504C13.25 16.1646 13.5858 16.5004 14 16.5004H18C18.4142 16.5004 18.75 16.1646 18.75 15.7504C18.75 15.3362 18.4142 15.0004 18 15.0004H14Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M3.65131 4.37839C3.4458 4.01875 2.98766 3.8938 2.62802 4.09931C2.26839 4.30482 2.14344 4.76296 2.34895 5.1226L6.13624 11.7504H7.85985L7.65131 11.3784L3.65131 4.37839Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M20.3487 4.37839C20.5542 4.01875 21.0124 3.8938 21.372 4.09931C21.7316 4.30482 21.8566 4.76296 21.6511 5.1226L17.8638 11.7504H16.1402L16.3487 11.3784L20.3487 4.37839Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} fillRule="evenodd" clipRule="evenodd" d="M12.0838 3.50037C10.1049 3.50037 8.40696 4.71068 7.69312 6.43435C7.53464 6.81705 7.09592 6.9988 6.71323 6.84031C6.33054 6.68183 6.14878 6.24311 6.30727 5.86042C7.24515 3.59576 9.47729 2.00037 12.0838 2.00037C14.6904 2.00037 16.9225 3.59576 17.8604 5.86042C18.0189 6.24311 17.8371 6.68183 17.4544 6.84031C17.0717 6.9988 16.633 6.81705 16.4745 6.43435C15.7607 4.71068 14.0627 3.50037 12.0838 3.50037Z" fill="currentColor" /><path opacity={duotone ? "0.7" : "1"} fillRule="evenodd" clipRule="evenodd" d="M12.0846 6.00037C11.0622 6.00037 10.1973 6.68281 9.92427 7.61857C9.80824 8.0162 9.39183 8.24448 8.9942 8.12845C8.59657 8.01241 8.36829 7.59601 8.48432 7.19838C8.93906 5.64006 10.3777 4.50037 12.0846 4.50037C13.7914 4.50037 15.2301 5.64006 15.6848 7.19838C15.8008 7.59601 15.5725 8.01241 15.1749 8.12845C14.7773 8.24448 14.3609 8.0162 14.2448 7.61857C13.9718 6.68281 13.1069 6.00037 12.0846 6.00037Z" fill="currentColor" /><path d="M13.084 7.75037C13.084 8.30265 12.6363 8.75037 12.084 8.75037C11.5317 8.75037 11.084 8.30265 11.084 7.75037C11.084 7.19808 11.5317 6.75037 12.084 6.75037C12.6363 6.75037 13.084 7.19808 13.084 7.75037Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0838 3.50037C10.1049 3.50037 8.40696 4.71068 7.69312 6.43435C7.53464 6.81705 7.09592 6.9988 6.71323 6.84031C6.33053 6.68183 6.14878 6.24311 6.30727 5.86042C7.24515 3.59576 9.47729 2.00037 12.0838 2.00037C14.6904 2.00037 16.9225 3.59576 17.8604 5.86042C18.0189 6.24311 17.8371 6.68183 17.4544 6.84031C17.0717 6.9988 16.633 6.81705 16.4745 6.43435C15.7607 4.71068 14.0627 3.50037 12.0838 3.50037Z" fill="currentColor" /><path d="M12.0846 6.00037C11.0622 6.00037 10.1973 6.68281 9.92427 7.61857C9.80824 8.0162 9.39183 8.24448 8.9942 8.12845C8.59657 8.01241 8.36829 7.59601 8.48432 7.19838C8.93906 5.64006 10.3777 4.50037 12.0846 4.50037C13.7914 4.50037 15.2301 5.64006 15.6848 7.19838C15.8008 7.59601 15.5725 8.01241 15.1749 8.12845C14.7773 8.24448 14.3609 8.0162 14.2448 7.61857C13.9718 6.68281 13.1069 6.00037 12.0846 6.00037Z" fill="currentColor" /><path d="M13.084 7.75037C13.084 8.30265 12.6363 8.75037 12.084 8.75037C11.5317 8.75037 11.084 8.30265 11.084 7.75037C11.084 7.19808 11.5317 6.75037 12.084 6.75037C12.6363 6.75037 13.084 7.19808 13.084 7.75037Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3.65131 4.37839C3.4458 4.01875 2.98766 3.8938 2.62802 4.09931C2.26839 4.30482 2.14344 4.76296 2.34895 5.1226L6.13624 11.7504H6C4.11438 11.7504 3.17157 11.7504 2.58579 12.3362C2 12.9219 2 13.8647 2 15.7504C2 17.636 2 18.5788 2.58579 19.1646C3.17157 19.7504 4.11438 19.7504 6 19.7504H18C19.8856 19.7504 20.8284 19.7504 21.4142 19.1646C22 18.5788 22 17.636 22 15.7504C22 13.8647 22 12.9219 21.4142 12.3362C20.8284 11.7504 19.8856 11.7504 18 11.7504H17.8638L21.6511 5.1226C21.8566 4.76296 21.7316 4.30482 21.372 4.09931C21.0123 3.8938 20.5542 4.01875 20.3487 4.37839L16.3487 11.3784L16.1287 11.7504H7.88128L7.65131 11.3784L3.65131 4.37839ZM6 16.7504C6.55228 16.7504 7 16.3027 7 15.7504C7 15.1981 6.55228 14.7504 6 14.7504C5.44772 14.7504 5 15.1981 5 15.7504C5 16.3027 5.44772 16.7504 6 16.7504ZM10 15.7504C10 16.3027 9.55228 16.7504 9 16.7504C8.44772 16.7504 8 16.3027 8 15.7504C8 15.1981 8.44772 14.7504 9 14.7504C9.55228 14.7504 10 15.1981 10 15.7504ZM14 15.0004C13.5858 15.0004 13.25 15.3362 13.25 15.7504C13.25 16.1646 13.5858 16.5004 14 16.5004H18C18.4142 16.5004 18.75 16.1646 18.75 15.7504C18.75 15.3362 18.4142 15.0004 18 15.0004H14Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWiFiRouter as IconComponentType).keywords = [
  "wi",
  "fi",
  "router",
  "tl",
  "t2",
  "jon",
  "chak",
  "claire",
  "crosse",
  "dsl",
  "ethernet",
  "sci",
  "semper",
  "initiative",
  "audio",
  "abyss",
  "agent",
  "alien",
  "routing",
  "switch",
  "route",
  "adapter",
  "hub",
  "lsa",
  "cisco",
  "linksys",
  "modem"
];

export default IconWiFiRouter as IconComponentType;