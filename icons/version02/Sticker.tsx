import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSticker: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6004 12.86C22.5804 13.05 22.5504 13.23 22.5004 13.41C21.4604 12.53 20.1104 12 18.6404 12C15.3304 12 12.6404 14.69 12.6404 18C12.6404 19.47 13.1704 20.82 14.0504 21.86C13.8704 21.91 13.6904 21.94 13.5004 21.96C12.6504 22.04 11.7804 22 10.8804 21.85C6.7704 21.15 3.4604 17.82 2.7804 13.7C1.6504 6.85 7.4904 1.01 14.3404 2.14C18.4604 2.82 21.7904 6.13 22.4904 10.24C22.6404 11.14 22.6804 12.01 22.6004 12.86Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.4996 13.41C22.3596 13.9 22.0996 14.34 21.7296 14.71L15.3496 21.09C14.9796 21.46 14.5396 21.72 14.0496 21.86C13.1696 20.82 12.6396 19.47 12.6396 18C12.6396 14.69 15.3296 12 18.6396 12C20.1096 12 21.4596 12.53 22.4996 13.41Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6004 12.86C22.5804 13.05 22.5504 13.23 22.5004 13.41C21.4604 12.53 20.1104 12 18.6404 12C15.3304 12 12.6404 14.69 12.6404 18C12.6404 19.47 13.1704 20.82 14.0504 21.86C13.8704 21.91 13.6904 21.94 13.5004 21.96C12.6504 22.04 11.7804 22 10.8804 21.85C6.7704 21.15 3.4604 17.82 2.7804 13.7C1.6504 6.85 7.4904 1.01 14.3404 2.14C18.4604 2.82 21.7904 6.13 22.4904 10.24C22.6404 11.14 22.6804 12.01 22.6004 12.86Z" fill="currentColor" /><path d="M22.4996 13.41C22.3596 13.9 22.0996 14.34 21.7296 14.71L15.3496 21.09C14.9796 21.46 14.5396 21.72 14.0496 21.86C13.1696 20.82 12.6396 19.47 12.6396 18C12.6396 14.69 15.3296 12 18.6396 12C20.1096 12 21.4596 12.53 22.4996 13.41Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6304 11.66C21.4404 10.91 20.0604 10.5 18.6404 10.5C14.5004 10.5 11.1404 13.86 11.1404 18C11.1404 19.42 11.5404 20.79 12.2904 21.98C11.8304 21.97 11.3604 21.92 10.8804 21.85C6.7704 21.15 3.4604 17.82 2.7804 13.7C1.6504 6.85 7.4904 1.01 14.3404 2.14C18.4604 2.82 21.7904 6.13 22.4904 10.24C22.5704 10.72 22.6204 11.2 22.6304 11.66Z" fill="currentColor" /><path d="M14.0496 21.86C13.1696 20.82 12.6396 19.47 12.6396 18C12.6396 14.69 15.3296 12 18.6396 12C20.1096 12 21.4596 12.53 22.4996 13.41" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSticker as IconComponentType).keywords = [
  "sticker",
  "label",
  "gummed label",
  "sticky",
  "bonding",
  "paster",
  "adhesive",
  "tab",
  "decal",
  "thumbnail"
];

export default IconSticker as IconComponentType;