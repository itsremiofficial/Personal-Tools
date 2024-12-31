import { FC } from 'react';
import { IconProps } from "@/types";

const IconArrowSquareLeft: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M13.2602 15.5302L9.74023 12.0002L13.2602 8.47021" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M13.2599 16.2802C13.0699 16.2802 12.8799 16.2102 12.7299 16.0602L9.19992 12.5302C8.90992 12.2402 8.90992 11.7602 9.19992 11.4702L12.7299 7.94016C13.0199 7.65016 13.4999 7.65016 13.7899 7.94016C14.0799 8.23016 14.0799 8.71016 13.7899 9.00016L10.7899 12.0002L13.7899 15.0002C14.0799 15.2902 14.0799 15.7702 13.7899 16.0602C13.6499 16.2102 13.4599 16.2802 13.2599 16.2802Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconArrowSquareLeft;