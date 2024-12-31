import { FC } from 'react';
import { IconProps } from "@/types";

const IconSearchFavorite: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 11C20 15.97 15.97 20 11 20C6.03 20 2 15.97 2 11C2 6.03 6.03 2 11 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M13.4999 6.13008C13.1499 5.03008 13.5599 3.66008 14.7199 3.29008C15.3299 3.09008 16.0799 3.26008 16.5099 3.85008C16.9099 3.24008 17.6899 3.10008 18.2899 3.29008C19.4499 3.66008 19.8599 5.03008 19.5099 6.13008C18.9599 7.88008 17.0399 8.79008 16.5099 8.79008C15.9699 8.79008 14.0699 7.90008 13.4999 6.13008Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.9304 20.6898C19.4604 22.2898 20.6704 22.4498 21.6004 21.0498C22.4504 19.7698 21.8904 18.7198 20.3504 18.7198C19.2104 18.7098 18.5704 19.5998 18.9304 20.6898Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.0002 20.01C15.9763 20.01 20.0102 15.9761 20.0102 11C20.0102 6.0239 15.9763 1.98999 11.0002 1.98999C6.02415 1.98999 1.99023 6.0239 1.99023 11C1.99023 15.9761 6.02415 20.01 11.0002 20.01Z" fill="currentColor" /><path d="M12.7699 8.2901C12.1399 8.0901 11.4699 8.2101 10.9899 8.5801C10.4999 8.2101 9.84993 8.0901 9.21993 8.2901C7.85993 8.7301 7.42993 10.2801 7.80993 11.4601C8.38993 13.2701 10.2999 14.2101 10.9899 14.2101C11.6599 14.2101 13.6099 13.2501 14.1699 11.4601C14.5599 10.2801 14.1299 8.7301 12.7699 8.2901Z" fill="currentColor" /><path d="M21.9901 18.95C21.6601 18.34 20.9601 18 20.0201 18C19.3101 18 18.7001 18.29 18.3401 18.79C17.9801 19.29 17.9001 19.96 18.1201 20.63C18.5501 21.93 19.3001 22.22 19.7101 22.27C19.7701 22.28 19.8301 22.28 19.9001 22.28C20.3401 22.28 21.0201 22.09 21.6801 21.1C22.2101 20.33 22.3101 19.56 21.9901 18.95Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSearchFavorite;