import { FC } from 'react';
import { IconProps } from "../../types";

const IconClipboardExport: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V15" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M15 19V16H18" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.9991 22L15.0391 16.04" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15 22C14.59 22 14.25 21.66 14.25 21.25V2.75C14.25 2.34 14.59 2 15 2C15.41 2 15.75 2.34 15.75 2.75V21.25C15.75 21.66 15.41 22 15 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M6 20H12V4H6C3.79 4 2 5.79 2 8V16C2 18.21 3.79 20 6 20Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18 20H15V4H18C20.21 4 22 5.79 22 8V16C22 18.21 20.21 20 18 20Z" fill="currentColor" /><path d="M7 16.25C6.59 16.25 6.25 15.91 6.25 15.5V8.5C6.25 8.09 6.59 7.75 7 7.75C7.41 7.75 7.75 8.09 7.75 8.5V15.5C7.75 15.91 7.41 16.25 7 16.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconClipboardExport;