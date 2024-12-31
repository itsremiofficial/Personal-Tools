import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPercentageCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.32031 15.27L14.8603 8.72998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.73001 10.3701C9.40932 10.3701 9.95999 9.81948 9.95999 9.14017C9.95999 8.46086 9.40932 7.91016 8.73001 7.91016C8.0507 7.91016 7.5 8.46086 7.5 9.14017C7.5 9.81948 8.0507 10.3701 8.73001 10.3701Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.269 16.0899C15.9484 16.0899 16.4991 15.5392 16.4991 14.8599C16.4991 14.1806 15.9484 13.6299 15.269 13.6299C14.5897 13.6299 14.0391 14.1806 14.0391 14.8599C14.0391 15.5392 14.5897 16.0899 15.269 16.0899Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M8.31976 16.0201C8.12976 16.0201 7.93977 15.9501 7.78977 15.8001C7.49977 15.5101 7.49977 15.0301 7.78977 14.7401L14.3398 8.19016C14.6298 7.90016 15.1098 7.90016 15.3998 8.19016C15.6898 8.48016 15.6898 8.96015 15.3998 9.25015L8.84976 15.8001C8.69976 15.9501 8.50976 16.0201 8.31976 16.0201Z" fill="currentColor" /><path d="M8.73001 7.66016C7.92001 7.66016 7.25 8.32017 7.25 9.14017C7.25 9.95017 7.91001 10.6201 8.73001 10.6201C9.54001 10.6201 10.21 9.96017 10.21 9.14017C10.2 8.32017 9.54001 7.66016 8.73001 7.66016Z" fill="currentColor" /><path d="M15.269 13.3901C14.459 13.3901 13.7891 14.0501 13.7891 14.8701C13.7891 15.6801 14.449 16.3501 15.269 16.3501C16.079 16.3501 16.7491 15.6901 16.7491 14.8701C16.7491 14.0501 16.089 13.3901 15.269 13.3901Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPercentageCircle as IconComponentType).keywords = [
  "percentage",
  "circle",
  "per centum",
  "percent",
  "pct",
  "part",
  "portion",
  "share",
  "centenary",
  "centennial",
  "percentile",
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

export default IconPercentageCircle as IconComponentType;