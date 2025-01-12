import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconVideoCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9.76953 12V10.52C9.76953 8.61001 11.1195 7.84001 12.7695 8.79001L14.0495 9.53001L15.3295 10.27C16.9795 11.22 16.9795 12.78 15.3295 13.73L14.0495 14.47L12.7695 15.21C11.1195 16.16 9.76953 15.38 9.76953 13.48V12Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path d="M9.76953 12V10.52C9.76953 8.61 11.1195 7.84 12.7695 8.79L14.0495 9.53L15.3295 10.27C16.9795 11.22 16.9795 12.78 15.3295 13.73L14.0495 14.47L12.7695 15.21C11.1195 16.16 9.76953 15.38 9.76953 13.48V12Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM15.3299 13.73L14.0499 14.47L12.7699 15.21C11.1199 16.16 9.76992 15.38 9.76992 13.48V12V10.52C9.76992 8.61 11.1199 7.84 12.7699 8.79L14.0499 9.53L15.3299 10.27C16.9799 11.22 16.9799 12.78 15.3299 13.73Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconVideoCircle;