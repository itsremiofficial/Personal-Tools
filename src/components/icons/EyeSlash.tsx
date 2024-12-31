import { FC } from 'react';
import { IconProps } from "../../types";

const IconEyeSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5299 9.46992L9.46992 14.5299C8.81992 13.8799 8.41992 12.9899 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C12.9899 8.41992 13.8799 8.81992 14.5299 9.46992Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.8198 5.76998C16.0698 4.44998 14.0698 3.72998 11.9998 3.72998C8.46984 3.72998 5.17984 5.80998 2.88984 9.40998C1.98984 10.82 1.98984 13.19 2.88984 14.6C3.67984 15.84 4.59984 16.91 5.59984 17.77" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.41992 19.5302C9.55992 20.0102 10.7699 20.2702 11.9999 20.2702C15.5299 20.2702 18.8199 18.1902 21.1099 14.5902C22.0099 13.1802 22.0099 10.8102 21.1099 9.40018C20.7799 8.88018 20.4199 8.39018 20.0499 7.93018" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.5095 12.7002C15.2495 14.1102 14.0995 15.2602 12.6895 15.5202" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.47 14.5298L2 21.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.9993 2L14.5293 9.47" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81978C4.17978 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17978 21.99 7.81978 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M13.5794 14.6899L11.2594 17.0099C10.6194 17.6599 9.56945 17.6599 8.91945 17.0099L6.98945 15.0799C6.33945 14.4299 6.33945 13.3799 6.98945 12.7399L9.30945 10.4199L13.5794 14.6899Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M17.0105 11.2599L13.5806 14.6899L9.31055 10.4199L12.7406 6.98994C13.3806 6.33994 14.4306 6.33994 15.0806 6.98994L17.0105 8.91994C17.6605 9.56994 17.6605 10.6199 17.0105 11.2599Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconEyeSlash;