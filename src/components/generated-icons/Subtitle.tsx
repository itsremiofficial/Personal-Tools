import { FC } from 'react';
import { IconProps } from "@/types";

const IconSubtitle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.5004 17.0801H15.6504" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.97 17.0801H6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.5007 13.3198H11.9707" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.27 13.3198H6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.5004 17.8301H15.6504C15.2404 17.8301 14.9004 17.4901 14.9004 17.0801C14.9004 16.6701 15.2404 16.3301 15.6504 16.3301H17.5004C17.9104 16.3301 18.2504 16.6701 18.2504 17.0801C18.2504 17.4901 17.9104 17.8301 17.5004 17.8301Z" fill="currentColor" /><path d="M12.97 17.8301H6.5C6.09 17.8301 5.75 17.4901 5.75 17.0801C5.75 16.6701 6.09 16.3301 6.5 16.3301H12.97C13.38 16.3301 13.72 16.6701 13.72 17.0801C13.72 17.4901 13.39 17.8301 12.97 17.8301Z" fill="currentColor" /><path d="M17.5007 14.0698H11.9707C11.5607 14.0698 11.2207 13.7298 11.2207 13.3198C11.2207 12.9098 11.5607 12.5698 11.9707 12.5698H17.5007C17.9107 12.5698 18.2507 12.9098 18.2507 13.3198C18.2507 13.7298 17.9107 14.0698 17.5007 14.0698Z" fill="currentColor" /><path d="M9.27 14.0698H6.5C6.09 14.0698 5.75 13.7298 5.75 13.3198C5.75 12.9098 6.09 12.5698 6.5 12.5698H9.27C9.68 12.5698 10.02 12.9098 10.02 13.3198C10.02 13.7298 9.68 14.0698 9.27 14.0698Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSubtitle;