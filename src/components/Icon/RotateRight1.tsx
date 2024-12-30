import { FC } from 'react';
import { IconProps } from "../../types";

const IconRouteSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17.3509 9.04979L15.0109 16.5898C14.4509 18.3798 11.9409 18.4098 11.3509 16.6298L10.651 14.5598C10.461 13.9898 10.0109 13.5298 9.44095 13.3498L7.36095 12.6498C5.59095 12.0598 5.62095 9.5298 7.41095 8.9898L14.951 6.63979C16.431 6.18979 17.8209 7.57979 17.3509 9.04979Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.75 22H12.25C8.5 22 7 20.5 7 16.75V12.25C7 8.5 8.5 7 12.25 7H16.75C20.5 7 22 8.5 22 12.25V16.75C22 20.5 20.5 22 16.75 22Z" fill="currentColor" /><path d="M2.75 10.5C3.16 10.5 3.5 10.16 3.5 9.75C3.5 6.79 5.56 4.31 8.33 3.66L8.06 4.11C7.85 4.47 7.96 4.93 8.32 5.14C8.68 5.35 9.14 5.24 9.35 4.88L10.4 3.13C10.54 2.9 10.54 2.61 10.41 2.38C10.27 2.15 10.02 2 9.75 2C5.48 2 2 5.48 2 9.75C2 10.16 2.34 10.5 2.75 10.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconRouteSquare;