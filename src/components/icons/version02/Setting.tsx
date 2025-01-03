import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSetting: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.66992 9.10986V14.8799C3.66992 16.9999 3.66992 16.9999 5.66992 18.3499L11.1699 21.5299C11.9999 22.0099 13.3499 22.0099 14.1699 21.5299L19.6699 18.3499C21.6699 16.9999 21.6699 16.9999 21.6699 14.8899V9.10986C21.6699 6.99986 21.6699 6.99986 19.6699 5.64986L14.1699 2.46986C13.3499 1.98986 11.9999 1.98986 11.1699 2.46986L5.66992 5.64986C3.66992 6.99986 3.66992 6.99986 3.66992 9.10986Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M12.6699 15C14.3268 15 15.6699 13.6569 15.6699 12C15.6699 10.3431 14.3268 9 12.6699 9C11.0131 9 9.66992 10.3431 9.66992 12C9.66992 13.6569 11.0131 15 12.6699 15Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.61 5.41994L14.44 2.42994C13.45 1.85994 11.9 1.85994 10.91 2.42994L5.69 5.43994C3.62 6.83994 3.5 7.04994 3.5 9.27994V14.7099C3.5 16.9399 3.62 17.1599 5.73 18.5799L10.9 21.5699C11.4 21.8599 12.04 21.9999 12.67 21.9999C13.3 21.9999 13.94 21.8599 14.43 21.5699L19.65 18.5599C21.72 17.1599 21.84 16.9499 21.84 14.7199V9.27994C21.84 7.04994 21.72 6.83994 19.61 5.41994Z" fill="currentColor" /><path d="M12.6699 15.25C14.4648 15.25 15.9199 13.7949 15.9199 12C15.9199 10.2051 14.4648 8.75 12.6699 8.75C10.875 8.75 9.41992 10.2051 9.41992 12C9.41992 13.7949 10.875 15.25 12.6699 15.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.61 5.41994L14.44 2.42994C13.45 1.85994 11.9 1.85994 10.91 2.42994L5.69 5.43994C3.62 6.83994 3.5 7.04994 3.5 9.27994V14.7099C3.5 16.9399 3.62 17.1599 5.73 18.5799L10.9 21.5699C11.4 21.8599 12.04 21.9999 12.67 21.9999C13.3 21.9999 13.94 21.8599 14.43 21.5699L19.65 18.5599C21.72 17.1599 21.84 16.9499 21.84 14.7199V9.27994C21.84 7.04994 21.72 6.83994 19.61 5.41994ZM12.67 15.2499C10.88 15.2499 9.42 13.7899 9.42 11.9999C9.42 10.2099 10.88 8.74994 12.67 8.74994C14.46 8.74994 15.92 10.2099 15.92 11.9999C15.92 13.7899 14.46 15.2499 12.67 15.2499Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSetting as IconComponentType).keywords = [
  "setting",
  "scene",
  "stage setting",
  "mise en scene",
  "scope",
  "background",
  "mount",
  "place setting",
  "scenario",
  "context"
];

export default IconSetting as IconComponentType;