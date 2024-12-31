import { FC } from 'react';
import { IconProps } from "../../types";

const IconAttachSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.2009 11.8002L10.7908 13.2102C10.0108 13.9902 10.0108 15.2602 10.7908 16.0402C11.5708 16.8202 12.8408 16.8202 13.6208 16.0402L15.8409 13.8202C17.4009 12.2602 17.4009 9.73023 15.8409 8.16023C14.2809 6.60023 11.7508 6.60023 10.1808 8.16023L7.76086 10.5802C6.42086 11.9202 6.42086 14.0902 7.76086 15.4302" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M15.4807 10.7702L11.6907 15.8202H6.08072C5.12072 15.8202 4.64073 14.6602 5.32073 13.9802L10.5007 8.80023C11.3307 7.97023 12.6807 7.97023 13.5107 8.80023L15.4807 10.7702Z" fill="currentColor" /><path d="M17.9195 15.82H11.6895L15.4795 10.77L18.6895 13.98C19.3595 14.66 18.8795 15.82 17.9195 15.82Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconAttachSquare;