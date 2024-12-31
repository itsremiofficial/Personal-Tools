import { FC } from 'react';
import { IconProps } from "@/types";

const IconMask: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.92999 19.07C3.11999 17.26 2 14.76 2 12C2 6.48 6.48 2 12 2C14.76 2 17.26 3.12 19.07 4.93" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.0697 4.93018C20.8797 6.74018 21.9997 9.24018 21.9997 12.0002C21.9997 17.5202 17.5197 22.0002 11.9997 22.0002C9.23969 22.0002 6.73969 20.8802 4.92969 19.0702" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M19.0697 4.93018L4.92969 19.0702" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.75977 16.2402L13.4097 21.9002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.2891 12.71L17.8691 19.28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.8301 9.16992L21.1201 15.4699" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 12C22 17.04 18.26 21.21 13.41 21.9C12.95 21.97 12.48 22 12 22C9.24 22 6.73999 20.88 4.92999 19.07C3.11999 17.26 2 14.76 2 12C2 6.48 6.48 2 12 2C14.76 2 17.26 3.12 19.07 4.93C20.88 6.74 22 9.24 22 12Z" fill="currentColor" /><path d="M14.83 10.2299L12.3499 12.7099L18.8799 19.2399C18.5199 19.5899 18.1299 19.9099 17.7199 20.1999L11.2899 13.7699L8.81995 16.2399L13.9399 21.3699C14.0499 21.4799 14.12 21.6199 14.15 21.7599C14.15 21.7599 14.15 21.7599 14.15 21.7699C13.91 21.8199 13.6599 21.8699 13.4099 21.8999C13.0899 21.9499 12.7699 21.9799 12.4399 21.9899L7.75995 17.2999L5.47992 19.5799C5.28992 19.4199 5.10993 19.2499 4.92993 19.0699C4.74993 18.8899 4.57992 18.7099 4.41992 18.5199L18.52 4.41992C18.71 4.57992 18.8899 4.74992 19.0699 4.92992C19.2499 5.10992 19.42 5.28992 19.58 5.47992L15.89 9.16992L21.58 14.8599C21.42 15.3899 21.2199 15.8899 20.9799 16.3799L14.83 10.2299Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMask;