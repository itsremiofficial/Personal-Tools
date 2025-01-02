import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMessageFavorite: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6699 8V13C22.6699 17 20.6699 19 16.6699 19H16.1699C15.8599 19 15.5599 19.15 15.3699 19.4L13.8699 21.4C13.2099 22.28 12.1299 22.28 11.4699 21.4L9.96992 19.4C9.80992 19.18 9.43992 19 9.16992 19H8.66992C4.66992 19 2.66992 18 2.66992 13V8C2.66992 4 4.66992 2 8.66992 2H12.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.8697 4.62008C15.5397 3.63008 15.9297 2.41008 17.0097 2.07008C17.5697 1.90008 18.2697 2.04008 18.6697 2.57008C19.0497 2.02008 19.7697 1.90008 20.3297 2.07008C21.4097 2.40008 21.7997 3.63008 21.4697 4.62008C20.9597 6.19008 19.1697 7.00008 18.6697 7.00008C18.1697 7.00008 16.3997 6.20008 15.8697 4.62008Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.6664 11H16.6754" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6654 11H12.6744" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.66443 11H8.67341" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6399 1H18.6999C17.4299 1 16.6699 1.76 16.6699 3.03V5.97C16.6699 7.24 17.4299 8 18.6999 8H21.6399C22.9099 8 23.6699 7.24 23.6699 5.97V3.03C23.6699 1.76 22.9099 1 21.6399 1ZM22.2799 4.68C21.9099 5.86 20.6199 6.5 20.1699 6.5C19.7199 6.5 18.4399 5.88 18.0599 4.68C17.9999 4.5 17.9699 4.3 17.9699 4.11C17.9699 3.46 18.2999 2.79 18.9899 2.57C19.3999 2.44 19.8399 2.51 20.1499 2.77C20.4699 2.52 20.9099 2.44 21.3299 2.57C22.2499 2.86 22.5399 3.89 22.2799 4.68Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.6399 8H18.6999C17.4299 8 16.6699 7.24 16.6699 5.97V3.03C16.6699 2.63 16.7499 2.29 16.8899 2H7.66992C4.90992 2 2.66992 4.23 2.66992 6.98V12.96V13.96C2.66992 16.71 4.90992 18.94 7.66992 18.94H9.16992C9.43992 18.94 9.79992 19.12 9.96992 19.34L11.4699 21.33C12.1299 22.21 13.2099 22.21 13.8699 21.33L15.3699 19.34C15.5599 19.09 15.8599 18.94 16.1699 18.94H17.6699C20.4299 18.94 22.6699 16.71 22.6699 13.96V7.77C22.3799 7.92 22.0399 8 21.6399 8Z" fill="currentColor" /><path d="M12.6699 12C12.1099 12 11.6699 11.55 11.6699 11C11.6699 10.45 12.1199 10 12.6699 10C13.2199 10 13.6699 10.45 13.6699 11C13.6699 11.55 13.2299 12 12.6699 12Z" fill="currentColor" /><path d="M16.6699 12C16.1099 12 15.6699 11.55 15.6699 11C15.6699 10.45 16.1199 10 16.6699 10C17.2199 10 17.6699 10.45 17.6699 11C17.6699 11.55 17.2299 12 16.6699 12Z" fill="currentColor" /><path d="M8.66992 12C8.10992 12 7.66992 11.55 7.66992 11C7.66992 10.45 8.11992 10 8.66992 10C9.21992 10 9.66992 10.45 9.66992 11C9.66992 11.55 9.22992 12 8.66992 12Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6399 1H18.6999C17.4299 1 16.6699 1.76 16.6699 3.03V5.97C16.6699 7.24 17.4299 8 18.6999 8H21.6399C22.9099 8 23.6699 7.24 23.6699 5.97V3.03C23.6699 1.76 22.9099 1 21.6399 1ZM22.2799 4.68C21.9099 5.86 20.6199 6.5 20.1699 6.5C19.7199 6.5 18.4399 5.88 18.0599 4.68C17.9999 4.5 17.9699 4.3 17.9699 4.11C17.9699 3.46 18.2999 2.79 18.9899 2.57C19.3999 2.44 19.8399 2.51 20.1499 2.77C20.4699 2.52 20.9099 2.44 21.3299 2.57C22.2499 2.86 22.5399 3.89 22.2799 4.68Z" fill="currentColor" /><path d="M18.6999 9.5C16.7499 9.5 15.1699 7.92 15.1699 5.97V3C15.1699 2.45 14.7199 2 14.1699 2H7.66992C4.90992 2 2.66992 4.23 2.66992 6.98V13.95C2.66992 16.71 4.90992 18.95 7.66992 18.95H9.16992C9.44992 18.95 9.80992 19.13 9.96992 19.35L11.4699 21.34C12.1299 22.22 13.2099 22.22 13.8699 21.34L15.3699 19.35C15.5599 19.1 15.8599 18.95 16.1699 18.95H17.6799C20.4399 18.95 22.6699 16.72 22.6699 13.96V10.5C22.6699 9.95 22.2199 9.5 21.6699 9.5H18.6999ZM8.66992 12C8.10992 12 7.66992 11.55 7.66992 11C7.66992 10.45 8.10992 10 8.66992 10C9.21992 10 9.66992 10.45 9.66992 11C9.66992 11.55 9.22992 12 8.66992 12ZM12.6699 12C12.1099 12 11.6699 11.55 11.6699 11C11.6699 10.45 12.1099 10 12.6699 10C13.2199 10 13.6699 10.45 13.6699 11C13.6699 11.55 13.2299 12 12.6699 12Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMessageFavorite as IconComponentType).keywords = [
  "message",
  "favorite",
  "subject matter",
  "substance",
  "content",
  "file",
  "communiqué",
  "transmission",
  "communication",
  "news",
  "advertisement",
  "favored",
  "favourite",
  "preferred",
  "popular",
  "loved",
  "deary",
  "darling",
  "dearie",
  "front-runner"
];

export default IconMessageFavorite as IconComponentType;