import { FC } from 'react';
import { IconProps } from "@/types";

const IconExternalDrive: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 22H9C6 22 4 20 4 17V7C4 4 6 2 9 2H16C19 2 21 4 21 7V17C21 20 19 22 16 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 15H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7 12H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7 9.5H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7 7H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.4945 18.25H16.5035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21 6V13.25C21 13.8023 20.5523 14.25 20 14.25H5C4.44772 14.25 4 13.8023 4 13.25V6C4 3.79 5.79 2 8 2H17C19.21 2 21 3.79 21 6Z" fill="currentColor" /><path d="M8 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H8C8.41 11.25 8.75 11.59 8.75 12C8.75 12.41 8.41 12.75 8 12.75Z" fill="currentColor" /><path d="M8 10.25H7C6.59 10.25 6.25 9.91 6.25 9.5C6.25 9.09 6.59 8.75 7 8.75H8C8.41 8.75 8.75 9.09 8.75 9.5C8.75 9.91 8.41 10.25 8 10.25Z" fill="currentColor" /><path d="M8 7.75H7C6.59 7.75 6.25 7.41 6.25 7C6.25 6.59 6.59 6.25 7 6.25H8C8.41 6.25 8.75 6.59 8.75 7C8.75 7.41 8.41 7.75 8 7.75Z" fill="currentColor" /><path d="M5 15.75C4.44772 15.75 4 16.1977 4 16.75V18C4 20.21 5.79 22 8 22H17C19.21 22 21 20.21 21 18V16.75C21 16.1977 20.5523 15.75 20 15.75H5ZM17.71 19.46C17.52 19.64 17.26 19.75 17 19.75C16.74 19.75 16.48 19.64 16.29 19.46C16.11 19.27 16 19.01 16 18.75C16 18.49 16.11 18.23 16.29 18.04C16.66 17.67 17.33 17.67 17.71 18.04C17.89 18.23 18 18.49 18 18.75C18 19.01 17.89 19.27 17.71 19.46Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconExternalDrive;