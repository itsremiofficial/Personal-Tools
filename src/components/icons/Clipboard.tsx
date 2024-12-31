import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconClipboard: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.63 7.15014C18.67 7.76014 18.62 8.45014 18.5 9.22014L17.77 13.9101C17.15 17.8201 15.34 19.1401 11.43 18.5301L6.73999 17.7901C5.38999 17.5801 4.34999 17.2201 3.58999 16.6801C2.13999 15.6701 1.71999 14.0101 2.11999 11.4501L2.85999 6.76014C3.47999 2.85014 5.28999 1.53014 9.19999 2.14014L13.89 2.88014C17.03 3.37014 18.5 4.65014 18.63 7.15014Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.4998 13.4699L18.9998 17.9799C17.7498 21.7399 15.7498 22.7399 11.9898 21.4899L7.47984 19.9899C5.20984 19.2399 3.94984 18.1999 3.58984 16.6799C4.34984 17.2199 5.38984 17.5799 6.73984 17.7899L11.4298 18.5299C15.3398 19.1399 17.1498 17.8199 17.7698 13.9099L18.4998 9.2199C18.6198 8.4499 18.6698 7.7599 18.6298 7.1499C21.0198 8.4199 21.5398 10.3399 20.4998 13.4699Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.24 8.98C9.20098 8.98 9.98 8.20098 9.98 7.24C9.98 6.27902 9.20098 5.5 8.24 5.5C7.27902 5.5 6.5 6.27902 6.5 7.24C6.5 8.20098 7.27902 8.98 8.24 8.98Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M13.89 2.8799L9.19999 2.1399C5.28999 1.5299 3.47999 2.8499 2.85999 6.7599L2.11999 11.4499C1.71999 14.0099 2.13999 15.6699 3.58999 16.6799C4.34999 17.2199 5.38999 17.5799 6.73999 17.7899L11.43 18.5299C15.34 19.1399 17.15 17.8199 17.77 13.9099L18.5 9.2199C18.62 8.4499 18.67 7.7599 18.63 7.1499C18.5 4.6499 17.03 3.3699 13.89 2.8799ZM8.23999 9.3499C7.06999 9.3499 6.11999 8.3999 6.11999 7.2399C6.11999 6.0699 7.06999 5.1199 8.23999 5.1199C9.39999 5.1199 10.35 6.0699 10.35 7.2399C10.35 8.3999 9.39999 9.3499 8.23999 9.3499Z" fill="currentColor" /><path d="M20.4998 13.4699L18.9998 17.9799C17.7498 21.7399 15.7498 22.7399 11.9898 21.4899L7.47984 19.9899C5.20984 19.2399 3.94984 18.1999 3.58984 16.6799C4.34984 17.2199 5.38984 17.5799 6.73984 17.7899L11.4298 18.5299C15.3398 19.1399 17.1498 17.8199 17.7698 13.9099L18.4998 9.2199C18.6198 8.4499 18.6698 7.7599 18.6298 7.1499C21.0198 8.4199 21.5398 10.3399 20.4998 13.4699Z" fill="currentColor" /><path d="M10.3491 7.24012C10.3491 8.40012 9.39914 9.35012 8.23914 9.35012C7.06914 9.35012 6.11914 8.40012 6.11914 7.24012C6.11914 6.07012 7.06914 5.12012 8.23914 5.12012C9.39914 5.12012 10.3491 6.07012 10.3491 7.24012Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconClipboard as IconComponentType).keywords = [
  "clipboard",
  "flipchart",
  "notebook",
  "pad",
  "notepad",
  "whiteboard",
  "pasteboard",
  "chalkboard",
  "sketchpad",
  "copy"
];

export default IconClipboard as IconComponentType;