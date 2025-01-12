import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconSafeHome: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.6698 15.37V17.5601C23.6698 20.0001 21.8898 22.3 19.4698 22.97C19.2998 23.01 19.1198 23.01 18.9598 22.97C17.7798 22.65 16.7398 21.93 16.0098 21C15.2198 20.02 14.7598 18.8101 14.7598 17.5601V15.37C14.7598 14.95 15.0698 14.49 15.4498 14.33L18.2298 13.1899C18.8598 12.9399 19.5598 12.9399 20.1898 13.1899L21.1898 13.6L22.9798 14.33C23.3598 14.49 23.6698 14.95 23.6698 15.37Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M21.6202 11.0101L21.1902 13.6L20.1902 13.19C19.5602 12.94 18.8602 12.94 18.2302 13.19L15.4502 14.33C15.0702 14.49 14.7602 14.95 14.7602 15.37V17.5601C14.7602 18.8101 15.2202 20.02 16.0102 21H6.8502C5.4802 21 4.19021 19.9101 3.96021 18.5601L2.7002 11.0101C2.5402 10.0801 3.01019 8.83004 3.75019 8.24004L10.3302 2.98003C11.3402 2.17003 12.9802 2.17004 13.9902 2.99004L20.5702 8.24004C21.3002 8.83004 21.7802 10.0801 21.6202 11.0101Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.6698 15.37V17.56C23.6698 20 21.8898 22.3 19.4698 22.97C19.2998 23.01 19.1198 23.01 18.9598 22.97C17.7798 22.65 16.7398 21.93 16.0098 21C15.2198 20.02 14.7598 18.81 14.7598 17.56V15.37C14.7598 14.95 15.0698 14.49 15.4498 14.33L18.2298 13.19C18.8598 12.94 19.5598 12.94 20.1898 13.19L21.1898 13.6L22.9798 14.33C23.3598 14.49 23.6698 14.95 23.6698 15.37Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.6202 11.01L21.1902 13.6L20.1902 13.19C19.5602 12.94 18.8602 12.94 18.2302 13.19L15.4502 14.33C15.0702 14.49 14.7602 14.95 14.7602 15.37V17.56C14.7602 18.81 15.2202 20.02 16.0102 21H6.8502C5.4802 21 4.19021 19.91 3.96021 18.56L2.7002 11.01C2.5402 10.08 3.01019 8.82998 3.75019 8.23998L10.3302 2.97997C11.3402 2.16997 12.9802 2.16998 13.9902 2.98998L20.5702 8.23998C21.3002 8.82998 21.7802 10.08 21.6202 11.01Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.6698 15.37V17.56C23.6698 20 21.8898 22.3 19.4698 22.97C19.2998 23.01 19.1198 23.01 18.9598 22.97C17.7798 22.65 16.7398 21.93 16.0098 21C15.2198 20.02 14.7598 18.81 14.7598 17.56V15.37C14.7598 14.95 15.0698 14.49 15.4498 14.33L18.2298 13.19C18.8598 12.94 19.5598 12.94 20.1898 13.19L21.1898 13.6L22.9798 14.33C23.3598 14.49 23.6698 14.95 23.6698 15.37Z" fill="currentColor" /><path d="M21.6202 11.01L21.4402 12.08L20.7402 11.8C19.7502 11.4 18.6702 11.4 17.6602 11.8L14.8702 12.95C13.9202 13.35 13.2602 14.34 13.2602 15.37V17.56C13.2602 18.75 13.5902 19.94 14.2002 21H6.8502C5.4802 21 4.1902 19.91 3.9602 18.56L2.7002 11.01C2.5402 10.08 3.0102 8.83 3.7502 8.24L10.3302 2.98C11.3402 2.17 12.9802 2.17 13.9902 2.99L20.5702 8.24C21.3002 8.83 21.7802 10.08 21.6202 11.01Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSafeHome;