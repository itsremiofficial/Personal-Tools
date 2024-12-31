import { FC } from 'react';
import { IconProps } from "@/types";

const IconFigma: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9998 2H8.6698C6.8298 2 5.33984 3.48999 5.33984 5.32999C5.33984 7.16999 6.8298 8.66 8.6698 8.66H11.9998V2Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path d="M11.9998 8.66992H8.6698C6.8298 8.66992 5.33984 10.1599 5.33984 11.9999C5.33984 13.8399 6.8298 15.3299 8.6698 15.3299H11.9998V8.66992Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path d="M11.9998 15.3301H8.6698C6.8298 15.3301 5.33984 16.8201 5.33984 18.6601C5.33984 20.5001 6.8298 21.9901 8.6698 21.9901C10.5098 21.9901 11.9998 20.5001 11.9998 18.6601V15.3301Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><g opacity={duotone ? "0.4" : "1"}><path d="M12 2H15.33C17.17 2 18.66 3.48999 18.66 5.32999C18.66 7.16999 17.17 8.66 15.33 8.66H12V2Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.33 8.66992C17.17 8.66992 18.66 10.1599 18.66 11.9999C18.66 13.8399 17.17 15.3299 15.33 15.3299C13.49 15.3299 12 13.8399 12 11.9999C12 10.1599 13.49 8.66992 15.33 8.66992Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11.9998 2H8.6698C6.8298 2 5.33984 3.49 5.33984 5.33C5.33984 7.17 6.8298 8.66 8.6698 8.66H11.9998V2Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M11.9998 8.66992H8.6698C6.8298 8.66992 5.33984 10.1599 5.33984 11.9999C5.33984 13.8399 6.8298 15.3299 8.6698 15.3299H11.9998V8.66992Z" fill="currentColor" /><path d="M11.9998 15.3301H8.6698C6.8298 15.3301 5.33984 16.8201 5.33984 18.6601C5.33984 20.5001 6.8298 21.9901 8.6698 21.9901C10.5098 21.9901 11.9998 20.5001 11.9998 18.6601V15.3301Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12 2H15.33C17.17 2 18.66 3.49 18.66 5.33C18.66 7.17 17.17 8.66 15.33 8.66H12V2Z" fill="currentColor" /><path d="M15.33 8.66992C17.17 8.66992 18.66 10.1599 18.66 11.9999C18.66 13.8399 17.17 15.3299 15.33 15.3299C13.49 15.3299 12 13.8399 12 11.9999C12 10.1599 13.49 8.66992 15.33 8.66992Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFigma;