import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconCheck: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.6899 19.5H8.16992C7.54992 19.5 6.99992 19.48 6.50992 19.41C3.87992 19.12 3.16992 17.88 3.16992 14.5V9.5C3.16992 6.12 3.87992 4.88 6.50992 4.59C6.99992 4.52 7.54992 4.5 8.16992 4.5H11.6299" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M15.6899 4.5H17.1699C17.7899 4.5 18.3399 4.52 18.8299 4.59C21.4599 4.88 22.1699 6.12 22.1699 9.5V14.5C22.1699 17.88 21.4599 19.12 18.8299 19.41C18.3399 19.48 17.7899 19.5 17.1699 19.5H15.6899" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M15.6699 2V22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.66992 8.5V15.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6699 22C15.2599 22 14.9199 21.66 14.9199 21.25V2.75C14.9199 2.34 15.2599 2 15.6699 2C16.0799 2 16.4199 2.34 16.4199 2.75V21.25C16.4199 21.66 16.0799 22 15.6699 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M6.66992 20H12.6699V4H6.66992C4.45992 4 2.66992 5.79 2.66992 8V16C2.66992 18.21 4.45992 20 6.66992 20Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.6699 20H15.6699V4H18.6699C20.8799 4 22.6699 5.79 22.6699 8V16C22.6699 18.21 20.8799 20 18.6699 20Z" fill="currentColor" /><path d="M7.66992 16.25C7.25992 16.25 6.91992 15.91 6.91992 15.5V8.5C6.91992 8.09 7.25992 7.75 7.66992 7.75C8.07992 7.75 8.41992 8.09 8.41992 8.5V15.5C8.41992 15.91 8.07992 16.25 7.66992 16.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6699 22C15.2599 22 14.9199 21.66 14.9199 21.25V2.75C14.9199 2.34 15.2599 2 15.6699 2C16.0799 2 16.4199 2.34 16.4199 2.75V21.25C16.4199 21.66 16.0799 22 15.6699 22Z" fill="currentColor" /><path d="M18.6699 20H15.6699V4H18.6699C20.8799 4 22.6699 5.79 22.6699 8V16C22.6699 18.21 20.8799 20 18.6699 20Z" fill="currentColor" /><path d="M6.66992 4C4.45992 4 2.66992 5.79 2.66992 8V16C2.66992 18.21 4.45992 20 6.66992 20H11.6699C12.2199 20 12.6699 19.55 12.6699 19V5C12.6699 4.45 12.2199 4 11.6699 4H6.66992ZM8.41992 15.5C8.41992 15.91 8.07992 16.25 7.66992 16.25C7.25992 16.25 6.91992 15.91 6.91992 15.5V8.5C6.91992 8.09 7.25992 7.75 7.66992 7.75C8.07992 7.75 8.41992 8.09 8.41992 8.5V15.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCheck;