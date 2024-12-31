import { FC } from 'react';
import { IconProps } from "../../types";

const IconHeartSearch: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.49 12.0001C21.81 10.9801 22 9.88012 22 8.69012C22 5.60012 19.51 3.1001 16.44 3.1001C14.62 3.1001 13.01 3.98015 12 5.34015C10.99 3.98015 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.60012 2 8.69012C2 15.6901 8.48 19.8201 11.38 20.8201C11.55 20.8801 11.77 20.9101 12 20.9101" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.7391 21.0001C19.5064 21.0001 20.9391 19.5674 20.9391 17.8001C20.9391 16.0328 19.5064 14.6001 17.7391 14.6001C15.9717 14.6001 14.5391 16.0328 14.5391 17.8001C14.5391 19.5674 15.9717 21.0001 17.7391 21.0001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.5391 21.6001L20.5391 20.6001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 7.81V14H17.92C17.25 14 16.46 13.52 16.15 12.93L15.11 10.96C14.83 10.43 14.43 10.46 14.21 11.01L11.91 16.82C11.66 17.47 11.24 17.47 10.98 16.82L9.84 13.94C9.57 13.24 8.73 12.67 7.98 12.67L2 12.7V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z" fill="currentColor" /><path d="M22 16.1901V14.0001H17.92C17.25 14.0001 16.46 13.5201 16.15 12.9301L15.11 10.9601C14.83 10.4301 14.43 10.4601 14.21 11.0101L11.91 16.8201C11.66 17.4701 11.24 17.4701 10.98 16.8201L9.84 13.9401C9.57 13.2401 8.73 12.6701 7.98 12.6701L2 12.7001V16.1901C2 19.7701 4.1 21.9301 7.63 21.9901C7.74 22.0001 7.86 22.0001 7.97 22.0001H15.97C16.12 22.0001 16.27 22.0001 16.41 21.9901C19.92 21.9101 22 19.7601 22 16.1901Z" fill="currentColor" /><path d="M2.0007 12.7002V16.0102C1.9807 15.6902 1.9707 15.3502 1.9707 15.0002V12.7002H2.0007Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconHeartSearch;