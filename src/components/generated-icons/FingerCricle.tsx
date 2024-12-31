import { FC } from 'react';
import { IconProps } from "@/types";

const IconFingerCricle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.9996 14.8799C11.0896 14.8799 10.3496 14.1399 10.3496 13.2299V10.7599C10.3496 9.84989 11.0896 9.10986 11.9996 9.10986C12.9096 9.10986 13.6496 9.84989 13.6496 10.7599V13.2299C13.6496 14.1399 12.9096 14.8799 11.9996 14.8799Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.98 13.4702C16.78 16.0502 14.62 18.0702 12 18.0702C9.24 18.0702 7 15.8302 7 13.0702V10.9302C7 8.17018 9.24 5.93018 12 5.93018C14.59 5.93018 16.72 7.90017 16.97 10.4202" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M11.9996 9.87012C11.5096 9.87012 11.0996 10.2701 11.0996 10.7701V13.2401C11.0996 13.7401 11.4996 14.1401 11.9996 14.1401C12.4996 14.1401 12.8996 13.7401 12.8996 13.2401V10.7701C12.8996 10.2701 12.4896 9.87012 11.9996 9.87012Z" fill="currentColor" /><path d="M12 17.5499C9.38 17.5499 7.25 15.4199 7.25 12.7999V11.2C7.25 8.57995 9.38 6.44995 12 6.44995C14.62 6.44995 16.75 8.57995 16.75 11.2V12.7999C16.75 15.4199 14.62 17.5499 12 17.5499ZM12 7.94995C10.21 7.94995 8.75 9.40995 8.75 11.2V12.7999C8.75 14.5899 10.21 16.0499 12 16.0499C13.79 16.0499 15.25 14.5899 15.25 12.7999V11.2C15.25 9.40995 13.79 7.94995 12 7.94995Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFingerCricle;