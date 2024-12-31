import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDirectboxReceive: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M12 2V8L14 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 8L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5 12V8.00004C5 5.99004 5 4.33004 8 4.04004" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19 12V8.00004C19 5.99004 19 4.33004 16 4.04004" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M14.7891 4H9.20906C4.78906 4 4.78906 6.35 4.78906 8.42V12.21C4.78906 12.43 4.88906 12.63 5.05906 12.76C5.22906 12.89 5.45906 12.94 5.66906 12.88C6.11906 12.76 6.67906 12.7 7.34906 12.7C8.01906 12.7 8.15906 12.78 8.55906 13.08L9.46906 14.04C10.1191 14.74 11.0491 15.14 12.0091 15.14C12.9691 15.14 13.8891 14.74 14.5491 14.04L15.4591 13.08C15.8591 12.78 15.9991 12.7 16.6691 12.7C17.3391 12.7 17.8991 12.76 18.3491 12.88C18.5591 12.94 18.7791 12.89 18.9591 12.76C19.1291 12.63 19.2291 12.42 19.2291 12.21V8.42C19.2091 6.35 19.2091 4 14.7891 4Z" fill="currentColor" /><path d="M14.2743 6.8C14.0143 6.54 13.5843 6.54 13.3243 6.8L12.6743 7.45V2.67C12.6743 2.3 12.3643 2 11.9943 2C11.6243 2 11.3143 2.3 11.3143 2.67V7.44L10.6743 6.8C10.4143 6.54 9.9843 6.54 9.7243 6.8C9.4643 7.06 9.4643 7.49 9.7243 7.75L11.5243 9.55C11.5343 9.56 11.5343 9.56 11.5443 9.56C11.6043 9.61 11.6643 9.66 11.7443 9.69C11.8243 9.72 11.9143 9.74 12.0043 9.74C12.0943 9.74 12.1743 9.72 12.2643 9.69C12.3443 9.66 12.4243 9.61 12.4843 9.54L14.2843 7.74C14.5343 7.49 14.5343 7.06 14.2743 6.8Z" fill="currentColor" /><path d="M18.6897 11.5298C18.1197 11.3798 17.4497 11.2998 16.6497 11.2998C15.5397 11.2998 15.1297 11.5698 14.5597 11.9998C14.5297 12.0198 14.4997 12.0498 14.4697 12.0798L13.5197 13.0898C12.7197 13.9298 11.2797 13.9398 10.4797 13.0798L9.52969 12.0798C9.49969 12.0498 9.46969 12.0198 9.43969 11.9998C8.86969 11.5698 8.45969 11.2998 7.34969 11.2998C6.54969 11.2998 5.87969 11.3798 5.30969 11.5298C2.92969 12.1698 2.92969 14.0598 2.92969 15.7198V16.6498C2.92969 19.1598 2.92969 21.9998 8.27969 21.9998H15.7197C19.2697 21.9998 21.0697 20.1998 21.0697 16.6498V15.7198C21.0697 14.0598 21.0697 12.1698 18.6897 11.5298ZM14.3297 18.3998H9.66969C9.28969 18.3998 8.97969 18.0898 8.97969 17.6998C8.97969 17.3098 9.28969 16.9998 9.66969 16.9998H14.3297C14.7097 16.9998 15.0197 17.3098 15.0197 17.6998C15.0197 18.0898 14.7097 18.3998 14.3297 18.3998Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.0205 17.7C15.0205 18.09 14.7105 18.4 14.3305 18.4H9.67047C9.29047 18.4 8.98047 18.09 8.98047 17.7C8.98047 17.31 9.29047 17 9.67047 17H14.3305C14.7105 17 15.0205 17.31 15.0205 17.7Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDirectboxReceive as IconComponentType).keywords = [
  "directbox",
  "receive",
  "invite",
  "take in",
  "obtain",
  "get",
  "have",
  "meet",
  "undergo",
  "find",
  "encounter"
];

export default IconDirectboxReceive as IconComponentType;