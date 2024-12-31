import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMusicDashboard: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7 2.5V21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M11.4705 16.7998C12.2934 16.7998 12.9605 16.1327 12.9605 15.3098C12.9605 14.4869 12.2934 13.8198 11.4705 13.8198C10.6476 13.8198 9.98047 14.4869 9.98047 15.3098C9.98047 16.1327 10.6476 16.7998 11.4705 16.7998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.4309 14.3098V8.47977C18.4309 7.23977 17.6509 7.06982 16.8609 7.27982L13.8809 8.08982C13.3409 8.23982 12.9609 8.66977 12.9609 9.28977V10.3298V11.0298V15.2998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.9314 15.7998C17.7543 15.7998 18.4214 15.1327 18.4214 14.3098C18.4214 13.4869 17.7543 12.8198 16.9314 12.8198C16.1085 12.8198 15.4414 13.4869 15.4414 14.3098C15.4414 15.1327 16.1085 15.7998 16.9314 15.7998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.9609 11.0398L18.4309 9.5498" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7 2.0498V21.9498C3.85 21.6598 2 19.5498 2 16.1898V7.80981C2 4.44981 3.85 2.3398 7 2.0498Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C7.53 22 7.26 21.99 7 21.95V2.04999C7.26 2.00999 7.53 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z" fill="currentColor" /><path d="M18.4902 6.79976C18.1702 6.54976 17.5902 6.30977 16.6702 6.55977L13.6902 7.37977C12.8002 7.60977 12.2202 8.35976 12.2202 9.29976V11.0498V13.2098C11.9902 13.1298 11.7402 13.0698 11.4802 13.0698C10.2402 13.0698 9.24023 14.0798 9.24023 15.3098C9.24023 16.5398 10.2502 17.5498 11.4802 17.5498C12.7002 17.5498 13.7002 16.5597 13.7202 15.3497C13.7202 15.3397 13.7302 15.3298 13.7302 15.3198V11.6198L17.7002 10.5397V12.2197C17.4702 12.1397 17.2202 12.0798 16.9502 12.0798C15.7102 12.0798 14.7102 13.0898 14.7102 14.3198C14.7102 15.5598 15.7202 16.5598 16.9502 16.5598C18.1702 16.5598 19.1702 15.5697 19.1902 14.3497C19.1902 14.3397 19.2002 14.3298 19.2002 14.3098V9.54976V8.47975C19.1802 7.71975 18.9502 7.15976 18.4902 6.79976ZM11.4702 16.0498C11.0602 16.0498 10.7302 15.7198 10.7302 15.3098C10.7302 14.8998 11.0602 14.5698 11.4702 14.5698C11.8802 14.5698 12.2102 14.8998 12.2102 15.3098C12.2102 15.7198 11.8702 16.0498 11.4702 16.0498ZM16.9302 15.0498C16.5202 15.0498 16.1902 14.7198 16.1902 14.3098C16.1902 13.8998 16.5202 13.5698 16.9302 13.5698C17.3402 13.5698 17.6702 13.8998 17.6702 14.3098C17.6702 14.7198 17.3402 15.0498 16.9302 15.0498Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMusicDashboard as IconComponentType).keywords = [
  "music",
  "dashboard",
  "sheet music",
  "euphony",
  "medicine",
  "melody",
  "symphony",
  "orchestra",
  "musician",
  "song",
  "singing",
  "splashboard",
  "meter",
  "panel",
  "pane",
  "fascia",
  "board",
  "box",
  "console",
  "desk"
];

export default IconMusicDashboard as IconComponentType;