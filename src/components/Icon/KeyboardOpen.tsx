import { FC } from 'react';
import { IconProps } from "../../types";

const IconKeySquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M16.2792 13.6096C15.1492 14.7396 13.5292 15.0896 12.0992 14.6396L9.50922 17.2196C9.32922 17.4096 8.95922 17.5296 8.68922 17.4896L7.48922 17.3296C7.08922 17.2796 6.72922 16.8996 6.66922 16.5096L6.50922 15.3096C6.46922 15.0496 6.59922 14.6796 6.77922 14.4896L9.35922 11.9096C8.91922 10.4796 9.25922 8.85965 10.3892 7.72965C12.0092 6.10965 14.6492 6.10965 16.2792 7.72965C17.8992 9.33965 17.8992 11.9796 16.2792 13.6096Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.4496 16.2799L9.59961 15.4199" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.3949 10.7002H13.4039" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.27 3.35C17.8 3.28 17.26 3.25 16.5 3.25H7.5C6.75 3.25 6.2 3.28 5.76 3.34C2.41 3.71 1.75 5.7 1.75 9V15C1.75 18.3 2.41 20.29 5.73 20.65C6.2 20.72 6.74 20.75 7.5 20.75H16.5C17.25 20.75 17.8 20.72 18.24 20.66C21.59 20.29 22.25 18.31 22.25 15V9C22.25 5.7 21.59 3.71 18.27 3.35Z" fill="currentColor" /><path d="M17 10.75H13.5C13.09 10.75 12.75 10.41 12.75 10C12.75 9.59 13.09 9.25 13.5 9.25H17C17.41 9.25 17.75 9.59 17.75 10C17.75 10.41 17.41 10.75 17 10.75Z" fill="currentColor" /><path d="M10.0996 11C9.54961 11 9.09961 10.55 9.09961 10C9.09961 9.45 9.53961 9 10.0996 9H10.1096C10.6596 9 11.1096 9.45 11.1096 10C11.1096 10.55 10.6596 11 10.0996 11Z" fill="currentColor" /><path d="M7.09961 11C6.54961 11 6.09961 10.55 6.09961 10C6.09961 9.45 6.53961 9 7.09961 9C7.64961 9 8.09961 9.45 8.09961 10C8.09961 10.55 7.65961 11 7.09961 11Z" fill="currentColor" /><path d="M16.9998 16.25H7.01977C6.60977 16.25 6.25977 15.91 6.25977 15.5C6.25977 15.09 6.58977 14.75 6.99977 14.75H16.9998C17.4098 14.75 17.7498 15.09 17.7498 15.5C17.7498 15.91 17.4098 16.25 16.9998 16.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconKeySquare;