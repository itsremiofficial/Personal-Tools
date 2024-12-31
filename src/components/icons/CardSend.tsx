import { FC } from 'react';
import { IconProps } from "../../types";

const IconCardSend: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 8.5H14.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6 16.5H8" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.5 16.5H14.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 14.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M20 9.5V3.5L22 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 3.5L18 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.97 8H18.03C16.76 8 16 7.24 16 5.97V3.03C16 1.76 16.76 1 18.03 1H20.97C22.24 1 23 1.76 23 3.03V5.97C23 7.24 22.24 8 20.97 8ZM21.19 4.69C21.07 4.57 20.91 4.51 20.75 4.51C20.59 4.51 20.43 4.57 20.31 4.69L20.13 4.87V2.63C20.13 2.28 19.85 2 19.5 2C19.15 2 18.87 2.28 18.87 2.63V4.87L18.69 4.69C18.45 4.45 18.05 4.45 17.81 4.69C17.57 4.93 17.57 5.33 17.81 5.57L19.06 6.82C19.11 6.87 19.18 6.91 19.25 6.94C19.27 6.95 19.29 6.95 19.31 6.96C19.36 6.98 19.41 6.99 19.47 6.99C19.49 6.99 19.51 6.99 19.53 6.99C19.6 6.99 19.66 6.98 19.73 6.95C19.74 6.95 19.74 6.95 19.75 6.95C19.82 6.92 19.88 6.88 19.93 6.83C19.94 6.82 19.94 6.82 19.95 6.82L21.2 5.57C21.44 5.33 21.44 4.93 21.19 4.69Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22 7.7699V8.9999H2V7.5399C2 5.2499 3.86 3.3999 6.15 3.3999H16V5.9699C16 7.2399 16.76 7.9999 18.03 7.9999H20.97C21.37 7.9999 21.71 7.9299 22 7.7699Z" fill="currentColor" /><path d="M2 9V16.46C2 18.75 3.86 20.6 6.15 20.6H17.85C20.14 20.6 22 18.75 22 16.46V9H2ZM8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25ZM14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCardSend;