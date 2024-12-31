import { FC } from 'react';
import { IconProps } from "../../types";

const IconSmsTracking: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5H7" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 16.5H8" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 12.5H5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M17.586 8.53196C17.8445 8.85561 17.7917 9.32754 17.4681 9.58605L14.3372 12.0868C13.0338 13.1244 10.9563 13.1244 9.65289 12.0868L9.65104 12.0853L6.53105 9.58531C6.2078 9.3263 6.15573 8.85429 6.41474 8.53105C6.67375 8.2078 7.14576 8.15573 7.46901 8.41474L10.588 10.914C11.3446 11.5155 12.6462 11.5154 13.4025 10.9135C13.4024 10.9136 13.4027 10.9135 13.4025 10.9135L16.532 8.41401C16.8556 8.15551 17.3275 8.20832 17.586 8.53196Z" fill="currentColor" /><path d="M22.6609 21.47L21.9209 20.73C22.3009 20.15 22.5309 19.45 22.5309 18.7C22.5309 16.66 20.8708 15 18.8308 15C16.7908 15 15.1309 16.66 15.1309 18.7C15.1309 20.74 16.7908 22.4 18.8308 22.4C19.5808 22.4 20.2808 22.17 20.8608 21.79L21.6009 22.53C21.7509 22.68 21.9409 22.75 22.1309 22.75C22.3209 22.75 22.5109 22.68 22.6609 22.53C22.9509 22.24 22.9509 21.76 22.6609 21.47Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSmsTracking;