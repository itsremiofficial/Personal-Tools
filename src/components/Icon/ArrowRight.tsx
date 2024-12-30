import { FC } from 'react';
import { IconProps } from "../../types";

const IconArrowRight: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.4297 5.93018L20.4997 12.0002L14.4297 18.0702" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3.5 12H20.33" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.81 2H16.18C19.83 2 22 4.17 22 7.81V16.18C22 19.82 19.83 21.99 16.19 21.99H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2Z" fill="currentColor" /><path d="M5.47 11.4699L9.76 7.1799C10.05 6.8899 10.53 6.8899 10.82 7.1799C11.11 7.4699 11.11 7.9499 10.82 8.2399L7.81 11.2499H18C18.41 11.2499 18.75 11.5899 18.75 11.9999C18.75 12.4099 18.41 12.7499 18 12.7499H7.81L10.82 15.7599C11.11 16.0499 11.11 16.5299 10.82 16.8199C10.67 16.9699 10.48 17.0399 10.29 17.0399C10.1 17.0399 9.91 16.9699 9.76 16.8199L5.47 12.5299C5.33 12.3899 5.25 12.1999 5.25 11.9999C5.25 11.7999 5.33 11.6099 5.47 11.4699Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconArrowRight;