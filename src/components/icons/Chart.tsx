import { FC } from 'react';
import { IconProps } from "../../types";

const IconChart: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M3 22H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.59998 8.37988H4C3.45 8.37988 3 8.82988 3 9.37988V17.9999C3 18.5499 3.45 18.9999 4 18.9999H5.59998C6.14998 18.9999 6.59998 18.5499 6.59998 17.9999V9.37988C6.59998 8.82988 6.14998 8.37988 5.59998 8.37988Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.8002 5.18994H11.2002C10.6502 5.18994 10.2002 5.63994 10.2002 6.18994V17.9999C10.2002 18.5499 10.6502 18.9999 11.2002 18.9999H12.8002C13.3502 18.9999 13.8002 18.5499 13.8002 17.9999V6.18994C13.8002 5.63994 13.3502 5.18994 12.8002 5.18994Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.0004 2H18.4004C17.8504 2 17.4004 2.45 17.4004 3V18C17.4004 18.55 17.8504 19 18.4004 19H20.0004C20.5504 19 21.0004 18.55 21.0004 18V3C21.0004 2.45 20.5504 2 20.0004 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 7.7699V8.9999H2V7.5399C2 5.2499 3.86 3.3999 6.15 3.3999H16V5.9699C16 7.2399 16.76 7.9999 18.03 7.9999H20.97C21.37 7.9999 21.71 7.9299 22 7.7699Z" fill="currentColor" /><path d="M2 9V16.46C2 18.75 3.86 20.6 6.15 20.6H17.85C20.14 20.6 22 18.75 22 16.46V9H2ZM8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25ZM14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z" fill="currentColor" /><path d="M20.97 1H18.03C16.76 1 16 1.76 16 3.03V5.97C16 7.24 16.76 8 18.03 8H20.97C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1ZM21.63 3.45L19.26 6.22C19.17 6.33 19.03 6.4 18.89 6.4C18.88 6.4 18.88 6.4 18.87 6.4C18.73 6.4 18.6 6.35 18.5 6.25L17.4 5.17C17.2 4.97 17.2 4.64 17.4 4.44C17.6 4.24 17.93 4.23 18.13 4.44L18.83 5.13L20.83 2.79C21.02 2.57 21.34 2.55 21.56 2.73C21.79 2.91 21.81 3.24 21.63 3.45Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconChart;