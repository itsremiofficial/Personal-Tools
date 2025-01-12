import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconVolumeLow: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 10V14C4 16 5 17 7 17H8.43C8.8 17 9.17 17.11 9.49 17.3L12.41 19.13C14.93 20.71 17 19.56 17 16.59V7.41C17 4.43 14.93 3.29 12.41 4.87L9.49 6.7C9.17 6.89 8.8 7 8.43 7H7C5 7 4 8 4 10Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.4" : "1"} d="M20 8C21.78 10.37 21.78 13.63 20 16" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0003 16.75C19.8403 16.75 19.6903 16.7 19.5503 16.6C19.2203 16.35 19.1503 15.88 19.4003 15.55C20.9703 13.46 20.9703 10.54 19.4003 8.45C19.1503 8.12 19.2203 7.65 19.5503 7.4C19.8803 7.15 20.3503 7.22 20.6003 7.55C22.5703 10.17 22.5703 13.83 20.6003 16.45C20.4603 16.65 20.2303 16.75 20.0003 16.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.75 7.41V16.59C17.75 18.31 17.13 19.6 16.02 20.22C15.57 20.47 15.07 20.59 14.55 20.59C13.75 20.59 12.89 20.32 12.01 19.77L9.09 17.94C8.89 17.82 8.66 17.75 8.43 17.75H7.5V6.25H8.43C8.66 6.25 8.89 6.18 9.09 6.06L12.01 4.23C13.47 3.32 14.9 3.16 16.02 3.78C17.13 4.4 17.75 5.69 17.75 7.41Z" fill="currentColor" /><path d="M7.5 6.25V17.75H7C4.58 17.75 3.25 16.42 3.25 14V10C3.25 7.58 4.58 6.25 7 6.25H7.5Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0003 16.75C19.8403 16.75 19.6903 16.7 19.5503 16.6C19.2203 16.35 19.1503 15.88 19.4003 15.55C20.9703 13.46 20.9703 10.54 19.4003 8.45C19.1503 8.12 19.2203 7.65 19.5503 7.4C19.8803 7.15 20.3503 7.22 20.6003 7.55C22.5703 10.17 22.5703 13.83 20.6003 16.45C20.4603 16.65 20.2303 16.75 20.0003 16.75Z" fill="currentColor" /><path d="M16.02 3.78C14.9 3.16 13.47 3.32 12.01 4.23L9.09 6.06C8.89 6.18 8.66 6.25 8.43 6.25H7.5H7C4.58 6.25 3.25 7.58 3.25 10V14C3.25 16.42 4.58 17.75 7 17.75H7.5H8.43C8.66 17.75 8.89 17.82 9.09 17.94L12.01 19.77C12.89 20.32 13.75 20.59 14.55 20.59C15.07 20.59 15.57 20.47 16.02 20.22C17.13 19.6 17.75 18.31 17.75 16.59V7.41C17.75 5.69 17.13 4.4 16.02 3.78Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconVolumeLow;