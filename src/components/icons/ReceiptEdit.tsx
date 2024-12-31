import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconReceiptEdit: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 11.3V7.04001C20.5 3.01001 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01001 3.5 7.04001V18.3C3.5 20.96 4.96001 21.59 6.73001 19.69L6.73999 19.68C7.55999 18.81 8.80999 18.88 9.51999 19.83L10.53 21.18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8 7H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9 11H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.2091 14.7698L14.6691 18.3098C14.5291 18.4498 14.3991 18.7098 14.3691 18.8998L14.1791 20.2498C14.1091 20.7398 14.4491 21.0798 14.9391 21.0098L16.2891 20.8198C16.4791 20.7898 16.7491 20.6598 16.8791 20.5198L20.4191 16.9798C21.0291 16.3698 21.3191 15.6598 20.4191 14.7598C19.5291 13.8698 18.8191 14.1598 18.2091 14.7698Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.6992 15.2798C17.9992 16.3598 18.8392 17.1998 19.9192 17.4998" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M6.73026 19.6998C7.55026 18.8198 8.80023 18.8898 9.52023 19.8498L10.5302 21.1998C11.3402 22.2698 12.6502 22.2698 13.4602 21.1998L14.4702 19.8498C15.1902 18.8898 16.4403 18.8198 17.2603 19.6998C19.0403 21.5998 20.4902 20.9698 20.4902 18.3098V7.04974C20.4902 3.01974 19.5502 2.00977 15.7702 2.00977H8.21024C4.43024 2.00977 3.49023 3.01974 3.49023 7.04974V18.3098C3.50023 20.9698 4.96026 21.5898 6.73026 19.6998Z" fill="currentColor" /><path d="M14.8409 9.99017L14.3409 10.5002H14.3309L11.3009 13.5302C11.1709 13.6602 10.9009 13.8002 10.7109 13.8202L9.36091 14.0202C8.87091 14.0902 8.53093 13.7402 8.60093 13.2602L8.79093 11.9002C8.82093 11.7102 8.95091 11.4502 9.08091 11.3102L12.1209 8.28018L12.6209 7.77017C12.9509 7.44017 13.3209 7.2002 13.7209 7.2002C14.0609 7.2002 14.4309 7.36017 14.8409 7.77017C15.7409 8.67017 15.4509 9.38017 14.8409 9.99017Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconReceiptEdit as IconComponentType).keywords = [
  "receipt",
  "edit",
  "receiving",
  "reception",
  "acknowledge",
  "recipient",
  "receptor",
  "granting",
  "receive",
  "grant",
  "remitting",
  "redact",
  "edit out",
  "cut",
  "editor",
  "edition",
  "publication",
  "publish",
  "publishing",
  "authoring"
];

export default IconReceiptEdit as IconComponentType;