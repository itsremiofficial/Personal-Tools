import { FC } from 'react';
import { IconProps } from "@/types";

const IconToggleOffCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 4H14C18.42 4 22 7.58 22 12C22 16.42 18.42 20 14 20H10C5.58 20 2 16.42 2 12C2 7.58 5.58 4 10 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10 16C12.2091 16 14 14.2091 14 12C14 9.79086 12.2091 8 10 8C7.79086 8 6 9.79086 6 12C6 14.2091 7.79086 16 10 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M13.86 3.85986H10.14C5.65 3.85986 2 7.50986 2 11.9999C2 16.4899 5.65 20.1399 10.14 20.1399H13.86C18.35 20.1399 22 16.4899 22 11.9999C22 7.50986 18.35 3.85986 13.86 3.85986Z" fill="currentColor" /><path d="M10.1407 16.4201C12.5818 16.4201 14.5607 14.4412 14.5607 12.0001C14.5607 9.55898 12.5818 7.58008 10.1407 7.58008C7.6996 7.58008 5.7207 9.55898 5.7207 12.0001C5.7207 14.4412 7.6996 16.4201 10.1407 16.4201Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconToggleOffCircle;