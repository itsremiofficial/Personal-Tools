import { FC } from 'react';
import { IconProps } from "../../types";

const IconForward15Seconds: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M15.9606 10.8301H12.9006L12.1406 13.1201H14.4306C15.2706 13.1201 15.9606 13.8001 15.9606 14.6501C15.9606 15.4901 15.2806 16.1801 14.4306 16.1801H12.1406" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.53906 16.17V10.8301L8.03906 12.5001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.98 4.46997L12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.0894 7.79974C20.1994 9.27974 20.8894 11.1097 20.8894 13.1097C20.8894 18.0197 16.9094 21.9998 11.9994 21.9998C7.08939 21.9998 3.10938 18.0197 3.10938 13.1097C3.10938 8.19974 7.08939 4.21973 11.9994 4.21973C12.6794 4.21973 13.3394 4.30978 13.9794 4.45978" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M14.9 2H9.10001C8.42001 2 7.46 2.4 6.98 2.88L2.88 6.98001C2.4 7.46001 2 8.42001 2 9.10001V14.9C2 15.58 2.4 16.54 2.88 17.02L6.98 21.12C7.46 21.6 8.42001 22 9.10001 22H14.9C15.58 22 16.54 21.6 17.02 21.12L21.12 17.02C21.6 16.54 22 15.58 22 14.9V9.10001C22 8.42001 21.6 7.46001 21.12 6.98001L17.02 2.88C16.54 2.4 15.58 2 14.9 2Z" fill="currentColor" /><path d="M13.0594 11.9999L16.0295 9.02994C16.3195 8.73994 16.3195 8.25994 16.0295 7.96994C15.7395 7.67994 15.2595 7.67994 14.9695 7.96994L11.9995 10.9399L9.02945 7.96994C8.73945 7.67994 8.25945 7.67994 7.96945 7.96994C7.67945 8.25994 7.67945 8.73994 7.96945 9.02994L10.9395 11.9999L7.96945 14.9699C7.67945 15.2599 7.67945 15.7399 7.96945 16.0299C8.11945 16.1799 8.30945 16.2499 8.49945 16.2499C8.68945 16.2499 8.87945 16.1799 9.02945 16.0299L11.9995 13.0599L14.9695 16.0299C15.1195 16.1799 15.3095 16.2499 15.4995 16.2499C15.6895 16.2499 15.8795 16.1799 16.0295 16.0299C16.3195 15.7399 16.3195 15.2599 16.0295 14.9699L13.0594 11.9999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconForward15Seconds;