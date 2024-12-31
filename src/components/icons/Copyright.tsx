import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCopyright: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.8802 15C14.1702 15.62 13.2502 16 12.2402 16C10.0302 16 8.24023 14.21 8.24023 12C8.24023 9.79 10.0302 8 12.2402 8C13.2502 8 14.1702 8.38 14.8802 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22Z" fill="currentColor" /><path d="M12.2402 16.75C9.62023 16.75 7.49023 14.62 7.49023 12C7.49023 9.38 9.62023 7.25 12.2402 7.25C13.3902 7.25 14.5102 7.67 15.3702 8.44C15.6802 8.71 15.7102 9.19 15.4402 9.5C15.1602 9.81 14.6902 9.84001 14.3802 9.57001C13.7902 9.05001 13.0302 8.76001 12.2402 8.76001C10.4502 8.76001 8.99023 10.22 8.99023 12.01C8.99023 13.8 10.4502 15.26 12.2402 15.26C13.0202 15.26 13.7902 14.97 14.3802 14.45C14.6902 14.18 15.1702 14.21 15.4402 14.52C15.7102 14.83 15.6802 15.31 15.3702 15.58C14.5002 16.33 13.3902 16.75 12.2402 16.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCopyright as IconComponentType).keywords = [
  "copyright",
  "proprietary",
  "right of first publication",
  "sponsor",
  "law",
  "ownership",
  "property",
  "complainant",
  "proposer",
  "originator"
];

export default IconCopyright as IconComponentType;