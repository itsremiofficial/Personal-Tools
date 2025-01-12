import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconEmercoinEmc: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" /><g opacity={duotone ? "0.4" : "1"}><path d="M8.16992 8H17.1699V16H8.16992" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.16992 12H13.1699V8" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path d="M17.1699 7.25H8.16992C7.75992 7.25 7.41992 7.59 7.41992 8C7.41992 8.41 7.75992 8.75 8.16992 8.75H12.4199V11.25H8.16992C7.75992 11.25 7.41992 11.59 7.41992 12C7.41992 12.41 7.75992 12.75 8.16992 12.75H13.1699C13.5799 12.75 13.9199 12.41 13.9199 12V8.75H16.4199V15.25H8.16992C7.75992 15.25 7.41992 15.59 7.41992 16C7.41992 16.41 7.75992 16.75 8.16992 16.75H17.1699C17.5799 16.75 17.9199 16.41 17.9199 16V8C17.9199 7.59 17.5799 7.25 17.1699 7.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM17.9199 16C17.9199 16.41 17.5799 16.75 17.1699 16.75H8.16992C7.75992 16.75 7.41992 16.41 7.41992 16C7.41992 15.59 7.75992 15.25 8.16992 15.25H16.4199V8.75H13.9199V12C13.9199 12.41 13.5799 12.75 13.1699 12.75H8.16992C7.75992 12.75 7.41992 12.41 7.41992 12C7.41992 11.59 7.75992 11.25 8.16992 11.25H12.4199V8.75H8.16992C7.75992 8.75 7.41992 8.41 7.41992 8C7.41992 7.59 7.75992 7.25 8.16992 7.25H17.1699C17.5799 7.25 17.9199 7.59 17.9199 8V16Z" fill="none" /></svg> 
      )}
    </>
  );
};

export default IconEmercoinEmc;