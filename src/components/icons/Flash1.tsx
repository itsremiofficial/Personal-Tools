import { FC } from 'react';
import { IconProps } from "../../types";

const IconFlash1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.08913 13.2799H9.17913V20.4799C9.17913 22.1599 10.0891 22.4999 11.1991 21.2399L18.7691 12.6399C19.6991 11.5899 19.3091 10.7199 17.8991 10.7199H14.8091V3.5199C14.8091 1.8399 13.8991 1.4999 12.7891 2.7599L5.21913 11.3599C4.29913 12.4199 4.68913 13.2799 6.08913 13.2799Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M11.9996 9.87012C11.5096 9.87012 11.0996 10.2701 11.0996 10.7701V13.2401C11.0996 13.7401 11.4996 14.1401 11.9996 14.1401C12.4996 14.1401 12.8996 13.7401 12.8996 13.2401V10.7701C12.8996 10.2701 12.4896 9.87012 11.9996 9.87012Z" fill="currentColor" /><path d="M12 17.5499C9.38 17.5499 7.25 15.4199 7.25 12.7999V11.2C7.25 8.57995 9.38 6.44995 12 6.44995C14.62 6.44995 16.75 8.57995 16.75 11.2V12.7999C16.75 15.4199 14.62 17.5499 12 17.5499ZM12 7.94995C10.21 7.94995 8.75 9.40995 8.75 11.2V12.7999C8.75 14.5899 10.21 16.0499 12 16.0499C13.79 16.0499 15.25 14.5899 15.25 12.7999V11.2C15.25 9.40995 13.79 7.94995 12 7.94995Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFlash1;