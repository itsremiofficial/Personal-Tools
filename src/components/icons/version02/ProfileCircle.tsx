import { FC } from 'react';

const IconProfileCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.7901 12.78C12.7201 12.77 12.6301 12.77 12.5501 12.78C10.7901 12.72 9.39014 11.28 9.39014 9.50998C9.39014 7.69998 10.8501 6.22998 12.6701 6.22998C14.4801 6.22998 15.9501 7.69998 15.9501 9.50998C15.9401 11.28 14.5501 12.72 12.7901 12.78Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M19.4097 19.3801C17.6297 21.0101 15.2697 22.0001 12.6697 22.0001C10.0697 22.0001 7.70969 21.0101 5.92969 19.3801C6.02969 18.4401 6.62969 17.5201 7.69969 16.8001C10.4397 14.9801 14.9197 14.9801 17.6397 16.8001C18.7097 17.5201 19.3097 18.4401 19.4097 19.3801Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22.01C18.1928 22.01 22.6699 17.5329 22.6699 12.01C22.6699 6.48716 18.1928 2.01001 12.6699 2.01001C7.14707 2.01001 2.66992 6.48716 2.66992 12.01C2.66992 17.5329 7.14707 22.01 12.6699 22.01Z" fill="currentColor" /><path d="M12.6699 6.93994C10.5999 6.93994 8.91992 8.61994 8.91992 10.6899C8.91992 12.7199 10.5099 14.3699 12.6199 14.4299C12.6499 14.4299 12.6899 14.4299 12.7099 14.4299C12.7299 14.4299 12.7599 14.4299 12.7799 14.4299C12.7899 14.4299 12.7999 14.4299 12.7999 14.4299C14.8199 14.3599 16.4099 12.7199 16.4199 10.6899C16.4199 8.61994 14.7399 6.93994 12.6699 6.93994Z" fill="currentColor" /><path d="M19.4501 19.36C17.6701 21 15.2901 22.01 12.6701 22.01C10.0501 22.01 7.67014 21 5.89014 19.36C6.13014 18.45 6.78014 17.62 7.73014 16.98C10.4601 15.16 14.9001 15.16 17.6101 16.98C18.5701 17.62 19.2101 18.45 19.4501 19.36Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6699 12C22.6699 6.49 18.1799 2 12.6699 2C7.15992 2 2.66992 6.49 2.66992 12C2.66992 14.9 3.91992 17.51 5.89992 19.34C5.89992 19.35 5.89992 19.35 5.88992 19.36C5.98992 19.46 6.10992 19.54 6.20992 19.63C6.26992 19.68 6.31992 19.73 6.37992 19.77C6.55992 19.92 6.75992 20.06 6.94992 20.2C7.01992 20.25 7.07992 20.29 7.14992 20.34C7.33992 20.47 7.53992 20.59 7.74992 20.7C7.81992 20.74 7.89992 20.79 7.96992 20.83C8.16992 20.94 8.37992 21.04 8.59992 21.13C8.67992 21.17 8.75992 21.21 8.83992 21.24C9.05992 21.33 9.27992 21.41 9.49992 21.48C9.57992 21.51 9.65992 21.54 9.73992 21.56C9.97992 21.63 10.2199 21.69 10.4599 21.75C10.5299 21.77 10.5999 21.79 10.6799 21.8C10.9599 21.86 11.2399 21.9 11.5299 21.93C11.5699 21.93 11.6099 21.94 11.6499 21.95C11.9899 21.98 12.3299 22 12.6699 22C13.0099 22 13.3499 21.98 13.6799 21.95C13.7199 21.95 13.7599 21.94 13.7999 21.93C14.0899 21.9 14.3699 21.86 14.6499 21.8C14.7199 21.79 14.7899 21.76 14.8699 21.75C15.1099 21.69 15.3599 21.64 15.5899 21.56C15.6699 21.53 15.7499 21.5 15.8299 21.48C16.0499 21.4 16.2799 21.33 16.4899 21.24C16.5699 21.21 16.6499 21.17 16.7299 21.13C16.9399 21.04 17.1499 20.94 17.3599 20.83C17.4399 20.79 17.5099 20.74 17.5799 20.7C17.7799 20.58 17.9799 20.47 18.1799 20.34C18.2499 20.3 18.3099 20.25 18.3799 20.2C18.5799 20.06 18.7699 19.92 18.9499 19.77C19.0099 19.72 19.0599 19.67 19.1199 19.63C19.2299 19.54 19.3399 19.45 19.4399 19.36C19.4399 19.35 19.4399 19.35 19.4299 19.34C21.4199 17.51 22.6699 14.9 22.6699 12ZM17.6099 16.97C14.8999 15.15 10.4599 15.15 7.72992 16.97C7.28992 17.26 6.92992 17.6 6.62992 17.97C5.10992 16.43 4.16992 14.32 4.16992 12C4.16992 7.31 7.97992 3.5 12.6699 3.5C17.3599 3.5 21.1699 7.31 21.1699 12C21.1699 14.32 20.2299 16.43 18.7099 17.97C18.4199 17.6 18.0499 17.26 17.6099 16.97Z" fill="currentColor" /><path d="M12.6699 6.92993C10.5999 6.92993 8.91992 8.60993 8.91992 10.6799C8.91992 12.7099 10.5099 14.3599 12.6199 14.4199C12.6499 14.4199 12.6899 14.4199 12.7099 14.4199C12.7299 14.4199 12.7599 14.4199 12.7799 14.4199C12.7899 14.4199 12.7999 14.4199 12.7999 14.4199C14.8199 14.3499 16.4099 12.7099 16.4199 10.6799C16.4199 8.60993 14.7399 6.92993 12.6699 6.92993Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconProfileCircle as IconComponent).keywords = [
  "profile",
  "circle",
  "outline",
  "image",
  "description",
  "img",
  "sketch",
  "contour",
  "structure",
  "effigy",
  "template",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle"
];

export default IconProfileCircle as IconComponent;