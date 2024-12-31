import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDirectboxSend: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M12 8V2L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 2L14 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5 12V10C5 7.99004 5 6.33004 8 6.04004" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19 12V10C19 7.99004 19 6.33004 16 6.04004" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M14.7891 6H9.20906C4.78906 6 4.78906 8.35 4.78906 10.42V12.21C4.78906 12.43 4.88906 12.63 5.05906 12.76C5.22906 12.89 5.45906 12.94 5.66906 12.88C6.11906 12.76 6.67906 12.7 7.34906 12.7C8.01906 12.7 8.15906 12.78 8.55906 13.08L9.46906 14.04C10.1191 14.74 11.0491 15.14 12.0091 15.14C12.9691 15.14 13.8891 14.74 14.5491 14.04L15.4591 13.08C15.8591 12.78 15.9991 12.7 16.6691 12.7C17.3391 12.7 17.8991 12.76 18.3491 12.88C18.5591 12.94 18.7791 12.89 18.9591 12.76C19.1291 12.63 19.2291 12.42 19.2291 12.21V10.42C19.2091 8.35 19.2091 6 14.7891 6Z" fill="currentColor" /><path d="M14.2804 4.95C14.0204 5.21 13.5904 5.21 13.3304 4.95L12.6804 4.3V9.07C12.6804 9.44 12.3804 9.75 12.0004 9.75C11.6204 9.75 11.3204 9.45 11.3204 9.07V4.3L10.6704 4.95C10.4104 5.21 9.98039 5.21 9.72039 4.95C9.46039 4.69 9.46039 4.26 9.72039 4L11.5204 2.2C11.5304 2.19 11.5304 2.19 11.5404 2.19C11.6004 2.14 11.6604 2.09 11.7404 2.06C11.8304 2.02 11.9104 2 12.0004 2C12.0904 2 12.1704 2.02 12.2604 2.05C12.3404 2.08 12.4204 2.13 12.4804 2.2L14.2804 4C14.5404 4.26 14.5404 4.69 14.2804 4.95Z" fill="currentColor" /><path d="M18.6897 11.5298C18.1197 11.3798 17.4497 11.2998 16.6497 11.2998C15.5397 11.2998 15.1297 11.5698 14.5597 11.9998C14.5297 12.0198 14.4997 12.0498 14.4697 12.0798L13.5197 13.0898C12.7197 13.9298 11.2797 13.9398 10.4797 13.0798L9.52969 12.0798C9.49969 12.0498 9.46969 12.0198 9.43969 11.9998C8.86969 11.5698 8.45969 11.2998 7.34969 11.2998C6.54969 11.2998 5.87969 11.3798 5.30969 11.5298C2.92969 12.1698 2.92969 14.0598 2.92969 15.7198V16.6498C2.92969 19.1598 2.92969 21.9998 8.27969 21.9998H15.7197C19.2697 21.9998 21.0697 20.1998 21.0697 16.6498V15.7198C21.0697 14.0598 21.0697 12.1698 18.6897 11.5298ZM14.3297 18.3998H9.66969C9.28969 18.3998 8.97969 18.0898 8.97969 17.6998C8.97969 17.3098 9.28969 16.9998 9.66969 16.9998H14.3297C14.7097 16.9998 15.0197 17.3098 15.0197 17.6998C15.0197 18.0898 14.7097 18.3998 14.3297 18.3998Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.0205 17.7C15.0205 18.09 14.7105 18.4 14.3305 18.4H9.67047C9.29047 18.4 8.98047 18.09 8.98047 17.7C8.98047 17.31 9.29047 17 9.67047 17H14.3305C14.7105 17 15.0205 17.31 15.0205 17.7Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDirectboxSend as IconComponentType).keywords = [
  "directbox",
  "send",
  "transmit",
  "charge",
  "transport",
  "mail",
  "base",
  "institutionalize",
  "place",
  "broadcast",
  "commit"
];

export default IconDirectboxSend as IconComponentType;