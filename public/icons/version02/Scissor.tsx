import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconScissor: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.16992 10C8.10292 10 9.66992 8.433 9.66992 6.5C9.66992 4.567 8.10292 3 6.16992 3C4.23693 3 2.66992 4.567 2.66992 6.5C2.66992 8.433 4.23693 10 6.16992 10Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M6.16992 21C8.10292 21 9.66992 19.433 9.66992 17.5C9.66992 15.567 8.10292 14 6.16992 14C4.23693 14 2.66992 15.567 2.66992 17.5C2.66992 19.433 4.23693 21 6.16992 21Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M22.6703 6L9.32031 15.98" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6703 17.97L9.32031 7.97998" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.16992 10C8.10292 10 9.66992 8.433 9.66992 6.5C9.66992 4.567 8.10292 3 6.16992 3C4.23693 3 2.66992 4.567 2.66992 6.5C2.66992 8.433 4.23693 10 6.16992 10Z" fill="currentColor" /><path d="M6.16992 21C8.10292 21 9.66992 19.433 9.66992 17.5C9.66992 15.567 8.10292 14 6.16992 14C4.23693 14 2.66992 15.567 2.66992 17.5C2.66992 19.433 4.23693 21 6.16992 21Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.92 11.98L23.12 6.60003C23.45 6.35003 23.52 5.88003 23.27 5.55003C23.02 5.22003 22.55 5.15003 22.22 5.40003L14.67 11.05L9.12 6.90003C8.79 6.65003 8.31998 6.72003 8.06998 7.05003C7.81998 7.38003 7.88998 7.85003 8.21998 8.10003L13.42 11.99L7.52 16.41C7.19 16.66 7.12 17.13 7.37 17.46C7.52 17.66 7.73998 17.76 7.96998 17.76C8.12998 17.76 8.27999 17.71 8.41999 17.61L14.68 12.93L22.23 18.58C22.36 18.68 22.52 18.73 22.68 18.73C22.91 18.73 23.13 18.63 23.28 18.43C23.53 18.1 23.46 17.63 23.13 17.38L15.92 11.98Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.16992 10C8.10292 10 9.66992 8.433 9.66992 6.5C9.66992 4.567 8.10292 3 6.16992 3C4.23693 3 2.66992 4.567 2.66992 6.5C2.66992 8.433 4.23693 10 6.16992 10Z" fill="currentColor" /><path d="M6.16992 21C8.10292 21 9.66992 19.433 9.66992 17.5C9.66992 15.567 8.10292 14 6.16992 14C4.23693 14 2.66992 15.567 2.66992 17.5C2.66992 19.433 4.23693 21 6.16992 21Z" fill="currentColor" /><path d="M15.92 11.98L23.12 6.60003C23.45 6.35003 23.52 5.88003 23.27 5.55003C23.02 5.22003 22.55 5.15003 22.22 5.40003L14.67 11.05L9.12 6.89003C8.79 6.65003 8.32 6.71003 8.07 7.04003C7.82 7.37003 7.89 7.84003 8.22 8.09003L13.42 11.98L7.52 16.4C7.19 16.65 7.12 17.12 7.37 17.45C7.52 17.65 7.74 17.75 7.97 17.75C8.13 17.75 8.28 17.7 8.42 17.6L14.67 12.92L22.22 18.57C22.35 18.67 22.51 18.72 22.67 18.72C22.9 18.72 23.12 18.62 23.27 18.42C23.52 18.09 23.45 17.62 23.12 17.37L15.92 11.98Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconScissor;