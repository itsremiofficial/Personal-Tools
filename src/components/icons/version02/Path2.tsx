import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPath2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_12_78682)"><path d="M10.54 22.0001H14.83C16.45 22.0001 17.52 20.8401 17.2 19.4301L16.51 16.3501H8.86999L8.17999 19.4301C7.86999 20.7601 9.00999 22.0001 10.54 22.0001Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M16.4991 16.3501L19.4391 13.7401C21.0791 12.2801 21.1491 11.2601 19.8491 9.61012L14.6591 3.03012C13.5691 1.65012 11.7891 1.65012 10.6891 3.03012L5.50908 9.61012C4.20908 11.2601 4.20908 12.3301 5.91908 13.7401L8.85908 16.3501" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6797 2.66992V6.96992" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><defs><clipPath ><rect width="24" height="24" fill="none" transform="translate(0.669922)" /></clipPath></defs></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8195 22.0001H10.5395C9.00952 22.0001 7.86952 20.7601 8.15952 19.4301L8.85952 16.3501H16.4995L17.1995 19.4301C17.5195 20.8401 16.4495 22.0001 14.8195 22.0001Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M19.4401 13.7399L16.5001 16.3499H8.86006L5.92006 13.7399C4.21006 12.3399 4.21006 11.2599 5.51006 9.60993L10.7001 3.03993C11.0601 2.58993 11.4801 2.27993 11.9301 2.11993C12.4201 1.94993 12.9401 1.94993 13.4301 2.11993C13.8801 2.27993 14.3001 2.58993 14.6601 3.03993L19.8501 9.60993C21.1501 11.2599 21.0901 12.2799 19.4401 13.7399Z" fill="currentColor" /><path d="M13.4297 2.11993V6.96993C13.4297 7.37993 13.0897 7.71993 12.6797 7.71993C12.2697 7.71993 11.9297 7.37993 11.9297 6.96993V2.11993C12.4197 1.94993 12.9397 1.94993 13.4297 2.11993Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8204 22.0001H10.5004C8.96039 22.0001 7.82039 20.7501 8.12039 19.4201L8.64039 17.1001C8.74039 16.6401 9.15039 16.3201 9.62039 16.3201H15.7104C16.1804 16.3201 16.5804 16.6401 16.6904 17.1001L17.2104 19.4101C17.5304 20.8401 16.4604 22.0001 14.8204 22.0001Z" fill="currentColor" /><path d="M19.4898 13.69L18.4198 14.63C18.0498 14.95 17.5798 15.13 17.0998 15.13H8.25975C7.76975 15.13 7.28975 14.95 6.92975 14.62L5.87975 13.68C4.15975 12.27 4.14975 11.19 5.46975 9.53L10.6998 2.92C10.7363 2.87094 10.7738 2.82374 10.8122 2.77836C11.2531 2.25735 11.9398 2.70487 11.9398 3.38743V6.86C11.9298 7.29 12.2698 7.63 12.6898 7.62C13.1098 7.63 13.4398 7.29 13.4498 6.86V3.38743C13.4498 2.70487 14.1261 2.2676 14.5788 2.77848C14.6162 2.82077 14.6532 2.8646 14.6898 2.91L19.8998 9.53C21.1998 11.19 21.1498 12.22 19.4898 13.69Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPath2 as IconComponentType).keywords = [
  "path",
  "2",
  "way",
  "route",
  "track",
  "way of life",
  "course",
  "pathway",
  "footway",
  "footpath",
  "trailhead",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconPath2 as IconComponentType;