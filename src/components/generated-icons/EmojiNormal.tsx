import { FC } from 'react';
import { IconProps } from "@/types";

const IconEmojiNormal: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M7 8.25C8 9.25 9.63 9.25 10.64 8.25" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M13.3594 8.25C14.3594 9.25 15.9894 9.25 16.9994 8.25" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M8.4 13H15.6C16.1 13 16.5 13.4 16.5 13.9C16.5 16.39 14.49 18.4 12 18.4C9.51 18.4 7.5 16.39 7.5 13.9C7.5 13.4 7.9 13 8.4 13Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M8.81945 9.74994C7.96945 9.74994 7.11945 9.42994 6.46945 8.77994C6.17945 8.48994 6.17945 8.00994 6.46945 7.71994C6.75945 7.42994 7.23945 7.42994 7.52945 7.71994C8.23945 8.42994 9.39945 8.42994 10.1095 7.71994C10.3995 7.42994 10.8795 7.42994 11.1695 7.71994C11.4595 8.00994 11.4595 8.48994 11.1695 8.77994C10.5195 9.41994 9.66945 9.74994 8.81945 9.74994Z" fill="currentColor" /><path d="M15.1808 9.74994C14.3308 9.74994 13.4808 9.42994 12.8308 8.77994C12.5408 8.48994 12.5408 8.00994 12.8308 7.71994C13.1208 7.42994 13.6008 7.42994 13.8908 7.71994C14.6008 8.42994 15.7608 8.42994 16.4708 7.71994C16.7608 7.42994 17.2408 7.42994 17.5308 7.71994C17.8208 8.00994 17.8208 8.48994 17.5308 8.77994C16.8808 9.41994 16.0308 9.74994 15.1808 9.74994Z" fill="currentColor" /><path d="M15.6009 12.6201H8.40086C7.70086 12.6201 7.13086 13.1901 7.13086 13.9001C7.13086 16.5901 9.32086 18.7801 12.0109 18.7801C14.7009 18.7801 16.8909 16.5901 16.8909 13.9001C16.8809 13.2001 16.3009 12.6201 15.6009 12.6201Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconEmojiNormal;