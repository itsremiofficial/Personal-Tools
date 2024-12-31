import { FC } from 'react';
import { IconProps } from "@/types";

const IconVideo: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.53 20.4201H6.21C3.05 20.4201 2 18.3201 2 16.2101V7.79008C2 4.63008 3.05 3.58008 6.21 3.58008H12.53C15.69 3.58008 16.74 4.63008 16.74 7.79008V16.2101C16.74 19.3701 15.68 20.4201 12.53 20.4201Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19.5202 17.1001L16.7402 15.1501V8.84013L19.5202 6.89013C20.8802 5.94013 22.0002 6.52013 22.0002 8.19013V15.8101C22.0002 17.4801 20.8802 18.0601 19.5202 17.1001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.5 11C12.3284 11 13 10.3284 13 9.5C13 8.67157 12.3284 8 11.5 8C10.6716 8 10 8.67157 10 9.5C10 10.3284 10.6716 11 11.5 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M13 3.25H7C3.58 3.25 2.25 4.58 2.25 8V16C2.25 18.3 3.5 20.75 7 20.75H13C16.42 20.75 17.75 19.42 17.75 16V8C17.75 4.58 16.42 3.25 13 3.25Z" fill="currentColor" /><path d="M11.4991 11.3801C12.5374 11.3801 13.3791 10.5384 13.3791 9.50012C13.3791 8.46182 12.5374 7.62012 11.4991 7.62012C10.4608 7.62012 9.61914 8.46182 9.61914 9.50012C9.61914 10.5384 10.4608 11.3801 11.4991 11.3801Z" fill="currentColor" /><path d="M21.6505 6.17011C21.2405 5.96011 20.3805 5.72011 19.2105 6.54011L17.7305 7.58011C17.7405 7.72011 17.7505 7.85011 17.7505 8.00011V16.0001C17.7505 16.1501 17.7305 16.2801 17.7305 16.4201L19.2105 17.4601C19.8305 17.9001 20.3705 18.0401 20.8005 18.0401C21.1705 18.0401 21.4605 17.9401 21.6505 17.8401C22.0605 17.6301 22.7505 17.0601 22.7505 15.6301V8.38011C22.7505 6.95011 22.0605 6.38011 21.6505 6.17011Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconVideo;