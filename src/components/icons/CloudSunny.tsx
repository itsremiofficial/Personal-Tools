import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCloudSunny: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.2695 18.6801C19.2795 19.5901 17.9795 20.0901 16.6295 20.0801H5.53945C0.869454 19.7401 0.859454 12.9401 5.53945 12.6001H5.58945C2.88945 5.06014 12.1195 1.34014 15.9995 6.03014V6.04014C16.6995 6.90014 17.2295 8.04014 17.4695 9.49014C18.7995 9.66014 19.8795 10.3101 20.6495 11.2301C22.3995 13.3001 22.5495 16.6801 20.2695 18.6801Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.25984 13.0101C6.73984 12.7501 6.16984 12.6101 5.58984 12.6001" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.8496 9.91977C16.3696 9.65977 16.9396 9.51977 17.5196 9.50977" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M21.97 8.5C21.97 9.6 21.46 10.59 20.65 11.23C19.88 10.31 18.8 9.66 17.47 9.49C17.23 8.04 16.7 6.9 16 6.04V6.03C16.63 5.39 17.51 5 18.47 5C20.4 5 21.97 6.57 21.97 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.6098 10.83C19.8398 9.90996 18.8498 9.30996 17.6998 9.04996C17.4398 7.88996 16.9898 6.88996 16.3298 6.05996C16.3098 6.02996 16.2898 5.99996 16.2698 5.97996C14.0698 3.31996 10.4698 3.32996 8.03977 4.70996C5.95977 5.89996 4.18977 8.40996 5.11977 11.99C2.98977 12.51 2.00977 14.37 2.00977 16.05C2.00977 17.93 3.23977 20.04 5.97977 20.24H16.3198C16.3298 20.24 16.3498 20.24 16.3598 20.24C17.7798 20.24 19.1398 19.71 20.1898 18.75C22.6998 16.53 22.3698 12.91 20.6098 10.83Z" fill="currentColor" /><path d="M21.7609 8.74001C21.7609 9.64001 21.4409 10.5 20.8609 11.16C20.7909 11.05 20.7009 10.94 20.6109 10.83C19.8509 9.92001 18.8509 9.30001 17.7009 9.05001C17.4509 7.89001 16.9909 6.90001 16.3309 6.07001C16.3209 6.04001 16.2909 6.01001 16.2709 5.99001C16.1709 5.87001 16.0609 5.76001 15.9609 5.65001C16.5709 5.23001 17.2709 5.01001 18.0309 5.01001C20.0909 5.01001 21.7609 6.68001 21.7609 8.74001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCloudSunny as IconComponentType).keywords = [
  "cloud",
  "sunny",
  "fog",
  "mist",
  "befog",
  "haze over",
  "becloud",
  "dapple",
  "mottle",
  "sully",
  "defile",
  "sunshiny",
  "shining",
  "shiny",
  "bright",
  "clear",
  "cheerful",
  "cheery",
  "gay",
  "sunshine"
];

export default IconCloudSunny as IconComponentType;