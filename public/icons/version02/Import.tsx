import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconImport: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M9.99023 11.6797L12.5502 14.2397L15.1102 11.6797" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.5508 4V14.17" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M20.6699 12.1801C20.6699 16.6001 17.6699 20.1801 12.6699 20.1801C7.66992 20.1801 4.66992 16.6001 4.66992 12.1801" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6699 10.76C22.6699 10.29 22.2899 9.90002 21.8099 9.90002H3.52992C3.04992 9.90002 2.66992 10.28 2.66992 10.76C2.66992 16.65 6.77992 20.76 12.6699 20.76C18.5599 20.76 22.6699 16.64 22.6699 10.76Z" fill="currentColor" /><path d="M13.1298 15.9L15.9798 13.06C16.2698 12.77 16.2698 12.29 15.9798 12C15.6898 11.71 15.2098 11.71 14.9198 12L13.3598 13.56V3.98999C13.3598 3.57999 13.0198 3.23999 12.6098 3.23999C12.1998 3.23999 11.8598 3.57999 11.8598 3.98999V13.56L10.2898 12C9.99977 11.71 9.51977 11.71 9.22977 12C9.07977 12.15 9.00977 12.34 9.00977 12.53C9.00977 12.72 9.07977 12.91 9.22977 13.06L12.0798 15.9C12.3698 16.2 12.8398 16.2 13.1298 15.9Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.8099 9.90002H13.3499V13.57L14.9199 12C15.2099 11.71 15.6899 11.71 15.9799 12C16.2699 12.29 16.2699 12.77 15.9799 13.06L13.1299 15.9C12.8399 16.19 12.3599 16.19 12.0699 15.9L9.21992 13.06C9.06992 12.91 8.99992 12.72 8.99992 12.53C8.99992 12.34 9.07992 12.15 9.22992 12C9.51992 11.71 9.99992 11.71 10.2899 12L11.8499 13.56V9.90002H3.52992C3.04992 9.90002 2.66992 10.28 2.66992 10.76C2.66992 16.65 6.77992 20.76 12.6699 20.76C18.5599 20.76 22.6699 16.65 22.6699 10.76C22.6699 10.28 22.2899 9.90002 21.8099 9.90002Z" fill="currentColor" /><path d="M13.3501 3.98999C13.3501 3.57999 13.0101 3.23999 12.6001 3.23999C12.1901 3.23999 11.8501 3.57999 11.8501 3.98999V9.88999H13.3501V3.98999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconImport as IconComponentType).keywords = [
  "import",
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

export default IconImport as IconComponentType;