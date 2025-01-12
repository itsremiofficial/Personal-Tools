import { FC } from 'react';

const IconSendSqaure2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M11.2598 7.67993H15.4998V11.9299" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M15.4998 7.67993L9.83984 13.3399" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M6.66992 16.51C10.5599 17.81 14.7799 17.81 18.6699 16.51" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8597 2H8.4897C4.8497 2 2.67969 4.17 2.67969 7.81V16.18C2.67969 19.82 4.8497 21.99 8.4897 21.99H16.8597C20.4997 21.99 22.6697 19.82 22.6697 16.18V7.81C22.6697 4.17 20.4997 2 16.8597 2Z" fill="currentColor" /><path d="M9.84001 14.09C10.03 14.09 10.22 14.02 10.37 13.87L14.75 9.49004V11.92C14.75 12.33 15.09 12.67 15.5 12.67C15.91 12.67 16.25 12.33 16.25 11.92V7.68005C16.25 7.58005 16.23 7.49005 16.19 7.39005C16.11 7.21005 15.97 7.06005 15.78 6.98005C15.69 6.94005 15.59 6.92004 15.49 6.92004H11.25C10.84 6.92004 10.5 7.26004 10.5 7.67004C10.5 8.08004 10.84 8.42004 11.25 8.42004H13.68L9.30002 12.8C9.01002 13.09 9.01002 13.57 9.30002 13.86C9.46002 14.02 9.65001 14.09 9.84001 14.09Z" fill="currentColor" /><path d="M19.3801 16.2801C19.2501 15.8901 18.8301 15.6801 18.4301 15.8101C14.7101 17.0501 10.6201 17.0501 6.9001 15.8101C6.5101 15.6801 6.0801 15.8901 5.9501 16.2801C5.8201 16.6701 6.0301 17.1001 6.4201 17.2301C8.4301 17.9001 10.5401 18.2401 12.6601 18.2401C14.7801 18.2401 16.8901 17.9001 18.9001 17.2301C19.3001 17.0901 19.5101 16.6701 19.3801 16.2801Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM9.30992 12.81L13.6899 8.43H11.2599C10.8499 8.43 10.5099 8.09 10.5099 7.68C10.5099 7.27 10.8499 6.93 11.2599 6.93H15.4999C15.5999 6.93 15.6899 6.95 15.7899 6.99C15.9699 7.07 16.1199 7.21 16.1999 7.4C16.2399 7.49 16.2599 7.59 16.2599 7.69V11.93C16.2599 12.34 15.9199 12.68 15.5099 12.68C15.0999 12.68 14.7599 12.34 14.7599 11.93V9.5L10.3699 13.87C10.2199 14.02 10.0299 14.09 9.83992 14.09C9.64992 14.09 9.45992 14.02 9.30992 13.87C9.01992 13.58 9.01992 13.1 9.30992 12.81ZM18.9099 17.22C16.8999 17.89 14.7899 18.23 12.6699 18.23C10.5499 18.23 8.43992 17.89 6.42992 17.22C6.03992 17.09 5.82992 16.66 5.95992 16.27C6.08992 15.88 6.50992 15.66 6.90992 15.8C10.6299 17.04 14.7199 17.04 18.4399 15.8C18.8299 15.67 19.2599 15.88 19.3899 16.27C19.5099 16.67 19.2999 17.09 18.9099 17.22Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSendSqaure2 as IconComponent).keywords = [
  "send",
  "sqaure",
  "2",
  "transmit",
  "charge",
  "transport",
  "mail",
  "base",
  "institutionalize",
  "place",
  "broadcast",
  "commit",
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

export default IconSendSqaure2 as IconComponent;