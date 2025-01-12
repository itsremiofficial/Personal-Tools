import { FC } from 'react';

const IconColorSwatch: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6699 4.5V18C10.6699 19.08 10.2299 20.07 9.52991 20.79L9.48993 20.83C9.39993 20.92 9.29993 21.01 9.20993 21.08C8.90993 21.34 8.56991 21.54 8.21991 21.68C8.10991 21.73 7.99992 21.77 7.88992 21.81C7.49992 21.94 7.07992 22 6.66992 22C6.39992 22 6.12993 21.97 5.86993 21.92C5.73993 21.89 5.60992 21.86 5.47992 21.82C5.31992 21.77 5.16993 21.72 5.01993 21.65C5.01993 21.64 5.01992 21.64 5.00992 21.65C4.72992 21.51 4.45993 21.35 4.20993 21.16L4.19992 21.15C4.06992 21.05 3.94994 20.95 3.83994 20.83C3.72994 20.71 3.61992 20.59 3.50992 20.46C3.31992 20.21 3.15993 19.94 3.01993 19.66C3.02993 19.65 3.02993 19.65 3.01993 19.65C3.01993 19.65 3.01992 19.64 3.00992 19.63C2.94992 19.49 2.89991 19.34 2.84991 19.19C2.80991 19.06 2.77991 18.93 2.74991 18.8C2.69991 18.54 2.66992 18.27 2.66992 18V4.5C2.66992 3 3.66992 2 5.16992 2H8.16992C9.66992 2 10.6699 3 10.6699 4.5Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22.6699 16.5V19.5C22.6699 21 21.6699 22 20.1699 22H6.66992C7.07992 22 7.49992 21.94 7.88992 21.81C7.99992 21.77 8.10991 21.73 8.21991 21.68C8.56991 21.54 8.90993 21.34 9.20993 21.08C9.29993 21.01 9.39993 20.92 9.48993 20.83L9.52991 20.79L16.3299 14H20.1699C21.6699 14 22.6699 15 22.6699 16.5Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M5.47961 21.8199C4.87961 21.6399 4.30963 21.3099 3.83963 20.8299C3.35963 20.3599 3.02961 19.7899 2.84961 19.1899C3.23961 20.4399 4.22961 21.4299 5.47961 21.8199Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M19.0403 11.2899L16.3303 14L9.53027 20.7899C10.2303 20.0699 10.6703 19.08 10.6703 18V8.33995L13.3803 5.62996C14.4403 4.56996 15.8603 4.56996 16.9203 5.62996L19.0403 7.74996C20.1003 8.80996 20.1003 10.2299 19.0403 11.2899Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.66992 19C7.22221 19 7.66992 18.5523 7.66992 18C7.66992 17.4477 7.22221 17 6.66992 17C6.11764 17 5.66992 17.4477 5.66992 18C5.66992 18.5523 6.11764 19 6.66992 19Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6699 16.5V19.5C22.6699 21 21.6699 22 20.1699 22H6.66992C7.07992 22 7.49992 21.94 7.88992 21.81C7.99992 21.77 8.10991 21.73 8.21991 21.68C8.56991 21.54 8.90993 21.34 9.20993 21.08C9.29993 21.01 9.39993 20.92 9.48993 20.83L9.52991 20.79L16.3299 14H20.1699C21.6699 14 22.6699 15 22.6699 16.5Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M19.0403 11.29L16.3303 14L9.53027 20.79C10.2303 20.07 10.6703 19.08 10.6703 18V8.33996L13.3803 5.62996C14.4403 4.56996 15.8603 4.56996 16.9203 5.62996L19.0403 7.74996C20.1003 8.80996 20.1003 10.23 19.0403 11.29Z" fill="currentColor" /><path d="M8.16992 2H5.16992C3.66992 2 2.66992 3 2.66992 4.5V18C2.66992 18.27 2.69991 18.54 2.74991 18.8C2.77991 18.93 2.80991 19.06 2.84991 19.19C2.89991 19.34 2.94992 19.49 3.00992 19.63C3.01992 19.64 3.01993 19.65 3.01993 19.65C3.02993 19.65 3.02993 19.65 3.01993 19.66C3.15993 19.94 3.31992 20.21 3.50992 20.46C3.61992 20.59 3.72994 20.71 3.83994 20.83C3.94994 20.95 4.06992 21.05 4.19992 21.15L4.20993 21.16C4.45993 21.35 4.72992 21.51 5.00992 21.65C5.01992 21.64 5.01993 21.64 5.01993 21.65C5.16993 21.72 5.31992 21.77 5.47992 21.82C5.60992 21.86 5.73993 21.89 5.86993 21.92C6.12993 21.97 6.39992 22 6.66992 22C7.07992 22 7.49992 21.94 7.88992 21.81C7.99992 21.77 8.10991 21.73 8.21991 21.68C8.56991 21.54 8.90993 21.34 9.20993 21.08C9.29993 21.01 9.39993 20.92 9.48993 20.83L9.52991 20.79C10.2299 20.07 10.6699 19.08 10.6699 18V4.5C10.6699 3 9.66992 2 8.16992 2ZM6.66992 19.5C5.83992 19.5 5.16992 18.83 5.16992 18C5.16992 17.17 5.83992 16.5 6.66992 16.5C7.49992 16.5 8.16992 17.17 8.16992 18C8.16992 18.83 7.49992 19.5 6.66992 19.5Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6698 16.5V19.5C22.6698 20.88 21.5498 22 20.1698 22H13.0298C12.1398 22 11.6998 20.93 12.3198 20.3L18.1898 14.3C18.3798 14.11 18.6398 14 18.8998 14H20.1698C21.5498 14 22.6698 15.12 22.6698 16.5Z" fill="currentColor" /><path d="M19.0402 11.29L16.3302 14L13.8702 16.45C13.2402 17.08 12.1602 16.64 12.1602 15.75C12.1602 12.54 12.1602 7.26002 12.1602 7.26002C12.1602 6.99002 12.2702 6.74002 12.4502 6.55002L13.3702 5.63002C14.3502 4.65002 15.9302 4.65002 16.9102 5.63002L19.0302 7.75002C20.0202 8.73002 20.0202 10.31 19.0402 11.29Z" fill="currentColor" /><path d="M8.16992 2H5.16992C3.66992 2 2.66992 3 2.66992 4.5V18C2.66992 18.27 2.69992 18.54 2.74992 18.8C2.77992 18.93 2.80992 19.06 2.84992 19.19C2.89992 19.34 2.94992 19.49 3.00992 19.63C3.01992 19.64 3.01992 19.65 3.01992 19.65C3.02992 19.65 3.02992 19.65 3.01992 19.66C3.15992 19.94 3.31992 20.21 3.50992 20.46C3.61992 20.59 3.72992 20.71 3.83992 20.83C3.94992 20.95 4.06992 21.05 4.19992 21.15L4.20992 21.16C4.45992 21.35 4.72992 21.51 5.00992 21.65C5.01992 21.64 5.01992 21.64 5.01992 21.65C5.16992 21.72 5.31992 21.77 5.47992 21.82C5.60992 21.86 5.73992 21.89 5.86992 21.92C6.12992 21.97 6.39992 22 6.66992 22C7.07992 22 7.49992 21.94 7.88992 21.81C7.99992 21.77 8.10992 21.73 8.21992 21.68C8.56992 21.54 8.90992 21.34 9.20992 21.08C9.29992 21.01 9.39992 20.92 9.48992 20.83L9.52992 20.79C10.2299 20.07 10.6699 19.08 10.6699 18V4.5C10.6699 3 9.66992 2 8.16992 2ZM6.66992 19.5C5.83992 19.5 5.16992 18.83 5.16992 18C5.16992 17.17 5.83992 16.5 6.66992 16.5C7.49992 16.5 8.16992 17.17 8.16992 18C8.16992 18.83 7.49992 19.5 6.66992 19.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconColorSwatch as IconComponent).keywords = [
  "color",
  "swatch",
  "panchromatic",
  "colouring",
  "colour in",
  "color in",
  "gloss",
  "semblance",
  "colour",
  "vividness",
  "emblazon",
  "sampler",
  "sample",
  "shows",
  "swatches",
  "skein",
  "yarn",
  "palette",
  "eyeshadow",
  "shade"
];

export default IconColorSwatch as IconComponent;