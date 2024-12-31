import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMusicSquareSearch: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.35 21H8.64999C3.89999 21 2 19.1 2 14.35V8.65002C2 3.90002 3.89999 2 8.64999 2H14.35C19.1 2 21 3.90002 21 8.65002V12.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M6.71953 14.42C7.52034 14.42 8.16953 13.7708 8.16953 12.97C8.16953 12.1692 7.52034 11.52 6.71953 11.52C5.91872 11.52 5.26953 12.1692 5.26953 12.97C5.26953 13.7708 5.91872 14.42 6.71953 14.42Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.4797 12V6.34001C13.4797 5.13001 12.7197 4.96997 11.9597 5.17997L9.0697 5.96995C8.5497 6.10995 8.17969 6.52999 8.17969 7.12999V8.14V8.81999V12.97" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.0301 13.4498C12.8309 13.4498 13.4801 12.8006 13.4801 11.9998C13.4801 11.199 12.8309 10.5498 12.0301 10.5498C11.2293 10.5498 10.5801 11.199 10.5801 11.9998C10.5801 12.8006 11.2293 13.4498 12.0301 13.4498Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.16992 8.8299L13.4799 7.37988" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M17.9402 21.2799C19.7075 21.2799 21.1402 19.8472 21.1402 18.0799C21.1402 16.3126 19.7075 14.8799 17.9402 14.8799C16.1729 14.8799 14.7402 16.3126 14.7402 18.0799C14.7402 19.8472 16.1729 21.2799 17.9402 21.2799Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.7402 21.8799L20.7402 20.8799" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.79 21.76L22.07 21.04C22.44 20.48 22.66 19.8 22.66 19.08C22.66 17.1 21.06 15.5 19.08 15.5C17.1 15.5 15.5 17.1 15.5 19.08C15.5 21.06 17.1 22.66 19.08 22.66C19.81 22.66 20.48 22.44 21.04 22.07L21.76 22.79C21.9 22.93 22.09 23 22.27 23C22.46 23 22.64 22.93 22.78 22.79C23.07 22.5 23.07 22.04 22.79 21.76Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81978C4.17978 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17978 21.99 7.81978 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M13.7793 5.29976C13.4593 5.04976 12.8793 4.80977 11.9593 5.05977L8.97929 5.87977C8.08929 6.10977 7.50929 6.85976 7.50929 7.79976V9.54976V11.7098C7.27929 11.6298 7.0293 11.5698 6.7693 11.5698C5.5293 11.5698 4.5293 12.5798 4.5293 13.8098C4.5293 15.0398 5.5393 16.0498 6.7693 16.0498C7.9893 16.0498 8.98929 15.0597 9.00929 13.8497C9.00929 13.8397 9.0193 13.8298 9.0193 13.8198V10.1198L12.9893 9.03975V10.7197C12.7593 10.6397 12.5093 10.5798 12.2393 10.5798C10.9993 10.5798 9.9993 11.5898 9.9993 12.8198C9.9993 14.0598 11.0093 15.0598 12.2393 15.0598C13.4593 15.0598 14.4593 14.0697 14.4793 12.8497C14.4793 12.8397 14.4893 12.8298 14.4893 12.8098V8.04976V6.97975C14.4793 6.21975 14.2393 5.64976 13.7793 5.29976ZM6.75929 14.5498C6.34929 14.5498 6.0193 14.2198 6.0193 13.8098C6.0193 13.3998 6.34929 13.0698 6.75929 13.0698C7.16929 13.0698 7.4993 13.3998 7.4993 13.8098C7.4993 14.2198 7.16929 14.5498 6.75929 14.5498ZM12.2293 13.5498C11.8193 13.5498 11.4893 13.2198 11.4893 12.8098C11.4893 12.3998 11.8193 12.0698 12.2293 12.0698C12.6393 12.0698 12.9693 12.3998 12.9693 12.8098C12.9693 13.2198 12.6393 13.5498 12.2293 13.5498Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMusicSquareSearch as IconComponentType).keywords = [
  "music",
  "square",
  "search",
  "sheet music",
  "euphony",
  "medicine",
  "melody",
  "symphony",
  "orchestra",
  "musician",
  "song",
  "singing",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
  "seek",
  "look for",
  "explore",
  "lookup",
  "research",
  "look",
  "hunting",
  "hunt",
  "seeking"
];

export default IconMusicSquareSearch as IconComponentType;