import { FC } from 'react';
import { IconProps } from "../../types";

const IconFormatSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20 6.95V17.05C19.84 17.02 19.67 17 19.5 17C18.12 17 17 18.12 17 19.5C17 19.67 17.02 19.84 17.05 20H6.95C6.98 19.84 7 19.67 7 19.5C7 18.12 5.88 17 4.5 17C4.33 17 4.16 17.02 4 17.05V6.95C4.16 6.98 4.33 7 4.5 7C5.88 7 7 5.88 7 4.5C7 4.33 6.98 4.16 6.95 4H17.05C17.02 4.16 17 4.33 17 4.5C17 5.88 18.12 7 19.5 7C19.67 7 19.84 6.98 20 6.95Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 4.5C7 5.88 5.88 7 4.5 7C4.33 7 4.16 6.98 4 6.95C2.86 6.72 2 5.71 2 4.5C2 3.12 3.12 2 4.5 2C5.71 2 6.72 2.86 6.95 4C6.98 4.16 7 4.33 7 4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 4.5C22 5.71 21.14 6.72 20 6.95C19.84 6.98 19.67 7 19.5 7C18.12 7 17 5.88 17 4.5C17 4.33 17.02 4.16 17.05 4C17.28 2.86 18.29 2 19.5 2C20.88 2 22 3.12 22 4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 19.5C7 19.67 6.98 19.84 6.95 20C6.72 21.14 5.71 22 4.5 22C3.12 22 2 20.88 2 19.5C2 18.29 2.86 17.28 4 17.05C4.16 17.02 4.33 17 4.5 17C5.88 17 7 18.12 7 19.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 19.5C22 20.88 20.88 22 19.5 22C18.29 22 17.28 21.14 17.05 20C17.02 19.84 17 19.67 17 19.5C17 18.12 18.12 17 19.5 17C19.67 17 19.84 17.02 20 17.05C21.14 17.28 22 18.29 22 19.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.74 9.44H2V6.42C2 3.98 3.98 2 6.42 2H8.75C10.38 2 10.89 2.53 11.54 3.4L12.94 5.26C13.25 5.67 13.29 5.73 13.87 5.73H16.66C19.03 5.72 21.05 7.28 21.74 9.44Z" fill="currentColor" /><path d="M21.99 10.8399C21.97 10.3499 21.89 9.88994 21.74 9.43994H2V16.6499C2 19.5999 4.4 21.9999 7.35 21.9999H16.65C19.6 21.9999 22 19.5999 22 16.6499V11.0699C22 10.9999 22 10.9099 21.99 10.8399ZM14.54 15.9699L12.39 17.8499C12.28 17.9499 12.14 17.9999 12 17.9999C11.86 17.9999 11.72 17.9499 11.61 17.8499L9.46 15.9699C8.78 15.3699 8.69 14.3499 9.25 13.6399C9.83 12.9199 10.85 12.7899 11.59 13.3399L11.99 13.6399L12.39 13.3399C13.13 12.7899 14.15 12.9199 14.73 13.6399C15.31 14.3499 15.22 15.3699 14.54 15.9699Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFormatSquare;