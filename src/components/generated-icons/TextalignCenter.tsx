import { FC } from 'react';
import { IconProps } from "@/types";

const IconTextalignCenter: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M3 4.5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.25977 9.5H16.7398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3 14.5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.25977 19.5H16.7398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21 5.25H3C2.59 5.25 2.25 4.91 2.25 4.5C2.25 4.09 2.59 3.75 3 3.75H21C21.41 3.75 21.75 4.09 21.75 4.5C21.75 4.91 21.41 5.25 21 5.25Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.7398 10.25H7.25977C6.84977 10.25 6.50977 9.91 6.50977 9.5C6.50977 9.09 6.84977 8.75 7.25977 8.75H16.7298C17.1398 8.75 17.4798 9.09 17.4798 9.5C17.4798 9.91 17.1498 10.25 16.7398 10.25Z" fill="currentColor" /><path d="M21 15.25H3C2.59 15.25 2.25 14.91 2.25 14.5C2.25 14.09 2.59 13.75 3 13.75H21C21.41 13.75 21.75 14.09 21.75 14.5C21.75 14.91 21.41 15.25 21 15.25Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.7398 20.25H7.25977C6.84977 20.25 6.50977 19.91 6.50977 19.5C6.50977 19.09 6.84977 18.75 7.25977 18.75H16.7298C17.1398 18.75 17.4798 19.09 17.4798 19.5C17.4798 19.91 17.1498 20.25 16.7398 20.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTextalignCenter;