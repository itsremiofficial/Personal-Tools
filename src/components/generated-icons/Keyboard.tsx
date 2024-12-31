import { FC } from 'react';
import { IconProps } from "@/types";

const IconKeyboard: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 4H16.5C17.12 4 17.67 4.02 18.16 4.09C20.79 4.38 21.5 5.62 21.5 9V15C21.5 18.38 20.79 19.62 18.16 19.91C17.67 19.98 17.12 20 16.5 20H7.5C6.88 20 6.33 19.98 5.84 19.91C3.21 19.62 2.5 18.38 2.5 15V9C2.5 5.62 3.21 4.38 5.84 4.09C6.33 4.02 6.88 4 7.5 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M13.5 10H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7 15.5H7.02H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.0941 10H10.1031" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.09412 10H7.1031" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.27 3.35C17.8 3.28 17.26 3.25 16.5 3.25H7.5C6.75 3.25 6.2 3.28 5.76 3.34C2.41 3.71 1.75 5.7 1.75 9V15C1.75 18.3 2.41 20.29 5.73 20.65C6.2 20.72 6.74 20.75 7.5 20.75H16.5C17.25 20.75 17.8 20.72 18.24 20.66C21.59 20.29 22.25 18.31 22.25 15V9C22.25 5.7 21.59 3.71 18.27 3.35Z" fill="currentColor" /><path d="M17 10.75H13.5C13.09 10.75 12.75 10.41 12.75 10C12.75 9.59 13.09 9.25 13.5 9.25H17C17.41 9.25 17.75 9.59 17.75 10C17.75 10.41 17.41 10.75 17 10.75Z" fill="currentColor" /><path d="M10.0996 11C9.54961 11 9.09961 10.55 9.09961 10C9.09961 9.45 9.53961 9 10.0996 9H10.1096C10.6596 9 11.1096 9.45 11.1096 10C11.1096 10.55 10.6596 11 10.0996 11Z" fill="currentColor" /><path d="M7.09961 11C6.54961 11 6.09961 10.55 6.09961 10C6.09961 9.45 6.53961 9 7.09961 9C7.64961 9 8.09961 9.45 8.09961 10C8.09961 10.55 7.65961 11 7.09961 11Z" fill="currentColor" /><path d="M16.9998 16.25H7.01977C6.60977 16.25 6.25977 15.91 6.25977 15.5C6.25977 15.09 6.58977 14.75 6.99977 14.75H16.9998C17.4098 14.75 17.7498 15.09 17.7498 15.5C17.7498 15.91 17.4098 16.25 16.9998 16.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconKeyboard;