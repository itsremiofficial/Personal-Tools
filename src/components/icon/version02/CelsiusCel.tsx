import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCelsiusCel: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17 15.28C16.01 16.59 14.43 17.43 12.67 17.43C9.66998 17.43 7.22998 15 7.22998 11.99C7.22998 8.98001 9.65998 6.55 12.67 6.55C13.9 6.55 15.03 6.96 15.94 7.64" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.0899 11.34C18.7361 11.34 19.2599 10.8162 19.2599 10.17C19.2599 9.52382 18.7361 9 18.0899 9C17.4437 9 16.9199 9.52382 16.9199 10.17C16.9199 10.8162 17.4437 11.34 18.0899 11.34Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path d="M12.67 18.1901C9.25998 18.1901 6.47998 15.4101 6.47998 12.0001C6.47998 8.59006 9.25998 5.81006 12.67 5.81006C14.02 5.81006 15.31 6.24006 16.39 7.05006C16.72 7.30006 16.79 7.77006 16.54 8.10006C16.29 8.43006 15.82 8.50006 15.49 8.25006C14.67 7.64006 13.7 7.31006 12.67 7.31006C10.09 7.31006 7.97998 9.41006 7.97998 12.0001C7.97998 14.5901 10.08 16.6901 12.67 16.6901C14.15 16.6901 15.51 16.0101 16.41 14.8301C16.66 14.5001 17.13 14.4401 17.46 14.6901C17.79 14.9401 17.85 15.4101 17.6 15.7401C16.42 17.2901 14.62 18.1901 12.67 18.1901Z" fill="currentColor" /><path d="M18.0899 11.34C18.7361 11.34 19.2599 10.8162 19.2599 10.17C19.2599 9.52383 18.7361 9 18.0899 9C17.4437 9 16.9199 9.52383 16.9199 10.17C16.9199 10.8162 17.4437 11.34 18.0899 11.34Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM17.5999 15.74C16.4199 17.3 14.6199 18.19 12.6699 18.19C9.25992 18.19 6.47992 15.41 6.47992 12C6.47992 8.59 9.25992 5.81 12.6699 5.81C14.0199 5.81 15.3099 6.24 16.3899 7.05C16.7199 7.3 16.7899 7.77001 16.5399 8.10001C16.2899 8.43001 15.8199 8.5 15.4899 8.25C14.6699 7.63 13.6999 7.31 12.6699 7.31C10.0899 7.31 7.97992 9.41 7.97992 12C7.97992 14.59 10.0799 16.69 12.6699 16.69C14.1499 16.69 15.5099 16.01 16.4099 14.83C16.6599 14.5 17.1299 14.44 17.4599 14.69C17.7899 14.94 17.8499 15.41 17.5999 15.74ZM18.0899 11.34C17.4399 11.34 16.9199 10.82 16.9199 10.17C16.9199 9.52 17.4399 9 18.0899 9C18.7399 9 19.2599 9.52 19.2599 10.17C19.2599 10.82 18.7399 11.34 18.0899 11.34Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCelsiusCel as IconComponentType).keywords = [
  "celsius",
  "cel",
  "centigrade",
  "fahrenheit",
  "temperature",
  "percentage",
  "apr",
  "zero",
  "centenary",
  "centigrades",
  "objective",
  "olc",
  "aim",
  "sill",
  "target",
  "goal",
  "deluge",
  "seale",
  "celle"
];

export default IconCelsiusCel as IconComponentType;