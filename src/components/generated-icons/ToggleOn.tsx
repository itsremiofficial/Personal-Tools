import { FC } from 'react';
import { IconProps } from "@/types";

const IconToggleOn: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M13.3 16H15.7C17.7 16 18.5 15.2 18.5 13.2V10.8C18.5 8.8 17.7 8 15.7 8H13.3C11.3 8 10.5 8.8 10.5 10.8V13.2C10.5 15.2 11.3 16 13.3 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17 20H7C3 20 2 19 2 15V9C2 5 3 4 7 4H17C21 4 22 5 22 9V15C22 19 21 20 17 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.35 3.85986H16.65C20.75 3.85986 22 5.10986 22 9.20986V14.7899C22 18.8899 20.75 20.1399 16.65 20.1399H7.35C3.25 20.1399 2 18.8899 2 14.7899V9.20986C2 5.10986 3.25 3.85986 7.35 3.85986Z" fill="currentColor" /><path d="M13.2102 7.58008H15.4402C17.6902 7.58008 18.7402 8.63008 18.7402 10.8801V13.1101C18.7402 15.3601 17.6902 16.4101 15.4402 16.4101H13.2102C10.9602 16.4101 9.91016 15.3601 9.91016 13.1101V10.8801C9.91016 8.63008 10.9602 7.58008 13.2102 7.58008Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconToggleOn;