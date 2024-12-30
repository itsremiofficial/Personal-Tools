import { FC } from 'react';
import { IconProps } from "../../types";

const IconBox1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M3.16992 7.44043L11.9999 12.5504L20.7699 7.47043" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 21.61V12.54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9.93062 2.47979L4.59063 5.43979C3.38063 6.10979 2.39062 7.78979 2.39062 9.16979V14.8198C2.39062 16.1998 3.38063 17.8798 4.59063 18.5498L9.93062 21.5198C11.0706 22.1498 12.9406 22.1498 14.0806 21.5198L19.4206 18.5498C20.6306 17.8798 21.6206 16.1998 21.6206 14.8198V9.16979C21.6206 7.78979 20.6306 6.10979 19.4206 5.43979L14.0806 2.46979C12.9306 1.83979 11.0706 1.83979 9.93062 2.47979Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 5.30019V21.3302C12.17 21.3302 12.35 21.3002 12.49 21.2202L12.53 21.2002C14.45 20.1502 17.8 19.0502 19.97 18.7602L20.26 18.7202C21.22 18.6002 22 17.7002 22 16.7402V4.66018C22 3.47018 21.03 2.57019 19.84 2.67019C17.74 2.84019 14.56 3.90022 12.78 5.01022L12.53 5.16018C12.38 5.25018 12.19 5.30019 12 5.30019Z" fill="currentColor" /><path d="M2 4.67002V16.74C2 17.7 2.77999 18.6 3.73999 18.72L4.07001 18.76C6.25001 19.05 9.61003 20.16 11.53 21.22C11.66 21.3 11.82 21.3301 12 21.3301V5.30002C11.81 5.30002 11.62 5.25001 11.47 5.16001L11.3 5.05002C9.51999 3.93002 6.32998 2.86003 4.22998 2.68003H4.16998C2.97998 2.58003 2 3.47002 2 4.67002Z" fill="currentColor" /><path d="M19 2.78027V7.07025C19 7.47025 18.56 7.71023 18.22 7.49023L17 6.68024L15.78 7.49023C15.45 7.71023 15 7.47025 15 7.07025V3.92023C16.31 3.40023 17.77 2.98027 19 2.78027Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBox1;