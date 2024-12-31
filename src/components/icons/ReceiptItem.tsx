import { FC } from 'react';
import { IconProps } from "../../types";

const IconReceiptMinus: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.25 10H11.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M6.73026 19.6998C7.55026 18.8198 8.80023 18.8898 9.52023 19.8498L10.5302 21.1998C11.3402 22.2698 12.6502 22.2698 13.4602 21.1998L14.4702 19.8498C15.1902 18.8898 16.4403 18.8198 17.2603 19.6998C19.0403 21.5998 20.4902 20.9698 20.4902 18.3098V7.04974C20.4902 3.01974 19.5502 2.00977 15.7702 2.00977H8.21024C4.43024 2.00977 3.49023 3.01974 3.49023 7.04974V18.3098C3.50023 20.9698 4.96026 21.5898 6.73026 19.6998Z" fill="currentColor" /><path d="M14.8409 9.99017L14.3409 10.5002H14.3309L11.3009 13.5302C11.1709 13.6602 10.9009 13.8002 10.7109 13.8202L9.36091 14.0202C8.87091 14.0902 8.53093 13.7402 8.60093 13.2602L8.79093 11.9002C8.82093 11.7102 8.95091 11.4502 9.08091 11.3102L12.1209 8.28018L12.6209 7.77017C12.9509 7.44017 13.3209 7.2002 13.7209 7.2002C14.0609 7.2002 14.4309 7.36017 14.8409 7.77017C15.7409 8.67017 15.4509 9.38017 14.8409 9.99017Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconReceiptMinus;