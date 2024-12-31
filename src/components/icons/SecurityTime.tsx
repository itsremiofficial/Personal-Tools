import { FC } from 'react';
import { IconProps } from "../../types";

const IconSecurityUser: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4901 2.23006L5.50015 4.10005C4.35015 4.53005 3.41016 5.89004 3.41016 7.12004V14.55C3.41016 15.73 4.19017 17.28 5.14017 17.99L9.44016 21.2001C10.8502 22.2601 13.1701 22.2601 14.5801 21.2001L18.8802 17.99C19.8302 17.28 20.6101 15.73 20.6101 14.55V7.12004C20.6101 5.89004 19.6701 4.53005 18.5201 4.10005L13.5302 2.23006C12.6802 1.92006 11.3201 1.92006 10.4901 2.23006Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.9997 10.9199C11.9597 10.9199 11.9097 10.9199 11.8697 10.9199C10.9297 10.8899 10.1797 10.1099 10.1797 9.15991C10.1797 8.18991 10.9697 7.3999 11.9397 7.3999C12.9097 7.3999 13.6997 8.18991 13.6997 9.15991C13.6897 10.1199 12.9397 10.8899 11.9997 10.9199Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.0091 13.7199C9.04906 14.3599 9.04906 15.4099 10.0091 16.0498C11.0991 16.7799 12.8891 16.7799 13.9791 16.0498C14.9391 15.4099 14.9391 14.3599 13.9791 13.7199C12.8991 12.9899 11.1091 12.9899 10.0091 13.7199Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.9099 11.12C20.9099 16.01 17.3599 20.59 12.5099 21.93C12.1799 22.02 11.8198 22.02 11.4898 21.93C6.63984 20.59 3.08984 16.01 3.08984 11.12V6.73006C3.08984 5.91006 3.70986 4.98007 4.47986 4.67007L10.0498 2.39007C11.2998 1.88007 12.7098 1.88007 13.9598 2.39007L19.5298 4.67007C20.2898 4.98007 20.9199 5.91006 20.9199 6.73006L20.9099 11.12Z" fill="currentColor" /><path d="M14.5 10.5C14.5 9.12 13.38 8 12 8C10.62 8 9.5 9.12 9.5 10.5C9.5 11.62 10.24 12.55 11.25 12.87V15.5C11.25 15.91 11.59 16.25 12 16.25C12.41 16.25 12.75 15.91 12.75 15.5V12.87C13.76 12.55 14.5 11.62 14.5 10.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSecurityUser;