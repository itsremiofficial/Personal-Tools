import { FC } from 'react';
import { IconProps } from "../../types";

const IconHeadphone: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.46005 18.4898V15.5698C5.46005 14.5998 6.22005 13.7298 7.30005 13.7298C8.27005 13.7298 9.14005 14.4898 9.14005 15.5698V18.3798C9.14005 20.3298 7.52005 21.9498 5.57005 21.9498C3.62005 21.9498 2.00005 20.3198 2.00005 18.3798V12.2198C1.89005 6.5998 6.33005 2.0498 11.95 2.0498C17.57 2.0498 22 6.5998 22 12.1098V18.2698C22 20.2198 20.38 21.8398 18.43 21.8398C16.48 21.8398 14.86 20.2198 14.86 18.2698V15.4598C14.86 14.4898 15.62 13.6198 16.7 13.6198C17.67 13.6198 18.54 14.3798 18.54 15.4598V18.4898" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15 3V12C15 13.1 14.1 14 13 14H2V6C2 3.79 3.79 2 6 2H14C14.55 2 15 2.45 15 3Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22 14V17C22 18.66 20.66 20 19 20H18C18 18.9 17.1 18 16 18C14.9 18 14 18.9 14 20H10C10 18.9 9.1 18 8 18C6.9 18 6 18.9 6 20H5C3.34 20 2 18.66 2 17V14H13C14.1 14 15 13.1 15 12V5H16.84C17.56 5 18.22 5.39001 18.58 6.01001L20.29 9H19C18.45 9 18 9.45 18 10V13C18 13.55 18.45 14 19 14H22Z" fill="currentColor" /><path d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" fill="currentColor" /><path d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z" fill="currentColor" /><path d="M22 12.53V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L21.74 11.54C21.91 11.84 22 12.18 22 12.53Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconHeadphone;