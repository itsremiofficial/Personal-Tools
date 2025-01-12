import { FC } from 'react';

const IconQuoteUpCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M17.6718 11.84H14.9918C14.2818 11.84 13.8018 11.3 13.8018 10.65V9.15997C13.8018 8.50997 14.2818 7.96997 14.9918 7.96997H16.4818C17.1318 7.96997 17.6718 8.50997 17.6718 9.15997V11.84Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M17.672 11.8401C17.672 14.6301 17.152 15.1001 15.582 16.0301" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5321 11.84H8.8521C8.1421 11.84 7.66211 11.3 7.66211 10.65V9.15997C7.66211 8.50997 8.1421 7.96997 8.8521 7.96997H10.3421C10.9921 7.96997 11.5321 8.50997 11.5321 9.15997V11.84Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5314 11.8401C11.5314 14.6301 11.0114 15.1001 9.44141 16.0301" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path d="M12.6719 22C18.1947 22 22.6719 17.5228 22.6719 12C22.6719 6.47715 18.1947 2 12.6719 2C7.14903 2 2.67188 6.47715 2.67188 12C2.67188 17.5228 7.14903 22 12.6719 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6719 22C18.1947 22 22.6719 17.5228 22.6719 12C22.6719 6.47715 18.1947 2 12.6719 2C7.14903 2 2.67188 6.47715 2.67188 12C2.67188 17.5228 7.14903 22 12.6719 22Z" fill="currentColor" /><path d="M16.4818 7.21997H14.9918C13.9018 7.21997 13.0518 8.06997 13.0518 9.15997V10.65C13.0518 11.74 13.9018 12.59 14.9918 12.59H16.9017C16.8217 14.4 16.4018 14.67 15.1918 15.38C14.8318 15.59 14.7217 16.05 14.9317 16.41C15.0717 16.65 15.3218 16.78 15.5818 16.78C15.7118 16.78 15.8417 16.75 15.9617 16.68C17.7517 15.62 18.4218 14.93 18.4218 11.85V9.17999C18.4218 8.08999 17.5518 7.21997 16.4818 7.21997Z" fill="currentColor" /><path d="M10.3519 7.21997H8.86188C7.77188 7.21997 6.92188 8.06997 6.92188 9.15997V10.65C6.92188 11.74 7.77188 12.59 8.86188 12.59H10.7719C10.6919 14.4 10.2719 14.67 9.06187 15.38C8.70187 15.59 8.59188 16.05 8.80188 16.41C8.94188 16.65 9.19187 16.78 9.45187 16.78C9.58187 16.78 9.71188 16.75 9.83188 16.68C11.6219 15.62 12.2919 14.93 12.2919 11.85V9.17999C12.2819 8.08999 11.4119 7.21997 10.3519 7.21997Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6719 2C7.15188 2 2.67188 6.48 2.67188 12C2.67188 17.52 7.15188 22 12.6719 22C18.1919 22 22.6719 17.52 22.6719 12C22.6719 6.48 18.1919 2 12.6719 2ZM12.2819 11.84C12.2819 14.92 11.6119 15.61 9.82187 16.67C9.70187 16.74 9.57188 16.77 9.44188 16.77C9.18188 16.77 8.93187 16.64 8.79187 16.4C8.58187 16.04 8.70188 15.58 9.05188 15.37C10.2619 14.65 10.6819 14.39 10.7619 12.58H8.86187C7.77187 12.58 6.92188 11.73 6.92188 10.64V9.16C6.92188 8.07 7.77187 7.22 8.86187 7.22H10.3519C11.4219 7.22 12.2919 8.09 12.2919 9.16V11.84H12.2819ZM18.4219 11.84C18.4219 14.92 17.7519 15.61 15.9619 16.67C15.8419 16.74 15.7119 16.77 15.5819 16.77C15.3219 16.77 15.0719 16.64 14.9319 16.4C14.7219 16.04 14.8419 15.58 15.1919 15.37C16.4019 14.65 16.8219 14.39 16.9019 12.58H14.9919C13.9019 12.58 13.0519 11.73 13.0519 10.64V9.16C13.0519 8.07 13.9019 7.22 14.9919 7.22H16.4819C17.5519 7.22 18.4219 8.09 18.4219 9.16V11.84Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconQuoteUpCircle as IconComponent).keywords = [
  "quote",
  "up",
  "circle",
  "quotation",
  "cite",
  "quotation mark",
  "inverted comma",
  "cited",
  "phrase",
  "naming",
  "recite",
  "read",
  "upbound",
  "upwardly",
  "ascending",
  "upward",
  "upwards",
  "rising",
  "astir",
  "ahead",
  "awake",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle"
];

export default IconQuoteUpCircle as IconComponent;