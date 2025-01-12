import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconNoteText: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.66992 2V5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.6699 2V5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.6699 8.5V17C21.6699 20 20.1699 22 16.6699 22H8.66992C5.16992 22 3.66992 20 3.66992 17V8.5C3.66992 5.5 5.16992 3.5 8.66992 3.5H16.6699C20.1699 3.5 21.6699 5.5 21.6699 8.5Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.66992 11H16.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.66992 16H12.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.66992 5.75C8.25992 5.75 7.91992 5.41 7.91992 5V2C7.91992 1.59 8.25992 1.25 8.66992 1.25C9.07992 1.25 9.41992 1.59 9.41992 2V5C9.41992 5.41 9.07992 5.75 8.66992 5.75Z" fill="currentColor" /><path d="M16.6699 5.75C16.2599 5.75 15.9199 5.41 15.9199 5V2C15.9199 1.59 16.2599 1.25 16.6699 1.25C17.0799 1.25 17.4199 1.59 17.4199 2V5C17.4199 5.41 17.0799 5.75 16.6699 5.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.6699 8.5V17C21.6699 20 20.1699 22 16.6699 22H8.66992C5.16992 22 3.66992 20 3.66992 17V8.5C3.66992 5.5 5.16992 3.5 8.66992 3.5H16.6699C20.1699 3.5 21.6699 5.5 21.6699 8.5Z" fill="currentColor" /><path d="M16.6699 11.75H8.66992C8.25992 11.75 7.91992 11.41 7.91992 11C7.91992 10.59 8.25992 10.25 8.66992 10.25H16.6699C17.0799 10.25 17.4199 10.59 17.4199 11C17.4199 11.41 17.0799 11.75 16.6699 11.75Z" fill="currentColor" /><path d="M12.6699 16.75H8.66992C8.25992 16.75 7.91992 16.41 7.91992 16C7.91992 15.59 8.25992 15.25 8.66992 15.25H12.6699C13.0799 15.25 13.4199 15.59 13.4199 16C13.4199 16.41 13.0799 16.75 12.6699 16.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.41992 3.5V2C9.41992 1.59 9.07992 1.25 8.66992 1.25C8.25992 1.25 7.91992 1.59 7.91992 2V3.56C8.16992 3.53 8.39992 3.5 8.66992 3.5H9.41992Z" fill="currentColor" /><path d="M17.4199 3.56V2C17.4199 1.59 17.0799 1.25 16.6699 1.25C16.2599 1.25 15.9199 1.59 15.9199 2V3.5H16.6699C16.9399 3.5 17.1699 3.53 17.4199 3.56Z" fill="currentColor" /><path d="M17.4199 3.56V5C17.4199 5.41 17.0799 5.75 16.6699 5.75C16.2599 5.75 15.9199 5.41 15.9199 5V3.5H9.41992V5C9.41992 5.41 9.07992 5.75 8.66992 5.75C8.25992 5.75 7.91992 5.41 7.91992 5V3.56C4.96992 3.83 3.66992 5.73 3.66992 8.5V17C3.66992 20 5.16992 22 8.66992 22H16.6699C20.1699 22 21.6699 20 21.6699 17V8.5C21.6699 5.73 20.3699 3.83 17.4199 3.56ZM12.6699 16.75H8.66992C8.25992 16.75 7.91992 16.41 7.91992 16C7.91992 15.59 8.25992 15.25 8.66992 15.25H12.6699C13.0799 15.25 13.4199 15.59 13.4199 16C13.4199 16.41 13.0799 16.75 12.6699 16.75ZM16.6699 11.75H8.66992C8.25992 11.75 7.91992 11.41 7.91992 11C7.91992 10.59 8.25992 10.25 8.66992 10.25H16.6699C17.0799 10.25 17.4199 10.59 17.4199 11C17.4199 11.41 17.0799 11.75 16.6699 11.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconNoteText;