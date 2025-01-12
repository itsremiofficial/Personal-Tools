import { FC } from 'react';

const IconLinkCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 12.0005C14 15.3142 11.3137 18.0005 8 18.0005C4.68629 18.0005 2 15.3142 2 12.0005C2 8.68678 4.68629 6.00049 8 6.00049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M10 12.0005C10 8.68678 12.6863 6.00049 16 6.00049C19.3137 6.00049 22 8.68678 22 12.0005C22 15.3142 19.3137 18.0005 16 18.0005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M3.46447 20.536C4.92893 22.0005 7.28595 22.0005 12 22.0005C16.714 22.0005 19.0711 22.0005 20.5355 20.536C22 19.0716 22 16.7145 22 12.0005C22 7.28644 22 4.92942 20.5355 3.46495C19.0711 2.00049 16.714 2.00049 12 2.00049C7.28595 2.00049 4.92893 2.00049 3.46447 3.46495C2 4.92942 2 7.28644 2 12.0005C2 16.7145 2 19.0716 3.46447 20.536Z" fill="currentColor" /><path d="M9.5 8.75049C7.70507 8.75049 6.25 10.2056 6.25 12.0005C6.25 13.7954 7.70507 15.2505 9.5 15.2505C11.2949 15.2505 12.75 13.7954 12.75 12.0005C12.75 11.5863 13.0858 11.2505 13.5 11.2505C13.9142 11.2505 14.25 11.5863 14.25 12.0005C14.25 14.6238 12.1234 16.7505 9.5 16.7505C6.87665 16.7505 4.75 14.6238 4.75 12.0005C4.75 9.37714 6.87665 7.25049 9.5 7.25049C9.91421 7.25049 10.25 7.58627 10.25 8.00049C10.25 8.4147 9.91421 8.75049 9.5 8.75049Z" fill="currentColor" /><path d="M17.75 12.0005C17.75 13.7954 16.2949 15.2505 14.5 15.2505C14.0858 15.2505 13.75 15.5863 13.75 16.0005C13.75 16.4147 14.0858 16.7505 14.5 16.7505C17.1234 16.7505 19.25 14.6238 19.25 12.0005C19.25 9.37714 17.1234 7.25049 14.5 7.25049C11.8766 7.25049 9.75 9.37714 9.75 12.0005C9.75 12.4147 10.0858 12.7505 10.5 12.7505C10.9142 12.7505 11.25 12.4147 11.25 12.0005C11.25 10.2056 12.7051 8.75049 14.5 8.75049C16.2949 8.75049 17.75 10.2056 17.75 12.0005Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.46447 20.536C4.92893 22.0005 7.28595 22.0005 12 22.0005C16.714 22.0005 19.0711 22.0005 20.5355 20.536C22 19.0716 22 16.7145 22 12.0005C22 7.28644 22 4.92942 20.5355 3.46495C19.0711 2.00049 16.714 2.00049 12 2.00049C7.28595 2.00049 4.92893 2.00049 3.46447 3.46495C2 4.92942 2 7.28644 2 12.0005C2 16.7145 2 19.0716 3.46447 20.536ZM9.5 8.75049C7.70507 8.75049 6.25 10.2056 6.25 12.0005C6.25 13.7954 7.70507 15.2505 9.5 15.2505C11.2949 15.2505 12.75 13.7954 12.75 12.0005C12.75 11.5863 13.0858 11.2505 13.5 11.2505C13.9142 11.2505 14.25 11.5863 14.25 12.0005C14.25 14.6238 12.1234 16.7505 9.5 16.7505C6.87665 16.7505 4.75 14.6238 4.75 12.0005C4.75 9.37714 6.87665 7.25049 9.5 7.25049C9.91421 7.25049 10.25 7.58627 10.25 8.00049C10.25 8.4147 9.91421 8.75049 9.5 8.75049ZM17.75 12.0005C17.75 13.7954 16.2949 15.2505 14.5 15.2505C14.0858 15.2505 13.75 15.5863 13.75 16.0005C13.75 16.4147 14.0858 16.7505 14.5 16.7505C17.1234 16.7505 19.25 14.6238 19.25 12.0005C19.25 9.37714 17.1234 7.25049 14.5 7.25049C11.8766 7.25049 9.75 9.37714 9.75 12.0005C9.75 12.4147 10.0858 12.7505 10.5 12.7505C10.9142 12.7505 11.25 12.4147 11.25 12.0005C11.25 10.2056 12.7051 8.75049 14.5 8.75049C16.2949 8.75049 17.75 10.2056 17.75 12.0005Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLinkCircle as IconComponent).keywords = [
  "link",
  "circle",
  "linkup",
  "connection",
  "nexus",
  "connexion",
  "connectedness",
  "connect",
  "tie-in",
  "unite",
  "associate",
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

export default IconLinkCircle as IconComponent;