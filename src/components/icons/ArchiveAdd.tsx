import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconArchiveAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M14.5 10.6504H9.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 8.20996V13.21" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2Z" fill="currentColor" /><path d="M14.5 9.89996H12.75V8.20996C12.75 7.79996 12.41 7.45996 12 7.45996C11.59 7.45996 11.25 7.79996 11.25 8.20996V9.89996H9.5C9.09 9.89996 8.75 10.24 8.75 10.65C8.75 11.06 9.09 11.4 9.5 11.4H11.25V13.21C11.25 13.62 11.59 13.96 12 13.96C12.41 13.96 12.75 13.62 12.75 13.21V11.4H14.5C14.91 11.4 15.25 11.06 15.25 10.65C15.25 10.24 14.91 9.89996 14.5 9.89996Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArchiveAdd as IconComponentType).keywords = [
  "archive",
  "add",
  "file away",
  "archival",
  "file",
  "record-keeping",
  "registry",
  "record",
  "photo",
  "filer",
  "filename",
  "total",
  "sum up",
  "tot up",
  "add up",
  "sum",
  "summate",
  "impart",
  "contribute",
  "supply"
];

export default IconArchiveAdd as IconComponentType;