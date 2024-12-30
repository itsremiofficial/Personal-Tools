import { FC } from 'react';
import { IconProps } from "../../types";

const IconWeight1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1797 18C19.5797 18 20.1797 16.65 20.1797 15V9C20.1797 7.35 19.5797 6 17.1797 6C14.7797 6 14.1797 7.35 14.1797 9V15C14.1797 16.65 14.7797 18 17.1797 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.82031 18C4.42031 18 3.82031 16.65 3.82031 15V9C3.82031 7.35 4.42031 6 6.82031 6C9.22031 6 9.82031 7.35 9.82031 9V15C9.82031 16.65 9.22031 18 6.82031 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.82031 12H14.1803" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22.5 14.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M1.5 14.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M8 22H16C19 22 21 20 21 17V7C21 4 19 2 16 2H8C5 2 3 4 3 7V17C3 20 5 22 8 22Z" fill="currentColor" /><path d="M17.5 7.99997C14.37 5.20997 9.63998 5.20997 6.49998 7.99997C6.35998 8.12997 6.32998 8.32997 6.42998 8.47997L8.60998 11.98C8.66998 12.07 8.76998 12.14 8.86998 12.15C8.97998 12.17 9.08998 12.13 9.16998 12.06C10.78 10.63 13.2 10.63 14.81 12.06C14.88 12.12 14.97 12.15 15.06 12.15C15.08 12.15 15.1 12.15 15.11 12.15C15.22 12.13 15.32 12.07 15.37 11.98L17.55 8.47997C17.67 8.32997 17.64 8.12997 17.5 7.99997Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconWeight1;