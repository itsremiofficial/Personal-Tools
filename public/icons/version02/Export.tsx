import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconExport: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M9.99023 6.50043L12.5502 3.94043L15.1102 6.50043" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.5508 14.1798V4.00977" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M4.66992 12C4.66992 16.42 7.66992 20 12.6699 20C17.6699 20 20.6699 16.42 20.6699 12" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6699 10.76C22.6699 10.29 22.2899 9.90002 21.8099 9.90002H3.52992C3.04992 9.90002 2.66992 10.28 2.66992 10.76C2.66992 16.65 6.77992 20.76 12.6699 20.76C18.5599 20.76 22.6699 16.64 22.6699 10.76Z" fill="currentColor" /><path d="M13.1998 3.46004L16.0498 6.30004C16.3398 6.59004 16.3398 7.07004 16.0498 7.36004C15.7598 7.65004 15.2798 7.65004 14.9898 7.36004L13.4198 5.80004V15.37C13.4198 15.78 13.0798 16.12 12.6698 16.12C12.2598 16.12 11.9198 15.78 11.9198 15.37V5.80004L10.3598 7.37004C10.0698 7.66004 9.58982 7.66004 9.29982 7.37004C9.14982 7.22004 9.06982 7.03004 9.06982 6.84004C9.06982 6.65004 9.13982 6.46004 9.28982 6.31004L12.1398 3.47004C12.4298 3.17004 12.9098 3.17004 13.1998 3.46004Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.8099 9.90002H13.4199V15.38C13.4199 15.79 13.0799 16.13 12.6699 16.13C12.2599 16.13 11.9199 15.79 11.9199 15.38V9.90002H3.52992C3.04992 9.90002 2.66992 10.28 2.66992 10.76C2.66992 16.65 6.77992 20.76 12.6699 20.76C18.5599 20.76 22.6699 16.65 22.6699 10.76C22.6699 10.28 22.2899 9.90002 21.8099 9.90002Z" fill="currentColor" /><path d="M13.4198 5.80005L14.9798 7.36005C15.2698 7.65005 15.7498 7.65005 16.0398 7.36005C16.3298 7.07005 16.3298 6.59005 16.0398 6.30005L13.1898 3.46005C12.8998 3.17005 12.4198 3.17005 12.1298 3.46005L9.28982 6.31005C9.14982 6.46005 9.06982 6.65005 9.06982 6.84005C9.06982 7.03005 9.13982 7.22005 9.28982 7.37005C9.57982 7.66005 10.0598 7.66005 10.3498 7.37005L11.9098 5.81005V9.90005H13.4098V5.80005H13.4198Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconExport;