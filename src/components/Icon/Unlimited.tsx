import { FC } from 'react';
import { IconProps } from "../../types";

const IconUnlock: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6 10V8C6 4.69 7 2 12 2C16.5 2 18 4 18 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.81 2H16.18C19.83 2 22 4.17 22 7.81V16.18C22 19.82 19.83 21.99 16.19 21.99H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2Z" fill="currentColor" /><path d="M13.9195 8.98006H8.76945L9.09945 8.65006C9.38945 8.36006 9.38945 7.88006 9.09945 7.59006C8.80945 7.30006 8.32945 7.30006 8.03945 7.59006L6.46945 9.16006C6.17945 9.45006 6.17945 9.93006 6.46945 10.2201L8.03945 11.7901C8.18945 11.9401 8.37945 12.0101 8.56945 12.0101C8.75945 12.0101 8.94945 11.9401 9.09945 11.7901C9.38945 11.5001 9.38945 11.0201 9.09945 10.7301L8.83945 10.4701H13.9195C15.1995 10.4701 16.2495 11.5101 16.2495 12.8001C16.2495 14.0901 15.2095 15.1301 13.9195 15.1301H8.99945C8.58945 15.1301 8.24945 15.4701 8.24945 15.8801C8.24945 16.2901 8.58945 16.6301 8.99945 16.6301H13.9195C16.0295 16.6301 17.7495 14.9101 17.7495 12.8001C17.7495 10.6901 16.0295 8.98006 13.9195 8.98006Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconUnlock;