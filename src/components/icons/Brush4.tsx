import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBrush4: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10 16C10 14.34 10 13 13 13H17C20 13 20 12 20 10V8C20 6 20 5 17 5H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.9992 2H7.99922C7.34922 3.95 7.34922 6.05 7.99922 8H11.9992C12.6492 6.05 12.6492 3.95 11.9992 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 2H7C5 2 4 3 4 5C4 7 5 8 7 8H8C7 6 7 4 8 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13 2H12C13 4 13 6 12 8H13C15 8 16 7 16 5C16 3 15 2 13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.5 22H10.5C12 22 12 21 12 20.5V17.5C12 17 12 16 10.5 16H9.5C8 16 8 17 8 17.5V20.5C8 21 8 22 9.5 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.5194 2.9C14.9194 2.3 14.0494 2 12.9294 2H7.34938C5.09938 2 3.85938 3.24 3.85938 5.49C3.85938 6.61 4.15938 7.48 4.75938 8.08C5.35938 8.68 6.22937 8.98 7.34938 8.98H12.9294C15.1794 8.98 16.4194 7.74 16.4194 5.49C16.4194 4.37 16.1194 3.5 15.5194 2.9Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M10.6001 15.02H9.67008C8.72008 15.02 7.58008 15.38 7.58008 17.11V19.9C7.58008 21.63 8.72008 21.99 9.67008 21.99H10.6001C11.5501 21.99 12.6901 21.63 12.6901 19.9V17.11C12.7001 15.39 11.5601 15.02 10.6001 15.02Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.6492 4.79004H16.3692C16.3992 5.01004 16.4192 5.24004 16.4192 5.49004C16.4192 5.74004 16.3992 5.97004 16.3692 6.19004H16.6492C18.7392 6.19004 18.7392 6.47004 18.7392 8.28004V10.14C18.7392 11.95 18.7392 12.23 16.6492 12.23H12.9292C9.93922 12.23 9.50922 13.65 9.44922 15.03C9.51922 15.03 9.59922 15.02 9.66922 15.02H10.5992C10.6792 15.02 10.7592 15.03 10.8492 15.03C10.8992 14.02 11.1892 13.62 12.9292 13.62H16.6492C19.8992 13.62 20.1392 12.3 20.1392 10.13V8.28004C20.1392 6.11004 19.8992 4.79004 16.6492 4.79004Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBrush4 as IconComponentType).keywords = [
  "brush",
  "4",
  "sweep",
  "copse",
  "thicket",
  "coppice",
  "brushwood",
  "clash",
  "skirmish",
  "kiss",
  "encounter",
  "dh",
  "f4f"
];

export default IconBrush4 as IconComponentType;