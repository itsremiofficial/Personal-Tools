import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconSidebarMinimalistic: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 11.0004C2 7.22913 2 5.34351 3.17157 4.17194C4.34315 3.00037 6.22876 3.00037 10 3.00037H14C17.7712 3.00037 19.6569 3.00037 20.8284 4.17194C22 5.34351 22 7.22913 22 11.0004V13.0004C22 16.7716 22 18.6572 20.8284 19.8288C19.6569 21.0004 17.7712 21.0004 14 21.0004H10C6.22876 21.0004 4.34315 21.0004 3.17157 19.8288C2 18.6572 2 16.7716 2 13.0004V11.0004Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M15 21.0004L15 3.00037" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M3.17157 4.17197C2 5.34354 2 7.22916 2 11.0004V13.0004C2 16.7716 2 18.6573 3.17157 19.8288C4.34315 21.0004 6.22876 21.0004 10 21.0004H14C14.0843 21.0004 14.9176 21.0004 15 21.0004L15 3.00043C14.9176 3.00041 14.0843 3.0004 14 3.0004H10C6.22876 3.0004 4.34315 3.0004 3.17157 4.17197Z" fill="currentColor" /><path d="M22 13.0004V11.0004C22 7.22913 22 5.34351 20.8284 4.17194C19.8541 3.19761 17.6359 3.03357 15 3.00596V20.9948C17.6359 20.9672 19.8541 20.8031 20.8284 19.8288C22 18.6572 22 16.7716 22 13.0004Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.17157 4.17194C2 5.34351 2 7.22913 2 11.0004V13.0004C2 16.7716 2 18.6572 3.17157 19.8288C4.34315 21.0004 6.22876 21.0004 10 21.0004H14C14.0843 21.0004 14.1676 21.0004 14.25 21.0004L14.25 3.00037C14.1676 3.00035 14.0843 3.00037 14 3.00037H10C6.22876 3.00037 4.34315 3.00037 3.17157 4.17194ZM15.75 3.00596L15.75 20.9948C18.3859 20.9672 19.8541 20.8031 20.8284 19.8288C22 18.6572 22 16.7716 22 13.0004V11.0004C22 7.22913 22 5.34351 20.8284 4.17194C19.8541 3.19761 18.3859 3.03357 15.75 3.00596Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSidebarMinimalistic;