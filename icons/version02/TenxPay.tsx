import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconTenxPay: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6699 12L9.41992 8.75L6.16992 12L9.41992 15.25L15.9199 8.75L19.1699 12L15.9199 15.25L12.6699 12Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path d="M12.6699 12L10.1299 9.45998C9.7399 9.06998 9.1099 9.06998 8.7199 9.45998L6.8799 11.3C6.4899 11.69 6.4899 12.32 6.8799 12.71L8.7199 14.55C9.1099 14.94 9.7399 14.94 10.1299 14.55L15.2199 9.45998C15.6099 9.06998 16.2399 9.06998 16.6299 9.45998L18.4699 11.3C18.8599 11.69 18.8599 12.32 18.4699 12.71L16.6299 14.55C16.2399 14.94 15.6099 14.94 15.2199 14.55L12.6699 12Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM18.4599 12.71L16.6199 14.55C16.2299 14.94 15.5999 14.94 15.2099 14.55L12.6699 12L10.1299 14.54C9.73991 14.93 9.10991 14.93 8.71991 14.54L6.87991 12.7C6.48991 12.31 6.48991 11.68 6.87991 11.29L8.71991 9.45C9.10991 9.06 9.73991 9.06 10.1299 9.45L12.6699 12L15.2099 9.46001C15.5999 9.07001 16.2299 9.07001 16.6199 9.46001L18.4599 11.3C18.8499 11.68 18.8499 12.32 18.4599 12.71Z" fill="none" /></svg> 
      )}
    </>
  );
};

export default IconTenxPay;