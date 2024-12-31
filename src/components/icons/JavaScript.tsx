import { FC } from 'react';
import { IconProps } from "../../types";

const IconJudge: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0105 18.5101L15.0605 13.5601" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.0602 13.56L11.5202 17.1C10.7402 17.88 9.47024 17.88 8.69024 17.1L4.45023 12.86C3.67023 12.08 3.67023 10.81 4.45023 10.03L11.5202 2.96C12.3002 2.18 13.5702 2.18 14.3502 2.96L18.5902 7.20002C19.3702 7.98002 19.3702 9.25001 18.5902 10.03L15.0602 13.56Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 21H8" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.56055 7.91992L13.6306 14.9899" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M11.9991 15.8801C14.142 15.8801 15.8791 14.143 15.8791 12.0001C15.8791 9.85725 14.142 8.12012 11.9991 8.12012C9.85628 8.12012 8.11914 9.85725 8.11914 12.0001C8.11914 14.143 9.85628 15.8801 11.9991 15.8801Z" fill="currentColor" /><path d="M17 7.4999C16.73 7.4999 16.48 7.3999 16.29 7.2099C16.2 7.1099 16.13 6.9999 16.08 6.8799C16.03 6.7599 16 6.6299 16 6.4999C16 6.3699 16.03 6.2399 16.08 6.1199C16.13 5.9899 16.2 5.8899 16.29 5.7899C16.52 5.5599 16.87 5.4499 17.19 5.5199C17.26 5.5299 17.32 5.5499 17.38 5.5799C17.44 5.5999 17.5 5.6299 17.56 5.6699C17.61 5.6999 17.66 5.7499 17.71 5.7899C17.8 5.8899 17.87 5.9899 17.92 6.1199C17.97 6.2399 18 6.3699 18 6.4999C18 6.6299 17.97 6.7599 17.92 6.8799C17.87 6.9999 17.8 7.1099 17.71 7.2099C17.61 7.2999 17.5 7.3699 17.38 7.4199C17.26 7.4699 17.13 7.4999 17 7.4999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconJudge;