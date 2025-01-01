import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconVideoFrameCut: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 3.00342C17.2939 3.0238 18.8237 3.1669 19.8284 4.17161C21 5.34318 21 7.2288 21 11V13C21 16.7713 21 18.6569 19.8284 19.8285C18.8237 20.8332 17.2939 20.9763 14.5 20.9966M9.49991 20.9966C6.70609 20.9763 5.17627 20.8332 4.17157 19.8285C3 18.6569 3 16.7713 3 13V11C3 7.2288 3 5.34318 4.17157 4.17161C5.17627 3.16691 6.70609 3.0238 9.49991 3.00342" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12 2V22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeDasharray="3 3" /><path opacity={duotone ? "0.5" : "1"} d="M17 4V20M7 4V20M3.5 8.5H7M17 8.5H20.5M17 15.5H20.5M3.5 15.5H7" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M9.49991 3.00293H11.25H12.75H14.5C15.1483 3.00766 15.7286 3.019 16.25 3.04617V20.9529C15.7286 20.9801 15.1483 20.9914 14.5 20.9962H12.75H11.25H9.49991C8.85162 20.9914 8.2714 20.9801 7.75 20.9529V3.04617C8.2714 3.019 8.85162 3.00766 9.49991 3.00293Z" fill="currentColor" /><path d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3.00293V3.66667C12.75 4.08088 12.4142 4.41667 12 4.41667C11.5858 4.41667 11.25 4.08088 11.25 3.66667V3.00293V2C11.25 1.58579 11.5858 1.25 12 1.25Z" fill="currentColor" /><path d="M11.25 22V20.9962V20.3333C11.25 19.9191 11.5858 19.5833 12 19.5833C12.4142 19.5833 12.75 19.9191 12.75 20.3333V20.9962V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22Z" fill="currentColor" /><path d="M12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7V10.3333C11.25 10.7475 11.5858 11.0833 12 11.0833C12.4142 11.0833 12.75 10.7475 12.75 10.3333V7Z" fill="currentColor" /><path d="M12.75 13.6667C12.75 13.2525 12.4142 12.9167 12 12.9167C11.5858 12.9167 11.25 13.2525 11.25 13.6667V17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V13.6667Z" fill="currentColor" /><path d="M6.25 3.20215C5.34931 3.3632 4.69042 3.65227 4.17157 4.17112C3.39994 4.94275 3.13653 6.02414 3.04661 7.75H6.25V3.20215Z" fill="currentColor" /><path d="M3.00559 9.25C3 9.78349 3 10.3648 3 10.9995V12.9995C3 13.6346 3 14.2163 3.0056 14.75H6.25V9.25H3.00559Z" fill="currentColor" /><path d="M4.17157 19.828C3.40007 19.0565 3.13662 17.9753 3.04665 16.25H6.25V20.7969C5.34931 20.6359 4.69042 20.3468 4.17157 19.828Z" fill="currentColor" /><path d="M17.75 7.75V3.20215C18.6507 3.3632 19.3096 3.65227 19.8284 4.17112C20.6001 4.94275 20.8635 6.02414 20.9534 7.75H17.75Z" fill="currentColor" /><path d="M20.9944 9.25H17.75V14.75H20.9944C21 14.2163 21 13.6346 21 12.9995V10.9995C21 10.3648 21 9.78349 20.9944 9.25Z" fill="currentColor" /><path d="M17.75 16.25H20.9533C20.8634 17.9753 20.5999 19.0565 19.8284 19.828C19.3096 20.3468 18.6507 20.6359 17.75 20.7969V16.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.75 2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2V3.00293H9.49991C8.85162 3.00766 8.2714 3.019 7.75 3.04617V20.9529C8.2714 20.9801 8.85162 20.9914 9.49991 20.9962H11.25V22C11.25 22.4142 11.5858 22.75 12 22.75C12.4142 22.75 12.75 22.4142 12.75 22V20.9962H14.5C15.1483 20.9914 15.7286 20.9801 16.25 20.9529V3.04617C15.7286 3.019 15.1483 3.00766 14.5 3.00293H12.75V2ZM12.75 20.9962V20.3333C12.75 19.9191 12.4142 19.5833 12 19.5833C11.5858 19.5833 11.25 19.9191 11.25 20.3333V20.9962H12.75ZM12.75 3.00293V3.66667C12.75 4.08088 12.4142 4.41667 12 4.41667C11.5858 4.41667 11.25 4.08088 11.25 3.66667V3.00293H12.75ZM12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7V10.3333C11.25 10.7475 11.5858 11.0833 12 11.0833C12.4142 11.0833 12.75 10.7475 12.75 10.3333V7ZM12.75 13.6667C12.75 13.2525 12.4142 12.9167 12 12.9167C11.5858 12.9167 11.25 13.2525 11.25 13.6667V17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V13.6667ZM6.25 3.20215C5.34931 3.3632 4.69042 3.65227 4.17157 4.17112C3.39994 4.94275 3.13653 6.02414 3.04661 7.75H6.25V3.20215ZM3.00559 9.25C3 9.78349 3 10.3648 3 10.9995V12.9995C3 13.6346 3 14.2163 3.0056 14.75H6.25V9.25H3.00559ZM4.17157 19.828C3.40007 19.0565 3.13662 17.9753 3.04665 16.25H6.25V20.7969C5.34931 20.6359 4.69042 20.3468 4.17157 19.828ZM17.75 7.75V3.20215C18.6507 3.3632 19.3096 3.65227 19.8284 4.17112C20.6001 4.94275 20.8635 6.02414 20.9534 7.75H17.75ZM20.9944 9.25H17.75V14.75H20.9944C21 14.2163 21 13.6346 21 12.9995V10.9995C21 10.3648 21 9.78349 20.9944 9.25ZM17.75 16.25H20.9533C20.8634 17.9753 20.5999 19.0565 19.8284 19.828C19.3096 20.3468 18.6507 20.6359 17.75 20.7969V16.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVideoFrameCut as IconComponentType).keywords = [
  "video",
  "frame",
  "cut",
  "tv",
  "television",
  "picture",
  "telecasting",
  "televised",
  "videotaping",
  "videotaped",
  "taping",
  "videotape",
  "build",
  "put",
  "compose",
  "form",
  "draw up",
  "set up",
  "shape",
  "border",
  "outline",
  "gash",
  "slit",
  "slitted",
  "incised",
  "perforated",
  "gashed",
  "pierced",
  "slashed",
  "perforate"
];

export default IconVideoFrameCut as IconComponentType;