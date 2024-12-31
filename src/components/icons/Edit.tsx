import { FC } from 'react';
import { IconProps } from "../../types";

const IconEdit: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.0399 3.01976L8.15988 10.8998C7.85988 11.1998 7.55988 11.7898 7.49988 12.2198L7.06988 15.2298C6.90988 16.3198 7.67988 17.0798 8.76988 16.9298L11.7799 16.4998C12.1999 16.4398 12.7899 16.1398 13.0999 15.8398L20.9799 7.95976C22.3399 6.59976 22.9799 5.01976 20.9799 3.01976C18.9799 1.01976 17.3999 1.65976 16.0399 3.01976Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.9102 4.1499C15.5802 6.5399 17.4502 8.4099 19.8502 9.0899" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.3198 10H4.68977C3.20977 10 2.00977 8.79001 2.00977 7.32001V4.69001C2.00977 3.21001 3.21977 2.01001 4.68977 2.01001H19.3198C20.7998 2.01001 21.9998 3.22001 21.9998 4.69001V7.32001C21.9998 8.79001 20.7898 10 19.3198 10Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M19.3198 22H4.68977C3.20977 22 2.00977 20.79 2.00977 19.32V16.69C2.00977 15.21 3.21977 14.01 4.68977 14.01H19.3198C20.7998 14.01 21.9998 15.22 21.9998 16.69V19.32C21.9998 20.79 20.7898 22 19.3198 22Z" fill="currentColor" /><path d="M6 7.75C5.59 7.75 5.25 7.41 5.25 7V5C5.25 4.59 5.59 4.25 6 4.25C6.41 4.25 6.75 4.59 6.75 5V7C6.75 7.41 6.41 7.75 6 7.75Z" fill="currentColor" /><path d="M10 7.75C9.59 7.75 9.25 7.41 9.25 7V5C9.25 4.59 9.59 4.25 10 4.25C10.41 4.25 10.75 4.59 10.75 5V7C10.75 7.41 10.41 7.75 10 7.75Z" fill="currentColor" /><path d="M6 19.75C5.59 19.75 5.25 19.41 5.25 19V17C5.25 16.59 5.59 16.25 6 16.25C6.41 16.25 6.75 16.59 6.75 17V19C6.75 19.41 6.41 19.75 6 19.75Z" fill="currentColor" /><path d="M10 19.75C9.59 19.75 9.25 19.41 9.25 19V17C9.25 16.59 9.59 16.25 10 16.25C10.41 16.25 10.75 16.59 10.75 17V19C10.75 19.41 10.41 19.75 10 19.75Z" fill="currentColor" /><path d="M18 6.75H14C13.59 6.75 13.25 6.41 13.25 6C13.25 5.59 13.59 5.25 14 5.25H18C18.41 5.25 18.75 5.59 18.75 6C18.75 6.41 18.41 6.75 18 6.75Z" fill="currentColor" /><path d="M18 18.75H14C13.59 18.75 13.25 18.41 13.25 18C13.25 17.59 13.59 17.25 14 17.25H18C18.41 17.25 18.75 17.59 18.75 18C18.75 18.41 18.41 18.75 18 18.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconEdit;