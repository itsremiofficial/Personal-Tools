import { FC } from 'react';
import { IconProps } from "@/types";

const IconBook1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.7402V4.67019C22 3.47019 21.02 2.58019 19.83 2.68019H19.77C17.67 2.86019 14.48 3.93019 12.7 5.05019L12.53 5.16019C12.24 5.34019 11.76 5.34019 11.47 5.16019L11.22 5.01019C9.44 3.90019 6.26 2.84019 4.16 2.67019C2.97 2.57019 2 3.47019 2 4.66019V16.7402C2 17.7002 2.78 18.6002 3.74 18.7202L4.03 18.7602C6.2 19.0502 9.55 20.1502 11.47 21.2002L11.51 21.2202C11.78 21.3702 12.21 21.3702 12.47 21.2202C14.39 20.1602 17.75 19.0502 19.93 18.7602L20.26 18.7202C21.22 18.6002 22 17.7002 22 16.7402Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 5.49023V20.4902" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.75 8.49023H5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.5 11.4902H5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.5 7V15H6.35C4.78 15 3.5 16.28 3.5 17.85V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7Z" fill="currentColor" /><path d="M20.5 15V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15H20.5Z" fill="currentColor" /><path d="M16 7.75H8C7.59 7.75 7.25 7.41 7.25 7C7.25 6.59 7.59 6.25 8 6.25H16C16.41 6.25 16.75 6.59 16.75 7C16.75 7.41 16.41 7.75 16 7.75Z" fill="currentColor" /><path d="M13 11.25H8C7.59 11.25 7.25 10.91 7.25 10.5C7.25 10.09 7.59 9.75 8 9.75H13C13.41 9.75 13.75 10.09 13.75 10.5C13.75 10.91 13.41 11.25 13 11.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBook1;