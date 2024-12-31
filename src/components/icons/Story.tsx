import { FC } from 'react';
import { IconProps } from "../../types";

const IconStrongbox: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M14.3511 10.9101C14.2511 11.6201 13.8311 12.2201 13.2511 12.5801V14.5601C13.2511 15.2501 12.6911 15.8101 12.0011 15.8101C11.3111 15.8101 10.7511 15.2501 10.7511 14.5601V12.5801C10.1711 12.2201 9.75109 11.6201 9.65109 10.9101C9.63109 10.8001 9.62109 10.6801 9.62109 10.5601C9.62109 9.04012 11.0611 7.86012 12.6411 8.28012C13.4411 8.49012 14.0911 9.14012 14.3011 9.94012C14.3911 10.2701 14.4011 10.6001 14.3511 10.9101Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path d="M21.9996 10.9102H14.3496" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path d="M9.64999 10.9102H2" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z" fill="currentColor" /><path d="M10.7695 16.23H13.2295C14.8895 16.23 16.2295 14.89 16.2295 13.23V10.77C16.2295 9.11002 14.8895 7.77002 13.2295 7.77002H10.7695C9.10953 7.77002 7.76953 9.11002 7.76953 10.77V13.23C7.76953 14.89 9.10953 16.23 10.7695 16.23Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconStrongbox;