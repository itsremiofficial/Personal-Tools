import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRepeateOne: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.0002 3L16.4402 5.34003L8.49023 5.32001C4.92023 5.32001 1.99023 8.25003 1.99023 11.84C1.99023 13.63 2.72024 15.26 3.90024 16.44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.0005 21.0001L7.56055 18.66L15.5106 18.6801C19.0806 18.6801 22.0106 15.75 22.0106 12.16C22.0106 10.37 21.2806 8.74006 20.1006 7.56006" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.25 14.67V9.33008L10.75 11.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M3.91 17.1799C3.72 17.1799 3.53 17.1099 3.38 16.9599C2.01 15.5799 1.25 13.7599 1.25 11.8299C1.25 7.81994 4.5 4.55992 8.5 4.55992L14.57 4.57994L13.48 3.5399C13.18 3.2499 13.17 2.77991 13.46 2.47991C13.75 2.17991 14.22 2.16995 14.52 2.45995L16.96 4.79991C17.18 5.00991 17.25 5.33992 17.14 5.61992C17.03 5.89992 16.75 6.08995 16.44 6.08995L8.48999 6.06993C5.31999 6.06993 2.73999 8.65995 2.73999 11.84C2.73999 13.37 3.33999 14.8199 4.42999 15.9099C4.71999 16.1999 4.71999 16.6799 4.42999 16.9699C4.28999 17.1099 4.1 17.1799 3.91 17.1799Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M9.99991 21.75C9.80991 21.75 9.62992 21.6799 9.47992 21.5399L7.03992 19.2C6.81992 18.99 6.7499 18.66 6.8599 18.38C6.9799 18.1 7.25991 17.9499 7.55991 17.9099L15.5099 17.93C18.6799 17.93 21.2599 15.3399 21.2599 12.1599C21.2599 10.6299 20.6599 9.18 19.5699 8.09C19.2799 7.8 19.2799 7.32 19.5699 7.03C19.8599 6.74 20.3399 6.74 20.6299 7.03C21.9999 8.41 22.7599 10.2299 22.7599 12.1599C22.7599 16.1699 19.5099 19.43 15.5099 19.43L9.43991 19.4099L10.5299 20.45C10.8299 20.74 10.8399 21.21 10.5499 21.51C10.3899 21.67 10.1999 21.75 9.99991 21.75Z" fill="currentColor" /><path d="M12.2505 15.4201C11.8405 15.4201 11.5005 15.0801 11.5005 14.6701V11.2801L11.3105 11.4901C11.0305 11.8001 10.5605 11.8201 10.2505 11.5501C9.94049 11.2801 9.92049 10.8001 10.1905 10.4901L11.6905 8.82008C11.9005 8.59008 12.2305 8.51007 12.5205 8.62007C12.8105 8.73007 13.0005 9.01008 13.0005 9.32008V14.6701C13.0005 15.0901 12.6605 15.4201 12.2505 15.4201Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRepeateOne as IconComponentType).keywords = [
  "repeate",
  "one",
  "combined",
  "united",
  "same",
  "unity",
  "unitary",
  "cardinal",
  "one and only",
  "extraordinary"
];

export default IconRepeateOne as IconComponentType;