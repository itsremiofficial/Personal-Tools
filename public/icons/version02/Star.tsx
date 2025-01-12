import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconStar: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0599 5.21L17.4699 8.02999C17.6599 8.41999 18.1699 8.78999 18.5999 8.86999L21.1499 9.28999C22.7799 9.55999 23.1599 10.74 21.9899 11.92L19.9999 13.91C19.6699 14.24 19.4799 14.89 19.5899 15.36L20.1599 17.82C20.6099 19.76 19.5699 20.52 17.8599 19.5L15.4699 18.08C15.0399 17.82 14.3199 17.82 13.8899 18.08L11.4999 19.5C9.78986 20.51 8.74987 19.76 9.19987 17.82L9.76988 15.36C9.87988 14.9 9.68987 14.25 9.35987 13.91L7.36988 11.92C6.19988 10.75 6.57988 9.56999 8.20988 9.28999L10.7599 8.86999C11.1899 8.79999 11.6999 8.41999 11.8899 8.02999L13.2999 5.21C14.0499 3.68 15.2899 3.68 16.0599 5.21Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.66992 5H2.66992" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5.66992 19H2.66992" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3.66992 12H2.66992" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0599 5.21L17.4699 8.03C17.6599 8.42 18.1699 8.79 18.5999 8.87L21.1499 9.29C22.7799 9.56 23.1599 10.74 21.9899 11.92L19.9999 13.91C19.6699 14.24 19.4799 14.89 19.5899 15.36L20.1599 17.82C20.6099 19.76 19.5699 20.52 17.8599 19.5L15.4699 18.08C15.0399 17.82 14.3199 17.82 13.8899 18.08L11.4999 19.5C9.78986 20.51 8.74987 19.76 9.19987 17.82L9.76988 15.36C9.87988 14.9 9.68987 14.25 9.35987 13.91L7.36988 11.92C6.19988 10.75 6.57988 9.57 8.20988 9.29L10.7599 8.87C11.1899 8.8 11.6999 8.42 11.8899 8.03L13.2999 5.21C14.0499 3.68 15.2899 3.68 16.0599 5.21Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M8.66992 5.75H2.66992C2.25992 5.75 1.91992 5.41 1.91992 5C1.91992 4.59 2.25992 4.25 2.66992 4.25H8.66992C9.07992 4.25 9.41992 4.59 9.41992 5C9.41992 5.41 9.07992 5.75 8.66992 5.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M5.66992 19.75H2.66992C2.25992 19.75 1.91992 19.41 1.91992 19C1.91992 18.59 2.25992 18.25 2.66992 18.25H5.66992C6.07992 18.25 6.41992 18.59 6.41992 19C6.41992 19.41 6.07992 19.75 5.66992 19.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M3.66992 12.75H2.66992C2.25992 12.75 1.91992 12.41 1.91992 12C1.91992 11.59 2.25992 11.25 2.66992 11.25H3.66992C4.07992 11.25 4.41992 11.59 4.41992 12C4.41992 12.41 4.07992 12.75 3.66992 12.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0604 5.20979L17.4704 8.02979C17.6604 8.41979 18.1704 8.78979 18.6004 8.86979L21.1504 9.28979C22.7804 9.55979 23.1604 10.7398 21.9904 11.9198L20.0004 13.9098C19.6704 14.2398 19.4804 14.8898 19.5904 15.3598L20.1604 17.8198C20.6104 19.7598 19.5704 20.5198 17.8604 19.4998L15.4704 18.0798C15.0404 17.8198 14.3204 17.8198 13.8904 18.0798L11.5004 19.4998C9.79035 20.5098 8.75035 19.7598 9.20035 17.8198L9.77035 15.3598C9.86035 14.8798 9.67035 14.2298 9.34035 13.8998L7.35035 11.9098C6.18035 10.7398 6.56035 9.55979 8.19035 9.27979L10.7404 8.85979C11.1704 8.78979 11.6804 8.40979 11.8704 8.01979L13.2804 5.19979C14.0504 3.67979 15.2904 3.67979 16.0604 5.20979Z" fill="currentColor" /><path d="M8.66992 5.75H2.66992C2.25992 5.75 1.91992 5.41 1.91992 5C1.91992 4.59 2.25992 4.25 2.66992 4.25H8.66992C9.07992 4.25 9.41992 4.59 9.41992 5C9.41992 5.41 9.07992 5.75 8.66992 5.75Z" fill="currentColor" /><path d="M5.66992 19.75H2.66992C2.25992 19.75 1.91992 19.41 1.91992 19C1.91992 18.59 2.25992 18.25 2.66992 18.25H5.66992C6.07992 18.25 6.41992 18.59 6.41992 19C6.41992 19.41 6.07992 19.75 5.66992 19.75Z" fill="currentColor" /><path d="M3.66992 12.75H2.66992C2.25992 12.75 1.91992 12.41 1.91992 12C1.91992 11.59 2.25992 11.25 2.66992 11.25H3.66992C4.07992 11.25 4.41992 11.59 4.41992 12C4.41992 12.41 4.07992 12.75 3.66992 12.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconStar;