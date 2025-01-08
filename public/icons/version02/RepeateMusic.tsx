import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRepeateMusic: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6702 3L17.1102 5.34003L9.16016 5.32001C5.59016 5.32001 2.66016 8.25003 2.66016 11.84C2.66016 13.63 3.39014 15.26 4.57014 16.44" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M10.6695 21L8.22949 18.66L16.1795 18.68C19.7495 18.68 22.6795 15.75 22.6795 12.16C22.6795 10.37 21.9495 8.74 20.7695 7.56" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.66992 12H15.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M4.32993 16.9314C4.13993 16.9314 3.94993 16.8614 3.79993 16.7114C2.42993 15.3314 1.66992 13.5114 1.66992 11.5814C1.66992 7.57141 4.91992 4.31139 8.91992 4.31139L14.9899 4.33141L13.8999 3.29137C13.5999 3.00137 13.5899 2.53137 13.8799 2.23137C14.1699 1.93137 14.6399 1.92141 14.9399 2.21141L17.3799 4.55138C17.5999 4.76138 17.6699 5.09139 17.5599 5.37139C17.4499 5.65139 17.1699 5.84142 16.8599 5.84142L8.90993 5.8214C5.73993 5.8214 3.15993 8.41142 3.15993 11.5914C3.15993 13.1214 3.75991 14.5714 4.84991 15.6614C5.13991 15.9514 5.13991 16.4314 4.84991 16.7214C4.70991 16.8614 4.51993 16.9314 4.32993 16.9314Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M10.4198 21.5014C10.2298 21.5014 10.0498 21.4314 9.89982 21.2914L7.45982 18.9514C7.23982 18.7414 7.16982 18.4114 7.27982 18.1314C7.38982 17.8514 7.66982 17.6613 7.97982 17.6613L15.9298 17.6814C19.0998 17.6814 21.6798 15.0913 21.6798 11.9113C21.6798 10.3813 21.0798 8.9314 19.9898 7.8414C19.6998 7.5514 19.6998 7.0714 19.9898 6.7814C20.2798 6.4914 20.7598 6.4914 21.0498 6.7814C22.4198 8.1614 23.1798 9.98135 23.1798 11.9113C23.1798 15.9213 19.9298 19.1814 15.9298 19.1814L9.85983 19.1613L10.9498 20.2014C11.2498 20.4914 11.2598 20.9614 10.9698 21.2614C10.8098 21.4214 10.6198 21.5014 10.4198 21.5014Z" fill="currentColor" /><path d="M9.66992 15.5H15.6699C17.5999 15.5 19.1699 13.92 19.1699 12C19.1699 10.08 17.5999 8.5 15.6699 8.5H9.66992C7.73992 8.5 6.16992 10.08 6.16992 12C6.16992 13.92 7.73992 15.5 9.66992 15.5Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.57992 17.18C4.38992 17.18 4.19992 17.11 4.04992 16.96C2.67992 15.58 1.91992 13.76 1.91992 11.83C1.91992 7.82 5.16992 4.56 9.16992 4.56L15.2399 4.58L14.1499 3.54C13.8499 3.25 13.8399 2.78 14.1299 2.48C14.4199 2.18 14.8899 2.17 15.1899 2.46L17.6299 4.8C17.8499 5.01 17.9199 5.34 17.8099 5.62C17.6999 5.9 17.4199 6.09 17.1099 6.09L9.16992 6.07C5.99992 6.07 3.41992 8.66 3.41992 11.84C3.41992 13.37 4.01992 14.82 5.10992 15.91C5.39992 16.2 5.39992 16.68 5.10992 16.97C4.95992 17.11 4.76992 17.18 4.57992 17.18Z" fill="currentColor" /><path d="M10.6698 21.75C10.4798 21.75 10.2998 21.68 10.1498 21.54L7.70982 19.2C7.48982 18.99 7.41982 18.66 7.52982 18.38C7.63982 18.1 7.91982 17.91 8.22982 17.91L16.1798 17.93C19.3498 17.93 21.9298 15.34 21.9298 12.16C21.9298 10.63 21.3298 9.18 20.2398 8.09C19.9498 7.8 19.9498 7.32 20.2398 7.03C20.5298 6.74 21.0098 6.74 21.2998 7.03C22.6698 8.41 23.4298 10.23 23.4298 12.16C23.4298 16.17 20.1798 19.43 16.1798 19.43L10.1098 19.41L11.1998 20.45C11.4998 20.74 11.5098 21.21 11.2198 21.51C11.0598 21.67 10.8698 21.75 10.6698 21.75Z" fill="currentColor" /><path d="M9.66992 15.5H15.6699C17.5899 15.5 19.1699 13.93 19.1699 12C19.1699 10.08 17.5999 8.5 15.6699 8.5H9.66992C7.74992 8.5 6.16992 10.07 6.16992 12C6.16992 13.93 7.73992 15.5 9.66992 15.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRepeateMusic as IconComponentType).keywords = [
  "repeate",
  "music",
  "sheet music",
  "euphony",
  "medicine",
  "melody",
  "symphony",
  "orchestra",
  "musician",
  "song",
  "singing"
];

export default IconRepeateMusic as IconComponentType;