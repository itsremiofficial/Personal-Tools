import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSidebarLeft: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9707 15V9C21.9707 4 19.9707 2 14.9707 2H8.9707C3.9707 2 1.9707 4 1.9707 9V15C1.9707 20 3.9707 22 8.9707 22H14.9707C19.9707 22 21.9707 20 21.9707 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.9707 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.9702 9.43994L12.4102 11.9999L14.9702 14.5599" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C7.61 22 7.41 21.99 7.22 21.98C5.99 21.9 4.95 21.55 4.13 20.95C3.71 20.66 3.34 20.29 3.05 19.87C2.36 18.92 2 17.68 2 16.19V7.81C2 4.37 3.94 2.24 7.22 2.03C7.41 2.01 7.61 2 7.81 2H16.19C17.68 2 18.92 2.36 19.87 3.05C20.29 3.34 20.66 3.71 20.95 4.13C21.64 5.08 22 6.32 22 7.81Z" fill="currentColor" /><path d="M8.7207 2V22H7.8107C7.6107 22 7.4107 21.99 7.2207 21.98V2.03C7.4107 2.01 7.6107 2 7.8107 2H8.7207Z" fill="currentColor" /><path d="M14.9696 15.3099C14.7796 15.3099 14.5896 15.2399 14.4396 15.0899L11.8796 12.5299C11.5896 12.2399 11.5896 11.7599 11.8796 11.4699L14.4396 8.90988C14.7296 8.61988 15.2096 8.61988 15.4996 8.90988C15.7896 9.19988 15.7896 9.67988 15.4996 9.96988L13.4796 11.9999L15.5096 14.0299C15.7996 14.3199 15.7996 14.7999 15.5096 15.0899C15.3596 15.2399 15.1696 15.3099 14.9696 15.3099Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSidebarLeft as IconComponentType).keywords = [
  "sidebar",
  "left",
  "billet",
  "margin",
  "textbox",
  "supervised",
  "inset",
  "banknote",
  "vertical",
  "ticket",
  "fare",
  "left-hand",
  "left-handed",
  "left over",
  "near",
  "leftover",
  "nigh",
  "remaining",
  "leftfield",
  "odd"
];

export default IconSidebarLeft as IconComponentType;