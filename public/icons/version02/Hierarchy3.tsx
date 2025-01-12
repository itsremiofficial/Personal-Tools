import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconHierarchy3: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.66992 8C7.32678 8 8.66992 6.65685 8.66992 5C8.66992 3.34315 7.32678 2 5.66992 2C4.01307 2 2.66992 3.34315 2.66992 5C2.66992 6.65685 4.01307 8 5.66992 8Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M19.6699 15C21.3268 15 22.6699 13.6569 22.6699 12C22.6699 10.3431 21.3268 9 19.6699 9C18.0131 9 16.6699 10.3431 16.6699 12C16.6699 13.6569 18.0131 15 19.6699 15Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M5.66992 22C7.32678 22 8.66992 20.6569 8.66992 19C8.66992 17.3431 7.32678 16 5.66992 16C4.01307 16 2.66992 17.3431 2.66992 19C2.66992 20.6569 4.01307 22 5.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.6699 12H9.66992C7.46992 12 5.66992 11 5.66992 8V16" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.66992 8C7.32678 8 8.66992 6.65685 8.66992 5C8.66992 3.34315 7.32678 2 5.66992 2C4.01307 2 2.66992 3.34315 2.66992 5C2.66992 6.65685 4.01307 8 5.66992 8Z" fill="currentColor" /><path d="M19.6699 15C21.3268 15 22.6699 13.6569 22.6699 12C22.6699 10.3431 21.3268 9 19.6699 9C18.0131 9 16.6699 10.3431 16.6699 12C16.6699 13.6569 18.0131 15 19.6699 15Z" fill="currentColor" /><path d="M5.66992 22C7.32678 22 8.66992 20.6569 8.66992 19C8.66992 17.3431 7.32678 16 5.66992 16C4.01307 16 2.66992 17.3431 2.66992 19C2.66992 20.6569 4.01307 22 5.66992 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M5.66992 16.75C5.25992 16.75 4.91992 16.41 4.91992 16V8C4.91992 7.59 5.25992 7.25 5.66992 7.25C6.07992 7.25 6.41992 7.59 6.41992 8C6.41992 10.19 7.47992 11.25 9.66992 11.25H16.6699C17.0799 11.25 17.4199 11.59 17.4199 12C17.4199 12.41 17.0799 12.75 16.6699 12.75H9.66992C8.30992 12.75 7.21992 12.4 6.41992 11.74V16C6.41992 16.41 6.07992 16.75 5.66992 16.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.66992 8C7.32678 8 8.66992 6.65685 8.66992 5C8.66992 3.34315 7.32678 2 5.66992 2C4.01307 2 2.66992 3.34315 2.66992 5C2.66992 6.65685 4.01307 8 5.66992 8Z" fill="currentColor" /><path d="M19.6699 15C21.3268 15 22.6699 13.6569 22.6699 12C22.6699 10.3431 21.3268 9 19.6699 9C18.0131 9 16.6699 10.3431 16.6699 12C16.6699 13.6569 18.0131 15 19.6699 15Z" fill="currentColor" /><path d="M5.66992 22C7.32678 22 8.66992 20.6569 8.66992 19C8.66992 17.3431 7.32678 16 5.66992 16C4.01307 16 2.66992 17.3431 2.66992 19C2.66992 20.6569 4.01307 22 5.66992 22Z" fill="currentColor" /><path d="M5.66992 16.75C5.25992 16.75 4.91992 16.41 4.91992 16V8C4.91992 7.59 5.25992 7.25 5.66992 7.25C6.07992 7.25 6.41992 7.59 6.41992 8C6.41992 10.19 7.47992 11.25 9.66992 11.25H16.6699C17.0799 11.25 17.4199 11.59 17.4199 12C17.4199 12.41 17.0799 12.75 16.6699 12.75H9.66992C8.30992 12.75 7.21992 12.4 6.41992 11.74V16C6.41992 16.41 6.07992 16.75 5.66992 16.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconHierarchy3;