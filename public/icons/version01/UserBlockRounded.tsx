import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconUserBlockRounded: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="6.00049" r="4" stroke="currentColor" strokeWidth={width} /><path d="M19.9502 16.0503L16.0502 19.9502" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><circle cx="18" cy="18.0005" r="3" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M13 20.96C12.6734 20.9867 12.3395 21.0005 12 21.0005C8.13401 21.0005 5 19.2096 5 17.0005C5 14.7913 8.13401 13.0005 12 13.0005C12.8808 13.0005 13.7236 13.0934 14.5 13.2631" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="6.00049" r="4" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M18 15.7505C16.7574 15.7505 15.75 16.7578 15.75 18.0005C15.75 18.3478 15.8287 18.6768 15.9693 18.9705L18.9701 15.9698C18.6763 15.8292 18.3474 15.7505 18 15.7505ZM20.0307 17.0304L17.0299 20.0312C17.3236 20.1718 17.6526 20.2505 18 20.2505C19.2426 20.2505 20.25 19.2431 20.25 18.0005C20.25 17.6531 20.1713 17.3241 20.0307 17.0304ZM14.25 18.0005C14.25 15.9294 15.9289 14.2505 18 14.2505C20.0711 14.2505 21.75 15.9294 21.75 18.0005C21.75 20.0716 20.0711 21.7505 18 21.7505C15.9289 21.7505 14.25 20.0716 14.25 18.0005Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M17.2157 14.3326C15.5211 14.6932 14.25 16.1984 14.25 18.0005C14.25 18.9828 14.6277 19.8769 15.2457 20.5454C14.2756 20.8361 13.1714 21.0005 12 21.0005C8.13401 21.0005 5 19.2096 5 17.0005C5 14.7913 8.13401 13.0005 12 13.0005C14.0722 13.0005 15.934 13.515 17.2157 14.3326Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="6.00049" r="4" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M18 15.7505C16.7574 15.7505 15.75 16.7578 15.75 18.0005C15.75 18.3478 15.8287 18.6768 15.9693 18.9705L18.9701 15.9698C18.6763 15.8292 18.3474 15.7505 18 15.7505ZM20.0307 17.0304L17.0299 20.0312C17.3236 20.1718 17.6526 20.2505 18 20.2505C19.2426 20.2505 20.25 19.2431 20.25 18.0005C20.25 17.6531 20.1713 17.3241 20.0307 17.0304ZM14.25 18.0005C14.25 15.9294 15.9289 14.2505 18 14.2505C20.0711 14.2505 21.75 15.9294 21.75 18.0005C21.75 20.0716 20.0711 21.7505 18 21.7505C15.9289 21.7505 14.25 20.0716 14.25 18.0005Z" fill="currentColor" /><path d="M15.3267 13.4812C13.7841 14.3956 12.75 16.0773 12.75 18.0005C12.75 19.0698 13.0697 20.0644 13.6187 20.894C13.0991 20.9643 12.5572 21.0015 12 21.0015C8.13401 21.0015 5 19.2106 5 17.0015C5 14.7923 8.13401 13.0015 12 13.0015C13.2041 13.0015 14.3372 13.1752 15.3267 13.4812Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUserBlockRounded as IconComponentType).keywords = [
  "user",
  "block",
  "rounded",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "customer",
  "client",
  "employer",
  "consumer",
  "employee",
  "bar",
  "stuff",
  "pulley",
  "barricade",
  "engine block",
  "lug",
  "freeze",
  "blockade",
  "parry",
  "ringed",
  "ring-shaped",
  "annulate",
  "annular",
  "circular",
  "rotund",
  "bowfront",
  "prolate",
  "domed"
];

export default IconUserBlockRounded as IconComponentType;