import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconNoteFavorite: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.66992 2V5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.6699 2V5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.6699 8.5V13.63C20.7799 12.92 19.6499 12.5 18.4199 12.5C17.1899 12.5 16.0399 12.93 15.1399 13.66C13.9299 14.61 13.1699 16.1 13.1699 17.75C13.1699 18.73 13.4499 19.67 13.9299 20.45C14.2999 21.06 14.7799 21.59 15.3499 22H8.66992C5.16992 22 3.66992 20 3.66992 17V8.5C3.66992 5.5 5.16992 3.5 8.66992 3.5H16.6699C20.1699 3.5 21.6699 5.5 21.6699 8.5Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.66992 11H13.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.66992 16H10.2899" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M23.6699 17.75C23.6699 18.73 23.3899 19.67 22.9099 20.45C22.6299 20.93 22.2799 21.35 21.8699 21.69C20.9499 22.51 19.7499 23 18.4199 23C17.2699 23 16.2099 22.63 15.3499 22C14.7799 21.59 14.2999 21.06 13.9299 20.45C13.4499 19.67 13.1699 18.73 13.1699 17.75C13.1699 16.1 13.9299 14.61 15.1399 13.66C16.0399 12.93 17.1899 12.5 18.4199 12.5C19.6499 12.5 20.7799 12.92 21.6699 13.63C22.8899 14.59 23.6699 16.08 23.6699 17.75Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.4199 20.25C18.4199 18.87 19.5399 17.75 20.9199 17.75C19.5399 17.75 18.4199 16.63 18.4199 15.25C18.4199 16.63 17.2999 17.75 15.9199 17.75C17.2999 17.75 18.4199 18.87 18.4199 20.25Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.66992 5.75C7.25992 5.75 6.91992 5.41 6.91992 5V2C6.91992 1.59 7.25992 1.25 7.66992 1.25C8.07992 1.25 8.41992 1.59 8.41992 2V5C8.41992 5.41 8.07992 5.75 7.66992 5.75Z" fill="currentColor" /><path d="M15.6699 5.75C15.2599 5.75 14.9199 5.41 14.9199 5V2C14.9199 1.59 15.2599 1.25 15.6699 1.25C16.0799 1.25 16.4199 1.59 16.4199 2V5C16.4199 5.41 16.0799 5.75 15.6699 5.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.6699 8.5V17C20.6699 20 19.1699 22 15.6699 22H7.66992C4.16992 22 2.66992 20 2.66992 17V8.5C2.66992 5.5 4.16992 3.5 7.66992 3.5H15.6699C19.1699 3.5 20.6699 5.5 20.6699 8.5Z" fill="currentColor" /><path d="M13.6699 11.75H7.66992C7.25992 11.75 6.91992 11.41 6.91992 11C6.91992 10.59 7.25992 10.25 7.66992 10.25H13.6699C14.0799 10.25 14.4199 10.59 14.4199 11C14.4199 11.41 14.0799 11.75 13.6699 11.75Z" fill="currentColor" /><path d="M10.6699 16.75H7.66992C7.25992 16.75 6.91992 16.41 6.91992 16C6.91992 15.59 7.25992 15.25 7.66992 15.25H10.6699C11.0799 15.25 11.4199 15.59 11.4199 16C11.4199 16.41 11.0799 16.75 10.6699 16.75Z" fill="currentColor" /><path d="M21.6699 13.63C20.7799 12.92 19.6499 12.5 18.4199 12.5C17.1899 12.5 16.0399 12.93 15.1399 13.66C13.9299 14.61 13.1699 16.1 13.1699 17.75C13.1699 18.73 13.4499 19.67 13.9299 20.45C14.2999 21.06 14.7799 21.59 15.3499 22C16.2099 22.63 17.2699 23 18.4199 23C19.7499 23 20.9499 22.51 21.8699 21.69C22.2799 21.35 22.6299 20.93 22.9099 20.45C23.3899 19.67 23.6699 18.73 23.6699 17.75C23.6699 16.08 22.8899 14.59 21.6699 13.63ZM18.4199 20.25C18.4199 18.87 17.2999 17.75 15.9199 17.75C17.2999 17.75 18.4199 16.63 18.4199 15.25C18.4199 16.63 19.5399 17.75 20.9199 17.75C19.5399 17.75 18.4199 18.87 18.4199 20.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.41992 3.5V2C8.41992 1.59 8.07992 1.25 7.66992 1.25C7.25992 1.25 6.91992 1.59 6.91992 2V3.56C7.16992 3.53 7.39992 3.5 7.66992 3.5H8.41992Z" fill="currentColor" /><path d="M16.4199 3.56V2C16.4199 1.59 16.0799 1.25 15.6699 1.25C15.2599 1.25 14.9199 1.59 14.9199 2V3.5H15.6699C15.9399 3.5 16.1699 3.53 16.4199 3.56Z" fill="currentColor" /><path d="M21.9599 14.97C21.1899 14.36 20.2199 14 19.1699 14C18.1199 14 17.1299 14.37 16.3599 14.99C15.3199 15.81 14.6699 17.09 14.6699 18.5C14.6699 19.34 14.9099 20.15 15.3199 20.81C15.6399 21.33 16.0499 21.79 16.5399 22.14C17.2799 22.68 18.1799 23 19.1699 23C20.3099 23 21.3399 22.58 22.1299 21.88C22.4799 21.59 22.7799 21.23 23.0199 20.82C23.4299 20.15 23.6699 19.34 23.6699 18.5C23.6699 17.07 22.9999 15.79 21.9599 14.97ZM19.1699 20.64C19.1699 19.46 18.2099 18.5 17.0299 18.5C18.2099 18.5 19.1699 17.54 19.1699 16.36C19.1699 17.54 20.1299 18.5 21.3099 18.5C20.1299 18.5 19.1699 19.46 19.1699 20.64Z" fill="currentColor" /><path d="M16.4199 3.56V5C16.4199 5.41 16.0799 5.75 15.6699 5.75C15.2599 5.75 14.9199 5.41 14.9199 5V3.5H8.41992V5C8.41992 5.41 8.07992 5.75 7.66992 5.75C7.25992 5.75 6.91992 5.41 6.91992 5V3.56C3.96992 3.83 2.66992 5.73 2.66992 8.5V17C2.66992 20 4.16992 22 7.66992 22H11.7999C12.5599 22 13.0699 21.15 12.8799 20.41C12.7399 19.87 12.6699 19.31 12.6699 18.75C12.6699 16.67 13.5999 14.75 15.2099 13.48C16.3799 12.53 17.8799 12 19.4199 12H19.4599C20.0899 12 20.6699 11.54 20.6699 10.91V8.5C20.6699 5.73 19.3699 3.83 16.4199 3.56ZM9.66992 16.75H7.66992C7.25992 16.75 6.91992 16.41 6.91992 16C6.91992 15.59 7.25992 15.25 7.66992 15.25H9.66992C10.0799 15.25 10.4199 15.59 10.4199 16C10.4199 16.41 10.0799 16.75 9.66992 16.75ZM12.6699 11.75H7.66992C7.25992 11.75 6.91992 11.41 6.91992 11C6.91992 10.59 7.25992 10.25 7.66992 10.25H12.6699C13.0799 10.25 13.4199 10.59 13.4199 11C13.4199 11.41 13.0799 11.75 12.6699 11.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconNoteFavorite as IconComponentType).keywords = [
  "note",
  "favorite",
  "annotation",
  "notation",
  "mention",
  "remark",
  "notice",
  "observe",
  "take note",
  "distinction",
  "bank note",
  "favored",
  "favourite",
  "preferred",
  "popular",
  "loved",
  "deary",
  "darling",
  "dearie",
  "front-runner"
];

export default IconNoteFavorite as IconComponentType;