import { FC } from 'react';
import { IconProps } from "../../types";

const IconElement2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16.5904 7.41L6.31044 17.69C5.83044 18.17 5.01044 18.06 4.72044 17.45C4.20044 16.38 3.90044 15.17 3.90044 13.9C3.88044 8.38 9.48044 3.66 11.3804 2.21C11.7504 1.93 12.2504 1.93 12.6104 2.21C13.4804 2.87 15.1104 4.24 16.6404 6.04C16.9804 6.44 16.9604 7.04 16.5904 7.41Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.1 13.91C20.1 18.37 16.47 22 12 22C10.21 22 8.53996 21.42 7.18996 20.42C6.69996 20.06 6.65996 19.34 7.08996 18.91L17.16 8.84002C17.63 8.37002 18.42 8.47002 18.74 9.05002C19.56 10.56 20.11 12.2 20.1 13.91Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconElement2;