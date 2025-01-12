import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconBook: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M4.16992 18V7C4.16992 3 5.16992 2 9.16992 2H16.1699C20.1699 2 21.1699 3 21.1699 7V17C21.1699 17.14 21.1699 17.28 21.1599 17.42" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M7.01992 15H21.1699V18.5C21.1699 20.43 19.5999 22 17.6699 22H7.66992C5.73992 22 4.16992 20.43 4.16992 18.5V17.85C4.16992 16.28 5.44992 15 7.01992 15Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.66992 7H16.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.66992 10.5H13.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.1699 7V15H7.01992C5.44992 15 4.16992 16.28 4.16992 17.85V7C4.16992 3 5.16992 2 9.16992 2H16.1699C20.1699 2 21.1699 3 21.1699 7Z" fill="currentColor" /><path d="M21.1699 15V18.5C21.1699 20.43 19.5999 22 17.6699 22H7.66992C5.73992 22 4.16992 20.43 4.16992 18.5V17.85C4.16992 16.28 5.44992 15 7.01992 15H21.1699Z" fill="currentColor" /><path d="M16.6699 7.75H8.66992C8.25992 7.75 7.91992 7.41 7.91992 7C7.91992 6.59 8.25992 6.25 8.66992 6.25H16.6699C17.0799 6.25 17.4199 6.59 17.4199 7C17.4199 7.41 17.0799 7.75 16.6699 7.75Z" fill="currentColor" /><path d="M13.6699 11.25H8.66992C8.25992 11.25 7.91992 10.91 7.91992 10.5C7.91992 10.09 8.25992 9.75 8.66992 9.75H13.6699C14.0799 9.75 14.4199 10.09 14.4199 10.5C14.4199 10.91 14.0799 11.25 13.6699 11.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.1699 16V18.5C21.1699 20.43 19.5999 22 17.6699 22H7.66992C5.73992 22 4.16992 20.43 4.16992 18.5V17.85C4.16992 16.28 5.44992 15 7.01992 15H20.1699C20.7199 15 21.1699 15.45 21.1699 16Z" fill="currentColor" /><path d="M16.1699 2H9.16992C5.16992 2 4.16992 3 4.16992 7V14.58C4.92992 13.91 5.92992 13.5 7.01992 13.5H20.1699C20.7199 13.5 21.1699 13.05 21.1699 12.5V7C21.1699 3 20.1699 2 16.1699 2ZM13.6699 10.75H8.66992C8.25992 10.75 7.91992 10.41 7.91992 10C7.91992 9.59 8.25992 9.25 8.66992 9.25H13.6699C14.0799 9.25 14.4199 9.59 14.4199 10C14.4199 10.41 14.0799 10.75 13.6699 10.75ZM16.6699 7.25H8.66992C8.25992 7.25 7.91992 6.91 7.91992 6.5C7.91992 6.09 8.25992 5.75 8.66992 5.75H16.6699C17.0799 5.75 17.4199 6.09 17.4199 6.5C17.4199 6.91 17.0799 7.25 16.6699 7.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBook;