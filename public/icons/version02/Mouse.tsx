import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconMouse: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 22C16.7999 22 20.1699 18.63 20.1699 14.5V9.5C20.1699 5.37 16.7999 2 12.6699 2C8.53992 2 5.16992 5.37 5.16992 9.5V14.5C5.16992 18.63 8.53992 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M12.6699 11C11.8399 11 11.1699 10.33 11.1699 9.5V7.5C11.1699 6.67 11.8399 6 12.6699 6C13.4899 6 14.1699 6.67 14.1699 7.5V9.5C14.1699 10.33 13.4899 11 12.6699 11Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 6V2" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.1699 9.5V14.5C20.1699 18.63 16.7999 22 12.6699 22C8.53992 22 5.16992 18.63 5.16992 14.5V9.5C5.16992 7.44 6.00992 5.56 7.36992 4.2C8.55992 3.01 10.1499 2.22 11.9199 2.04C12.1599 2.01 12.4199 2 12.6699 2C12.9199 2 13.1799 2.01 13.4199 2.04C17.1999 2.42 20.1699 5.62 20.1699 9.5Z" fill="currentColor" /><path d="M14.54 7.5V9.5C14.54 10.53 13.7 11.38 12.67 11.38C11.63 11.38 10.79 10.53 10.79 9.5V7.5C10.79 6.73 11.26 6.07 11.92 5.78V2.04C12.16 2.01 12.42 2 12.67 2C12.92 2 13.18 2.01 13.42 2.04V5.78C14.08 6.07 14.54 6.73 14.54 7.5Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9678 2.11565C13.6763 2.06437 13.4199 2.29691 13.4199 2.59282V5.4536C13.4199 5.65196 13.5409 5.82662 13.7058 5.93681C14.209 6.27299 14.5399 6.84695 14.5399 7.50004V9.50004C14.5399 10.53 13.6999 11.38 12.6699 11.38C11.6299 11.38 10.7899 10.53 10.7899 9.50004V7.50004C10.7899 6.84676 11.1282 6.27265 11.6339 5.93651C11.7991 5.8267 11.9199 5.65196 11.9199 5.4536V2.59347C11.9199 2.29732 11.6634 2.06468 11.3718 2.1161C9.82235 2.38932 8.43571 3.13425 7.36992 4.20004C6.00992 5.56004 5.16992 7.44004 5.16992 9.50004V14.5C5.16992 18.63 8.53992 22 12.6699 22C16.7999 22 20.1699 18.63 20.1699 14.5V9.50004C20.1699 5.80955 17.483 2.73426 13.9678 2.11565Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMouse;