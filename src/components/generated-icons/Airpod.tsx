import { FC } from 'react';
import { IconProps } from "@/types";

const IconAirpod: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.62012 15.75V8.25C2.62012 7.48 2.65012 6.79 2.73012 6.18C3.10012 2.89 4.65012 2 8.88012 2H15.1301C19.3501 2 20.9101 2.89 21.2701 6.18C21.3601 6.79 21.3801 7.48 21.3801 8.25V15.75C21.3801 16.52 21.3501 17.21 21.2701 17.83C20.9001 21.11 19.3501 22 15.1201 22H8.88012C4.66012 22 3.10012 21.11 2.74012 17.83C2.65012 17.21 2.62012 16.52 2.62012 15.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M21.2299 8.91992H17.1299" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.86953 8.91992H2.76953" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.1301 8.92012C17.1301 10.0501 16.2101 10.9701 15.0801 10.9701H8.92012C8.36012 10.9701 7.84012 10.7401 7.47012 10.3601C7.10012 10.0001 6.87012 9.49012 6.87012 8.92012C6.87012 7.79012 7.79012 6.87012 8.92012 6.87012H15.0701C15.6301 6.87012 16.1501 7.10012 16.5201 7.48012C16.9001 7.85012 17.1301 8.36012 17.1301 8.92012Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.5 6.5V17.5C21.5 19.99 19.49 22 17 22H7C4.51 22 2.5 19.99 2.5 17.5V6.5C2.5 4.01 4.51 2 7 2H17C19.49 2 21.5 4.01 21.5 6.5Z" fill="currentColor" /><path d="M21.5 8.17V9.67H17.37C17.06 10.64 16.15 11.34 15.08 11.34H8.92C8.28 11.34 7.65 11.08 7.2 10.62C6.93 10.36 6.74 10.03 6.62 9.67H2.5V8.17H6.63C6.94 7.2 7.85 6.5 8.92 6.5H15.07C15.72 6.5 16.34 6.76 16.79 7.22C17.06 7.49 17.26 7.81 17.37 8.17H21.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconAirpod;