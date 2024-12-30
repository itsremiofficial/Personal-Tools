import { FC } from 'react';
import { IconProps } from "../../types";

const IconBook1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.7402V4.67019C22 3.47019 21.02 2.58019 19.83 2.68019H19.77C17.67 2.86019 14.48 3.93019 12.7 5.05019L12.53 5.16019C12.24 5.34019 11.76 5.34019 11.47 5.16019L11.22 5.01019C9.44 3.90019 6.26 2.84019 4.16 2.67019C2.97 2.57019 2 3.47019 2 4.66019V16.7402C2 17.7002 2.78 18.6002 3.74 18.7202L4.03 18.7602C6.2 19.0502 9.55 20.1502 11.47 21.2002L11.51 21.2202C11.78 21.3702 12.21 21.3702 12.47 21.2202C14.39 20.1602 17.75 19.0502 19.93 18.7602L20.26 18.7202C21.22 18.6002 22 17.7002 22 16.7402Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 5.49023V20.4902" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.75 8.49023H5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.5 11.4902H5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M15 22H9C6 22 4 20 4 17V7C4 4 6 2 9 2H15C18 2 20 4 20 7V17C20 20 18 22 15 22Z" fill="currentColor" /><path d="M12.5991 18.1101C12.3791 18.1101 12.2091 18.0501 12.1091 18.0101C11.8891 17.9101 11.3891 17.5801 11.3891 16.6701V14.0001L9.08906 16.1101C8.78906 16.3901 8.30907 16.3701 8.02907 16.0601C7.74907 15.7501 7.76905 15.2801 8.07905 15.0001L11.3591 11.9901L8.07905 8.98012C7.76905 8.70012 7.74907 8.23012 8.02907 7.92012C8.30907 7.62012 8.78906 7.5901 9.08906 7.8701L11.3891 9.98012V7.32011C11.3891 6.42011 11.8891 6.09012 12.1091 5.98012C12.3191 5.88012 12.8991 5.7001 13.5991 6.2801L15.6591 8.00011C15.9591 8.25011 16.1391 8.62011 16.1491 9.00011C16.1591 9.38011 15.9991 9.76009 15.7091 10.0201L13.5791 11.9701L15.7091 13.9201C15.9991 14.1901 16.1591 14.5601 16.1491 14.9401C16.1391 15.3201 15.9591 15.6901 15.6591 15.9401L13.5991 17.6601C13.2191 18.0201 12.8691 18.1101 12.5991 18.1101ZM12.8991 13.4101V16.3301L14.5691 14.9401L12.8991 13.4101ZM12.8991 7.67012V10.5901L14.5691 9.0601L12.8991 7.67012Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBook1;