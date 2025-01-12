import { FC } from 'react';

const IconClipboardClose: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M14.669 16.1602L10.709 12.2002" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.6299 12.2402L10.6699 16.2002" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M10.6699 6H14.6699C16.6699 6 16.6699 5 16.6699 4C16.6699 2 15.6699 2 14.6699 2H10.6699C9.66992 2 8.66992 2 8.66992 4C8.66992 6 9.66992 6 10.6699 6Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.6699 4.02002C19.9999 4.20002 21.6699 5.43002 21.6699 10V16C21.6699 20 20.6699 22 15.6699 22H9.66992C4.66992 22 3.66992 20 3.66992 16V10C3.66992 5.44002 5.33992 4.20002 8.66992 4.02002" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.91 3.65002H8.42996C5.95996 3.65002 3.95996 5.66002 3.95996 8.12002V17.53C3.95996 19.99 5.96996 22 8.42996 22H16.9C19.37 22 21.37 19.99 21.37 17.53V8.12002C21.38 5.65002 19.37 3.65002 16.91 3.65002Z" fill="currentColor" /><path d="M15.0199 2H10.3199C9.27993 2 8.42993 2.84 8.42993 3.88V4.82C8.42993 5.86 9.26993 6.7 10.3099 6.7H15.0199C16.0599 6.7 16.8999 5.86 16.8999 4.82V3.88C16.9099 2.84 16.0599 2 15.0199 2Z" fill="currentColor" /><path d="M15.1999 15.62L13.7499 14.17L15.1499 12.77C15.4399 12.48 15.4399 12 15.1499 11.71C14.8599 11.42 14.3799 11.42 14.0899 11.71L12.6899 13.11L11.2399 11.66C10.9499 11.37 10.4699 11.37 10.1799 11.66C9.88986 11.95 9.88986 12.43 10.1799 12.72L11.6299 14.17L10.1399 15.66C9.84986 15.95 9.84986 16.43 10.1399 16.72C10.2899 16.87 10.4799 16.94 10.6699 16.94C10.8599 16.94 11.0499 16.87 11.1999 16.72L12.6899 15.23L14.1399 16.68C14.2899 16.83 14.4799 16.9 14.6699 16.9C14.8599 16.9 15.0499 16.83 15.1999 16.68C15.4899 16.39 15.4899 15.92 15.1999 15.62Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0199 2H10.3199C9.27993 2 8.42993 2.84 8.42993 3.88V4.82C8.42993 5.86 9.26993 6.7 10.3099 6.7H15.0199C16.0599 6.7 16.8999 5.86 16.8999 4.82V3.88C16.9099 2.84 16.0599 2 15.0199 2Z" fill="currentColor" /><path d="M17.91 4.81998C17.91 6.40998 16.61 7.70998 15.02 7.70998H10.32C8.72996 7.70998 7.42996 6.40998 7.42996 4.81998C7.42996 4.25998 6.82996 3.90998 6.32996 4.16998C4.91996 4.91998 3.95996 6.40998 3.95996 8.11998V17.53C3.95996 19.99 5.96996 22 8.42996 22H16.91C19.37 22 21.38 19.99 21.38 17.53V8.11998C21.38 6.40998 20.42 4.91998 19.01 4.16998C18.51 3.90998 17.91 4.25998 17.91 4.81998ZM15.2 16.69C15.05 16.84 14.86 16.91 14.67 16.91C14.48 16.91 14.29 16.84 14.14 16.69L12.69 15.24L11.2 16.73C11.05 16.88 10.86 16.95 10.67 16.95C10.48 16.95 10.29 16.88 10.14 16.73C9.84996 16.44 9.84996 15.96 10.14 15.67L11.63 14.18L10.18 12.73C9.88996 12.44 9.88996 11.96 10.18 11.67C10.47 11.38 10.95 11.38 11.24 11.67L12.69 13.12L14.09 11.72C14.38 11.43 14.86 11.43 15.15 11.72C15.44 12.01 15.44 12.49 15.15 12.78L13.75 14.18L15.2 15.63C15.49 15.92 15.49 16.39 15.2 16.69Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconClipboardClose as IconComponent).keywords = [
  "clipboard",
  "close",
  "flipchart",
  "notebook",
  "pad",
  "notepad",
  "whiteboard",
  "pasteboard",
  "chalkboard",
  "sketchpad",
  "copy",
  "confining",
  "restrained",
  "end",
  "terminus",
  "finis",
  "conclusion",
  "ending",
  "finish",
  "shut"
];

export default IconClipboardClose as IconComponent;