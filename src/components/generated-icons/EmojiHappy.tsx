import { FC } from 'react';
import { IconProps } from "@/types";

const IconEmojiHappy: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.5 9.75C16.3284 9.75 17 9.07843 17 8.25C17 7.42157 16.3284 6.75 15.5 6.75C14.6716 6.75 14 7.42157 14 8.25C14 9.07843 14.6716 9.75 15.5 9.75Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.5 9.75C9.32843 9.75 10 9.07843 10 8.25C10 7.42157 9.32843 6.75 8.5 6.75C7.67157 6.75 7 7.42157 7 8.25C7 9.07843 7.67157 9.75 8.5 9.75Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.4 13.2998H15.6C16.1 13.2998 16.5 13.6998 16.5 14.1998C16.5 16.6898 14.49 18.6998 12 18.6998C9.51 18.6998 7.5 16.6898 7.5 14.1998C7.5 13.6998 7.9 13.2998 8.4 13.2998Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M15.4991 10.1301C16.5374 10.1301 17.3791 9.28841 17.3791 8.25012C17.3791 7.21182 16.5374 6.37012 15.4991 6.37012C14.4608 6.37012 13.6191 7.21182 13.6191 8.25012C13.6191 9.28841 14.4608 10.1301 15.4991 10.1301Z" fill="currentColor" /><path d="M8.49914 10.1301C9.53744 10.1301 10.3791 9.28841 10.3791 8.25012C10.3791 7.21182 9.53744 6.37012 8.49914 6.37012C7.46085 6.37012 6.61914 7.21182 6.61914 8.25012C6.61914 9.28841 7.46085 10.1301 8.49914 10.1301Z" fill="currentColor" /><path d="M15.6009 12.9199H8.40086C7.70086 12.9199 7.13086 13.4899 7.13086 14.1999C7.13086 16.8899 9.32086 19.0799 12.0109 19.0799C14.7009 19.0799 16.8909 16.8899 16.8909 14.1999C16.8809 13.4999 16.3009 12.9199 15.6009 12.9199Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconEmojiHappy;