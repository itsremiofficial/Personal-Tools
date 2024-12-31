import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPenTool2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M10.7493 22.5001H13.2693C14.2293 22.5001 14.8493 21.8201 14.6693 20.9901L14.2593 19.1802H9.75934L9.34935 20.9901C9.16935 21.7701 9.84934 22.5001 10.7493 22.5001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.2605 19.1702L15.9906 17.6301C16.9606 16.7701 17.0005 16.1701 16.2305 15.2001L13.1805 11.3302C12.5405 10.5202 11.4906 10.5202 10.8506 11.3302L7.80055 15.2001C7.03055 16.1701 7.03054 16.8001 8.04054 17.6301L9.77055 19.1702" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.0098 11.1201V13.6501" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M12.5195 5H11.5195C10.9695 5 10.5195 4.55 10.5195 4V3C10.5195 2.45 10.9695 2 11.5195 2H12.5195C13.0695 2 13.5195 2.45 13.5195 3V4C13.5195 4.55 13.0695 5 12.5195 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.26953 14.17H4.26953C4.81953 14.17 5.26953 13.72 5.26953 13.17V12.17C5.26953 11.62 4.81953 11.1699 4.26953 11.1699H3.26953C2.71953 11.1699 2.26953 11.62 2.26953 12.17V13.17C2.26953 13.72 2.71953 14.17 3.26953 14.17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.7305 14.17H19.7305C19.1805 14.17 18.7305 13.72 18.7305 13.17V12.17C18.7305 11.62 19.1805 11.1699 19.7305 11.1699H20.7305C21.2805 11.1699 21.7305 11.62 21.7305 12.17V13.17C21.7305 13.72 21.2805 14.17 20.7305 14.17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.52 3.56006C6.71 4.01006 3.75 7.24004 3.75 11.17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.2495 11.17C20.2495 7.25004 17.3095 4.03006 13.5195 3.56006" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.5195 1.5H11.5195C10.6895 1.5 10.0195 2.17 10.0195 3V4C10.0195 4.83 10.6895 5.5 11.5195 5.5H12.5195C13.3495 5.5 14.0195 4.83 14.0195 4V3C14.0195 2.17 13.3495 1.5 12.5195 1.5Z" fill="currentColor" /><path d="M4.26953 10.6699H3.26953C2.43953 10.6699 1.76953 11.3399 1.76953 12.1699V13.1699C1.76953 13.9999 2.43953 14.6699 3.26953 14.6699H4.26953C5.09953 14.6699 5.76953 13.9999 5.76953 13.1699V12.1699C5.76953 11.3399 5.08953 10.6699 4.26953 10.6699Z" fill="currentColor" /><path d="M20.7305 10.6699H19.7305C18.9005 10.6699 18.2305 11.3399 18.2305 12.1699V13.1699C18.2305 13.9999 18.9005 14.6699 19.7305 14.6699H20.7305C21.5605 14.6699 22.2305 13.9999 22.2305 13.1699V12.1699C22.2305 11.3399 21.5605 10.6699 20.7305 10.6699Z" fill="currentColor" /><path d="M3.75 11.9198C3.34 11.9198 3 11.5798 3 11.1698C3 6.89982 6.2 3.30984 10.44 2.80984C10.84 2.76984 11.22 3.05981 11.27 3.46981C11.32 3.87981 11.02 4.24983 10.61 4.29983C7.13 4.70983 4.5 7.65982 4.5 11.1698C4.5 11.5798 4.16 11.9198 3.75 11.9198Z" fill="currentColor" /><path d="M20.249 11.9198C19.839 11.9198 19.499 11.5798 19.499 11.1698C19.499 7.67979 16.889 4.72981 13.429 4.30981C13.019 4.25981 12.729 3.88979 12.779 3.47979C12.829 3.06979 13.209 2.77982 13.619 2.82982C17.829 3.33982 21.009 6.9298 21.009 11.1798C20.999 11.5798 20.669 11.9198 20.249 11.9198Z" fill="currentColor" /><path d="M13.2898 22.0101H10.7198C9.79983 22.0101 9.11982 21.2701 9.28982 20.4701L9.70983 18.6201H14.2998L14.7198 20.4701C14.9098 21.3201 14.2698 22.0101 13.2898 22.0101Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.0698 17.0499L14.2998 18.6199H9.70981L7.93981 17.0499C6.90981 16.2099 6.90981 15.5599 7.68981 14.5699L10.8098 10.6299C11.0298 10.3599 11.2798 10.1699 11.5498 10.0799C11.8398 9.97988 12.1598 9.97988 12.4498 10.0799C12.7198 10.1799 12.9698 10.3599 13.1898 10.6299L16.3098 14.5699C17.0898 15.5599 17.0598 16.1799 16.0698 17.0499Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPenTool2 as IconComponentType).keywords = [
  "pen",
  "tool",
  "2",
  "playpen",
  "penitentiary",
  "compose",
  "indite",
  "write",
  "paddock",
  "corral",
  "basin",
  "sty",
  "pecker",
  "shaft",
  "prick",
  "joyride",
  "puppet",
  "tool around",
  "creature",
  "drive",
  "dick",
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

export default IconPenTool2 as IconComponentType;