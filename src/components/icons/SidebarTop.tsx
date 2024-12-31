import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSidebarTop: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9707 15V9C21.9707 4 19.9707 2 14.9707 2H8.9707C3.9707 2 1.9707 4 1.9707 9V15C1.9707 20 3.9707 22 8.9707 22H14.9707C19.9707 22 21.9707 20 21.9707 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 8.5H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.5595 15.4999L11.9995 12.9399L9.43945 15.4999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 7.61 21.99 7.41 21.98 7.22C21.9 5.99 21.55 4.95 20.95 4.13C20.66 3.71 20.29 3.34 19.87 3.05C18.92 2.36 17.68 2 16.19 2H7.81C4.37 2 2.24 3.94 2.03 7.22C2.01 7.41 2 7.61 2 7.81V16.19C2 17.68 2.36 18.92 3.05 19.87C3.34 20.29 3.71 20.66 4.13 20.95C5.08 21.64 6.32 22 7.81 22Z" fill="currentColor" /><path d="M2 8.72022H22V7.81021C22 7.61022 21.99 7.41021 21.98 7.22021H2.03C2.01 7.41021 2 7.61022 2 7.81021V8.72022Z" fill="currentColor" /><path d="M15.3109 14.9701C15.3109 14.7801 15.2409 14.5901 15.0909 14.4401L12.5309 11.8801C12.2409 11.5901 11.7609 11.5901 11.4709 11.8801L8.91086 14.4401C8.62086 14.7301 8.62086 15.2101 8.91086 15.5001C9.20086 15.7901 9.68086 15.7901 9.97086 15.5001L12.0009 13.4801L14.0309 15.5101C14.3209 15.8001 14.8009 15.8001 15.0909 15.5101C15.2409 15.3601 15.3109 15.1701 15.3109 14.9701Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSidebarTop as IconComponentType).keywords = [
  "sidebar",
  "top",
  "billet",
  "margin",
  "textbox",
  "supervised",
  "inset",
  "banknote",
  "vertical",
  "ticket",
  "fare",
  "upper side",
  "upside",
  "elevation",
  "uppermost",
  "height",
  "pinnacle",
  "peak",
  "upper",
  "topmost"
];

export default IconSidebarTop as IconComponentType;