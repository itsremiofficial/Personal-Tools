import { FC } from 'react';
import { IconProps } from "../../types";

const IconVideoCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9.09961 12V10.52C9.09961 8.60999 10.4496 7.83999 12.0996 8.78999L13.3796 9.52999L14.6596 10.27C16.3096 11.22 16.3096 12.78 14.6596 13.73L13.3796 14.47L12.0996 15.21C10.4496 16.16 9.09961 15.38 9.09961 13.48V12Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M13 3.25H7C3.58 3.25 2.25 4.58 2.25 8V16C2.25 18.3 3.5 20.75 7 20.75H13C16.42 20.75 17.75 19.42 17.75 16V8C17.75 4.58 16.42 3.25 13 3.25Z" fill="currentColor" /><path d="M11.4991 11.3801C12.5374 11.3801 13.3791 10.5384 13.3791 9.50012C13.3791 8.46182 12.5374 7.62012 11.4991 7.62012C10.4608 7.62012 9.61914 8.46182 9.61914 9.50012C9.61914 10.5384 10.4608 11.3801 11.4991 11.3801Z" fill="currentColor" /><path d="M21.6505 6.17011C21.2405 5.96011 20.3805 5.72011 19.2105 6.54011L17.7305 7.58011C17.7405 7.72011 17.7505 7.85011 17.7505 8.00011V16.0001C17.7505 16.1501 17.7305 16.2801 17.7305 16.4201L19.2105 17.4601C19.8305 17.9001 20.3705 18.0401 20.8005 18.0401C21.1705 18.0401 21.4605 17.9401 21.6505 17.8401C22.0605 17.6301 22.7505 17.0601 22.7505 15.6301V8.38011C22.7505 6.95011 22.0605 6.38011 21.6505 6.17011Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconVideoCircle;