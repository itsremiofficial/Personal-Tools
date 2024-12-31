import { FC } from 'react';
import { IconProps } from "@/types";

const IconLifebuoy: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.90039 4.93018L8.44039 8.46018" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.90039 19.07L8.44039 15.54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19.0498 19.07L15.5098 15.54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19.0498 4.93018L15.5098 8.46018" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.9707 12C21.9707 14.49 21.0607 16.77 19.5507 18.52C19.2207 18.9 18.8707 19.26 18.4907 19.57C16.7507 21.09 14.4707 22 11.9707 22C9.4807 22 7.2007 21.09 5.4507 19.58C5.0707 19.25 4.7207 18.9 4.3907 18.52C2.8807 16.77 1.9707 14.49 1.9707 12C1.9707 9.51 2.8807 7.23 4.4007 5.48C4.7207 5.1 5.0807 4.74 5.4607 4.42C7.2107 2.91 9.4807 2 11.9707 2C14.4707 2 16.7507 2.91 18.4907 4.43C18.8707 4.75 19.2307 5.1 19.5507 5.49C21.0607 7.24 21.9707 9.51 21.9707 12Z" fill="currentColor" /><path d="M15.6506 14.6199L19.5506 18.5199C19.2206 18.8999 18.8706 19.2599 18.4906 19.5699L14.5906 15.6699C13.8506 16.1899 12.9606 16.4999 12.0006 16.4999C11.0206 16.4999 10.1206 16.1799 9.38063 15.6499L5.45062 19.5799C5.07062 19.2499 4.72063 18.8999 4.39062 18.5199L8.33063 14.5899C7.81063 13.8499 7.50063 12.9599 7.50063 11.9999C7.50063 11.0399 7.81063 10.1499 8.33063 9.40992L4.40063 5.47992C4.72063 5.09992 5.08063 4.73992 5.46063 4.41992L9.38063 8.34992C10.1206 7.81992 11.0206 7.49992 12.0006 7.49992C12.9606 7.49992 13.8506 7.80992 14.5906 8.32992L18.4906 4.42992C18.8706 4.74992 19.2306 5.09992 19.5506 5.48992L15.6506 9.37992C16.1806 10.1199 16.5006 11.0199 16.5006 11.9999C16.5006 12.9799 16.1806 13.8799 15.6506 14.6199Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconLifebuoy;