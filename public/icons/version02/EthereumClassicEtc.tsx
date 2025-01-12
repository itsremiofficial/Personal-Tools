import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconEthereumClassicEtc: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.57004 9.1L12.34 6.98C12.55 6.89 12.79 6.89 12.99 6.98L17.76 9.1C18.18 9.29 18.57 8.78 18.28 8.42L13.28 2.31C12.94 1.89 12.38 1.89 12.04 2.31L7.04001 8.42C6.76001 8.78 7.15004 9.29 7.57004 9.1Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.56999 14.9L12.35 17.02C12.56 17.11 12.8 17.11 13 17.02L17.78 14.9C18.2 14.71 18.59 15.22 18.3 15.58L13.3 21.69C12.96 22.11 12.4 22.11 12.06 21.69L7.05998 15.58C6.75998 15.22 7.13999 14.71 7.56999 14.9Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6697 9.38L7.42969 12L12.6697 14.62L17.9097 12L12.6697 9.38Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M7.56999 9.1L12.34 6.98C12.55 6.89 12.79 6.89 12.99 6.98L17.77 9.1C18.19 9.29 18.58 8.78 18.29 8.42L13.29 2.31C12.95 1.89 12.39 1.89 12.05 2.31L7.04999 8.42C6.75999 8.78 7.14999 9.29 7.56999 9.1Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M7.56998 14.9L12.35 17.02C12.56 17.11 12.8 17.11 13 17.02L17.78 14.9C18.2 14.71 18.59 15.22 18.3 15.58L13.3 21.69C12.96 22.11 12.4 22.11 12.06 21.69L7.05998 15.58C6.75998 15.22 7.13998 14.71 7.56998 14.9Z" fill="currentColor" /><path d="M12.45 9.49L8.31998 11.55C7.94998 11.73 7.94998 12.26 8.31998 12.44L12.45 14.5C12.59 14.57 12.76 14.57 12.9 14.5L17.03 12.44C17.4 12.26 17.4 11.73 17.03 11.55L12.9 9.49C12.75 9.42 12.59 9.42 12.45 9.49Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.57004 9.1L12.34 6.98C12.55 6.89 12.79 6.89 12.99 6.98L17.76 9.1C18.18 9.29 18.57 8.78 18.28 8.42L13.28 2.31C12.94 1.89 12.38 1.89 12.04 2.31L7.04001 8.42C6.76001 8.78 7.15004 9.29 7.57004 9.1Z" fill="none" /><path d="M7.56999 14.9L12.35 17.02C12.56 17.11 12.8 17.11 13 17.02L17.78 14.9C18.2 14.71 18.59 15.22 18.3 15.58L13.3 21.69C12.96 22.11 12.4 22.11 12.06 21.69L7.05998 15.58C6.75998 15.22 7.13999 14.71 7.56999 14.9Z" fill="none" /><path d="M12.45 9.49L8.31998 11.55C7.94998 11.73 7.94998 12.26 8.31998 12.44L12.45 14.5C12.59 14.57 12.7599 14.57 12.8999 14.5L17.0299 12.44C17.3999 12.26 17.3999 11.73 17.0299 11.55L12.8999 9.49C12.7499 9.42 12.59 9.42 12.45 9.49Z" fill="none" /></svg> 
      )}
    </>
  );
};

export default IconEthereumClassicEtc;