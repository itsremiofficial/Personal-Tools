import { FC } from 'react';
import { IconProps } from "../../types";

const IconBrush4: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10 16C10 14.34 10 13 13 13H17C20 13 20 12 20 10V8C20 6 20 5 17 5H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.9992 2H7.99922C7.34922 3.95 7.34922 6.05 7.99922 8H11.9992C12.6492 6.05 12.6492 3.95 11.9992 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 2H7C5 2 4 3 4 5C4 7 5 8 7 8H8C7 6 7 4 8 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13 2H12C13 4 13 6 12 8H13C15 8 16 7 16 5C16 3 15 2 13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.5 22H10.5C12 22 12 21 12 20.5V17.5C12 17 12 16 10.5 16H9.5C8 16 8 17 8 17.5V20.5C8 21 8 22 9.5 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6 2H18C19.1 2 20 2.9 20 4V8.32001H4V4C4 2.9 4.9 2 6 2Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M4 8.31982V11.8798C4 12.9598 4.58003 13.9598 5.53003 14.4898L8.48999 16.1598C9.11999 16.5098 9.51001 17.1798 9.51001 17.8998V19.9998C9.51001 21.0998 10.41 21.9998 11.51 21.9998H12.51C13.61 21.9998 14.51 21.0998 14.51 19.9998V17.8998C14.51 17.1798 14.9 16.5098 15.53 16.1598L18.49 14.4898C19.43 13.9598 20.02 12.9598 20.02 11.8798V8.31982H4Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBrush4;