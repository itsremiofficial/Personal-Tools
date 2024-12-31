import { FC } from 'react';
import { IconProps } from "@/types";

const IconOmegaCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17 16.5H13.9L15.52 14.71C16.32 13.82 16.76 12.69 16.76 11.53C16.76 10.33 16.26 9.18002 15.37 8.33002C14.48 7.48002 13.27 7 12 7C10.74 7 9.53 7.48002 8.63 8.33002C7.74 9.18002 7.23999 10.33 7.23999 11.53C7.23999 12.7 7.67998 13.83 8.47998 14.71L10.1 16.5H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M17 17.25H13.9C13.6 17.25 13.33 17.08 13.21 16.8C13.09 16.52 13.14 16.21 13.34 15.99L14.96 14.2C15.63 13.45 16.01 12.5 16.01 11.52C16.01 10.52 15.6 9.58 14.85 8.87C14.1 8.16 13.06 7.75 12 7.75C10.94 7.75 9.90002 8.16 9.15002 8.87C8.40002 9.58 7.98999 10.52 7.98999 11.52C7.98999 12.5 8.35998 13.45 9.03998 14.2L10.66 15.99C10.86 16.21 10.91 16.53 10.79 16.8C10.67 17.07 10.4 17.25 10.1 17.25H7C6.59 17.25 6.25 16.91 6.25 16.5C6.25 16.09 6.59 15.75 7 15.75H8.40997L7.91998 15.21C6.99998 14.19 6.48999 12.88 6.48999 11.52C6.48999 10.13 7.08 8.76003 8.12 7.78003C9.16 6.79003 10.54 6.25 12 6.25C13.46 6.25 14.84 6.79003 15.88 7.78003C16.91 8.76003 17.51 10.13 17.51 11.52C17.51 12.87 17 14.18 16.08 15.21L15.59 15.75H17C17.41 15.75 17.75 16.09 17.75 16.5C17.75 16.91 17.41 17.25 17 17.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconOmegaCircle;