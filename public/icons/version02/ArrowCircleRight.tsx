import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconArrowCircleRight: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.4102 15.53L14.9302 12L11.4102 8.46997" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path d="M11.4101 16.28C11.2201 16.28 11.0301 16.21 10.8801 16.06C10.5901 15.77 10.5901 15.29 10.8801 15L13.8801 12L10.8801 9.00003C10.5901 8.71003 10.5901 8.23003 10.8801 7.94003C11.1701 7.65003 11.6501 7.65003 11.9401 7.94003L15.4701 11.47C15.7601 11.76 15.7601 12.24 15.4701 12.53L11.9401 16.06C11.7901 16.21 11.6001 16.28 11.4101 16.28Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.15992 2 2.66992 6.49 2.66992 12C2.66992 17.51 7.15992 22 12.6699 22C18.1799 22 22.6699 17.51 22.6699 12C22.6699 6.49 18.1799 2 12.6699 2ZM15.4599 12.53L11.9299 16.06C11.7799 16.21 11.5899 16.28 11.3999 16.28C11.2099 16.28 11.0199 16.21 10.8699 16.06C10.5799 15.77 10.5799 15.29 10.8699 15L13.8699 12L10.8699 9C10.5799 8.71 10.5799 8.23 10.8699 7.94C11.1599 7.65 11.6399 7.65 11.9299 7.94L15.4599 11.47C15.7599 11.76 15.7599 12.24 15.4599 12.53Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconArrowCircleRight;