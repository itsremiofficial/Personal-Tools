import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDirectboxDefault: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19 12V6C19 3.79 19 2 15 2H9C5 2 5 3.79 5 6V12" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.6897 11.5298C18.1197 11.3798 17.4497 11.2998 16.6497 11.2998C15.5397 11.2998 15.1297 11.5698 14.5597 11.9998C14.5297 12.0198 14.4997 12.0498 14.4697 12.0798L13.5197 13.0898C12.7297 13.9398 11.2797 13.9398 10.4797 13.0898L9.52969 12.0898C9.49969 12.0498 9.46969 12.0198 9.43969 11.9998C8.85969 11.5698 8.44969 11.2998 7.34969 11.2998C6.54969 11.2998 5.87969 11.3698 5.30969 11.5298C2.92969 12.1698 2.92969 14.0598 2.92969 15.7198V16.6498C2.92969 19.1598 2.92969 21.9998 8.27969 21.9998H15.7197C19.2697 21.9998 21.0697 20.1998 21.0697 16.6498V15.7198C21.0697 14.0598 21.0697 12.1698 18.6897 11.5298Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.7891 2H9.20906C4.78906 2 4.78906 4.35 4.78906 6.42V12.21C4.78906 12.43 4.88906 12.63 5.05906 12.76C5.22906 12.89 5.45906 12.94 5.66906 12.88C6.11906 12.76 6.67906 12.7 7.34906 12.7C8.01906 12.7 8.15906 12.78 8.55906 13.08L9.46906 14.04C10.1191 14.74 11.0491 15.14 12.0091 15.14C12.9691 15.14 13.8891 14.74 14.5491 14.04L15.4591 13.08C15.8591 12.78 15.9991 12.7 16.6691 12.7C17.3391 12.7 17.8991 12.76 18.3491 12.88C18.5591 12.94 18.7791 12.89 18.9591 12.76C19.1291 12.63 19.2291 12.42 19.2291 12.21V6.42C19.2091 4.35 19.2091 2 14.7891 2Z" fill="currentColor" /><path d="M13.55 9.90977H10.45C10.06 9.90977 9.75 9.59977 9.75 9.20977C9.75 8.81977 10.06 8.50977 10.45 8.50977H13.55C13.94 8.50977 14.25 8.81977 14.25 9.20977C14.25 9.58977 13.93 9.90977 13.55 9.90977Z" fill="currentColor" /><path d="M14.3307 7.12021H9.6707C9.2807 7.12021 8.9707 6.81022 8.9707 6.42022C8.9707 6.03022 9.2807 5.72021 9.6707 5.72021H14.3207C14.7107 5.72021 15.0207 6.03022 15.0207 6.42022C15.0207 6.80022 14.7107 7.12021 14.3307 7.12021Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDirectboxDefault as IconComponentType).keywords = [
  "directbox",
  "default",
  "nonpayment",
  "default on",
  "default option",
  "nonremittal",
  "missing",
  "omission",
  "absent",
  "fail",
  "absence"
];

export default IconDirectboxDefault as IconComponentType;