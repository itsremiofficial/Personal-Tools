import { FC } from 'react';
import { IconProps } from "@/types";

const IconTree: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1694 10.0598H7.82933C6.64933 10.0598 6.23934 9.26982 6.92934 8.30982L11.0994 2.46982C11.5894 1.76982 12.4094 1.76982 12.8894 2.46982L17.0593 8.30982C17.7593 9.26982 17.3494 10.0598 16.1694 10.0598Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.5894 18.0001H6.41937C4.83937 18.0001 4.29937 16.9501 5.22937 15.6701L9.21936 10.0601H14.7894L18.7794 15.6701C19.7094 16.9501 19.1694 18.0001 17.5894 18.0001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 22V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1694 10.0601H7.82933C6.64933 10.0601 6.23934 9.27007 6.92934 8.31007L11.0994 2.47007C11.5894 1.77007 12.4093 1.77007 12.8993 2.47007L17.0694 8.31007C17.7594 9.27007 17.3494 10.0601 16.1694 10.0601Z" fill="currentColor" /><path d="M17.5896 18.0001H6.4096C4.8296 18.0001 4.2896 16.9501 5.2196 15.6701L9.20959 10.0601H14.7896L18.7796 15.6701C19.7096 16.9501 19.1696 18.0001 17.5896 18.0001Z" fill="currentColor" /><path d="M12.75 18V22C12.75 22.41 12.41 22.75 12 22.75C11.59 22.75 11.25 22.41 11.25 22V18H12.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTree;