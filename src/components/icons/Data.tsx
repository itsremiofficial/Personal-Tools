import { FC } from 'react';
import { IconProps } from "../../types";

const IconData: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 20 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 6C21.1046 6 22 5.10457 22 4C22 2.89543 21.1046 2 20 2C18.8954 2 18 2.89543 18 4C18 5.10457 18.8954 6 20 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 22C21.1046 22 22 21.1046 22 20C22 18.8954 21.1046 18 20 18C18.8954 18 18 18.8954 18 20C18 21.1046 18.8954 22 20 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M6 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 4H14C12 4 11 5 11 7V17C11 19 12 20 14 20H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.7702 18.98H7.23024C6.81024 18.98 6.43024 18.71 6.29024 18.32L2.13024 6.67004C1.80024 5.74004 2.86024 4.95004 3.65024 5.52004L7.65024 8.38004C8.18024 8.76004 8.94024 8.53004 9.17024 7.92004L11.0602 2.88004C11.3802 2.01004 12.6102 2.01004 12.9302 2.88004L14.8202 7.92004C15.0502 8.54004 15.8002 8.76004 16.3402 8.38004L20.3402 5.52004C21.1402 4.95004 22.1902 5.75004 21.8602 6.67004L17.7002 18.32C17.5702 18.71 17.1902 18.98 16.7702 18.98Z" fill="currentColor" /><path d="M17 22H7C6.59 22 6.25 21.66 6.25 21.25C6.25 20.84 6.59 20.5 7 20.5H17C17.41 20.5 17.75 20.84 17.75 21.25C17.75 21.66 17.41 22 17 22Z" fill="currentColor" /><path d="M14.5 14.75H9.5C9.09 14.75 8.75 14.41 8.75 14C8.75 13.59 9.09 13.25 9.5 13.25H14.5C14.91 13.25 15.25 13.59 15.25 14C15.25 14.41 14.91 14.75 14.5 14.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconData;