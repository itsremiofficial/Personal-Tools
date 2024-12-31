import { FC } from 'react';
import { IconProps } from "../../types";

const IconShapes1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9707 12.25V16.75C16.9707 20.5 15.4707 22 11.7207 22H7.2207C3.4707 22 1.9707 20.5 1.9707 16.75V12.25C1.9707 8.5 3.4707 7 7.2207 7H11.7207C15.4707 7 16.9707 8.5 16.9707 12.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M21.97 7.5C21.97 10.37 19.78 12.72 16.97 12.97V12.25C16.97 8.5 15.47 7 11.72 7H11C11.25 4.19 13.6 2 16.47 2C19.26 2 21.56 4.07 21.91 6.77C21.95 7 21.97 7.25 21.97 7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" fill="currentColor" /><g opacity={duotone ? "0.4" : "1"}><path opacity={duotone ? "0.4" : "1"} d="M10 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H10C10.41 11.25 10.75 11.59 10.75 12C10.75 12.41 10.41 12.75 10 12.75Z" fill="currentColor" /></g><g opacity={duotone ? "0.4" : "1"}><path opacity={duotone ? "0.4" : "1"} d="M22 12.75H14C13.59 12.75 13.25 12.41 13.25 12C13.25 11.59 13.59 11.25 14 11.25H22C22.41 11.25 22.75 11.59 22.75 12C22.75 12.41 22.41 12.75 22 12.75Z" fill="currentColor" /></g></svg> 
      )}
    </>
  );
};

export default IconShapes1;