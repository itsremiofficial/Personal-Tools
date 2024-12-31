import { FC } from 'react';
import { IconProps } from "@/types";

const IconOmegaSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17 16.75H13.9L15.52 14.96C16.32 14.07 16.76 12.94 16.76 11.78C16.76 10.58 16.26 9.43002 15.37 8.58002C14.48 7.73002 13.27 7.25 12 7.25C10.74 7.25 9.53 7.73002 8.63 8.58002C7.74 9.43002 7.23999 10.58 7.23999 11.78C7.23999 12.95 7.67998 14.08 8.47998 14.96L10.1 16.75H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M17 17.5H13.9C13.6 17.5 13.33 17.33 13.21 17.05C13.09 16.77 13.14 16.46 13.34 16.24L14.96 14.45C15.63 13.7 16.01 12.75 16.01 11.77C16.01 10.77 15.6 9.83 14.85 9.12C14.1 8.41 13.06 8 12 8C10.94 8 9.90002 8.41 9.15002 9.12C8.40002 9.83 7.98999 10.77 7.98999 11.77C7.98999 12.75 8.35998 13.7 9.03998 14.45L10.66 16.24C10.86 16.46 10.91 16.78 10.79 17.05C10.67 17.32 10.4 17.5 10.1 17.5H7C6.59 17.5 6.25 17.16 6.25 16.75C6.25 16.34 6.59 16 7 16H8.40997L7.91998 15.46C6.99998 14.44 6.48999 13.13 6.48999 11.77C6.48999 10.38 7.08 9.01003 8.12 8.03003C9.16 7.04003 10.54 6.5 12 6.5C13.46 6.5 14.84 7.04003 15.88 8.03003C16.91 9.01003 17.51 10.38 17.51 11.77C17.51 13.12 17 14.43 16.08 15.46L15.59 16H17C17.41 16 17.75 16.34 17.75 16.75C17.75 17.16 17.41 17.5 17 17.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconOmegaSquare;