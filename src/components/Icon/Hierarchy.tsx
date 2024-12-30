import { FC } from 'react';
import { IconProps } from "../../types";

const IconHierarchy: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.25 8.5C7.04493 8.5 8.5 7.04493 8.5 5.25C8.5 3.45507 7.04493 2 5.25 2C3.45507 2 2 3.45507 2 5.25C2 7.04493 3.45507 8.5 5.25 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 22C6.65685 22 8 20.6569 8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M5 9V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.12891 9C5.57891 10.75 7.17891 12.05 9.06891 12.04L12.4989 12.03C15.1189 12.02 17.3489 13.7 18.1689 16.04" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M12.3296 16.9999C12.1496 17.0599 11.8396 17.0599 11.6596 16.9999C10.0996 16.4699 6.59961 14.2399 6.59961 10.4599C6.59961 8.78993 7.93961 7.43994 9.59961 7.43994C10.5796 7.43994 11.4496 7.90993 11.9996 8.64993C12.5396 7.91993 13.4196 7.43994 14.3996 7.43994C16.0596 7.43994 17.3996 8.78993 17.3996 10.4599C17.3996 14.2399 13.8996 16.4699 12.3296 16.9999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconHierarchy;