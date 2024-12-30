import { FC } from 'react';
import { IconProps } from "../../types";

const IconPath2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3195_3382)"><path d="M9.87007 22.0001H14.1601C15.7801 22.0001 16.8501 20.8401 16.5301 19.4301L15.8401 16.3501H8.20007L7.51007 19.4301C7.20007 20.7601 8.34007 22.0001 9.87007 22.0001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.8292 16.3501L18.7692 13.7401C20.4092 12.2801 20.4792 11.2601 19.1792 9.61012L13.9892 3.03012C12.8992 1.65012 11.1192 1.65012 10.0192 3.03012L4.83916 9.61012C3.53916 11.2601 3.53916 12.3301 5.24916 13.7401L8.18916 16.3501" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.0098 2.66992V6.96992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><defs><clipPath ><rect width="24" height="24" fill="none" /></clipPath></defs></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15 22C14.59 22 14.25 21.66 14.25 21.25V2.75C14.25 2.34 14.59 2 15 2C15.41 2 15.75 2.34 15.75 2.75V21.25C15.75 21.66 15.41 22 15 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M6.5 20H12.5V4H6.5C4.29 4 2.5 5.79 2.5 8V16C2.5 18.21 4.29 20 6.5 20Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18 20H15V4H18C20.21 4 22 5.79 22 8V16C22 18.21 20.21 20 18 20Z" fill="currentColor" /><path d="M5.75 12.9999C5.62 12.9999 5.49 12.9699 5.37 12.9199C5.25 12.8699 5.14 12.7999 5.04 12.7099C4.95 12.6099 4.88 12.4999 4.82 12.3799C4.77 12.2599 4.75 12.1299 4.75 11.9999C4.75 11.7399 4.86 11.4799 5.04 11.2899C5.09 11.2499 5.14 11.2099 5.19 11.1699C5.25 11.1299 5.31 11.0999 5.37 11.0799C5.43 11.0499 5.49 11.0299 5.55 11.0199C5.89 10.9499 6.23 11.0599 6.46 11.2899C6.64 11.4799 6.75 11.7399 6.75 11.9999C6.75 12.1299 6.72 12.2599 6.67 12.3799C6.62 12.4999 6.55 12.6099 6.46 12.7099C6.36 12.7999 6.25 12.8699 6.13 12.9199C6.01 12.9699 5.88 12.9999 5.75 12.9999Z" fill="currentColor" /><path d="M9.25 13C9.12 13 8.99 12.97 8.87 12.92C8.75 12.87 8.64 12.8 8.54 12.71C8.35 12.52 8.25 12.27 8.25 12C8.25 11.87 8.28 11.74 8.33 11.62C8.38 11.49 8.45 11.39 8.54 11.29C8.91 10.92 9.58 10.92 9.96 11.29C10.14 11.48 10.25 11.74 10.25 12C10.25 12.13 10.22 12.26 10.17 12.38C10.12 12.5 10.05 12.61 9.96 12.71C9.86 12.8 9.75 12.87 9.63 12.92C9.51 12.97 9.38 13 9.25 13Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconPath2;