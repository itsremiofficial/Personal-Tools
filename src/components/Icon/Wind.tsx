import { FC } from 'react';
import { IconProps } from "../../types";

const IconWind2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M2 13.1002L4.5 11.6002C6.04 10.6802 7.96 10.6802 9.5 11.6002C11.04 12.5202 12.96 12.5202 14.5 11.6002C16.04 10.6802 17.96 10.6802 19.5 11.6002L22 13.1002" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 3.8999L4.5 5.3999C6.04 6.3199 7.96 6.3199 9.5 5.3999C11.04 4.4799 12.96 4.4799 14.5 5.3999C16.04 6.3199 17.96 6.3199 19.5 5.3999L22 3.8999" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 20.1002L4.5 18.6002C6.04 17.6802 7.96 17.6802 9.5 18.6002C11.04 19.5202 12.96 19.5202 14.5 18.6002C16.04 17.6802 17.96 17.6802 19.5 18.6002L22 20.1002" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 22.75C16.16 22.75 14.25 20.84 14.25 18.5V18C14.25 17.59 14.59 17.25 15 17.25C15.41 17.25 15.75 17.59 15.75 18V18.5C15.75 20.02 16.98 21.25 18.5 21.25C20.02 21.25 21.25 20.02 21.25 18.5C21.25 16.98 20.02 15.75 18.5 15.75H2C1.59 15.75 1.25 15.41 1.25 15C1.25 14.59 1.59 14.25 2 14.25H18.5C20.84 14.25 22.75 16.16 22.75 18.5C22.75 20.84 20.84 22.75 18.5 22.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.5 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H18.5C20.02 11.25 21.25 10.02 21.25 8.5C21.25 6.98 20.02 5.75 18.5 5.75C16.98 5.75 15.75 6.98 15.75 8.5V9C15.75 9.41 15.41 9.75 15 9.75C14.59 9.75 14.25 9.41 14.25 9V8.5C14.25 6.16 16.16 4.25 18.5 4.25C20.84 4.25 22.75 6.16 22.75 8.5C22.75 10.84 20.84 12.75 18.5 12.75Z" fill="currentColor" /><path d="M9.31 9.75012H2C1.59 9.75012 1.25 9.41012 1.25 9.00012C1.25 8.59012 1.59 8.25012 2 8.25012H9.31C10.38 8.25012 11.25 7.38012 11.25 6.31012C11.25 5.24012 10.38 4.37012 9.31 4.37012C8.24 4.37012 7.37 5.24012 7.37 6.31012V6.69012C7.37 7.10012 7.03 7.44012 6.62 7.44012C6.21 7.44012 5.87 7.11012 5.87 6.69012V6.31012C5.87 4.41012 7.41 2.87012 9.31 2.87012C11.21 2.87012 12.75 4.41012 12.75 6.31012C12.75 8.21012 11.21 9.75012 9.31 9.75012Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconWind2;