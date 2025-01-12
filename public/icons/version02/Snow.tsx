import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconSnow: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1699 12C16.1699 12.64 15.9999 13.23 15.6999 13.75C15.0899 14.8 13.9599 15.5 12.6699 15.5C11.3799 15.5 10.2499 14.8 9.63992 13.75C9.33992 13.23 9.16992 12.64 9.16992 12C9.16992 11.36 9.33992 10.77 9.63992 10.25C10.2499 9.2 11.3799 8.5 12.6699 8.5C13.9599 8.5 15.0899 9.2 15.6999 10.25C15.9999 10.77 16.1699 11.36 16.1699 12Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M12.6699 8.5V3" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 21V15.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M10.6699 3H14.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M10.6699 21H14.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M9.63988 10.25L4.87988 7.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M20.4592 16.5L15.6992 13.75" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M3.87988 9.23001L5.87988 5.77002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M19.46 18.23L21.46 14.77" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M20.4592 7.5L15.6992 10.25" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M9.63988 13.75L4.87988 16.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M21.46 9.23001L19.46 5.77002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M5.87988 18.23L3.87988 14.77" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.6699 3.75H11.9199V8.5C11.9199 8.91 12.2599 9.25 12.6699 9.25C13.0799 9.25 13.4199 8.91 13.4199 8.5V3.75H14.6699C15.0799 3.75 15.4199 3.41 15.4199 3C15.4199 2.59 15.0799 2.25 14.6699 2.25H10.6699C10.2599 2.25 9.91992 2.59 9.91992 3C9.91992 3.41 10.2599 3.75 10.6699 3.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.6699 20.25H13.4199V15.5C13.4199 15.09 13.0799 14.75 12.6699 14.75C12.2599 14.75 11.9199 15.09 11.9199 15.5V20.25H10.6699C10.2599 20.25 9.91992 20.59 9.91992 21C9.91992 21.41 10.2599 21.75 10.6699 21.75H14.6699C15.0799 21.75 15.4199 21.41 15.4199 21C15.4199 20.59 15.0799 20.25 14.6699 20.25Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M3.5003 9.87994C3.6203 9.94994 3.7503 9.97994 3.8703 9.97994C4.1303 9.97994 4.3803 9.84993 4.5203 9.59993L5.1503 8.51994L9.2703 10.8999C9.3803 10.9699 9.5103 10.9999 9.6403 10.9999C9.9003 10.9999 10.1503 10.8699 10.2903 10.6199C10.5003 10.2599 10.3703 9.79993 10.0203 9.59993L5.9103 7.21994L6.5303 6.13994C6.7403 5.77994 6.6103 5.31993 6.2603 5.11993C5.9003 4.90993 5.4403 5.02994 5.2403 5.38994L3.2403 8.84993C3.0203 9.21993 3.1403 9.66994 3.5003 9.87994Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.8404 14.1199C21.4804 13.9099 21.0204 14.0299 20.8204 14.3899L20.1904 15.4699L16.0704 13.0999C15.7104 12.8899 15.2504 13.0199 15.0504 13.3699C14.8404 13.7299 14.9704 14.1899 15.3204 14.3899L19.4304 16.7699L18.8104 17.8499C18.6004 18.2099 18.7304 18.6699 19.0804 18.8699C19.2004 18.9399 19.3304 18.9699 19.4504 18.9699C19.7104 18.9699 19.9604 18.8399 20.1004 18.5899L22.1004 15.1299C22.3204 14.7799 22.2004 14.3299 21.8404 14.1199Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M19.4404 7.21994L15.3304 9.59994C14.9704 9.80994 14.8504 10.2699 15.0604 10.6199C15.2004 10.8599 15.4504 10.9999 15.7104 10.9999C15.8404 10.9999 15.9704 10.9699 16.0804 10.8999L20.1904 8.51994L20.8204 9.59994C20.9604 9.83994 21.2104 9.97994 21.4704 9.97994C21.6004 9.97994 21.7304 9.94994 21.8404 9.87994C22.2004 9.66994 22.3204 9.20994 22.1104 8.85994L20.1104 5.39994C19.9004 5.03994 19.4404 4.91994 19.0904 5.12994C18.7304 5.33994 18.6104 5.79994 18.8204 6.14995L19.4404 7.21994Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M5.90029 16.7799L10.0103 14.3999C10.3703 14.1899 10.4903 13.7299 10.2803 13.3799C10.0703 13.0199 9.61029 12.8999 9.26029 13.1099L5.15029 15.4899L4.52029 14.4099C4.31029 14.0499 3.85029 13.9299 3.50029 14.1399C3.14029 14.3499 3.02029 14.8099 3.23029 15.1599L5.23029 18.6199C5.37029 18.8599 5.62029 18.9999 5.88029 18.9999C6.01029 18.9999 6.14029 18.9699 6.25029 18.8999C6.61029 18.6899 6.73029 18.2299 6.52029 17.8799L5.90029 16.7799Z" fill="currentColor" /><path d="M16.1699 12C16.1699 12.64 15.9999 13.23 15.6999 13.75C15.0899 14.8 13.9599 15.5 12.6699 15.5C11.3799 15.5 10.2499 14.8 9.63992 13.75C9.33992 13.23 9.16992 12.64 9.16992 12C9.16992 11.36 9.33992 10.77 9.63992 10.25C10.2499 9.2 11.3799 8.5 12.6699 8.5C13.9599 8.5 15.0899 9.2 15.6999 10.25C15.9999 10.77 16.1699 11.36 16.1699 12Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6699 3.75H11.9199V8.5C11.9199 8.91 12.2599 9.25 12.6699 9.25C13.0799 9.25 13.4199 8.91 13.4199 8.5V3.75H14.6699C15.0799 3.75 15.4199 3.41 15.4199 3C15.4199 2.59 15.0799 2.25 14.6699 2.25H10.6699C10.2599 2.25 9.91992 2.59 9.91992 3C9.91992 3.41 10.2599 3.75 10.6699 3.75Z" fill="currentColor" /><path d="M14.6699 20.25H13.4199V15.5C13.4199 15.09 13.0799 14.75 12.6699 14.75C12.2599 14.75 11.9199 15.09 11.9199 15.5V20.25H10.6699C10.2599 20.25 9.91992 20.59 9.91992 21C9.91992 21.41 10.2599 21.75 10.6699 21.75H14.6699C15.0799 21.75 15.4199 21.41 15.4199 21C15.4199 20.59 15.0799 20.25 14.6699 20.25Z" fill="currentColor" /><path d="M3.50029 9.87994C3.62029 9.94994 3.75029 9.97993 3.87029 9.97993C4.13029 9.97993 4.38029 9.84994 4.52029 9.59994L5.15029 8.51994L9.27029 10.8999C9.38029 10.9699 9.51029 10.9999 9.64029 10.9999C9.90029 10.9999 10.1503 10.8699 10.2903 10.6199C10.5003 10.2699 10.3703 9.80994 10.0203 9.59994L5.90029 7.21993L6.52029 6.13993C6.73029 5.77993 6.60029 5.31993 6.25029 5.11993C5.89029 4.90993 5.43029 5.02993 5.23029 5.38993L3.23029 8.84994C3.02029 9.21994 3.14029 9.66994 3.50029 9.87994Z" fill="currentColor" /><path d="M21.8404 14.1199C21.4804 13.9099 21.0204 14.0299 20.8204 14.3899L20.1904 15.4699L16.0704 13.0999C15.7104 12.8899 15.2504 13.0199 15.0504 13.3699C14.8404 13.7299 14.9704 14.1899 15.3204 14.3899L19.4304 16.7699L18.8104 17.8499C18.6004 18.2099 18.7304 18.6699 19.0804 18.8699C19.2004 18.9399 19.3304 18.9699 19.4504 18.9699C19.7104 18.9699 19.9604 18.8399 20.1004 18.5899L22.1004 15.1299C22.3204 14.7799 22.2004 14.3299 21.8404 14.1199Z" fill="currentColor" /><path d="M19.4396 7.21994L15.3196 9.59995C14.9596 9.80995 14.8396 10.2699 15.0496 10.6199C15.1896 10.8599 15.4396 10.9999 15.6996 10.9999C15.8296 10.9999 15.9596 10.9699 16.0696 10.8999L20.1796 8.51994L20.8096 9.59995C20.9496 9.83994 21.1996 9.97994 21.4596 9.97994C21.5896 9.97994 21.7196 9.94994 21.8296 9.87994C22.1896 9.66994 22.3096 9.20994 22.0996 8.85994L20.0996 5.39994C19.8896 5.03994 19.4296 4.91994 19.0796 5.12994C18.7196 5.33994 18.5996 5.79994 18.8096 6.14994L19.4396 7.21994Z" fill="currentColor" /><path d="M5.90029 16.7799L10.0103 14.3999C10.3703 14.1899 10.4903 13.7299 10.2803 13.3799C10.0703 13.0199 9.61029 12.8999 9.26029 13.1099L5.15029 15.4899L4.52029 14.4099C4.31029 14.0499 3.85029 13.9299 3.50029 14.1399C3.14029 14.3499 3.02029 14.8099 3.23029 15.1599L5.23029 18.6199C5.37029 18.8599 5.62029 18.9999 5.88029 18.9999C6.01029 18.9999 6.14029 18.9699 6.25029 18.8999C6.61029 18.6899 6.73029 18.2299 6.52029 17.8799L5.90029 16.7799Z" fill="currentColor" /><path d="M16.1699 12C16.1699 12.64 15.9999 13.23 15.6999 13.75C15.0899 14.8 13.9599 15.5 12.6699 15.5C11.3799 15.5 10.2499 14.8 9.63992 13.75C9.33992 13.23 9.16992 12.64 9.16992 12C9.16992 11.36 9.33992 10.77 9.63992 10.25C10.2499 9.2 11.3799 8.5 12.6699 8.5C13.9599 8.5 15.0899 9.2 15.6999 10.25C15.9999 10.77 16.1699 11.36 16.1699 12Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSnow;