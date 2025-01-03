import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconClipboardText: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M8.66992 12.2H15.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.66992 16.2H13.0499" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.6699 6H14.6699C16.6699 6 16.6699 5 16.6699 4C16.6699 2 15.6699 2 14.6699 2H10.6699C9.66992 2 8.66992 2 8.66992 4C8.66992 6 9.66992 6 10.6699 6Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.6699 4.02002C19.9999 4.20002 21.6699 5.43002 21.6699 10V16C21.6699 20 20.6699 22 15.6699 22H9.66992C4.66992 22 3.66992 20 3.66992 16V10C3.66992 5.44002 5.33992 4.20002 8.66992 4.02002" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.91 3.65002H8.42996C5.95996 3.65002 3.95996 5.66002 3.95996 8.12002V17.53C3.95996 19.99 5.96996 22 8.42996 22H16.9C19.37 22 21.37 19.99 21.37 17.53V8.12002C21.38 5.65002 19.37 3.65002 16.91 3.65002Z" fill="currentColor" /><path d="M15.0199 2H10.3199C9.27993 2 8.42993 2.84 8.42993 3.88V4.82C8.42993 5.86 9.26993 6.7 10.3099 6.7H15.0199C16.0599 6.7 16.8999 5.86 16.8999 4.82V3.88C16.9099 2.84 16.0599 2 15.0199 2Z" fill="currentColor" /><path d="M15.6699 12.95H8.66992C8.25992 12.95 7.91992 12.61 7.91992 12.2C7.91992 11.79 8.25992 11.45 8.66992 11.45H15.6699C16.0799 11.45 16.4199 11.79 16.4199 12.2C16.4199 12.61 16.0799 12.95 15.6699 12.95Z" fill="currentColor" /><path d="M13.0499 16.95H8.66992C8.25992 16.95 7.91992 16.61 7.91992 16.2C7.91992 15.79 8.25992 15.45 8.66992 15.45H13.0499C13.4599 15.45 13.7999 15.79 13.7999 16.2C13.7999 16.61 13.4599 16.95 13.0499 16.95Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0199 2H10.3199C9.27993 2 8.42993 2.84 8.42993 3.88V4.82C8.42993 5.86 9.26993 6.7 10.3099 6.7H15.0199C16.0599 6.7 16.8999 5.86 16.8999 4.82V3.88C16.9099 2.84 16.0599 2 15.0199 2Z" fill="currentColor" /><path d="M17.91 4.81998C17.91 6.40998 16.61 7.70998 15.02 7.70998H10.32C8.72996 7.70998 7.42996 6.40998 7.42996 4.81998C7.42996 4.25998 6.82996 3.90998 6.32996 4.16998C4.91996 4.91998 3.95996 6.40998 3.95996 8.11998V17.53C3.95996 19.99 5.96996 22 8.42996 22H16.91C19.37 22 21.38 19.99 21.38 17.53V8.11998C21.38 6.40998 20.42 4.91998 19.01 4.16998C18.51 3.90998 17.91 4.25998 17.91 4.81998ZM13.05 16.95H8.66996C8.25996 16.95 7.91996 16.61 7.91996 16.2C7.91996 15.79 8.25996 15.45 8.66996 15.45H13.05C13.46 15.45 13.8 15.79 13.8 16.2C13.8 16.61 13.46 16.95 13.05 16.95ZM15.67 12.95H8.66996C8.25996 12.95 7.91996 12.61 7.91996 12.2C7.91996 11.79 8.25996 11.45 8.66996 11.45H15.67C16.08 11.45 16.42 11.79 16.42 12.2C16.42 12.61 16.08 12.95 15.67 12.95Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconClipboardText as IconComponentType).keywords = [
  "clipboard",
  "text",
  "flipchart",
  "notebook",
  "pad",
  "notepad",
  "whiteboard",
  "pasteboard",
  "chalkboard",
  "sketchpad",
  "copy",
  "schoolbook",
  "textbook",
  "school text",
  "text edition",
  "textual matter",
  "writing",
  "letter",
  "paragraph",
  "manuscript"
];

export default IconClipboardText as IconComponentType;