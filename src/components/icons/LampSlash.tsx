import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconLampSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0297 2.47998L4.17969 18.33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.25008 13.0002C4.83008 12.0302 4.58008 10.9802 4.58008 9.90017C4.58008 4.99017 8.80008 1.12017 13.6001 2.17017C15.0601 2.49017 16.3601 3.27017 17.3601 4.35017" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19.0602 7.2998C20.2802 11.1798 18.3102 15.0798 15.5202 16.8698V18.0298C15.5202 18.3198 15.6202 18.9898 14.6202 18.9898H9.42016C8.39016 18.9898 8.52016 18.5598 8.52016 18.0298V16.8698C8.04016 16.5698 7.59016 16.1998 7.16016 15.7698" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.5 22.0002C10.79 21.3502 13.21 21.3502 15.5 22.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.2592 21.9999C15.1992 21.9999 15.1292 21.9899 15.0692 21.9699C13.0592 21.3999 10.9492 21.3999 8.93918 21.9699C8.56918 22.0699 8.17918 21.8599 8.07918 21.4899C7.96918 21.1199 8.18918 20.7299 8.55918 20.6299C10.8192 19.9899 13.1992 19.9899 15.4592 20.6299C15.8292 20.7399 16.0492 21.1199 15.9392 21.4899C15.8392 21.7999 15.5592 21.9999 15.2592 21.9999Z" fill="currentColor" /><path d="M4.17914 19.0799C3.98914 19.0799 3.79914 19.0099 3.64914 18.8599C3.35914 18.5699 3.35914 18.0899 3.64914 17.7999L19.4991 1.94992C19.7891 1.65992 20.2691 1.65992 20.5591 1.94992C20.8491 2.23992 20.8491 2.71992 20.5591 3.00992L4.70914 18.8599C4.55914 19.0099 4.36914 19.0799 4.17914 19.0799Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.6307 3.42007L5.4907 14.5601C4.5307 13.2001 3.9707 11.6001 3.9707 10.0501C3.9707 7.60007 5.0607 5.31007 6.9707 3.77007C8.8807 2.23007 11.3807 1.66007 13.8307 2.20007C14.8407 2.42007 15.7907 2.84007 16.6307 3.42007Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.1694 16.9201V17.6201C16.1794 17.8801 16.1994 18.3801 15.8094 18.7801C15.5294 19.0601 15.1194 19.2101 14.5794 19.2101H9.44937C9.03937 19.2101 8.51937 19.1601 8.16937 18.8101C7.83937 18.4601 7.84938 18.0301 7.85938 17.7501V16.9201C7.40938 16.6201 6.98937 16.2801 6.60938 15.9001L17.9494 4.56006C18.4494 5.09006 18.8794 5.70006 19.2094 6.36006C21.2294 10.4201 19.2794 14.8301 16.1694 16.9201Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLampSlash as IconComponentType).keywords = [
  "lamp",
  "slash",
  "bulb",
  "flashlight",
  "lamppost",
  "lantern",
  "lighting",
  "dimmer",
  "searchlight",
  "wick",
  "lighter",
  "flog",
  "gash",
  "lash",
  "cut",
  "slice",
  "whip",
  "thrash",
  "trounce",
  "thrash about"
];

export default IconLampSlash as IconComponentType;