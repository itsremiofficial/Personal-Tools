import { FC } from 'react';
import { IconProps } from "../../types";

const IconPersonalcard: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 21H7C3 21 2 20 2 16V8C2 4 3 3 7 3H17C21 3 22 4 22 8V16C22 20 21 21 17 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M14 8H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17 16H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.50043 11.2899C9.50007 11.2899 10.3104 10.4796 10.3104 9.47992C10.3104 8.48029 9.50007 7.66992 8.50043 7.66992C7.50079 7.66992 6.69043 8.48029 6.69043 9.47992C6.69043 10.4796 7.50079 11.2899 8.50043 11.2899Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 16.3298C11.86 14.8798 10.71 13.7398 9.26 13.6098C8.76 13.5598 8.25 13.5598 7.74 13.6098C6.29 13.7498 5.14 14.8798 5 16.3298" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M8.31976 16.0201C8.12976 16.0201 7.93977 15.9501 7.78977 15.8001C7.49977 15.5101 7.49977 15.0301 7.78977 14.7401L14.3398 8.19016C14.6298 7.90016 15.1098 7.90016 15.3998 8.19016C15.6898 8.48016 15.6898 8.96015 15.3998 9.25015L8.84976 15.8001C8.69976 15.9501 8.50976 16.0201 8.31976 16.0201Z" fill="currentColor" /><path d="M8.73001 7.66016C7.92001 7.66016 7.25 8.32017 7.25 9.14017C7.25 9.95017 7.91001 10.6201 8.73001 10.6201C9.54001 10.6201 10.21 9.96017 10.21 9.14017C10.2 8.32017 9.54001 7.66016 8.73001 7.66016Z" fill="currentColor" /><path d="M15.269 13.3901C14.459 13.3901 13.7891 14.0501 13.7891 14.8701C13.7891 15.6801 14.449 16.3501 15.269 16.3501C16.079 16.3501 16.7491 15.6901 16.7491 14.8701C16.7491 14.0501 16.089 13.3901 15.269 13.3901Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconPersonalcard;