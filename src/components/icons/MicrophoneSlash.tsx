import { FC } from 'react';
import { IconProps } from "../../types";

const IconMicrophoneSlash1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.82 6.53C17.16 3.93 14.81 2 12 2C8.69 2 6 4.69 6 8V13C6 14.46 6.52 15.8 7.39 16.84" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.9999 9.97998V13C17.9999 16.31 15.3099 19 11.9999 19C11.2699 19 10.5599 18.87 9.91992 18.63" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5.85938 19.58C7.46938 21.08 9.62937 22 11.9994 22C16.9694 22 20.9994 17.97 20.9994 13V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.5 2.99023L2.5 21.9902" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5508 5.49977V2.25977" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.5 3.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.1197 9.11986C18.7297 9.11986 18.4197 9.42986 18.4197 9.81986V11.3999C18.4197 14.9399 15.5397 17.8199 11.9997 17.8199C8.45969 17.8199 5.57969 14.9399 5.57969 11.3999V9.80986C5.57969 9.41986 5.26969 9.10986 4.87969 9.10986C4.48969 9.10986 4.17969 9.41986 4.17969 9.80986V11.3899C4.17969 15.4599 7.30969 18.8099 11.2997 19.1699V21.2999C11.2997 21.6899 11.6097 21.9999 11.9997 21.9999C12.3897 21.9999 12.6997 21.6899 12.6997 21.2999V19.1699C16.6797 18.8199 19.8197 15.4599 19.8197 11.3899V9.80986C19.8097 9.42986 19.4997 9.11986 19.1197 9.11986Z" fill="currentColor" /><path d="M12.0001 2C9.56008 2 7.58008 3.98 7.58008 6.42V11.54C7.58008 13.98 9.56008 15.96 12.0001 15.96C14.4401 15.96 16.4201 13.98 16.4201 11.54V6.42C16.4201 3.98 14.4401 2 12.0001 2ZM13.3101 8.95C13.2401 9.21 13.0101 9.38 12.7501 9.38C12.7001 9.38 12.6501 9.37 12.6001 9.36C12.2101 9.25 11.8001 9.25 11.4101 9.36C11.0901 9.45 10.7801 9.26 10.7001 8.95C10.6101 8.64 10.8001 8.32 11.1101 8.24C11.7001 8.08 12.3201 8.08 12.9101 8.24C13.2101 8.32 13.3901 8.64 13.3101 8.95ZM13.8401 7.01C13.7501 7.25 13.5301 7.39 13.2901 7.39C13.2201 7.39 13.1601 7.38 13.0901 7.36C12.3901 7.1 11.6101 7.1 10.9101 7.36C10.6101 7.47 10.2701 7.31 10.1601 7.01C10.0501 6.71 10.2101 6.37 10.5101 6.27C11.4701 5.92 12.5301 5.92 13.4901 6.27C13.7901 6.38 13.9501 6.71 13.8401 7.01Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMicrophoneSlash1;