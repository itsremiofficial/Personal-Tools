import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPenClose: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M21.1901 8.0399L18.0101 4.85991C16.8101 3.65991 15.1601 3.71993 14.3501 5.00993L12.5801 7.80992L18.2501 13.4799L21.0501 11.7099C22.2601 10.9399 22.3301 9.1699 21.1901 8.0399Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.2506 13.4697L18.4906 17.5897C18.7206 19.8897 17.9206 20.6897 15.7406 20.9497L7.0206 21.9797C5.1806 22.1897 3.8606 20.8698 4.0806 19.0398L5.06059 10.7598" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.5801 7.81018L10.8301 7.7002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.28125 20.7799L8.46126 17.5898" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M11 6.5C11 6.91 10.94 7.32001 10.83 7.70001C10.72 8.10001 10.56 8.47001 10.35 8.82001C10.11 9.22001 9.81001 9.58 9.46001 9.88C8.67001 10.58 7.64 11 6.5 11C5.99 11 5.51 10.92 5.06 10.76C4.04 10.42 3.18999 9.72001 2.64999 8.82001C2.23999 8.14001 2 7.34 2 6.5C2 5.08 2.65 3.80999 3.69 2.98999C4.46 2.36999 5.44 2 6.5 2C8.99 2 11 4.01 11 6.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.7003 7.67981L5.32031 5.2998" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.68077 5.31982L5.30078 7.69983" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.7111 11.3499L18.7011 13.2499L12.6211 7.16993L14.5111 4.15992C15.3911 2.76992 17.1611 2.70995 18.4511 3.99995L21.8611 7.40992C23.0811 8.63992 23.0011 10.5299 21.7111 11.3499Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.0003 21.2898L6.64034 22.3898C5.99034 22.4698 5.41034 22.3698 4.92034 22.1298C4.40034 21.8698 3.99034 21.4698 3.73034 20.9398C3.49034 20.4498 3.40034 19.8798 3.47034 19.2398L4.51033 10.5298C4.68033 10.6198 4.87034 10.6998 5.06034 10.7598C5.51034 10.9198 5.99034 10.9998 6.50034 10.9998C7.64034 10.9998 8.67035 10.5798 9.46035 9.87982C9.81035 9.57982 10.1103 9.21982 10.3503 8.81982C10.5603 8.46982 10.7203 8.09983 10.8303 7.69983C10.8903 7.49983 10.9303 7.28982 10.9603 7.06982L12.6203 7.1698L18.7003 13.2598L18.9603 17.6798C19.2103 20.1598 18.3503 21.0198 16.0003 21.2898Z" fill="currentColor" /><path d="M8.78023 18.2798L4.93022 22.1298C4.40022 21.8698 4.00023 21.4698 3.74023 20.9398L7.59023 17.0898C7.93023 16.7598 8.46023 16.7598 8.78023 17.0898C9.11023 17.4198 9.11023 17.9498 8.78023 18.2798Z" fill="currentColor" /><path d="M6.5 2C5.44 2 4.46 2.36999 3.69 2.98999C2.65 3.80999 2 5.08 2 6.5C2 7.34 2.23999 8.14001 2.64999 8.82001C3.08999 9.55001 3.72999 10.15 4.50999 10.53C4.67999 10.62 4.87 10.7 5.06 10.76C5.51 10.92 5.99 11 6.5 11C7.64 11 8.67001 10.58 9.46001 9.88C9.81001 9.58 10.11 9.22001 10.35 8.82001C10.56 8.47001 10.72 8.10001 10.83 7.70001C10.89 7.50001 10.93 7.29001 10.96 7.07001C10.99 6.88001 11 6.69 11 6.5C11 4.01 8.99 2 6.5 2ZM8.23 8.21002C8.08 8.36002 7.89 8.42999 7.7 8.42999C7.51 8.42999 7.32 8.36002 7.17 8.21002L6.50999 7.54999L5.82001 8.23999C5.67001 8.38999 5.47999 8.46002 5.28999 8.46002C5.09999 8.46002 4.90999 8.38999 4.75999 8.23999C4.46999 7.94999 4.46999 7.46999 4.75999 7.17999L5.45 6.48999L4.78999 5.83002C4.49999 5.54002 4.49999 5.06002 4.78999 4.77002C5.07999 4.48002 5.56001 4.48002 5.85001 4.77002L6.50999 5.42999L7.14 4.79999C7.43 4.50999 7.91 4.50999 8.2 4.79999C8.49 5.08999 8.49 5.56999 8.2 5.85999L7.57001 6.48999L8.23 7.15002C8.53 7.44002 8.53 7.91002 8.23 8.21002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPenClose as IconComponentType).keywords = [
  "pen",
  "close",
  "playpen",
  "penitentiary",
  "compose",
  "indite",
  "write",
  "paddock",
  "corral",
  "basin",
  "sty",
  "confining",
  "restrained",
  "end",
  "terminus",
  "finis",
  "conclusion",
  "ending",
  "finish",
  "shut"
];

export default IconPenClose as IconComponentType;