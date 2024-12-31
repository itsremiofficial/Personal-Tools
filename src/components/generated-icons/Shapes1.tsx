import { FC } from 'react';
import { IconProps } from "@/types";

const IconShapes1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9707 12.25V16.75C16.9707 20.5 15.4707 22 11.7207 22H7.2207C3.4707 22 1.9707 20.5 1.9707 16.75V12.25C1.9707 8.5 3.4707 7 7.2207 7H11.7207C15.4707 7 16.9707 8.5 16.9707 12.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M21.97 7.5C21.97 10.37 19.78 12.72 16.97 12.97V12.25C16.97 8.5 15.47 7 11.72 7H11C11.25 4.19 13.6 2 16.47 2C19.26 2 21.56 4.07 21.91 6.77C21.95 7 21.97 7.25 21.97 7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.75 7H11H7C4.24 7 2 9.24 2 12V17C2 19.76 4.24 22 7 22H12C14.76 22 17 19.76 17 17V13V12.25C17 9.35 14.65 7 11.75 7Z" fill="currentColor" /><path d="M16.4993 2C13.6293 2 11.2793 4.2 11.0293 7H11.7493C14.6493 7 16.9993 9.35 16.9993 12.25V12.97C19.7993 12.72 21.9993 10.36 21.9993 7.5C21.9993 4.46 19.5393 2 16.4993 2Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconShapes1;