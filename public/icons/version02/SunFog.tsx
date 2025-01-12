import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconSunFog: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1699 12C19.1699 8.41 16.2599 5.5 12.6699 5.5C9.07992 5.5 6.16992 8.41 6.16992 12" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M5.65991 4.98999L5.52991 4.85999M19.6799 4.98999L19.8099 4.85999L19.6799 4.98999ZM12.6699 2.07999V2V2.07999ZM2.74994 12H2.66992H2.74994ZM22.6699 12H22.5899H22.6699Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.66992 15H20.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.66992 18H18.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.66992 21H15.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1496 12.25C19.4296 12.25 19.6696 12.01 19.6496 11.73C19.3796 8.11 16.3596 5.25 12.6696 5.25C8.97962 5.25 5.95964 8.1 5.68964 11.73C5.66964 12.01 5.90964 12.25 6.18964 12.25H19.1496Z" fill="currentColor" /><path d="M22.6699 13H22.5899C22.0399 13 21.5899 12.55 21.5899 12C21.5899 11.45 22.0399 11 22.5899 11C23.1399 11 23.6299 11.45 23.6299 12C23.6299 12.55 23.2199 13 22.6699 13ZM2.74994 13H2.66992C2.11992 13 1.66992 12.55 1.66992 12C1.66992 11.45 2.11992 11 2.66992 11C3.21992 11 3.7099 11.45 3.7099 12C3.7099 12.55 3.29994 13 2.74994 13ZM19.6799 5.99001C19.4199 5.99001 19.1699 5.89 18.9699 5.7C18.5799 5.31 18.5799 4.67999 18.9699 4.28999L19.0999 4.16C19.4899 3.77 20.1199 3.77 20.5099 4.16C20.8999 4.55 20.8999 5.18001 20.5099 5.57001L20.3799 5.7C20.1899 5.89 19.9399 5.99001 19.6799 5.99001ZM5.65991 5.99001C5.39991 5.99001 5.14995 5.89 4.94995 5.7L4.81995 5.57001C4.42995 5.18001 4.42995 4.55 4.81995 4.16C5.20995 3.77 5.83992 3.77 6.22992 4.16L6.35992 4.28999C6.74992 4.67999 6.74992 5.31 6.35992 5.7C6.16992 5.89 5.90991 5.99001 5.65991 5.99001ZM12.6699 3.03999C12.1199 3.03999 11.6699 2.63 11.6699 2.08V2C11.6699 1.45 12.1199 1 12.6699 1C13.2199 1 13.6699 1.45 13.6699 2C13.6699 2.55 13.2199 3.03999 12.6699 3.03999Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.6699 15.75H4.66992C4.25992 15.75 3.91992 15.41 3.91992 15C3.91992 14.59 4.25992 14.25 4.66992 14.25H20.6699C21.0799 14.25 21.4199 14.59 21.4199 15C21.4199 15.41 21.0799 15.75 20.6699 15.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.6699 18.75H6.66992C6.25992 18.75 5.91992 18.41 5.91992 18C5.91992 17.59 6.25992 17.25 6.66992 17.25H18.6699C19.0799 17.25 19.4199 17.59 19.4199 18C19.4199 18.41 19.0799 18.75 18.6699 18.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.6699 21.75H9.66992C9.25992 21.75 8.91992 21.41 8.91992 21C8.91992 20.59 9.25992 20.25 9.66992 20.25H15.6699C16.0799 20.25 16.4199 20.59 16.4199 21C16.4199 21.41 16.0799 21.75 15.6699 21.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1496 12.25C19.4296 12.25 19.6696 12.01 19.6496 11.73C19.3796 8.1 16.3596 5.25 12.6696 5.25C8.97964 5.25 5.95964 8.1 5.68964 11.73C5.66964 12.01 5.90964 12.25 6.18964 12.25H19.1496Z" fill="currentColor" /><path d="M22.6699 13H22.5899C22.0399 13 21.5899 12.55 21.5899 12C21.5899 11.45 22.0399 11 22.5899 11C23.1399 11 23.6299 11.45 23.6299 12C23.6299 12.55 23.2199 13 22.6699 13ZM2.74992 13H2.66992C2.11992 13 1.66992 12.55 1.66992 12C1.66992 11.45 2.11992 11 2.66992 11C3.21992 11 3.70992 11.45 3.70992 12C3.70992 12.55 3.29992 13 2.74992 13ZM19.6799 5.99C19.4199 5.99 19.1699 5.89 18.9699 5.7C18.5799 5.31 18.5799 4.68 18.9699 4.29L19.0999 4.16C19.4899 3.77 20.1199 3.77 20.5099 4.16C20.8999 4.55 20.8999 5.18 20.5099 5.57L20.3799 5.7C20.1899 5.89 19.9399 5.99 19.6799 5.99ZM5.65992 5.99C5.39992 5.99 5.14992 5.89 4.94992 5.7L4.81992 5.56C4.42992 5.17 4.42992 4.54 4.81992 4.15C5.20992 3.76 5.83992 3.76 6.22992 4.15L6.35992 4.28C6.74992 4.67 6.74992 5.3 6.35992 5.69C6.16992 5.89 5.90992 5.99 5.65992 5.99ZM12.6699 3.04C12.1199 3.04 11.6699 2.63 11.6699 2.08V2C11.6699 1.45 12.1199 1 12.6699 1C13.2199 1 13.6699 1.45 13.6699 2C13.6699 2.55 13.2199 3.04 12.6699 3.04Z" fill="currentColor" /><path d="M20.6699 15.75H4.66992C4.25992 15.75 3.91992 15.41 3.91992 15C3.91992 14.59 4.25992 14.25 4.66992 14.25H20.6699C21.0799 14.25 21.4199 14.59 21.4199 15C21.4199 15.41 21.0799 15.75 20.6699 15.75Z" fill="currentColor" /><path d="M18.6699 18.75H6.66992C6.25992 18.75 5.91992 18.41 5.91992 18C5.91992 17.59 6.25992 17.25 6.66992 17.25H18.6699C19.0799 17.25 19.4199 17.59 19.4199 18C19.4199 18.41 19.0799 18.75 18.6699 18.75Z" fill="currentColor" /><path d="M15.6699 21.75H9.66992C9.25992 21.75 8.91992 21.41 8.91992 21C8.91992 20.59 9.25992 20.25 9.66992 20.25H15.6699C16.0799 20.25 16.4199 20.59 16.4199 21C16.4199 21.41 16.0799 21.75 15.6699 21.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSunFog;