import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconMessageText: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6699 2H8.66992C4.66992 2 2.66992 4 2.66992 8V21C2.66992 21.55 3.11992 22 3.66992 22H16.6699C20.6699 22 22.6699 20 22.6699 16V8C22.6699 4 20.6699 2 16.6699 2Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.66992 9.5H17.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.66992 14.5H14.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.6699 2H8.66992C4.66992 2 2.66992 4 2.66992 8V21C2.66992 21.55 3.11992 22 3.66992 22H16.6699C20.6699 22 22.6699 20 22.6699 16V8C22.6699 4 20.6699 2 16.6699 2Z" fill="currentColor" /><path d="M17.6699 8.75H7.66992C7.25992 8.75 6.91992 9.09 6.91992 9.5C6.91992 9.91 7.25992 10.25 7.66992 10.25H17.6699C18.0799 10.25 18.4199 9.91 18.4199 9.5C18.4199 9.09 18.0799 8.75 17.6699 8.75Z" fill="currentColor" /><path d="M14.6699 13.75H7.66992C7.25992 13.75 6.91992 14.09 6.91992 14.5C6.91992 14.91 7.25992 15.25 7.66992 15.25H14.6699C15.0799 15.25 15.4199 14.91 15.4199 14.5C15.4199 14.09 15.0799 13.75 14.6699 13.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6699 2H8.66992C4.66992 2 2.66992 4 2.66992 8V21C2.66992 21.55 3.11992 22 3.66992 22H16.6699C20.6699 22 22.6699 20 22.6699 16V8C22.6699 4 20.6699 2 16.6699 2ZM14.6699 15.25H7.66992C7.25992 15.25 6.91992 14.91 6.91992 14.5C6.91992 14.09 7.25992 13.75 7.66992 13.75H14.6699C15.0799 13.75 15.4199 14.09 15.4199 14.5C15.4199 14.91 15.0799 15.25 14.6699 15.25ZM17.6699 10.25H7.66992C7.25992 10.25 6.91992 9.91 6.91992 9.5C6.91992 9.09 7.25992 8.75 7.66992 8.75H17.6699C18.0799 8.75 18.4199 9.09 18.4199 9.5C18.4199 9.91 18.0799 10.25 17.6699 10.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMessageText;