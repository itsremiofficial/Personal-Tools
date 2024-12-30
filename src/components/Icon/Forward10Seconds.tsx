import { FC } from 'react';
import { IconProps } from "../../types";

const IconForward10Seconds: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.98 4.46997L12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.0894 7.79974C20.1994 9.27974 20.8894 11.1097 20.8894 13.1097C20.8894 18.0197 16.9094 21.9998 11.9994 21.9998C7.08939 21.9998 3.10938 18.0197 3.10938 13.1097C3.10938 8.19974 7.08939 4.21973 11.9994 4.21973C12.6794 4.21973 13.3394 4.30978 13.9794 4.45978" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.53906 15.92V10.5801L8.03906 12.2501" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14 10.5801C15.1 10.5801 16 11.4801 16 12.5801V13.9301C16 15.0301 15.1 15.9301 14 15.9301C12.9 15.9301 12 15.0301 12 13.9301V12.5801C12 11.4701 12.9 10.5801 14 10.5801Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M14.9 2H9.10001C8.42001 2 7.46 2.4 6.98 2.88L2.88 6.98001C2.4 7.46001 2 8.42001 2 9.10001V14.9C2 15.58 2.4 16.54 2.88 17.02L6.98 21.12C7.46 21.6 8.42001 22 9.10001 22H14.9C15.58 22 16.54 21.6 17.02 21.12L21.12 17.02C21.6 16.54 22 15.58 22 14.9V9.10001C22 8.42001 21.6 7.46001 21.12 6.98001L17.02 2.88C16.54 2.4 15.58 2 14.9 2Z" fill="currentColor" /><path d="M3.02094 21.75C2.83094 21.75 2.64094 21.68 2.49094 21.53C2.20094 21.24 2.20094 20.76 2.49094 20.47L20.4709 2.48996C20.7609 2.19996 21.2409 2.19996 21.5309 2.48996C21.8209 2.77996 21.8209 3.25996 21.5309 3.54996L3.55094 21.53C3.41094 21.68 3.22094 21.75 3.02094 21.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconForward10Seconds;