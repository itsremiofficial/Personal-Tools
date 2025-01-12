import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconSiderbar: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 11.0004C2 7.22913 2 5.34351 3.17157 4.17194C4.34315 3.00037 6.22876 3.00037 10 3.00037H14C17.7712 3.00037 19.6569 3.00037 20.8284 4.17194C22 5.34351 22 7.22913 22 11.0004V13.0004C22 16.7716 22 18.6572 20.8284 19.8288C19.6569 21.0004 17.7712 21.0004 14 21.0004H10C6.22876 21.0004 4.34315 21.0004 3.17157 19.8288C2 18.6572 2 16.7716 2 13.0004V11.0004Z" stroke="currentColor" strokeWidth={width} /><path d="M5.5 10.0004H11.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M6.5 14.0004H10.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M15 21.0004L15 3.00037" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M3.17157 4.17185C2 5.34342 2 7.22904 2 11.0003V13.0003C2 16.7715 2 18.6571 3.17157 19.8287C4.34315 21.0003 6.22876 21.0003 10 21.0003H14C14.0843 21.0003 14.9176 21.0003 15 21.0003L15 3.00031C14.9176 3.00029 14.0843 3.00028 14 3.00028H10C6.22876 3.00028 4.34315 3.00028 3.17157 4.17185Z" fill="currentColor" /><path d="M5.5 9.25037C5.08579 9.25037 4.75 9.58615 4.75 10.0004C4.75 10.4146 5.08579 10.7504 5.5 10.7504H11.5C11.9142 10.7504 12.25 10.4146 12.25 10.0004C12.25 9.58615 11.9142 9.25037 11.5 9.25037H5.5Z" fill="currentColor" /><path d="M6.5 13.2504C6.08579 13.2504 5.75 13.5862 5.75 14.0004C5.75 14.4146 6.08579 14.7504 6.5 14.7504H10.5C10.9142 14.7504 11.25 14.4146 11.25 14.0004C11.25 13.5862 10.9142 13.2504 10.5 13.2504H6.5Z" fill="currentColor" /><path d="M22 13.0004V11.0004C22 7.22913 22 5.34351 20.8284 4.17194C19.8541 3.19761 17.6359 3.03357 15 3.00596V20.9948C17.6359 20.9672 19.8541 20.8031 20.8284 19.8288C22 18.6572 22 16.7716 22 13.0004Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.0004V13.0004C22 16.7716 22 18.6572 20.8284 19.8288C19.8541 20.8031 18.3859 20.9672 15.75 20.9948V3.00596C18.3859 3.03357 19.8541 3.19761 20.8284 4.17194C22 5.34351 22 7.22913 22 11.0004Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M10 3.00037H14H14.25L14.25 21.0004H14H10C6.22876 21.0004 4.34315 21.0004 3.17157 19.8288C2 18.6572 2 16.7716 2 13.0004V11.0004C2 7.22913 2 5.34351 3.17157 4.17194C4.34315 3.00037 6.22876 3.00037 10 3.00037ZM4.75 10.0004C4.75 9.58615 5.08579 9.25037 5.5 9.25037H11.5C11.9142 9.25037 12.25 9.58615 12.25 10.0004C12.25 10.4146 11.9142 10.7504 11.5 10.7504H5.5C5.08579 10.7504 4.75 10.4146 4.75 10.0004ZM5.75 14.0004C5.75 13.5862 6.08579 13.2504 6.5 13.2504H10.5C10.9142 13.2504 11.25 13.5862 11.25 14.0004C11.25 14.4146 10.9142 14.7504 10.5 14.7504H6.5C6.08579 14.7504 5.75 14.4146 5.75 14.0004Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSiderbar;