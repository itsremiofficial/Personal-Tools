import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCardanoAda: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.4199 10C14.9722 10 15.4199 9.55228 15.4199 9C15.4199 8.44772 14.9722 8 14.4199 8C13.8676 8 13.4199 8.44772 13.4199 9C13.4199 9.55228 13.8676 10 14.4199 10Z" stroke="currentColor" strokeMiterlimit="10" /><path d="M10.9199 10C11.4722 10 11.9199 9.55228 11.9199 9C11.9199 8.44772 11.4722 8 10.9199 8C10.3676 8 9.91992 8.44772 9.91992 9C9.91992 9.55228 10.3676 10 10.9199 10Z" stroke="currentColor" strokeMiterlimit="10" /><path d="M16.1699 13C16.7222 13 17.1699 12.5523 17.1699 12C17.1699 11.4477 16.7222 11 16.1699 11C15.6176 11 15.1699 11.4477 15.1699 12C15.1699 12.5523 15.6176 13 16.1699 13Z" stroke="currentColor" strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M17.8198 9.75C18.234 9.75 18.5698 9.41421 18.5698 9C18.5698 8.58579 18.234 8.25 17.8198 8.25C17.4056 8.25 17.0698 8.58579 17.0698 9C17.0698 9.41421 17.4056 9.75 17.8198 9.75Z" stroke="currentColor" strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M17.8198 15.75C18.234 15.75 18.5698 15.4142 18.5698 15C18.5698 14.5858 18.234 14.25 17.8198 14.25C17.4056 14.25 17.0698 14.5858 17.0698 15C17.0698 15.4142 17.4056 15.75 17.8198 15.75Z" stroke="currentColor" strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M20.4199 12.75C20.8341 12.75 21.1699 12.4142 21.1699 12C21.1699 11.5858 20.8341 11.25 20.4199 11.25C20.0057 11.25 19.6699 11.5858 19.6699 12C19.6699 12.4142 20.0057 12.75 20.4199 12.75Z" stroke="currentColor" strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M7.46973 9.75C7.88394 9.75 8.21973 9.41421 8.21973 9C8.21973 8.58579 7.88394 8.25 7.46973 8.25C7.05551 8.25 6.71973 8.58579 6.71973 9C6.71973 9.41421 7.05551 9.75 7.46973 9.75Z" stroke="currentColor" strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M7.46973 15.75C7.88394 15.75 8.21973 15.4142 8.21973 15C8.21973 14.5858 7.88394 14.25 7.46973 14.25C7.05551 14.25 6.71973 14.5858 6.71973 15C6.71973 15.4142 7.05551 15.75 7.46973 15.75Z" stroke="currentColor" strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M4.87012 12.75C5.28433 12.75 5.62012 12.4142 5.62012 12C5.62012 11.5858 5.28433 11.25 4.87012 11.25C4.4559 11.25 4.12012 11.5858 4.12012 12C4.12012 12.4142 4.4559 12.75 4.87012 12.75Z" stroke="currentColor" strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M16.5698 5.95001C16.984 5.95001 17.3198 5.61423 17.3198 5.20001C17.3198 4.7858 16.984 4.45001 16.5698 4.45001C16.1556 4.45001 15.8198 4.7858 15.8198 5.20001C15.8198 5.61423 16.1556 5.95001 16.5698 5.95001Z" stroke="currentColor" strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M8.77002 5.95001C9.18423 5.95001 9.52002 5.61423 9.52002 5.20001C9.52002 4.7858 9.18423 4.45001 8.77002 4.45001C8.35581 4.45001 8.02002 4.7858 8.02002 5.20001C8.02002 5.61423 8.35581 5.95001 8.77002 5.95001Z" stroke="currentColor" strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M12.7197 6.75C13.1339 6.75 13.4697 6.41421 13.4697 6C13.4697 5.58579 13.1339 5.25 12.7197 5.25C12.3055 5.25 11.9697 5.58579 11.9697 6C11.9697 6.41421 12.3055 6.75 12.7197 6.75Z" stroke="currentColor" strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M16.5698 19.75C16.984 19.75 17.3198 19.4142 17.3198 19C17.3198 18.5858 16.984 18.25 16.5698 18.25C16.1556 18.25 15.8198 18.5858 15.8198 19C15.8198 19.4142 16.1556 19.75 16.5698 19.75Z" stroke="currentColor" strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M8.77002 19.75C9.18423 19.75 9.52002 19.4142 9.52002 19C9.52002 18.5858 9.18423 18.25 8.77002 18.25C8.35581 18.25 8.02002 18.5858 8.02002 19C8.02002 19.4142 8.35581 19.75 8.77002 19.75Z" stroke="currentColor" strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M12.7197 18.95C13.1339 18.95 13.4697 18.6142 13.4697 18.2C13.4697 17.7858 13.1339 17.45 12.7197 17.45C12.3055 17.45 11.9697 17.7858 11.9697 18.2C11.9697 18.6142 12.3055 18.95 12.7197 18.95Z" stroke="currentColor" strokeMiterlimit="10" /><path d="M9.16992 13C9.72221 13 10.1699 12.5523 10.1699 12C10.1699 11.4477 9.72221 11 9.16992 11C8.61764 11 8.16992 11.4477 8.16992 12C8.16992 12.5523 8.61764 13 9.16992 13Z" stroke="currentColor" strokeMiterlimit="10" /><path d="M10.9199 16C11.4722 16 11.9199 15.5523 11.9199 15C11.9199 14.4477 11.4722 14 10.9199 14C10.3676 14 9.91992 14.4477 9.91992 15C9.91992 15.5523 10.3676 16 10.9199 16Z" stroke="currentColor" strokeMiterlimit="10" /><path d="M14.4199 16C14.9722 16 15.4199 15.5523 15.4199 15C15.4199 14.4477 14.9722 14 14.4199 14C13.8676 14 13.4199 14.4477 13.4199 15C13.4199 15.5523 13.8676 16 14.4199 16Z" stroke="currentColor" strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 2.45001V2.45001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.1699 2.84998V2.84998" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.1699 21.2V21.2" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.6699 16.5V16.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.6699 7V7" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.66992 16.5V16.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.66992 7V7" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.16992 2.84998V2.84998" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.16992 21.2V21.2" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 21.5V21.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2.21973 12V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M23.1699 12V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><g opacity={duotone ? "0.6" : "1"}><path opacity={duotone ? "0.6" : "1"} d="M17.8203 10C18.3726 10 18.8203 9.55228 18.8203 9C18.8203 8.44772 18.3726 8 17.8203 8C17.268 8 16.8203 8.44772 16.8203 9C16.8203 9.55228 17.268 10 17.8203 10Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M17.8203 16C18.3726 16 18.8203 15.5523 18.8203 15C18.8203 14.4477 18.3726 14 17.8203 14C17.268 14 16.8203 14.4477 16.8203 15C16.8203 15.5523 17.268 16 17.8203 16Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M20.4199 13C20.9722 13 21.4199 12.5523 21.4199 12C21.4199 11.4477 20.9722 11 20.4199 11C19.8676 11 19.4199 11.4477 19.4199 12C19.4199 12.5523 19.8676 13 20.4199 13Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M7.47021 10C8.0225 10 8.47021 9.55228 8.47021 9C8.47021 8.44772 8.0225 8 7.47021 8C6.91793 8 6.47021 8.44772 6.47021 9C6.47021 9.55228 6.91793 10 7.47021 10Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M7.47021 16C8.0225 16 8.47021 15.5523 8.47021 15C8.47021 14.4477 8.0225 14 7.47021 14C6.91793 14 6.47021 14.4477 6.47021 15C6.47021 15.5523 6.91793 16 7.47021 16Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M4.87012 13C5.4224 13 5.87012 12.5523 5.87012 12C5.87012 11.4477 5.4224 11 4.87012 11C4.31783 11 3.87012 11.4477 3.87012 12C3.87012 12.5523 4.31783 13 4.87012 13Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M16.5703 6.2C17.1226 6.2 17.5703 5.75228 17.5703 5.2C17.5703 4.64771 17.1226 4.2 16.5703 4.2C16.018 4.2 15.5703 4.64771 15.5703 5.2C15.5703 5.75228 16.018 6.2 16.5703 6.2Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M8.77002 6.2C9.3223 6.2 9.77002 5.75228 9.77002 5.2C9.77002 4.64771 9.3223 4.2 8.77002 4.2C8.21774 4.2 7.77002 4.64771 7.77002 5.2C7.77002 5.75228 8.21774 6.2 8.77002 6.2Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M12.7202 7C13.2725 7 13.7202 6.55228 13.7202 6C13.7202 5.44772 13.2725 5 12.7202 5C12.1679 5 11.7202 5.44772 11.7202 6C11.7202 6.55228 12.1679 7 12.7202 7Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M16.5703 20C17.1226 20 17.5703 19.5523 17.5703 19C17.5703 18.4477 17.1226 18 16.5703 18C16.018 18 15.5703 18.4477 15.5703 19C15.5703 19.5523 16.018 20 16.5703 20Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M8.77002 20C9.3223 20 9.77002 19.5523 9.77002 19C9.77002 18.4477 9.3223 18 8.77002 18C8.21774 18 7.77002 18.4477 7.77002 19C7.77002 19.5523 8.21774 20 8.77002 20Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M12.7202 19.2C13.2725 19.2 13.7202 18.7523 13.7202 18.2C13.7202 17.6477 13.2725 17.2 12.7202 17.2C12.1679 17.2 11.7202 17.6477 11.7202 18.2C11.7202 18.7523 12.1679 19.2 12.7202 19.2Z" fill="currentColor" /></g><path d="M14.4199 10.25C15.1103 10.25 15.6699 9.69036 15.6699 9C15.6699 8.30964 15.1103 7.75 14.4199 7.75C13.7296 7.75 13.1699 8.30964 13.1699 9C13.1699 9.69036 13.7296 10.25 14.4199 10.25Z" fill="currentColor" /><path d="M10.9199 10.25C11.6103 10.25 12.1699 9.69036 12.1699 9C12.1699 8.30964 11.6103 7.75 10.9199 7.75C10.2296 7.75 9.66992 8.30964 9.66992 9C9.66992 9.69036 10.2296 10.25 10.9199 10.25Z" fill="currentColor" /><path d="M16.1699 13.25C16.8603 13.25 17.4199 12.6904 17.4199 12C17.4199 11.3096 16.8603 10.75 16.1699 10.75C15.4796 10.75 14.9199 11.3096 14.9199 12C14.9199 12.6904 15.4796 13.25 16.1699 13.25Z" fill="currentColor" /><path d="M9.16992 13.25C9.86028 13.25 10.4199 12.6904 10.4199 12C10.4199 11.3096 9.86028 10.75 9.16992 10.75C8.47957 10.75 7.91992 11.3096 7.91992 12C7.91992 12.6904 8.47957 13.25 9.16992 13.25Z" fill="currentColor" /><path d="M10.9199 16.25C11.6103 16.25 12.1699 15.6904 12.1699 15C12.1699 14.3096 11.6103 13.75 10.9199 13.75C10.2296 13.75 9.66992 14.3096 9.66992 15C9.66992 15.6904 10.2296 16.25 10.9199 16.25Z" fill="currentColor" /><path d="M14.4199 16.25C15.1103 16.25 15.6699 15.6904 15.6699 15C15.6699 14.3096 15.1103 13.75 14.4199 13.75C13.7296 13.75 13.1699 14.3096 13.1699 15C13.1699 15.6904 13.7296 16.25 14.4199 16.25Z" fill="currentColor" /><g opacity={duotone ? "0.4" : "1"}><path opacity={duotone ? "0.4" : "1"} d="M12.67 3.33C12.18 3.33 11.79 2.94 11.79 2.45C11.79 1.96 12.18 1.58 12.67 1.58C13.16 1.58 13.55 1.97 13.55 2.46C13.55 2.95 13.16 3.33 12.67 3.33Z" fill="currentColor" /></g><g opacity={duotone ? "0.4" : "1"}><path opacity={duotone ? "0.4" : "1"} d="M17.9202 3.6C17.5002 3.6 17.1602 3.26 17.1602 2.85C17.1602 2.44 17.5002 2.1 17.9102 2.1C18.3202 2.1 18.6702 2.44 18.6702 2.85C18.6702 3.26 18.3402 3.6 17.9202 3.6Z" fill="currentColor" /></g><g opacity={duotone ? "0.4" : "1"}><path opacity={duotone ? "0.4" : "1"} d="M7.41992 3.6C7.00992 3.6 6.66992 3.26 6.66992 2.85C6.66992 2.44 6.99992 2.1 7.41992 2.1H7.42992C7.83992 2.1 8.17992 2.44 8.17992 2.85C8.17992 3.26 7.83992 3.6 7.41992 3.6Z" fill="currentColor" /></g><g opacity={duotone ? "0.4" : "1"}><path opacity={duotone ? "0.4" : "1"} d="M12.67 22.38C12.18 22.38 11.79 21.99 11.79 21.5C11.79 21.01 12.18 20.62 12.67 20.62C13.16 20.62 13.55 21.01 13.55 21.5C13.55 21.99 13.16 22.38 12.67 22.38Z" fill="currentColor" /></g><g opacity={duotone ? "0.4" : "1"}><path opacity={duotone ? "0.4" : "1"} d="M17.9202 21.85C17.5002 21.85 17.1602 21.51 17.1602 21.1C17.1602 20.69 17.5002 20.35 17.9102 20.35C18.3202 20.35 18.6702 20.69 18.6702 21.1C18.6702 21.51 18.3402 21.85 17.9202 21.85Z" fill="currentColor" /></g><g opacity={duotone ? "0.4" : "1"}><path opacity={duotone ? "0.4" : "1"} d="M7.41992 21.85C7.00992 21.85 6.66992 21.51 6.66992 21.1C6.66992 20.69 6.99992 20.35 7.41992 20.35H7.42992C7.83992 20.35 8.17992 20.69 8.17992 21.1C8.17992 21.51 7.83992 21.85 7.41992 21.85Z" fill="currentColor" /></g><g opacity={duotone ? "0.4" : "1"}><path opacity={duotone ? "0.4" : "1"} d="M2.21984 12.88C1.73984 12.88 1.33984 12.49 1.33984 12.01V12C1.33984 11.52 1.72984 11.12 2.21984 11.12C2.70984 11.12 3.08984 11.51 3.08984 12C3.08984 12.49 2.69984 12.88 2.21984 12.88Z" fill="currentColor" /></g><g opacity={duotone ? "0.4" : "1"}><path opacity={duotone ? "0.4" : "1"} d="M4.41992 17.75C4.00992 17.75 3.66992 17.41 3.66992 17V16.99C3.66992 16.58 4.00992 16.24 4.41992 16.24C4.82992 16.24 5.16992 16.58 5.16992 16.99C5.16992 17.4 4.82992 17.75 4.41992 17.75Z" fill="currentColor" /></g><g opacity={duotone ? "0.4" : "1"}><path opacity={duotone ? "0.4" : "1"} d="M4.41992 7.76C4.00992 7.76 3.66992 7.42 3.66992 7.01C3.66992 6.6 4.00992 6.26 4.41992 6.26C4.82992 6.26 5.16992 6.59 5.16992 7V7.01C5.16992 7.42 4.82992 7.76 4.41992 7.76Z" fill="currentColor" /></g><g opacity={duotone ? "0.4" : "1"}><path opacity={duotone ? "0.4" : "1"} d="M23.17 12.88C22.69 12.88 22.29 12.49 22.29 12.01V12C22.29 11.52 22.68 11.12 23.17 11.12C23.66 11.12 24.05 11.51 24.05 12C24.05 12.49 23.65 12.88 23.17 12.88Z" fill="currentColor" /></g><g opacity={duotone ? "0.4" : "1"}><path opacity={duotone ? "0.4" : "1"} d="M20.9697 17.75C20.5597 17.75 20.2197 17.42 20.2197 17V16.99C20.2197 16.58 20.5597 16.24 20.9697 16.24C21.3797 16.24 21.7197 16.58 21.7197 16.99C21.7197 17.4 21.3797 17.75 20.9697 17.75Z" fill="currentColor" /></g><g opacity={duotone ? "0.4" : "1"}><path opacity={duotone ? "0.4" : "1"} d="M20.9697 7.76C20.5597 7.76 20.2197 7.42 20.2197 7.01C20.2197 6.6 20.5597 6.26 20.9697 6.26C21.3797 6.26 21.7197 6.59 21.7197 7V7.01C21.7197 7.42 21.3797 7.76 20.9697 7.76Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.8203 10C18.3726 10 18.8203 9.55228 18.8203 9C18.8203 8.44772 18.3726 8 17.8203 8C17.268 8 16.8203 8.44772 16.8203 9C16.8203 9.55228 17.268 10 17.8203 10Z" fill="none" /><path d="M17.8203 16C18.3726 16 18.8203 15.5523 18.8203 15C18.8203 14.4477 18.3726 14 17.8203 14C17.268 14 16.8203 14.4477 16.8203 15C16.8203 15.5523 17.268 16 17.8203 16Z" fill="none" /><path d="M20.4199 13C20.9722 13 21.4199 12.5523 21.4199 12C21.4199 11.4477 20.9722 11 20.4199 11C19.8676 11 19.4199 11.4477 19.4199 12C19.4199 12.5523 19.8676 13 20.4199 13Z" fill="none" /><path d="M7.47021 10C8.0225 10 8.47021 9.55228 8.47021 9C8.47021 8.44772 8.0225 8 7.47021 8C6.91793 8 6.47021 8.44772 6.47021 9C6.47021 9.55228 6.91793 10 7.47021 10Z" fill="none" /><path d="M7.47021 16C8.0225 16 8.47021 15.5523 8.47021 15C8.47021 14.4477 8.0225 14 7.47021 14C6.91793 14 6.47021 14.4477 6.47021 15C6.47021 15.5523 6.91793 16 7.47021 16Z" fill="none" /><path d="M4.87012 13C5.4224 13 5.87012 12.5523 5.87012 12C5.87012 11.4477 5.4224 11 4.87012 11C4.31783 11 3.87012 11.4477 3.87012 12C3.87012 12.5523 4.31783 13 4.87012 13Z" fill="none" /><path d="M16.5703 6.2C17.1226 6.2 17.5703 5.75228 17.5703 5.2C17.5703 4.64771 17.1226 4.2 16.5703 4.2C16.018 4.2 15.5703 4.64771 15.5703 5.2C15.5703 5.75228 16.018 6.2 16.5703 6.2Z" fill="none" /><path d="M8.77002 6.2C9.3223 6.2 9.77002 5.75228 9.77002 5.2C9.77002 4.64771 9.3223 4.2 8.77002 4.2C8.21773 4.2 7.77002 4.64771 7.77002 5.2C7.77002 5.75228 8.21773 6.2 8.77002 6.2Z" fill="none" /><path d="M12.7202 7C13.2725 7 13.7202 6.55228 13.7202 6C13.7202 5.44772 13.2725 5 12.7202 5C12.1679 5 11.7202 5.44772 11.7202 6C11.7202 6.55228 12.1679 7 12.7202 7Z" fill="none" /><path d="M16.5703 20C17.1226 20 17.5703 19.5523 17.5703 19C17.5703 18.4477 17.1226 18 16.5703 18C16.018 18 15.5703 18.4477 15.5703 19C15.5703 19.5523 16.018 20 16.5703 20Z" fill="none" /><path d="M8.77002 20C9.3223 20 9.77002 19.5523 9.77002 19C9.77002 18.4477 9.3223 18 8.77002 18C8.21773 18 7.77002 18.4477 7.77002 19C7.77002 19.5523 8.21773 20 8.77002 20Z" fill="none" /><path d="M12.7202 19.2C13.2725 19.2 13.7202 18.7523 13.7202 18.2C13.7202 17.6477 13.2725 17.2 12.7202 17.2C12.1679 17.2 11.7202 17.6477 11.7202 18.2C11.7202 18.7523 12.1679 19.2 12.7202 19.2Z" fill="none" /><path d="M14.4199 10.25C15.1103 10.25 15.6699 9.69036 15.6699 9C15.6699 8.30964 15.1103 7.75 14.4199 7.75C13.7296 7.75 13.1699 8.30964 13.1699 9C13.1699 9.69036 13.7296 10.25 14.4199 10.25Z" fill="none" /><path d="M10.9199 10.25C11.6103 10.25 12.1699 9.69036 12.1699 9C12.1699 8.30964 11.6103 7.75 10.9199 7.75C10.2296 7.75 9.66992 8.30964 9.66992 9C9.66992 9.69036 10.2296 10.25 10.9199 10.25Z" fill="none" /><path d="M16.1699 13.25C16.8603 13.25 17.4199 12.6904 17.4199 12C17.4199 11.3096 16.8603 10.75 16.1699 10.75C15.4796 10.75 14.9199 11.3096 14.9199 12C14.9199 12.6904 15.4796 13.25 16.1699 13.25Z" fill="none" /><path d="M9.16992 13.25C9.86028 13.25 10.4199 12.6904 10.4199 12C10.4199 11.3096 9.86028 10.75 9.16992 10.75C8.47957 10.75 7.91992 11.3096 7.91992 12C7.91992 12.6904 8.47957 13.25 9.16992 13.25Z" fill="none" /><path d="M10.9199 16.25C11.6103 16.25 12.1699 15.6904 12.1699 15C12.1699 14.3096 11.6103 13.75 10.9199 13.75C10.2296 13.75 9.66992 14.3096 9.66992 15C9.66992 15.6904 10.2296 16.25 10.9199 16.25Z" fill="none" /><path d="M14.4199 16.25C15.1103 16.25 15.6699 15.6904 15.6699 15C15.6699 14.3096 15.1103 13.75 14.4199 13.75C13.7296 13.75 13.1699 14.3096 13.1699 15C13.1699 15.6904 13.7296 16.25 14.4199 16.25Z" fill="none" /><path d="M12.67 3.33001C12.18 3.33001 11.79 2.94001 11.79 2.45001C11.79 1.96001 12.18 1.57001 12.67 1.57001C13.16 1.57001 13.55 1.96001 13.55 2.45001C13.55 2.94001 13.16 3.33001 12.67 3.33001Z" fill="none" /><path d="M17.9202 3.60001C17.5002 3.60001 17.1602 3.26001 17.1602 2.85001C17.1602 2.44001 17.5002 2.10001 17.9102 2.10001C18.3202 2.10001 18.6702 2.44001 18.6702 2.85001C18.6702 3.26001 18.3402 3.60001 17.9202 3.60001Z" fill="none" /><path d="M7.41992 3.60001C7.00992 3.60001 6.66992 3.26001 6.66992 2.85001C6.66992 2.44001 6.99992 2.10001 7.41992 2.10001H7.42993C7.83993 2.10001 8.17993 2.44001 8.17993 2.85001C8.17993 3.26001 7.83992 3.60001 7.41992 3.60001Z" fill="none" /><path d="M12.67 22.38C12.18 22.38 11.79 21.99 11.79 21.5C11.79 21.01 12.18 20.62 12.67 20.62C13.16 20.62 13.55 21.01 13.55 21.5C13.55 21.99 13.16 22.38 12.67 22.38Z" fill="none" /><path d="M17.9202 21.85C17.5002 21.85 17.1602 21.51 17.1602 21.1C17.1602 20.69 17.5002 20.35 17.9102 20.35C18.3202 20.35 18.6702 20.69 18.6702 21.1C18.6702 21.51 18.3402 21.85 17.9202 21.85Z" fill="none" /><path d="M7.41992 21.85C7.00992 21.85 6.66992 21.51 6.66992 21.1C6.66992 20.69 6.99992 20.35 7.41992 20.35H7.42993C7.83993 20.35 8.17993 20.69 8.17993 21.1C8.17993 21.51 7.83992 21.85 7.41992 21.85Z" fill="none" /><path d="M2.21982 12.88C1.73982 12.88 1.33984 12.49 1.33984 12.01V12C1.33984 11.52 1.72982 11.12 2.21982 11.12C2.70982 11.12 3.09982 11.51 3.09982 12C3.09982 12.49 2.69982 12.88 2.21982 12.88Z" fill="none" /><path d="M4.41992 17.75C4.00992 17.75 3.66992 17.42 3.66992 17V16.99C3.66992 16.58 4.00992 16.24 4.41992 16.24C4.82992 16.24 5.16992 16.58 5.16992 16.99C5.16992 17.4 4.82992 17.75 4.41992 17.75Z" fill="none" /><path d="M4.41992 7.75999C4.00992 7.75999 3.66992 7.41999 3.66992 7.00999C3.66992 6.59999 4.00992 6.25999 4.41992 6.25999C4.82992 6.25999 5.16992 6.58999 5.16992 6.99999V7.00999C5.16992 7.41999 4.82992 7.75999 4.41992 7.75999Z" fill="none" /><path d="M23.17 12.88C22.69 12.88 22.29 12.49 22.29 12.01V12C22.29 11.52 22.68 11.12 23.17 11.12C23.66 11.12 24.05 11.51 24.05 12C24.05 12.49 23.65 12.88 23.17 12.88Z" fill="none" /><path d="M20.9697 17.75C20.5597 17.75 20.2197 17.42 20.2197 17V16.99C20.2197 16.58 20.5597 16.24 20.9697 16.24C21.3797 16.24 21.7197 16.58 21.7197 16.99C21.7197 17.4 21.3797 17.75 20.9697 17.75Z" fill="none" /><path d="M20.9697 7.75999C20.5597 7.75999 20.2197 7.41999 20.2197 7.00999C20.2197 6.59999 20.5597 6.25999 20.9697 6.25999C21.3797 6.25999 21.7197 6.58999 21.7197 7.00999V7.01999C21.7197 7.41999 21.3797 7.75999 20.9697 7.75999Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCardanoAda as IconComponentType).keywords = [
  "cardano",
  "ada",
  "solana",
  "ethereum",
  "algorand",
  "eos.io",
  "dash",
  "monero",
  "augur",
  "nano",
  "ethereum classic",
  "paa",
  "rcc",
  "acls",
  "acl",
  "pcd",
  "water",
  "aal",
  "aia",
  "ama"
];

export default IconCardanoAda as IconComponentType;