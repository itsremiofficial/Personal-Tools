import { FC } from 'react';
import { IconProps } from "../../types";

const IconCodeCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M8 10L6 12L8 14" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16 10L18 12L16 14" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M13 9.66992L11 14.33" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.74 11.7401C21.13 9.74005 19.61 8.30005 17.7 7.87005C17.14 5.37005 15.6 3.58005 13.42 2.90005C11.04 2.17005 8.28 2.88005 6.55 4.69005C5.02 6.28005 4.52 8.47005 5.11 10.8001C2.98 11.3201 2 13.1801 2 14.8601C2 16.7401 3.23 18.8501 5.97 19.0401H8.5V16.4101C8.5 15.1401 9.26 14.3801 10.53 14.3801H13.47C14.74 14.3801 15.5 15.1401 15.5 16.4101V19.0401H16.31C16.32 19.0401 16.34 19.0401 16.35 19.0401C17.77 19.0401 19.13 18.5101 20.17 17.5601C21.8 16.1401 22.4 13.9101 21.74 11.7401Z" fill="currentColor" /><path d="M13.47 14.3899H10.53C9.26 14.3899 8.5 15.1499 8.5 16.4199V19.3599C8.5 20.6299 9.26 21.3899 10.53 21.3899H13.47C14.74 21.3899 15.5 20.6299 15.5 19.3599V16.4199C15.5 15.1499 14.74 14.3899 13.47 14.3899ZM10.5 17.6299C10.08 17.6299 9.75 17.2899 9.75 16.8799C9.75 16.4699 10.08 16.1299 10.5 16.1299C10.92 16.1299 11.25 16.4699 11.25 16.8799C11.25 17.2899 10.91 17.6299 10.5 17.6299ZM12 19.8799C11.59 19.8799 11.25 19.5399 11.25 19.1299C11.25 18.7199 11.59 18.3799 12 18.3799C12.41 18.3799 12.75 18.7199 12.75 19.1299C12.75 19.5399 12.42 19.8799 12 19.8799ZM13.51 17.6299C13.09 17.6299 12.76 17.2899 12.76 16.8799C12.76 16.4699 13.09 16.1299 13.51 16.1299C13.93 16.1299 14.26 16.4699 14.26 16.8799C14.26 17.2899 13.92 17.6299 13.51 17.6299Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCodeCircle;