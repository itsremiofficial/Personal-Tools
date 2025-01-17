import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconCandle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.16992 22V15" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.16992 5V2" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.1699 22V19" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.1699 9V2" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.1699 7V13C10.1699 14.1 9.66992 15 8.16992 15H6.16992C4.66992 15 4.16992 14.1 4.16992 13V7C4.16992 5.9 4.66992 5 6.16992 5H8.16992C9.66992 5 10.1699 5.9 10.1699 7Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.1699 11V17C21.1699 18.1 20.6699 19 19.1699 19H17.1699C15.6699 19 15.1699 18.1 15.1699 17V11C15.1699 9.9 15.6699 9 17.1699 9H19.1699C20.6699 9 21.1699 9.9 21.1699 11Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M8.16992 4.5H7.91992V2C7.91992 1.59 7.57992 1.25 7.16992 1.25C6.75992 1.25 6.41992 1.59 6.41992 2V4.5H6.16992C4.57992 4.5 3.66992 5.41 3.66992 7V13C3.66992 14.59 4.57992 15.5 6.16992 15.5H6.41992V22C6.41992 22.41 6.75992 22.75 7.16992 22.75C7.57992 22.75 7.91992 22.41 7.91992 22V15.5H8.16992C9.75992 15.5 10.6699 14.59 10.6699 13V7C10.6699 5.41 9.75992 4.5 8.16992 4.5Z" fill="currentColor" /><path d="M19.1699 8.5H18.9199V2C18.9199 1.59 18.5799 1.25 18.1699 1.25C17.7599 1.25 17.4199 1.59 17.4199 2V8.5H17.1699C15.5799 8.5 14.6699 9.41 14.6699 11V17C14.6699 18.59 15.5799 19.5 17.1699 19.5H17.4199V22C17.4199 22.41 17.7599 22.75 18.1699 22.75C18.5799 22.75 18.9199 22.41 18.9199 22V19.5H19.1699C20.7599 19.5 21.6699 18.59 21.6699 17V11C21.6699 9.41 20.7599 8.5 19.1699 8.5Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.16992 4.5H7.91992V2C7.91992 1.59 7.57992 1.25 7.16992 1.25C6.75992 1.25 6.41992 1.59 6.41992 2V4.5H6.16992C4.57992 4.5 3.66992 5.41 3.66992 7V13C3.66992 14.59 4.57992 15.5 6.16992 15.5H6.41992V22C6.41992 22.41 6.75992 22.75 7.16992 22.75C7.57992 22.75 7.91992 22.41 7.91992 22V15.5H8.16992C9.75992 15.5 10.6699 14.59 10.6699 13V7C10.6699 5.41 9.75992 4.5 8.16992 4.5Z" fill="currentColor" /><path d="M19.1699 8.5H18.9199V2C18.9199 1.59 18.5799 1.25 18.1699 1.25C17.7599 1.25 17.4199 1.59 17.4199 2V8.5H17.1699C15.5799 8.5 14.6699 9.41 14.6699 11V17C14.6699 18.59 15.5799 19.5 17.1699 19.5H17.4199V22C17.4199 22.41 17.7599 22.75 18.1699 22.75C18.5799 22.75 18.9199 22.41 18.9199 22V19.5H19.1699C20.7599 19.5 21.6699 18.59 21.6699 17V11C21.6699 9.41 20.7599 8.5 19.1699 8.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCandle;