import { FC } from 'react';
import { IconProps } from "../../types";

const IconLanguageCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M16.9897 8.96045H7.00977" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 7.28027V8.96027" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5 8.94043C14.5 13.2404 11.14 16.7204 7 16.7204" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.9992 16.72C15.1992 16.72 13.5992 15.76 12.4492 14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.2107 6.36001C18.1707 4.26001 16.1607 2.71001 13.8307 2.20001C11.3907 1.66001 8.8907 2.24001 6.9807 3.78001C5.0607 5.31001 3.9707 7.60001 3.9707 10.05C3.9707 12.64 5.5207 15.35 7.8607 16.92V17.75C7.8507 18.03 7.8407 18.46 8.1807 18.81C8.5307 19.17 9.0507 19.21 9.4607 19.21H14.5907C15.1307 19.21 15.5407 19.06 15.8207 18.78C16.2007 18.39 16.1907 17.89 16.1807 17.62V16.92C19.2807 14.83 21.2307 10.42 19.2107 6.36001Z" fill="currentColor" /><path d="M15.2592 21.9999C15.1992 21.9999 15.1292 21.9899 15.0692 21.9699C13.0592 21.3999 10.9492 21.3999 8.93918 21.9699C8.56918 22.0699 8.17918 21.8599 8.07918 21.4899C7.96918 21.1199 8.18918 20.7299 8.55918 20.6299C10.8192 19.9899 13.1992 19.9899 15.4592 20.6299C15.8292 20.7399 16.0492 21.1199 15.9392 21.4899C15.8392 21.7999 15.5592 21.9999 15.2592 21.9999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconLanguageCircle;