import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRefreshCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M8.00977 14.5099C8.18977 14.8099 8.40976 15.09 8.65976 15.34C10.4998 17.18 13.4898 17.18 15.3398 15.34C16.0898 14.59 16.5198 13.6399 16.6598 12.6699" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.33984 11.3298C7.47984 10.3498 7.90985 9.40979 8.65985 8.65979C10.4999 6.81979 13.4898 6.81979 15.3398 8.65979C15.5998 8.91979 15.8098 9.1998 15.9898 9.4898" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.82031 17.1797V14.5098H10.4903" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.1797 6.81982V9.48981H13.5098" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M16.7586 11.9301C16.3386 11.8601 15.9686 12.1601 15.9086 12.5701C15.7886 13.4401 15.3986 14.2201 14.7986 14.8201C13.4186 16.2001 11.2786 16.3401 9.72861 15.2701H10.4786C10.8886 15.2701 11.2286 14.9301 11.2286 14.5201C11.2286 14.1101 10.8886 13.7701 10.4786 13.7701H7.80859C7.39859 13.7701 7.05859 14.1101 7.05859 14.5201V17.1901C7.05859 17.6001 7.39859 17.9401 7.80859 17.9401C8.21859 17.9401 8.55859 17.6001 8.55859 17.1901V16.2501C9.55859 17.0601 10.7686 17.4901 11.9886 17.4901C13.3886 17.4901 14.7886 16.9601 15.8586 15.8901C16.6886 15.0601 17.2186 13.9901 17.3886 12.7901C17.4586 12.3601 17.1686 11.9801 16.7586 11.9301Z" fill="currentColor" /><path d="M7.33944 12.0801C7.70944 12.0801 8.02943 11.8101 8.07943 11.4401C8.19943 10.5701 8.58944 9.79006 9.18944 9.19006C10.5694 7.81006 12.7095 7.67005 14.2595 8.74005H13.5095C13.0995 8.74005 12.7595 9.08005 12.7595 9.49005C12.7595 9.90005 13.0995 10.2401 13.5095 10.2401H16.1794C16.5894 10.2401 16.9294 9.90005 16.9294 9.49005V6.82007C16.9294 6.41007 16.5894 6.07007 16.1794 6.07007C15.7694 6.07007 15.4294 6.41007 15.4294 6.82007V7.76007C13.2794 6.02007 10.1295 6.13006 8.13946 8.12006C7.30946 8.95006 6.77943 10.02 6.60943 11.22C6.54943 11.63 6.83944 12.0101 7.24944 12.0701C7.26944 12.0801 7.30944 12.0801 7.33944 12.0801Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRefreshCircle as IconComponentType).keywords = [
  "refresh",
  "circle",
  "refreshen",
  "freshen",
  "review",
  "freshen up",
  "brush up",
  "refresher",
  "refreshment",
  "rejuvenate",
  "revive",
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

export default IconRefreshCircle as IconComponentType;