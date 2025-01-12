import { FC } from 'react';

const IconFramer: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.66992 2L19.6699 16H5.66992V9H19.6699V2H5.66992Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 16V22L5.66992 16H12.6699Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path d="M5.16992 10.49V16.4299C5.16992 16.7399 5.30992 17.04 5.53992 17.24L10.8999 21.83C11.5999 22.43 12.6699 21.93 12.6699 21.02V16.92H17.5799C18.5299 16.92 19.0099 15.77 18.3399 15.09L12.6699 9.41995H6.23993C5.64993 9.40995 5.16992 9.88996 5.16992 10.49Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M19.0997 1.91003H7.75972C6.80972 1.91003 6.32971 3.06004 6.99971 3.74004L12.6697 9.41003H19.0997C19.6897 9.41003 20.1697 8.93003 20.1697 8.34003V2.98003C20.1697 2.39003 19.6897 1.91003 19.0997 1.91003Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.16992 10.49V16.43C5.16992 16.74 5.30992 17.04 5.53992 17.24L10.8999 21.83C11.5999 22.43 12.6699 21.93 12.6699 21.02V16.92H17.5799C18.5299 16.92 19.0099 15.77 18.3399 15.09L12.6699 9.42001H6.23993C5.64993 9.41001 5.16992 9.88999 5.16992 10.49Z" fill="none" /><path d="M19.0997 1.91H7.75972C6.80972 1.91 6.32971 3.05999 6.99971 3.73999L12.6697 9.41H19.0997C19.6897 9.41 20.1697 8.93 20.1697 8.34V2.98001C20.1697 2.39001 19.6897 1.91 19.0997 1.91Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFramer as IconComponent).keywords = [
  "framer",
  "framemaker",
  "cabinetmaker",
  "builder",
  "tiler",
  "carpenter",
  "plasterer",
  "fabricator",
  "painter",
  "needleworker"
];

export default IconFramer as IconComponent;