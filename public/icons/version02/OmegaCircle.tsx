import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconOmegaCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.6699 16.5H14.5699L16.1899 14.71C16.9899 13.82 17.4299 12.69 17.4299 11.53C17.4299 10.33 16.9299 9.18002 16.0399 8.33002C15.1499 7.48002 13.9399 7 12.6699 7C11.4099 7 10.1999 7.48002 9.29993 8.33002C8.40993 9.18002 7.90991 10.33 7.90991 11.53C7.90991 12.7 8.3499 13.83 9.1499 14.71L10.7699 16.5H7.66992" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path d="M17.6699 17.25H14.5699C14.2699 17.25 13.9999 17.08 13.8799 16.8C13.7599 16.52 13.8099 16.21 14.0099 15.99L15.6299 14.2C16.2999 13.45 16.6799 12.5 16.6799 11.52C16.6799 10.52 16.2699 9.58 15.5199 8.87C14.7699 8.16 13.7299 7.75 12.6699 7.75C11.6099 7.75 10.5699 8.16 9.81995 8.87C9.06995 9.58 8.65991 10.52 8.65991 11.52C8.65991 12.5 9.0299 13.45 9.7099 14.2L11.3299 15.99C11.5299 16.21 11.5799 16.53 11.4599 16.8C11.3399 17.07 11.0699 17.25 10.7699 17.25H7.66992C7.25992 17.25 6.91992 16.91 6.91992 16.5C6.91992 16.09 7.25992 15.75 7.66992 15.75H9.0799L8.5899 15.21C7.6699 14.19 7.15991 12.88 7.15991 11.52C7.15991 10.13 7.74992 8.76003 8.78992 7.78003C9.82992 6.79003 11.2099 6.25 12.6699 6.25C14.1299 6.25 15.5099 6.79003 16.5499 7.78003C17.5799 8.76003 18.1799 10.13 18.1799 11.52C18.1799 12.87 17.6699 14.18 16.7499 15.21L16.2599 15.75H17.6699C18.0799 15.75 18.4199 16.09 18.4199 16.5C18.4199 16.91 18.0799 17.25 17.6699 17.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM17.6699 17.25H14.5699C14.2699 17.25 13.9999 17.08 13.8799 16.8C13.7599 16.52 13.8099 16.21 14.0099 15.99L15.6299 14.2C16.2999 13.45 16.6799 12.5 16.6799 11.52C16.6799 10.52 16.2699 9.58 15.5199 8.87C14.7699 8.16 13.7299 7.75 12.6699 7.75C11.6099 7.75 10.5699 8.16 9.81992 8.87C9.06992 9.58 8.65992 10.52 8.65992 11.52C8.65992 12.5 9.02992 13.45 9.70992 14.2L11.3199 16C11.5199 16.22 11.5699 16.54 11.4499 16.81C11.3299 17.08 11.0599 17.26 10.7599 17.26H7.66992C7.25992 17.26 6.91992 16.92 6.91992 16.51C6.91992 16.1 7.25992 15.75 7.66992 15.75H9.07992L8.58992 15.21C7.66992 14.19 7.15992 12.88 7.15992 11.52C7.15992 10.13 7.74992 8.76 8.78992 7.78C9.82992 6.79 11.1999 6.25 12.6699 6.25C14.1399 6.25 15.5099 6.79 16.5499 7.78C17.5799 8.76 18.1799 10.13 18.1799 11.52C18.1799 12.87 17.6699 14.18 16.7499 15.21L16.2599 15.75H17.6699C18.0799 15.75 18.4199 16.09 18.4199 16.5C18.4199 16.91 18.0799 17.25 17.6699 17.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconOmegaCircle;