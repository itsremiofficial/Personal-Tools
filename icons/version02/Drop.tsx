import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconDrop: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2802 2.21C12.9202 1.93 12.4202 1.93 12.0602 2.21C10.1602 3.66 4.5502 8.39 4.5802 13.9C4.5802 18.36 8.2102 22 12.6802 22C17.1502 22 20.7802 18.37 20.7802 13.91C20.7902 8.48 15.1702 3.67 13.2802 2.21Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2604 7.41L6.98037 17.69C6.50037 18.17 5.68037 18.06 5.39037 17.45C4.87037 16.38 4.57037 15.17 4.57037 13.9C4.55037 8.38 10.1504 3.66 12.0504 2.21C12.4204 1.93 12.9204 1.93 13.2804 2.21C14.1504 2.87 15.7804 4.24 17.3104 6.04C17.6504 6.44 17.6304 7.04 17.2604 7.41Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.7699 13.91C20.7699 18.37 17.1399 22 12.6699 22C10.8799 22 9.20989 21.42 7.85989 20.42C7.36989 20.06 7.32989 19.34 7.75989 18.91L17.8299 8.84002C18.2999 8.37002 19.0899 8.47002 19.4099 9.05002C20.2299 10.56 20.7799 12.2 20.7699 13.91Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2604 7.41L6.98037 17.69C6.50037 18.17 5.68037 18.06 5.39037 17.45C4.87037 16.38 4.57037 15.17 4.57037 13.9C4.55037 8.38 10.1504 3.66 12.0504 2.21C12.4204 1.93 12.9204 1.93 13.2804 2.21C14.1504 2.87 15.7804 4.24 17.3104 6.04C17.6504 6.44 17.6304 7.04 17.2604 7.41Z" fill="currentColor" /><path d="M20.7699 13.91C20.7699 18.37 17.1399 22 12.6699 22C10.8799 22 9.20989 21.42 7.85989 20.42C7.36989 20.06 7.32989 19.34 7.75989 18.91L17.8299 8.84002C18.2999 8.37002 19.0899 8.47002 19.4099 9.05002C20.2299 10.56 20.7799 12.2 20.7699 13.91Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDrop;