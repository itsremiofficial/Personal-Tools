import { FC } from 'react';
import { IconProps } from "../../types";

const IconSlider: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 22H9C6.5 22 5 20.2 5 18V6C5 3.8 6.5 2 9 2H15C17.5 2 19 3.8 19 6V18C19 20.2 17.5 22 15 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5 16.0098H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.9707 5.5V9.5C21.9707 11.43 20.4007 13 18.4707 13H16.9707V12.25C16.9707 9.35 14.6207 7 11.7207 7H10.9707V5.5C10.9707 3.57 12.5407 2 14.4707 2H18.4707C20.4107 2 21.9707 3.57 21.9707 5.5Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M11.7207 7H10.9707H6.9707C4.2107 7 1.9707 9.24 1.9707 12V17C1.9707 19.76 4.2107 22 6.9707 22H11.9707C14.7307 22 16.9707 19.76 16.9707 17V13V12.25C16.9707 9.35 14.6207 7 11.7207 7Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSlider;