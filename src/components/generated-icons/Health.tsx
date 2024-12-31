import { FC } from 'react';
import { IconProps } from "@/types";

const IconHealth: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.96973 22H14.9697C19.9697 22 21.9697 20 21.9697 15V9C21.9697 4 19.9697 2 14.9697 2H8.96973C3.96973 2 1.96973 4 1.96973 9V15C1.96973 20 3.96973 22 8.96973 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M1.96973 12.7001L7.96973 12.6801C8.71973 12.6801 9.55973 13.2501 9.83973 13.9501L10.9797 16.8301C11.2397 17.4801 11.6497 17.4801 11.9097 16.8301L14.1997 11.0201C14.4197 10.4601 14.8297 10.4401 15.1097 10.9701L16.1497 12.9401C16.4597 13.5301 17.2597 14.0101 17.9197 14.0101H21.9797" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 7.81V14H17.92C17.25 14 16.46 13.52 16.15 12.93L15.11 10.96C14.83 10.43 14.43 10.46 14.21 11.01L11.91 16.82C11.66 17.47 11.24 17.47 10.98 16.82L9.84 13.94C9.57 13.24 8.73 12.67 7.98 12.67L2 12.7V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z" fill="currentColor" /><path d="M22 16.1901V14.0001H17.92C17.25 14.0001 16.46 13.5201 16.15 12.9301L15.11 10.9601C14.83 10.4301 14.43 10.4601 14.21 11.0101L11.91 16.8201C11.66 17.4701 11.24 17.4701 10.98 16.8201L9.84 13.9401C9.57 13.2401 8.73 12.6701 7.98 12.6701L2 12.7001V16.1901C2 19.7701 4.1 21.9301 7.63 21.9901C7.74 22.0001 7.86 22.0001 7.97 22.0001H15.97C16.12 22.0001 16.27 22.0001 16.41 21.9901C19.92 21.9101 22 19.7601 22 16.1901Z" fill="currentColor" /><path d="M2.0007 12.7002V16.0102C1.9807 15.6902 1.9707 15.3502 1.9707 15.0002V12.7002H2.0007Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconHealth;