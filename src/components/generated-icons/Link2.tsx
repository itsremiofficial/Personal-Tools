import { FC } from 'react';
import { IconProps } from "@/types";

const IconLink2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 12C13.5 15.18 10.93 17.75 7.75 17.75C4.57 17.75 2 15.18 2 12C2 8.82 4.57 6.25 7.75 6.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10 12C10 8.69 12.69 6 16 6C19.31 6 22 8.69 22 12C22 15.31 19.31 18 16 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.4101 18.5899C15.0101 18.5899 14.6801 18.2599 14.6801 17.8599C14.6801 17.4599 15.0101 17.1299 15.4101 17.1299C18.2301 17.1299 20.5301 14.8299 20.5301 12.0099C20.5301 9.18992 18.2301 6.88992 15.4101 6.88992C12.5901 6.88992 10.2901 9.18992 10.2901 12.0099C10.2901 12.4099 9.96008 12.7399 9.56008 12.7399C9.16008 12.7399 8.83008 12.4099 8.83008 12.0099C8.83008 8.37992 11.7801 5.41992 15.4201 5.41992C19.0601 5.41992 22.0001 8.36992 22.0001 11.9999C22.0001 15.6299 19.0501 18.5899 15.4101 18.5899Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22 12.0002C22 15.6402 19.05 18.5902 15.41 18.5902C14.16 18.5902 12.99 18.2402 12 17.6302C13.9 16.4802 15.17 14.3902 15.17 12.0002C15.17 9.61016 13.9 7.52016 12 6.37016C13 5.77016 14.17 5.41016 15.41 5.41016C19.05 5.41016 22 8.36016 22 12.0002Z" fill="currentColor" /><path d="M8.59 5.41016C8.99 5.41016 9.32 5.74016 9.32 6.14016C9.32 6.54016 8.99 6.87016 8.59 6.87016C5.77 6.87016 3.47 9.17016 3.47 11.9902C3.47 14.8102 5.77 17.1102 8.59 17.1102C11.41 17.1102 13.71 14.8102 13.71 11.9902C13.71 11.5902 14.04 11.2602 14.44 11.2602C14.84 11.2602 15.17 11.5902 15.17 11.9902C15.17 15.6202 12.22 18.5802 8.58 18.5802C4.94 18.5802 2 15.6302 2 12.0002C2 8.37016 4.95 5.41016 8.59 5.41016Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M15.17 12.0002C15.17 14.3902 13.9 16.4802 12 17.6302C11 18.2302 9.83 18.5902 8.59 18.5902C4.95 18.5902 2 15.6402 2 12.0002C2 8.36016 4.95 5.41016 8.59 5.41016C9.83 5.41016 11 5.77016 12 6.37016C13.9 7.52016 15.17 9.61016 15.17 12.0002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconLink2;