import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconArchiveTick: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.58984 11L11.0898 12.5L15.0898 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8203 1.91016H7.18031C5.06031 1.91016 3.32031 3.65016 3.32031 5.77016V19.8602C3.32031 21.6602 4.61031 22.4202 6.19031 21.5502L11.0703 18.8402C11.5903 18.5502 12.4303 18.5502 12.9403 18.8402L17.8203 21.5502C19.4003 22.4302 20.6903 21.6702 20.6903 19.8602V5.77016C20.6803 3.65016 18.9503 1.91016 16.8203 1.91016Z" fill="currentColor" /><path d="M11.0893 13.2499C10.8993 13.2499 10.7093 13.1799 10.5593 13.0299L9.0593 11.5299C8.7693 11.2399 8.7693 10.7599 9.0593 10.4699C9.3493 10.1799 9.8293 10.1799 10.1193 10.4699L11.0893 11.4399L14.5593 7.96994C14.8493 7.67994 15.3293 7.67994 15.6193 7.96994C15.9093 8.25994 15.9093 8.73994 15.6193 9.02994L11.6193 13.0299C11.4693 13.1799 11.2793 13.2499 11.0893 13.2499Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArchiveTick as IconComponentType).keywords = [
  "archive",
  "tick",
  "file away",
  "archival",
  "file",
  "record-keeping",
  "registry",
  "record",
  "photo",
  "filer",
  "filename",
  "click",
  "ticktock",
  "beat",
  "ticktack",
  "retick",
  "ixodid",
  "acarid",
  "spinose",
  "gene"
];

export default IconArchiveTick as IconComponentType;