import { FC } from 'react';

const IconKeyboard: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.16992 4H17.1699C17.7899 4 18.3399 4.02 18.8299 4.09C21.4599 4.38 22.1699 5.62 22.1699 9V15C22.1699 18.38 21.4599 19.62 18.8299 19.91C18.3399 19.98 17.7899 20 17.1699 20H8.16992C7.54992 20 6.99992 19.98 6.50992 19.91C3.87992 19.62 3.16992 18.38 3.16992 15V9C3.16992 5.62 3.87992 4.38 6.50992 4.09C6.99992 4.02 7.54992 4 8.16992 4Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.1699 10H17.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.66992 15.5H7.68992H17.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.764 10H10.773" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.76404 10H7.77302" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.9399 3.35C18.4699 3.28 17.9299 3.25 17.1699 3.25H8.16992C7.41992 3.25 6.86992 3.28 6.42992 3.34C3.07992 3.71 2.41992 5.7 2.41992 9V15C2.41992 18.3 3.07992 20.29 6.39992 20.65C6.86992 20.72 7.40992 20.75 8.16992 20.75H17.1699C17.9199 20.75 18.4699 20.72 18.9099 20.66C22.2599 20.29 22.9199 18.31 22.9199 15V9C22.9199 5.7 22.2599 3.71 18.9399 3.35Z" fill="currentColor" /><path d="M17.6699 10.75H14.1699C13.7599 10.75 13.4199 10.41 13.4199 10C13.4199 9.59 13.7599 9.25 14.1699 9.25H17.6699C18.0799 9.25 18.4199 9.59 18.4199 10C18.4199 10.41 18.0799 10.75 17.6699 10.75Z" fill="currentColor" /><path d="M10.7695 11C10.2195 11 9.76953 10.55 9.76953 10C9.76953 9.45 10.2095 9 10.7695 9H10.7795C11.3295 9 11.7795 9.45 11.7795 10C11.7795 10.55 11.3295 11 10.7695 11Z" fill="currentColor" /><path d="M7.76953 11C7.21953 11 6.76953 10.55 6.76953 10C6.76953 9.45 7.20953 9 7.76953 9C8.31953 9 8.76953 9.45 8.76953 10C8.76953 10.55 8.32953 11 7.76953 11Z" fill="currentColor" /><path d="M17.6697 16.25H7.68969C7.27969 16.25 6.92969 15.91 6.92969 15.5C6.92969 15.09 7.25969 14.75 7.66969 14.75H17.6697C18.0797 14.75 18.4197 15.09 18.4197 15.5C18.4197 15.91 18.0797 16.25 17.6697 16.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9399 3.35C18.4699 3.28 17.9299 3.25 17.1699 3.25H8.16992C7.41992 3.25 6.86992 3.28 6.42992 3.34C3.07992 3.71 2.41992 5.7 2.41992 9V15C2.41992 18.3 3.07992 20.29 6.39992 20.65C6.86992 20.72 7.40992 20.75 8.16992 20.75H17.1699C17.9199 20.75 18.4699 20.72 18.9099 20.66C22.2599 20.29 22.9199 18.31 22.9199 15V9C22.9199 5.7 22.2599 3.71 18.9399 3.35ZM10.7599 9C11.3199 9 11.7699 9.45 11.7699 10C11.7699 10.55 11.3199 11 10.7699 11C10.2199 11 9.76992 10.55 9.76992 10C9.76992 9.45 10.2099 9 10.7599 9ZM7.75992 9C8.32992 9 8.76992 9.45 8.76992 10C8.76992 10.55 8.31992 11 7.76992 11C7.21992 11 6.76992 10.55 6.76992 10C6.76992 9.45 7.20992 9 7.75992 9ZM17.6699 16.25H7.68992C7.27992 16.25 6.92992 15.91 6.92992 15.5C6.92992 15.09 7.25992 14.75 7.66992 14.75H17.6699C18.0799 14.75 18.4199 15.09 18.4199 15.5C18.4199 15.91 18.0799 16.25 17.6699 16.25ZM17.6699 10.75H14.1699C13.7599 10.75 13.4199 10.41 13.4199 10C13.4199 9.59 13.7599 9.25 14.1699 9.25H17.6699C18.0799 9.25 18.4199 9.59 18.4199 10C18.4199 10.41 18.0799 10.75 17.6699 10.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconKeyboard as IconComponent).keywords = [
  "keyboard",
  "keypad",
  "computer",
  "typing",
  "touch-tone",
  "keyword",
  "tablet",
  "shortcut",
  "portable",
  "backlit"
];

export default IconKeyboard as IconComponent;