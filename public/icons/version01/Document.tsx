import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconDocument: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M3 10.0004C3 6.22913 3 4.34351 4.17157 3.17194C5.34315 2.00037 7.22876 2.00037 11 2.00037H13C16.7712 2.00037 18.6569 2.00037 19.8284 3.17194C21 4.34351 21 6.22913 21 10.0004V14.0004C21 17.7716 21 19.6572 19.8284 20.8288C18.6569 22.0004 16.7712 22.0004 13 22.0004H11C7.22876 22.0004 5.34315 22.0004 4.17157 20.8288C3 19.6572 3 17.7716 3 14.0004V10.0004Z" stroke="currentColor" strokeWidth={width} /><path d="M8 10.0004H16" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M8 14.0004H13" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M3 10.0004C3 6.22913 3 4.34351 4.17157 3.17194C5.34315 2.00037 7.22876 2.00037 11 2.00037H13C16.7712 2.00037 18.6569 2.00037 19.8284 3.17194C21 4.34351 21 6.22913 21 10.0004V14.0004C21 17.7716 21 19.6572 19.8284 20.8288C18.6569 22.0004 16.7712 22.0004 13 22.0004H11C7.22876 22.0004 5.34315 22.0004 4.17157 20.8288C3 19.6572 3 17.7716 3 14.0004V10.0004Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M7.25 10.0004C7.25 9.58615 7.58579 9.25037 8 9.25037H16C16.4142 9.25037 16.75 9.58615 16.75 10.0004C16.75 10.4146 16.4142 10.7504 16 10.7504H8C7.58579 10.7504 7.25 10.4146 7.25 10.0004Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M7.25 14.0004C7.25 13.5862 7.58579 13.2504 8 13.2504H13C13.4142 13.2504 13.75 13.5862 13.75 14.0004C13.75 14.4146 13.4142 14.7504 13 14.7504H8C7.58579 14.7504 7.25 14.4146 7.25 14.0004Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.17157 3.17194C3 4.34351 3 6.22913 3 10.0004V14.0004C3 17.7716 3 19.6572 4.17157 20.8288C5.34315 22.0004 7.22876 22.0004 11 22.0004H13C16.7712 22.0004 18.6569 22.0004 19.8284 20.8288C21 19.6572 21 17.7716 21 14.0004V10.0004C21 6.22913 21 4.34351 19.8284 3.17194C18.6569 2.00037 16.7712 2.00037 13 2.00037H11C7.22876 2.00037 5.34315 2.00037 4.17157 3.17194ZM8 9.25037C7.58579 9.25037 7.25 9.58615 7.25 10.0004C7.25 10.4146 7.58579 10.7504 8 10.7504H16C16.4142 10.7504 16.75 10.4146 16.75 10.0004C16.75 9.58615 16.4142 9.25037 16 9.25037H8ZM8 13.2504C7.58579 13.2504 7.25 13.5862 7.25 14.0004C7.25 14.4146 7.58579 14.7504 8 14.7504H13C13.4142 14.7504 13.75 14.4146 13.75 14.0004C13.75 13.5862 13.4142 13.2504 13 13.2504H8Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDocument;