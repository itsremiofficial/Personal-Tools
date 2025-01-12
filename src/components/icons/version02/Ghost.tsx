import { FC } from 'react';

const IconGhost: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6699 20.07V12.18C22.6699 6.57999 18.1699 2 12.6699 2C7.16992 2 2.66992 6.57999 2.66992 12.18V20.07C2.66992 21.33 3.4199 21.67 4.3399 20.83L5.3399 19.92C5.7099 19.58 6.30993 19.58 6.67993 19.92L8.67993 21.75C9.04993 22.09 9.6499 22.09 10.0199 21.75L12.0199 19.92C12.3899 19.58 12.9899 19.58 13.3599 19.92L15.3599 21.75C15.7299 22.09 16.33 22.09 16.7 21.75L18.7 19.92C19.07 19.58 19.6699 19.58 20.0399 19.92L21.0399 20.83C21.9199 21.67 22.6699 21.33 22.6699 20.07Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.66992 14C11.0399 15.78 14.2999 15.78 16.6699 14" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 11C13.7745 11 14.6699 10.1046 14.6699 9C14.6699 7.89543 13.7745 7 12.6699 7C11.5654 7 10.6699 7.89543 10.6699 9C10.6699 10.1046 11.5654 11 12.6699 11Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6699 20.07V12.18C22.6699 6.57999 18.1699 2 12.6699 2C7.16992 2 2.66992 6.57999 2.66992 12.18V20.07C2.66992 21.33 3.4199 21.67 4.3399 20.83L5.3399 19.92C5.7099 19.58 6.30993 19.58 6.67993 19.92L8.67993 21.75C9.04993 22.09 9.6499 22.09 10.0199 21.75L12.0199 19.92C12.3899 19.58 12.9899 19.58 13.3599 19.92L15.3599 21.75C15.7299 22.09 16.33 22.09 16.7 21.75L18.7 19.92C19.07 19.58 19.6699 19.58 20.0399 19.92L21.0399 20.83C21.9199 21.67 22.6699 21.33 22.6699 20.07Z" fill="currentColor" /><path d="M12.6702 16.07C11.1002 16.07 9.53017 15.58 8.22017 14.6C7.89017 14.35 7.82021 13.88 8.07021 13.55C8.32021 13.22 8.7902 13.15 9.1202 13.4C11.2102 14.97 14.1302 14.97 16.2202 13.4C16.5502 13.15 17.0202 13.22 17.2702 13.55C17.5202 13.88 17.4502 14.35 17.1202 14.6C15.8102 15.58 14.2402 16.07 12.6702 16.07Z" fill="currentColor" /><path d="M12.67 11.38C13.9845 11.38 15.05 10.3144 15.05 9C15.05 7.68556 13.9845 6.62 12.67 6.62C11.3556 6.62 10.29 7.68556 10.29 9C10.29 10.3144 11.3556 11.38 12.67 11.38Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.16992 2 2.66992 6.58 2.66992 12.18V20.07C2.66992 21.33 3.41992 21.67 4.33992 20.83L5.33992 19.92C5.70992 19.58 6.30992 19.58 6.67992 19.92L8.67992 21.75C9.04992 22.09 9.64992 22.09 10.0199 21.75L12.0199 19.92C12.3899 19.58 12.9899 19.58 13.3599 19.92L15.3599 21.75C15.7299 22.09 16.3299 22.09 16.6999 21.75L18.6999 19.92C19.0699 19.58 19.6699 19.58 20.0399 19.92L21.0399 20.83C21.9599 21.67 22.7099 21.33 22.7099 20.07V12.18C22.6699 6.58 18.1699 2 12.6699 2ZM12.6699 6.62C13.9799 6.62 15.0499 7.69 15.0499 9C15.0499 10.31 13.9799 11.38 12.6699 11.38C11.3599 11.38 10.2899 10.31 10.2899 9C10.2899 7.69 11.3599 6.62 12.6699 6.62ZM17.1199 14.6C15.8099 15.58 14.2399 16.07 12.6699 16.07C11.0999 16.07 9.52992 15.58 8.21992 14.6C7.88992 14.35 7.81992 13.88 8.06992 13.55C8.31992 13.22 8.78992 13.15 9.11992 13.4C11.2099 14.97 14.1299 14.97 16.2199 13.4C16.5499 13.15 17.0199 13.22 17.2699 13.55C17.5199 13.88 17.4499 14.35 17.1199 14.6Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGhost as IconComponent).keywords = [
  "ghost",
  "wraith",
  "specter",
  "spectre",
  "spook",
  "haunt",
  "obsess",
  "ghostwrite",
  "touch",
  "ghostwriter"
];

export default IconGhost as IconComponent;