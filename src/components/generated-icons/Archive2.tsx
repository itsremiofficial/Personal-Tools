import { FC } from 'react';
import { IconProps } from "@/types";

const IconArchive2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 10.2202V19.0002C19.5 21.0002 19 22.0002 16.5 22.0002H7.5C5 22.0002 4.5 21.0002 4.5 19.0002V10.2202" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 2H19C21 2 22 3 22 5V7C22 9 21 10 19 10H5C3 10 2 9 2 7V5C2 3 3 2 5 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M10.1797 14H13.8197" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.5 9.96997V19C19.5 21 19 22 16.5 22H7.5C5 22 4.5 21 4.5 19V9.96997C4.66 9.98997 4.83 9.99997 5 9.99997H19C19.17 9.99997 19.34 9.98997 19.5 9.96997Z" fill="currentColor" /><path d="M22 5V7C22 8.83 21.17 9.82 19.5 9.97C19.34 9.99 19.17 10 19 10H5C4.83 10 4.66 9.99 4.5 9.97C2.83 9.82 2 8.83 2 7V5C2 3 3 2 5 2H19C21 2 22 3 22 5Z" fill="currentColor" /><path d="M13.8197 14.75H10.1797C9.76969 14.75 9.42969 14.41 9.42969 14C9.42969 13.59 9.76969 13.25 10.1797 13.25H13.8197C14.2297 13.25 14.5697 13.59 14.5697 14C14.5697 14.41 14.2297 14.75 13.8197 14.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconArchive2;