import { FC } from 'react';
import { IconProps } from "../../types";

const IconRefreshCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M8.00977 14.5099C8.18977 14.8099 8.40976 15.09 8.65976 15.34C10.4998 17.18 13.4898 17.18 15.3398 15.34C16.0898 14.59 16.5198 13.6399 16.6598 12.6699" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.33984 11.3298C7.47984 10.3498 7.90985 9.40979 8.65985 8.65979C10.4999 6.81979 13.4898 6.81979 15.3398 8.65979C15.5998 8.91979 15.8098 9.1998 15.9898 9.4898" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.82031 17.1797V14.5098H10.4903" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.1797 6.81982V9.48981H13.5098" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M14.55 22.42C14.22 22.42 13.91 22.2 13.82 21.86C13.72 21.46 13.95 21.05 14.35 20.94C18.41 19.87 21.24 16.19 21.24 11.99C21.24 6.89 17.09 2.74 11.99 2.74C7.66 2.74 4.82 5.27 3.49 6.8H6.43C6.84 6.8 7.18 7.14 7.18 7.55C7.18 7.96 6.86 8.31 6.44 8.31H2.01C1.94 8.31 1.87 8.3 1.8 8.28C1.71 8.25 1.63 8.21 1.56 8.16C1.47 8.1 1.4 8.02 1.35 7.93C1.3 7.83 1.26 7.73 1.25 7.62C1.25 7.59 1.25 7.57 1.25 7.54V3C1.25 2.59 1.59 2.25 2 2.25C2.41 2.25 2.75 2.59 2.75 3V5.39C4.38 3.64 7.45 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 16.88 19.46 21.16 14.74 22.4C14.68 22.41 14.61 22.42 14.55 22.42Z" fill="currentColor" /><path d="M11.29 22.73C11.27 22.73 11.24 22.73 11.22 22.72C10.15 22.65 9.1 22.41 8.1 22.02C7.81 21.91 7.62 21.62 7.62 21.31C7.62 21.22 7.64 21.13 7.67 21.05C7.82 20.67 8.26 20.47 8.64 20.62C9.5 20.96 10.41 21.16 11.33 21.23H11.34C11.74 21.25 12.04 21.59 12.04 21.99C12.04 22 12.04 22.02 12.04 22.03C12.01 22.42 11.68 22.73 11.29 22.73ZM5.78 20.58C5.61 20.58 5.45 20.53 5.31 20.42C4.47 19.75 3.74 18.96 3.13 18.07C3.04 17.94 2.99 17.8 2.99 17.65C2.99 17.4 3.11 17.17 3.32 17.03C3.65 16.8 4.14 16.89 4.36 17.22C4.89 17.99 5.52 18.67 6.25 19.24C6.42 19.38 6.53 19.59 6.53 19.82C6.53 19.99 6.48 20.16 6.37 20.3C6.23 20.48 6.01 20.58 5.78 20.58ZM2.44 15.7C2.11 15.7 1.82 15.49 1.73 15.18C1.41 14.15 1.25 13.08 1.25 12C1.25 11.59 1.59 11.25 2 11.25C2.41 11.25 2.75 11.59 2.75 12C2.75 12.93 2.89 13.85 3.16 14.73C3.18 14.8 3.19 14.88 3.19 14.96C3.19 15.29 2.98 15.57 2.67 15.67C2.59 15.69 2.52 15.7 2.44 15.7Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconRefreshCircle;