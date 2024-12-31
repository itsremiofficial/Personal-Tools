import { FC } from 'react';
import { IconProps } from "../../types";

const IconToggleOn: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M13.3 16H15.7C17.7 16 18.5 15.2 18.5 13.2V10.8C18.5 8.8 17.7 8 15.7 8H13.3C11.3 8 10.5 8.8 10.5 10.8V13.2C10.5 15.2 11.3 16 13.3 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17 20H7C3 20 2 19 2 15V9C2 5 3 4 7 4H17C21 4 22 5 22 9V15C22 19 21 20 17 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.65 3.85986H7.35C3.25 3.85986 2 5.10986 2 9.20986V14.7899C2 18.8899 3.25 20.1399 7.35 20.1399H16.65C20.75 20.1399 22 18.8899 22 14.7899V9.20986C22 5.10986 20.75 3.85986 16.65 3.85986Z" fill="currentColor" /><path d="M10.7898 7.58008H8.55977C6.30977 7.58008 5.25977 8.63008 5.25977 10.8801V13.1101C5.25977 15.3601 6.30977 16.4101 8.55977 16.4101H10.7898C13.0398 16.4101 14.0898 15.3601 14.0898 13.1101V10.8801C14.0898 8.63008 13.0398 7.58008 10.7898 7.58008Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconToggleOn;