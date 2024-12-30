import { FC } from 'react';
import { IconProps } from "../../types";

const IconReceiptText: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 7V21C2 21.83 2.93998 22.3 3.59998 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.28998 22.29C8.67998 22.68 9.32002 22.68 9.71002 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6 9H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.75 13H11.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M6.73026 19.6998C7.55026 18.8198 8.80023 18.8898 9.52023 19.8498L10.5302 21.1998C11.3402 22.2698 12.6502 22.2698 13.4602 21.1998L14.4702 19.8498C15.1902 18.8898 16.4403 18.8198 17.2603 19.6998C19.0403 21.5998 20.4902 20.9698 20.4902 18.3098V7.04974C20.4902 3.01974 19.5502 2.00977 15.7702 2.00977H8.21024C4.43024 2.00977 3.49023 3.01974 3.49023 7.04974V18.3098C3.50023 20.9698 4.96026 21.5898 6.73026 19.6998Z" fill="currentColor" /><path d="M15.6609 13.47L14.9209 12.73C15.3009 12.15 15.5309 11.45 15.5309 10.7C15.5309 8.66001 13.8708 7 11.8308 7C9.79084 7 8.13086 8.66001 8.13086 10.7C8.13086 12.74 9.79084 14.4 11.8308 14.4C12.5808 14.4 13.2808 14.17 13.8608 13.79L14.6009 14.53C14.7509 14.68 14.9409 14.75 15.1309 14.75C15.3209 14.75 15.5109 14.68 15.6609 14.53C15.9509 14.24 15.9509 13.76 15.6609 13.47Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconReceiptText;