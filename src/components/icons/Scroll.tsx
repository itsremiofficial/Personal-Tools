import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconScroll: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.60008 8.97021L7.11008 11.4602C6.82008 11.7502 6.82008 12.2402 7.11008 12.5302L9.60008 15.0202" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.4004 8.97021L16.8904 11.4602C17.1804 11.7502 17.1804 12.2402 16.8904 12.5302L14.4004 15.0202" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M9.59922 15.7799C9.40922 15.7799 9.21922 15.7099 9.06922 15.5599L6.57922 13.0699C5.98922 12.4799 5.98922 11.5299 6.57922 10.9399L9.06922 8.44992C9.35922 8.15992 9.83922 8.15992 10.1292 8.44992C10.4192 8.73992 10.4192 9.21992 10.1292 9.50992L7.63922 11.9999L10.1292 14.4999C10.4192 14.7899 10.4192 15.2699 10.1292 15.5599C9.97922 15.6999 9.78922 15.7799 9.59922 15.7799Z" fill="currentColor" /><path d="M14.3998 15.7802C14.2098 15.7802 14.0198 15.7102 13.8698 15.5602C13.5798 15.2702 13.5798 14.7902 13.8698 14.5002L16.3598 12.0002L13.8698 9.50016C13.5798 9.21016 13.5798 8.73016 13.8698 8.44016C14.1598 8.15016 14.6398 8.15016 14.9298 8.44016L17.4198 10.9302C18.0098 11.5202 18.0098 12.4702 17.4198 13.0602L14.9298 15.5502C14.7898 15.7002 14.5898 15.7802 14.3998 15.7802Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconScroll as IconComponentType).keywords = [
  "scroll",
  "coil",
  "roll",
  "whorl",
  "curlicue",
  "gyre",
  "curl",
  "ringlet",
  "scrollbar",
  "tape"
];

export default IconScroll as IconComponentType;