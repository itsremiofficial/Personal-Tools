import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const Icon3dcube: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5899 2.26L20.0999 5.77C20.8599 6.18 20.8599 7.35 20.0999 7.76L13.5899 11.27C13.0099 11.58 12.3299 11.58 11.7499 11.27L5.23992 7.76C4.47992 7.35 4.47992 6.18 5.23992 5.77L11.7499 2.26C12.3299 1.95 13.0099 1.95 13.5899 2.26Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.27992 10.13L10.3299 13.16C11.0799 13.54 11.5599 14.31 11.5599 15.15V20.87C11.5599 21.7 10.6899 22.23 9.94992 21.86L3.89992 18.83C3.14992 18.45 2.66992 17.68 2.66992 16.84V11.12C2.66992 10.29 3.53992 9.76 4.27992 10.13Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M21.0603 10.13L15.0103 13.16C14.2603 13.54 13.7803 14.31 13.7803 15.15V20.87C13.7803 21.7 14.6503 22.23 15.3903 21.86L21.4403 18.83C22.1903 18.45 22.6703 17.68 22.6703 16.84V11.12C22.6703 10.29 21.8003 9.76 21.0603 10.13Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9996 5.68L13.7296 2.3C13.0696 1.94 12.2696 1.94 11.6096 2.3L5.33961 5.68C4.87961 5.93 4.59961 6.41 4.59961 6.96C4.59961 7.5 4.87961 7.99 5.33961 8.24L11.6096 11.62C11.9396 11.8 12.3096 11.89 12.6696 11.89C13.0296 11.89 13.3996 11.8 13.7296 11.62L19.9996 8.24C20.4596 7.99 20.7396 7.51 20.7396 6.96C20.7396 6.41 20.4596 5.93 19.9996 5.68Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M10.5799 12.79L4.73992 9.87C4.28992 9.65 3.76992 9.67 3.34992 9.93C2.91992 10.2 2.66992 10.65 2.66992 11.15V16.66C2.66992 17.61 3.19992 18.47 4.04992 18.9L9.87992 21.82C10.0799 21.92 10.2999 21.97 10.5199 21.97C10.7799 21.97 11.0399 21.9 11.2699 21.76C11.6999 21.5 11.9499 21.04 11.9499 20.54V15.03C11.9599 14.07 11.4299 13.21 10.5799 12.79Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.9896 9.93C21.5596 9.67 21.0396 9.64 20.5996 9.87L14.7696 12.79C13.9196 13.22 13.3896 14.07 13.3896 15.03V20.54C13.3896 21.04 13.6396 21.5 14.0696 21.76C14.2996 21.9 14.5596 21.97 14.8196 21.97C15.0396 21.97 15.2596 21.92 15.4596 21.82L21.2896 18.9C22.1396 18.47 22.6696 17.62 22.6696 16.66V11.15C22.6696 10.65 22.4196 10.2 21.9896 9.93Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9996 5.68L13.7296 2.3C13.0696 1.94 12.2696 1.94 11.6096 2.3L5.33961 5.68C4.87961 5.93 4.59961 6.41 4.59961 6.96C4.59961 7.5 4.87961 7.99 5.33961 8.24L11.6096 11.62C11.9396 11.8 12.3096 11.89 12.6696 11.89C13.0296 11.89 13.3996 11.8 13.7296 11.62L19.9996 8.24C20.4596 7.99 20.7396 7.51 20.7396 6.96C20.7396 6.41 20.4596 5.93 19.9996 5.68Z" fill="currentColor" /><path d="M10.5799 12.79L4.73992 9.87C4.28992 9.65 3.76992 9.67 3.34992 9.93C2.91992 10.2 2.66992 10.65 2.66992 11.15V16.66C2.66992 17.61 3.19992 18.47 4.04992 18.9L9.87992 21.82C10.0799 21.92 10.2999 21.97 10.5199 21.97C10.7799 21.97 11.0399 21.9 11.2699 21.76C11.6999 21.5 11.9499 21.04 11.9499 20.54V15.03C11.9599 14.07 11.4299 13.21 10.5799 12.79Z" fill="currentColor" /><path d="M21.9896 9.93C21.5596 9.67 21.0396 9.64 20.5996 9.87L14.7696 12.79C13.9196 13.22 13.3896 14.07 13.3896 15.03V20.54C13.3896 21.04 13.6396 21.5 14.0696 21.76C14.2996 21.9 14.5596 21.97 14.8196 21.97C15.0396 21.97 15.2596 21.92 15.4596 21.82L21.2896 18.9C22.1396 18.47 22.6696 17.62 22.6696 16.66V11.15C22.6696 10.65 22.4196 10.2 21.9896 9.93Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default Icon3dcube;