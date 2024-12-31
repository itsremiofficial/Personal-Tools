import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPenAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M21.1901 8.0399L18.0101 4.85991C16.8101 3.65991 15.1601 3.71993 14.3501 5.00993L12.5801 7.80992L18.2501 13.4799L21.0501 11.7099C22.2601 10.9399 22.3301 9.1699 21.1901 8.0399Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.2506 13.4697L18.4906 17.5897C18.7206 19.8897 17.9206 20.6897 15.7406 20.9497L7.0206 21.9797C5.1806 22.1897 3.8606 20.8698 4.0806 19.0398L5.06059 10.7598" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.5801 7.81018L10.8301 7.7002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.28125 20.7799L8.46126 17.5898" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M11 6.5C11 6.91 10.94 7.32001 10.83 7.70001C10.72 8.10001 10.56 8.47001 10.35 8.82001C10.11 9.22001 9.81001 9.58 9.46001 9.88C8.67001 10.58 7.64 11 6.5 11C5.99 11 5.51 10.92 5.06 10.76C4.04 10.42 3.18999 9.72001 2.64999 8.82001C2.23999 8.14001 2 7.34 2 6.5C2 5.08 2.65 3.80999 3.69 2.98999C4.46 2.36999 5.44 2 6.5 2C8.99 2 11 4.01 11 6.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.52148 8.17981V4.81982" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.16078 6.5H4.80078" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.7111 11.3499L18.7011 13.2499L12.6211 7.16993L14.5111 4.15992C15.3911 2.76992 17.1611 2.70995 18.4511 3.99995L21.8611 7.40992C23.0811 8.63992 23.0011 10.5299 21.7111 11.3499Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.0003 21.2898L6.64034 22.3898C5.99034 22.4698 5.41034 22.3698 4.92034 22.1298C4.40034 21.8698 3.99034 21.4698 3.73034 20.9398C3.49034 20.4498 3.40034 19.8798 3.47034 19.2398L4.51033 10.5298C4.68033 10.6198 4.87034 10.6998 5.06034 10.7598C5.51034 10.9198 5.99034 10.9998 6.50034 10.9998C7.64034 10.9998 8.67035 10.5798 9.46035 9.87982C9.81035 9.57982 10.1103 9.21982 10.3503 8.81982C10.5603 8.46982 10.7203 8.09983 10.8303 7.69983C10.8903 7.49983 10.9303 7.28982 10.9603 7.06982L12.6203 7.1698L18.7003 13.2598L18.9603 17.6798C19.2103 20.1598 18.3503 21.0198 16.0003 21.2898Z" fill="currentColor" /><path d="M8.78023 18.2798L4.93022 22.1298C4.40022 21.8698 4.00023 21.4698 3.74023 20.9398L7.59023 17.0898C7.93023 16.7598 8.46023 16.7598 8.78023 17.0898C9.11023 17.4198 9.11023 17.9498 8.78023 18.2798Z" fill="currentColor" /><path d="M6.5 2C5.44 2 4.46 2.36999 3.69 2.98999C2.65 3.80999 2 5.08 2 6.5C2 7.34 2.23999 8.14001 2.64999 8.82001C3.18999 9.72001 4.04 10.42 5.06 10.76C5.51 10.92 5.99 11 6.5 11C7.64 11 8.67001 10.58 9.46001 9.88C9.81001 9.58 10.11 9.22001 10.35 8.82001C10.56 8.47001 10.72 8.10001 10.83 7.70001C10.94 7.32001 11 6.91 11 6.5C11 4.01 8.99 2 6.5 2ZM8.16 7.25H7.27V8.17999C7.27 8.58999 6.93 8.92999 6.52 8.92999C6.11 8.92999 5.77 8.58999 5.77 8.17999V7.25H4.8C4.39 7.25 4.05 6.91 4.05 6.5C4.05 6.09 4.39 5.75 4.8 5.75H5.77V4.82001C5.77 4.41001 6.11 4.07001 6.52 4.07001C6.93 4.07001 7.27 4.41001 7.27 4.82001V5.75H8.16C8.57 5.75 8.91 6.09 8.91 6.5C8.91 6.91 8.58 7.25 8.16 7.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPenAdd as IconComponentType).keywords = [
  "pen",
  "add",
  "playpen",
  "penitentiary",
  "compose",
  "indite",
  "write",
  "paddock",
  "corral",
  "basin",
  "sty",
  "total",
  "sum up",
  "tot up",
  "add up",
  "sum",
  "summate",
  "impart",
  "contribute",
  "supply"
];

export default IconPenAdd as IconComponentType;