import { FC } from 'react';
import { IconProps } from "../../types";

const IconBackward10Seconds: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9.53906 15.92V10.5801L8.03906 12.2501" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.0195 4.46997L11.9995 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4.90939 7.79974C3.79939 9.27974 3.10938 11.1097 3.10938 13.1097C3.10938 18.0197 7.08939 21.9998 11.9994 21.9998C16.9094 21.9998 20.8894 18.0197 20.8894 13.1097C20.8894 8.19974 16.9094 4.21973 11.9994 4.21973C11.3194 4.21973 10.6594 4.30978 10.0194 4.45978" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14 10.5801C15.1 10.5801 16 11.4801 16 12.5801V13.9301C16 15.0301 15.1 15.9301 14 15.9301C12.9 15.9301 12 15.0301 12 13.9301V12.5801C12 11.4701 12.9 10.5801 14 10.5801Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81V16.18C2 19.82 4.17 21.99 7.81 21.99H16.18C19.82 21.99 21.99 19.82 21.99 16.18V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M13.9195 8.48006H8.76945L9.09945 8.15006C9.38945 7.86006 9.38945 7.38006 9.09945 7.09006C8.80945 6.80006 8.32945 6.80006 8.03945 7.09006L6.46945 8.66006C6.17945 8.95006 6.17945 9.43006 6.46945 9.72006L8.03945 11.2901C8.18945 11.4401 8.37945 11.5101 8.56945 11.5101C8.75945 11.5101 8.94945 11.4401 9.09945 11.2901C9.38945 11.0001 9.38945 10.5201 9.09945 10.2301L8.83945 9.97006H13.9195C15.1995 9.97006 16.2495 11.0101 16.2495 12.3001C16.2495 13.5901 15.2094 14.6301 13.9195 14.6301H8.99945C8.58945 14.6301 8.24945 14.9701 8.24945 15.3801C8.24945 15.7901 8.58945 16.1301 8.99945 16.1301H13.9195C16.0295 16.1301 17.7495 14.4101 17.7495 12.3001C17.7495 10.1901 16.0295 8.48006 13.9195 8.48006Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBackward10Seconds;