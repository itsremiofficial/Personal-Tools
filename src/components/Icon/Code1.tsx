import { FC } from 'react';
import { IconProps } from "../../types";

const IconCode1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M6.89062 9C7.87063 9.49 8.71062 10.23 9.32062 11.15C9.67062 11.67 9.67062 12.34 9.32062 12.86C8.71062 13.77 7.87063 14.51 6.89062 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M13 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.2693 17.1899C19.2693 18.0999 17.9793 18.5999 16.6293 18.5899H16.5393C16.8393 17.9699 16.9993 17.2699 16.9993 16.5299C16.9993 13.7699 14.7593 11.5299 11.9993 11.5299C9.2393 11.5299 6.9993 13.7699 6.9993 16.5299C6.9993 17.2699 7.1593 17.9699 7.4593 18.5899H5.5393C0.859297 18.2599 0.859297 11.4499 5.5393 11.1199H5.5893C2.3793 2.1899 15.9193 -1.3801 17.4693 7.9999C21.7993 8.5499 23.5493 14.3199 20.2693 17.1899Z" fill="currentColor" /><path d="M12 11.53C9.24 11.53 7 13.77 7 16.53C7 17.27 7.16 17.97 7.46 18.59C7.54 18.77 7.63 18.94 7.73 19.1C8.59 20.55 10.18 21.53 12 21.53C13.82 21.53 15.41 20.55 16.27 19.1C16.37 18.94 16.46 18.77 16.54 18.59C16.84 17.97 17 17.27 17 16.53C17 13.77 14.76 11.53 12 11.53ZM13.5 18.14C13.35 18.29 13.16 18.36 12.97 18.36C12.78 18.36 12.59 18.29 12.44 18.14L11.91 17.61L11.36 18.16C11.21 18.31 11.02 18.38 10.83 18.38C10.64 18.38 10.45 18.31 10.3 18.16C10.01 17.87 10.01 17.39 10.3 17.1L10.85 16.55L10.32 16.02C10.03 15.73 10.03 15.25 10.32 14.96C10.61 14.67 11.09 14.67 11.38 14.96L11.91 15.49L12.41 14.99C12.7 14.7 13.18 14.7 13.47 14.99C13.76 15.28 13.76 15.76 13.47 16.05L12.97 16.55L13.5 17.08C13.79 17.38 13.79 17.85 13.5 18.14Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCode1;