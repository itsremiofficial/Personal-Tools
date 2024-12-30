import { FC } from 'react';
import { IconProps } from "../../types";

const IconClock1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 9.66016V12.4502L13.4 13.8502" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.5 12C5.5 8.41 8.41 5.5 12 5.5C15.59 5.5 18.5 8.41 18.5 12C18.5 14.08 17.52 15.94 16 17.13H15.99C14.89 17.99 13.51 18.5 12 18.5C10.51 18.5 9.14 18 8.04 17.15H8.03C6.49 15.96 5.5 14.1 5.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.03027 17.1499H8.04027C9.14027 17.9999 10.5103 18.4999 12.0003 18.4999C13.5103 18.4999 14.8903 17.9899 15.9903 17.1299H16.0003L15.4903 19.5999C15.0003 21.4999 13.9003 21.9999 12.5503 21.9999H11.4603C10.1103 21.9999 9.00027 21.4999 8.52027 19.5899L8.03027 17.1499Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.03027 6.85H8.04027C9.14027 6 10.5103 5.5 12.0003 5.5C13.5103 5.5 14.8903 6.01 15.9903 6.87H16.0003L15.4903 4.4C15.0003 2.5 13.9003 2 12.5503 2H11.4603C10.1103 2 9.00027 2.5 8.52027 4.41L8.03027 6.85Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.2391 3.6499H7.75906C5.28906 3.6499 3.28906 5.6599 3.28906 8.1199V17.5299C3.28906 19.9899 5.29906 21.9999 7.75906 21.9999H16.2291C18.6991 21.9999 20.6991 19.9899 20.6991 17.5299V8.1199C20.7091 5.6499 18.6991 3.6499 16.2391 3.6499Z" fill="currentColor" /><path d="M14.3498 2H9.64977C8.60977 2 7.75977 2.84 7.75977 3.88V4.82C7.75977 5.86 8.59977 6.7 9.63977 6.7H14.3498C15.3898 6.7 16.2298 5.86 16.2298 4.82V3.88C16.2398 2.84 15.3898 2 14.3498 2Z" fill="currentColor" /><path d="M14.9995 13.2499C14.5895 13.2499 14.2495 13.5899 14.2495 13.9999V15.1899L9.52945 10.4699C9.23945 10.1799 8.75945 10.1799 8.46945 10.4699C8.17945 10.7599 8.17945 11.2399 8.46945 11.5299L13.1895 16.2499H11.9995C11.5895 16.2499 11.2495 16.5899 11.2495 16.9999C11.2495 17.4099 11.5895 17.7499 11.9995 17.7499H14.9995C15.4095 17.7499 15.7495 17.4099 15.7495 16.9999V13.9999C15.7495 13.5899 15.4095 13.2499 14.9995 13.2499Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconClock1;