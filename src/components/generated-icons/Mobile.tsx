import { FC } from 'react';
import { IconProps } from "@/types";

const IconMobile: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 6V16C17 20 16 21 12 21H6C2 21 1 20 1 16V6C1 2 2 1 6 1H12C16 1 17 2 17 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11 4.5H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.0002 18.1C9.85624 18.1 10.5502 17.406 10.5502 16.55C10.5502 15.694 9.85624 15 9.0002 15C8.14415 15 7.4502 15.694 7.4502 16.55C7.4502 17.406 8.14415 18.1 9.0002 18.1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.24 2H7.76C5 2 4 3 4 5.81V18.19C4 21 5 22 7.76 22H16.23C19 22 20 21 20 18.19V5.81C20 3 19 2 16.24 2Z" fill="currentColor" /><path d="M14 6.25H10C9.59 6.25 9.25 5.91 9.25 5.5C9.25 5.09 9.59 4.75 10 4.75H14C14.41 4.75 14.75 5.09 14.75 5.5C14.75 5.91 14.41 6.25 14 6.25Z" fill="currentColor" /><path d="M12 19.3C12.9665 19.3 13.75 18.5165 13.75 17.55C13.75 16.5835 12.9665 15.8 12 15.8C11.0335 15.8 10.25 16.5835 10.25 17.55C10.25 18.5165 11.0335 19.3 12 19.3Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMobile;