import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconHospital: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.66992 22H22.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.6699 2H7.66992C4.66992 2 3.66992 3.79 3.66992 6V22H21.6699V6C21.6699 3.79 20.6699 2 17.6699 2Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.7301 15H10.6001C10.0901 15 9.66016 15.42 9.66016 15.94V22H15.6602V15.94C15.6702 15.42 15.2501 15 14.7301 15Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M12.6699 6V11" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.1699 8.5H15.1699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6699 21.25H2.66992C2.25992 21.25 1.91992 21.59 1.91992 22C1.91992 22.41 2.25992 22.75 2.66992 22.75H22.6699C23.0799 22.75 23.4199 22.41 23.4199 22C23.4199 21.59 23.0799 21.25 22.6699 21.25Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.6699 2H7.66992C4.66992 2 3.66992 3.79 3.66992 6V22H21.6699V6C21.6699 3.79 20.6699 2 17.6699 2Z" fill="currentColor" /><path d="M14.7301 15H10.6001C10.0901 15 9.66016 15.42 9.66016 15.94V22H15.6602V15.94C15.6702 15.42 15.2501 15 14.7301 15Z" fill="currentColor" /><path d="M15.1699 7.75H13.4199V6C13.4199 5.59 13.0799 5.25 12.6699 5.25C12.2599 5.25 11.9199 5.59 11.9199 6V7.75H10.1699C9.75992 7.75 9.41992 8.09 9.41992 8.5C9.41992 8.91 9.75992 9.25 10.1699 9.25H11.9199V11C11.9199 11.41 12.2599 11.75 12.6699 11.75C13.0799 11.75 13.4199 11.41 13.4199 11V9.25H15.1699C15.5799 9.25 15.9199 8.91 15.9199 8.5C15.9199 8.09 15.5799 7.75 15.1699 7.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6699 21.25H2.66992C2.25992 21.25 1.91992 21.59 1.91992 22C1.91992 22.41 2.25992 22.75 2.66992 22.75H22.6699C23.0799 22.75 23.4199 22.41 23.4199 22C23.4199 21.59 23.0799 21.25 22.6699 21.25Z" fill="currentColor" /><path d="M17.6699 2H7.66992C4.66992 2 3.66992 3.79 3.66992 6V22H9.66992V15.94C9.66992 15.42 10.0899 15 10.6099 15H14.7399C15.2499 15 15.6799 15.42 15.6799 15.94V22H21.6799V6C21.6699 3.79 20.6699 2 17.6699 2ZM15.1699 9.25H13.4199V11C13.4199 11.41 13.0799 11.75 12.6699 11.75C12.2599 11.75 11.9199 11.41 11.9199 11V9.25H10.1699C9.75992 9.25 9.41992 8.91 9.41992 8.5C9.41992 8.09 9.75992 7.75 10.1699 7.75H11.9199V6C11.9199 5.59 12.2599 5.25 12.6699 5.25C13.0799 5.25 13.4199 5.59 13.4199 6V7.75H15.1699C15.5799 7.75 15.9199 8.09 15.9199 8.5C15.9199 8.91 15.5799 9.25 15.1699 9.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconHospital;