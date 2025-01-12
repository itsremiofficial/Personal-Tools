import { FC } from 'react';

const IconClipboardExport: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6699 6H14.6699C16.6699 6 16.6699 5 16.6699 4C16.6699 2 15.6699 2 14.6699 2H10.6699C9.66992 2 8.66992 2 8.66992 4C8.66992 6 9.66992 6 10.6699 6Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.6699 22H9.66992C4.66992 22 3.66992 20 3.66992 16V10C3.66992 5.44002 5.33992 4.20002 8.66992 4.02002" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.6699 4.02002C19.9999 4.20002 21.6699 5.43002 21.6699 10V15" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M15.6699 19V16H18.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.669 22L15.709 16.04" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.91 3.65002H8.42996C5.95996 3.65002 3.95996 5.66002 3.95996 8.12002V17.53C3.95996 19.99 5.96996 22 8.42996 22H16.9C19.37 22 21.37 19.99 21.37 17.53V8.12002C21.38 5.65002 19.37 3.65002 16.91 3.65002Z" fill="currentColor" /><path d="M15.0199 2H10.3199C9.27993 2 8.42993 2.84 8.42993 3.88V4.82C8.42993 5.86 9.26993 6.7 10.3099 6.7H15.0199C16.0599 6.7 16.8999 5.86 16.8999 4.82V3.88C16.9099 2.84 16.0599 2 15.0199 2Z" fill="currentColor" /><path d="M16.1999 16.47L11.4799 11.75H12.6699C13.0799 11.75 13.4199 11.41 13.4199 11C13.4199 10.59 13.0799 10.25 12.6699 10.25H9.66992C9.25992 10.25 8.91992 10.59 8.91992 11V14C8.91992 14.41 9.25992 14.75 9.66992 14.75C10.0799 14.75 10.4199 14.41 10.4199 14V12.81L15.1399 17.53C15.2899 17.68 15.4799 17.75 15.6699 17.75C15.8599 17.75 16.0499 17.68 16.1999 17.53C16.4899 17.24 16.4899 16.76 16.1999 16.47Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0199 2H10.3199C9.27993 2 8.42993 2.84 8.42993 3.88V4.82C8.42993 5.86 9.26993 6.7 10.3099 6.7H15.0199C16.0599 6.7 16.8999 5.86 16.8999 4.82V3.88C16.9099 2.84 16.0599 2 15.0199 2Z" fill="currentColor" /><path d="M17.91 4.81998C17.91 6.40998 16.61 7.70998 15.02 7.70998H10.32C8.72996 7.70998 7.42996 6.40998 7.42996 4.81998C7.42996 4.25998 6.82996 3.90998 6.32996 4.16998C4.91996 4.91998 3.95996 6.40998 3.95996 8.11998V17.53C3.95996 19.99 5.96996 22 8.42996 22H16.91C19.37 22 21.38 19.99 21.38 17.53V8.11998C21.38 6.40998 20.42 4.91998 19.01 4.16998C18.51 3.90998 17.91 4.25998 17.91 4.81998ZM16.2 17.53C16.05 17.68 15.86 17.75 15.67 17.75C15.48 17.75 15.29 17.68 15.14 17.53L10.42 12.81V14C10.42 14.41 10.08 14.75 9.66996 14.75C9.25996 14.75 8.91996 14.41 8.91996 14V11C8.91996 10.59 9.25996 10.25 9.66996 10.25H12.67C13.08 10.25 13.42 10.59 13.42 11C13.42 11.41 13.08 11.75 12.67 11.75H11.48L16.2 16.47C16.49 16.76 16.49 17.24 16.2 17.53Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconClipboardExport as IconComponent).keywords = [
  "clipboard",
  "export",
  "flipchart",
  "notebook",
  "pad",
  "notepad",
  "whiteboard",
  "pasteboard",
  "chalkboard",
  "sketchpad",
  "copy",
  "exportation",
  "import",
  "importation",
  "trade",
  "sell",
  "exporter",
  "output",
  "outsource",
  "market"
];

export default IconClipboardExport as IconComponent;