import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconClipboardImport: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6699 6H14.6699C16.6699 6 16.6699 5 16.6699 4C16.6699 2 15.6699 2 14.6699 2H10.6699C9.66992 2 8.66992 2 8.66992 4C8.66992 6 9.66992 6 10.6699 6Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.6699 22H9.66992C4.66992 22 3.66992 20 3.66992 16V10C3.66992 5.44002 5.33992 4.20002 8.66992 4.02002" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.6699 4.02002C19.9999 4.20002 21.6699 5.43002 21.6699 10V15" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M21.6699 19V22H18.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.6699 16L21.6299 21.96" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.91 3.65002H8.42996C5.95996 3.65002 3.95996 5.66002 3.95996 8.12002V17.53C3.95996 19.99 5.96996 22 8.42996 22H16.9C19.37 22 21.37 19.99 21.37 17.53V8.12002C21.38 5.65002 19.37 3.65002 16.91 3.65002Z" fill="currentColor" /><path d="M15.0199 2H10.3199C9.27993 2 8.42993 2.84 8.42993 3.88V4.82C8.42993 5.86 9.26993 6.7 10.3099 6.7H15.0199C16.0599 6.7 16.8999 5.86 16.8999 4.82V3.88C16.9099 2.84 16.0599 2 15.0199 2Z" fill="currentColor" /><path d="M15.6699 13.2499C15.2599 13.2499 14.9199 13.5899 14.9199 13.9999V15.1899L10.1999 10.4699C9.90986 10.1799 9.42986 10.1799 9.13986 10.4699C8.84986 10.7599 8.84986 11.2399 9.13986 11.5299L13.8599 16.2499H12.6699C12.2599 16.2499 11.9199 16.5899 11.9199 16.9999C11.9199 17.4099 12.2599 17.7499 12.6699 17.7499H15.6699C16.0799 17.7499 16.4199 17.4099 16.4199 16.9999V13.9999C16.4199 13.5899 16.0799 13.2499 15.6699 13.2499Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0199 2H10.3199C9.27993 2 8.42993 2.84 8.42993 3.88V4.82C8.42993 5.86 9.26993 6.7 10.3099 6.7H15.0199C16.0599 6.7 16.8999 5.86 16.8999 4.82V3.88C16.9099 2.84 16.0599 2 15.0199 2Z" fill="currentColor" /><path d="M17.91 4.81998C17.91 6.40998 16.61 7.70998 15.02 7.70998H10.32C8.72996 7.70998 7.42996 6.40998 7.42996 4.81998C7.42996 4.25998 6.82996 3.90998 6.32996 4.16998C4.91996 4.91998 3.95996 6.40998 3.95996 8.11998V17.53C3.95996 19.99 5.96996 22 8.42996 22H16.91C19.37 22 21.38 19.99 21.38 17.53V8.11998C21.38 6.40998 20.42 4.91998 19.01 4.16998C18.51 3.90998 17.91 4.25998 17.91 4.81998ZM16.42 17C16.42 17.41 16.08 17.75 15.67 17.75H12.67C12.26 17.75 11.92 17.41 11.92 17C11.92 16.59 12.26 16.25 12.67 16.25H13.86L9.13996 11.53C8.84996 11.24 8.84996 10.76 9.13996 10.47C9.42996 10.18 9.90996 10.18 10.2 10.47L14.92 15.19V14C14.92 13.59 15.26 13.25 15.67 13.25C16.08 13.25 16.42 13.59 16.42 14V17Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconClipboardImport as IconComponentType).keywords = [
  "clipboard",
  "import",
  "flipchart",
  "notebook",
  "pad",
  "notepad",
  "whiteboard",
  "pasteboard",
  "chalkboard",
  "sketchpad",
  "copy",
  "consequence",
  "signification",
  "significance",
  "implication",
  "meaning",
  "moment",
  "spell",
  "export",
  "exportation"
];

export default IconClipboardImport as IconComponentType;