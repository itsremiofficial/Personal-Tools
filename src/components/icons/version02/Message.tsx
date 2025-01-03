import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMessage: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16992 19H8.66992C4.66992 19 2.66992 18 2.66992 13V8C2.66992 4 4.66992 2 8.66992 2H16.6699C20.6699 2 22.6699 4 22.6699 8V13C22.6699 17 20.6699 19 16.6699 19H16.1699C15.8599 19 15.5599 19.15 15.3699 19.4L13.8699 21.4C13.2099 22.28 12.1299 22.28 11.4699 21.4L9.96992 19.4C9.80992 19.18 9.43992 19 9.16992 19Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.6664 11H16.6754" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6654 11H12.6744" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.66443 11H8.67341" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M2.66992 12.97V6.99C2.66992 4.23 4.90992 2 7.66992 2H17.6699C20.4299 2 22.6699 4.23 22.6699 6.99V13.97C22.6699 16.72 20.4299 18.95 17.6699 18.95H16.1699C15.8599 18.95 15.5599 19.1 15.3699 19.35L13.8699 21.34C13.2099 22.22 12.1299 22.22 11.4699 21.34L9.96992 19.35C9.80992 19.13 9.44992 18.95 9.16992 18.95H7.66992C4.90992 18.95 2.66992 16.72 2.66992 13.97V12.97Z" fill="currentColor" /><path d="M12.6699 12C12.1099 12 11.6699 11.55 11.6699 11C11.6699 10.45 12.1199 10 12.6699 10C13.2199 10 13.6699 10.45 13.6699 11C13.6699 11.55 13.2299 12 12.6699 12Z" fill="currentColor" /><path d="M16.6699 12C16.1099 12 15.6699 11.55 15.6699 11C15.6699 10.45 16.1199 10 16.6699 10C17.2199 10 17.6699 10.45 17.6699 11C17.6699 11.55 17.2299 12 16.6699 12Z" fill="currentColor" /><path d="M8.66992 12C8.10992 12 7.66992 11.55 7.66992 11C7.66992 10.45 8.11992 10 8.66992 10C9.21992 10 9.66992 10.45 9.66992 11C9.66992 11.55 9.22992 12 8.66992 12Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6699 2H7.66992C4.90992 2 2.66992 4.23 2.66992 6.98V12.96V13.96C2.66992 16.71 4.90992 18.94 7.66992 18.94H9.16992C9.43992 18.94 9.79992 19.12 9.96992 19.34L11.4699 21.33C12.1299 22.21 13.2099 22.21 13.8699 21.33L15.3699 19.34C15.5599 19.09 15.8599 18.94 16.1699 18.94H17.6699C20.4299 18.94 22.6699 16.71 22.6699 13.96V6.98C22.6699 4.23 20.4299 2 17.6699 2ZM8.66992 12C8.10992 12 7.66992 11.55 7.66992 11C7.66992 10.45 8.11992 10 8.66992 10C9.21992 10 9.66992 10.45 9.66992 11C9.66992 11.55 9.22992 12 8.66992 12ZM12.6699 12C12.1099 12 11.6699 11.55 11.6699 11C11.6699 10.45 12.1199 10 12.6699 10C13.2199 10 13.6699 10.45 13.6699 11C13.6699 11.55 13.2299 12 12.6699 12ZM16.6699 12C16.1099 12 15.6699 11.55 15.6699 11C15.6699 10.45 16.1199 10 16.6699 10C17.2199 10 17.6699 10.45 17.6699 11C17.6699 11.55 17.2299 12 16.6699 12Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMessage as IconComponentType).keywords = [
  "message",
  "subject matter",
  "substance",
  "content",
  "file",
  "communiqué",
  "transmission",
  "communication",
  "news",
  "advertisement"
];

export default IconMessage as IconComponentType;