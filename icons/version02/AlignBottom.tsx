import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconAlignBottom: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.9297 18.9V7.1C19.9297 5.6 19.2897 5 17.6997 5H16.6597C15.0697 5 14.4297 5.6 14.4297 7.1V18.9" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5.92969 18.9V12.1C5.92969 10.6 6.56969 10 8.15969 10H9.19969C10.7897 10 11.4297 10.6 11.4297 12.1V18.9" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M2.66992 19H22.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.68992 4.62012H7.64992C6.05992 4.62012 5.41992 5.22012 5.41992 6.74012V18.6201H10.9199V6.74012C10.9099 5.22012 10.2699 4.62012 8.68992 4.62012Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.1899 9.62012H16.1499C14.5599 9.62012 13.9199 10.2301 13.9199 11.7401V18.6201H19.4199V11.7401C19.4199 10.2301 18.7699 9.62012 17.1899 9.62012Z" fill="currentColor" /><path d="M3.41992 17.8799H21.9199C22.3299 17.8799 22.6699 18.2199 22.6699 18.6299C22.6699 19.0399 22.3299 19.3799 21.9199 19.3799H3.41992C3.00992 19.3799 2.66992 19.0399 2.66992 18.6199C2.66992 18.1999 3.00992 17.8799 3.41992 17.8799Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.68992 4.62012H7.64992C6.05992 4.62012 5.41992 5.22012 5.41992 6.74012V18.6201H10.9199V6.74012C10.9099 5.22012 10.2699 4.62012 8.68992 4.62012Z" fill="currentColor" /><path d="M17.1899 9.62012H16.1499C14.5599 9.62012 13.9199 10.2301 13.9199 11.7401V18.6201H19.4199V11.7401C19.4199 10.2301 18.7699 9.62012 17.1899 9.62012Z" fill="currentColor" /><path d="M3.41992 17.8799H21.9199C22.3299 17.8799 22.6699 18.2199 22.6699 18.6299C22.6699 19.0399 22.3299 19.3799 21.9199 19.3799H3.41992C3.00992 19.3799 2.66992 19.0399 2.66992 18.6199C2.66992 18.1999 3.00992 17.8799 3.41992 17.8799Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconAlignBottom;