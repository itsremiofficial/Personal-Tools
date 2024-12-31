import { FC } from 'react';
import { IconProps } from "@/types";

const IconFacebook: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M14 9.29999V12.25H16.63C16.82 12.25 16.96 12.42 16.92 12.61L16.54 14.51C16.51 14.65 16.39 14.75 16.25 14.75H14V22H11V14.75H9.29999C9.12999 14.75 9 14.62 9 14.45V12.55C9 12.38 9.12999 12.25 9.29999 12.25H11V9C11 7.34 12.34 6 14 6H16.7C16.87 6 17 6.12999 17 6.29999V8.70001C17 8.87001 16.87 9 16.7 9H14.3C14.13 9 14 9.12999 14 9.29999Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" /><path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M13.9205 9.2802L13.9705 12.2302L16.6005 12.1902C16.7905 12.1902 16.9305 12.3602 16.9005 12.5402L16.5504 14.4502C16.5204 14.5902 16.4005 14.6902 16.2605 14.7002L14.0105 14.7402L14.1305 21.9902L11.1305 22.0402L11.0105 14.7902L9.31046 14.8202C9.14046 14.8202 9.01047 14.6902 9.01047 14.5202L8.98047 12.6202C8.98047 12.4502 9.11046 12.3202 9.28046 12.3202L10.9805 12.2902L10.9305 9.0402C10.9005 7.3802 12.2205 6.0202 13.8805 5.9902L16.5804 5.9502C16.7504 5.9502 16.8805 6.0802 16.8805 6.2502L16.9205 8.6502C16.9205 8.8202 16.7905 8.9502 16.6205 8.9502L14.2205 8.9902C14.0505 8.9802 13.9205 9.1202 13.9205 9.2802Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFacebook;