import { FC } from 'react';

const IconPolygonMatic: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 12.1L8.16992 14.7L3.66992 12.1V6.9L8.16992 4.3L12.6699 6.9V8.47" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 12.1L17.1699 9.5L21.6699 12.1V17.29L17.1699 19.89L12.6699 17.29V15.64" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path d="M22.0502 11.45L17.5502 8.84999C17.3202 8.71999 17.0302 8.71999 16.8002 8.84999L12.3002 11.45C12.3002 11.45 12.3001 11.46 12.2901 11.46L8.17015 13.84L4.42015 11.67V7.32999L8.17015 5.15999L11.9202 7.32999V8.46999C11.9202 8.87999 12.2602 9.21999 12.6702 9.21999C13.0802 9.21999 13.4202 8.87999 13.4202 8.46999V6.89999C13.4202 6.62999 13.2801 6.37999 13.0401 6.24999L8.54015 3.64999C8.31015 3.51999 8.02015 3.51999 7.79015 3.64999L3.29015 6.24999C3.06015 6.37999 2.91016 6.62999 2.91016 6.89999V12.1C2.91016 12.37 3.05015 12.62 3.29015 12.75L7.79015 15.35C7.91015 15.42 8.04015 15.45 8.17015 15.45C8.30015 15.45 8.43016 15.42 8.55016 15.35L13.0502 12.75C13.0502 12.75 13.0501 12.74 13.0602 12.74L17.1801 10.36L20.9301 12.53V16.86L17.1801 19.03L13.4301 16.86V15.64C13.4301 15.23 13.0901 14.89 12.6801 14.89C12.2701 14.89 11.9301 15.23 11.9301 15.64V17.29C11.9301 17.56 12.0702 17.81 12.3102 17.94L16.8102 20.54C16.9302 20.61 17.0602 20.64 17.1902 20.64C17.3202 20.64 17.4501 20.61 17.5701 20.54L22.0701 17.94C22.3001 17.81 22.4501 17.56 22.4501 17.29V12.09C22.4201 11.83 22.2802 11.58 22.0502 11.45Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M5.16992 8.34995V10.6599C5.16992 11.0199 5.35992 11.3499 5.66992 11.5299L7.66992 12.6799C7.97992 12.8599 8.35992 12.8599 8.66992 12.6799L10.6699 11.5299C10.9799 11.3499 11.1699 11.0199 11.1699 10.6599V8.34995C11.1699 7.98995 10.9799 7.65995 10.6699 7.47995L8.66992 6.32995C8.35992 6.14995 7.97992 6.14995 7.66992 6.32995L5.66992 7.47995C5.35992 7.65995 5.16992 7.98995 5.16992 8.34995Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.1699 13.55V15.86C14.1699 16.22 14.3599 16.55 14.6699 16.73L16.6699 17.88C16.9799 18.06 17.3599 18.06 17.6699 17.88L19.6699 16.73C19.9799 16.55 20.1699 16.22 20.1699 15.86V13.55C20.1699 13.19 19.9799 12.86 19.6699 12.68L17.6699 11.53C17.3599 11.35 16.9799 11.35 16.6699 11.53L14.6699 12.68C14.3599 12.86 14.1699 13.19 14.1699 13.55Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0502 11.45L17.5502 8.84999C17.3202 8.71999 17.0302 8.71999 16.8002 8.84999L12.3002 11.45C12.3002 11.45 12.3001 11.46 12.2901 11.46L8.17015 13.84L4.42015 11.67V7.33999L8.17015 5.16999L11.9202 7.33999V8.47999C11.9202 8.88999 12.2602 9.22999 12.6702 9.22999C13.0802 9.22999 13.4202 8.88999 13.4202 8.47999V6.89999C13.4202 6.62999 13.2801 6.37999 13.0401 6.24999L8.54015 3.64999C8.31015 3.51999 8.02015 3.51999 7.79015 3.64999L3.29015 6.24999C3.06015 6.37999 2.91016 6.62999 2.91016 6.89999V12.1C2.91016 12.37 3.05015 12.62 3.29015 12.75L7.79015 15.35C7.91015 15.42 8.04015 15.45 8.17015 15.45C8.30015 15.45 8.43016 15.42 8.55016 15.35L13.0502 12.75C13.0502 12.75 13.0501 12.74 13.0602 12.74L17.1801 10.36L20.9301 12.53V16.86L17.1801 19.03L13.4301 16.86V15.64C13.4301 15.23 13.0901 14.89 12.6801 14.89C12.2701 14.89 11.9301 15.23 11.9301 15.64V17.29C11.9301 17.56 12.0702 17.81 12.3102 17.94L16.8102 20.54C16.9302 20.61 17.0602 20.64 17.1902 20.64C17.3202 20.64 17.4501 20.61 17.5701 20.54L22.0701 17.94C22.3001 17.81 22.4501 17.56 22.4501 17.29V12.09C22.4201 11.83 22.2802 11.58 22.0502 11.45Z" fill="none" /><path d="M5.16992 8.35V10.66C5.16992 11.02 5.35992 11.35 5.66992 11.53L7.66992 12.68C7.97992 12.86 8.35992 12.86 8.66992 12.68L10.6699 11.53C10.9799 11.35 11.1699 11.02 11.1699 10.66V8.35C11.1699 7.99 10.9799 7.66001 10.6699 7.48001L8.66992 6.33001C8.35992 6.15001 7.97992 6.15001 7.66992 6.33001L5.66992 7.48001C5.35992 7.66001 5.16992 7.99 5.16992 8.35Z" fill="none" /><path d="M14.1699 13.55V15.86C14.1699 16.22 14.3599 16.55 14.6699 16.73L16.6699 17.88C16.9799 18.06 17.3599 18.06 17.6699 17.88L19.6699 16.73C19.9799 16.55 20.1699 16.22 20.1699 15.86V13.55C20.1699 13.19 19.9799 12.86 19.6699 12.68L17.6699 11.53C17.3599 11.35 16.9799 11.35 16.6699 11.53L14.6699 12.68C14.3599 12.86 14.1699 13.19 14.1699 13.55Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPolygonMatic as IconComponent).keywords = [
  "polygon",
  "matic",
  "polygonal shape",
  "circle",
  "pentagon",
  "ground",
  "range",
  "overlay",
  "closure",
  "park",
  "firing",
  "veg",
  "hydra",
  "strat",
  "matics",
  "thetic",
  "tical",
  "tating",
  "tated",
  "netic"
];

export default IconPolygonMatic as IconComponent;