import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconZoom: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} fillRule="evenodd" clipRule="evenodd" d="M6.66992 9.67999V12.48C6.66992 14.02 7.91993 15.26 9.45993 15.25L13.1399 15.22C13.6499 15.22 14.0599 14.8 14.0599 14.3V11.53C14.0599 10 12.8199 8.76001 11.2899 8.76001H7.59991C7.07991 8.76001 6.66992 9.16999 6.66992 9.67999Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} fillRule="evenodd" clipRule="evenodd" d="M18.6699 9.23999V14.78L15.8999 12.93V11.09L18.6699 9.23999Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M6.91992 9.68001V12.48C6.91992 14.02 8.16993 15.26 9.70993 15.25L13.3899 15.22C13.8999 15.22 14.3099 14.8 14.3099 14.3V11.53C14.3099 10 13.0699 8.76001 11.5399 8.76001H7.84991C7.32991 8.76001 6.91992 9.17001 6.91992 9.68001Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M18.4199 10.02V14C18.4199 14.43 17.9399 14.69 17.5799 14.45L15.6599 13.17C15.5099 13.07 15.4199 12.9 15.4199 12.72V11.3C15.4199 11.12 15.5099 10.95 15.6599 10.85L17.5799 9.57C17.9399 9.33 18.4199 9.59 18.4199 10.02Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM14.2999 14.29C14.2999 14.8 13.8899 15.21 13.3799 15.21L9.69992 15.24C8.15992 15.25 6.90991 14.01 6.90991 12.47V9.67001C6.90991 9.16001 7.31993 8.75 7.82993 8.75H11.5199C13.0499 8.75 14.2899 9.98999 14.2899 11.52V14.29H14.2999ZM18.4199 14C18.4199 14.43 17.9399 14.69 17.5799 14.45L15.6599 13.17C15.5099 13.07 15.4199 12.9 15.4199 12.72V11.3C15.4199 11.12 15.5099 10.95 15.6599 10.85L17.5799 9.57001C17.9399 9.33001 18.4199 9.58999 18.4199 10.02V14Z" fill="none" /></svg> 
      )}
    </>
  );
};

export default IconZoom;