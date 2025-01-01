import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBlend2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9707 8C14.9707 11.87 11.8407 15 7.9707 15C7.6507 15 7.3407 14.98 7.0407 14.93C3.6107 14.48 0.970703 11.55 0.970703 8C0.970703 4.13 4.1007 1 7.9707 1C11.5207 1 14.4507 3.64 14.9007 7.07C14.9507 7.37 14.9707 7.68 14.9707 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.971 13.9998C20.971 17.8698 17.841 20.9998 13.971 20.9998C10.421 20.9998 7.49102 18.3598 7.04102 14.9298C7.34102 14.9798 7.65102 14.9998 7.97102 14.9998C11.841 14.9998 14.971 11.8698 14.971 7.99982C14.971 7.67982 14.951 7.36982 14.901 7.06982C18.331 7.51982 20.971 10.4498 20.971 13.9998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M13.1211 13.1201L14.4311 14.4101" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.9707 11L14.9707 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.9707 16L9.9707 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.4996 17.5298C12.3596 17.6798 12.1696 17.7498 11.9696 17.7498C11.7796 17.7498 11.5896 17.6798 11.4396 17.5298L9.84961 15.9398C10.4396 15.8698 11.0096 15.7298 11.5396 15.5098L12.4996 16.4698C12.7996 16.7598 12.7996 17.2398 12.4996 17.5298Z" fill="currentColor" /><path d="M15.9591 15.9301C15.8191 16.0801 15.6191 16.1601 15.4291 16.1601C15.2391 16.1601 15.0491 16.0801 14.8991 15.9401L13.3691 14.4401C13.7591 14.1301 14.1191 13.7701 14.4291 13.3701L15.9491 14.8701C16.2491 15.1601 16.2491 15.6401 15.9591 15.9301Z" fill="currentColor" /><path d="M17.5005 12.5299C17.3605 12.6799 17.1705 12.7499 16.9705 12.7499C16.7805 12.7499 16.5905 12.6799 16.4405 12.5299L15.4805 11.5699C15.7005 11.0399 15.8405 10.4699 15.9105 9.87988L17.5005 11.4699C17.8005 11.7599 17.8005 12.2399 17.5005 12.5299Z" fill="currentColor" /><path d="M15.9007 8.07C15.4507 4.64 12.5207 2 8.9707 2C5.1007 2 1.9707 5.13 1.9707 9C1.9707 12.55 4.6107 15.48 8.0407 15.93C8.3407 15.98 8.6507 16 8.9707 16C9.2707 16 9.5607 15.98 9.8507 15.94L9.4707 15.56C9.1807 15.26 9.1807 14.79 9.4707 14.5C9.7607 14.2 10.2407 14.2 10.5307 14.5L11.5407 15.51C12.2107 15.25 12.8207 14.89 13.3707 14.44L12.4707 13.55C12.1807 13.26 12.1707 12.79 12.4707 12.49C12.7607 12.2 13.2307 12.19 13.5307 12.48L14.4307 13.37C14.8707 12.83 15.2307 12.23 15.4807 11.57L14.4707 10.56C14.1807 10.26 14.1807 9.79 14.4707 9.5C14.7607 9.2 15.2407 9.2 15.5307 9.5L15.9107 9.88C15.9507 9.59 15.9707 9.3 15.9707 9C15.9707 8.68 15.9507 8.37 15.9007 8.07Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.9691 14.9998C21.9691 18.8698 18.8391 21.9998 14.9691 21.9998C11.4191 21.9998 8.48906 19.3598 8.03906 15.9298C8.33906 15.9798 8.64906 15.9998 8.96906 15.9998C9.26906 15.9998 9.55906 15.9798 9.84906 15.9398L11.4391 17.5298C11.5891 17.6798 11.7791 17.7498 11.9691 17.7498C12.1691 17.7498 12.3591 17.6798 12.4991 17.5298C12.7991 17.2398 12.7991 16.7598 12.4991 16.4698L11.5391 15.5098C12.2091 15.2498 12.8191 14.8898 13.3691 14.4398L14.8991 15.9398C15.0491 16.0798 15.2391 16.1598 15.4291 16.1598C15.6191 16.1598 15.8191 16.0798 15.9591 15.9298C16.2491 15.6398 16.2491 15.1598 15.9491 14.8698L14.4291 13.3698C14.8691 12.8298 15.2291 12.2298 15.4791 11.5698L16.4391 12.5298C16.5891 12.6798 16.7791 12.7498 16.9691 12.7498C17.1691 12.7498 17.3591 12.6798 17.4991 12.5298C17.7991 12.2398 17.7991 11.7598 17.4991 11.4698L15.9091 9.87982C15.9491 9.58982 15.9691 9.29982 15.9691 8.99982C15.9691 8.67982 15.9491 8.36982 15.8991 8.06982C19.3291 8.51982 21.9691 11.4498 21.9691 14.9998Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBlend2 as IconComponentType).keywords = [
  "blend",
  "2",
  "intermingle",
  "immix",
  "intermix",
  "mix",
  "commingle",
  "immingle",
  "blend in",
  "conflate",
  "meld",
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

export default IconBlend2 as IconComponentType;