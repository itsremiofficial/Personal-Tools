import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconEosEos: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5199 3.38L7.91989 7.7C7.78989 7.86 7.63988 8.16 7.59988 8.37L5.88989 16.94C5.76989 17.52 6.0999 18.24 6.6199 18.54L11.9399 21.58C12.3499 21.81 13.0199 21.81 13.4299 21.58L18.7499 18.54C19.2699 18.24 19.5899 17.53 19.4799 16.94L17.7699 8.37C17.7299 8.16 17.5899 7.86 17.4499 7.7L13.8499 3.38C13.1899 2.62 12.1499 2.62 11.5199 3.38Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.4801 8.52L13.1401 20.68C12.9801 21.12 12.3601 21.12 12.2001 20.68L7.8501 8.5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path d="M17.6499 8.09L17.4799 8.52L12.7599 21.75H12.5799L7.84994 8.5L7.68994 8.1C7.74994 7.95 7.82994 7.81 7.90994 7.71L11.5199 3.38C12.1499 2.62 13.1899 2.62 13.8199 3.38L17.4299 7.71C17.5099 7.8 17.5899 7.95 17.6499 8.09Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12.58 21.75C12.34 21.74 12.11 21.68 11.93 21.57L6.61001 18.54C6.09001 18.24 5.77001 17.52 5.88001 16.94L7.60001 8.37C7.62001 8.29 7.65001 8.2 7.69001 8.1L7.85001 8.5L12.58 21.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.7298 18.54L13.4098 21.57C13.2298 21.68 12.9998 21.74 12.7598 21.75L17.4798 8.52L17.6498 8.09C17.6898 8.19 17.7198 8.29 17.7398 8.37L19.4598 16.94C19.5698 17.52 19.2498 18.24 18.7298 18.54Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.95004 20.31C10.12 20.79 9.60003 21.23 9.16003 20.97L6.01004 19.18C5.44004 18.85 5.09005 18.06 5.21005 17.42L6.15005 12.75C6.26005 12.2 7.02005 12.15 7.21005 12.67L9.95004 20.31Z" fill="none" /><path d="M19.3297 19.18L16.1697 20.98C15.7297 21.23 15.2097 20.8 15.3797 20.32L18.1297 12.61C18.3197 12.09 19.0797 12.14 19.1897 12.69L20.1397 17.42C20.2497 18.06 19.8997 18.85 19.3297 19.18Z" fill="none" /><path d="M17.7499 7.32001C17.9899 7.62001 18.0599 8.02001 17.9299 8.38001L13.1899 21.63C13.0199 22.12 12.3299 22.12 12.1599 21.63L7.41992 8.39001C7.28992 8.03001 7.35991 7.63001 7.59991 7.33001L11.4199 2.63001C12.1099 1.80001 13.2499 1.80001 13.9499 2.63001L17.7499 7.32001Z" fill="none" /></svg> 
      )}
    </>
  );
};

export default IconEosEos;