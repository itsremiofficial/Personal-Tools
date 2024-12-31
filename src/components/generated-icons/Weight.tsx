import { FC } from 'react';
import { IconProps } from "@/types";

const IconWeight: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 22H14C19 22 21 20 21 15V9C21 4 19 2 14 2H10C5 2 3 4 3 9V15C3 20 5 22 10 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.25 8.28992C14.26 5.62992 9.74 5.62992 6.75 8.28992L8.93 11.7899C10.68 10.2299 13.32 10.2299 15.07 11.7899L17.25 8.28992Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M8 22H16C19 22 21 20 21 17V7C21 4 19 2 16 2H8C5 2 3 4 3 7V17C3 20 5 22 8 22Z" fill="currentColor" /><path d="M17.5 7.99997C14.37 5.20997 9.63998 5.20997 6.49998 7.99997C6.35998 8.12997 6.32998 8.32997 6.42998 8.47997L8.60998 11.98C8.66998 12.07 8.76998 12.14 8.86998 12.15C8.97998 12.17 9.08998 12.13 9.16998 12.06C10.78 10.63 13.2 10.63 14.81 12.06C14.88 12.12 14.97 12.15 15.06 12.15C15.08 12.15 15.1 12.15 15.11 12.15C15.22 12.13 15.32 12.07 15.37 11.98L17.55 8.47997C17.67 8.32997 17.64 8.12997 17.5 7.99997Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconWeight;