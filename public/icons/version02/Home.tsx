import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconHome: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7402 2.82003L3.81019 8.37002C3.03019 8.99002 2.53019 10.3 2.70019 11.28L4.03019 19.24C4.27019 20.66 5.63018 21.81 7.07018 21.81H18.2702C19.7002 21.81 21.0702 20.65 21.3102 19.24L22.6402 11.28C22.8002 10.3 22.3002 8.99002 21.5302 8.37002L14.6002 2.83004C13.5302 1.97004 11.8002 1.97003 10.7402 2.82003Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 15.5C14.0506 15.5 15.1699 14.3807 15.1699 13C15.1699 11.6193 14.0506 10.5 12.6699 10.5C11.2892 10.5 10.1699 11.6193 10.1699 13C10.1699 14.3807 11.2892 15.5 12.6699 15.5Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.7402 2.81998L3.81019 8.36997C3.03019 8.98997 2.53019 10.3 2.70019 11.28L4.03019 19.24C4.27019 20.66 5.63018 21.81 7.07018 21.81H18.2702C19.7002 21.81 21.0702 20.65 21.3102 19.24L22.6402 11.28C22.8002 10.3 22.3002 8.98997 21.5302 8.36997L14.6002 2.82996C13.5302 1.96996 11.8002 1.96998 10.7402 2.81998Z" fill="currentColor" /><path d="M12.6699 15.5C14.0506 15.5 15.1699 14.3807 15.1699 13C15.1699 11.6193 14.0506 10.5 12.6699 10.5C11.2892 10.5 10.1699 11.6193 10.1699 13C10.1699 14.3807 11.2892 15.5 12.6699 15.5Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.5302 8.37L14.6002 2.83C13.5302 1.97 11.8002 1.97 10.7402 2.82L3.81019 8.37C3.03019 8.99 2.53019 10.3 2.70019 11.28L4.03019 19.24C4.27019 20.66 5.63019 21.81 7.07019 21.81H18.2702C19.7002 21.81 21.0702 20.65 21.3102 19.24L22.6402 11.28C22.8002 10.3 22.3002 8.99 21.5302 8.37ZM12.6702 15.5C11.2902 15.5 10.1702 14.38 10.1702 13C10.1702 11.62 11.2902 10.5 12.6702 10.5C14.0502 10.5 15.1702 11.62 15.1702 13C15.1702 14.38 14.0502 15.5 12.6702 15.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconHome;