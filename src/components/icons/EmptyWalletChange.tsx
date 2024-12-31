import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconEmptyWalletChange: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 13.24V11.51C2.5 9.44001 4.18999 7.75 6.25999 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H12.26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2.5 12.4098V7.83986C2.5 6.64986 3.23 5.58982 4.34 5.16982L12.28 2.16982C13.52 1.69982 14.85 2.61985 14.85 3.94985V7.74983" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22.5608 13.9702V16.0302C22.5608 16.5802 22.1208 17.0302 21.5608 17.0502H19.6008C18.5208 17.0502 17.5308 16.2602 17.4408 15.1802C17.3808 14.5502 17.6208 13.9602 18.0408 13.5502C18.4108 13.1702 18.9208 12.9502 19.4808 12.9502H21.5608C22.1208 12.9702 22.5608 13.4202 22.5608 13.9702Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 16.5H8.34C8.98 16.5 9.5 17.02 9.5 17.66V18.94" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M4.22 15.2803L3 16.5002L4.22 17.7202" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.5 21.7803H4.16C3.52 21.7803 3 21.2603 3 20.6203V19.3403" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.2793 23.0001L9.4993 21.7801L8.2793 20.5601" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.48 12.95H21.5V11.51C21.5 9.44001 19.81 7.75 17.74 7.75H6.25999C4.18999 7.75 2.5 9.44001 2.5 11.51V15.16C3.29 14.44 4.35 14 5.5 14C7.99 14 10 16.02 10 18.5C10 19.03 9.91001 19.53 9.74001 20C9.47001 20.79 8.97 21.47 8.34 22H17.74C19.81 22 21.5 20.31 21.5 18.24V17.05H19.6C18.52 17.05 17.53 16.26 17.44 15.18C17.38 14.55 17.62 13.96 18.04 13.55C18.41 13.17 18.92 12.95 19.48 12.95Z" fill="currentColor" /><path d="M5.5 14C4.35 14 3.29 14.44 2.5 15.16C2.32 15.32 2.15 15.49 2 15.68C1.37 16.45 1 17.43 1 18.5C1 20.99 3.02 23 5.5 23C6.58 23 7.56 22.62 8.34 22C8.97 21.47 9.47001 20.79 9.74001 20C9.91001 19.53 10 19.03 10 18.5C10 16.02 7.99 14 5.5 14ZM8.2 17.63C8.2 17.94 7.94999 18.18 7.64999 18.18C7.34999 18.18 7.10001 17.94 7.10001 17.63V17.52C7.10001 17.4 7.01 17.3 6.89 17.3H4.63C4.74 17.51 4.71999 17.77 4.53999 17.95C4.43999 18.05 4.29999 18.11 4.14999 18.11C4.00999 18.11 3.87 18.05 3.77 17.95L2.96001 17.14C2.91001 17.09 2.87 17.03 2.84 16.96C2.79 16.83 2.79 16.68 2.84 16.54C2.87 16.48 2.91001 16.41 2.96001 16.36L3.77 15.56C3.98 15.34 4.32999 15.34 4.53999 15.56C4.71999 15.73 4.74 16 4.63 16.2H6.89C7.61 16.2 8.2 16.79 8.2 17.52V17.63ZM6.85001 21.6C6.70001 21.6 6.56001 21.55 6.46001 21.44C6.28001 21.27 6.25999 21 6.37 20.8H4.11C3.39 20.8 2.8 20.21 2.8 19.48V19.37C2.8 19.06 3.05001 18.82 3.35001 18.82C3.65001 18.82 3.89999 19.06 3.89999 19.37V19.48C3.89999 19.6 3.99 19.7 4.11 19.7H6.37C6.25999 19.49 6.28001 19.23 6.46001 19.05C6.67001 18.84 7.02 18.84 7.23 19.05L8.03999 19.86C8.08999 19.91 8.13 19.97 8.16 20.04C8.21 20.17 8.21 20.32 8.16 20.46C8.13 20.52 8.08999 20.59 8.03999 20.64L7.23 21.44C7.13 21.55 6.99001 21.6 6.85001 21.6Z" fill="currentColor" /><path d="M14.85 3.95012V7.75011H6.25999C4.18999 7.75011 2.5 9.44012 2.5 11.5101V7.84014C2.5 6.65014 3.23 5.59009 4.34 5.17009L12.28 2.17009C13.52 1.71009 14.85 2.62012 14.85 3.95012Z" fill="currentColor" /><path d="M22.5608 13.9702V16.0302C22.5608 16.5802 22.1208 17.0302 21.5608 17.0502H19.6008C18.5208 17.0502 17.5308 16.2602 17.4408 15.1802C17.3808 14.5502 17.6208 13.9602 18.0408 13.5502C18.4108 13.1702 18.9208 12.9502 19.4808 12.9502H21.5608C22.1208 12.9702 22.5608 13.4202 22.5608 13.9702Z" fill="currentColor" /><path d="M14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconEmptyWalletChange as IconComponentType).keywords = [
  "empty",
  "wallet",
  "change",
  "lifeless",
  "void",
  "vacuous",
  "vacant",
  "empty-handed",
  "meaningless",
  "unfilled",
  "bare",
  "clean",
  "billfold",
  "notecase",
  "portfolio",
  "paper",
  "book",
  "paperwork",
  "briefcase",
  "suitcase",
  "cash",
  "alteration",
  "alter",
  "convert",
  "interchange",
  "vary",
  "modification",
  "variety",
  "transfer",
  "exchange"
];

export default IconEmptyWalletChange as IconComponentType;