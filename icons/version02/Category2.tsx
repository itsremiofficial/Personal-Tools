import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconCategory2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6699 10H19.6699C21.6699 10 22.6699 9 22.6699 7V5C22.6699 3 21.6699 2 19.6699 2H17.6699C15.6699 2 14.6699 3 14.6699 5V7C14.6699 9 15.6699 10 17.6699 10Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.66992 22H7.66992C9.66992 22 10.6699 21 10.6699 19V17C10.6699 15 9.66992 14 7.66992 14H5.66992C3.66992 14 2.66992 15 2.66992 17V19C2.66992 21 3.66992 22 5.66992 22Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M6.66992 10C8.87906 10 10.6699 8.20914 10.6699 6C10.6699 3.79086 8.87906 2 6.66992 2C4.46078 2 2.66992 3.79086 2.66992 6C2.66992 8.20914 4.46078 10 6.66992 10Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M18.6699 22C20.8791 22 22.6699 20.2091 22.6699 18C22.6699 15.7909 20.8791 14 18.6699 14C16.4608 14 14.6699 15.7909 14.6699 18C14.6699 20.2091 16.4608 22 18.6699 22Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.3399 2H17.4399C15.2599 2 14.1099 3.15 14.1099 5.33V7.23C14.1099 9.41 15.2599 10.56 17.4399 10.56H19.3399C21.5199 10.56 22.6699 9.41 22.6699 7.23V5.33C22.6699 3.15 21.5199 2 19.3399 2Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M7.90992 13.4302H6.00992C3.81992 13.4302 2.66992 14.5802 2.66992 16.7602V18.6602C2.66992 20.8502 3.81992 22.0002 5.99992 22.0002H7.89992C10.0799 22.0002 11.2299 20.8502 11.2299 18.6702V16.7702C11.2399 14.5802 10.0899 13.4302 7.90992 13.4302Z" fill="currentColor" /><path d="M6.95992 10.58C9.32922 10.58 11.2499 8.6593 11.2499 6.29C11.2499 3.9207 9.32922 2 6.95992 2C4.59062 2 2.66992 3.9207 2.66992 6.29C2.66992 8.6593 4.59062 10.58 6.95992 10.58Z" fill="currentColor" /><path d="M18.3798 21.9999C20.7491 21.9999 22.6698 20.0792 22.6698 17.7099C22.6698 15.3406 20.7491 13.4199 18.3798 13.4199C16.0105 13.4199 14.0898 15.3406 14.0898 17.7099C14.0898 20.0792 16.0105 21.9999 18.3798 21.9999Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.3399 2H17.4399C15.2599 2 14.1099 3.15 14.1099 5.33V7.23C14.1099 9.41 15.2599 10.56 17.4399 10.56H19.3399C21.5199 10.56 22.6699 9.41 22.6699 7.23V5.33C22.6699 3.15 21.5199 2 19.3399 2Z" fill="currentColor" /><path d="M7.90992 13.4302H6.00992C3.81992 13.4302 2.66992 14.5802 2.66992 16.7602V18.6602C2.66992 20.8502 3.81992 22.0002 5.99992 22.0002H7.89992C10.0799 22.0002 11.2299 20.8502 11.2299 18.6702V16.7702C11.2399 14.5802 10.0899 13.4302 7.90992 13.4302Z" fill="currentColor" /><path d="M6.95992 10.58C9.32922 10.58 11.2499 8.6593 11.2499 6.29C11.2499 3.9207 9.32922 2 6.95992 2C4.59062 2 2.66992 3.9207 2.66992 6.29C2.66992 8.6593 4.59062 10.58 6.95992 10.58Z" fill="currentColor" /><path d="M18.3798 21.9999C20.7491 21.9999 22.6698 20.0792 22.6698 17.7099C22.6698 15.3406 20.7491 13.4199 18.3798 13.4199C16.0105 13.4199 14.0898 15.3406 14.0898 17.7099C14.0898 20.0792 16.0105 21.9999 18.3798 21.9999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCategory2;