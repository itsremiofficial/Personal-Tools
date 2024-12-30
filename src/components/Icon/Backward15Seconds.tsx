import { FC } from 'react';
import { IconProps } from "../../types";

const IconBackward15Seconds: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M15.9606 10.8301H12.9006L12.1406 13.1201H14.4306C15.2706 13.1201 15.9606 13.8001 15.9606 14.6501C15.9606 15.4901 15.2806 16.1801 14.4306 16.1801H12.1406" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.53906 16.17V10.8301L8.03906 12.5001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.0195 4.46997L11.9995 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4.90936 7.79974C3.79936 9.27974 3.10938 11.1097 3.10938 13.1097C3.10938 18.0197 7.08939 21.9998 11.9994 21.9998C16.9094 21.9998 20.8894 18.0197 20.8894 13.1097C20.8894 8.19974 16.9094 4.21973 11.9994 4.21973C11.3194 4.21973 10.6594 4.30978 10.0194 4.45978" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.0002 8.33983V15.6598C22.0002 17.1598 20.3703 18.0998 19.0703 17.3498L15.9002 15.5198L12.7303 13.6898L12.2402 13.4098V10.5898L12.7303 10.3098L15.9002 8.47984L19.0703 6.64983C20.3703 5.89983 22.0002 6.83983 22.0002 8.33983Z" fill="currentColor" /><path d="M12.2394 8.33983V15.6598C12.2394 17.1598 10.6095 18.0998 9.31946 17.3498L6.13947 15.5198L2.96945 13.6898C1.67945 12.9398 1.67945 11.0598 2.96945 10.3098L6.13947 8.47984L9.31946 6.64983C10.6095 5.89983 12.2394 6.83983 12.2394 8.33983Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBackward15Seconds;