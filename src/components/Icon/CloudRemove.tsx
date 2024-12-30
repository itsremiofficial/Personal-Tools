import { FC } from 'react';
import { IconProps } from "../../types";

const IconCloudRemove: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.9704 17.61L10.8604 15.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.9501 15.52L10.8301 17.64" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M5.5393 11.1201C0.859297 11.4501 0.859297 18.2601 5.5393 18.5901H7.4593" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.59003 11.1201C2.38003 2.19014 15.92 -1.37985 17.47 8.00015C21.8 8.55015 23.55 14.3201 20.27 17.1901C19.27 18.1001 17.98 18.6001 16.63 18.5901H16.54" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M17 16.5298C17 17.2698 16.84 17.9698 16.54 18.5898C16.46 18.7698 16.37 18.9398 16.27 19.0998C15.41 20.5498 13.82 21.5298 12 21.5298C10.18 21.5298 8.59 20.5498 7.73 19.0998C7.63 18.9398 7.54 18.7698 7.46 18.5898C7.16 17.9698 7 17.2698 7 16.5298C7 13.7698 9.24 11.5298 12 11.5298C14.76 11.5298 17 13.7698 17 16.5298Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.74 11.7401C21.13 9.74005 19.61 8.30005 17.7 7.87005C17.14 5.37005 15.6 3.58005 13.42 2.90005C11.04 2.17005 8.28 2.88005 6.55 4.69005C5.02 6.28005 4.52 8.47005 5.11 10.8001C2.98 11.3201 2 13.1801 2 14.8601C2 16.7401 3.23 18.8501 5.97 19.0401H8.5V16.4101C8.5 15.1401 9.26 14.3801 10.53 14.3801H13.47C14.74 14.3801 15.5 15.1401 15.5 16.4101V19.0401H16.31C16.32 19.0401 16.34 19.0401 16.35 19.0401C17.77 19.0401 19.13 18.5101 20.17 17.5601C21.8 16.1401 22.4 13.9101 21.74 11.7401Z" fill="currentColor" /><path d="M13.47 14.3899H10.53C9.26 14.3899 8.5 15.1499 8.5 16.4199V19.3599C8.5 20.6299 9.26 21.3899 10.53 21.3899H13.47C14.74 21.3899 15.5 20.6299 15.5 19.3599V16.4199C15.5 15.1499 14.74 14.3899 13.47 14.3899ZM13.67 18.0499L12 19.9499L11.8 20.1799C11.53 20.4899 11.3 20.4099 11.3 19.9899V18.2099H10.54C10.19 18.2099 10.1 17.9999 10.33 17.7399L12 15.8399L12.2 15.6099C12.47 15.2999 12.7 15.3799 12.7 15.7999V17.5799H13.46C13.81 17.5699 13.9 17.7899 13.67 18.0499Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCloudRemove;