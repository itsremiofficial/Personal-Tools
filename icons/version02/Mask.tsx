import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconMask: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M17.6699 12C17.6699 14.76 15.4299 17 12.6699 17V7C15.4299 7 17.6699 9.24 17.6699 12Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 7V17C9.90992 17 7.66992 14.76 7.66992 12C7.66992 9.24 9.90992 7 12.6699 7Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 22V17" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 7V2" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM12.6699 17C9.90992 17 7.66992 14.76 7.66992 12C7.66992 9.24 9.90992 7 12.6699 7C15.4299 7 17.6699 9.24 17.6699 12C17.6699 14.76 15.4299 17 12.6699 17Z" fill="currentColor" /><path d="M12.6699 7V17C9.90992 17 7.66992 14.76 7.66992 12C7.66992 9.24 9.90992 7 12.6699 7Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM12.6699 17C9.90992 17 7.66992 14.76 7.66992 12C7.66992 9.24 9.90992 7 12.6699 7C15.4299 7 17.6699 9.24 17.6699 12C17.6699 14.76 15.4299 17 12.6699 17Z" fill="currentColor" /><path d="M12.6699 7V17C9.90992 17 7.66992 14.76 7.66992 12C7.66992 9.24 9.90992 7 12.6699 7Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMask;