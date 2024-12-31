import { FC } from 'react';
import { IconProps } from "@/types";

const IconRotateLeft: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9.11008 5.0799C9.98008 4.8199 10.9401 4.6499 12.0001 4.6499C16.7901 4.6499 20.6701 8.5299 20.6701 13.3199C20.6701 18.1099 16.7901 21.9899 12.0001 21.9899C7.21008 21.9899 3.33008 18.1099 3.33008 13.3199C3.33008 11.5399 3.87008 9.8799 4.79008 8.4999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.86914 5.32L10.7591 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.86914 5.31982L11.2391 7.77982" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.25 22H11.75C15.5 22 17 20.5 17 16.75V12.25C17 8.5 15.5 7 11.75 7H7.25C3.5 7 2 8.5 2 12.25V16.75C2 20.5 3.5 22 7.25 22Z" fill="currentColor" /><path d="M21.2504 10.5C20.8404 10.5 20.5004 10.16 20.5004 9.75C20.5004 6.79 18.4404 4.31 15.6704 3.66L15.9404 4.11C16.1504 4.47 16.0404 4.93 15.6804 5.14C15.3204 5.35 14.8604 5.24 14.6504 4.88L13.6004 3.13C13.4604 2.9 13.4604 2.61 13.5904 2.38C13.7304 2.15 13.9804 2 14.2504 2C18.5204 2 22.0004 5.48 22.0004 9.75C22.0004 10.16 21.6604 10.5 21.2504 10.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconRotateLeft;